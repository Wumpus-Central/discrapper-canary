n.d(t, { default: () => f }), n(704826), n(35282);
var a = n(54381);
n(473749);
var r = n(734610),
    i = n(990547),
    l = n(793030),
    s = n(481060),
    o = n(213609),
    c = n(528477),
    d = n(626135),
    u = n(988158),
    m = n(981631),
    p = n(388032),
    h = n(444301);
function f(e) {
    let { url: t, trustUrl: n, isProtocol: f, onConfirm: x, onCancel: b, onClose: g, transitionState: v } = e,
        {
            protocol: j,
            authorityPrefix: y,
            hostname: C,
            theRestOfTheUrl: _,
            shouldTrustUrl: S,
            setShouldTrustUrl: E,
            handleConfirm: T,
            handleCancel: O,
        } = (0, u.X)({
            url: t,
            trustUrl: n,
            onConfirm: x,
            onCancel: b,
            onClose: g,
        });
    return (
        (0, o.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MASKED_LINK_MODAL,
        }),
        (0, a.jsxs)(l.Modal, {
            size: "md",
            transitionState: v,
            onClose: g,
            title: p.intl.string(p.t["3w1QGl"]),
            subtitle: f ? p.intl.format(p.t.aCYv1z, {}) : p.intl.string(p.t.soRxRe),
            actions: [
                {
                    text: p.intl.string(p.t["/g10LC"]),
                    onClick: () => {
                        O(),
                            d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: S,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: f ? p.intl.string(p.t.COq6kk) : p.intl.string(p.t.NcJfJG),
                    onClick: () => {
                        T(),
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
                            variant: f ? "text-md/semibold" : "text-md/normal",
                            color: f ? "text-default" : "text-muted",
                            children: [j, y],
                        }),
                        (0, a.jsx)(s.Text, {
                            tag: "span",
                            variant: f ? "text-md/normal" : "text-md/semibold",
                            color: f ? "text-muted" : "text-default",
                            children: C,
                        }),
                        (0, a.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: _,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: h.checkboxMana,
                    children: (0, a.jsx)(s.Checkbox, {
                        checked: S,
                        onChange: (e) => E(e),
                        label: f
                            ? p.intl.format(p.t["haA+Xw"], { protocol: j.replace(":", "") })
                            : p.intl.format(p.t.ZgXDsI, { domain: C }),
                        labelType: "secondary",
                    }),
                }),
                (0, a.jsx)(r.SV, {
                    fallback: null,
                    children: (0, a.jsx)(c.n, { onClose: g }),
                }),
            ],
        })
    );
}
