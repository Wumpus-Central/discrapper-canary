let i, a, s;
var o,
    l,
    u = r(47120);
var c = r(653041);
var d = r(724458);
var f = r(757143);
var _ = r(789020);
var h = r(392711),
    p = r.n(h),
    m = r(261470),
    g = r(442837),
    E = r(902704),
    v = r(846519),
    I = r(570140),
    T = r(586902),
    b = r(726542),
    y = r(524331),
    S = r(710845),
    A = r(594190),
    N = r(314897),
    C = r(553795),
    R = r(517100),
    O = r(158776),
    D = r(606304),
    L = r(979651),
    x = r(626135),
    w = r(81063),
    P = r(70956),
    M = r(823379),
    k = r(781518),
    U = r(616922),
    B = r(981631);
function G(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let Z = b.Z.get(B.ABu.SPOTIFY),
    F = 'wss://dealer.spotify.com/?access_token=',
    V = 'hm://pusher/v1/connections/',
    j = 30 * P.Z.Millis.SECOND,
    H = 30 * P.Z.Millis.SECOND,
    Y = 100,
    W = 5 * P.Z.Millis.MINUTE,
    K = 5 * P.Z.Millis.SECOND,
    z = 1.5 * P.Z.Millis.SECOND,
    q = 'Computer',
    Q = 5,
    X = 1 * P.Z.Millis.MINUTE,
    J = 3 * P.Z.Millis.SECOND,
    $ = 128;
!(function (e) {
    (e.PLAYER_STATE_CHANGED = 'PLAYER_STATE_CHANGED'), (e.DEVICE_STATE_CHANGED = 'DEVICE_STATE_CHANGED');
})(o || (o = {}));
let ee = {
        MESSAGE: 'message',
        PING: 'ping',
        PONG: 'pong'
    },
    et = 'single',
    en = new S.Z('Spotify'),
    er = new v.V7(),
    ei = new v.V7(),
    ea = new v.V7(),
    es = new v.V7(),
    eo = new v.V7(),
    el = {},
    eu = {},
    ec = {},
    ed = !1,
    ef = null;
function e_() {
    for (let e in el) {
        let n = el[e];
        if (!n.connected || null == eu[e]) continue;
        let r = eu[e].find((e) => e.is_active);
        if (null != r)
            return {
                socket: n,
                device: r
            };
    }
}
function eh(e, n) {
    let r = Date.now(),
        i = null != e ? e.startTime : 0,
        a = r - n;
    return Math.abs(a - i) > z ? a : i;
}
function ep(e) {
    I.Z.dispatch({
        type: 'SPOTIFY_PLAYER_STATE',
        accountId: e,
        track: null,
        volumePercent: 0,
        isPlaying: !1,
        repeat: !1,
        position: 0,
        context: null
    });
}
function em(e) {
    return O.Z.findActivity(e, (e) => null != e.party && null != e.party.id && (0, U.Ps)(e.party.id));
}
let eg = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class eE {
    get connected() {
        return null != this.socket && eg.has(this.socket.readyState);
    }
    connect() {
        !this.connected &&
            !this._requestedConnect &&
            (en.info('WS Connecting'),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            eF(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1), (this.socket = new WebSocket(''.concat(F).concat(this.accessToken))), (this.socket.onopen = this.handleOpen.bind(this)), (this.socket.onmessage = this.handleMessage.bind(this)), (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    en.error(e), (this._requestedConnect = !1), this.handleClose();
                }));
    }
    disconnect() {
        (this._requestedDisconnect = !0), this.backoff.cancel();
        try {
            var e;
            null === (e = this.socket) || void 0 === e || e.close();
        } catch (e) {}
    }
    ping() {
        var e;
        this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({ type: ee.PING })));
    }
    handleOpen() {
        en.info('WS Connected'), this.backoff.succeed(), this.pingInterval.start(j, () => this.ping()), (0, k.Ai)(this.accountId, this.accessToken), (0, k.PW)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: n } = e;
        if ('string' != typeof n) return;
        let { type: r, uri: i, payloads: a } = JSON.parse(n);
        switch (r) {
            case ee.MESSAGE:
                if ('string' == typeof i && i.startsWith(V)) (this.connectionId = decodeURIComponent(i.split(V)[1])), (0, k.am)(this.accountId, this.accessToken, this.connectionId);
                else if (Array.isArray(a)) {
                    for (let { events: e } of a) if (null != e) for (let n of e) this.handleEvent(n);
                }
            case ee.PONG:
        }
    }
    handleClose() {
        if ((this.pingInterval.stop(), !this._requestedDisconnect))
            try {
                let e = this.backoff.fail(() => {
                    !this._requestedDisconnect && this.connect();
                });
                en.info('WS Disconnected. Next retry in '.concat(Math.round(e), 'ms'));
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: n, event: r } = e;
        switch (n) {
            case 'PLAYER_STATE_CHANGED':
                null != r && null != r.state && eZ(this.accountId, this.accessToken, r.state);
                break;
            case 'DEVICE_STATE_CHANGED':
                this.handleDeviceStateChange();
        }
    }
    constructor(e, n) {
        G(this, 'accessToken', void 0),
            G(this, 'accountId', void 0),
            G(this, 'connectionId', void 0),
            G(this, 'isPremium', void 0),
            G(this, 'pingInterval', void 0),
            G(this, 'backoff', void 0),
            G(this, 'socket', void 0),
            G(this, '_requestedDisconnect', !1),
            G(this, '_requestedConnect', !1),
            G(
                this,
                'handleDeviceStateChange',
                p().throttle(() => {
                    (0, k.PW)(this.accountId, this.accessToken), eF(this.accountId, this.accessToken);
                }, J)
            ),
            (this.accountId = e),
            (this.accessToken = n),
            (this.pingInterval = new v.Xp()),
            (this.backoff = new m.Z(void 0, X)),
            this.connect();
    }
}
function ev(e, n) {
    e in el ? ((el[e].accessToken = n), en.info('Updated account access token: '.concat(e))) : ((el[e] = new eE(e, n)), en.info('Added account: '.concat(e)));
}
function eI(e) {
    if (!(e in el)) return;
    el[e].disconnect(), delete el[e];
    let n = ec[e];
    null != n && null != i && n.track.id === i.track.id && (i = null), delete ec[e], en.info('Removed account: '.concat(e));
}
function eT(e, n) {
    for (let r of eu[e]) r.is_active = r.id === n;
}
function eb(e, n, r) {
    var i, s;
    let o = e_();
    if (null == o) return !1;
    let { socket: l, device: u } = o,
        { sync_id: c, party: d, timestamps: f } = n;
    if (null == c || null == d || null == d.id || !(0, U.Ps)(d.id)) return !1;
    let _ = null != f && null != f.start ? f.start : Date.now(),
        h = Math.max(0, Date.now() - _),
        p = !1,
        m = ec[l.accountId];
    null != m && !1 === m.repeat && (p = null);
    let g = (0, U.c8)(null !== (s = null === (i = n.metadata) || void 0 === i ? void 0 : i.type) && void 0 !== s ? s : U.Hw.TRACK);
    if (null == g) return;
    (0, k.hY)(l.accountId, l.accessToken, c, g, {
        position: +h,
        deviceId: u.id,
        repeat: p
    }),
        (a = {
            userId: e,
            partyId: d.id,
            trackId: c,
            startTime: _
        });
    let E = 'presence change';
    r &&
        ((E = 'started'),
        x.default.track(B.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
            party_id: d.id,
            other_user_id: e
        })),
        en.info('Listen along '.concat(E, ': ').concat(l.accountId, ' to ').concat(e, ' playing ').concat(c, ' on ').concat(u.name));
}
function ey() {
    x.default.track(B.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != a ? a.partyId : null,
        other_user_id: null != a ? a.userId : null
    });
    let e = null != a ? a.trackId : null;
    (a = null), en.info('Listen along stopped');
    let n = e_();
    if (null == n) return;
    let { socket: r } = n,
        i = ec[r.accountId];
    if (null != i && i.track.id === e) (0, k.wO)(r.accountId, r.accessToken);
}
function eS() {
    let e = Object.keys(el),
        n = C.Z.getAccounts().filter((e) => {
            let { type: n } = e;
            return n === B.ABu.SPOTIFY;
        });
    if (null == n) return !1;
    let r = n.map((e) => {
        let { id: n } = e;
        return n;
    });
    for (let n of e) {
        if (!r.includes(n)) eI(n);
    }
    let a = !1;
    for (let r of n) {
        if ((null != i && i.account.id === r.id && ((i.account = r), (a = !0)), !e.includes(r.id))) {
            if (null != r.accessToken) {
                ev(r.id, r.accessToken);
                continue;
            }
            (0, k.hP)(r.id);
        }
    }
    return a;
}
function eA(e) {
    let { accountId: n, accessToken: r } = e;
    return ev(n, r), !1;
}
function eN(e) {
    let { accountId: n } = e;
    eI(n);
}
function eC(e) {
    let { accountId: n, isPlaying: r, repeat: s, track: o, position: l, device: u, context: c } = e,
        d = !1;
    if (null != u) {
        if (null != eu[n]) {
            let e = eu[n].find((e) => {
                let { id: n } = e;
                return n === u.id;
            });
            null == e ? (eu[n].push(u), (d = !0)) : !(0, E.Z)(e, u) && (Object.assign(e, u), (d = !0)), eT(n, u.id);
        } else (eu[n] = [u]), (d = !0);
    }
    r ? null == ef || ef.start(H, eP) : ((o = null), null == ef || ef.stop());
    let f = C.Z.getAccount(n, B.ABu.SPOTIFY);
    if (null == f) return d;
    let _ = ec[n],
        h =
            null != o
                ? {
                      account: f,
                      track: o,
                      startTime: eh(_, l),
                      context: c,
                      repeat: s
                  }
                : null,
        m = null != u && null != a && 0 === l && !r;
    !m && (ec[n] = h);
    let g = i;
    if (
        ((i = p()
            .values(ec)
            .find((e) => null != e)),
        eM(N.default.getId()),
        null == o || m ? es.stop() : es.start(o.duration - l + K, () => ep(f.id)),
        null != a && ((!r && l > 0) || null == u || (null != h && a.trackId !== h.track.id))
            ? (en.info('Listen along active but playback stopped or track changed. Stopping listen along in '.concat(K, 'ms')),
              eo.start(K, () => {
                  en.info('Stopping listening along'), (0, y.Z)(), ep(f.id);
              }))
            : eo.isStarted() && (en.info('Listen along stop cancelled as playback of track resumed'), eo.stop()),
        g === i || (null == _ && null == h) || (null != _ && null != h && _.track.id === h.track.id && _.startTime === h.startTime))
    )
        return d;
    null != o &&
        (I.Z.dispatch({
            type: 'SPOTIFY_NEW_TRACK',
            track: o,
            connectionId: n
        }),
        x.default.track(B.rMx.ACTIVITY_UPDATED, {
            party_platform: B.ABu.SPOTIFY,
            track_id: o.id,
            has_images: !0,
            details: o.album.name,
            state: o.name,
            album_id: o.album.id,
            author_ids: o.artists.map((e) => e.id),
            author_names: o.artists.map((e) => e.name)
        }));
}
function eR(e) {
    let { id: n } = e;
    s = n;
}
function eO(e) {
    let { accountId: n, devices: r } = e;
    (eu[n] = r), en.info('Devices updated for '.concat(n, ':'), r);
}
function eD(e) {
    let { accountId: n, deviceId: r } = e;
    eT(n, r);
}
function eL(e) {
    var n;
    let r,
        { activity: i, metadata: s } = e,
        o = e_();
    if (null == o) return !1;
    let { socket: l, device: u } = o,
        { sync_id: c, party: d } = i;
    return (
        !!(null != c && null != d && null != d.id && (0, U.Ps)(d.id)) &&
        (null != s && (r = s.context_uri),
        null != a && ey(),
        null != s &&
            void ((0, k.hY)(l.accountId, l.accessToken, c, null !== (n = s.type) && void 0 !== n ? n : U.Hw.TRACK, {
                contextUri: r,
                deviceId: u.id
            }),
            en.info('Play started: '.concat(l.accountId, ' playing ').concat(c, ' on ').concat(u.name))))
    );
}
function ex(e) {
    let { activity: n, userId: r } = e;
    return eb(r, n, !0);
}
function ew() {
    if (null == a || null == e_()) return !1;
    let { userId: e } = a,
        n = em(e);
    if (null == n)
        return (
            ea.start(W, () => {
                if (null != a && a.userId === e) (0, y.Z)();
            }),
            !1
        );
    ea.stop();
    let { sync_id: r, timestamps: i, party: s } = n,
        o = null != r && a.trackId !== r,
        l = null != i && a.startTime !== i.start;
    return o || l ? eb(e, n, !1) : null != s && s.id !== a.partyId && ((a.partyId = s.id), !0);
}
function eP() {
    if (null == i) return;
    let e = e_();
    if (null == e) return;
    let { socket: n } = e;
    (ed = !0), (0, k.wO)(n.accountId, n.accessToken), x.default.track(B.rMx.SPOTIFY_AUTO_PAUSED), en.info('Playback auto paused');
}
function eM(e) {
    if (e === N.default.getId()) {
        let n = L.Z.isCurrentClientInVoiceChannel(),
            r = (0, T.O)({
                userId: e,
                checkSoundSharing: !0,
                checkSoundboardSounds: !1
            });
        n && r && null != i ? (er.start(H, eP, !1), ei.stop()) : ei.start(Y, () => er.stop(), !1);
    }
    return !1;
}
function ek(e) {
    let { userId: n } = e;
    return eM(n);
}
function eU(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        let { userId: r } = n;
        return eM(r) || e;
    }, !1);
}
function eB(e) {
    let { accountId: n, isPremium: r } = e,
        i = el[n];
    if (null == i) return !1;
    (i.isPremium = r), en.info('Profile updated for '.concat(n, ': isPremium = ').concat(r));
}
function eG(e) {
    let { settings: n } = e;
    if ((null == n ? void 0 : n.desktopSettings) != null) {
        null == ef || ef.stop();
        let { sourceId: e, sound: r } = null == n ? void 0 : n.desktopSettings;
        null != e && A.ZP.getObservedAppNameForWindow(e) === Z.name && r ? (ef = new v.Xp()).start(H, eP) : (null == ef || ef.stop(), (ef = null));
    } else null == n && (null == ef || ef.stop(), (ef = null));
}
function eZ(e, n, r) {
    var i, a, s, o, l, u, c, d, f, _, h, p, m, g;
    let E,
        v,
        { device: T, progress_ms: b, is_playing: y, repeat_state: S, item: A, context: N } = r;
    if (null != A && A.type === U.Hw.TRACK) {
        let e = A.id;
        null != A.linked_from && null != A.linked_from.id && (e = A.linked_from.id),
            (E = {
                id: e,
                name: A.name,
                duration: A.duration_ms,
                type: U.Hw.TRACK,
                album: {
                    id: null !== (l = null === (i = A.album) || void 0 === i ? void 0 : i.id) && void 0 !== l ? l : '',
                    name: null !== (u = null === (a = A.album) || void 0 === a ? void 0 : a.name) && void 0 !== u ? u : '',
                    image: null === (s = A.album) || void 0 === s ? void 0 : s.images[0],
                    type: null !== (c = null === (o = A.album) || void 0 === o ? void 0 : o.type) && void 0 !== c ? c : U.Hw.ALBUM
                },
                artists: Array.isArray(A.artists) ? A.artists.filter((e) => (0, M.lm)(e.id) && (0, M.lm)(e.name)) : [],
                isLocal: A.is_local || !1
            });
    } else
        null != A &&
            A.type === U.Hw.EPISODE &&
            (E = {
                id: A.id,
                name: A.name,
                duration: A.duration_ms,
                type: U.Hw.EPISODE,
                album: {
                    id: null !== (p = null === (d = A.show) || void 0 === d ? void 0 : d.id) && void 0 !== p ? p : '',
                    name: null !== (m = null === (f = A.show) || void 0 === f ? void 0 : f.name) && void 0 !== m ? m : '',
                    image: null === (_ = A.show) || void 0 === _ ? void 0 : _.images[0],
                    type: null !== (g = null === (h = A.album) || void 0 === h ? void 0 : h.type) && void 0 !== g ? g : U.Hw.SHOW
                },
                artists: [],
                isLocal: !1
            });
    if (
        (null != T &&
            !0 !== T.is_active &&
            (T = {
                ...T,
                is_active: !0
            }),
        null != N && [U.Hw.PLAYLIST, U.Hw.ALBUM].includes(N.type))
    ) {
        let r = ej.getPlayerState(e);
        v =
            null != r && null != r.context && r.context.uri === N.uri
                ? Promise.resolve(r.context)
                : N.type === U.Hw.ALBUM
                  ? Promise.resolve(N)
                  : k.rC
                        .get(e, n, { url: N.href })
                        .then((e) => {
                            let { body: n } = e;
                            return n;
                        })
                        .catch((e) => {
                            if (e && 404 === e.status) return null;
                            throw e;
                        });
    } else v = Promise.resolve(void 0);
    return v.then((n) => {
        null != n && n.type === U.Hw.PLAYLIST && !n.public && (n = null),
            I.Z.dispatch({
                type: 'SPOTIFY_PLAYER_STATE',
                accountId: e,
                track: E,
                volumePercent: null != T ? T.volume_percent : 0,
                isPlaying: y,
                repeat: 'off' !== S,
                position: b,
                context: n,
                device: T
            });
    });
}
function eF(e, n) {
    return k.rC
        .get(e, n, {
            url: U.C7.PLAYER,
            query: { additional_types: ''.concat(U.Hw.TRACK, ',').concat(U.Hw.EPISODE) },
            onlyRetryOnAuthorizationErrors: !0
        })
        .then((r) => {
            let i = r.body;
            null != i ? eZ(e, n, i).then(() => r) : ep(e);
        })
        .catch(() => ep(e));
}
class eV extends (l = g.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, D.Z), this.syncWith([O.Z], () => ew()), (0, k.k1)();
    }
    hasConnectedAccount() {
        return Object.keys(el).length > 0;
    }
    getActiveSocketAndDevice() {
        return e_();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let n in el) {
            let r = el[n];
            if (!r.connected || null == eu[n]) continue;
            let i = eu[n].find((e) => !e.is_restricted && e.type === q);
            null != i &&
                e.push({
                    socket: r,
                    device: i
                });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: n, party: r } = e;
        return null != e_() && null != n && null != r && null != r.id && (0, U.Ps)(r.id);
    }
    getSyncingWith() {
        return a;
    }
    wasAutoPaused() {
        return ed;
    }
    getLastPlayedTrackId() {
        return s;
    }
    getTrack() {
        return null != i ? i.track : null;
    }
    getPlayerState(e) {
        return ec[e];
    }
    shouldShowActivity() {
        return null != i && i.account.showActivity && !R.Z.isIdle();
    }
    getActivity() {
        let e, n, r;
        if (null == i) return null != a ? em(a.userId) : null;
        let {
                track: { artists: s, album: o, name: l, id: u, duration: c, isLocal: d, type: f },
                startTime: _,
                context: h
            } = i,
            p = s.slice(0, Q);
        s.length > 0 &&
            (e = p
                .map((e) => {
                    let { name: n } = e;
                    return n.replace(/;/g, '');
                })
                .join('; '));
        let m = {},
            g = null != o.image ? (0, w.getAssetFromImageURL)(B.ABu.SPOTIFY, o.image.url) : null;
        null != o.image && null != g && (m.large_image = g), o.type !== et && (m.large_text = o.name), null != h && (n = h.uri), (r = null != a && null != a.partyId ? a.partyId : ''.concat(U.lS).concat(N.default.getId()));
        let E = l.length > $ ? l.substring(0, $ - 3) + '...' : l,
            v = {
                context_uri: n,
                album_id: o.id,
                artist_ids: p.map((e) => {
                    let { id: n } = e;
                    return n;
                }),
                type: f,
                button_urls: []
            },
            I = {
                name: Z.name,
                assets: m,
                details: E,
                state: e,
                timestamps: {
                    start: _,
                    end: _ + c
                },
                party: { id: r }
            };
        return !d && ((I.sync_id = u), (I.flags = B.xjy.PLAY | B.xjy.SYNC), (I.metadata = v)), I;
    }
}
G(eV, 'displayName', 'SpotifyStore');
let ej = new eV(I.Z, {
    USER_CONNECTIONS_UPDATE: eS,
    CONNECTION_OPEN: eS,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN: eA,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eN,
    SPOTIFY_PROFILE_UPDATE: eB,
    SPOTIFY_PLAYER_STATE: eC,
    SPOTIFY_PLAYER_PLAY: eR,
    ACTIVITY_PLAY: eL,
    ACTIVITY_SYNC: ex,
    ACTIVITY_SYNC_STOP: ey,
    SPOTIFY_SET_DEVICES: eO,
    SPOTIFY_SET_ACTIVE_DEVICE: eD,
    SPEAKING: ek,
    VOICE_STATE_UPDATES: eU,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: eG
});
n.Z = ej;
