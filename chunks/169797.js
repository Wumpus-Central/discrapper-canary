var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(20742),
    u = n(364840),
    c = n(331322),
    o = n(224640),
    d = n(231723),
    h = n(430993),
    f = n(632088),
    p = n(500380),
    m = n(956956),
    C = n(820287),
    y = n(708791),
    E = n(981036),
    _ = n(725836),
    g = n(516106),
    S = n(520149),
    I = n(56763),
    A = n(652215),
    P = n(126223);
function x(e) {
    let {
            gradientColor: t,
            title: n,
            headerBadgeVariant: i = "expressive",
            headerBadgeText: a,
            headerBadgeIcon: u,
            countryCode: c,
            relocationCountryCode: o,
            ...d
        } = e,
        h = r.useCallback(
            () => (null == c ? null : (0, l.jsx)("img", { alt: "", className: P.bI, src: (0, p.t)(c) })),
            [c],
        ),
        f = r.useMemo(() => {
            if (null != a) return { icon: u, type: { text: a ?? "" }, variant: i };
        }, [a, u, i]),
        C = null != c && null != o,
        y = r.useMemo(() => {
            if (!C && null != c) return { text: (0, m.j7)((0, m.ni)(c)), leadingIcon: h };
        }, [C, c, h]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.rQ, {
                ...d,
                badge: f,
                badgePosition: "end",
                gradientColor: t,
                titleTextVariant: "heading-lg/semibold",
                alignCenter: !1,
                title: n,
                subtitle: y,
            }),
            C && (0, l.jsx)(S.w, { countryCode: c, relocationCountryCode: o }),
        ],
    });
}
let v = { top: 16, bottom: 8 };
function R(e) {
    let { onBackClick: t, primaryButtonProps: n, portalClassName: i, stripeExpressCheckoutComponent: s } = e,
        { variant: o } = n,
        { setCheckoutFooterContentNode: d } = (0, _.ck)(),
        { isExpressCheckoutEnabledForFooter: h, shouldExpressCheckoutBeVisible: f } = (0, g.t4)((e) => {
            let t = e.getExpressCheckoutVisibilityState();
            return {
                isExpressCheckoutEnabledForFooter: t.isExpressCheckoutEnabledForFooter,
                shouldExpressCheckoutBeVisible: t.shouldExpressCheckoutBeVisible,
            };
        }),
        p = (0, l.jsx)(E.p, { ...n, variant: o ?? "active", autoFocus: !0 }),
        m = h && null != s,
        S = m && f,
        I = null != t,
        {
            direction: A,
            align: x,
            justify: R,
        } = r.useMemo(() => {
            let e = "end";
            return (
                I && !S && (e = "space-between"),
                { direction: S ? "vertical" : "horizontal", align: S ? "stretch" : "center", justify: e }
            );
        }, [I, S]),
        T = I ? (0, l.jsx)(C.A, { onClick: t }) : null;
    return (0, l.jsxs)(u.j, {
        children: [
            (0, l.jsx)("div", { ref: d, className: a()(P.K4, i) }),
            (0, l.jsxs)(c.B, {
                direction: A,
                align: x,
                justify: R,
                fullWidth: !0,
                padding: { ...v, bottom: S ? 8 : v.bottom },
                children: [
                    S ? null : T,
                    S ? (0, l.jsx)(y.rI, {}) : null,
                    m ? (0, l.jsx)(y.Zr, { stripeExpressCheckoutComponent: s, fallbackComponent: p }) : p,
                    S && null != T ? (0, l.jsx)("div", { className: P.aY, children: T }) : null,
                ],
            }),
        ],
    });
}
function T(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", { className: a()(P.g4, t), children: (0, l.jsx)(I.I, {}) });
}
function M(e) {
    let { children: t, size: n = "md", maxHeight: r = "viewport", isModalContentLoading: i, ...a } = e;
    return (0, l.jsx)(_.e0, {
        children: (0, l.jsx)(o.d, {
            size: n,
            ...a,
            maxHeight: r,
            contentOutsideContainer: (0, l.jsx)(f.A, {}),
            children: i ? (0, l.jsx)(T, {}) : t,
        }),
    });
}
n.d(
    t,
    {},
    {
        DJ: T,
        Jg: M,
        KT: function () {
            return (0, l.jsx)(M, {
                transitionState: d.ip.ENTERED,
                onClose: A.tEg,
                size: "md",
                isModalContentLoading: !0,
            });
        },
        lo: R,
        oH: function (e) {
            let {
                title: t,
                gradientColor: n = "purple",
                countryCode: r,
                relocationCountryCode: i,
                headerBadgeText: a,
                headerBadgeIcon: s,
                onBackClick: u,
                primaryButtonProps: c,
                children: d,
                ...f
            } = e;
            return (0, l.jsx)(_.e0, {
                children: (0, l.jsxs)(o.d, {
                    ...f,
                    children: [
                        (0, l.jsx)(x, {
                            gradientColor: n,
                            title: t,
                            countryCode: r,
                            relocationCountryCode: i,
                            headerBadgeText: a,
                            headerBadgeIcon: s,
                        }),
                        (0, l.jsx)(h.c, { children: d }),
                        (0, l.jsx)(R, { onBackClick: u, primaryButtonProps: c }),
                    ],
                }),
            });
        },
        s3: x,
    },
);
