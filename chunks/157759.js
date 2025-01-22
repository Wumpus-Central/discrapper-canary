var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(481060),
    u = r(668781),
    c = r(367907),
    d = r(434404),
    f = r(330010),
    p = r(138201),
    h = r(592125),
    _ = r(430824),
    m = r(496675),
    g = r(944486),
    E = r(981631),
    v = r(388032);
let y = (e) => {
    let { application: n, reportId: r } = e,
        [i, y] = o.useState(!1),
        [b, I] = o.useState(!1),
        T = (0, s.e7)([g.Z, h.Z], () => {
            var e;
            return null === (e = h.Z.getChannel(g.Z.getChannelId())) || void 0 === e ? void 0 : e.guild_id;
        }),
        [S, A] = o.useState(null);
    o.useEffect(() => {
        null != S && (y(!0), I(!0));
    }, [S]),
        o.useEffect(() => {
            if (null == T) return;
            let e = !1;
            return (
                (async () => {
                    let r = null;
                    try {
                        r = await (0, f.i)(T);
                    } catch {}
                    if (e || null == r) return;
                    let i = r.find((e) => {
                        var r;
                        return (null === (r = e.application) || void 0 === r ? void 0 : r.id) === n.id;
                    });
                    null != i && A(i);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [T, n.id]);
    let C = o.useCallback(() => {
            I(!1),
                c.ZP.trackWithMetadata(E.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: T,
                    application_id: n.id,
                    report_id: r
                }),
                null != T &&
                    null != S &&
                    d.Z.disableIntegration(T, S.id).catch(() => {
                        u.Z.show({
                            title: v.intl.string(v.t.wYqMmJ),
                            body: v.intl.string(v.t.A4Mnsr)
                        });
                    });
        }, [n.id, T, S, r]),
        N = (0, s.e7)([m.Z, _.Z], () => {
            let e = _.Z.getGuild(T);
            if (null == e) return !1;
            let r = m.Z.can(E.Plq.MANAGE_GUILD, e),
                i = null == n.bot || m.Z.canManageUser(E.Plq.MANAGE_GUILD, n.bot.id, e);
            return r && i;
        });
    return null != n && null != T && i && N
        ? (0, a.jsx)(p.ZP, {
              title: v.intl.string(v.t['WV/CsL']),
              description: v.intl.string(v.t['FlcC+/']),
              buttonText: b ? v.intl.string(v.t.aCJlq6) : v.intl.string(v.t['6I1F3t']),
              buttonDisabled: !b,
              buttonColor: b ? l.Button.Colors.RED : l.Button.Colors.WHITE,
              buttonLook: b ? l.Button.Looks.FILLED : l.Button.Looks.LINK,
              onButtonPress: C
          })
        : null;
};
n.Z = y;
