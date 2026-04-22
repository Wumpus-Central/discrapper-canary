"use strict";
n.d(t, { A: () => f });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    l = n(157559),
    s = n(58149),
    d = n(997509),
    o = n(794967),
    c = n(632738),
    u = n(734057),
    _ = n(71393),
    m = n(576705),
    p = n(309010),
    h = n(652215),
    g = n(985018);
let f = (e) => {
    let { application: t, reportId: n } = e,
        [f, b] = i.useState(!1),
        [A, x] = i.useState(!1),
        v = (0, r.bG)([p.A, u.A], () => u.A.getChannel(p.A.getChannelId())?.guild_id),
        [E, I] = i.useState(null);
    i.useEffect(() => {
        null != E && (b(!0), x(!0));
    }, [E]),
        i.useEffect(() => {
            if (null == v) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, o.c)(v);
                    } catch {}
                    if (e || null == n) return;
                    let a = n.find((e) => e.application?.id === t.id);
                    null != a && I(a);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [v, t.id]);
    let T = i.useCallback(() => {
            x(!1),
                s.Ay.trackWithMetadata(h.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: v,
                    application_id: t.id,
                    report_id: n,
                }),
                null != v &&
                    null != E &&
                    d.A.disableIntegration(v, E.id).catch(() => {
                        l.A.show({ title: g.intl.string(g.t.wYqMmI), body: g.intl.string(g.t.A4Mnst) });
                    });
        }, [t.id, v, E, n]),
        S = (0, r.bG)([m.A, _.A], () => {
            let e = _.A.getGuild(v);
            if (null == e) return !1;
            let n = m.A.can(h.xBc.MANAGE_GUILD, e),
                a = null == t.bot || m.A.canManageUser(h.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && a;
        });
    return null != t && null != v && f && S
        ? (0, a.jsx)(c.PQ, {
              title: g.intl.string(g.t["WV/CsH"]),
              description: g.intl.string(g.t["FlcC+3"]),
              buttonText: A ? g.intl.string(g.t.aCJlq4) : g.intl.string(g.t["6I1F3i"]),
              buttonDisabled: !A,
              onButtonPress: T,
              buttonVariant: A ? "critical-primary" : "secondary",
          })
        : null;
};
