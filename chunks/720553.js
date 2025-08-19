n.d(e, { default: () => x }), n(704826), n(35282);
var a = n(951288);
n(647438);
var l = n(990547),
    r = n(82659),
    i = n(481060),
    s = n(213609),
    o = n(626135),
    c = n(988158),
    d = n(981631),
    u = n(388032),
    m = n(140080);
function x(t) {
    let { url: e, trustUrl: n, isProtocol: x, onConfirm: p, onCancel: h, onClose: C, transitionState: _ } = t,
        {
            protocol: f,
            authorityPrefix: k,
            hostname: M,
            theRestOfTheUrl: g,
            shouldTrustUrl: b,
            setShouldTrustUrl: v,
            handleConfirm: D,
            handleCancel: L,
        } = (0, c.X)({
            url: e,
            trustUrl: n,
            onConfirm: p,
            onCancel: h,
            onClose: C,
        });
    return (
        (0, s.Z)({
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.MASKED_LINK_MODAL,
        }),
        (0, a.jsxs)(r.Modal, {
            size: "md",
            transitionState: _,
            onClose: C,
            title: u.intl.string(u.t["3w1QGh"]),
            subtitle: x ? u.intl.format(u.t.aCYv19, {}) : u.intl.string(u.t.soRxRU),
            actions: [
                {
                    text: u.intl.string(u.t["/g10LC"]),
                    onClick: () => {
                        L(),
                            o.default.track(d.rMx.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: b,
                                action_type: "cancel",
                            });
                    },
                    variant: "secondary",
                },
                {
                    text: x ? u.intl.string(u.t.COq6kp) : u.intl.string(u.t.NcJfJC),
                    onClick: () => {
                        D(),
                            o.default.track(d.rMx.MASKED_LINK_MODAL_CLICKED, {
                                is_trust_url_selected: b,
                                action_type: "confirm",
                            });
                    },
                    variant: "primary",
                },
            ],
            children: [
                (0, a.jsxs)(i.Ttm, {
                    className: m.linkCalloutContainer,
                    children: [
                        (0, a.jsxs)(i.Text, {
                            tag: "span",
                            variant: x ? "text-md/semibold" : "text-md/normal",
                            color: x ? "text-default" : "text-muted",
                            children: [f, k],
                        }),
                        (0, a.jsx)(i.Text, {
                            tag: "span",
                            variant: x ? "text-md/normal" : "text-md/semibold",
                            color: x ? "text-muted" : "text-default",
                            children: M,
                        }),
                        (0, a.jsx)(i.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: g,
                        }),
                    ],
                }),
                (0, a.jsx)(i.XZJ, {
                    className: m.checkboxMana,
                    type: i.XZJ.Types.INVERTED,
                    value: b,
                    onChange: (t, e) => v(e),
                    children: (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: x
                            ? u.intl.format(u.t["haA+X1"], { protocol: f.replace(":", "") })
                            : u.intl.format(u.t.ZgXDsL, { domain: M }),
                    }),
                }),
            ],
        })
    );
}
