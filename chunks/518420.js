"use strict";
t.d(r, { default: () => p }), t(323874), t(14289), t(35956);
var s = t(627968),
    o = t(64700),
    i = t(189213),
    n = t(414121),
    a = t(985018),
    c = t(68341);
let l = [],
    p = function (e) {
        let { transitionState: r, onClose: t, questId: p } = e,
            d = o.useMemo(() => {
                let e = new URL(`${window.location.origin}/quests/${p}`);
                return e.searchParams.append("referrer_id", "quest_home_qr_code"), e.toString();
            }, [p]);
        return (0, s.jsx)(i.Modal, {
            actions: l,
            onClose: t,
            size: "md",
            subtitle: a.intl.string(a.t.bBTjR9),
            title: a.intl.string(a.t.g3jrBu),
            transitionState: r,
            children: (0, s.jsx)("div", {
                className: c.m,
                children: (0, s.jsx)(n.Lx, { size: 200, text: d, overlaySize: n.Zs.SIZE_40 }),
            }),
        });
    };
