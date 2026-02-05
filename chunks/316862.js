n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(157559),
    s = n(58149),
    d = n(997509),
    o = n(794967),
    u = n(632738),
    c = n(734057),
    m = n(71393),
    _ = n(576705),
    x = n(309010),
    g = n(652215),
    h = n(985018);
let p = (e) => {
    let { application: t, reportId: n } = e,
        [p, A] = a.useState(!1),
        [b, v] = a.useState(!1),
        f = (0, i.bG)([x.A, c.A], () => c.A.getChannel(x.A.getChannelId())?.guild_id),
        [j, T] = a.useState(null);
    a.useEffect(() => {
        null != j && (A(!0), v(!0));
    }, [j]),
        a.useEffect(() => {
            if (null == f) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, o.c)(f);
                    } catch {}
                    if (e || null == n) return;
                    let l = n.find((e) => e.application?.id === t.id);
                    null != l && T(l);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [f, t.id]);
    let N = a.useCallback(() => {
            v(!1),
                s.Ay.trackWithMetadata(g.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: f,
                    application_id: t.id,
                    report_id: n,
                }),
                null != f &&
                    null != j &&
                    d.A.disableIntegration(f, j.id).catch(() => {
                        r.A.show({ title: h.intl.string(h.t.wYqMmI), body: h.intl.string(h.t.A4Mnst) });
                    });
        }, [t.id, f, j, n]),
        S = (0, i.bG)([_.A, m.A], () => {
            let e = m.A.getGuild(f);
            if (null == e) return !1;
            let n = _.A.can(g.xBc.MANAGE_GUILD, e),
                l = null == t.bot || _.A.canManageUser(g.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && l;
        });
    return null != t && null != f && p && S
        ? (0, l.jsx)(u.PQ, {
              title: h.intl.string(h.t["WV/CsH"]),
              description: h.intl.string(h.t["FlcC+3"]),
              buttonText: b ? h.intl.string(h.t.aCJlq4) : h.intl.string(h.t["6I1F3i"]),
              buttonDisabled: !b,
              onButtonPress: N,
              buttonVariant: b ? "critical-primary" : "secondary",
          })
        : null;
};
