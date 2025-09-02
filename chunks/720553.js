n.d(e, { default: () => h }), n(704826), n(35282);
var a = n(951288);
n(647438);
var l = n(990547),
    r = n(82659),
    i = n(755721),
    s = n(481060),
    o = n(213609),
    c = n(626135),
    d = n(988158),
    u = n(981631),
    m = n(388032),
    x = n(140080);
function h(t) {
    let { url: e, trustUrl: n, isProtocol: h, onConfirm: p, onCancel: C, onClose: _, transitionState: f } = t,
        {
            protocol: k,
            authorityPrefix: M,
            hostname: g,
            theRestOfTheUrl: b,
            shouldTrustUrl: v,
            setShouldTrustUrl: D,
            handleConfirm: L,
            handleCancel: A,
        } = (0, d.X)({
            url: e,
            trustUrl: n,
            onConfirm: p,
            onCancel: C,
            onClose: _,
        });
    return (
        (0, o.Z)({
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.MASKED_LINK_MODAL,
        }),
        (0, a.jsxs)(r.Modal, {
            size: "md",
            transitionState: f,
            onClose: _,
            title: m.intl.string(m.t["3w1QGh"]),
            subtitle: h ? m.intl.format(m.t.aCYv19, {}) : m.intl.string(m.t.soRxRU),
            actions: [
                {
                    text: m.intl.string(m.t["/g10LC"]),
                    onClick: () => {
                        A(),
                            c.default.track(u.rMx.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: v,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: h ? m.intl.string(m.t.COq6kp) : m.intl.string(m.t.NcJfJC),
                    onClick: () => {
                        L(),
                            c.default.track(u.rMx.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: v,
                                action_type: "confirm",
                            });
                    },
                    variant: "primary",
                },
            ],
            children: [
                (0, a.jsxs)(s.Ttm, {
                    className: x.linkCalloutContainer,
                    children: [
                        (0, a.jsxs)(s.Text, {
                            tag: "span",
                            variant: h ? "text-md/semibold" : "text-md/normal",
                            color: h ? "text-default" : "text-muted",
                            children: [k, M],
                        }),
                        (0, a.jsx)(s.Text, {
                            tag: "span",
                            variant: h ? "text-md/normal" : "text-md/semibold",
                            color: h ? "text-muted" : "text-default",
                            children: g,
                        }),
                        (0, a.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: b,
                        }),
                    ],
                }),
                (0, a.jsx)(i.$q, {
                    className: x.checkboxMana,
                    type: i.M0.INVERTED,
                    value: v,
                    onChange: (t, e) => D(e),
                    children: (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: h
                            ? m.intl.format(m.t["haA+X1"], { protocol: k.replace(":", "") })
                            : m.intl.format(m.t.ZgXDsL, { domain: g }),
                    }),
                }),
            ],
        })
    );
}
