t.d(s, { default: () => A });
var r = t(627968),
    l = t(64700),
    a = t(503698),
    i = t.n(a),
    o = t(284009),
    n = t.n(o),
    d = t(224640),
    c = t(417098),
    C = t(885574),
    u = t(430993),
    x = t(834730),
    f = t(939249),
    _ = t(696208),
    m = t(964486),
    h = t(414121),
    p = t(954571),
    v = t(10005),
    g = t(438732),
    j = t(834981),
    y = t(191627),
    z = t(652215),
    E = t(602339),
    N = t(985018),
    q = t(890863),
    b = t(818050);
let A = (e) => {
    let { transitionState: s, onClose: t } = e,
        a = (0, g.A)(),
        [o, A] = l.useState(!1),
        { getLinkCode: S, isGetLinkCodeLoading: I } = (0, v.A)({}),
        R = (0, j.VE)(),
        Z = (0, j.VT)(),
        k = l.useRef(Z);
    n()(!a, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let O = () => {
        A(
            (e) => (
                p.default.track(z.HAw.FAMILY_CENTER_ACTION, { action: o ? y.qb.HideQRCode : y.qb.RevealQRCode }), !e
            ),
        ),
            o ||
                setTimeout(() => {
                    t();
                }, y.nz);
    };
    (0, m.Ay)(() => {
        S();
    }),
        l.useEffect(() => {
            Z > k.current && t();
        }, [k, Z, t]);
    let T = o && !I && null != R;
    return (0, r.jsxs)(d.d, {
        transitionState: s,
        onClose: t,
        children: [
            (0, r.jsxs)(c.$T, {
                className: q.lm,
                color: c.Hv.WARNING,
                children: [(0, r.jsx)(C.m, { size: "sm", color: "currentColor" }), N.intl.string(E.default.iHYMAz)],
            }),
            (0, r.jsxs)(u.c, {
                children: [
                    (0, r.jsx)(x.E, {
                        className: b.QB,
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: N.intl.string(E.default.AVTZaN),
                    }),
                    (0, r.jsx)(x.E, {
                        className: b.SX,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: N.intl.format(E.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: q.Ac,
                        children: (0, r.jsx)(f.D, {
                            className: i()(q.u3, { [q.RK]: T }),
                            onClick: O,
                            children: (0, r.jsx)(h.Lx, {
                                size: 272,
                                text: T ? R : y.EC,
                                overlaySize: h.Zs.SIZE_60,
                                className: q.R6,
                            }),
                        }),
                    }),
                    (0, r.jsx)(x.E, {
                        className: q.z_,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: N.intl.string(E.default.goDyoe),
                    }),
                ],
            }),
            (0, r.jsx)(_.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: N.intl.string(N.t.cpT0Cq), onClick: t },
                    {
                        variant: "primary",
                        text: o ? N.intl.string(E.default.wg2xwQ) : N.intl.string(E.default["10dX6U"]),
                        onClick: O,
                        loading: o && I,
                    },
                ],
            }),
        ],
    });
};
