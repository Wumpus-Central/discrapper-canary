n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(668781),
    s = n(367907),
    o = n(434404),
    c = n(330010),
    d = n(138201),
    u = n(592125),
    m = n(430824),
    b = n(496675),
    p = n(944486),
    g = n(981631),
    f = n(388032);
let x = (e) => {
    let { application: t, reportId: n } = e,
        [x, h] = l.useState(!1),
        [v, j] = l.useState(!1),
        _ = (0, i.e7)([p.Z, u.Z], () => {
            var e;
            return null == (e = u.Z.getChannel(p.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [y, O] = l.useState(null);
    l.useEffect(() => {
        null != y && (h(!0), j(!0));
    }, [y]),
        l.useEffect(() => {
            if (null == _) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, c.i)(_);
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
        }, [_, t.id]);
    let Z = l.useCallback(() => {
            j(!1),
                s.ZP.trackWithMetadata(g.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: _,
                    application_id: t.id,
                    report_id: n,
                }),
                null != _ &&
                    null != y &&
                    o.Z.disableIntegration(_, y.id).catch(() => {
                        a.Z.show({
                            title: f.intl.string(f.t.wYqMmI),
                            body: f.intl.string(f.t.A4Mnst),
                        });
                    });
        }, [t.id, _, y, n]),
        C = (0, i.e7)([b.Z, m.Z], () => {
            let e = m.Z.getGuild(_);
            if (null == e) return !1;
            let n = b.Z.can(g.Plq.MANAGE_GUILD, e),
                r = null == t.bot || b.Z.canManageUser(g.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != _ && x && C
        ? (0, r.jsx)(d.JZ, {
              title: f.intl.string(f.t["WV/CsH"]),
              description: f.intl.string(f.t["FlcC+3"]),
              buttonText: v ? f.intl.string(f.t.aCJlq4) : f.intl.string(f.t["6I1F3i"]),
              buttonDisabled: !v,
              onButtonPress: Z,
              buttonVariant: v ? "critical-primary" : "secondary",
          })
        : null;
};
