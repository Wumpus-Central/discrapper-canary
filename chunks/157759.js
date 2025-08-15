n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(442837),
    l = n(668781),
    o = n(367907),
    s = n(434404),
    c = n(330010),
    d = n(138201),
    u = n(592125),
    m = n(430824),
    p = n(496675),
    _ = n(944486),
    g = n(981631),
    b = n(388032);
let h = (e) => {
    let { application: t, reportId: n } = e,
        [h, x] = a.useState(!1),
        [f, v] = a.useState(!1),
        j = (0, i.e7)([_.Z, u.Z], () => {
            var e;
            return null == (e = u.Z.getChannel(_.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [y, C] = a.useState(null);
    a.useEffect(() => {
        null != y && (x(!0), v(!0));
    }, [y]),
        a.useEffect(() => {
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
                    null != r && C(r);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [j, t.id]);
    let O = a.useCallback(() => {
            v(!1),
                o.ZP.trackWithMetadata(g.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: j,
                    application_id: t.id,
                    report_id: n,
                }),
                null != j &&
                    null != y &&
                    s.Z.disableIntegration(j, y.id).catch(() => {
                        l.Z.show({
                            title: b.intl.string(b.t.wYqMmJ),
                            body: b.intl.string(b.t.A4Mnsr),
                        });
                    });
        }, [t.id, j, y, n]),
        I = (0, i.e7)([p.Z, m.Z], () => {
            let e = m.Z.getGuild(j);
            if (null == e) return !1;
            let n = p.Z.can(g.Plq.MANAGE_GUILD, e),
                r = null == t.bot || p.Z.canManageUser(g.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != j && h && I
        ? (0, r.jsx)(d.JZ, {
              title: b.intl.string(b.t["WV/CsL"]),
              description: b.intl.string(b.t["FlcC+/"]),
              buttonText: f ? b.intl.string(b.t.aCJlq6) : b.intl.string(b.t["6I1F3t"]),
              buttonDisabled: !f,
              onButtonPress: O,
              buttonVariant: f ? "critical-primary" : "secondary",
          })
        : null;
};
