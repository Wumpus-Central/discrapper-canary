n.d(t, { A: () => x }), n(896048);
var l = n(64700),
    r = n(686956),
    i = n(956793),
    a = n(198982),
    s = n(421838),
    c = n(272379),
    o = n(849736),
    u = n(446600),
    d = n(897513);
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        [x, f] = l.useState(!1),
        [j, g] = l.useState(null),
        h = l.useMemo(() => u.A.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
        m = (0, c.Z)(e);
    return {
        loading: x,
        error: j,
        onSave: async (l) => {
            let { topic: c, privacyLevel: u, sendStartNotification: x } = l;
            if (null != e && "" !== c && null != u) {
                f(!0), g(null), null != n && (r.A.selectGuild(n), i.default.selectVoiceChannel(e.id));
                try {
                    let n;
                    null != h
                        ? (n = await o.b3(e, c, u))
                        : ((n = await o.Nx(e, c, u, null != x && x)), m && s.sF(d._.LIVE_STAGE_NOTIFICATION_BADGE)),
                        t(n);
                } catch (e) {
                    g(new a.LG(e)), f(!1);
                }
            }
        },
    };
}
