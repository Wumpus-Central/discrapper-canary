n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(561716),
    a = n(51596),
    s = n(324262),
    o = n(981631),
    d = n(921944),
    c = n(388032),
    u = n(932478);
let h = (e) => {
    let t = r.$.binds['0']
        .split('+')
        .map((e) => (null != l.cXz[e] ? l.cXz[e]() : e))
        .join(' + ')
        .toUpperCase();
    return (0, i.jsx)(s.Z, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(d.L.UNKNOWN),
        onClick: () => (0, a.$Z)('CHANNEL_NOTICE'),
        message: c.intl.string(c.t.Qhk8cn),
        cta: t,
        trackingSource: o.PsQ.QUICK_SWITCHER_NOTICE,
        type: o.vID.QUICKSWITCHER,
        image: u,
        imageMarginX: 50
    });
};
