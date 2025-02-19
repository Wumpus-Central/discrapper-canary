n.d(t, { default: () => p });
var l = n(200651),
    a = n(192379),
    r = n(481060),
    i = n(891802),
    s = n(332664),
    o = n(538211),
    c = n(698066),
    u = n(142497),
    d = n(626135),
    m = n(981631),
    b = n(531578),
    f = n(70722),
    _ = n(190378),
    h = n(388032);
let x = [f.kr.OTHER];
function p(e) {
    let { isStreamer: t, stream: p, streamApplication: N, onClose: g, transitionState: j, analyticsData: v } = e;
    a.useEffect(() => {
        d.default.track(m.rMx.OPEN_MODAL, {
            type: 'Stream Problem Report',
            other_user_id: p.ownerId,
            application_id: null != N ? N.id : null,
            application_name: null != N ? N.name : null,
            game_id: null != N ? N.id : null,
            source: 'Stream End'
        });
    }, [p.ownerId, N]);
    let { showRefreshedSurvey: O } = (0, i.X)({ location: 'StreamFeedback' }),
        k = O ? h.NW.string(h.t.OR6KNz) : h.NW.string(h.t['5smP3d']),
        R = O ? void 0 : h.NW.string(h.t['0uxA2d']),
        E = O ? void 0 : h.NW.string(h.t.CqjnLC),
        y = O ? [b.aZ.BAD, b.aZ.GOOD] : void 0,
        S = O
            ? {
                  [b.aZ.BAD]: h.NW.string(h.t.ISINlJ),
                  [b.aZ.GOOD]: h.NW.string(h.t.IySkjY)
              }
            : void 0;
    return (0, l.jsx)(s.Z, {
        modalType: 'stream',
        header: k,
        body: t ? R : E,
        ratingOptions: y,
        ratingTextLabels: S,
        problemTitle: h.NW.string(h.t['6Y1t5O']),
        problems: (0, o.Z)(t, !0),
        freeformNeededProblems: x,
        onSubmit: function (e) {
            let { rating: t, problem: a, dontShowAgain: i, feedback: s } = e;
            i && (0, u.Kw)(_.v.REPORT_PROBLEM_POST_STREAM),
                null != t &&
                    ((0, c.Z)({
                        problem: a,
                        stream: p,
                        feedback: s,
                        streamApplication: N,
                        analyticsData: v,
                        location: 'Stream End',
                        rating: t
                    }),
                    null != a &&
                        (0, r.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, l.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                l = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (l = l.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                l.forEach(function (t) {
                                                    var l;
                                                    (l = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: l,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = l);
                                                });
                                        }
                                        return e;
                                    })({ body: h.NW.string(h.t.mMTVnp) }, t)
                                );
                        }));
        },
        onClose: g,
        transitionState: j,
        otherKey: f.kr.OTHER
    });
}
