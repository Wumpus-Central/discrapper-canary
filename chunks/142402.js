n.d(t, { default: () => g });
var r = n(200651),
    l = n(192379),
    i = n(990547),
    a = n(481060),
    o = n(891802),
    s = n(332664),
    c = n(538211),
    u = n(698066),
    d = n(142497),
    m = n(626135),
    b = n(981631),
    _ = n(531578),
    p = n(70722),
    f = n(190378),
    h = n(388032);
let O = [p.kr.OTHER];
function g(e) {
    let { isStreamer: t, stream: g, streamApplication: x, onClose: v, transitionState: j, analyticsData: y } = e;
    l.useEffect(() => {
        m.default.track(b.rMx.OPEN_MODAL, {
            type: 'Stream Problem Report',
            other_user_id: g.ownerId,
            application_id: null != x ? x.id : null,
            application_name: null != x ? x.name : null,
            game_id: null != x ? x.id : null,
            source: 'Stream End'
        });
    }, [g.ownerId, x]);
    let { showFormStyleSurvey: S, hideNeutralOption: k, showVibesHoneypot: E } = (0, o.X)({ location: 'StreamFeedback' }),
        R = S ? h.intl.string(h.t.OR6KNz) : h.intl.string(h.t['5smP3d']),
        N = S ? void 0 : h.intl.string(h.t['0uxA2d']),
        w = S ? void 0 : h.intl.string(h.t.CqjnLC),
        L = k ? [_.aZ.BAD, _.aZ.GOOD] : void 0,
        P = S
            ? {
                  [_.aZ.BAD]: h.intl.string(h.t.ISINlJ),
                  [_.aZ.GOOD]: h.intl.string(h.t.IySkjY)
              }
            : void 0;
    return (0, r.jsx)(s.Z, {
        modalType: 'stream',
        header: R,
        impression: {
            impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: y.media_session_id,
                rtc_connection_id: y.rtc_connection_id,
                parent_media_session_id: y.parent_media_session_id
            }
        },
        body: t ? N : w,
        ratingOptions: L,
        ratingTextLabels: P,
        problemTitle: h.intl.string(h.t['6Y1t5O']),
        problems: (0, c.Z)({
            isStreamer: t,
            isEndStream: !0,
            showVibesHoneypot: E
        }),
        freeformNeededProblems: O,
        onSubmit: function (e) {
            var t;
            let { rating: l, problem: i, dontShowAgain: o, feedback: s } = e;
            o && (0, d.Kw)(f.v.REPORT_PROBLEM_POST_STREAM),
                null != l &&
                    ((0, u.Z)({
                        problem: null != (t = null == i ? void 0 : i.value) ? t : null,
                        stream: g,
                        feedback: s,
                        streamApplication: x,
                        analyticsData: y,
                        location: 'Stream End',
                        rating: l
                    }),
                    null != i &&
                        (0, a.ZDy)(async () => {
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
                                    })({ body: h.intl.string(h.t.mMTVnp) }, t)
                                );
                        }));
        },
        onClose: v,
        transitionState: j,
        otherKey: p.kr.OTHER
    });
}
