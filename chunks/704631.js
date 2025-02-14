n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(324262),
    a = n(981631),
    s = n(921944),
    o = n(388032),
    d = n(524094);
function c(e) {
    let { guild: t, markAsDismissed: c } = e;
    return (0, i.jsx)(r.Z, {
        guild: t,
        onDismissed: () => c(s.L.UNKNOWN),
        onClick: function () {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        message: o.intl.string(o.t['1+hiPz']),
        cta: o.intl.string(o.t.hvVgAQ),
        trackingSource: a.PsQ.HUB_LINK_NOTICE,
        type: a.vID.HUB_LINK,
        image: d
    });
}
