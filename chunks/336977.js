e.d(n, { default: () => m }), e(388685);
var i = e(54381),
    a = e(473749),
    r = e(399606),
    o = e(28664),
    s = e(481060),
    c = e(607070),
    l = e(626135),
    u = e(832239),
    d = e(407383),
    _ = e(981631),
    p = e(388032),
    I = e(271225),
    N = e(617921);
function x(t) {
    let { onClose: n, source: x = d.I.INAPPROPRIATE_CONVERSATION } = t,
        m = (0, r.e7)([c.Z], () => c.Z.useReducedMotion),
        [C, h] = a.useState(!1);
    async function A() {
        let { default: t } = await e.e("29641").then(e.t.bind(e, 937359, 19));
        return t;
    }
    return (
        a.useEffect(() => {
            let t = new Date();
            return (
                l.default.track(_.rMx.VIBING_WUMPUS_VIEWED, { source: x }),
                (0, u.JO)(),
                () => {
                    l.default.track(_.rMx.VIBING_WUMPUS_CLOSED, {
                        duration_open_ms: new Date().getTime() - t.getTime(),
                        source: x,
                    }),
                        (0, u.zu)();
                }
            );
        }, [x]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: I.ringContainer,
                    children: (0, i.jsx)("img", {
                        src: N,
                        alt: "",
                        className: I.__invalid_ringArt,
                    }),
                }),
                (0, i.jsx)(s.Fmz, {
                    importData: A,
                    shouldAnimate: !C && !m,
                    className: I.wumpus,
                    pauseAtFrame: m ? 200 : void 0,
                }),
                (0, i.jsx)(o.u, {
                    text: C ? p.intl.string(p.t.RscU7I) : p.intl.string(p.t.ZcgDJX),
                    position: "top",
                    "aria-label": C ? p.intl.string(p.t.RscU7I) : p.intl.string(p.t.ZcgDJX),
                    children: (0, i.jsx)(s.P3F, {
                        onClick: () => {
                            C
                                ? ((0, u.JO)(), l.default.track(_.rMx.VIBING_WUMPUS_ACTION, { action: d.G.PLAY }))
                                : ((0, u.hW)(), l.default.track(_.rMx.VIBING_WUMPUS_ACTION, { action: d.G.PAUSE })),
                                h(!C);
                        },
                        className: I.iconButton,
                        children: C
                            ? (0, i.jsx)(s.o1U, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: I.icon,
                              })
                            : (0, i.jsx)(s.fpf, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: I.icon,
                              }),
                    }),
                }),
                (0, i.jsx)(s.hzk, {
                    "data-migration-pending": !0,
                    className: I.body,
                    children: (0, i.jsxs)("div", {
                        className: I.textContainer,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: p.intl.string(p.t.L4ifkZ),
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: p.intl.string(p.t.R8LCMZ),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(s.mzw, {
                    "data-migration-pending": !0,
                    children: (0, i.jsx)("div", {
                        className: I.buttonContainer,
                        children: (0, i.jsx)(s.Button, {
                            variant: "primary",
                            text: p.intl.string(p.t["8eKkaf"]),
                            fullWidth: !0,
                            onClick: () => {
                                n(), l.default.track(_.rMx.VIBING_WUMPUS_ACTION, { action: d.G.BACK_TO_CONVERSATION });
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
let m = (t) => {
    let { onClose: n, transitionState: e } = t;
    return (0, i.jsx)(s.Y0X, {
        "data-migration-pending": !0,
        transitionState: e,
        parentComponent: "VibingWumpusModal",
        children: (0, i.jsx)(x, { onClose: n }),
    });
};
