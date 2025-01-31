n.d(t, { default: () => g });
var l = n(200651),
    i = n(192379),
    a = n(481060),
    r = n(332664),
    s = n(538211),
    c = n(698066),
    o = n(142497),
    d = n(626135),
    u = n(981631),
    m = n(70722),
    _ = n(190378),
    x = n(388032);
let p = [m.kr.OTHER];
function g(e) {
    let { isStreamer: t, stream: g, streamApplication: f, onClose: h, transitionState: j, analyticsData: k } = e,
        b = t ? x.intl.string(x.t['0uxA2d']) : x.intl.string(x.t.CqjnLC);
    return (
        i.useEffect(() => {
            d.default.track(u.rMx.OPEN_MODAL, {
                type: 'Stream Problem Report',
                other_user_id: g.ownerId,
                application_id: null != f ? f.id : null,
                application_name: null != f ? f.name : null,
                game_id: null != f ? f.id : null,
                source: 'Stream End'
            });
        }, [g.ownerId, f]),
        (0, l.jsx)(r.Z, {
            modalType: 'stream',
            header: x.intl.string(x.t['5smP3d']),
            body: b,
            problemTitle: x.intl.string(x.t['6Y1t5O']),
            problems: (0, s.Z)(t, !0),
            feedbackProblems: p,
            onSubmit: function (e) {
                let { rating: t, problem: i, dontShowAgain: r, feedback: s } = e;
                r && (0, o.Kw)(_.v.REPORT_PROBLEM_POST_STREAM),
                    null != t &&
                        ((0, c.Z)({
                            problem: i,
                            stream: g,
                            feedback: s,
                            streamApplication: f,
                            analyticsData: k,
                            location: 'Stream End',
                            rating: t
                        }),
                        null != i &&
                            (0, a.ZDy)(async () => {
                                let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        body: x.intl.string(x.t.mMTVnp),
                                        ...t
                                    });
                            }));
            },
            onClose: h,
            transitionState: j,
            otherKey: m.kr.OTHER
        })
    );
}
