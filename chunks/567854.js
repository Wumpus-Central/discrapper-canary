n.d(t, { A: () => h });
var l = n(64700),
    i = n(686956),
    a = n(956793),
    r = n(198982),
    s = n(421838),
    c = n(272379),
    d = n(849736),
    o = n(446600),
    u = n(897513);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [h, g] = l.useState(!1),
        [x, _] = l.useState(null),
        m = l.useMemo(() => o.A.getStageInstanceByChannel(e?.id), [e?.id]),
        A = (0, c.Z)(e);
    return {
        loading: h,
        error: x,
        onSave: async (l) => {
            let { topic: c, privacyLevel: o, sendStartNotification: h } = l;
            if (null != e && "" !== c && null != o) {
                g(!0), _(null), null != n && (i.A.selectGuild(n), a.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != m
                        ? (n = await d.b3(e, c, o))
                        : ((n = await d.Nx(e, c, o, h ?? !1)), A && s.sF(u._.LIVE_STAGE_NOTIFICATION_BADGE)),
                        t(n);
                } catch (e) {
                    _(new r.LG(e)), g(!1);
                }
            }
        },
    };
}
