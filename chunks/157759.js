n.d(t, { Z: () => f }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(668781),
    s = n(367907),
    c = n(434404),
    d = n(330010),
    u = n(138201),
    m = n(592125),
    x = n(430824),
    p = n(496675),
    b = n(944486),
    h = n(981631),
    _ = n(388032);
let f = (e) => {
    let { application: t, reportId: n } = e,
        [f, g] = l.useState(!1),
        [v, j] = l.useState(!1),
        y = (0, i.e7)([b.Z, m.Z], () => {
            var e;
            return null == (e = m.Z.getChannel(b.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [O, Z] = l.useState(null);
    l.useEffect(() => {
        null != O && (g(!0), j(!0));
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
                s.ZP.trackWithMetadata(h.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: y,
                    application_id: t.id,
                    report_id: n
                }),
                null != y &&
                    null != O &&
                    c.Z.disableIntegration(y, O.id).catch(() => {
                        o.Z.show({
                            title: _.intl.string(_.t.wYqMmJ),
                            body: _.intl.string(_.t.A4Mnsr)
                        });
                    });
        }, [t.id, y, O, n]),
        C = (0, i.e7)([p.Z, x.Z], () => {
            let e = x.Z.getGuild(y);
            if (null == e) return !1;
            let n = p.Z.can(h.Plq.MANAGE_GUILD, e),
                r = null == t.bot || p.Z.canManageUser(h.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != y && f && C
        ? (0, r.jsx)(u.ZP, {
              title: _.intl.string(_.t['WV/CsL']),
              description: _.intl.string(_.t['FlcC+/']),
              buttonText: v ? _.intl.string(_.t.aCJlq6) : _.intl.string(_.t['6I1F3t']),
              buttonDisabled: !v,
              buttonColor: v ? a.zxk.Colors.RED : a.zxk.Colors.WHITE,
              buttonLook: v ? a.zxk.Looks.FILLED : a.zxk.Looks.LINK,
              onButtonPress: I
          })
        : null;
};
