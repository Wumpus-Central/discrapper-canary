t.d(n, { Z: () => m }), t(47120);
var l = t(192379),
    i = t(749210),
    r = t(287734),
    a = t(881052),
    s = t(142497),
    o = t(570188),
    c = t(471253),
    d = t(427679),
    u = t(190378);
function m(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [m, _] = l.useState(!1),
        [h, x] = l.useState(null),
        g = l.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        v = (0, o.J)(e);
    return {
        loading: m,
        error: h,
        onSave: async (l) => {
            let { topic: o, privacyLevel: d, sendStartNotification: m } = l;
            if (null != e && '' !== o && null != d) {
                _(!0), x(null), null != t && (i.Z.selectGuild(t), r.default.selectVoiceChannel(e.id));
                try {
                    let t;
                    null != g ? (t = await c.Ef(e, o, d)) : ((t = await c.HO(e, o, d, null != m && m)), v && s.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), n(t);
                } catch (e) {
                    x(new a.Hx(e)), _(!1);
                }
            }
        }
    };
}
