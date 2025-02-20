n.d(t, { Z: () => _ }), n(47120);
var r = n(192379),
    a = n(749210),
    i = n(287734),
    o = n(881052),
    l = n(142497),
    c = n(570188),
    s = n(471253),
    d = n(427679),
    u = n(190378);
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [_, m] = r.useState(!1),
        [b, h] = r.useState(null),
        g = r.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        p = (0, c.J)(e);
    return {
        loading: _,
        error: b,
        onSave: async (r) => {
            let { topic: c, privacyLevel: d, sendStartNotification: _ } = r;
            if (null != e && '' !== c && null != d) {
                m(!0), h(null), null != n && (a.Z.selectGuild(n), i.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != g ? (n = await s.Ef(e, c, d)) : ((n = await s.HO(e, c, d, null != _ && _)), p && l.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)), t(n);
                } catch (e) {
                    h(new o.Hx(e)), m(!1);
                }
            }
        }
    };
}
