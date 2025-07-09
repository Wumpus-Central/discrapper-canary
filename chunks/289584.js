(n.d(t, { Z: () => h }), n(388685));
var r = n(73800),
    i = n(749210),
    l = n(287734),
    a = n(881052),
    o = n(142497),
    s = n(570188),
    c = n(471253),
    d = n(427679),
    u = n(190378);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [h, g] = r.useState(!1),
        [_, m] = r.useState(null),
        b = r.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        f = (0, s.J)(e);
    return {
        loading: h,
        error: _,
        onSave: async (r) => {
            let { topic: s, privacyLevel: d, sendStartNotification: h } = r;
            if (null != e && '' !== s && null != d) {
                (g(!0), m(null), null != n && (i.Z.selectGuild(n), l.default.selectVoiceChannel(e.id)));
                try {
                    let n;
                    (null != b ? (n = await c.Ef(e, s, d)) : ((n = await c.HO(e, s, d, null != h && h)), f && o.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), t(n));
                } catch (e) {
                    (m(new a.Hx(e)), g(!1));
                }
            }
        }
    };
}
