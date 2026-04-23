"use strict";
let i, r, s;
n.d(t, { A: () => eh }), n(321073), n(938796);
var a = n(735438),
    o = n.n(a),
    l = n(158390),
    d = n(17928),
    _ = n(52133),
    u = n(451988),
    c = n(228366),
    E = n(717558),
    h = n(573648),
    m = n(504337),
    f = n(626584),
    g = n(328153),
    p = n(495544),
    A = n(30370),
    I = n(885576),
    T = n(290863),
    S = n(485296),
    N = n(977997),
    C = n(954571),
    R = n(970928),
    O = n(927813),
    y = n(403362),
    v = n(107750),
    D = n(272984),
    L = n(652215);
let b = h.A.get(L.fg2.SPOTIFY),
    w = "hm://pusher/v1/connections/",
    P = 30 * O.A.Millis.SECOND,
    k = 30 * O.A.Millis.SECOND,
    M = 5 * O.A.Millis.MINUTE,
    U = 5 * O.A.Millis.SECOND,
    x = 1.5 * O.A.Millis.SECOND,
    G = +O.A.Millis.MINUTE,
    V = 3 * O.A.Millis.SECOND,
    F = new f.A("Spotify"),
    B = new u.Ep(),
    H = new u.Ep(),
    j = new u.Ep(),
    W = new u.Ep(),
    Y = new u.Ep(),
    K = {},
    z = {},
    $ = {},
    q = !1,
    X = null;
