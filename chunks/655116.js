"use strict";
let i, r, s;
n.d(t, { A: () => ef }), n(321073), n(938796);
var a = n(735438),
    o = n.n(a),
    l = n(158390),
    u = n(17928),
    c = n(52133),
    d = n(451988),
    _ = n(228366),
    h = n(717558),
    f = n(573648),
    p = n(504337),
    E = n(626584),
    m = n(952818),
    g = n(495544),
    A = n(30370),
    I = n(885576),
    T = n(290863),
    S = n(485296),
    y = n(977997),
    C = n(174459),
    N = n(970928),
    v = n(927813),
    R = n(403362),
    O = n(107750),
    b = n(272984),
    D = n(652215);
let L = f.A.get(D.fg2.SPOTIFY),
    w = "hm://pusher/v1/connections/",
    M = 30 * v.A.Millis.SECOND,
    P = 30 * v.A.Millis.SECOND,
    x = 5 * v.A.Millis.MINUTE,
    k = 5 * v.A.Millis.SECOND,
    U = 1.5 * v.A.Millis.SECOND,
    G = +v.A.Millis.MINUTE,
    F = 3 * v.A.Millis.SECOND,
    V = new E.A("Spotify"),
    B = new d.Ep(),
    j = new d.Ep(),
    H = new d.Ep(),
    Y = new d.Ep(),
    W = new d.Ep(),
    K = {},
    $ = {},
    z = {},
    q = !1,
    Z = null;
