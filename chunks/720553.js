n.d(e, { default: () => m }), n(704826), n(35282);
var a = n(54381);
n(473749);
var l = n(990547),
    r = n(793030),
    c = n(481060),
    i = n(213609),
    o = n(626135),
    s = n(988158),
    d = n(981631),
    u = n(388032),
    x = n(140080);
function m(t) {
    let { url: e, trustUrl: n, isProtocol: m, onConfirm: h, onCancel: p, onClose: C, transitionState: k } = t,
        {
            protocol: _,
            authorityPrefix: f,
            hostname: b,
            theRestOfTheUrl: M,
            shouldTrustUrl: g,
            setShouldTrustUrl: v,
            handleConfirm: D,
            handleCancel: L,
        } = (0, s.X)({
            url: e,
            trustUrl: n,
            onConfirm: h,
            onCancel: p,
            onClose: C,
        });
    return (
        (0, i.Z)({
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.MASKED_LINK_MODAL,
        }),
        (0, a.jsxs)(r.Modal, {
            size: "md",
            transitionState: k,
            onClose: C,
            title: u.intl.string(u.t["3w1QGl"]),
            subtitle: m ? u.intl.format(u.t.aCYv1z, {}) : u.intl.string(u.t.soRxRe),
            actions: [
                {
                    text: u.intl.string(u.t["/g10LC"]),
                    onClick: () => {
                        L(),
                            o.default.track(d.rMx.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: g,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: m ? u.intl.string(u.t.COq6kk) : u.intl.string(u.t.NcJfJG),
                    onClick: () => {
                        D(),
                            o.default.track(d.rMx.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: g,
                                action_type: "confirm",
                            });
                    },
                    variant: "primary",
                },
            ],
            children: [
                (0, a.jsxs)(c.Ttm, {
                    className: x.linkCalloutContainer,
                    children: [
                        (0, a.jsxs)(c.Text, {
                            tag: "span",
                            variant: m ? "text-md/semibold" : "text-md/normal",
                            color: m ? "text-default" : "text-muted",
                            children: [_, f],
                        }),
                        (0, a.jsx)(c.Text, {
                            tag: "span",
                            variant: m ? "text-md/normal" : "text-md/semibold",
                            color: m ? "text-muted" : "text-default",
                            children: b,
                        }),
                        (0, a.jsx)(c.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: M,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: x.checkboxMana,
                    children: (0, a.jsx)(c.Checkbox, {
                        checked: g,
                        onChange: (t) => v(t),
                        label: m
                            ? u.intl.format(u.t["haA+Xw"], { protocol: _.replace(":", "") })
                            : u.intl.format(u.t.ZgXDsI, { domain: b }),
                        labelType: "secondary",
                    }),
                }),
            ],
        })
    );
}
