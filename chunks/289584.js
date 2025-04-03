n.d(t, { Z: () => h }), n(47120);
var r = n(192379),
    i = n(749210),
    l = n(287734),
    a = n(881052),
    o = n(142497),
    c = n(570188),
    s = n(471253),
    d = n(427679),
    u = n(190378);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [h, g] = r.useState(!1),
        [_, m] = r.useState(null),
        b = r.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        x = (0, c.J)(e);
    return {
        loading: h,
        error: _,
        onSave: async (r) => {
            let { topic: c, privacyLevel: d, sendStartNotification: h } = r;
            if (null != e && '' !== c && null != d) {
                g(!0), m(null), null != n && (i.Z.selectGuild(n), l.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != b ? (n = await s.Ef(e, c, d)) : ((n = await s.HO(e, c, d, null != h && h)), x && o.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), t(n);
                } catch (e) {
                    m(new a.Hx(e)), g(!1);
                }
            }
        }
    };
}