function X() {
    for (let e in K) {
        let t = K[e];
        if (!t.connected || null == $[e]) continue;
        let n = $[e].find((e) => e.is_active);
        if (null != n) return { socket: t, device: n };
    }
}
function Q(e) {
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
function J(e) {
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
            (this.pingInterval = new d.IX()),
            (this.backoff = new l.A(void 0, G)),
            this.connect();
    }
    get connected() {
        return null != this.socket && ee.has(this.socket.readyState);
    }
    connect() {
        this.connected ||
            this._requestedConnect ||
            (V.info("WS Connecting"),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            ed(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1),
                        (this.socket = new WebSocket(`wss://dealer.spotify.com/?access_token=${this.accessToken}`)),
                        (this.socket.onopen = this.handleOpen.bind(this)),
                        (this.socket.onmessage = this.handleMessage.bind(this)),
                        (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    V.error(e), (this._requestedConnect = !1), this.handleClose();
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
        V.info("WS Connected"),
            this.backoff.succeed(),
            this.pingInterval.start(M, () => this.ping()),
            (0, O.E$)(this.accountId, this.accessToken),
            (0, O.oG)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ("string" != typeof t) return;
        let { type: n, uri: i, payloads: r } = JSON.parse(t);
        if ("message" === n) {
            if ("string" == typeof i && i.startsWith(w))
                (this.connectionId = decodeURIComponent(i.split(w)[1])),
                    (0, O.tO)(this.accountId, this.accessToken, this.connectionId);
            else if (Array.isArray(r)) {
                for (let { events: e } of r) if (null != e) for (let t of e) this.handleEvent(t);
            }
        }
    }
    handleClose() {
        if ((this.pingInterval.stop(), !this._requestedDisconnect))
            try {
                let e = this.backoff.fail(() => {
                    this._requestedDisconnect || this.connect();
                });
                V.info(`WS Disconnected. Next retry in ${Math.round(e)}ms`);
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case "PLAYER_STATE_CHANGED":
                null != n && null != n.state && ec(this.accountId, this.accessToken, n.state);
                break;
            case "DEVICE_STATE_CHANGED":
                this.handleDeviceStateChange();
        }
    }
    handleDeviceStateChange = o().throttle(() => {
        (0, O.oG)(this.accountId, this.accessToken), ed(this.accountId, this.accessToken);
    }, F);
}
function en(e, t) {
    e in K
        ? ((K[e].accessToken = t), V.info(`Updated account access token: ${e}`))
        : ((K[e] = new et(e, t)), V.info(`Added account: ${e}`));
}
function ei(e) {
    if (!(e in K)) return;
    K[e].disconnect(), delete K[e];
    let t = z[e];
    null != t && null != i && t.track.id === i.track.id && (i = null), delete z[e], V.info(`Removed account: ${e}`);
}
function er(e, t) {
    for (let n of $[e]) n.is_active = n.id === t;
}
function es(e, t, n) {
    let i = X();
    if (null == i) return !1;
    let { socket: s, device: a } = i,
        { sync_id: o, party: l, timestamps: u } = t;
    if (null == o || null == l || null == l.id || !(0, b.pH)(l.id)) return !1;
    let c = null != u && null != u.start ? u.start : Date.now(),
        d = Math.max(0, Date.now() - c),
        _ = !1,
        h = z[s.accountId];
    null != h && !1 === h.repeat && (_ = null);
    let f = (0, b.NJ)(t.metadata?.type ?? b.M0.TRACK);
    if (null == f) return;
    (0, O.ZH)(s.accountId, s.accessToken, o, f, { position: +d, deviceId: a.id, repeat: _ }),
        (r = { userId: e, partyId: l.id, trackId: o, startTime: c });
    let p = "presence change";
    n && ((p = "started"), C.default.track(D.HAw.SPOTIFY_LISTEN_ALONG_STARTED, { party_id: l.id, other_user_id: e })),
        V.info(`Listen along ${p}: ${s.accountId} to ${e} playing ${o} on ${a.name}`);
}
function ea() {
    C.default.track(D.HAw.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != r ? r.partyId : null,
        other_user_id: null != r ? r.userId : null,
    });
    let e = null != r ? r.trackId : null;
    (r = null), V.info("Listen along stopped");
    let t = X();
    if (null == t) return;
    let { socket: n } = t,
        i = z[n.accountId];
    null != i && i.track.id === e && (0, O.v7)(n.accountId, n.accessToken);
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
    for (let t of e) n.includes(t) || ei(t);
    let r = !1;
    for (let n of t)
        if ((null != i && i.account.id === n.id && ((i.account = n), (r = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                en(n.id, n.accessToken);
                continue;
            }
            (0, O.iD)(n.id);
        }
    return r;
}
function el() {
    if (null == i) return;
    let e = X();
    if (null == e) return;
    let { socket: t } = e;
    (q = !0),
        (0, O.v7)(t.accountId, t.accessToken),
        C.default.track(D.HAw.SPOTIFY_AUTO_PAUSED),
        V.info("Playback auto paused");
}
function eu(e) {
    if (e === g.default.getId()) {
        let t = y.A.isCurrentClientInVoiceChannel(),
            n = (0, h.R)({ userId: e, checkSoundSharing: !0, checkSoundboardSounds: !1 });
        t && n && null != i ? (B.start(P, el, !1), j.stop()) : j.start(100, () => B.stop(), !1);
    }
    return !1;
}
function ec(e, t, n) {
    let i,
        r,
        { device: s, progress_ms: a, is_playing: o, repeat_state: l, item: u, context: c } = n;
    if (null != u && u.type === b.M0.TRACK) {
        let e = u.id;
        null != u.linked_from && null != u.linked_from.id && (e = u.linked_from.id),
            (i = {
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
                artists: Array.isArray(u.artists) ? u.artists.filter((e) => (0, R.Vq)(e.id) && (0, R.Vq)(e.name)) : [],
                isLocal: u.is_local || !1,
            });
    } else
        null != u &&
            u.type === b.M0.EPISODE &&
            (i = {
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
        null != c && [b.M0.PLAYLIST, b.M0.ALBUM].includes(c.type))
    ) {
        let n = eh.getPlayerState(e);
        r =
            null != n && null != n.context && n.context.uri === c.uri
                ? Promise.resolve(n.context)
                : c.type === b.M0.ALBUM
                  ? Promise.resolve(c)
                  : O.tB
                        .get(e, t, { url: c.href })
                        .then((e) => {
                            let { body: t } = e;
                            return t;
                        })
                        .catch((e) => {
                            if (e && 404 === e.status) return null;
                            throw e;
                        });
    } else r = Promise.resolve(void 0);
    return r.then((t) => {
        null == t || t.type !== b.M0.PLAYLIST || t.public || (t = null),
            _.h.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: e,
                track: i,
                volumePercent: null != s ? s.volume_percent : 0,
                isPlaying: o,
                repeat: "off" !== l,
                position: a,
                context: t,
                device: s,
            });
    });
}
function ed(e, t) {
    return O.tB
        .get(e, t, {
            url: b.RQ.PLAYER,
            query: { additional_types: `${b.M0.TRACK},${b.M0.EPISODE}` },
            onlyRetryOnAuthorizationErrors: !0,
        })
        .then((n) => {
            let i = n.body;
            null != i ? ec(e, t, i).then(() => n) : Q(e);
        })
        .catch(() => Q(e));
}
class e_ extends u.Ay.Store {
    static displayName = "SpotifyStore";
    initialize() {
        this.waitFor(g.default, A.A, I.A, T.A, m.Ay, S.A, y.A),
            this.syncWith([T.A], () =>
                (function () {
                    if (null == r || null == X()) return !1;
                    let { userId: e } = r,
                        t = J(e);
                    if (null == t)
                        return (
                            H.start(x, () => {
                                null != r && r.userId === e && (0, p.A)();
                            }),
                            !1
                        );
                    H.stop();
                    let { sync_id: n, timestamps: i, party: s } = t,
                        a = null != n && r.trackId !== n,
                        o = null != i && r.startTime !== i.start;
                    return a || o ? es(e, t, !1) : null != s && s.id !== r.partyId && ((r.partyId = s.id), !0);
                })(),
            ),
            (0, O.f0)();
    }
    hasConnectedAccount() {
        return Object.keys(K).length > 0;
    }
    getActiveSocketAndDevice() {
        return X();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in K) {
            let n = K[t];
            if (!n.connected || null == $[t]) continue;
            let i = $[t].find((e) => !e.is_restricted && "Computer" === e.type);
            null != i && e.push({ socket: n, device: i });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != X() && null != t && null != n && null != n.id && (0, b.pH)(n.id);
    }
    getSyncingWith() {
        return r;
    }
    wasAutoPaused() {
        return q;
    }
    getLastPlayedTrackId() {
        return s;
    }
    getTrack() {
        return null != i ? i.track : null;
    }
    getPlayerState(e) {
        return z[e];
    }
    shouldShowActivity() {
        return null != i && i.account.showActivity && !I.A.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == i) return null != r ? J(r.userId) : null;
        let {
                track: { artists: s, album: a, name: o, id: l, duration: u, isLocal: c, type: d },
                startTime: _,
                context: h,
            } = i,
            f = s.slice(0, 5);
        s.length > 0 &&
            (e = f
                .map((e) => {
                    let { name: t } = e;
                    return t.replace(/;/g, "");
                })
                .join("; "));
        let p = {},
            E = null != a.image ? (0, N.Di)(D.fg2.SPOTIFY, a.image.url) : null;
        null != a.image && null != E && (p.large_image = E),
            "single" !== a.type && (p.large_text = a.name),
            null != h && (t = h.uri),
            (n = null != r && null != r.partyId ? r.partyId : `${b.HS}${g.default.getId()}`);
        let m = o.length > 128 ? o.substring(0, 125) + "..." : o,
            A = {
                context_uri: t,
                album_id: a.id,
                artist_ids: f.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: d,
                button_urls: [],
            },
            I = {
                name: L.name,
                assets: p,
                details: m,
                state: e,
                timestamps: { start: _, end: _ + u },
                party: { id: n },
            };
        return c || ((I.sync_id = l), (I.flags = D.jUm.PLAY | D.jUm.SYNC), (I.metadata = A)), I;
    }
}
let eh = new e_(_.h, {
        USER_CONNECTIONS_UPDATE: eo,
        CONNECTION_OPEN: eo,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: function (e) {
            let { accountId: t, accessToken: n } = e;
            return en(t, n), !1;
        },
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function (e) {
            let { accountId: t } = e;
            ei(t);
        },
        SPOTIFY_PROFILE_UPDATE: function (e) {
            let { accountId: t, isPremium: n } = e,
                i = K[t];
            if (null == i) return !1;
            (i.isPremium = n), V.info(`Profile updated for ${t}: isPremium = ${n}`);
        },
        SPOTIFY_PLAYER_STATE: function (e) {
            let t,
                n,
                s,
                { accountId: a, isPlaying: l, repeat: u, track: d, position: h, device: f, context: E } = e,
                m = !1;
            if (null != f)
                if (null != $[a]) {
                    let e = $[a].find((e) => {
                        let { id: t } = e;
                        return t === f.id;
                    });
                    null == e ? ($[a].push(f), (m = !0)) : (0, c.A)(e, f) || (Object.assign(e, f), (m = !0)),
                        er(a, f.id);
                } else ($[a] = [f]), (m = !0);
            l ? Z?.start(P, el) : ((d = null), Z?.stop());
            let I = A.A.getAccount(a, D.fg2.SPOTIFY);
            if (null == I) return m;
            let T = z[a],
                S =
                    null != d
                        ? {
                              account: I,
                              track: d,
                              startTime:
                                  ((t = Date.now()),
                                  (n = null != T ? T.startTime : 0),
                                  Math.abs((s = t - h) - n) > U ? s : n),
                              context: E,
                              repeat: u,
                          }
                        : null,
                y = null != f && null != r && 0 === h && !l;
            y || (z[a] = S);
            let N = i;
            if (
                ((i = o()
                    .values(z)
                    .find((e) => null != e)),
                eu(g.default.getId()),
                null == d || y ? Y.stop() : Y.start(d.duration - h + k, () => Q(I.id)),
                null != r && ((!l && h > 0) || null == f || (null != S && r.trackId !== S.track.id))
                    ? (V.info(
                          `Listen along active but playback stopped or track changed. Stopping listen along in ${k}ms`,
                      ),
                      W.start(k, () => {
                          V.info("Stopping listening along"), (0, p.A)(), Q(I.id);
                      }))
                    : W.isStarted() && (V.info("Listen along stop cancelled as playback of track resumed"), W.stop()),
                N === i ||
                    (null == T && null == S) ||
                    (null != T && null != S && T.track.id === S.track.id && T.startTime === S.startTime))
            )
                return m;
            null != d &&
                (_.h.dispatch({ type: "SPOTIFY_NEW_TRACK", track: d, connectionId: a }),
                C.default.track(D.HAw.ACTIVITY_UPDATED, {
                    party_platform: D.fg2.SPOTIFY,
                    track_id: d.id,
                    has_images: !0,
                    details: d.album.name,
                    state: d.name,
                    album_id: d.album.id,
                    author_ids: d.artists.map((e) => e.id),
                    author_names: d.artists.map((e) => e.name),
                }));
        },
        SPOTIFY_PLAYER_PLAY: function (e) {
            let { id: t } = e;
            s = t;
        },
        ACTIVITY_PLAY: function (e) {
            let t,
                { activity: n, metadata: i } = e,
                s = X();
            if (null == s) return !1;
            let { socket: a, device: o } = s,
                { sync_id: l, party: u } = n;
            return (
                null != l &&
                null != u &&
                null != u.id &&
                !!(0, b.pH)(u.id) &&
                (null != i && (t = i.context_uri),
                null != r && ea(),
                null != i &&
                    void ((0, O.ZH)(a.accountId, a.accessToken, l, i.type ?? b.M0.TRACK, {
                        contextUri: t,
                        deviceId: o.id,
                    }),
                    V.info(`Play started: ${a.accountId} playing ${l} on ${o.name}`)))
            );
        },
        ACTIVITY_SYNC: function (e) {
            let { activity: t, userId: n } = e;
            return es(n, t, !0);
        },
        ACTIVITY_SYNC_STOP: ea,
        SPOTIFY_SET_DEVICES: function (e) {
            let { accountId: t, devices: n } = e;
            ($[t] = n), V.info(`Devices updated for ${t}:`, n);
        },
        SPOTIFY_SET_ACTIVE_DEVICE: function (e) {
            let { accountId: t, deviceId: n } = e;
            er(t, n);
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
                Z?.stop();
                let { sourceId: e, sound: n } = t?.desktopSettings;
                null != e && m.Ay.getObservedAppNameForWindow(e) === L.name && n
                    ? (Z = new d.IX()).start(P, el)
                    : (Z?.stop(), (Z = null));
            } else null == t && (Z?.stop(), (Z = null));
        },
    }),
    ef = eh;
