n.d(t, { A: () => x });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(157559),
    s = n(58149),
    d = n(997509),
    o = n(794967),
    c = n(632738),
    u = n(734057),
    _ = n(71393),
    m = n(576705),
    h = n(309010),
    g = n(652215),
    p = n(985018);
let x = (e) => {
    let { application: t, reportId: n } = e,
        [x, A] = a.useState(!1),
        [f, v] = a.useState(!1),
        b = (0, i.bG)([h.A, u.A], () => u.A.getChannel(h.A.getChannelId())?.guild_id),
        [N, E] = a.useState(null);
    a.useEffect(() => {
        null != N && (A(!0), v(!0));
    }, [N]),
        a.useEffect(() => {
            if (null == b) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, o.c)(b);
                    } catch {}
                    if (e || null == n) return;
                    let l = n.find((e) => e.application?.id === t.id);
                    null != l && E(l);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [b, t.id]);
    let S = a.useCallback(() => {
            v(!1),
                s.Ay.trackWithMetadata(g.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: b,
                    application_id: t.id,
                    report_id: n,
                }),
                null != b &&
                    null != N &&
                    d.A.disableIntegration(b, N.id).catch(() => {
                        r.A.show({ title: p.intl.string(p.t.wYqMmI), body: p.intl.string(p.t.A4Mnst) });
                    });
        }, [t.id, b, N, n]),
        T = (0, i.bG)([m.A, _.A], () => {
            let e = _.A.getGuild(b);
            if (null == e) return !1;
            let n = m.A.can(g.xBc.MANAGE_GUILD, e),
                l = null == t.bot || m.A.canManageUser(g.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && l;
        });
    return null != t && null != b && x && T
        ? (0, l.jsx)(c.PQ, {
              title: p.intl.string(p.t["WV/CsH"]),
              description: p.intl.string(p.t["FlcC+3"]),
              buttonText: f ? p.intl.string(p.t.aCJlq4) : p.intl.string(p.t["6I1F3i"]),
              buttonDisabled: !f,
              onButtonPress: S,
              buttonVariant: f ? "critical-primary" : "secondary",
          })
        : null;
};
