n.d(t, { Z: () => p }), n(301563);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(561716),
    a = n(51596),
    o = n(324262),
    s = n(981631),
    c = n(921944),
    u = n(388032),
    d = n(932478);
let p = (e) => {
    let t = l.$.binds['0']
        .split('+')
        .map((e) => (null != i.cXz[e] ? i.cXz[e]() : e))
        .join(' + ')
        .toUpperCase();
    return (0, r.jsx)(o.Z, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(c.L.UNKNOWN),
        onClick: () => (0, a.$Z)('CHANNEL_NOTICE'),
        message: u.NW.string(u.t.Qhk8cn),
        cta: t,
        trackingSource: s.PsQ.QUICK_SWITCHER_NOTICE,
        type: s.vID.QUICKSWITCHER,
        image: d,
        imageMarginX: 50
    });
};
