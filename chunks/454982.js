n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(481060),
    s = n(484614),
    l = n(313201),
    c = n(518638),
    u = n(388032),
    d = n(849879);
function f(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                separator: !1,
                className: d.errorHeader,
                children: [
                    (0, r.jsx)("div", { className: d.errorArt }),
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-xl/semibold",
                        children: u.intl.string(u.t.iufib2),
                    }),
                ],
            }),
            (0, r.jsx)(o.hzk, {
                className: d.errorBody,
                children: (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: d.bodyText,
                    children: u.intl.string(u.t.eAn6z8),
                }),
            }),
            (0, r.jsx)(o.mzw, {
                children: (0, r.jsx)(o.zxk, {
                    variant: "primary",
                    text: u.intl.string(u.t.cpT0Cg),
                    onClick: t,
                }),
            }),
        ],
    });
}
let _ = function (e) {
    let { onClose: t, onClaim: n, code: _, outboundPromotion: p, transitionState: h } = e,
        [m, g] = i.useState(null),
        E = (0, l.Dt)();
    i.useEffect(() => {
        null == _ &&
            (0, c.A2)(p.id)
                .then((e) => n(e))
                .catch((e) => {
                    var t;
                    return g(null == e || null == (t = e.body) ? void 0 : t.code);
                });
    }, [_, p.id, n]);
    let b = () =>
        null != m
            ? (0, r.jsx)(f, { onClose: t })
            : null == _
              ? (0, r.jsx)(o.hzk, { children: (0, r.jsx)(o.$jN, { className: d.loading }) })
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(o.xBx, {
                            separator: !1,
                            className: d.headerContainer,
                            children: [
                                (0, r.jsx)("div", { className: d.art }),
                                (0, r.jsx)(o.X6q, {
                                    variant: "heading-xl/semibold",
                                    children: u.intl.string(u.t["23BfZm"]),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(o.hzk, {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    className: d.bodyText,
                                    children: p.outboundRedemptionModalBody,
                                }),
                                (0, r.jsx)(o.$i$, { className: d.formDivider }),
                                (0, r.jsxs)(o.hjN, {
                                    title: u.intl.string(u.t.s9LFQk),
                                    className: d.formSection,
                                    children: [
                                        (0, r.jsx)(s.Z, {
                                            value: _,
                                            buttonColor: a.zx.Colors.BRAND,
                                            buttonLook: a.zx.Looks.FILLED,
                                            delay: 1000,
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-secondary",
                                            className: d.confirmationText,
                                            children: u.intl.string(u.t["F+nFTU"]),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(o.mzw, {
                            children: [
                                (0, r.jsx)(o.zxk, {
                                    variant: "primary",
                                    text: u.intl.string(u.t["+zx47e"]),
                                    onClick: () => {
                                        let e = (0, c.BU)(_, p);
                                        window.open(e, "_blank");
                                    },
                                }),
                                (0, r.jsx)(a.zx, {
                                    onClick: t,
                                    look: a.zx.Looks.LINK,
                                    color: d.maybeLaterButton,
                                    children: u.intl.string(u.t.TulDPj),
                                }),
                            ],
                        }),
                    ],
                });
    return (0, r.jsx)(o.Y0X, {
        transitionState: h,
        "aria-labelledby": E,
        parentComponent: "OutboundPromotionRedemptionModal",
        children: b(),
    });
};
