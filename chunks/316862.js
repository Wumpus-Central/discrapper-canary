n.d(t, { A: () => f }), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(157559),
    s = n(58149),
    o = n(997509),
    c = n(794967),
    d = n(632738),
    u = n(734057),
    m = n(71393),
    b = n(576705),
    p = n(309010),
    x = n(652215),
    g = n(985018);
let f = (e) => {
    let { application: t, reportId: n } = e,
        [f, v] = r.useState(!1),
        [h, j] = r.useState(!1),
        _ = (0, a.bG)([p.A, u.A], () => {
            var e;
            return null == (e = u.A.getChannel(p.A.getChannelId())) ? void 0 : e.guild_id;
        }),
        [A, y] = r.useState(null);
    r.useEffect(() => {
        null != A && (v(!0), j(!0));
    }, [A]),
        r.useEffect(() => {
            if (null == _) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, c.c)(_);
                    } catch (e) {}
                    if (e || null == n) return;
                    let l = n.find((e) => {
                        var n;
                        return (null == (n = e.application) ? void 0 : n.id) === t.id;
                    });
                    null != l && y(l);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [_, t.id]);
    let O = r.useCallback(() => {
            j(!1),
                s.Ay.trackWithMetadata(x.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: _,
                    application_id: t.id,
                    report_id: n,
                }),
                null != _ &&
                    null != A &&
                    o.A.disableIntegration(_, A.id).catch(() => {
                        i.A.show({
                            title: g.intl.string(g.t.wYqMmI),
                            body: g.intl.string(g.t.A4Mnst),
                        });
                    });
        }, [t.id, _, A, n]),
        S = (0, a.bG)([b.A, m.A], () => {
            let e = m.A.getGuild(_);
            if (null == e) return !1;
            let n = b.A.can(x.xBc.MANAGE_GUILD, e),
                l = null == t.bot || b.A.canManageUser(x.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && l;
        });
    return null != t && null != _ && f && S
        ? (0, l.jsx)(d.PQ, {
              title: g.intl.string(g.t["WV/CsH"]),
              description: g.intl.string(g.t["FlcC+3"]),
              buttonText: h ? g.intl.string(g.t.aCJlq4) : g.intl.string(g.t["6I1F3i"]),
              buttonDisabled: !h,
              onButtonPress: O,
              buttonVariant: h ? "critical-primary" : "secondary",
          })
        : null;
};
