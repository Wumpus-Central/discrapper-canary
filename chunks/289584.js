n.d(t, { Z: () => g }), n(388685);
var l = n(473749),
    r = n(749210),
    i = n(287734),
    a = n(881052),
    s = n(142497),
    c = n(570188),
    o = n(471253),
    u = n(427679),
    d = n(190378);
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [g, m] = l.useState(!1),
        [x, b] = l.useState(null),
        f = l.useMemo(() => u.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        j = (0, c.J)(e);
    return {
        loading: g,
        error: x,
        onSave: async (l) => {
            let { topic: c, privacyLevel: u, sendStartNotification: g } = l;
            if (null != e && "" !== c && null != u) {
                m(!0), b(null), null != n && (r.Z.selectGuild(n), i.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != f
                        ? (n = await o.Ef(e, c, u))
                        : ((n = await o.HO(e, c, u, null != g && g)), j && s.Kw(d.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                        t(n);
                } catch (e) {
                    b(new a.Hx(e)), m(!1);
                }
            }
        },
    };
}
