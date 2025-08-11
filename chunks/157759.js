n.d(t, { Z: () => h }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(668781),
    s = n(367907),
    o = n(434404),
    c = n(330010),
    d = n(138201),
    u = n(592125),
    m = n(430824),
    p = n(496675),
    g = n(944486),
    _ = n(981631),
    b = n(388032);
let h = (e) => {
    let { application: t, reportId: n } = e,
        [h, x] = i.useState(!1),
        [f, v] = i.useState(!1),
        j = (0, l.e7)([g.Z, u.Z], () => {
            var e;
            return null == (e = u.Z.getChannel(g.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [y, O] = i.useState(null);
    i.useEffect(() => {
        null != y && (x(!0), v(!0));
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
    let Z = i.useCallback(() => {
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
                            title: b.intl.string(b.t.wYqMmJ),
                            body: b.intl.string(b.t.A4Mnsr),
                        });
                    });
        }, [t.id, j, y, n]),
        I = (0, l.e7)([p.Z, m.Z], () => {
            let e = m.Z.getGuild(j);
            if (null == e) return !1;
            let n = p.Z.can(_.Plq.MANAGE_GUILD, e),
                r = null == t.bot || p.Z.canManageUser(_.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != j && h && I
        ? (0, r.jsx)(d.JZ, {
              title: b.intl.string(b.t["WV/CsL"]),
              description: b.intl.string(b.t["FlcC+/"]),
              buttonText: f ? b.intl.string(b.t.aCJlq6) : b.intl.string(b.t["6I1F3t"]),
              buttonDisabled: !f,
              onButtonPress: Z,
              buttonVariant: f ? "critical-primary" : "secondary",
          })
        : null;
};
