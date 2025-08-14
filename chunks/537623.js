n.d(e, { default: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(82659),
    s = n(755721),
    c = n(481060),
    u = n(367907),
    d = n(369994),
    p = n(177862),
    _ = n(981631),
    f = n(388032),
    O = n(833894);
function b(t) {
    let { guildId: e, messageId: l, transitionState: b, onClose: y } = t,
        [h, I] = i.useState([]),
        [g, x] = i.useState(),
        A = i.useCallback(() => {
            let t = {
                raid_alert_type: p.wR.JOIN_RAID,
                raid_alert_id: l,
                false_alarm_type: h.map((t) => t.toString()),
                false_alarm_other_reason: g,
                guild_id: e,
            };
            (0, u.yw)(_.rMx.GUILD_RAID_FEEDBACK, t),
                (0, d.Fi)(e, l, (0, p.J$)(h)),
                y(),
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e("37564").then(n.bind(n, 969214));
                    return (e) =>
                        (0, r.jsx)(
                            t,
                            (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (e) {
                                            var r;
                                            (r = n[e]),
                                                e in t
                                                    ? Object.defineProperty(t, e, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (t[e] = r);
                                        });
                                }
                                return t;
                            })({}, e),
                        );
                });
        }, [y, l, e, g, h]),
        E = [
            {
                text: f.intl.string(f.t.yeaXw8),
                value: p.$l.LEGITIMATE_ACTIVITY,
            },
            {
                text: f.intl.string(f.t["o++3Bw"]),
                value: p.$l.DM_SPAM,
            },
            {
                text: f.intl.string(f.t.UfHAwc),
                value: p.$l.JOIN_RAID,
            },
            {
                text: f.intl.string(f.t.K3UWeX),
                value: p.$l.OTHER,
            },
        ];
    function j(t) {
        h.includes(t) ? I((e) => e.filter((e) => e !== t)) : I((e) => [...e, t]);
    }
    return (0, r.jsx)(a.Modal, {
        onClose: y,
        transitionState: b,
        title: f.intl.string(f.t["1zmw/P"]),
        subtitle: f.intl.string(f.t.nF79oK),
        actions: [
            {
                text: f.intl.string(f.t["ETE/oK"]),
                onClick: y,
                variant: "secondary",
            },
            {
                text: f.intl.string(f.t.Gh3A0N),
                onClick: A,
            },
        ],
        children: (0, r.jsx)("div", {
            className: O.options,
            children: E.map((t) => {
                let { text: e, value: n } = t;
                return (0, r.jsxs)(
                    "div",
                    {
                        className: o()(O.optionContainer, { [O.optionContainerOther]: n === p.$l.OTHER }),
                        children: [
                            (0, r.jsxs)(c.P3F, {
                                className: O.optionText,
                                onClick: () => j(n),
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(c.XZJ, {
                                            type: c.XZJ.Types.INVERTED,
                                            size: 20,
                                            value: h.includes(n),
                                            onChange: () => j(n),
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
                                h.includes(p.$l.OTHER) &&
                                (0, r.jsx)("div", {
                                    className: O.textboxContainer,
                                    children: (0, r.jsx)(s.iS, {
                                        className: O.falseAlarmReasonText,
                                        placeholder: f.intl.string(f.t["PAM+JS"]),
                                        onChange: (t) => x(t),
                                        value: g,
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
