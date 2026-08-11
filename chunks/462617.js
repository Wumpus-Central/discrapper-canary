n.d(e, { A: () => h });
var c = n(582128),
    t = n(17928),
    u = n(115718),
    l = n(734057),
    a = n(576705),
    d = n(403362),
    s = n(181079),
    i = n(93055),
    o = n(5180),
    C = n(652215);
function h() {
    let { hasHigherPrivileges: r } = (0, i.TW)(),
        e = (0, t.bG)([s.A], () => s.A.getFavoriteChannels());
    return c.useCallback(
        (n, c) => {
            switch (n.type) {
                case u.rD.USER: {
                    let r = l.A.getDMChannelFromUserId(n.record.id);
                    if (!c && null == r) return !1;
                    return null == r || null == e[r.id];
                }
                case u.rD.GROUP_DM:
                    return null == e[n.record.id];
                case u.rD.TEXT_CHANNEL:
                case u.rD.VOICE_CHANNEL:
                    return a.A.can(C.xBc.VIEW_CHANNEL, n.record) && (0, o.IF)(n.record, r) && null == e[n.record.id];
                default:
                    return (0, d.xb)(n);
            }
        },
        [e, r],
    );
}
