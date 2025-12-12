n.d(e, { default: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(399606),
    u = n(481060),
    c = n(607070),
    o = n(626135),
    l = n(832239),
    s = n(407383),
    _ = n(981631),
    d = n(388032),
    I = n(360649);
function f(t) {
    let { onClose: e, source: n = s.I.KEYBIND, transitionState: f } = t,
        p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        [U, N] = i.useState(p),
        M = i.useRef(null),
        S = i.useRef(null);
    async function C() {
        await e();
    }
    return (
        i.useEffect(() => {
            let t = new Date();
            return (
                o.default.track(_.rMx.VIBING_WUMPUS_VIEWED, { source: n }),
                p || (0, l.JO)(),
                () => {
                    o.default.track(_.rMx.VIBING_WUMPUS_CLOSED, {
                        duration_open_ms: new Date().getTime() - t.getTime(),
                        source: n,
                    }),
                        (0, l.zu)();
                }
            );
        }, [n]),
        (0, r.jsxs)("div", {
            className: I.riveContainer,
            children: [
                (0, r.jsx)(u.b_m, {
                    withReducedMotion: "halt",
                    listenOnDocumentBody: !0,
                    artboard: "Background",
                    ref: S,
                    className: I.backgroundRive,
                }),
                (0, r.jsx)(u.Ioy, {
                    graphic: {
                        rive: u.glG,
                        type: "rive",
                        props: {
                            ref: M,
                            withReducedMotion: "halt",
                        },
                    },
                    gradientColor: "blue",
                    title: d.intl.string(d.t.L4ifkZ),
                    subtitle: d.intl.string(d.t.GkCsLr),
                    actions: [
                        {
                            text: d.intl.string(d.t["8eKkaf"]),
                            onClick: () => {
                                e(), o.default.track(_.rMx.VIBING_WUMPUS_ACTION, { action: s.G.BACK_TO_CONVERSATION });
                            },
                            variant: "secondary",
                        },
                        {
                            text: d.intl.string(U ? d.t.RscU7I : d.t.ZcgDJX),
                            onClick: () => {
                                var t, e, n, r;
                                U
                                    ? ((0, l.JO)(),
                                      o.default.track(_.rMx.VIBING_WUMPUS_ACTION, { action: s.G.PLAY }),
                                      null == (t = M.current) || t.play(),
                                      null == (e = S.current) || e.play())
                                    : ((0, l.hW)(),
                                      o.default.track(_.rMx.VIBING_WUMPUS_ACTION, { action: s.G.PAUSE }),
                                      null == (n = M.current) || n.pause(),
                                      null == (r = S.current) || r.pause()),
                                    N(!U);
                            },
                            icon: U ? u.o1U : u.fpf,
                        },
                    ],
                    onClose: C,
                    transitionState: f,
                }),
            ],
        })
    );
}
