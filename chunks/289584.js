n.d(t, { Z: () => x }), n(388685);
var r = n(647438),
    l = n(749210),
    i = n(287734),
    a = n(881052),
    s = n(142497),
    c = n(570188),
    o = n(471253),
    u = n(427679),
    d = n(190378);
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [x, g] = r.useState(!1),
        [m, b] = r.useState(null),
        h = r.useMemo(() => u.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        f = (0, c.J)(e);
    return {
        loading: x,
        error: m,
        onSave: async (r) => {
            let { topic: c, privacyLevel: u, sendStartNotification: x } = r;
            if (null != e && "" !== c && null != u) {
                g(!0), b(null), null != n && (l.Z.selectGuild(n), i.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != h
                        ? (n = await o.Ef(e, c, u))
                        : ((n = await o.HO(e, c, u, null != x && x)), f && s.Kw(d.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                        t(n);
                } catch (e) {
                    b(new a.Hx(e)), g(!1);
                }
            }
        },
    };
}
