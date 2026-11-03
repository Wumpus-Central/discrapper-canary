s.d(e, { default: () => T });
var l = s(477900),
    n = s(582128),
    i = s(503698),
    a = s.n(i),
    r = s(284009),
    o = s.n(r),
    c = s(224640),
    d = s(417098),
    u = s(885574),
    x = s(430993),
    m = s(834730),
    f = s(939249),
    h = s(696208),
    C = s(964486),
    p = s(414121),
    y = s(174459),
    N = s(10005),
    g = s(438732),
    j = s(834981),
    b = s(191627),
    v = s(652215),
    A = s(83152),
    E = s(105292),
    k = s(804050),
    R = s(221851);
let T = function (t) {
    let { transitionState: e, onClose: s } = t,
        i = (0, g.A)(),
        [r, T] = n.useState(!1),
        { getLinkCode: z, isGetLinkCodeLoading: I } = (0, N.A)({}),
        _ = (0, j.VE)(),
        w = (0, j.VT)(),
        H = n.useRef(w);
    function Q() {
        (T(
            (t) => (
                y.default.track(v.HAw.FAMILY_CENTER_ACTION, { action: r ? b.qb.HideQRCode : b.qb.RevealQRCode }),
                !t
            ),
        ),
            r ||
                setTimeout(() => {
                    s();
                }, b.nz));
    }
    (o()(!i, "FamilyCenterQRCodeModal should only be rendered for teens."),
        (0, C.Ay)(() => {
            z();
        }),
        n.useEffect(() => {
            w > H.current && s();
        }, [H, w, s]));
    let S = r && !I && null != _;
    return (0, l.jsxs)(c.d, {
        transitionState: e,
        onClose: s,
        children: [
            (0, l.jsxs)(d.$T, {
                className: k.lm,
                color: d.Hv.WARNING,
                children: [
                    (0, l.jsx)(u.CircleInformationIcon, { size: "sm", color: "currentColor" }),
                    E.intl.string(A.default.iHYMAz),
                ],
            }),
            (0, l.jsxs)(x.c, {
                children: [
                    (0, l.jsx)(m.E, {
                        className: R.QB,
                        variant: "body-lg/semibold",
                        color: "text-strong",
                        children: E.intl.string(A.default.AVTZaN),
                    }),
                    (0, l.jsx)(m.E, {
                        className: R.SX,
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: E.intl.format(A.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: k.Ac,
                        children: (0, l.jsx)(f.D, {
                            className: a()(k.u3, { [k.RK]: S }),
                            onClick: Q,
                            children: (0, l.jsx)(p.Lx, {
                                size: 272,
                                text: S ? _ : b.EC,
                                overlaySize: p.Zs.SIZE_60,
                                className: k.R6,
                            }),
                        }),
                    }),
                    (0, l.jsx)(m.E, {
                        className: k.z_,
                        variant: "body-xs/semibold",
                        color: "text-default",
                        children: E.intl.string(A.default.goDyoe),
                    }),
                ],
            }),
            (0, l.jsx)(h.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: E.intl.string(E.t.cpT0Cq), onClick: s },
                    {
                        variant: "primary",
                        text: r ? E.intl.string(A.default.wg2xwQ) : E.intl.string(A.default["10dX6U"]),
                        onClick: Q,
                        loading: r && I,
                    },
                ],
            }),
        ],
    });
};
