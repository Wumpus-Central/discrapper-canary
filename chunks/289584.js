n.d(t, { Z: () => x }), n(388685);
var r = n(647438),
    i = n(749210),
    l = n(287734),
    a = n(881052),
    o = n(142497),
    s = n(570188),
    c = n(471253),
    d = n(427679),
    u = n(190378);
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [x, h] = r.useState(!1),
        [g, m] = r.useState(null),
        b = r.useMemo(() => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        f = (0, s.J)(e);
    return {
        loading: x,
        error: g,
        onSave: async (r) => {
            let { topic: s, privacyLevel: d, sendStartNotification: x } = r;
            if (null != e && "" !== s && null != d) {
                h(!0), m(null), null != n && (i.Z.selectGuild(n), l.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != b
                        ? (n = await c.Ef(e, s, d))
                        : ((n = await c.HO(e, s, d, null != x && x)), f && o.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                        t(n);
                } catch (e) {
                    m(new a.Hx(e)), h(!1);
                }
            }
        },
    };
}