function Z() {
    for (let e in K) {
        let t = K[e];
        if (!t.connected || null == z[e]) continue;
        let n = z[e].find((e) => e.is_active);
        if (null != n) return { socket: t, device: n };
    }
}
function Q(e) {
    c.h.dispatch({
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
    return T.A.findActivity(e, (e) => null != e.party && null != e.party.id && (0, D.pH)(e.party.id));
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
            (this.pingInterval = new u.IX()),
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
            eu(this.accountId, this.accessToken)
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
            this.pingInterval.start(P, () => this.ping()),
            (0, v.E$)(this.accountId, this.accessToken),
            (0, v.oG)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ("string" != typeof t) return;
        let { type: n, uri: i, payloads: r } = JSON.parse(t);
        if ("message" === n) {
            if ("string" == typeof i && i.startsWith(w))
                (this.connectionId = decodeURIComponent(i.split(w)[1])),
                    (0, v.tO)(this.accountId, this.accessToken, this.connectionId);
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
                F.info(`WS Disconnected. Next retry in ${Math.round(e)}ms`);
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case "PLAYER_STATE_CHANGED":
                null != n && null != n.state && e_(this.accountId, this.accessToken, n.state);
                break;
            case "DEVICE_STATE_CHANGED":
                this.handleDeviceStateChange();
        }
    }
    handleDeviceStateChange = o().throttle(() => {
        (0, v.oG)(this.accountId, this.accessToken), eu(this.accountId, this.accessToken);
    }, V);
}
function en(e, t) {
    e in K
        ? ((K[e].accessToken = t), F.info(`Updated account access token: ${e}`))
        : ((K[e] = new et(e, t)), F.info(`Added account: ${e}`));
}
function ei(e) {
    if (!(e in K)) return;
    K[e].disconnect(), delete K[e];
    let t = $[e];
    null != t && null != i && t.track.id === i.track.id && (i = null), delete $[e], F.info(`Removed account: ${e}`);
}
function er(e, t) {
    for (let n of z[e]) n.is_active = n.id === t;
}
function es(e, t, n) {
    let i = Z();
    if (null == i) return !1;
    let { socket: s, device: a } = i,
        { sync_id: o, party: l, timestamps: d } = t;
    if (null == o || null == l || null == l.id || !(0, D.pH)(l.id)) return !1;
    let _ = null != d && null != d.start ? d.start : Date.now(),
        u = Math.max(0, Date.now() - _),
        c = !1,
        E = $[s.accountId];
    null != E && !1 === E.repeat && (c = null);
    let h = (0, D.NJ)(t.metadata?.type ?? D.M0.TRACK);
    if (null == h) return;
    (0, v.ZH)(s.accountId, s.accessToken, o, h, { position: +u, deviceId: a.id, repeat: c }),
        (r = { userId: e, partyId: l.id, trackId: o, startTime: _ });
    let m = "presence change";
    n && ((m = "started"), C.default.track(L.HAw.SPOTIFY_LISTEN_ALONG_STARTED, { party_id: l.id, other_user_id: e })),
        F.info(`Listen along ${m}: ${s.accountId} to ${e} playing ${o} on ${a.name}`);
}
function ea() {
    C.default.track(L.HAw.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != r ? r.partyId : null,
        other_user_id: null != r ? r.userId : null,
    });
    let e = null != r ? r.trackId : null;
    (r = null), F.info("Listen along stopped");
    let t = Z();
    if (null == t) return;
    let { socket: n } = t,
        i = $[n.accountId];
    null != i && i.track.id === e && (0, v.v7)(n.accountId, n.accessToken);
}
function eo() {
    let e = Object.keys(K),
        t = A.A.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === L.fg2.SPOTIFY;
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
            (0, v.iD)(n.id);
        }
    return r;
}
function el() {
    if (null == i) return;
    let e = Z();
    if (null == e) return;
    let { socket: t } = e;
    (q = !0),
        (0, v.v7)(t.accountId, t.accessToken),
        C.default.track(L.HAw.SPOTIFY_AUTO_PAUSED),
        F.info("Playback auto paused");
}
function ed(e) {
    if (e === p.default.getId()) {
        let t = N.A.isCurrentClientInVoiceChannel(),
            n = (0, E.R)({ userId: e, checkSoundSharing: !0, checkSoundboardSounds: !1 });
        t && n && null != i ? (B.start(k, el, !1), H.stop()) : H.start(100, () => B.stop(), !1);
    }
    return !1;
}
function e_(e, t, n) {
    let i,
        r,
        { device: s, progress_ms: a, is_playing: o, repeat_state: l, item: d, context: _ } = n;
    if (null != d && d.type === D.M0.TRACK) {
        let e = d.id;
        null != d.linked_from && null != d.linked_from.id && (e = d.linked_from.id),
            (i = {
                id: e,
                name: d.name,
                duration: d.duration_ms,
                type: D.M0.TRACK,
                album: {
                    id: d.album?.id ?? "",
                    name: d.album?.name ?? "",
                    image: d.album?.images[0],
                    type: d.album?.type ?? D.M0.ALBUM,
                },
                artists: Array.isArray(d.artists) ? d.artists.filter((e) => (0, y.Vq)(e.id) && (0, y.Vq)(e.name)) : [],
                isLocal: d.is_local || !1,
            });
    } else
        null != d &&
            d.type === D.M0.EPISODE &&
            (i = {
                id: d.id,
                name: d.name,
                duration: d.duration_ms,
                type: D.M0.EPISODE,
                album: {
                    id: d.show?.id ?? "",
                    name: d.show?.name ?? "",
                    image: d.show?.images[0],
                    type: d.album?.type ?? D.M0.SHOW,
                },
                artists: [],
                isLocal: !1,
            });
    if (
        (null != s && !0 !== s.is_active && (s = { ...s, is_active: !0 }),
        null != _ && [D.M0.PLAYLIST, D.M0.ALBUM].includes(_.type))
    ) {
        let n = eE.getPlayerState(e);
        r =
            null != n && null != n.context && n.context.uri === _.uri
                ? Promise.resolve(n.context)
                : _.type === D.M0.ALBUM
                  ? Promise.resolve(_)
                  : v.tB
                        .get(e, t, { url: _.href })
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
        null == t || t.type !== D.M0.PLAYLIST || t.public || (t = null),
            c.h.dispatch({
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
function eu(e, t) {
    return v.tB
        .get(e, t, {
            url: D.RQ.PLAYER,
            query: { additional_types: `${D.M0.TRACK},${D.M0.EPISODE}` },
            onlyRetryOnAuthorizationErrors: !0,
        })
        .then((n) => {
            let i = n.body;
            null != i ? e_(e, t, i).then(() => n) : Q(e);
        })
        .catch(() => Q(e));
}
class ec extends d.Ay.Store {
    static displayName = "SpotifyStore";
    initialize() {
        this.waitFor(p.default, A.A, I.A, T.A, g.Ay, S.A, N.A),
            this.syncWith([T.A], () =>
                (function () {
                    if (null == r || null == Z()) return !1;
                    let { userId: e } = r,
                        t = J(e);
                    if (null == t)
                        return (
                            j.start(M, () => {
                                null != r && r.userId === e && (0, m.A)();
                            }),
                            !1
                        );
                    j.stop();
                    let { sync_id: n, timestamps: i, party: s } = t,
                        a = null != n && r.trackId !== n,
                        o = null != i && r.startTime !== i.start;
                    return a || o ? es(e, t, !1) : null != s && s.id !== r.partyId && ((r.partyId = s.id), !0);
                })(),
            ),
            (0, v.f0)();
    }
    hasConnectedAccount() {
        return Object.keys(K).length > 0;
    }
    getActiveSocketAndDevice() {
        return Z();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in K) {
            let n = K[t];
            if (!n.connected || null == z[t]) continue;
            let i = z[t].find((e) => !e.is_restricted && "Computer" === e.type);
            null != i && e.push({ socket: n, device: i });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != Z() && null != t && null != n && null != n.id && (0, D.pH)(n.id);
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
        return $[e];
    }
    shouldShowActivity() {
        return null != i && i.account.showActivity && !I.A.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == i) return null != r ? J(r.userId) : null;
        let {
                track: { artists: s, album: a, name: o, id: l, duration: d, isLocal: _, type: u },
                startTime: c,
                context: E,
            } = i,
            h = s.slice(0, 5);
        s.length > 0 &&
            (e = h
                .map((e) => {
                    let { name: t } = e;
                    return t.replace(/;/g, "");
                })
                .join("; "));
        let m = {},
            f = null != a.image ? (0, R.Di)(L.fg2.SPOTIFY, a.image.url) : null;
        null != a.image && null != f && (m.large_image = f),
            "single" !== a.type && (m.large_text = a.name),
            null != E && (t = E.uri),
            (n = null != r && null != r.partyId ? r.partyId : `${D.HS}${p.default.getId()}`);
        let g = o.length > 128 ? o.substring(0, 125) + "..." : o,
            A = {
                context_uri: t,
                album_id: a.id,
                artist_ids: h.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: u,
                button_urls: [],
            },
            I = {
                name: b.name,
                assets: m,
                details: g,
                state: e,
                timestamps: { start: c, end: c + d },
                party: { id: n },
            };
        return _ || ((I.sync_id = l), (I.flags = L.jUm.PLAY | L.jUm.SYNC), (I.metadata = A)), I;
    }
}
let eE = new ec(c.h, {
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
            (i.isPremium = n), F.info(`Profile updated for ${t}: isPremium = ${n}`);
        },
        SPOTIFY_PLAYER_STATE: function (e) {
            let t,
                n,
                s,
                { accountId: a, isPlaying: l, repeat: d, track: u, position: E, device: h, context: f } = e,
                g = !1;
            if (null != h)
                if (null != z[a]) {
                    let e = z[a].find((e) => {
                        let { id: t } = e;
                        return t === h.id;
                    });
                    null == e ? (z[a].push(h), (g = !0)) : (0, _.A)(e, h) || (Object.assign(e, h), (g = !0)),
                        er(a, h.id);
                } else (z[a] = [h]), (g = !0);
            l ? X?.start(k, el) : ((u = null), X?.stop());
            let I = A.A.getAccount(a, L.fg2.SPOTIFY);
            if (null == I) return g;
            let T = $[a],
                S =
                    null != u
                        ? {
                              account: I,
                              track: u,
                              startTime:
                                  ((t = Date.now()),
                                  (n = null != T ? T.startTime : 0),
                                  Math.abs((s = t - E) - n) > x ? s : n),
                              context: f,
                              repeat: d,
                          }
                        : null,
                N = null != h && null != r && 0 === E && !l;
            N || ($[a] = S);
            let R = i;
            if (
                ((i = o()
                    .values($)
                    .find((e) => null != e)),
                ed(p.default.getId()),
                null == u || N ? W.stop() : W.start(u.duration - E + U, () => Q(I.id)),
                null != r && ((!l && E > 0) || null == h || (null != S && r.trackId !== S.track.id))
                    ? (F.info(
                          `Listen along active but playback stopped or track changed. Stopping listen along in ${U}ms`,
                      ),
                      Y.start(U, () => {
                          F.info("Stopping listening along"), (0, m.A)(), Q(I.id);
                      }))
                    : Y.isStarted() && (F.info("Listen along stop cancelled as playback of track resumed"), Y.stop()),
                R === i ||
                    (null == T && null == S) ||
                    (null != T && null != S && T.track.id === S.track.id && T.startTime === S.startTime))
            )
                return g;
            null != u &&
                (c.h.dispatch({ type: "SPOTIFY_NEW_TRACK", track: u, connectionId: a }),
                C.default.track(L.HAw.ACTIVITY_UPDATED, {
                    party_platform: L.fg2.SPOTIFY,
                    track_id: u.id,
                    has_images: !0,
                    details: u.album.name,
                    state: u.name,
                    album_id: u.album.id,
                    author_ids: u.artists.map((e) => e.id),
                    author_names: u.artists.map((e) => e.name),
                }));
        },
        SPOTIFY_PLAYER_PLAY: function (e) {
            let { id: t } = e;
            s = t;
        },
        ACTIVITY_PLAY: function (e) {
            let t,
                { activity: n, metadata: i } = e,
                s = Z();
            if (null == s) return !1;
            let { socket: a, device: o } = s,
                { sync_id: l, party: d } = n;
            return (
                null != l &&
                null != d &&
                null != d.id &&
                !!(0, D.pH)(d.id) &&
                (null != i && (t = i.context_uri),
                null != r && ea(),
                null != i &&
                    void ((0, v.ZH)(a.accountId, a.accessToken, l, i.type ?? D.M0.TRACK, {
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
            (z[t] = n), F.info(`Devices updated for ${t}:`, n);
        },
        SPOTIFY_SET_ACTIVE_DEVICE: function (e) {
            let { accountId: t, deviceId: n } = e;
            er(t, n);
        },
        SPEAKING: function (e) {
            let { userId: t } = e;
            return ed(t);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { userId: n } = t;
                return ed(n) || e;
            }, !1);
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
            let { settings: t } = e;
            if (t?.desktopSettings != null) {
                X?.stop();
                let { sourceId: e, sound: n } = t?.desktopSettings;
                null != e && g.Ay.getObservedAppNameForWindow(e) === b.name && n
                    ? (X = new u.IX()).start(k, el)
                    : (X?.stop(), (X = null));
            } else null == t && (X?.stop(), (X = null));
        },
    }),
    eh = eE;
