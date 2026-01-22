n.d(t, {
    A: () => r,
}),
    n(896048);
var a = n(627968),
    l = n(397927),
    i = n(890687);
let r = function (e) {
    let { onSelect: t, quest: n } = e,
        { quests: r } = (0, i.mL)({
            fetchPolicy: "cache-and-network",
            callerSource: "prefill_selector",
        }),
        s = [
            {
                id: "none",
                label: "NONE",
                value: null,
            },
            ...r.map((e) => ({
                id: e.id,
                label: e.config.messages.questName,
                value: e,
            })),
        ];
    return (0, a.jsx)(l.l6P, {
        label: "Prefill with Quest",
        options: s,
        value: n,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
