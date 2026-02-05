n.d(t, { A: () => l });
var a = n(627968),
    s = n(397927),
    i = n(890687);
let l = function (e) {
    let { onSelect: t, quest: n } = e,
        { quests: l } = (0, i.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        r = [
            { id: "none", label: "NONE", value: null },
            ...l.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, a.jsx)(s.l6P, {
        label: "Prefill with Quest",
        options: r,
        value: n,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
