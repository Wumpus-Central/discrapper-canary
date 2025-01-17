var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(481060),
    u = r(668781),
    c = r(367907),
    d = r(434404),
    f = r(330010),
    _ = r(138201),
    h = r(592125),
    p = r(430824),
    m = r(496675),
    g = r(944486),
    E = r(981631),
    v = r(388032);
let I = (e) => {
    let { application: n, reportId: r } = e,
        [i, I] = s.useState(!1),
        [T, b] = s.useState(!1),
        y = (0, o.e7)([g.Z, h.Z], () => {
            var e;
            return null === (e = h.Z.getChannel(g.Z.getChannelId())) || void 0 === e ? void 0 : e.guild_id;
        }),
        [S, A] = s.useState(null);
    s.useEffect(() => {
        null != S && (I(!0), b(!0));
    }, [S]),
        s.useEffect(() => {
            if (null == y) return;
            let e = !1;
            return (
                (async () => {
                    let r = null;
                    try {
                        r = await (0, f.i)(y);
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
        }, [y, n.id]);
    let N = s.useCallback(() => {
            b(!1),
                c.ZP.trackWithMetadata(E.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: y,
                    application_id: n.id,
                    report_id: r
                }),
                null != y &&
                    null != S &&
                    d.Z.disableIntegration(y, S.id).catch(() => {
                        u.Z.show({
                            title: v.intl.string(v.t.wYqMmJ),
                            body: v.intl.string(v.t.A4Mnsr)
                        });
                    });
        }, [n.id, y, S, r]),
        C = (0, o.e7)([m.Z, p.Z], () => {
            let e = p.Z.getGuild(y);
            if (null == e) return !1;
            let r = m.Z.can(E.Plq.MANAGE_GUILD, e),
                i = null == n.bot || m.Z.canManageUser(E.Plq.MANAGE_GUILD, n.bot.id, e);
            return r && i;
        });
    return null != n && null != y && i && C
        ? (0, a.jsx)(_.ZP, {
              title: v.intl.string(v.t['WV/CsL']),
              description: v.intl.string(v.t['FlcC+/']),
              buttonText: T ? v.intl.string(v.t.aCJlq6) : v.intl.string(v.t['6I1F3t']),
              buttonDisabled: !T,
              buttonColor: T ? l.Button.Colors.RED : l.Button.Colors.WHITE,
              buttonLook: T ? l.Button.Looks.FILLED : l.Button.Looks.LINK,
              onButtonPress: N
          })
        : null;
};
n.Z = I;
