n.d(t, { Z: () => h }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(755721),
    s = n(668781),
    o = n(367907),
    c = n(434404),
    d = n(330010),
    u = n(138201),
    m = n(592125),
    p = n(430824),
    g = n(496675),
    x = n(944486),
    _ = n(981631),
    b = n(388032);
let h = (e) => {
    let { application: t, reportId: n } = e,
        [h, f] = l.useState(!1),
        [v, j] = l.useState(!1),
        y = (0, i.e7)([x.Z, m.Z], () => {
            var e;
            return null == (e = m.Z.getChannel(x.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [O, Z] = l.useState(null);
    l.useEffect(() => {
        null != O && (f(!0), j(!0));
    }, [O]),
        l.useEffect(() => {
            if (null == y) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, d.i)(y);
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
        }, [y, t.id]);
    let I = l.useCallback(() => {
            j(!1),
                o.ZP.trackWithMetadata(_.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: y,
                    application_id: t.id,
                    report_id: n,
                }),
                null != y &&
                    null != O &&
                    c.Z.disableIntegration(y, O.id).catch(() => {
                        s.Z.show({
                            title: b.intl.string(b.t.wYqMmJ),
                            body: b.intl.string(b.t.A4Mnsr),
                        });
                    });
        }, [t.id, y, O, n]),
        C = (0, i.e7)([g.Z, p.Z], () => {
            let e = p.Z.getGuild(y);
            if (null == e) return !1;
            let n = g.Z.can(_.Plq.MANAGE_GUILD, e),
                r = null == t.bot || g.Z.canManageUser(_.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != y && h && C
        ? (0, r.jsx)(u.ZP, {
              title: b.intl.string(b.t["WV/CsL"]),
              description: b.intl.string(b.t["FlcC+/"]),
              buttonText: v ? b.intl.string(b.t.aCJlq6) : b.intl.string(b.t["6I1F3t"]),
              buttonDisabled: !v,
              buttonColor: v ? a.zx.Colors.RED : a.zx.Colors.WHITE,
              buttonLook: v ? a.zx.Looks.FILLED : a.zx.Looks.LINK,
              onButtonPress: I,
          })
        : null;
};
