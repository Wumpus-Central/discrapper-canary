n.d(t, { Z: () => h }), n(388685);
var r = n(255367),
    a = n(73800),
    i = n(442837),
    l = n(481060),
    o = n(668781),
    s = n(367907),
    c = n(434404),
    d = n(330010),
    u = n(138201),
    m = n(592125),
    p = n(430824),
    _ = n(496675),
    g = n(944486),
    b = n(981631),
    x = n(388032);
let h = (e) => {
    let { application: t, reportId: n } = e,
        [h, f] = a.useState(!1),
        [v, j] = a.useState(!1),
        C = (0, i.e7)([g.Z, m.Z], () => {
            var e;
            return null == (e = m.Z.getChannel(g.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [y, I] = a.useState(null);
    a.useEffect(() => {
        null != y && (f(!0), j(!0));
    }, [y]),
        a.useEffect(() => {
            if (null == C) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, d.i)(C);
                    } catch (e) {}
                    if (e || null == n) return;
                    let r = n.find((e) => {
                        var n;
                        return (null == (n = e.application) ? void 0 : n.id) === t.id;
                    });
                    null != r && I(r);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [C, t.id]);
    let O = a.useCallback(() => {
            j(!1),
                s.ZP.trackWithMetadata(b.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: C,
                    application_id: t.id,
                    report_id: n
                }),
                null != C &&
                    null != y &&
                    c.Z.disableIntegration(C, y.id).catch(() => {
                        o.Z.show({
                            title: x.intl.string(x.t.wYqMmJ),
                            body: x.intl.string(x.t.A4Mnsr)
                        });
                    });
        }, [t.id, C, y, n]),
        T = (0, i.e7)([_.Z, p.Z], () => {
            let e = p.Z.getGuild(C);
            if (null == e) return !1;
            let n = _.Z.can(b.Plq.MANAGE_GUILD, e),
                r = null == t.bot || _.Z.canManageUser(b.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != C && h && T
        ? (0, r.jsx)(u.ZP, {
              title: x.intl.string(x.t['WV/CsL']),
              description: x.intl.string(x.t['FlcC+/']),
              buttonText: v ? x.intl.string(x.t.aCJlq6) : x.intl.string(x.t['6I1F3t']),
              buttonDisabled: !v,
              buttonColor: v ? l.zxk.Colors.RED : l.zxk.Colors.WHITE,
              buttonLook: v ? l.zxk.Looks.FILLED : l.zxk.Looks.LINK,
              onButtonPress: O
          })
        : null;
};
