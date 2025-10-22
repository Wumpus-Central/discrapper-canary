t.d(r, { default: () => u }), t(190126), t(368063), t(65234), t(111804), t(490233), t(97749), t(388685);
var n = t(951288),
    o = t(647438),
    s = t(793030),
    i = t(198993),
    a = t(388032),
    c = t(93691);
let l = [],
    u = function (e) {
        let { transitionState: r, onClose: t, questId: u, questName: p } = e,
            f = o.useMemo(() => {
                let e = new URL("".concat(window.location.origin, "/quests/").concat(u));
                return e.searchParams.append("referrer_id", "quest_home_qr_code"), e.toString();
            }, [u]);
        return (0, n.jsx)(s.Modal, {
            actions: l,
            onClose: t,
            size: "md",
            subtitle: a.intl.format(a.t.y2Dgd4, { questName: p }),
            title: a.intl.string(a.t.tQWM2E),
            transitionState: r,
            children: (0, n.jsx)("div", {
                className: c.qrCodeWrapper,
                children: (0, n.jsx)(i.c2, {
                    size: 200,
                    text: f,
                    overlaySize: i.cK.SIZE_40,
                }),
            }),
        });
    };
