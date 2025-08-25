n.d(e, { default: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(82659),
    s = n(481060),
    c = n(367907),
    u = n(369994),
    d = n(681678),
    _ = n(177862),
    p = n(981631),
    O = n(484710),
    f = n(388032),
    h = n(833894);
function E(t) {
    let { guildId: e, messageId: n, transitionState: l, onClose: E } = t,
        [I, b] = i.useState([]),
        [y, C] = i.useState(),
        A = i.useCallback(() => {
            let t = {
                raid_alert_type: _.wR.JOIN_RAID,
                raid_alert_id: n,
                false_alarm_type: I.map((t) => t.toString()),
                false_alarm_other_reason: y,
                guild_id: e,
            };
            (0, c.yw)(p.rMx.GUILD_RAID_FEEDBACK, t),
                (0, u.Fi)(e, n, (0, _.J$)(I)),
                E(),
                d.Z.showSuccessToast(O.wQ.SAFETY_FEEDBACK_SUCCESS);
        }, [E, n, e, y, I]),
        T = [
            {
                text: f.intl.string(f.t.yeaXw8),
                value: _.$l.LEGITIMATE_ACTIVITY,
            },
            {
                text: f.intl.string(f.t["o++3Bw"]),
                value: _.$l.DM_SPAM,
            },
            {
                text: f.intl.string(f.t.UfHAwc),
                value: _.$l.JOIN_RAID,
            },
            {
                text: f.intl.string(f.t.K3UWeX),
                value: _.$l.OTHER,
            },
        ];
    function g(t) {
        I.includes(t) ? b((e) => e.filter((e) => e !== t)) : b((e) => [...e, t]);
    }
    return (0, r.jsx)(a.Modal, {
        onClose: E,
        transitionState: l,
        title: f.intl.string(f.t["1zmw/P"]),
        subtitle: f.intl.string(f.t.nF79oK),
        actions: [
            {
                text: f.intl.string(f.t["ETE/oK"]),
                onClick: E,
                variant: "secondary",
            },
            {
                text: f.intl.string(f.t.Gh3A0N),
                onClick: A,
            },
        ],
        children: (0, r.jsx)("div", {
            className: h.options,
            children: T.map((t) => {
                let { text: e, value: n } = t;
                return (0, r.jsxs)(
                    "div",
                    {
                        className: o()(h.optionContainer, { [h.optionContainerOther]: n === _.$l.OTHER }),
                        children: [
                            (0, r.jsxs)(s.P3F, {
                                className: h.optionText,
                                onClick: () => g(n),
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(s.XZJ, {
                                            type: s.XZJ.Types.INVERTED,
                                            size: 20,
                                            value: I.includes(n),
                                            onChange: () => g(n),
                                        }),
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: e,
                                    }),
                                ],
                            }),
                            n === _.$l.OTHER &&
                                I.includes(_.$l.OTHER) &&
                                (0, r.jsx)("div", {
                                    className: h.textboxContainer,
                                    children: (0, r.jsx)(s.Kx8, {
                                        placeholder: f.intl.string(f.t["PAM+JS"]),
                                        onChange: C,
                                        value: y,
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
