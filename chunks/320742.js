s.d(t, { default: () => y });
var r = s(627968),
    l = s(64700),
    a = s(503698),
    i = s.n(a),
    o = s(284009),
    n = s.n(o),
    d = s(397927),
    c = s(964486),
    C = s(414121),
    u = s(954571),
    x = s(10005),
    f = s(438732),
    _ = s(834981),
    m = s(191627),
    h = s(652215),
    p = s(842130),
    v = s(985018),
    g = s(482064),
    j = s(473169);
let y = (e) => {
    let { transitionState: t, onClose: s } = e,
        a = (0, f.A)(),
        [o, y] = l.useState(!1),
        { getLinkCode: z, isGetLinkCodeLoading: N } = (0, x.A)({}),
        q = (0, _.VE)(),
        b = (0, _.VT)(),
        E = l.useRef(b);
    n()(!a, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let A = () => {
        y(
            (e) => (
                u.default.track(h.HAw.FAMILY_CENTER_ACTION, { action: o ? m.qb.HideQRCode : m.qb.RevealQRCode }), !e
            ),
        ),
            o ||
                setTimeout(() => {
                    s();
                }, m.nz);
    };
    (0, c.Ay)(() => {
        z();
    }),
        l.useEffect(() => {
            b > E.current && s();
        }, [E, b, s]);
    let S = o && !N && null != q;
    return (0, r.jsxs)(d.dWK, {
        transitionState: t,
        onClose: s,
        children: [
            (0, r.jsxs)(d.$Td, {
                className: g.lm,
                color: d.Hv$.WARNING,
                children: [(0, r.jsx)(d.mir, { size: "sm", color: "currentColor" }), v.intl.string(p.default.iHYMAz)],
            }),
            (0, r.jsxs)(d.cwr, {
                children: [
                    (0, r.jsx)(d.Text, {
                        className: j.QB,
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: v.intl.string(p.default.AVTZaN),
                    }),
                    (0, r.jsx)(d.Text, {
                        className: j.SX,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: v.intl.format(p.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: g.Ac,
                        children: (0, r.jsx)(d.DUT, {
                            className: i()(g.u3, { [g.RK]: S }),
                            onClick: A,
                            children: (0, r.jsx)(C.Lx, {
                                size: 272,
                                text: S ? q : m.EC,
                                overlaySize: C.Zs.SIZE_60,
                                className: g.R6,
                            }),
                        }),
                    }),
                    (0, r.jsx)(d.Text, {
                        className: g.z_,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: v.intl.string(p.default.goDyoe),
                    }),
                ],
            }),
            (0, r.jsx)(d.H7u, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: v.intl.string(v.t.cpT0Cq), onClick: s },
                    {
                        variant: "primary",
                        text: o ? v.intl.string(p.default.wg2xwQ) : v.intl.string(p.default["10dX6U"]),
                        onClick: A,
                        loading: o && N,
                    },
                ],
            }),
        ],
    });
};
