let r, i, a;
n.d(t, { Z: () => eF }), n(388685), n(49124), n(35282), n(539854), n(704826), n(997841);
var o,
    s = n(392711),
    l = n.n(s),
    c = n(261470),
    u = n(442837),
    d = n(902704),
    f = n(846519),
    p = n(570140),
    _ = n(586902),
    m = n(726542),
    h = n(524331),
    g = n(710845),
    E = n(594190),
    b = n(314897),
    y = n(553795),
    O = n(517100),
    v = n(158776),
    S = n(606304),
    I = n(979651),
    T = n(626135),
    C = n(81063),
    A = n(70956),
    N = n(823379),
    P = n(781518),
    R = n(616922),
    w = n(981631);
function D(e, t, n) {
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
                D(e, t, n[t]);
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
function j(e, t) {
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
let M = m.Z.get(w.ABu.SPOTIFY),
    k = "wss://dealer.spotify.com/?access_token=",
    U = "hm://pusher/v1/connections/",
    G = 30 * A.Z.Millis.SECOND,
    Z = 30 * A.Z.Millis.SECOND,
    F = 100,
    B = 5 * A.Z.Millis.MINUTE,
    V = 5 * A.Z.Millis.SECOND,
    H = 1.5 * A.Z.Millis.SECOND,
    Y = "Computer",
    W = 5,
    K = +A.Z.Millis.MINUTE,
    z = 3 * A.Z.Millis.SECOND,
    q = 128,
    Q = "message",
    X = "ping",
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
    p.Z.dispatch({
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
function ep(e) {
    return v.Z.findActivity(e, (e) => null != e.party && null != e.party.id && (0, R.Ps)(e.party.id));
}
let e_ = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class em {
    get connected() {
        return null != this.socket && e_.has(this.socket.readyState);
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
        this.connected && (null == (e = this.socket) || e.send(JSON.stringify({ type: X })));
    }
    handleOpen() {
        $.info("WS Connected"),
            this.backoff.succeed(),
            this.pingInterval.start(G, () => this.ping()),
            (0, P.Ai)(this.accountId, this.accessToken),
            (0, P.PW)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ("string" != typeof t) return;
        let { type: n, uri: r, payloads: i } = JSON.parse(t);
        if (n === Q) {
            if ("string" == typeof r && r.startsWith(U))
                (this.connectionId = decodeURIComponent(r.split(U)[1])),
                    (0, P.am)(this.accountId, this.accessToken, this.connectionId);
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
        D(this, "accessToken", void 0),
            D(this, "accountId", void 0),
            D(this, "connectionId", void 0),
            D(this, "isPremium", void 0),
            D(this, "pingInterval", void 0),
            D(this, "backoff", void 0),
            D(this, "socket", void 0),
            D(this, "_requestedDisconnect", !1),
            D(this, "_requestedConnect", !1),
            D(
                this,
                "handleDeviceStateChange",
                l().throttle(() => {
                    (0, P.PW)(this.accountId, this.accessToken), eU(this.accountId, this.accessToken);
                }, z),
            ),
            (this.accountId = e),
            (this.accessToken = t),
            (this.pingInterval = new f.Xp()),
            (this.backoff = new c.Z(void 0, K)),
            this.connect();
    }
}
function eh(e, t) {
    e in ea
        ? ((ea[e].accessToken = t), $.info("Updated account access token: ".concat(e)))
        : ((ea[e] = new em(e, t)), $.info("Added account: ".concat(e)));
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
    if (null == c || null == u || null == u.id || !(0, R.Ps)(u.id)) return !1;
    let f = null != d && null != d.start ? d.start : Date.now(),
        p = Math.max(0, Date.now() - f),
        _ = !1,
        m = es[s.accountId];
    null != m && !1 === m.repeat && (_ = null);
    let h = (0, R.c8)(null != (a = null == (r = t.metadata) ? void 0 : r.type) ? a : R.Hw.TRACK);
    if (null == h) return;
    (0, P.hY)(s.accountId, s.accessToken, c, h, {
        position: +p,
        deviceId: l.id,
        repeat: _,
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
        T.default.track(w.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
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
    T.default.track(w.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != i ? i.partyId : null,
        other_user_id: null != i ? i.userId : null,
    });
    let e = null != i ? i.trackId : null;
    (i = null), $.info("Listen along stopped");
    let t = eu();
    if (null == t) return;
    let { socket: n } = t,
        r = es[n.accountId];
    null != r && r.track.id === e && (0, P.wO)(n.accountId, n.accessToken);
}
function eO() {
    let e = Object.keys(ea),
        t = y.Z.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === w.ABu.SPOTIFY;
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
                eh(n.id, n.accessToken);
                continue;
            }
            (0, P.hP)(n.id);
        }
    return i;
}
function ev(e) {
    let { accountId: t, accessToken: n } = e;
    return eh(t, n), !1;
}
function eS(e) {
    let { accountId: t } = e;
    eg(t);
}
function eI(e) {
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
    n ? null == ec || ec.start(Z, ew) : ((o = null), null == ec || ec.stop());
    let _ = y.Z.getAccount(t, w.ABu.SPOTIFY);
    if (null == _) return f;
    let m = es[t],
        g =
            null != o
                ? {
                      account: _,
                      track: o,
                      startTime: ed(m, s),
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
        eD(b.default.getId()),
        null == o || E ? er.stop() : er.start(o.duration - s + V, () => ef(_.id)),
        null != i && ((!n && s > 0) || null == c || (null != g && i.trackId !== g.track.id))
            ? ($.info(
                  "Listen along active but playback stopped or track changed. Stopping listen along in ".concat(
                      V,
                      "ms",
                  ),
              ),
              ei.start(V, () => {
                  $.info("Stopping listening along"), (0, h.Z)(), ef(_.id);
              }))
            : ei.isStarted() && ($.info("Listen along stop cancelled as playback of track resumed"), ei.stop()),
        O === r ||
            (null == m && null == g) ||
            (null != m && null != g && m.track.id === g.track.id && m.startTime === g.startTime))
    )
        return f;
    null != o &&
        (p.Z.dispatch({
            type: "SPOTIFY_NEW_TRACK",
            track: o,
            connectionId: t,
        }),
        T.default.track(w.rMx.ACTIVITY_UPDATED, {
            party_platform: w.ABu.SPOTIFY,
            track_id: o.id,
            has_images: !0,
            details: o.album.name,
            state: o.name,
            album_id: o.album.id,
            author_ids: o.artists.map((e) => e.id),
            author_names: o.artists.map((e) => e.name),
        }));
}
function eT(e) {
    let { id: t } = e;
    a = t;
}
function eC(e) {
    let { accountId: t, devices: n } = e;
    (eo[t] = n), $.info("Devices updated for ".concat(t, ":"), n);
}
function eA(e) {
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
        !!(0, R.Ps)(u.id) &&
        (null != a && (n = a.context_uri),
        null != i && ey(),
        null != a &&
            void ((0, P.hY)(s.accountId, s.accessToken, c, null != (t = a.type) ? t : R.Hw.TRACK, {
                contextUri: n,
                deviceId: l.id,
            }),
            $.info("Play started: ".concat(s.accountId, " playing ").concat(c, " on ").concat(l.name))))
    );
}
function eP(e) {
    let { activity: t, userId: n } = e;
    return eb(n, t, !0);
}
function eR() {
    if (null == i || null == eu()) return !1;
    let { userId: e } = i,
        t = ep(e);
    if (null == t)
        return (
            en.start(B, () => {
                null != i && i.userId === e && (0, h.Z)();
            }),
            !1
        );
    en.stop();
    let { sync_id: n, timestamps: r, party: a } = t,
        o = null != n && i.trackId !== n,
        s = null != r && i.startTime !== r.start;
    return o || s ? eb(e, t, !1) : null != a && a.id !== i.partyId && ((i.partyId = a.id), !0);
}
function ew() {
    if (null == r) return;
    let e = eu();
    if (null == e) return;
    let { socket: t } = e;
    (el = !0),
        (0, P.wO)(t.accountId, t.accessToken),
        T.default.track(w.rMx.SPOTIFY_AUTO_PAUSED),
        $.info("Playback auto paused");
}
function eD(e) {
    if (e === b.default.getId()) {
        let t = I.Z.isCurrentClientInVoiceChannel(),
            n = (0, _.O)({
                userId: e,
                checkSoundSharing: !0,
                checkSoundboardSounds: !1,
            });
        t && n && null != r ? (ee.start(Z, ew, !1), et.stop()) : et.start(F, () => ee.stop(), !1);
    }
    return !1;
}
function ex(e) {
    let { userId: t } = e;
    return eD(t);
}
function eL(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n } = t;
        return eD(n) || e;
    }, !1);
}
function ej(e) {
    let { accountId: t, isPremium: n } = e,
        r = ea[t];
    if (null == r) return !1;
    (r.isPremium = n), $.info("Profile updated for ".concat(t, ": isPremium = ").concat(n));
}
function eM(e) {
    let { settings: t } = e;
    if ((null == t ? void 0 : t.desktopSettings) != null) {
        null == ec || ec.stop();
        let { sourceId: e, sound: n } = null == t ? void 0 : t.desktopSettings;
        null != e && E.ZP.getObservedAppNameForWindow(e) === M.name && n
            ? (ec = new f.Xp()).start(Z, ew)
            : (null == ec || ec.stop(), (ec = null));
    } else null == t && (null == ec || ec.stop(), (ec = null));
}
function ek(e, t, n) {
    var r, i, a, o, s, l, c, u, d, f, _, m, h, g;
    let E,
        b,
        { device: y, progress_ms: O, is_playing: v, repeat_state: S, item: I, context: T } = n;
    if (null != I && I.type === R.Hw.TRACK) {
        let e = I.id;
        null != I.linked_from && null != I.linked_from.id && (e = I.linked_from.id),
            (E = {
                id: e,
                name: I.name,
                duration: I.duration_ms,
                type: R.Hw.TRACK,
                album: {
                    id: null != (s = null == (r = I.album) ? void 0 : r.id) ? s : "",
                    name: null != (l = null == (i = I.album) ? void 0 : i.name) ? l : "",
                    image: null == (a = I.album) ? void 0 : a.images[0],
                    type: null != (c = null == (o = I.album) ? void 0 : o.type) ? c : R.Hw.ALBUM,
                },
                artists: Array.isArray(I.artists) ? I.artists.filter((e) => (0, N.lm)(e.id) && (0, N.lm)(e.name)) : [],
                isLocal: I.is_local || !1,
            });
    } else
        null != I &&
            I.type === R.Hw.EPISODE &&
            (E = {
                id: I.id,
                name: I.name,
                duration: I.duration_ms,
                type: R.Hw.EPISODE,
                album: {
                    id: null != (m = null == (u = I.show) ? void 0 : u.id) ? m : "",
                    name: null != (h = null == (d = I.show) ? void 0 : d.name) ? h : "",
                    image: null == (f = I.show) ? void 0 : f.images[0],
                    type: null != (g = null == (_ = I.album) ? void 0 : _.type) ? g : R.Hw.SHOW,
                },
                artists: [],
                isLocal: !1,
            });
    if (
        (null != y && !0 !== y.is_active && (y = j(x({}, y), { is_active: !0 })),
        null != T && [R.Hw.PLAYLIST, R.Hw.ALBUM].includes(T.type))
    ) {
        let n = eZ.getPlayerState(e);
        b =
            null != n && null != n.context && n.context.uri === T.uri
                ? Promise.resolve(n.context)
                : T.type === R.Hw.ALBUM
                  ? Promise.resolve(T)
                  : P.rC
                        .get(e, t, { url: T.href })
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
        null == t || t.type !== R.Hw.PLAYLIST || t.public || (t = null),
            p.Z.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: e,
                track: E,
                volumePercent: null != y ? y.volume_percent : 0,
                isPlaying: v,
                repeat: "off" !== S,
                position: O,
                context: t,
                device: y,
            });
    });
}
function eU(e, t) {
    return P.rC
        .get(e, t, {
            url: R.C7.PLAYER,
            query: { additional_types: "".concat(R.Hw.TRACK, ",").concat(R.Hw.EPISODE) },
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
        this.waitFor(b.default, y.Z, O.Z, v.Z, E.ZP, S.Z, I.Z), this.syncWith([v.Z], () => eR()), (0, P.k1)();
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
        return null != eu() && null != t && null != n && null != n.id && (0, R.Ps)(n.id);
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
        if (null == r) return null != i ? ep(i.userId) : null;
        let {
                track: { artists: a, album: o, name: s, id: l, duration: c, isLocal: u, type: d },
                startTime: f,
                context: p,
            } = r,
            _ = a.slice(0, W);
        a.length > 0 &&
            (e = _.map((e) => {
                let { name: t } = e;
                return t.replace(/;/g, "");
            }).join("; "));
        let m = {},
            h = null != o.image ? (0, C.f)(w.ABu.SPOTIFY, o.image.url) : null;
        null != o.image && null != h && (m.large_image = h),
            o.type !== J && (m.large_text = o.name),
            null != p && (t = p.uri),
            (n = null != i && null != i.partyId ? i.partyId : "".concat(R.lS).concat(b.default.getId()));
        let g = s.length > q ? s.substring(0, q - 3) + "..." : s,
            E = {
                context_uri: t,
                album_id: o.id,
                artist_ids: _.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: d,
                button_urls: [],
            },
            y = {
                name: M.name,
                assets: m,
                details: g,
                state: e,
                timestamps: {
                    start: f,
                    end: f + c,
                },
                party: { id: n },
            };
        return u || ((y.sync_id = l), (y.flags = w.xjy.PLAY | w.xjy.SYNC), (y.metadata = E)), y;
    }
}
D(eG, "displayName", "SpotifyStore");
let eZ = new eG(p.Z, {
        USER_CONNECTIONS_UPDATE: eO,
        CONNECTION_OPEN: eO,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: ev,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eS,
        SPOTIFY_PROFILE_UPDATE: ej,
        SPOTIFY_PLAYER_STATE: eI,
        SPOTIFY_PLAYER_PLAY: eT,
        ACTIVITY_PLAY: eN,
        ACTIVITY_SYNC: eP,
        ACTIVITY_SYNC_STOP: ey,
        SPOTIFY_SET_DEVICES: eC,
        SPOTIFY_SET_ACTIVE_DEVICE: eA,
        SPEAKING: ex,
        VOICE_STATE_UPDATES: eL,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: eM,
    }),
    eF = eZ;
