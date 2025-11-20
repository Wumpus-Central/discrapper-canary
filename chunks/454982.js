n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(755721),
    s = n(481060),
    l = n(484614),
    c = n(100527),
    u = n(906732),
    d = n(313201),
    f = n(518638),
    _ = n(388032),
    p = n(849879);
function h(e) {
    let { onClose: t, transitionState: n } = e,
        i = () =>
            (0, r.jsxs)("div", {
                className: p.errorBody,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        children: _.intl.string(_.t.iufib1),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        className: p.bodyText,
                        children: _.intl.string(_.t.eAn6z2),
                    }),
                ],
            });
    return (0, r.jsx)(a.Modal, {
        title: "",
        size: "md",
        input: (0, r.jsx)("div", { className: p.errorArt }),
        onClose: async () => await t(),
        actions: [
            {
                text: _.intl.string(_.t.cpT0Cq),
                variant: "primary",
                onClick: t,
            },
        ],
        transitionState: n,
        children: i(),
    });
}
let m = function (e) {
    let { onClose: t, onClaim: n, code: m, outboundPromotion: g, transitionState: E } = e,
        [b, y] = i.useState(null),
        O = (0, d.Dt)(),
        { analyticsLocations: v } = (0, u.ZP)(c.Z.USER_SETTINGS_GIFT_INVENTORY);
    if (
        (i.useEffect(() => {
            null == m &&
                (0, f.A2)({
                    promotionId: g.id,
                    analyticsLocations: v,
                })
                    .then((e) => n(e))
                    .catch((e) => {
                        var t;
                        return y(null == e || null == (t = e.body) ? void 0 : t.code);
                    });
        }, [m, g.id, n, v]),
        null != b)
    )
        return (0, r.jsx)(h, {
            onClose: t,
            transitionState: E,
        });
    if (null == m) return (0, r.jsx)(s.$jN, { className: p.loading });
    let I = () =>
        (0, r.jsxs)("div", {
            className: p.headerContainer,
            children: [
                (0, r.jsx)("div", { className: p.art }),
                (0, r.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    children: _.intl.string(_.t["23BfZh"]),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: p.bodyText,
                    children: g.outboundRedemptionModalBody,
                }),
            ],
        });
    return (0, r.jsx)(a.Modal, {
        title: "",
        size: "md",
        onClose: async () => await t(),
        input: I(),
        actions: [
            {
                text: _.intl.string(_.t.TulDPl),
                variant: "secondary",
                onClick: async () => await t(),
            },
            {
                text: _.intl.string(_.t["+zx47d"]),
                variant: "primary",
                onClick: () => {
                    let e = (0, f.BU)(m, g);
                    window.open(e, "_blank");
                },
            },
        ],
        transitionState: E,
        "aria-label": O,
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(s.izJ, { className: p.formDivider }),
                (0, r.jsx)(a.gNt, {
                    label: _.intl.string(_.t.s9LFQh),
                    helperText: _.intl.string(_.t["F+nFTZ"]),
                    children: (0, r.jsx)(l.Z, {
                        value: m,
                        buttonColor: o.zx.Colors.BRAND,
                        buttonLook: o.zx.Looks.FILLED,
                        delay: 1000,
                    }),
                }),
            ],
        }),
    });
};
