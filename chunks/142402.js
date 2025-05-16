n.d(t, { default: () => h });
var r = n(255367),
    l = n(73800),
    i = n(990547),
    o = n(481060),
    a = n(957115),
    s = n(891802),
    c = n(332664),
    u = n(538211),
    d = n(698066),
    b = n(626135),
    m = n(981631),
    p = n(531578),
    f = n(70722),
    _ = n(388032);
let O = [f.kr.OTHER];
function h(e) {
    let { isStreamer: t, stream: h, streamApplication: g, onClose: y, transitionState: j, analyticsData: x } = e;
    l.useEffect(() => {
        b.default.track(m.rMx.OPEN_MODAL, {
            type: 'Stream Problem Report',
            other_user_id: h.ownerId,
            application_id: null != g ? g.id : null,
            application_name: null != g ? g.name : null,
            game_id: null != g ? g.id : null,
            source: 'Stream End'
        });
    }, [h.ownerId, g]);
    let { showVibesHoneypot: v } = (0, s.X)({ location: 'StreamFeedback' }),
        S = _.intl.string(_.t['5smP3d']),
        k = _.intl.string(_.t['0uxA2d']),
        w = _.intl.string(_.t.CqjnLC);
    return (0, r.jsx)(c.Z, {
        modalType: 'stream',
        header: S,
        impression: {
            impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: x.media_session_id,
                rtc_connection_id: x.rtc_connection_id,
                parent_media_session_id: x.parent_media_session_id
            }
        },
        body: t ? k : w,
        problemTitle: _.intl.string(_.t['6Y1t5O']),
        problems: (0, u.Z)({
            isStreamer: t,
            isEndStream: !0,
            showVibesHoneypot: v
        }),
        freeformNeededProblems: O,
        onSubmit: function (e) {
            var t;
            let { rating: l, problem: i, dontShowAgain: s, feedback: c } = e;
            s &&
                (0, a.U)({
                    feedbackType: p.nw.STREAM,
                    location: 'StreamFeedback'
                }),
                null != l &&
                    ((0, d.Z)({
                        problem: null != (t = null == i ? void 0 : i.value) ? t : null,
                        stream: h,
                        feedback: c,
                        streamApplication: g,
                        analyticsData: x,
                        location: 'Stream End',
                        rating: l
                    }),
                    null != i &&
                        (0, o.ZDy)(async () => {
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
                                    })({ body: _.intl.string(_.t.mMTVnp) }, t)
                                );
                        }));
        },
        onClose: y,
        transitionState: j,
        otherKey: f.kr.OTHER
    });
}
