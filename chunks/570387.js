t.d(r, { default: () => d }), t(190126), t(368063), t(65234), t(111804), t(490233), t(97749), t(388685);
var n = t(255367),
    o = t(73800),
    s = t(82659),
    i = t(198993),
    l = t(388032),
    a = t(93691);
let c = [],
    d = function (e) {
        let { transitionState: r, onClose: t, questId: d, questName: f } = e,
            u = o.useMemo(() => {
                let e = new URL("".concat(window.location.origin, "/quests/").concat(d));
                return e.searchParams.append("referrer_id", "quest_home_qr_code"), e.toString();
            }, [d]);
        return (0, n.jsx)(s.Modal, {
            actions: c,
            onClose: t,
            size: "md",
            subtitle: l.intl.format(l.t.y2Dgd3, { questName: f }),
            title: l.intl.string(l.t.tQWM2N),
            transitionState: r,
            children: (0, n.jsx)("div", {
                className: a.qrCodeWrapper,
                children: (0, n.jsx)(i.c2, {
                    size: 200,
                    text: u,
                    overlaySize: i.cK.SIZE_40,
                }),
            }),
        });
    };
