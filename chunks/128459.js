a.d(e, { default: () => l });
var i = a(627968),
    s = a(64700),
    r = a(158954),
    n = a(985018);
function l(t) {
    let { onConfirm: e, onClose: a, ...l } = t,
        c = s.useCallback(() => {
            e(), a();
        }, [e, a]);
    return (0, i.jsx)(r.Modal, {
        title: "Hide Game Servers tab",
        subtitle: "This will hide the Game Servers tab unless a server has an activated Game Server.",
        size: "sm",
        actions: [
            { text: n.intl.string(n.t["ETE/oC"]), onClick: a, variant: "secondary" },
            { text: "Hide Tab", onClick: c, variant: "critical-primary" },
        ],
        transitionState: l.transitionState,
        onClose: a,
    });
}
