n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(668781),
    s = n(367907),
    o = n(434404),
    d = n(330010),
    c = n(138201),
    u = n(592125),
    m = n(430824),
    p = n(496675),
    g = n(944486),
    _ = n(981631),
    x = n(388032);
let h = (e) => {
    let { application: t, reportId: n } = e,
        [h, b] = l.useState(!1),
        [f, v] = l.useState(!1),
        j = (0, i.e7)([g.Z, u.Z], () => {
            var e;
            return null == (e = u.Z.getChannel(g.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [y, Z] = l.useState(null);
    l.useEffect(() => {
        null != y && (b(!0), v(!0));
    }, [y]),
        l.useEffect(() => {
            if (null == j) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, d.i)(j);
                    } catch (e) {}
                    if (e || null == n) return;
                    let r = n.find((e) => {
                        var n;
                        return (null == (n = e.application) ? void 0 : n.id) === t.id;
                    });
                    null != r && Z(r);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [j, t.id]);
    let O = l.useCallback(() => {
            v(!1),
                s.ZP.trackWithMetadata(_.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: j,
                    application_id: t.id,
                    report_id: n,
                }),
                null != j &&
                    null != y &&
                    o.Z.disableIntegration(j, y.id).catch(() => {
                        a.Z.show({
                            title: x.intl.string(x.t.wYqMmI),
                            body: x.intl.string(x.t.A4Mnst),
                        });
                    });
        }, [t.id, j, y, n]),
        I = (0, i.e7)([p.Z, m.Z], () => {
            let e = m.Z.getGuild(j);
            if (null == e) return !1;
            let n = p.Z.can(_.Plq.MANAGE_GUILD, e),
                r = null == t.bot || p.Z.canManageUser(_.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != j && h && I
        ? (0, r.jsx)(c.JZ, {
              title: x.intl.string(x.t["WV/CsH"]),
              description: x.intl.string(x.t["FlcC+3"]),
              buttonText: f ? x.intl.string(x.t.aCJlq4) : x.intl.string(x.t["6I1F3i"]),
              buttonDisabled: !f,
              onButtonPress: O,
              buttonVariant: f ? "critical-primary" : "secondary",
          })
        : null;
};
