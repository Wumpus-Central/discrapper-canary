n.d(t, { default: () => N });
var r = n(200651),
    a = n(192379),
    l = n(990547),
    i = n(481060),
    s = n(891802),
    o = n(332664),
    c = n(538211),
    u = n(698066),
    d = n(142497),
    m = n(626135),
    _ = n(981631),
    b = n(531578),
    f = n(70722),
    p = n(190378),
    x = n(388032);
let h = [f.kr.OTHER];
function N(e) {
    let { isStreamer: t, stream: N, streamApplication: g, onClose: O, transitionState: j, analyticsData: v } = e;
    a.useEffect(() => {
        m.default.track(_.rMx.OPEN_MODAL, {
            type: 'Stream Problem Report',
            other_user_id: N.ownerId,
            application_id: null != g ? g.id : null,
            application_name: null != g ? g.name : null,
            game_id: null != g ? g.id : null,
            source: 'Stream End'
        });
    }, [N.ownerId, g]);
    let { showRefreshedSurvey: R } = (0, s.X)({ location: 'StreamFeedback' }),
        k = R ? x.NW.string(x.t.OR6KNz) : x.NW.string(x.t['5smP3d']),
        E = R ? void 0 : x.NW.string(x.t['0uxA2d']),
        S = R ? void 0 : x.NW.string(x.t.CqjnLC),
        y = R ? [b.aZ.BAD, b.aZ.GOOD] : void 0,
        Z = R
            ? {
                  [b.aZ.BAD]: x.NW.string(x.t.ISINlJ),
                  [b.aZ.GOOD]: x.NW.string(x.t.IySkjY)
              }
            : void 0;
    return (0, r.jsx)(o.Z, {
        modalType: 'stream',
        header: k,
        impression: {
            impressionName: l.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: v.media_session_id,
                rtc_connection_id: v.rtc_connection_id,
                parent_media_session_id: v.parent_media_session_id
            }
        },
        body: t ? E : S,
        ratingOptions: y,
        ratingTextLabels: Z,
        problemTitle: x.NW.string(x.t['6Y1t5O']),
        problems: (0, c.Z)(t, !0),
        freeformNeededProblems: h,
        onSubmit: function (e) {
            let { rating: t, problem: a, dontShowAgain: l, feedback: s } = e;
            l && (0, d.Kw)(p.v.REPORT_PROBLEM_POST_STREAM),
                null != t &&
                    ((0, u.Z)({
                        problem: a,
                        stream: N,
                        feedback: s,
                        streamApplication: g,
                        analyticsData: v,
                        location: 'Stream End',
                        rating: t
                    }),
                    null != a &&
                        (0, i.ZDy)(async () => {
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
                                    })({ body: x.NW.string(x.t.mMTVnp) }, t)
                                );
                        }));
        },
        onClose: O,
        transitionState: j,
        otherKey: f.kr.OTHER
    });
}
