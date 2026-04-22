"use strict";
let r, i, s;
n.d(t, { A: () => eE }), n(321073), n(938796);
var a = n(735438),
    o = n.n(a),
    l = n(158390),
    u = n(311907),
    d = n(52133),
    c = n(451988),
    _ = n(73153),
    f = n(717558),
    E = n(573648),
    h = n(504337),
    p = n(626584),
    m = n(15285),
    g = n(961350),
    A = n(962173),
    I = n(885576),
    T = n(290863),
    S = n(485296),
    y = n(977997),
    N = n(954571),
    O = n(139675),
    R = n(927813),
    v = n(403362),
    C = n(107750),
    b = n(272984),
    D = n(652215);
let L = E.A.get(D.fg2.SPOTIFY),
    w = "hm://pusher/v1/connections/",
    M = 30 * R.A.Millis.SECOND,
    P = 30 * R.A.Millis.SECOND,
    U = 5 * R.A.Millis.MINUTE,
    k = 5 * R.A.Millis.SECOND,
    x = 1.5 * R.A.Millis.SECOND,
    G = +R.A.Millis.MINUTE,
    V = 3 * R.A.Millis.SECOND,
    F = new p.A("Spotify"),
    B = new c.Ep(),
    H = new c.Ep(),
    Y = new c.Ep(),
    W = new c.Ep(),
    j = new c.Ep(),
    K = {},
    $ = {},
    z = {},
    q = !1,
    X = null;
