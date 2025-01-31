n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(594174),
    r = n(74538),
    s = n(878349),
    o = n(388032);
function c(e) {
    let { value: t, labelText: n, onChange: c, onShowUpsell: d } = e,
        u = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        h = r.ZP.canUseFancyVoiceChannelReactions(u),
        p = '';
    return (
        (p = h ? (t ? o.intl.string(o.t.CfapQU) : o.intl.string(o.t.GB2x0t)) : o.intl.string(o.t.fe05ND)),
        (0, i.jsx)(s.Z, {
            checked: t,
            onChange: c,
            labelText: n,
            tooltipText: p,
            iconAltText: o.intl.string(o.t.oF6B0N),
            canToggle: h,
            onClick: h ? () => {} : d
        })
    );
}
