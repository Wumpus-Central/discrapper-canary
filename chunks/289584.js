n.d(t, { Z: () => g }), n(388685);
var l = n(647438),
    r = n(749210),
    i = n(287734),
    a = n(881052),
    o = n(142497),
    c = n(570188),
    s = n(471253),
    u = n(427679),
    d = n(190378);
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [g, f] = l.useState(!1),
        [b, m] = l.useState(null),
        p = l.useMemo(() => u.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        h = (0, c.J)(e);
    return {
        loading: g,
        error: b,
        onSave: async (l) => {
            let { topic: c, privacyLevel: u, sendStartNotification: g } = l;
            if (null != e && "" !== c && null != u) {
                f(!0), m(null), null != n && (r.Z.selectGuild(n), i.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != p
                        ? (n = await s.Ef(e, c, u))
                        : ((n = await s.HO(e, c, u, null != g && g)), h && o.Kw(d.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                        t(n);
                } catch (e) {
                    m(new a.Hx(e)), f(!1);
                }
            }
        },
    };
}
