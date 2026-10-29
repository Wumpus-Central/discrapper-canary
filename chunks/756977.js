n.d(t, { A: () => r });
var l = n(17928),
    i = n(309010),
    u = n(626798),
    d = n(181712),
    a = n(105292);
function r(e, t) {
    let n = (0, l.bG)([u.A], () => u.A.isRequestOnCooldown(e)),
        r = (0, l.bG)([i.Ay], () => i.Ay.getVoiceChannelId() === t, [t]);
    return n
        ? [!0, a.intl.string(d.default.mVFTUg)]
        : r
          ? [!1, a.intl.string(d.default.qRXats)]
          : [!0, a.intl.string(d.default.qRXats)];
}
