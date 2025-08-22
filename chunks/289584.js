n.d(t, { Z: () => g }), n(388685);
var l = n(647438),
    i = n(749210),
    r = n(287734),
    a = n(881052),
    o = n(142497),
    c = n(570188),
    s = n(471253),
    u = n(427679),
    d = n(190378);
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [g, m] = l.useState(!1),
        [f, h] = l.useState(null),
        _ = l.useMemo(() => u.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        x = (0, c.J)(e);
    return {
        loading: g,
        error: f,
        onSave: async (l) => {
            let { topic: c, privacyLevel: u, sendStartNotification: g } = l;
            if (null != e && "" !== c && null != u) {
                m(!0), h(null), null != n && (i.Z.selectGuild(n), r.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != _
                        ? (n = await s.Ef(e, c, u))
                        : ((n = await s.HO(e, c, u, null != g && g)), x && o.Kw(d.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                        t(n);
                } catch (e) {
                    h(new a.Hx(e)), m(!1);
                }
            }
        },
    };
}
