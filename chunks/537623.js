n.d(e, { default: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(82659),
    s = n(755721),
    c = n(481060),
    u = n(367907),
    d = n(369994),
    _ = n(681678),
    p = n(177862),
    f = n(981631),
    O = n(484710),
    h = n(388032),
    E = n(833894);
function I(t) {
    let { guildId: e, messageId: n, transitionState: l, onClose: I } = t,
        [b, A] = i.useState([]),
        [y, T] = i.useState(),
        x = i.useCallback(() => {
            let t = {
                raid_alert_type: p.wR.JOIN_RAID,
                raid_alert_id: n,
                false_alarm_type: b.map((t) => t.toString()),
                false_alarm_other_reason: y,
                guild_id: e,
            };
            (0, u.yw)(f.rMx.GUILD_RAID_FEEDBACK, t),
                (0, d.Fi)(e, n, (0, p.J$)(b)),
                I(),
                _.Z.showSuccessToast(O.wQ.SAFETY_FEEDBACK_SUCCESS);
        }, [I, n, e, y, b]),
        C = [
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
    function N(t) {
        b.includes(t) ? A((e) => e.filter((e) => e !== t)) : A((e) => [...e, t]);
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
                onClick: x,
            },
        ],
        children: (0, r.jsx)("div", {
            className: E.options,
            children: C.map((t) => {
                let { text: e, value: n } = t;
                return (0, r.jsxs)(
                    "div",
                    {
                        className: o()(E.optionContainer, { [E.optionContainerOther]: n === p.$l.OTHER }),
                        children: [
                            (0, r.jsxs)(c.P3F, {
                                className: E.optionText,
                                onClick: () => N(n),
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(c.XZJ, {
                                            type: c.XZJ.Types.INVERTED,
                                            size: 20,
                                            value: b.includes(n),
                                            onChange: () => N(n),
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
                                    children: (0, r.jsx)(s.iS, {
                                        className: E.falseAlarmReasonText,
                                        placeholder: h.intl.string(h.t["PAM+JS"]),
                                        onChange: (t) => T(t),
                                        value: y,
                                        rows: 2,
                                        autoFocus: !0,
                                        flex: !0,
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
