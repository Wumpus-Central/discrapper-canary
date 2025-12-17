n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(561716),
    a = n(51596),
    o = n(82950),
    s = n(981631),
    c = n(921944),
    u = n(388032),
    d = n(156132),
    p = n(932478);
let f = (e) => {
    let t = (0, r.jsx)(i.M2$, {
        shortcut: l.$.binds["0"],
        keyClassName: d.key,
    });
    return (0, r.jsx)(o.Z, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(c.L.UNKNOWN),
        onClick: () => (0, a.$Z)("CHANNEL_NOTICE"),
        message: u.intl.string(u.t.Qhk8cs),
        cta: t,
        trackingSource: s.PsQ.QUICK_SWITCHER_NOTICE,
        type: s.vID.QUICKSWITCHER,
        image: p,
        imageMarginX: 50,
    });
};
