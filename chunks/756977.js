n.d(e, { A: () => r });
var i = n(17928),
    l = n(309010),
    a = n(626798),
    u = n(431788),
    d = n(105292);
function r(t, e) {
    let n = (0, i.bG)([a.A], () => a.A.isRequestOnCooldown(t)),
        r = (0, i.bG)([l.Ay], () => l.Ay.getVoiceChannelId() === e, [e]);
    return n
        ? [!0, d.intl.string(u.default.mVFTUg)]
        : r
          ? [!1, d.intl.string(u.default.qRXats)]
          : [!0, d.intl.string(u.default.qRXats)];
}
