r.d(t, {
    default: () => v,
}),
    r(896048);
var l = r(627968),
    n = r(64700),
    s = r(503698),
    o = r.n(s),
    a = r(284009),
    c = r.n(a),
    i = r(397927),
    d = r(964486),
    f = r(414121),
    u = r(954571),
    p = r(10005),
    b = r(945276),
    x = r(834981),
    m = r(191627),
    y = r(652215),
    C = r(842130),
    g = r(985018),
    h = r(482064),
    j = r(473169);
let v = (e) => {
    let { transitionState: t, onClose: r } = e,
        s = (0, b.A)(),
        [a, v] = n.useState(!1),
        { getLinkCode: O, isGetLinkCodeLoading: _ } = (0, p.A)({}),
        E = (0, x.VE)(),
        N = (0, x.VT)(),
        w = n.useRef(N);
    c()(!s, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let z = () => {
        v(
            (e) => (
                u.default.track(y.HAw.FAMILY_CENTER_ACTION, {
                    action: a ? m.qb.HideQRCode : m.qb.RevealQRCode,
                }),
                !e
            ),
        ),
            a ||
                setTimeout(() => {
                    r();
                }, m.nz);
    };
    (0, d.Ay)(() => {
        O();
    }),
        n.useEffect(() => {
            N > w.current && r();
        }, [w, N, r]);
    let S = a && !_ && null != E;
    return (0, l.jsxs)(i.dWK, {
        transitionState: t,
        onClose: r,
        children: [
            (0, l.jsxs)(i.$Td, {
                className: h.lm,
                color: i.Hv$.WARNING,
                children: [
                    (0, l.jsx)(i.mir, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    g.intl.string(C.default.iHYMAz),
                ],
            }),
            (0, l.jsxs)(i.cwr, {
                children: [
                    (0, l.jsx)(i.Text, {
                        className: j.QB,
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: g.intl.string(C.default.AVTZaN),
                    }),
                    (0, l.jsx)(i.Text, {
                        className: j.SX,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: g.intl.format(C.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: h.Ac,
                        children: (0, l.jsx)(i.DUT, {
                            className: o()(h.u3, {
                                [h.RK]: S,
                            }),
                            onClick: z,
                            children: (0, l.jsx)(f.Lx, {
                                size: 272,
                                text: S ? E : m.EC,
                                overlaySize: f.Zs.SIZE_60,
                                className: h.R6,
                            }),
                        }),
                    }),
                    (0, l.jsx)(i.Text, {
                        className: h.z_,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: g.intl.string(C.default.goDyoe),
                    }),
                ],
            }),
            (0, l.jsx)(i.H7u, {
                actionsFullWidth: !0,
                actions: [
                    {
                        variant: "secondary",
                        text: g.intl.string(g.t.cpT0Cq),
                        onClick: r,
                    },
                    {
                        variant: "primary",
                        text: a ? g.intl.string(C.default.wg2xwQ) : g.intl.string(C.default["10dX6U"]),
                        onClick: z,
                        loading: a && _,
                    },
                ],
            }),
        ],
    });
};
