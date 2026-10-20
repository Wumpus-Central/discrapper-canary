t.d(n, { A: () => s });
var l = t(991690),
    i = t(976860),
    d = t(418241),
    r = t(734057),
    a = t(808728),
    u = t(576705),
    c = t(309010),
    A = t(91242),
    I = t(574172),
    h = t(869146),
    C = t(652215),
    N = t(457827);
function s(e) {
    var n;
    let t = A.A.getFrame(e);
    if (null == t) return;
    ((n = t.id),
        h.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) &&
            A.A.getMainFrame()?.id === n &&
            (0, I.close)(C.MLl.ACTIVITY_POPOUT));
    let { surface: s } = t;
    switch (s.type) {
        case l.U.APP_CHANNEL: {
            let e = c.Ay.getChannelId() === s.channelId;
            if (((0, N.r)(t.id), e)) {
                let e = r.A.getChannel(s.channelId)?.getGuildId() ?? s.guildId ?? null;
                (0, i.pX)(
                    (function (e, n) {
                        if (null == e) return C.BVt.FRIENDS;
                        let t = a.Ay.getDefaultChannel(e);
                        if (null != t && t.id !== n) return C.BVt.CHANNEL(e, t.id);
                        let l = a.Ay.getFirstChannel(e, (e) => {
                            let { channel: t } = e;
                            return t.id !== n && u.A.can(C.xBc.VIEW_CHANNEL, t);
                        });
                        return null != l ? C.BVt.CHANNEL(e, l.id) : C.BVt.FRIENDS;
                    })(e, s.channelId),
                );
            }
            return;
        }
        case l.U.VOICE_CHANNEL:
            (0, d.N)(s.channelId);
            return;
        default:
            (0, N.r)(t.id);
    }
}
