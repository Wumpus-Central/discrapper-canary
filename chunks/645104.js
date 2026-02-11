n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    l = n(342494),
    a = n(975807),
    s = n(652215),
    o = n(49999);
function d(e) {
    let { markAsDismissed: t, renderGuildHeaderDropdownButton: n } = e,
        d = r.useRef(null),
        c = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        u = r.useCallback(() => {
            (0, a.A)(s.X7G.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY), c(o.i.TAKE_ACTION);
        }, [c]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: d, children: n() }),
            (0, i.jsx)(l.AM, {
                targetElementRef: d,
                position: "bottom",
                align: "center",
                caretConfig: { align: "center" },
                title: "Take control of your game on Discord!",
                body: "Claim your game to customize how it appears across Discord and verify your official server.",
                actions: [{ text: "Claim Game", variant: "primary", onClick: u }],
                size: "md",
                onRequestClose: () => c(o.i.USER_DISMISS),
            }),
        ],
    });
}
