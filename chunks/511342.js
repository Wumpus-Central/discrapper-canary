n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(907862),
    a = n(100527),
    s = n(434404),
    o = n(981631),
    c = n(921944),
    u = n(18853),
    d = n(388032),
    p = n(437329);
function f(e) {
    let { guild: t, markAsDismissed: n, renderTargetElement: f } = e,
        h = i.useRef(null),
        g = {
            text: d.intl.string(u.default.Xnghqy),
            onClick: () => {
                s.Z.open(t.id, o.pNK.BOOST_PERKS, { section: a.Z.GUILD_BOOSTING_PROGRESS_BAR }), n(c.L.TAKE_ACTION);
            },
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: h,
                children: f(),
            }),
            (0, r.jsx)(l.Mb, {
                targetElementRef: h,
                title: d.intl.string(u.default.UuwXRZ),
                body: d.intl.string(u.default.MIwlcR),
                caretConfig: {
                    position: "top",
                    align: "center",
                },
                assetUrl: p.Z,
                action: g,
                onRequestClose: () => n(c.L.USER_DISMISS),
            }),
        ],
    });
}
