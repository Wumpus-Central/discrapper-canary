l.d(t, { A: () => h });
var n = l(64700),
    a = l(686956),
    i = l(956793),
    r = l(198982),
    s = l(421838),
    o = l(272379),
    d = l(849736),
    c = l(446600),
    u = l(897513);
function h(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [h, g] = n.useState(!1),
        [x, m] = n.useState(null),
        f = n.useMemo(() => c.A.getStageInstanceByChannel(e?.id), [e?.id]),
        v = (0, o.Z)(e);
    return {
        loading: h,
        error: x,
        onSave: async (n) => {
            let { topic: o, privacyLevel: c, sendStartNotification: h } = n;
            if (null != e && "" !== o && null != c) {
                g(!0), m(null), null != l && (a.A.selectGuild(l), i.default.selectVoiceChannel(e.id));
                try {
                    let l;
                    null != f
                        ? (l = await d.b3(e, o, c))
                        : ((l = await d.Nx(e, o, c, h ?? !1)), v && s.sF(u._.LIVE_STAGE_NOTIFICATION_BADGE)),
                        t(l);
                } catch (e) {
                    m(new r.LG(e)), g(!1);
                }
            }
        },
    };
}
