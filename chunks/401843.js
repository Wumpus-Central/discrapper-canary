n.d(t, {
    A9: () => x,
    Ho: () => L,
    Nl: () => j,
    TZ: () => P,
    Tp: () => U,
    XI: () => w,
    Xd: () => V,
    Xi: () => k,
    a8: () => G,
    dA: () => F,
    nO: () => B,
    vN: () => M,
});
var r = n(284009),
    i = n.n(r),
    a = n(110259),
    s = n(562465),
    o = n(73153),
    l = n(643501),
    c = n(315606),
    u = n(652896),
    d = n(346846),
    f = n(87001),
    p = n(384200),
    _ = n(616356),
    h = n(961350),
    m = n(734057),
    g = n(71393),
    E = n(309010),
    b = n(977997),
    y = n(147036),
    O = n(927813),
    A = n(650338),
    v = n(499785);
n(387755), n(308528);
var S = n(367513);
n(956793);
var I = n(652215),
    T = n(502075);

function C(e, t, n) {
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

function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
let R = 2;

function w(e, t, n) {
    o.h.dispatch(
        N(
            {
                type: "STREAM_START",
                streamType: null != e ? T.U4.GUILD : T.U4.CALL,
                guildId: e,
                channelId: t,
                appContext: __OVERLAY__ ? I.BRT.OVERLAY : I.BRT.APP,
            },
            n,
        ),
    );
}

function P(e, t) {
    let n = (0, u._z)(e);
    o.h.dispatch({
        type: "STREAM_SET_PAUSED",
        streamKey: n,
        paused: t,
    });
}

function D(e, t) {
    let n = m.A.getChannel(t);
    return i()(null != n, "Cannot join a null voice channel"), !b.A.isInChannel(t) && (0, y.Pd)(n, b.A, g.A);
}

function x(e, t) {
    let { defaultWatchMultipleStreams: n } = (0, c.d)({
        location: "StreamActionCreators.watchStream",
    });
    if (null != l.default.getRemoteSessionId()) return;
    let { guildId: r, channelId: i } = e;
    if (null != r && D(r, i)) return;
    let a = (0, u._z)(e),
        s =
            (null == t ? void 0 : t.forceMultiple) ||
            _.A.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== h.default.getId();
            }).length >= R;
    o.h.dispatch({
        type: "STREAM_WATCH",
        streamKey: a,
        allowMultiple: s || n,
    }),
        ((null == t ? void 0 : t.forceFocus) !== !0 && (s || (null != t && t.noFocus))) ||
            S.A.selectParticipant(e.channelId, a);
}

function L(e, t) {
    o.h.dispatch({
        type: "STREAM_UPDATE_SELF_HIDDEN",
        channelId: e,
        selfStreamHidden: t,
    });
}

function j(e, t) {
    let { guildId: n, channelId: r } = e;
    if (null != n && D(n, r)) return;
    x(e, t);
    let i = f.A.getWindowOpen(I.MLl.CHANNEL_CALL_POPOUT),
        a = E.A.getVoiceChannelId();
    (i && a === r) || (0, d.A)(e);
}

function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n && k(e, t),
        o.h.dispatch({
            type: "STREAM_STOP",
            streamKey: e,
            appContext: __OVERLAY__ ? I.BRT.OVERLAY : I.BRT.APP,
        });
}

function k(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    o.h.dispatch({
        type: "STREAM_CLOSE",
        streamKey: e,
        canShowFeedback: t,
    });
}
async function U(e, t, n) {
    if (!p.A.shouldFetchPreview(e, t, n)) return;
    let r = (0, u._z)({
        streamType: null != e ? T.U4.GUILD : T.U4.CALL,
        guildId: e,
        channelId: t,
        ownerId: n,
    });
    o.h.dispatch({
        type: "STREAM_PREVIEW_FETCH_START",
        streamKey: r,
    });
    try {
        let e = await s.Bo.get({
            url: I.Rsh.STREAM_PREVIEW(r),
            query: {
                version: Date.now(),
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        o.h.dispatch({
            type: "STREAM_PREVIEW_FETCH_SUCCESS",
            streamKey: r,
            previewURL: e.body.url,
        });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * O.A.Millis.SECOND),
            o.h.dispatch({
                type: "STREAM_PREVIEW_FETCH_FAIL",
                streamKey: r,
                retryAfter: e,
            });
    }
}
async function G(e) {
    try {
        await v.A.post({
            url: I.Rsh.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.STREAM_NOTIFY,
            },
            rejectWithError: !0,
        });
    } catch (e) {}
}

function V(e) {
    !0 !== e.noTrack && (0, A.K2)(e.preset, e.resolution, e.frameRate),
        o.h.dispatch(
            N(
                {
                    type: "STREAM_UPDATE_SETTINGS",
                },
                e,
            ),
        );
}

function F(e, t) {
    s.Bo.patch({
        url: I.Rsh.STREAM(e),
        body: {
            region: t,
        },
        oldFormErrors: !0,
        rejectWithError: !0,
    });
}

function B() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = _.A.getCurrentUserActiveStream();
    null != t && M((0, u._z)(t), e);
}
