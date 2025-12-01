n.d(t, { Z: () => h }), n(388685);
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
    p = n(388032),
    _ = n(849879);
function m(e) {
    let { onClose: t, transitionState: n } = e,
        i = () =>
            (0, r.jsxs)("div", {
                className: _.errorBody,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t.iufib1),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        className: _.bodyText,
                        children: p.intl.string(p.t.eAn6z2),
                    }),
                ],
            });
    return (0, r.jsx)(a.Modal, {
        title: "",
        size: "md",
        input: (0, r.jsx)("div", { className: _.errorArt }),
        onClose: async () => await t(),
        actions: [
            {
                text: p.intl.string(p.t.cpT0Cq),
                variant: "primary",
                onClick: t,
            },
        ],
        transitionState: n,
        children: i(),
    });
}
let h = function (e) {
    let { onClose: t, onClaim: n, code: h, outboundPromotion: g, transitionState: E } = e,
        [b, y] = i.useState(null),
        O = (0, d.Dt)(),
        { analyticsLocations: v } = (0, u.ZP)(c.Z.USER_SETTINGS_GIFT_INVENTORY);
    if (
        (i.useEffect(() => {
            null == h &&
                (0, f.A2)({
                    promotionId: g.id,
                    analyticsLocations: v,
                })
                    .then((e) => n(e))
                    .catch((e) => {
                        var t;
                        return y(null == e || null == (t = e.body) ? void 0 : t.code);
                    });
        }, [h, g.id, n, v]),
        null != b)
    )
        return (0, r.jsx)(m, {
            onClose: t,
            transitionState: E,
        });
    if (null == h) return (0, r.jsx)(s.$jN, { className: _.loading });
    let S = () =>
        (0, r.jsxs)("div", {
            className: _.headerContainer,
            children: [
                (0, r.jsx)("div", { className: _.art }),
                (0, r.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    children: p.intl.string(p.t["23BfZh"]),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: _.bodyText,
                    children: g.outboundRedemptionModalBody,
                }),
            ],
        });
    return (0, r.jsx)(a.Modal, {
        title: "",
        size: "md",
        onClose: async () => await t(),
        input: S(),
        actions: [
            {
                text: p.intl.string(p.t.TulDPl),
                variant: "secondary",
                onClick: async () => await t(),
            },
            {
                text: p.intl.string(p.t["+zx47d"]),
                variant: "primary",
                onClick: () => {
                    let e = (0, f.BU)(h, g);
                    window.open(e, "_blank");
                },
            },
        ],
        transitionState: E,
        "aria-label": O,
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(s.izJ, { className: _.formDivider }),
                (0, r.jsx)(a.gNt, {
                    label: p.intl.string(p.t.s9LFQh),
                    helperText: p.intl.string(p.t["F+nFTZ"]),
                    children: (0, r.jsx)(l.Z, {
                        value: h,
                        buttonColor: o.zx.Colors.BRAND,
                        buttonLook: o.zx.Looks.FILLED,
                        delay: 1000,
                    }),
                }),
            ],
        }),
    });
};
