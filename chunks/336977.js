n.d(e, { default: () => m }), n(388685);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    o = n.n(r),
    s = n(399606),
    c = n(28664),
    l = n(481060),
    u = n(607070),
    d = n(626135),
    _ = n(832239),
    I = n(532498),
    p = n(407383),
    N = n(981631),
    f = n(388032),
    C = n(40162),
    x = n(617921);
function g(t) {
    let { onClose: e, source: n = p.I.INAPPROPRIATE_CONVERSATION, transitionState: r } = t,
        o = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        [c, I] = i.useState(o),
        x = i.useRef(null),
        g = i.useRef(null);
    async function b() {
        await e();
    }
    return (
        i.useEffect(() => {
            let t = new Date();
            return (
                d.default.track(N.rMx.VIBING_WUMPUS_VIEWED, { source: n }),
                o || (0, _.JO)(),
                () => {
                    d.default.track(N.rMx.VIBING_WUMPUS_CLOSED, {
                        duration_open_ms: new Date().getTime() - t.getTime(),
                        source: n,
                    }),
                        (0, _.zu)();
                }
            );
        }, [n]),
        (0, a.jsxs)("div", {
            className: C.riveContainer,
            children: [
                (0, a.jsx)(l.b_m, {
                    withReducedMotion: "halt",
                    listenOnDocumentBody: !0,
                    artboard: "Background",
                    ref: g,
                    className: C.backgroundRive,
                }),
                (0, a.jsx)(l.Ioy, {
                    graphic: {
                        rive: l.glG,
                        type: "rive",
                        props: {
                            ref: x,
                            withReducedMotion: "halt",
                        },
                    },
                    gradientColor: "blue",
                    title: f.intl.string(f.t.L4ifkZ),
                    subtitle: f.intl.string(f.t.GkCsLr),
                    actions: [
                        {
                            text: f.intl.string(f.t["8eKkaf"]),
                            onClick: () => {
                                e(), d.default.track(N.rMx.VIBING_WUMPUS_ACTION, { action: p.G.BACK_TO_CONVERSATION });
                            },
                            variant: "secondary",
                        },
                        {
                            text: f.intl.string(c ? f.t.RscU7I : f.t.ZcgDJX),
                            onClick: () => {
                                var t, e, n, a;
                                c
                                    ? ((0, _.JO)(),
                                      d.default.track(N.rMx.VIBING_WUMPUS_ACTION, { action: p.G.PLAY }),
                                      null == (t = x.current) || t.play(),
                                      null == (e = g.current) || e.play())
                                    : ((0, _.hW)(),
                                      d.default.track(N.rMx.VIBING_WUMPUS_ACTION, { action: p.G.PAUSE }),
                                      null == (n = x.current) || n.pause(),
                                      null == (a = g.current) || a.pause()),
                                    I(!c);
                            },
                            icon: c ? l.o1U : l.fpf,
                        },
                    ],
                    onClose: b,
                    transitionState: r,
                }),
            ],
        })
    );
}
function b(t) {
    let { onClose: e, source: r = p.I.INAPPROPRIATE_CONVERSATION } = t,
        I = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        [g, b] = i.useState(!1);
    async function m() {
        let { default: t } = await n.e("29641").then(n.t.bind(n, 937359, 19));
        return t;
    }
    return (
        i.useEffect(() => {
            let t = new Date();
            return (
                d.default.track(N.rMx.VIBING_WUMPUS_VIEWED, { source: r }),
                (0, _.JO)(),
                () => {
                    d.default.track(N.rMx.VIBING_WUMPUS_CLOSED, {
                        duration_open_ms: new Date().getTime() - t.getTime(),
                        source: r,
                    }),
                        (0, _.zu)();
                }
            );
        }, [r]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: C.ringContainer,
                    children: (0, a.jsx)("img", {
                        src: x,
                        alt: "",
                    }),
                }),
                (0, a.jsx)(l.Fmz, {
                    importData: m,
                    shouldAnimate: !g && !I,
                    className: C.wumpus,
                    pauseAtFrame: I ? 200 : void 0,
                }),
                (0, a.jsx)(c.u, {
                    text: g ? f.intl.string(f.t.RscU7I) : f.intl.string(f.t.ZcgDJX),
                    position: "top",
                    "aria-label": g ? f.intl.string(f.t.RscU7I) : f.intl.string(f.t.ZcgDJX),
                    children: (0, a.jsx)(l.P3F, {
                        onClick: () => {
                            g
                                ? ((0, _.JO)(), d.default.track(N.rMx.VIBING_WUMPUS_ACTION, { action: p.G.PLAY }))
                                : ((0, _.hW)(), d.default.track(N.rMx.VIBING_WUMPUS_ACTION, { action: p.G.PAUSE })),
                                b(!g);
                        },
                        className: o()(C.iconButton, C.absolute),
                        children: g
                            ? (0, a.jsx)(l.o1U, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: C.icon,
                              })
                            : (0, a.jsx)(l.fpf, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: C.icon,
                              }),
                    }),
                }),
                (0, a.jsx)(l.hzk, {
                    "data-migration-pending": !0,
                    className: C.body,
                    children: (0, a.jsxs)("div", {
                        className: C.textContainer,
                        children: [
                            (0, a.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: f.intl.string(f.t.L4ifkZ),
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: f.intl.string(f.t.R8LCMZ),
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    children: (0, a.jsx)("div", {
                        className: C.buttonContainer,
                        children: (0, a.jsx)(l.Button, {
                            variant: "primary",
                            text: f.intl.string(f.t["8eKkaf"]),
                            fullWidth: !0,
                            onClick: () => {
                                e(), d.default.track(N.rMx.VIBING_WUMPUS_ACTION, { action: p.G.BACK_TO_CONVERSATION });
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
let m = (t) => {
    let { onClose: e, transitionState: n } = t;
    return (0, I.J)("inappropriate_conversation_web")
        ? (0, a.jsx)(g, {
              onClose: e,
              transitionState: n,
          })
        : (0, a.jsx)(l.Y0X, {
              "data-migration-pending": !0,
              transitionState: n,
              parentComponent: "VibingWumpusModal",
              children: (0, a.jsx)(b, {
                  onClose: e,
                  transitionState: n,
              }),
          });
};
