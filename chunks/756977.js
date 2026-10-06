n.d(e, { A: () => d });
var i = n(17928),
    l = n(309010),
    a = n(680724),
    r = n(905322),
    u = n(375708);
function d(t, e) {
    let n = (0, i.bG)([a.A], () => a.A.isRequestOnCooldown(t)),
        d = (0, i.bG)([l.Ay], () => l.Ay.getVoiceChannelId() === e, [e]);
    return n
        ? [!0, u.intl.string(r.default.mVFTUg)]
        : d
          ? [!1, u.intl.string(r.default.qRXats)]
          : [!0, u.intl.string(r.default.qRXats)];
}
