let r, i, a;
n.d(t, { Z: () => eZ }), n(388685), n(49124), n(35282), n(539854), n(704826), n(997841);
var o,
    s = n(392711),
    l = n.n(s),
    c = n(261470),
    u = n(442837),
    d = n(902704),
    f = n(846519),
    _ = n(570140),
    p = n(586902),
    h = n(726542),
    m = n(524331),
    g = n(710845),
    E = n(594190),
    b = n(314897),
    y = n(553795),
    O = n(517100),
    v = n(158776),
    I = n(606304),
    T = n(979651),
    S = n(626135),
    A = n(81063),
    C = n(70956),
    N = n(823379),
    R = n(781518),
    P = n(616922),
    D = n(981631);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = h.Z.get(D.ABu.SPOTIFY),
    k = "wss://dealer.spotify.com/?access_token=",
    U = "hm://pusher/v1/connections/",
    G = 30 * C.Z.Millis.SECOND,
    B = 30 * C.Z.Millis.SECOND,
    Z = 100,
    F = 5 * C.Z.Millis.MINUTE,
    V = 5 * C.Z.Millis.SECOND,
    H = 1.5 * C.Z.Millis.SECOND,
    Y = "Computer",
    W = 5,
    K = +C.Z.Millis.MINUTE,
    z = 3 * C.Z.Millis.SECOND,
    q = 128,
    X = "message",
    Q = "ping",
    J = "single",
    $ = new g.Z("Spotify"),
    ee = new f.V7(),
    et = new f.V7(),
    en = new f.V7(),
    er = new f.V7(),
    ei = new f.V7(),
    ea = {},
    eo = {},
    es = {},
    el = !1,
    ec = null;
