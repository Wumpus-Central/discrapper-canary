n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(668781),
    o = n(367907),
    s = n(434404),
    c = n(330010),
    d = n(138201),
    u = n(592125),
    m = n(430824),
    _ = n(496675),
    p = n(944486),
    x = n(981631),
    g = n(388032);
let f = (e) => {
    let { application: t, reportId: n } = e,
        [f, b] = i.useState(!1),
        [h, v] = i.useState(!1),
        j = (0, l.e7)([p.Z, u.Z], () => {
            var e;
            return null == (e = u.Z.getChannel(p.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [y, O] = i.useState(null);
    i.useEffect(() => {
        null != y && (b(!0), v(!0));
    }, [y]),
        i.useEffect(() => {
            if (null == j) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, c.i)(j);
                    } catch (e) {}
                    if (e || null == n) return;
                    let r = n.find((e) => {
                        var n;
                        return (null == (n = e.application) ? void 0 : n.id) === t.id;
                    });
                    null != r && O(r);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [j, t.id]);
    let C = i.useCallback(() => {
            v(!1),
                o.ZP.trackWithMetadata(x.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: j,
                    application_id: t.id,
                    report_id: n,
                }),
                null != j &&
                    null != y &&
                    s.Z.disableIntegration(j, y.id).catch(() => {
                        a.Z.show({
                            title: g.intl.string(g.t.wYqMmJ),
                            body: g.intl.string(g.t.A4Mnsr),
                        });
                    });
        }, [t.id, j, y, n]),
        Z = (0, l.e7)([_.Z, m.Z], () => {
            let e = m.Z.getGuild(j);
            if (null == e) return !1;
            let n = _.Z.can(x.Plq.MANAGE_GUILD, e),
                r = null == t.bot || _.Z.canManageUser(x.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != j && f && Z
        ? (0, r.jsx)(d.JZ, {
              title: g.intl.string(g.t["WV/CsL"]),
              description: g.intl.string(g.t["FlcC+/"]),
              buttonText: h ? g.intl.string(g.t.aCJlq6) : g.intl.string(g.t["6I1F3t"]),
              buttonDisabled: !h,
              onButtonPress: C,
              buttonVariant: h ? "critical-primary" : "secondary",
          })
        : null;
};
