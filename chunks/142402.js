n.d(t, { default: () => N });
var l = n(200651),
    a = n(192379),
    s = n(481060),
    i = n(891802),
    r = n(332664),
    o = n(538211),
    c = n(698066),
    d = n(142497),
    u = n(626135),
    m = n(981631),
    _ = n(531578),
    x = n(70722),
    b = n(190378),
    h = n(388032);
let f = [x.kr.OTHER];
function N(e) {
    let { isStreamer: t, stream: N, streamApplication: p, onClose: g, transitionState: v, analyticsData: j } = e;
    a.useEffect(() => {
        u.default.track(m.rMx.OPEN_MODAL, {
            type: 'Stream Problem Report',
            other_user_id: N.ownerId,
            application_id: null != p ? p.id : null,
            application_name: null != p ? p.name : null,
            game_id: null != p ? p.id : null,
            source: 'Stream End'
        });
    }, [N.ownerId, p]);
    let { showRefreshedSurvey: k } = (0, i.X)({ location: 'StreamFeedback' }),
        R = k ? h.NW.string(h.t.OR6KNz) : h.NW.string(h.t['5smP3d']),
        O = k ? void 0 : h.NW.string(h.t['0uxA2d']),
        E = k ? void 0 : h.NW.string(h.t.CqjnLC),
        Z = k ? [_.aZ.BAD, _.aZ.GOOD] : void 0,
        S = k
            ? {
                  [_.aZ.BAD]: h.NW.string(h.t.ISINlJ),
                  [_.aZ.GOOD]: h.NW.string(h.t.IySkjY)
              }
            : void 0;
    return (0, l.jsx)(r.Z, {
        modalType: 'stream',
        header: R,
        body: t ? O : E,
        ratingOptions: Z,
        ratingTextLabels: S,
        problemTitle: h.NW.string(h.t['6Y1t5O']),
        problems: (0, o.Z)(t, !0),
        freeformNeededProblems: f,
        onSubmit: function (e) {
            let { rating: t, problem: a, dontShowAgain: i, feedback: r } = e;
            i && (0, d.Kw)(b.v.REPORT_PROBLEM_POST_STREAM),
                null != t &&
                    ((0, c.Z)({
                        problem: a,
                        stream: N,
                        feedback: r,
                        streamApplication: p,
                        analyticsData: j,
                        location: 'Stream End',
                        rating: t
                    }),
                    null != a &&
                        (0, s.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    body: h.NW.string(h.t.mMTVnp),
                                    ...t
                                });
                        }));
        },
        onClose: g,
        transitionState: v,
        otherKey: x.kr.OTHER
    });
}