function Q() {
    for (let e in K) {
        let t = K[e];
        if (!t.connected || null == $[e]) continue;
        let n = $[e].find((e) => e.is_active);
        if (null != n) return { socket: t, device: n };
    }
}
function J(e) {
    _.h.dispatch({
        type: "SPOTIFY_PLAYER_STATE",
        accountId: e,
        track: null,
        volumePercent: 0,
        isPlaying: !1,
        repeat: !1,
        position: 0,
        context: null,
    });
}
function Z(e) {
    return T.A.findActivity(e, (e) => null != e.party && null != e.party.id && (0, b.pH)(e.party.id));
}
let ee = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class et {
    accessToken;
    accountId;
    connectionId;
    isPremium;
    pingInterval;
    backoff;
    socket;
    _requestedDisconnect = !1;
    _requestedConnect = !1;
    constructor(e, t) {
        (this.accountId = e),
            (this.accessToken = t),
            (this.pingInterval = new c.IX()),
            (this.backoff = new l.A(void 0, G)),
            this.connect();
    }
    get connected() {
        return null != this.socket && ee.has(this.socket.readyState);
    }
    connect() {
        this.connected ||
            this._requestedConnect ||
            (F.info("WS Connecting"),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            ec(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1),
                        (this.socket = new WebSocket(`wss://dealer.spotify.com/?access_token=${this.accessToken}`)),
                        (this.socket.onopen = this.handleOpen.bind(this)),
                        (this.socket.onmessage = this.handleMessage.bind(this)),
                        (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    F.error(e), (this._requestedConnect = !1), this.handleClose();
                }));
    }
    disconnect() {
        (this._requestedDisconnect = !0), this.backoff.cancel();
        try {
            this.socket?.close();
        } catch (e) {}
    }
    ping() {
        this.connected && this.socket?.send(JSON.stringify({ type: "ping" }));
    }
    handleOpen() {
        F.info("WS Connected"),
            this.backoff.succeed(),
            this.pingInterval.start(M, () => this.ping()),
            (0, C.E$)(this.accountId, this.accessToken),
            (0, C.oG)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ("string" != typeof t) return;
        let { type: n, uri: r, payloads: i } = JSON.parse(t);
        if ("message" === n) {
            if ("string" == typeof r && r.startsWith(w))
                (this.connectionId = decodeURIComponent(r.split(w)[1])),
                    (0, C.tO)(this.accountId, this.accessToken, this.connectionId);
            else if (Array.isArray(i)) {
                for (let { events: e } of i) if (null != e) for (let t of e) this.handleEvent(t);
            }
        }
    }
    handleClose() {
        if ((this.pingInterval.stop(), !this._requestedDisconnect))
            try {
                let e = this.backoff.fail(() => {
                    this._requestedDisconnect || this.connect();
                });
                F.info(`WS Disconnected. Next retry in ${Math.round(e)}ms`);
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case "PLAYER_STATE_CHANGED":
                null != n && null != n.state && ed(this.accountId, this.accessToken, n.state);
                break;
            case "DEVICE_STATE_CHANGED":
                this.handleDeviceStateChange();
        }
    }
    handleDeviceStateChange = o().throttle(() => {
        (0, C.oG)(this.accountId, this.accessToken), ec(this.accountId, this.accessToken);
    }, V);
}
function en(e, t) {
    e in K
        ? ((K[e].accessToken = t), F.info(`Updated account access token: ${e}`))
        : ((K[e] = new et(e, t)), F.info(`Added account: ${e}`));
}
function er(e) {
    if (!(e in K)) return;
    K[e].disconnect(), delete K[e];
    let t = z[e];
    null != t && null != r && t.track.id === r.track.id && (r = null), delete z[e], F.info(`Removed account: ${e}`);
}
function ei(e, t) {
    for (let n of $[e]) n.is_active = n.id === t;
}
function es(e, t, n) {
    let r = Q();
    if (null == r) return !1;
    let { socket: s, device: a } = r,
        { sync_id: o, party: l, timestamps: u } = t;
    if (null == o || null == l || null == l.id || !(0, b.pH)(l.id)) return !1;
    let d = null != u && null != u.start ? u.start : Date.now(),
        c = Math.max(0, Date.now() - d),
        _ = !1,
        f = z[s.accountId];
    null != f && !1 === f.repeat && (_ = null);
    let E = (0, b.NJ)(t.metadata?.type ?? b.M0.TRACK);
    if (null == E) return;
    (0, C.ZH)(s.accountId, s.accessToken, o, E, { position: +c, deviceId: a.id, repeat: _ }),
        (i = { userId: e, partyId: l.id, trackId: o, startTime: d });
    let h = "presence change";
    n && ((h = "started"), N.default.track(D.HAw.SPOTIFY_LISTEN_ALONG_STARTED, { party_id: l.id, other_user_id: e })),
        F.info(`Listen along ${h}: ${s.accountId} to ${e} playing ${o} on ${a.name}`);
}
function ea() {
    N.default.track(D.HAw.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != i ? i.partyId : null,
        other_user_id: null != i ? i.userId : null,
    });
    let e = null != i ? i.trackId : null;
    (i = null), F.info("Listen along stopped");
    let t = Q();
    if (null == t) return;
    let { socket: n } = t,
        r = z[n.accountId];
    null != r && r.track.id === e && (0, C.v7)(n.accountId, n.accessToken);
}
function eo() {
    let e = Object.keys(K),
        t = A.A.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === D.fg2.SPOTIFY;
        });
    if (null == t) return !1;
    let n = t.map((e) => {
        let { id: t } = e;
        return t;
    });
    for (let t of e) n.includes(t) || er(t);
    let i = !1;
    for (let n of t)
        if ((null != r && r.account.id === n.id && ((r.account = n), (i = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                en(n.id, n.accessToken);
                continue;
            }
            (0, C.iD)(n.id);
        }
    return i;
}
function el() {
    if (null == r) return;
    let e = Q();
    if (null == e) return;
    let { socket: t } = e;
    (q = !0),
        (0, C.v7)(t.accountId, t.accessToken),
        N.default.track(D.HAw.SPOTIFY_AUTO_PAUSED),
        F.info("Playback auto paused");
}
function eu(e) {
    if (e === g.default.getId()) {
        let t = y.A.isCurrentClientInVoiceChannel(),
            n = (0, f.R)({ userId: e, checkSoundSharing: !0, checkSoundboardSounds: !1 });
        t && n && null != r ? (B.start(P, el, !1), H.stop()) : H.start(100, () => B.stop(), !1);
    }
    return !1;
}
function ed(e, t, n) {
    let r,
        i,
        { device: s, progress_ms: a, is_playing: o, repeat_state: l, item: u, context: d } = n;
    if (null != u && u.type === b.M0.TRACK) {
        let e = u.id;
        null != u.linked_from && null != u.linked_from.id && (e = u.linked_from.id),
            (r = {
                id: e,
                name: u.name,
                duration: u.duration_ms,
                type: b.M0.TRACK,
                album: {
                    id: u.album?.id ?? "",
                    name: u.album?.name ?? "",
                    image: u.album?.images[0],
                    type: u.album?.type ?? b.M0.ALBUM,
                },
                artists: Array.isArray(u.artists) ? u.artists.filter((e) => (0, v.Vq)(e.id) && (0, v.Vq)(e.name)) : [],
                isLocal: u.is_local || !1,
            });
    } else
        null != u &&
            u.type === b.M0.EPISODE &&
            (r = {
                id: u.id,
                name: u.name,
                duration: u.duration_ms,
                type: b.M0.EPISODE,
                album: {
                    id: u.show?.id ?? "",
                    name: u.show?.name ?? "",
                    image: u.show?.images[0],
                    type: u.album?.type ?? b.M0.SHOW,
                },
                artists: [],
                isLocal: !1,
            });
    if (
        (null != s && !0 !== s.is_active && (s = { ...s, is_active: !0 }),
        null != d && [b.M0.PLAYLIST, b.M0.ALBUM].includes(d.type))
    ) {
        let n = ef.getPlayerState(e);
        i =
            null != n && null != n.context && n.context.uri === d.uri
                ? Promise.resolve(n.context)
                : d.type === b.M0.ALBUM
                  ? Promise.resolve(d)
                  : C.tB
                        .get(e, t, { url: d.href })
                        .then((e) => {
                            let { body: t } = e;
                            return t;
                        })
                        .catch((e) => {
                            if (e && 404 === e.status) return null;
                            throw e;
                        });
    } else i = Promise.resolve(void 0);
    return i.then((t) => {
        null == t || t.type !== b.M0.PLAYLIST || t.public || (t = null),
            _.h.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: e,
                track: r,
                volumePercent: null != s ? s.volume_percent : 0,
                isPlaying: o,
                repeat: "off" !== l,
                position: a,
                context: t,
                device: s,
            });
    });
}
function ec(e, t) {
    return C.tB
        .get(e, t, {
            url: b.RQ.PLAYER,
            query: { additional_types: `${b.M0.TRACK},${b.M0.EPISODE}` },
            onlyRetryOnAuthorizationErrors: !0,
        })
        .then((n) => {
            let r = n.body;
            null != r ? ed(e, t, r).then(() => n) : J(e);
        })
        .catch(() => J(e));
}
class e_ extends u.Ay.Store {
    static displayName = "SpotifyStore";
    initialize() {
        this.waitFor(g.default, A.A, I.A, T.A, m.Ay, S.A, y.A),
            this.syncWith([T.A], () =>
                (function () {
                    if (null == i || null == Q()) return !1;
                    let { userId: e } = i,
                        t = Z(e);
                    if (null == t)
                        return (
                            Y.start(U, () => {
                                null != i && i.userId === e && (0, h.A)();
                            }),
                            !1
                        );
                    Y.stop();
                    let { sync_id: n, timestamps: r, party: s } = t,
                        a = null != n && i.trackId !== n,
                        o = null != r && i.startTime !== r.start;
                    return a || o ? es(e, t, !1) : null != s && s.id !== i.partyId && ((i.partyId = s.id), !0);
                })(),
            ),
            (0, C.f0)();
    }
    hasConnectedAccount() {
        return Object.keys(K).length > 0;
    }
    getActiveSocketAndDevice() {
        return Q();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in K) {
            let n = K[t];
            if (!n.connected || null == $[t]) continue;
            let r = $[t].find((e) => !e.is_restricted && "Computer" === e.type);
            null != r && e.push({ socket: n, device: r });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != Q() && null != t && null != n && null != n.id && (0, b.pH)(n.id);
    }
    getSyncingWith() {
        return i;
    }
    wasAutoPaused() {
        return q;
    }
    getLastPlayedTrackId() {
        return s;
    }
    getTrack() {
        return null != r ? r.track : null;
    }
    getPlayerState(e) {
        return z[e];
    }
    shouldShowActivity() {
        return null != r && r.account.showActivity && !I.A.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == r) return null != i ? Z(i.userId) : null;
        let {
                track: { artists: s, album: a, name: o, id: l, duration: u, isLocal: d, type: c },
                startTime: _,
                context: f,
            } = r,
            E = s.slice(0, 5);
        s.length > 0 &&
            (e = E.map((e) => {
                let { name: t } = e;
                return t.replace(/;/g, "");
            }).join("; "));
        let h = {},
            p = null != a.image ? (0, O.Di)(D.fg2.SPOTIFY, a.image.url) : null;
        null != a.image && null != p && (h.large_image = p),
            "single" !== a.type && (h.large_text = a.name),
            null != f && (t = f.uri),
            (n = null != i && null != i.partyId ? i.partyId : `${b.HS}${g.default.getId()}`);
        let m = o.length > 128 ? o.substring(0, 125) + "..." : o,
            A = {
                context_uri: t,
                album_id: a.id,
                artist_ids: E.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: c,
                button_urls: [],
            },
            I = {
                name: L.name,
                assets: h,
                details: m,
                state: e,
                timestamps: { start: _, end: _ + u },
                party: { id: n },
            };
        return d || ((I.sync_id = l), (I.flags = D.jUm.PLAY | D.jUm.SYNC), (I.metadata = A)), I;
    }
}
let ef = new e_(_.h, {
        USER_CONNECTIONS_UPDATE: eo,
        CONNECTION_OPEN: eo,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: function (e) {
            let { accountId: t, accessToken: n } = e;
            return en(t, n), !1;
        },
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function (e) {
            let { accountId: t } = e;
            er(t);
        },
        SPOTIFY_PROFILE_UPDATE: function (e) {
            let { accountId: t, isPremium: n } = e,
                r = K[t];
            if (null == r) return !1;
            (r.isPremium = n), F.info(`Profile updated for ${t}: isPremium = ${n}`);
        },
        SPOTIFY_PLAYER_STATE: function (e) {
            let t,
                n,
                s,
                { accountId: a, isPlaying: l, repeat: u, track: c, position: f, device: E, context: p } = e,
                m = !1;
            if (null != E)
                if (null != $[a]) {
                    let e = $[a].find((e) => {
                        let { id: t } = e;
                        return t === E.id;
                    });
                    null == e ? ($[a].push(E), (m = !0)) : (0, d.A)(e, E) || (Object.assign(e, E), (m = !0)),
                        ei(a, E.id);
                } else ($[a] = [E]), (m = !0);
            l ? X?.start(P, el) : ((c = null), X?.stop());
            let I = A.A.getAccount(a, D.fg2.SPOTIFY);
            if (null == I) return m;
            let T = z[a],
                S =
                    null != c
                        ? {
                              account: I,
                              track: c,
                              startTime:
                                  ((t = Date.now()),
                                  (n = null != T ? T.startTime : 0),
                                  Math.abs((s = t - f) - n) > x ? s : n),
                              context: p,
                              repeat: u,
                          }
                        : null,
                y = null != E && null != i && 0 === f && !l;
            y || (z[a] = S);
            let O = r;
            if (
                ((r = o()
                    .values(z)
                    .find((e) => null != e)),
                eu(g.default.getId()),
                null == c || y ? W.stop() : W.start(c.duration - f + k, () => J(I.id)),
                null != i && ((!l && f > 0) || null == E || (null != S && i.trackId !== S.track.id))
                    ? (F.info(
                          `Listen along active but playback stopped or track changed. Stopping listen along in ${k}ms`,
                      ),
                      j.start(k, () => {
                          F.info("Stopping listening along"), (0, h.A)(), J(I.id);
                      }))
                    : j.isStarted() && (F.info("Listen along stop cancelled as playback of track resumed"), j.stop()),
                O === r ||
                    (null == T && null == S) ||
                    (null != T && null != S && T.track.id === S.track.id && T.startTime === S.startTime))
            )
                return m;
            null != c &&
                (_.h.dispatch({ type: "SPOTIFY_NEW_TRACK", track: c, connectionId: a }),
                N.default.track(D.HAw.ACTIVITY_UPDATED, {
                    party_platform: D.fg2.SPOTIFY,
                    track_id: c.id,
                    has_images: !0,
                    details: c.album.name,
                    state: c.name,
                    album_id: c.album.id,
                    author_ids: c.artists.map((e) => e.id),
                    author_names: c.artists.map((e) => e.name),
                }));
        },
        SPOTIFY_PLAYER_PLAY: function (e) {
            let { id: t } = e;
            s = t;
        },
        ACTIVITY_PLAY: function (e) {
            let t,
                { activity: n, metadata: r } = e,
                s = Q();
            if (null == s) return !1;
            let { socket: a, device: o } = s,
                { sync_id: l, party: u } = n;
            return (
                null != l &&
                null != u &&
                null != u.id &&
                !!(0, b.pH)(u.id) &&
                (null != r && (t = r.context_uri),
                null != i && ea(),
                null != r &&
                    void ((0, C.ZH)(a.accountId, a.accessToken, l, r.type ?? b.M0.TRACK, {
                        contextUri: t,
                        deviceId: o.id,
                    }),
                    F.info(`Play started: ${a.accountId} playing ${l} on ${o.name}`)))
            );
        },
        ACTIVITY_SYNC: function (e) {
            let { activity: t, userId: n } = e;
            return es(n, t, !0);
        },
        ACTIVITY_SYNC_STOP: ea,
        SPOTIFY_SET_DEVICES: function (e) {
            let { accountId: t, devices: n } = e;
            ($[t] = n), F.info(`Devices updated for ${t}:`, n);
        },
        SPOTIFY_SET_ACTIVE_DEVICE: function (e) {
            let { accountId: t, deviceId: n } = e;
            ei(t, n);
        },
        SPEAKING: function (e) {
            let { userId: t } = e;
            return eu(t);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { userId: n } = t;
                return eu(n) || e;
            }, !1);
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            let { settings: t } = e;
            if (t?.desktopSettings != null) {
                X?.stop();
                let { sourceId: e, sound: n } = t?.desktopSettings;
                null != e && m.Ay.getObservedAppNameForWindow(e) === L.name && n
                    ? (X = new c.IX()).start(P, el)
                    : (X?.stop(), (X = null));
            } else null == t && (X?.stop(), (X = null));
        },
    }),
    eE = ef;
