n.d(t, { Z: () => f }), n(388685);
var r = n(473749),
    l = n(749210),
    i = n(287734),
    a = n(881052),
    c = n(142497),
    s = n(570188),
    o = n(471253),
    u = n(427679),
    d = n(190378);
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [f, m] = r.useState(!1),
        [b, x] = r.useState(null),
        g = r.useMemo(() => u.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        j = (0, s.J)(e);
    return {
        loading: f,
        error: b,
        onSave: async (r) => {
            let { topic: s, privacyLevel: u, sendStartNotification: f } = r;
            if (null != e && "" !== s && null != u) {
                m(!0), x(null), null != n && (l.Z.selectGuild(n), i.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != g
                        ? (n = await o.Ef(e, s, u))
                        : ((n = await o.HO(e, s, u, null != f && f)), j && c.Kw(d.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                        t(n);
                } catch (e) {
                    x(new a.Hx(e)), m(!1);
                }
            }
        },
    };
}
