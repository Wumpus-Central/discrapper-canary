i.d(t, { default: () => c }), i(323874), i(14289), i(35956);
var s = i(627968),
    r = i(64700),
    n = i(189213),
    a = i(414121),
    o = i(985018),
    d = i(782389);
let l = [],
    c = function (e) {
        let { transitionState: t, onClose: i, questId: c } = e,
            u = r.useMemo(() => {
                let e = new URL(`${window.location.origin}/quests/${c}`);
                return e.searchParams.append("referrer_id", "quest_home_qr_code"), e.toString();
            }, [c]);
        return (0, s.jsx)(n.Modal, {
            actions: l,
            onClose: i,
            size: "md",
            subtitle: o.intl.string(o.t.bBTjR9),
            title: o.intl.string(o.t.g3jrBu),
            transitionState: t,
            children: (0, s.jsx)("div", {
                className: d.m,
                children: (0, s.jsx)(a.Lx, { size: 200, text: u, overlaySize: a.Zs.SIZE_40 }),
            }),
        });
    };
