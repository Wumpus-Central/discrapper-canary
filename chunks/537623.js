n.d(e, { default: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(793030),
    s = n(755721),
    c = n(481060),
    u = n(367907),
    d = n(369994),
    _ = n(681678),
    p = n(177862),
    O = n(981631),
    f = n(484710),
    h = n(388032),
    E = n(833894);
function I(t) {
    let { guildId: e, messageId: n, transitionState: l, onClose: I } = t,
        [b, y] = i.useState([]),
        [C, A] = i.useState(),
        g = i.useCallback(() => {
            let t = {
                raid_alert_type: p.wR.JOIN_RAID,
                raid_alert_id: n,
                false_alarm_type: b.map((t) => t.toString()),
                false_alarm_other_reason: C,
                guild_id: e,
            };
            (0, u.yw)(O.rMx.GUILD_RAID_FEEDBACK, t),
                (0, d.Fi)(e, n, (0, p.J$)(b)),
                I(),
                _.Z.showSuccessToast(f.wQ.SAFETY_FEEDBACK_SUCCESS);
        }, [I, n, e, C, b]),
        x = [
            {
                text: h.intl.string(h.t.yeaXw8),
                value: p.$l.LEGITIMATE_ACTIVITY,
            },
            {
                text: h.intl.string(h.t["o++3Bw"]),
                value: p.$l.DM_SPAM,
            },
            {
                text: h.intl.string(h.t.UfHAwc),
                value: p.$l.JOIN_RAID,
            },
            {
                text: h.intl.string(h.t.K3UWeX),
                value: p.$l.OTHER,
            },
        ];
    function D(t) {
        b.includes(t) ? y((e) => e.filter((e) => e !== t)) : y((e) => [...e, t]);
    }
    return (0, r.jsx)(a.Modal, {
        onClose: I,
        transitionState: l,
        title: h.intl.string(h.t["1zmw/P"]),
        subtitle: h.intl.string(h.t.nF79oK),
        actions: [
            {
                text: h.intl.string(h.t["ETE/oK"]),
                onClick: I,
                variant: "secondary",
            },
            {
                text: h.intl.string(h.t.Gh3A0N),
                onClick: g,
            },
        ],
        children: (0, r.jsx)("div", {
            className: E.options,
            children: x.map((t) => {
                let { text: e, value: n } = t;
                return (0, r.jsxs)(
                    "div",
                    {
                        className: o()(E.optionContainer, { [E.optionContainerOther]: n === p.$l.OTHER }),
                        children: [
                            (0, r.jsxs)(c.P3F, {
                                className: E.optionText,
                                onClick: () => D(n),
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(s.$q, {
                                            type: s.M0.INVERTED,
                                            size: 20,
                                            value: b.includes(n),
                                            onChange: () => D(n),
                                        }),
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: e,
                                    }),
                                ],
                            }),
                            n === p.$l.OTHER &&
                                b.includes(p.$l.OTHER) &&
                                (0, r.jsx)("div", {
                                    className: E.textboxContainer,
                                    children: (0, r.jsx)(c.Kx8, {
                                        placeholder: h.intl.string(h.t["PAM+JS"]),
                                        onChange: A,
                                        value: C,
                                        autoFocus: !0,
                                    }),
                                }),
                        ],
                    },
                    n,
                );
            }),
        }),
    });
}
