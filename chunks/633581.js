a.d(t, { A: () => s });
var n = a(627968),
    l = a(691885),
    i = a(890687);
let s = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: s } = (0, i.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        r = [
            { id: "none", label: "NONE", value: null },
            ...s.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, n.jsx)(l.l, {
        label: "Prefill with Quest",
        options: r,
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
