(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    a = n(73800),
    i = n(442837),
    o = n(755721),
    l = n(668781),
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
        y = (0, i.e7)([g.Z, m.Z], () => {
            var e;
            return null == (e = m.Z.getChannel(g.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [C, I] = a.useState(null);
    (a.useEffect(() => {
        null != C && (f(!0), j(!0));
    }, [C]),
        a.useEffect(() => {
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
                    null != r && I(r);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [y, t.id]));
    let O = a.useCallback(() => {
            (j(!1),
                s.ZP.trackWithMetadata(b.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: y,
                    application_id: t.id,
                    report_id: n
                }),
                null != y &&
                    null != C &&
                    c.Z.disableIntegration(y, C.id).catch(() => {
                        l.Z.show({
                            title: x.intl.string(x.t.wYqMmJ),
                            body: x.intl.string(x.t.A4Mnsr)
                        });
                    }));
        }, [t.id, y, C, n]),
        T = (0, i.e7)([_.Z, p.Z], () => {
            let e = p.Z.getGuild(y);
            if (null == e) return !1;
            let n = _.Z.can(b.Plq.MANAGE_GUILD, e),
                r = null == t.bot || _.Z.canManageUser(b.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != y && h && T
        ? (0, r.jsx)(u.ZP, {
              title: x.intl.string(x.t['WV/CsL']),
              description: x.intl.string(x.t['FlcC+/']),
              buttonText: v ? x.intl.string(x.t.aCJlq6) : x.intl.string(x.t['6I1F3t']),
              buttonDisabled: !v,
              buttonColor: v ? o.zx.Colors.RED : o.zx.Colors.WHITE,
              buttonLook: v ? o.zx.Looks.FILLED : o.zx.Looks.LINK,
              onButtonPress: O
          })
        : null;
};
