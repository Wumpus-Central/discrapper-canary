n.r(t),
    n.d(t, {
        default: function () {
            return p;
        }
    });
var l = n(200651),
    a = n(192379),
    i = n(481060),
    r = n(332664),
    o = n(538211),
    s = n(698066),
    c = n(142497),
    u = n(626135),
    d = n(981631),
    m = n(70722),
    b = n(190378),
    f = n(388032);
let g = [m.kr.OTHER];
function p(e) {
    let { isStreamer: t, stream: p, streamApplication: x, onClose: h, transitionState: _, analyticsData: j } = e,
        k = t ? f.intl.string(f.t['0uxA2d']) : f.intl.string(f.t.CqjnLC);
    return (
        a.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
                type: 'Stream Problem Report',
                other_user_id: p.ownerId,
                application_id: null != x ? x.id : null,
                application_name: null != x ? x.name : null,
                game_id: null != x ? x.id : null,
                source: 'Stream End'
            });
        }, [p.ownerId, x]),
        (0, l.jsx)(r.Z, {
            modalType: 'stream',
            header: f.intl.string(f.t['5smP3d']),
            body: k,
            problemTitle: f.intl.string(f.t['6Y1t5O']),
            problems: (0, o.Z)(t, !0),
            feedbackProblems: g,
            onSubmit: function (e) {
                let { rating: t, problem: a, dontShowAgain: r, feedback: o } = e;
                if ((r && (0, c.Kw)(b.v.REPORT_PROBLEM_POST_STREAM), null != t))
                    (0, s.Z)({
                        problem: a,
                        stream: p,
                        feedback: o,
                        streamApplication: x,
                        analyticsData: j,
                        location: 'Stream End',
                        rating: t
                    }),
                        null != a &&
                            (0, i.openModalLazy)(async () => {
                                let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        body: f.intl.string(f.t.mMTVnp),
                                        ...t
                                    });
                            });
            },
            onClose: h,
            transitionState: _,
            otherKey: m.kr.OTHER
        })
    );
}
