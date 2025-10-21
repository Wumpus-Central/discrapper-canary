n.d(t, { default: () => d });
var i = n(951288),
    r = n(647438),
    c = n(159691),
    l = n(755721),
    o = n(481060),
    a = n(246295),
    s = n(388032),
    u = n(119902);
function d(e) {
    let { guildId: t, transitionState: n, onClose: d, onConfirm: h } = e,
        { rules: _, rulesAccepted: b } = (0, a.V)(t),
        k = r.useCallback(() => {
            d(), h();
        }, [d, h]);
    return (0, i.jsx)(c.u_l, {
        title: s.intl.string(s.t["Q8OFN+"]),
        subtitle: s.intl.string(s.t["WT+829"]),
        actions: [
            {
                disabled: !b,
                text: s.intl.string(s.t["qjtt/p"]),
                onClick: k,
            },
        ],
        transitionState: n,
        onClose: d,
        children: (0, i.jsx)("div", {
            className: u.checkboxContainer,
            children: _.map((e) =>
                (0, i.jsxs)(
                    l.$q,
                    {
                        className: u.checkbox,
                        reverse: !0,
                        value: e.checked,
                        align: l.wb.CENTER,
                        onChange: e.onCheck,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: e.title,
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                children: e.body,
                            }),
                        ],
                    },
                    e.key,
                ),
            ),
        }),
    });
}
