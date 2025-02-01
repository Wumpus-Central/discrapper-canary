n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(668781),
    l = n(367907),
    u = n(434404),
    c = n(330010),
    d = n(138201),
    f = n(592125),
    _ = n(430824),
    p = n(496675),
    h = n(944486),
    m = n(981631),
    g = n(388032);
let E = (e) => {
    let { application: t, reportId: n } = e,
        [E, v] = r.useState(!1),
        [y, I] = r.useState(!1),
        T = (0, a.e7)([h.Z, f.Z], () => {
            var e;
            return null === (e = f.Z.getChannel(h.Z.getChannelId())) || void 0 === e ? void 0 : e.guild_id;
        }),
        [b, S] = r.useState(null);
    r.useEffect(() => {
        null != b && (v(!0), I(!0));
    }, [b]),
        r.useEffect(() => {
            if (null == T) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, c.i)(T);
                    } catch {}
                    if (e || null == n) return;
                    let i = n.find((e) => {
                        var n;
                        return (null === (n = e.application) || void 0 === n ? void 0 : n.id) === t.id;
                    });
                    null != i && S(i);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [T, t.id]);
    let A = r.useCallback(() => {
            I(!1),
                l.ZP.trackWithMetadata(m.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: T,
                    application_id: t.id,
                    report_id: n
                }),
                null != T &&
                    null != b &&
                    u.Z.disableIntegration(T, b.id).catch(() => {
                        o.Z.show({
                            title: g.intl.string(g.t.wYqMmJ),
                            body: g.intl.string(g.t.A4Mnsr)
                        });
                    });
        }, [t.id, T, b, n]),
        N = (0, a.e7)([p.Z, _.Z], () => {
            let e = _.Z.getGuild(T);
            if (null == e) return !1;
            let n = p.Z.can(m.Plq.MANAGE_GUILD, e),
                i = null == t.bot || p.Z.canManageUser(m.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && i;
        });
    return null != t && null != T && E && N
        ? (0, i.jsx)(d.ZP, {
              title: g.intl.string(g.t['WV/CsL']),
              description: g.intl.string(g.t['FlcC+/']),
              buttonText: y ? g.intl.string(g.t.aCJlq6) : g.intl.string(g.t['6I1F3t']),
              buttonDisabled: !y,
              buttonColor: y ? s.zxk.Colors.RED : s.zxk.Colors.WHITE,
              buttonLook: y ? s.zxk.Looks.FILLED : s.zxk.Looks.LINK,
              onButtonPress: A
          })
        : null;
};
