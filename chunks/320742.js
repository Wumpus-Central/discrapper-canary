r.d(t, { default: () => j }), r(896048);
var n = r(627968),
    s = r(64700),
    o = r(503698),
    l = r.n(o),
    a = r(284009),
    c = r.n(a),
    i = r(397927),
    d = r(964486),
    f = r(414121),
    u = r(954571),
    p = r(10005),
    b = r(945276),
    y = r(834981),
    x = r(191627),
    m = r(652215),
    h = r(842130),
    C = r(985018),
    g = r(482064),
    O = r(473169);
let j = (e) => {
    let { transitionState: t, onClose: r } = e,
        o = (0, b.A)(),
        [a, j] = s.useState(!1),
        { getLinkCode: v, isGetLinkCodeLoading: _ } = (0, p.A)({}),
        E = (0, y.VE)(),
        T = (0, y.VT)(),
        S = s.useRef(T);
    c()(!o, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let N = () => {
        j(
            (e) => (
                u.default.track(m.HAw.FAMILY_CENTER_ACTION, { action: a ? x.qb.HideQRCode : x.qb.RevealQRCode }), !e
            ),
        ),
            a ||
                setTimeout(() => {
                    r();
                }, x.nz);
    };
    (0, d.Ay)(() => {
        v();
    }),
        s.useEffect(() => {
            T > S.current && r();
        }, [S, T, r]);
    let R = a && !_ && null != E;
    return (0, n.jsxs)(i.dWK, {
        transitionState: t,
        onClose: r,
        children: [
            (0, n.jsxs)(i.$Td, {
                className: g.lm,
                color: i.Hv$.WARNING,
                children: [
                    (0, n.jsx)(i.mir, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    C.intl.string(h.default.iHYMAz),
                ],
            }),
            (0, n.jsxs)(i.cwr, {
                children: [
                    (0, n.jsx)(i.Text, {
                        className: O.QB,
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: C.intl.string(h.default.AVTZaN),
                    }),
                    (0, n.jsx)(i.Text, {
                        className: O.SX,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: C.intl.format(h.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: g.Ac,
                        children: (0, n.jsx)(i.DUT, {
                            className: l()(g.u3, { [g.RK]: R }),
                            onClick: N,
                            children: (0, n.jsx)(f.Lx, {
                                size: 272,
                                text: R ? E : x.EC,
                                overlaySize: f.Zs.SIZE_60,
                                className: g.R6,
                            }),
                        }),
                    }),
                    (0, n.jsx)(i.Text, {
                        className: g.z_,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: C.intl.string(h.default.goDyoe),
                    }),
                ],
            }),
            (0, n.jsx)(i.H7u, {
                actionsFullWidth: !0,
                actions: [
                    {
                        variant: "secondary",
                        text: C.intl.string(C.t.cpT0Cq),
                        onClick: r,
                    },
                    {
                        variant: "primary",
                        text: a ? C.intl.string(h.default.wg2xwQ) : C.intl.string(h.default["10dX6U"]),
                        onClick: N,
                        loading: a && _,
                    },
                ],
            }),
        ],
    });
};
