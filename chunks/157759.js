n.d(t, { Z: () => p }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(668781),
    o = n(367907),
    d = n(434404),
    c = n(330010),
    u = n(138201),
    m = n(592125),
    x = n(430824),
    _ = n(496675),
    h = n(944486),
    v = n(981631),
    g = n(388032);
let p = (e) => {
    let { application: t, reportId: n } = e,
        [p, f] = i.useState(!1),
        [b, Z] = i.useState(!1),
        j = (0, r.e7)([h.Z, m.Z], () => {
            var e;
            return null === (e = m.Z.getChannel(h.Z.getChannelId())) || void 0 === e ? void 0 : e.guild_id;
        }),
        [I, T] = i.useState(null);
    i.useEffect(() => {
        null != I && (f(!0), Z(!0));
    }, [I]),
        i.useEffect(() => {
            if (null == j) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, c.i)(j);
                    } catch {}
                    if (e || null == n) return;
                    let l = n.find((e) => {
                        var n;
                        return (null === (n = e.application) || void 0 === n ? void 0 : n.id) === t.id;
                    });
                    null != l && T(l);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [j, t.id]);
    let C = i.useCallback(() => {
            Z(!1),
                o.ZP.trackWithMetadata(v.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: j,
                    application_id: t.id,
                    report_id: n
                }),
                null != j &&
                    null != I &&
                    d.Z.disableIntegration(j, I.id).catch(() => {
                        s.Z.show({
                            title: g.intl.string(g.t.wYqMmJ),
                            body: g.intl.string(g.t.A4Mnsr)
                        });
                    });
        }, [t.id, j, I, n]),
        N = (0, r.e7)([_.Z, x.Z], () => {
            let e = x.Z.getGuild(j);
            if (null == e) return !1;
            let n = _.Z.can(v.Plq.MANAGE_GUILD, e),
                l = null == t.bot || _.Z.canManageUser(v.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && l;
        });
    return null != t && null != j && p && N
        ? (0, l.jsx)(u.ZP, {
              title: g.intl.string(g.t['WV/CsL']),
              description: g.intl.string(g.t['FlcC+/']),
              buttonText: b ? g.intl.string(g.t.aCJlq6) : g.intl.string(g.t['6I1F3t']),
              buttonDisabled: !b,
              buttonColor: b ? a.zxk.Colors.RED : a.zxk.Colors.WHITE,
              buttonLook: b ? a.zxk.Looks.FILLED : a.zxk.Looks.LINK,
              onButtonPress: C
          })
        : null;
};
