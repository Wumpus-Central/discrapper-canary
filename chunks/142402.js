n.d(t, { default: () => O });
var r = n(255367),
    o = n(73800),
    i = n(990547),
    l = n(481060),
    a = n(957115),
    c = n(891802),
    s = n(332664),
    u = n(538211),
    _ = n(698066),
    b = n(626135),
    d = n(981631),
    p = n(531578),
    m = n(70722),
    f = n(388032);
let y = [m.kr.OTHER];
function O(e) {
    let { isStreamer: t, stream: O, streamApplication: g, onClose: h, transitionState: w, analyticsData: S } = e;
    o.useEffect(() => {
        b.default.track(d.rMx.OPEN_MODAL, {
            type: 'Stream Problem Report',
            other_user_id: O.ownerId,
            application_id: null != g ? g.id : null,
            application_name: null != g ? g.name : null,
            game_id: null != g ? g.id : null,
            source: 'Stream End'
        });
    }, [O.ownerId, g]);
    let { showVibesHoneypot: j } = (0, c.X)({ location: 'StreamFeedback' }),
        v = f.intl.string(f.t['5smP3d']),
        k = f.intl.string(f.t['0uxA2d']),
        E = f.intl.string(f.t.CqjnLC);
    return (0, r.jsx)(s.Z, {
        modalType: 'stream',
        header: v,
        impression: {
            impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: S.media_session_id,
                rtc_connection_id: S.rtc_connection_id,
                parent_media_session_id: S.parent_media_session_id
            }
        },
        body: t ? k : E,
        problemTitle: f.intl.string(f.t['6Y1t5O']),
        problems: (0, u.Z)({
            isStreamer: t,
            isEndStream: !0,
            showVibesHoneypot: j
        }),
        freeformNeededProblems: y,
        onSubmit: function (e) {
            var t;
            let { rating: o, problem: i, dontShowAgain: c, feedback: s } = e;
            c &&
                (0, a.Uv)({
                    feedbackType: p.nw.STREAM,
                    location: 'StreamFeedback'
                }),
                null != o &&
                    ((0, _.Z)({
                        problem: null != (t = null == i ? void 0 : i.value) ? t : null,
                        stream: O,
                        feedback: s,
                        streamApplication: g,
                        analyticsData: S,
                        location: 'Stream End',
                        rating: o
                    }),
                    null != i &&
                        (0, l.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({ body: f.intl.string(f.t.mMTVnp) }, t)
                                );
                        }));
        },
        onClose: h,
        transitionState: w,
        otherKey: m.kr.OTHER
    });
}
