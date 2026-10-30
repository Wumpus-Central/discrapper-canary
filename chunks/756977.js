i.d(t, { A: () => r });
var l = i(17928),
    n = i(309010),
    u = i(626798),
    d = i(51685),
    a = i(105292);
function r(e, t) {
    let i = (0, l.bG)([u.A], () => u.A.isRequestOnCooldown(e)),
        r = (0, l.bG)([n.Ay], () => n.Ay.getVoiceChannelId() === t, [t]);
    return i
        ? [!0, a.intl.string(d.default.mVFTUg)]
        : r
          ? [!1, a.intl.string(d.default.qRXats)]
          : [!0, a.intl.string(d.default.qRXats)];
}
