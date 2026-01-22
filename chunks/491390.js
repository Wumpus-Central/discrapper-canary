r.d(t, {
    default: () => p,
}),
    r(896048),
    r(693327),
    r(554719),
    r(680155),
    r(323874),
    r(14289),
    r(35956);
var n = r(627968),
    o = r(64700),
    s = r(158954),
    a = r(414121),
    i = r(985018),
    c = r(194536);
let l = [],
    p = function (e) {
        let { transitionState: t, onClose: r, questId: p } = e,
            f = o.useMemo(() => {
                let e = new URL("".concat(window.location.origin, "/quests/").concat(p));
                return e.searchParams.append("referrer_id", "quest_home_qr_code"), e.toString();
            }, [p]);
        return (0, n.jsx)(s.Modal, {
            actions: l,
            onClose: r,
            size: "md",
            subtitle: i.intl.string(i.t.bBTjR9),
            title: i.intl.string(i.t.g3jrBu),
            transitionState: t,
            children: (0, n.jsx)("div", {
                className: c.m,
                children: (0, n.jsx)(a.Lx, {
                    size: 200,
                    text: f,
                    overlaySize: a.Zs.SIZE_40,
                }),
            }),
        });
    };
