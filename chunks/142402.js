n.d(t, { default: () => x });
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
    p = n(531578),
    _ = n(70722),
    f = n(190378),
    h = n(388032);
let O = [_.kr.OTHER];
function x(e) {
    let { isStreamer: t, stream: x, streamApplication: g, onClose: N, transitionState: j, analyticsData: v } = e;
    l.useEffect(() => {
        m.default.track(b.rMx.OPEN_MODAL, {
            type: 'Stream Problem Report',
            other_user_id: x.ownerId,
            application_id: null != g ? g.id : null,
            application_name: null != g ? g.name : null,
            game_id: null != g ? g.id : null,
            source: 'Stream End'
        });
    }, [x.ownerId, g]);
    let { showFormStyleSurvey: y, hideNeutralOption: S, showVibesHoneypot: k } = (0, o.X)({ location: 'StreamFeedback' }),
        E = y ? h.NW.string(h.t.OR6KNz) : h.NW.string(h.t['5smP3d']),
        R = y ? void 0 : h.NW.string(h.t['0uxA2d']),
        w = y ? void 0 : h.NW.string(h.t.CqjnLC),
        L = S ? [p.aZ.BAD, p.aZ.GOOD] : void 0,
        P = y
            ? {
                  [p.aZ.BAD]: h.NW.string(h.t.ISINlJ),
                  [p.aZ.GOOD]: h.NW.string(h.t.IySkjY)
              }
            : void 0;
    return (0, r.jsx)(s.Z, {
        modalType: 'stream',
        header: E,
        impression: {
            impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: v.media_session_id,
                rtc_connection_id: v.rtc_connection_id,
                parent_media_session_id: v.parent_media_session_id
            }
        },
        body: t ? R : w,
        ratingOptions: L,
        ratingTextLabels: P,
        problemTitle: h.NW.string(h.t['6Y1t5O']),
        problems: (0, c.Z)({
            isStreamer: t,
            isEndStream: !0,
            showVibesHoneypot: k
        }),
        freeformNeededProblems: O,
        onSubmit: function (e) {
            var t;
            let { rating: l, problem: i, dontShowAgain: o, feedback: s } = e;
            o && (0, d.Kw)(f.v.REPORT_PROBLEM_POST_STREAM),
                null != l &&
                    ((0, u.Z)({
                        problem: null != (t = null == i ? void 0 : i.value) ? t : null,
                        stream: x,
                        feedback: s,
                        streamApplication: g,
                        analyticsData: v,
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
                                    })({ body: h.NW.string(h.t.mMTVnp) }, t)
                                );
                        }));
        },
        onClose: N,
        transitionState: j,
        otherKey: _.kr.OTHER
    });
}