function eu() {
    for (let e in ea) {
        let t = ea[e];
        if (!t.connected || null == eo[e]) continue;
        let n = eo[e].find((e) => e.is_active);
        if (null != n)
            return {
                socket: t,
                device: n,
            };
    }
}
function ed(e, t) {
    let n = Date.now(),
        r = null != e ? e.startTime : 0,
        i = n - t;
    return Math.abs(i - r) > H ? i : r;
}
function ef(e) {
    _.Z.dispatch({
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
function e_(e) {
    return v.Z.findActivity(e, (e) => null != e.party && null != e.party.id && (0, P.Ps)(e.party.id));
}
let ep = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class eh {
    get connected() {
        return null != this.socket && ep.has(this.socket.readyState);
    }
    connect() {
        this.connected ||
            this._requestedConnect ||
            ($.info("WS Connecting"),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            eU(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1),
                        (this.socket = new WebSocket("".concat(k).concat(this.accessToken))),
                        (this.socket.onopen = this.handleOpen.bind(this)),
                        (this.socket.onmessage = this.handleMessage.bind(this)),
                        (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    $.error(e), (this._requestedConnect = !1), this.handleClose();
                }));
    }
    disconnect() {
        (this._requestedDisconnect = !0), this.backoff.cancel();
        try {
            var e;
            null == (e = this.socket) || e.close();
        } catch (e) {}
    }
    ping() {
        var e;
        this.connected && (null == (e = this.socket) || e.send(JSON.stringify({ type: Q })));
    }
    handleOpen() {
        $.info("WS Connected"),
            this.backoff.succeed(),
            this.pingInterval.start(G, () => this.ping()),
            (0, R.Ai)(this.accountId, this.accessToken),
            (0, R.PW)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ("string" != typeof t) return;
        let { type: n, uri: r, payloads: i } = JSON.parse(t);
        if (n === X) {
            if ("string" == typeof r && r.startsWith(U))
                (this.connectionId = decodeURIComponent(r.split(U)[1])),
                    (0, R.am)(this.accountId, this.accessToken, this.connectionId);
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
                $.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"));
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case "PLAYER_STATE_CHANGED":
                null != n && null != n.state && ek(this.accountId, this.accessToken, n.state);
                break;
            case "DEVICE_STATE_CHANGED":
                this.handleDeviceStateChange();
        }
    }
    constructor(e, t) {
        w(this, "accessToken", void 0),
            w(this, "accountId", void 0),
            w(this, "connectionId", void 0),
            w(this, "isPremium", void 0),
            w(this, "pingInterval", void 0),
            w(this, "backoff", void 0),
            w(this, "socket", void 0),
            w(this, "_requestedDisconnect", !1),
            w(this, "_requestedConnect", !1),
            w(
                this,
                "handleDeviceStateChange",
                l().throttle(() => {
                    (0, R.PW)(this.accountId, this.accessToken), eU(this.accountId, this.accessToken);
                }, z),
            ),
            (this.accountId = e),
            (this.accessToken = t),
            (this.pingInterval = new f.Xp()),
            (this.backoff = new c.Z(void 0, K)),
            this.connect();
    }
}
function em(e, t) {
    e in ea
        ? ((ea[e].accessToken = t), $.info("Updated account access token: ".concat(e)))
        : ((ea[e] = new eh(e, t)), $.info("Added account: ".concat(e)));
}
function eg(e) {
    if (!(e in ea)) return;
    ea[e].disconnect(), delete ea[e];
    let t = es[e];
    null != t && null != r && t.track.id === r.track.id && (r = null),
        delete es[e],
        $.info("Removed account: ".concat(e));
}
function eE(e, t) {
    for (let n of eo[e]) n.is_active = n.id === t;
}
function eb(e, t, n) {
    var r, a;
    let o = eu();
    if (null == o) return !1;
    let { socket: s, device: l } = o,
        { sync_id: c, party: u, timestamps: d } = t;
    if (null == c || null == u || null == u.id || !(0, P.Ps)(u.id)) return !1;
    let f = null != d && null != d.start ? d.start : Date.now(),
        _ = Math.max(0, Date.now() - f),
        p = !1,
        h = es[s.accountId];
    null != h && !1 === h.repeat && (p = null);
    let m = (0, P.c8)(null != (a = null == (r = t.metadata) ? void 0 : r.type) ? a : P.Hw.TRACK);
    if (null == m) return;
    (0, R.hY)(s.accountId, s.accessToken, c, m, {
        position: +_,
        deviceId: l.id,
        repeat: p,
    }),
        (i = {
            userId: e,
            partyId: u.id,
            trackId: c,
            startTime: f,
        });
    let g = "presence change";
    n &&
        ((g = "started"),
        S.default.track(D.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
            party_id: u.id,
            other_user_id: e,
        })),
        $.info(
            "Listen along "
                .concat(g, ": ")
                .concat(s.accountId, " to ")
                .concat(e, " playing ")
                .concat(c, " on ")
                .concat(l.name),
        );
}
function ey() {
    S.default.track(D.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != i ? i.partyId : null,
        other_user_id: null != i ? i.userId : null,
    });
    let e = null != i ? i.trackId : null;
    (i = null), $.info("Listen along stopped");
    let t = eu();
    if (null == t) return;
    let { socket: n } = t,
        r = es[n.accountId];
    null != r && r.track.id === e && (0, R.wO)(n.accountId, n.accessToken);
}
function eO() {
    let e = Object.keys(ea),
        t = y.Z.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === D.ABu.SPOTIFY;
        });
    if (null == t) return !1;
    let n = t.map((e) => {
        let { id: t } = e;
        return t;
    });
    for (let t of e) n.includes(t) || eg(t);
    let i = !1;
    for (let n of t)
        if ((null != r && r.account.id === n.id && ((r.account = n), (i = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                em(n.id, n.accessToken);
                continue;
            }
            (0, R.hP)(n.id);
        }
    return i;
}
function ev(e) {
    let { accountId: t, accessToken: n } = e;
    return em(t, n), !1;
}
function eI(e) {
    let { accountId: t } = e;
    eg(t);
}
function eT(e) {
    let { accountId: t, isPlaying: n, repeat: a, track: o, position: s, device: c, context: u } = e,
        f = !1;
    if (null != c)
        if (null != eo[t]) {
            let e = eo[t].find((e) => {
                let { id: t } = e;
                return t === c.id;
            });
            null == e ? (eo[t].push(c), (f = !0)) : (0, d.Z)(e, c) || (Object.assign(e, c), (f = !0)), eE(t, c.id);
        } else (eo[t] = [c]), (f = !0);
    n ? null == ec || ec.start(B, eD) : ((o = null), null == ec || ec.stop());
    let p = y.Z.getAccount(t, D.ABu.SPOTIFY);
    if (null == p) return f;
    let h = es[t],
        g =
            null != o
                ? {
                      account: p,
                      track: o,
                      startTime: ed(h, s),
                      context: u,
                      repeat: a,
                  }
                : null,
        E = null != c && null != i && 0 === s && !n;
    E || (es[t] = g);
    let O = r;
    if (
        ((r = l()
            .values(es)
            .find((e) => null != e)),
        ew(b.default.getId()),
        null == o || E ? er.stop() : er.start(o.duration - s + V, () => ef(p.id)),
        null != i && ((!n && s > 0) || null == c || (null != g && i.trackId !== g.track.id))
            ? ($.info(
                  "Listen along active but playback stopped or track changed. Stopping listen along in ".concat(
                      V,
                      "ms",
                  ),
              ),
              ei.start(V, () => {
                  $.info("Stopping listening along"), (0, m.Z)(), ef(p.id);
              }))
            : ei.isStarted() && ($.info("Listen along stop cancelled as playback of track resumed"), ei.stop()),
        O === r ||
            (null == h && null == g) ||
            (null != h && null != g && h.track.id === g.track.id && h.startTime === g.startTime))
    )
        return f;
    null != o &&
        (_.Z.dispatch({
            type: "SPOTIFY_NEW_TRACK",
            track: o,
            connectionId: t,
        }),
        S.default.track(D.rMx.ACTIVITY_UPDATED, {
            party_platform: D.ABu.SPOTIFY,
            track_id: o.id,
            has_images: !0,
            details: o.album.name,
            state: o.name,
            album_id: o.album.id,
            author_ids: o.artists.map((e) => e.id),
            author_names: o.artists.map((e) => e.name),
        }));
}
function eS(e) {
    let { id: t } = e;
    a = t;
}
function eA(e) {
    let { accountId: t, devices: n } = e;
    (eo[t] = n), $.info("Devices updated for ".concat(t, ":"), n);
}
function eC(e) {
    let { accountId: t, deviceId: n } = e;
    eE(t, n);
}
function eN(e) {
    var t;
    let n,
        { activity: r, metadata: a } = e,
        o = eu();
    if (null == o) return !1;
    let { socket: s, device: l } = o,
        { sync_id: c, party: u } = r;
    return (
        null != c &&
        null != u &&
        null != u.id &&
        !!(0, P.Ps)(u.id) &&
        (null != a && (n = a.context_uri),
        null != i && ey(),
        null != a &&
            void ((0, R.hY)(s.accountId, s.accessToken, c, null != (t = a.type) ? t : P.Hw.TRACK, {
                contextUri: n,
                deviceId: l.id,
            }),
            $.info("Play started: ".concat(s.accountId, " playing ").concat(c, " on ").concat(l.name))))
    );
}
function eR(e) {
    let { activity: t, userId: n } = e;
    return eb(n, t, !0);
}
function eP() {
    if (null == i || null == eu()) return !1;
    let { userId: e } = i,
        t = e_(e);
    if (null == t)
        return (
            en.start(F, () => {
                null != i && i.userId === e && (0, m.Z)();
            }),
            !1
        );
    en.stop();
    let { sync_id: n, timestamps: r, party: a } = t,
        o = null != n && i.trackId !== n,
        s = null != r && i.startTime !== r.start;
    return o || s ? eb(e, t, !1) : null != a && a.id !== i.partyId && ((i.partyId = a.id), !0);
}
function eD() {
    if (null == r) return;
    let e = eu();
    if (null == e) return;
    let { socket: t } = e;
    (el = !0),
        (0, R.wO)(t.accountId, t.accessToken),
        S.default.track(D.rMx.SPOTIFY_AUTO_PAUSED),
        $.info("Playback auto paused");
}
function ew(e) {
    if (e === b.default.getId()) {
        let t = T.Z.isCurrentClientInVoiceChannel(),
            n = (0, p.O)({
                userId: e,
                checkSoundSharing: !0,
                checkSoundboardSounds: !1,
            });
        t && n && null != r ? (ee.start(B, eD, !1), et.stop()) : et.start(Z, () => ee.stop(), !1);
    }
    return !1;
}
function ex(e) {
    let { userId: t } = e;
    return ew(t);
}
function eL(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n } = t;
        return ew(n) || e;
    }, !1);
}
function eM(e) {
    let { accountId: t, isPremium: n } = e,
        r = ea[t];
    if (null == r) return !1;
    (r.isPremium = n), $.info("Profile updated for ".concat(t, ": isPremium = ").concat(n));
}
function ej(e) {
    let { settings: t } = e;
    if ((null == t ? void 0 : t.desktopSettings) != null) {
        null == ec || ec.stop();
        let { sourceId: e, sound: n } = null == t ? void 0 : t.desktopSettings;
        null != e && E.ZP.getObservedAppNameForWindow(e) === j.name && n
            ? (ec = new f.Xp()).start(B, eD)
            : (null == ec || ec.stop(), (ec = null));
    } else null == t && (null == ec || ec.stop(), (ec = null));
}
function ek(e, t, n) {
    var r, i, a, o, s, l, c, u, d, f, p, h, m, g;
    let E,
        b,
        { device: y, progress_ms: O, is_playing: v, repeat_state: I, item: T, context: S } = n;
    if (null != T && T.type === P.Hw.TRACK) {
        let e = T.id;
        null != T.linked_from && null != T.linked_from.id && (e = T.linked_from.id),
            (E = {
                id: e,
                name: T.name,
                duration: T.duration_ms,
                type: P.Hw.TRACK,
                album: {
                    id: null != (s = null == (r = T.album) ? void 0 : r.id) ? s : "",
                    name: null != (l = null == (i = T.album) ? void 0 : i.name) ? l : "",
                    image: null == (a = T.album) ? void 0 : a.images[0],
                    type: null != (c = null == (o = T.album) ? void 0 : o.type) ? c : P.Hw.ALBUM,
                },
                artists: Array.isArray(T.artists) ? T.artists.filter((e) => (0, N.lm)(e.id) && (0, N.lm)(e.name)) : [],
                isLocal: T.is_local || !1,
            });
    } else
        null != T &&
            T.type === P.Hw.EPISODE &&
            (E = {
                id: T.id,
                name: T.name,
                duration: T.duration_ms,
                type: P.Hw.EPISODE,
                album: {
                    id: null != (h = null == (u = T.show) ? void 0 : u.id) ? h : "",
                    name: null != (m = null == (d = T.show) ? void 0 : d.name) ? m : "",
                    image: null == (f = T.show) ? void 0 : f.images[0],
                    type: null != (g = null == (p = T.album) ? void 0 : p.type) ? g : P.Hw.SHOW,
                },
                artists: [],
                isLocal: !1,
            });
    if (
        (null != y && !0 !== y.is_active && (y = M(x({}, y), { is_active: !0 })),
        null != S && [P.Hw.PLAYLIST, P.Hw.ALBUM].includes(S.type))
    ) {
        let n = eB.getPlayerState(e);
        b =
            null != n && null != n.context && n.context.uri === S.uri
                ? Promise.resolve(n.context)
                : S.type === P.Hw.ALBUM
                  ? Promise.resolve(S)
                  : R.rC
                        .get(e, t, { url: S.href })
                        .then((e) => {
                            let { body: t } = e;
                            return t;
                        })
                        .catch((e) => {
                            if (e && 404 === e.status) return null;
                            throw e;
                        });
    } else b = Promise.resolve(void 0);
    return b.then((t) => {
        null == t || t.type !== P.Hw.PLAYLIST || t.public || (t = null),
            _.Z.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: e,
                track: E,
                volumePercent: null != y ? y.volume_percent : 0,
                isPlaying: v,
                repeat: "off" !== I,
                position: O,
                context: t,
                device: y,
            });
    });
}
function eU(e, t) {
    return R.rC
        .get(e, t, {
            url: P.C7.PLAYER,
            query: { additional_types: "".concat(P.Hw.TRACK, ",").concat(P.Hw.EPISODE) },
            onlyRetryOnAuthorizationErrors: !0,
        })
        .then((n) => {
            let r = n.body;
            null != r ? ek(e, t, r).then(() => n) : ef(e);
        })
        .catch(() => ef(e));
}
class eG extends (o = u.ZP.Store) {
    initialize() {
        this.waitFor(b.default, y.Z, O.Z, v.Z, E.ZP, I.Z, T.Z), this.syncWith([v.Z], () => eP()), (0, R.k1)();
    }
    hasConnectedAccount() {
        return Object.keys(ea).length > 0;
    }
    getActiveSocketAndDevice() {
        return eu();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in ea) {
            let n = ea[t];
            if (!n.connected || null == eo[t]) continue;
            let r = eo[t].find((e) => !e.is_restricted && e.type === Y);
            null != r &&
                e.push({
                    socket: n,
                    device: r,
                });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != eu() && null != t && null != n && null != n.id && (0, P.Ps)(n.id);
    }
    getSyncingWith() {
        return i;
    }
    wasAutoPaused() {
        return el;
    }
    getLastPlayedTrackId() {
        return a;
    }
    getTrack() {
        return null != r ? r.track : null;
    }
    getPlayerState(e) {
        return es[e];
    }
    shouldShowActivity() {
        return null != r && r.account.showActivity && !O.Z.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == r) return null != i ? e_(i.userId) : null;
        let {
                track: { artists: a, album: o, name: s, id: l, duration: c, isLocal: u, type: d },
                startTime: f,
                context: _,
            } = r,
            p = a.slice(0, W);
        a.length > 0 &&
            (e = p
                .map((e) => {
                    let { name: t } = e;
                    return t.replace(/;/g, "");
                })
                .join("; "));
        let h = {},
            m = null != o.image ? (0, A.f)(D.ABu.SPOTIFY, o.image.url) : null;
        null != o.image && null != m && (h.large_image = m),
            o.type !== J && (h.large_text = o.name),
            null != _ && (t = _.uri),
            (n = null != i && null != i.partyId ? i.partyId : "".concat(P.lS).concat(b.default.getId()));
        let g = s.length > q ? s.substring(0, q - 3) + "..." : s,
            E = {
                context_uri: t,
                album_id: o.id,
                artist_ids: p.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: d,
                button_urls: [],
            },
            y = {
                name: j.name,
                assets: h,
                details: g,
                state: e,
                timestamps: {
                    start: f,
                    end: f + c,
                },
                party: { id: n },
            };
        return u || ((y.sync_id = l), (y.flags = D.xjy.PLAY | D.xjy.SYNC), (y.metadata = E)), y;
    }
}
w(eG, "displayName", "SpotifyStore");
let eB = new eG(_.Z, {
        USER_CONNECTIONS_UPDATE: eO,
        CONNECTION_OPEN: eO,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: ev,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eI,
        SPOTIFY_PROFILE_UPDATE: eM,
        SPOTIFY_PLAYER_STATE: eT,
        SPOTIFY_PLAYER_PLAY: eS,
        ACTIVITY_PLAY: eN,
        ACTIVITY_SYNC: eR,
        ACTIVITY_SYNC_STOP: ey,
        SPOTIFY_SET_DEVICES: eA,
        SPOTIFY_SET_ACTIVE_DEVICE: eC,
        SPEAKING: ex,
        VOICE_STATE_UPDATES: eL,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ej,
    }),
    eZ = eB;
