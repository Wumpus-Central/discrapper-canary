"use strict";
r.d(t, { default: () => T });
var s = r(627968),
    a = r(64700),
    o = r(503698),
    n = r.n(o),
    i = r(284009),
    l = r.n(i),
    c = r(224640),
    d = r(417098),
    u = r(885574),
    p = r(430993),
    f = r(834730),
    C = r(939249),
    _ = r(696208),
    x = r(964486),
    h = r(414121),
    m = r(954571),
    y = r(10005),
    v = r(438732),
    g = r(834981),
    b = r(191627),
    E = r(652215),
    j = r(477480),
    O = r(985018),
    z = r(665775),
    N = r(373378);
let T = (e) => {
    let { transitionState: t, onClose: r } = e,
        o = (0, v.A)(),
        [i, T] = a.useState(!1),
        { getLinkCode: q, isGetLinkCodeLoading: R } = (0, y.A)({}),
        S = (0, g.VE)(),
        I = (0, g.VT)(),
        k = a.useRef(I);
    l()(!o, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let A = () => {
        T(
            (e) => (
                m.default.track(E.HAw.FAMILY_CENTER_ACTION, { action: i ? b.qb.HideQRCode : b.qb.RevealQRCode }), !e
            ),
        ),
            i ||
                setTimeout(() => {
                    r();
                }, b.nz);
    };
    (0, x.Ay)(() => {
        q();
    }),
        a.useEffect(() => {
            I > k.current && r();
        }, [k, I, r]);
    let Z = i && !R && null != S;
    return (0, s.jsxs)(c.d, {
        transitionState: t,
        onClose: r,
        children: [
            (0, s.jsxs)(d.$T, {
                className: z.lm,
                color: d.Hv.WARNING,
                children: [(0, s.jsx)(u.m, { size: "sm", color: "currentColor" }), O.intl.string(j.default.iHYMAz)],
            }),
            (0, s.jsxs)(p.c, {
                children: [
                    (0, s.jsx)(f.E, {
                        className: N.QB,
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: O.intl.string(j.default.AVTZaN),
                    }),
                    (0, s.jsx)(f.E, {
                        className: N.SX,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: O.intl.format(j.default.LyyCsE, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: z.Ac,
                        children: (0, s.jsx)(C.D, {
                            className: n()(z.u3, { [z.RK]: Z }),
                            onClick: A,
                            children: (0, s.jsx)(h.Lx, {
                                size: 272,
                                text: Z ? S : b.EC,
                                overlaySize: h.Zs.SIZE_60,
                                className: z.R6,
                            }),
                        }),
                    }),
                    (0, s.jsx)(f.E, {
                        className: z.z_,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: O.intl.string(j.default.goDyoe),
                    }),
                ],
            }),
            (0, s.jsx)(_.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: O.intl.string(O.t.cpT0Cq), onClick: r },
                    {
                        variant: "primary",
                        text: i ? O.intl.string(j.default.wg2xwQ) : O.intl.string(j.default["10dX6U"]),
                        onClick: A,
                        loading: i && R,
                    },
                ],
            }),
        ],
    });
};
