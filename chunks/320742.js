"use strict";
r.d(t, { default: () => b });
var s = r(627968),
    a = r(64700),
    o = r(503698),
    n = r.n(o),
    i = r(284009),
    l = r.n(i),
    c = r(397927),
    d = r(964486),
    u = r(414121),
    p = r(954571),
    f = r(10005),
    C = r(438732),
    x = r(834981),
    _ = r(191627),
    h = r(652215),
    m = r(842130),
    y = r(985018),
    v = r(620735),
    g = r(885106);
let b = (e) => {
    let { transitionState: t, onClose: r } = e,
        o = (0, C.A)(),
        [i, b] = a.useState(!1),
        { getLinkCode: T, isGetLinkCodeLoading: j } = (0, f.A)({}),
        E = (0, x.VE)(),
        O = (0, x.VT)(),
        z = a.useRef(O);
    l()(!o, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let N = () => {
        b(
            (e) => (
                p.default.track(h.HAw.FAMILY_CENTER_ACTION, { action: i ? _.qb.HideQRCode : _.qb.RevealQRCode }), !e
            ),
        ),
            i ||
                setTimeout(() => {
                    r();
                }, _.nz);
    };
    (0, d.Ay)(() => {
        T();
    }),
        a.useEffect(() => {
            O > z.current && r();
        }, [z, O, r]);
    let q = i && !j && null != E;
    return (0, s.jsxs)(c.dWK, {
        transitionState: t,
        onClose: r,
        children: [
            (0, s.jsxs)(c.$Td, {
                className: v.lm,
                color: c.Hv$.WARNING,
                children: [(0, s.jsx)(c.mir, { size: "sm", color: "currentColor" }), y.intl.string(m.default.iHYMAz)],
            }),
            (0, s.jsxs)(c.cwr, {
                children: [
                    (0, s.jsx)(c.Text, {
                        className: g.QB,
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: y.intl.string(m.default.AVTZaN),
                    }),
                    (0, s.jsx)(c.Text, {
                        className: g.SX,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: y.intl.format(m.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: v.Ac,
                        children: (0, s.jsx)(c.DUT, {
                            className: n()(v.u3, { [v.RK]: q }),
                            onClick: N,
                            children: (0, s.jsx)(u.Lx, {
                                size: 272,
                                text: q ? E : _.EC,
                                overlaySize: u.Zs.SIZE_60,
                                className: v.R6,
                            }),
                        }),
                    }),
                    (0, s.jsx)(c.Text, {
                        className: v.z_,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: y.intl.string(m.default.goDyoe),
                    }),
                ],
            }),
            (0, s.jsx)(c.H7u, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: y.intl.string(y.t.cpT0Cq), onClick: r },
                    {
                        variant: "primary",
                        text: i ? y.intl.string(m.default.wg2xwQ) : y.intl.string(m.default["10dX6U"]),
                        onClick: N,
                        loading: i && j,
                    },
                ],
            }),
        ],
    });
};
