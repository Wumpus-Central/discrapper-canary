n.d(t, { default: () => x }), n(704826), n(35282);
var a = n(54381);
n(473749);
var l = n(734610),
    i = n(990547),
    r = n(793030),
    s = n(481060),
    o = n(213609),
    c = n(528477),
    d = n(626135),
    u = n(988158),
    m = n(981631),
    p = n(388032),
    h = n(140080);
function x(e) {
    let { url: t, trustUrl: n, isProtocol: x, onConfirm: g, onCancel: f, onClose: b, transitionState: v } = e,
        {
            protocol: j,
            authorityPrefix: _,
            hostname: y,
            theRestOfTheUrl: C,
            shouldTrustUrl: S,
            setShouldTrustUrl: E,
            handleConfirm: N,
            handleCancel: T,
        } = (0, u.X)({
            url: t,
            trustUrl: n,
            onConfirm: g,
            onCancel: f,
            onClose: b,
        });
    return (
        (0, o.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MASKED_LINK_MODAL,
        }),
        (0, a.jsxs)(r.Modal, {
            size: "md",
            transitionState: v,
            onClose: b,
            title: p.intl.string(p.t["3w1QGl"]),
            subtitle: x ? p.intl.format(p.t.aCYv1z, {}) : p.intl.string(p.t.soRxRe),
            actions: [
                {
                    text: p.intl.string(p.t["/g10LC"]),
                    onClick: () => {
                        T(),
                            d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: S,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: x ? p.intl.string(p.t.COq6kk) : p.intl.string(p.t.NcJfJG),
                    onClick: () => {
                        N(),
                            d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: S,
                                action_type: "confirm",
                            });
                    },
                    variant: "primary",
                },
            ],
            children: [
                (0, a.jsxs)(s.Ttm, {
                    className: h.linkCalloutContainer,
                    children: [
                        (0, a.jsxs)(s.Text, {
                            tag: "span",
                            variant: x ? "text-md/semibold" : "text-md/normal",
                            color: x ? "text-default" : "text-muted",
                            children: [j, _],
                        }),
                        (0, a.jsx)(s.Text, {
                            tag: "span",
                            variant: x ? "text-md/normal" : "text-md/semibold",
                            color: x ? "text-muted" : "text-default",
                            children: y,
                        }),
                        (0, a.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: h.checkboxMana,
                    children: (0, a.jsx)(s.Checkbox, {
                        checked: S,
                        onChange: (e) => E(e),
                        label: x
                            ? p.intl.format(p.t["haA+Xw"], { protocol: j.replace(":", "") })
                            : p.intl.format(p.t.ZgXDsI, { domain: y }),
                        labelType: "secondary",
                    }),
                }),
                (0, a.jsx)(l.SV, {
                    fallback: null,
                    children: (0, a.jsx)(c.n, { onClose: b }),
                }),
            ],
        })
    );
}
