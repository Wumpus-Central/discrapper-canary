n.d(t, { Z: () => g }), n(388685);
var r = n(473749),
    l = n(749210),
    i = n(287734),
    a = n(881052),
    s = n(142497),
    o = n(570188),
    c = n(471253),
    u = n(427679),
    d = n(190378);
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [g, m] = r.useState(!1),
        [x, b] = r.useState(null),
        f = r.useMemo(() => u.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        h = (0, o.J)(e);
    return {
        loading: g,
        error: x,
        onSave: async (r) => {
            let { topic: o, privacyLevel: u, sendStartNotification: g } = r;
            if (null != e && "" !== o && null != u) {
                m(!0), b(null), null != n && (l.Z.selectGuild(n), i.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != f
                        ? (n = await c.Ef(e, o, u))
                        : ((n = await c.HO(e, o, u, null != g && g)), h && s.Kw(d.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                        t(n);
                } catch (e) {
                    b(new a.Hx(e)), m(!1);
                }
            }
        },
    };
}
