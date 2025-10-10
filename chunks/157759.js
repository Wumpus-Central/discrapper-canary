n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(668781),
    o = n(367907),
    s = n(434404),
    c = n(330010),
    d = n(138201),
    u = n(592125),
    _ = n(430824),
    m = n(496675),
    p = n(944486),
    g = n(981631),
    f = n(388032);
let b = (e) => {
    let { application: t, reportId: n } = e,
        [b, h] = i.useState(!1),
        [x, v] = i.useState(!1),
        j = (0, l.e7)([p.Z, u.Z], () => {
            var e;
            return null == (e = u.Z.getChannel(p.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [y, O] = i.useState(null);
    i.useEffect(() => {
        null != y && (h(!0), v(!0));
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
    let I = i.useCallback(() => {
            v(!1),
                o.ZP.trackWithMetadata(g.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: j,
                    application_id: t.id,
                    report_id: n,
                }),
                null != j &&
                    null != y &&
                    s.Z.disableIntegration(j, y.id).catch(() => {
                        a.Z.show({
                            title: f.intl.string(f.t.wYqMmJ),
                            body: f.intl.string(f.t.A4Mnsr),
                        });
                    });
        }, [t.id, j, y, n]),
        C = (0, l.e7)([m.Z, _.Z], () => {
            let e = _.Z.getGuild(j);
            if (null == e) return !1;
            let n = m.Z.can(g.Plq.MANAGE_GUILD, e),
                r = null == t.bot || m.Z.canManageUser(g.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != j && b && C
        ? (0, r.jsx)(d.JZ, {
              title: f.intl.string(f.t["WV/CsL"]),
              description: f.intl.string(f.t["FlcC+/"]),
              buttonText: x ? f.intl.string(f.t.aCJlq6) : f.intl.string(f.t["6I1F3t"]),
              buttonDisabled: !x,
              onButtonPress: I,
              buttonVariant: x ? "critical-primary" : "secondary",
          })
        : null;
};
