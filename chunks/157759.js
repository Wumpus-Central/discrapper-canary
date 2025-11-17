n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
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
    h = n(388032);
let b = (e) => {
    let { application: t, reportId: n } = e,
        [b, x] = i.useState(!1),
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
                            title: h.intl.string(h.t.wYqMmI),
                            body: h.intl.string(h.t.A4Mnst),
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
    return null != t && null != j && b && I
        ? (0, r.jsx)(d.JZ, {
              title: h.intl.string(h.t["WV/CsH"]),
              description: h.intl.string(h.t["FlcC+3"]),
              buttonText: f ? h.intl.string(h.t.aCJlq4) : h.intl.string(h.t["6I1F3i"]),
              buttonDisabled: !f,
              onButtonPress: Z,
              buttonVariant: f ? "critical-primary" : "secondary",
          })
        : null;
};
