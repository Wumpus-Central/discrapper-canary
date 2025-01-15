var i = n(200651);
n(192379);
var r = n(481060),
    l = n(561716),
    a = n(51596),
    s = n(324262),
    o = n(981631),
    c = n(921944),
    d = n(388032),
    u = n(932478);
t.Z = (e) => {
    let t = l.$.binds['0']
        .split('+')
        .map((e) => (null != r.PRETTY_KEYS[e] ? r.PRETTY_KEYS[e]() : e))
        .join(' + ')
        .toUpperCase();
    return (0, i.jsx)(s.Z, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(c.L.UNKNOWN),
        onClick: () => (0, a.$Z)('CHANNEL_NOTICE'),
        message: d.intl.string(d.t.Qhk8cn),
        cta: t,
        trackingSource: o.PsQ.QUICK_SWITCHER_NOTICE,
        type: o.vID.QUICKSWITCHER,
        image: u,
        imageMarginX: 50
    });
};
