n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(755721),
    s = n(481060),
    l = n(484614),
    c = n(313201),
    u = n(518638),
    d = n(388032),
    f = n(845837);
function _(e) {
    let { onClose: t, transitionState: n } = e,
        i = () =>
            (0, r.jsxs)("div", {
                className: f.errorBody,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        children: d.intl.string(d.t.iufib1),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        className: f.bodyText,
                        children: d.intl.string(d.t.eAn6z2),
                    }),
                ],
            });
    return (0, r.jsx)(a.Modal, {
        title: "",
        size: "md",
        input: (0, r.jsx)("div", { className: f.errorArt }),
        onClose: async () => await t(),
        actions: [
            {
                text: d.intl.string(d.t.cpT0Cq),
                variant: "primary",
                onClick: t,
            },
        ],
        transitionState: n,
        children: i(),
    });
}
let p = function (e) {
    let { onClose: t, onClaim: n, code: p, outboundPromotion: h, transitionState: m } = e,
        [g, E] = i.useState(null),
        b = (0, c.Dt)();
    if (
        (i.useEffect(() => {
            null == p &&
                (0, u.A2)(h.id)
                    .then((e) => n(e))
                    .catch((e) => {
                        var t;
                        return E(null == e || null == (t = e.body) ? void 0 : t.code);
                    });
        }, [p, h.id, n]),
        null != g)
    )
        return (0, r.jsx)(_, {
            onClose: t,
            transitionState: m,
        });
    if (null == p) return (0, r.jsx)(s.$jN, { className: f.loading });
    let y = () =>
        (0, r.jsxs)("div", {
            className: f.headerContainer,
            children: [
                (0, r.jsx)("div", { className: f.art }),
                (0, r.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    children: d.intl.string(d.t["23BfZh"]),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: f.bodyText,
                    children: h.outboundRedemptionModalBody,
                }),
            ],
        });
    return (0, r.jsx)(a.Modal, {
        title: "",
        size: "md",
        onClose: async () => await t(),
        input: y(),
        actions: [
            {
                text: d.intl.string(d.t.TulDPl),
                variant: "secondary",
                onClick: async () => await t(),
            },
            {
                text: d.intl.string(d.t["+zx47d"]),
                variant: "primary",
                onClick: () => {
                    let e = (0, u.BU)(p, h);
                    window.open(e, "_blank");
                },
            },
        ],
        transitionState: m,
        "aria-label": b,
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(s.izJ, { className: f.formDivider }),
                (0, r.jsx)(a.gNt, {
                    label: d.intl.string(d.t.s9LFQh),
                    helperText: d.intl.string(d.t["F+nFTZ"]),
                    children: (0, r.jsx)(l.Z, {
                        value: p,
                        buttonColor: o.zx.Colors.BRAND,
                        buttonLook: o.zx.Looks.FILLED,
                        delay: 1000,
                    }),
                }),
            ],
        }),
    });
};
