s.d(e, { default: () => T });
var l = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    r = s(284009),
    o = s.n(r),
    c = s(224640),
    d = s(417098),
    u = s(885574),
    x = s(430993),
    m = s(834730),
    h = s(939249),
    C = s(696208),
    f = s(964486),
    p = s(414121),
    N = s(174459),
    g = s(10005),
    j = s(438732),
    v = s(834981),
    A = s(191627),
    E = s(652215),
    k = s(602339),
    y = s(375708),
    R = s(890863),
    b = s(818050);
let T = (t) => {
    let { transitionState: e, onClose: s } = t,
        i = (0, j.A)(),
        [r, T] = a.useState(!1),
        { getLinkCode: z, isGetLinkCodeLoading: _ } = (0, g.A)({}),
        w = (0, v.VE)(),
        H = (0, v.VT)(),
        Q = a.useRef(H);
    o()(!i, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let S = () => {
        T(
            (t) => (
                N.default.track(E.HAw.FAMILY_CENTER_ACTION, { action: r ? A.qb.HideQRCode : A.qb.RevealQRCode }), !t
            ),
        ),
            r ||
                setTimeout(() => {
                    s();
                }, A.nz);
    };
    (0, f.Ay)(() => {
        z();
    }),
        a.useEffect(() => {
            H > Q.current && s();
        }, [Q, H, s]);
    let I = r && !_ && null != w;
    return (0, l.jsxs)(c.d, {
        transitionState: e,
        onClose: s,
        children: [
            (0, l.jsxs)(d.$T, {
                className: R.lm,
                color: d.Hv.WARNING,
                children: [(0, l.jsx)(u.m, { size: "sm", color: "currentColor" }), y.intl.string(k.default.iHYMAz)],
            }),
            (0, l.jsxs)(x.c, {
                children: [
                    (0, l.jsx)(m.E, {
                        className: b.QB,
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: y.intl.string(k.default.AVTZaN),
                    }),
                    (0, l.jsx)(m.E, {
                        className: b.SX,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: y.intl.format(k.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: R.Ac,
                        children: (0, l.jsx)(h.D, {
                            className: n()(R.u3, { [R.RK]: I }),
                            onClick: S,
                            children: (0, l.jsx)(p.Lx, {
                                size: 272,
                                text: I ? w : A.EC,
                                overlaySize: p.Zs.SIZE_60,
                                className: R.R6,
                            }),
                        }),
                    }),
                    (0, l.jsx)(m.E, {
                        className: R.z_,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: y.intl.string(k.default.goDyoe),
                    }),
                ],
            }),
            (0, l.jsx)(C.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: y.intl.string(y.t.cpT0Cq), onClick: s },
                    {
                        variant: "primary",
                        text: r ? y.intl.string(k.default.wg2xwQ) : y.intl.string(k.default["10dX6U"]),
                        onClick: S,
                        loading: r && _,
                    },
                ],
            }),
        ],
    });
};
