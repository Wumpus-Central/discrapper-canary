n.d(t, { default: () => g });
var r = n(255367),
    i = n(73800),
    o = n(990547),
    l = n(481060),
    a = n(957115),
    c = n(328171),
    u = n(891802),
    s = n(332664),
    d = n(538211),
    b = n(698066),
    _ = n(626135),
    m = n(981631),
    p = n(531578),
    f = n(70722),
    y = n(388032);
let O = [f.kr.OTHER];
function g(e) {
    let { isStreamer: t, stream: g, streamApplication: h, onClose: v, transitionState: j, analyticsData: w } = e;
    i.useEffect(() => {
        _.default.track(m.rMx.OPEN_MODAL, {
            type: 'Stream Problem Report',
            other_user_id: g.ownerId,
            application_id: null != h ? h.id : null,
            application_name: null != h ? h.name : null,
            game_id: null != h ? h.id : null,
            source: 'Stream End'
        });
    }, [g.ownerId, h]);
    let { surveyEmojiKind: S } = (0, c.R)({ location: 'StreamFeedback' }),
        { showVibesHoneypot: E } = (0, u.X)({ location: 'StreamFeedback' }),
        k = y.intl.string(y.t['5smP3d']),
        P = y.intl.string(y.t['0uxA2d']),
        R = y.intl.string(y.t.CqjnLC);
    return (0, r.jsx)(s.Z, {
        modalType: 'stream',
        header: k,
        ratingEmojiKind: S,
        impression: {
            impressionName: o.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: w.media_session_id,
                rtc_connection_id: w.rtc_connection_id,
                parent_media_session_id: w.parent_media_session_id
            }
        },
        body: t ? P : R,
        problemTitle: y.intl.string(y.t['6Y1t5O']),
        problems: (0, d.Z)({
            isStreamer: t,
            isEndStream: !0,
            showVibesHoneypot: E
        }),
        freeformNeededProblems: O,
        onSubmit: function (e) {
            var t;
            let { rating: i, problem: o, dontShowAgain: c, feedback: u } = e;
            (c &&
                (0, a.Uv)({
                    feedbackType: p.nw.STREAM,
                    location: 'StreamFeedback'
                }),
                null != i &&
                    ((0, b.Z)({
                        problem: null != (t = null == o ? void 0 : o.value) ? t : null,
                        stream: g,
                        feedback: u,
                        streamApplication: h,
                        analyticsData: w,
                        location: 'Stream End',
                        rating: i
                    }),
                    null != o &&
                        (0, l.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    ((r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r));
                                                }));
                                        }
                                        return e;
                                    })({ body: y.intl.string(y.t.mMTVnp) }, t)
                                );
                        })));
        },
        onClose: v,
        transitionState: j,
        otherKey: f.kr.OTHER
    });
}
