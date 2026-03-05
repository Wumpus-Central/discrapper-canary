s.d(t, { A: () => u });
var l = s(627968);
s(64700);
var n = s(342494),
    a = s(397927),
    i = s(49999),
    r = s(665606),
    o = s(985018);
function u(e) {
    let { targetElementRef: t, isPremium: s, markMenuItemPopoverAsDismissed: u } = e;
    return (0, l.jsx)(n.AM, {
        targetElementRef: t,
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        badge: { type: "beta" },
        title: o.intl.string(r.default["P+eFN5"]),
        body: o.intl.string(r.default.Db2nhp),
        onRequestClose: () => u?.(i.i.USER_DISMISS),
        actions: [
            {
                icon: s ? void 0 : a.tvc,
                text: s ? o.intl.string(r.default["+h9aza"]) : o.intl.string(r.default["avps/2"]),
                onClick: () => u?.(i.i.TAKE_ACTION),
                variant: s ? void 0 : "expressive",
            },
        ],
    });
}
