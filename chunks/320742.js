s.d(e, { default: () => T });
var l = s(477900),
    n = s(582128),
    a = s(503698),
    i = s.n(a),
    r = s(284009),
    o = s.n(r),
    c = s(224640),
    d = s(417098),
    u = s(885574),
    x = s(430993),
    f = s(834730),
    m = s(939249),
    h = s(696208),
    C = s(964486),
    p = s(414121),
    N = s(174459),
    g = s(10005),
    j = s(438732),
    v = s(834981),
    A = s(191627),
    E = s(652215),
    k = s(513687),
    y = s(375708),
    R = s(804050),
    b = s(221851);
let T = function (t) {
    let { transitionState: e, onClose: s } = t,
        a = (0, j.A)(),
        [r, T] = n.useState(!1),
        { getLinkCode: z, isGetLinkCodeLoading: I } = (0, g.A)({}),
        _ = (0, v.VE)(),
        w = (0, v.VT)(),
        H = n.useRef(w);
    function Q() {
        T(
            (t) => (
                N.default.track(E.HAw.FAMILY_CENTER_ACTION, { action: r ? A.qb.HideQRCode : A.qb.RevealQRCode }), !t
            ),
        ),
            r ||
                setTimeout(() => {
                    s();
                }, A.nz);
    }
    o()(!a, "FamilyCenterQRCodeModal should only be rendered for teens."),
        (0, C.Ay)(() => {
            z();
        }),
        n.useEffect(() => {
            w > H.current && s();
        }, [H, w, s]);
    let S = r && !I && null != _;
    return (0, l.jsxs)(c.d, {
        transitionState: e,
        onClose: s,
        children: [
            (0, l.jsxs)(d.$T, {
                className: R.lm,
                color: d.Hv.WARNING,
                children: [
                    (0, l.jsx)(u.CircleInformationIcon, { size: "sm", color: "currentColor" }),
                    y.intl.string(k.default.iHYMAz),
                ],
            }),
            (0, l.jsxs)(x.c, {
                children: [
                    (0, l.jsx)(f.E, {
                        className: b.QB,
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: y.intl.string(k.default.AVTZaN),
                    }),
                    (0, l.jsx)(f.E, {
                        className: b.SX,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: y.intl.format(k.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: R.Ac,
                        children: (0, l.jsx)(m.D, {
                            className: i()(R.u3, { [R.RK]: S }),
                            onClick: Q,
                            children: (0, l.jsx)(p.Lx, {
                                size: 272,
                                text: S ? _ : A.EC,
                                overlaySize: p.Zs.SIZE_60,
                                className: R.R6,
                            }),
                        }),
                    }),
                    (0, l.jsx)(f.E, {
                        className: R.z_,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: y.intl.string(k.default.goDyoe),
                    }),
                ],
            }),
            (0, l.jsx)(h.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: y.intl.string(y.t.cpT0Cq), onClick: s },
                    {
                        variant: "primary",
                        text: r ? y.intl.string(k.default.wg2xwQ) : y.intl.string(k.default["10dX6U"]),
                        onClick: Q,
                        loading: r && I,
                    },
                ],
            }),
        ],
    });
};
