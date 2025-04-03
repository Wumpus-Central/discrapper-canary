n.d(t, { Z: () => _ }), n(47120);
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
    f = n(944486),
    b = n(981631),
    h = n(388032);
let _ = (e) => {
    let { application: t, reportId: n } = e,
        [_, g] = l.useState(!1),
        [v, j] = l.useState(!1),
        N = (0, i.e7)([f.Z, m.Z], () => {
            var e;
            return null == (e = m.Z.getChannel(f.Z.getChannelId())) ? void 0 : e.guild_id;
        }),
        [y, O] = l.useState(null);
    l.useEffect(() => {
        null != y && (g(!0), j(!0));
    }, [y]),
        l.useEffect(() => {
            if (null == N) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, d.i)(N);
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
        }, [N, t.id]);
    let Z = l.useCallback(() => {
            j(!1),
                s.ZP.trackWithMetadata(b.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: N,
                    application_id: t.id,
                    report_id: n
                }),
                null != N &&
                    null != y &&
                    c.Z.disableIntegration(N, y.id).catch(() => {
                        o.Z.show({
                            title: h.NW.string(h.t.wYqMmJ),
                            body: h.NW.string(h.t.A4Mnsr)
                        });
                    });
        }, [t.id, N, y, n]),
        I = (0, i.e7)([p.Z, x.Z], () => {
            let e = x.Z.getGuild(N);
            if (null == e) return !1;
            let n = p.Z.can(b.Plq.MANAGE_GUILD, e),
                r = null == t.bot || p.Z.canManageUser(b.Plq.MANAGE_GUILD, t.bot.id, e);
            return n && r;
        });
    return null != t && null != N && _ && I
        ? (0, r.jsx)(u.ZP, {
              title: h.NW.string(h.t['WV/CsL']),
              description: h.NW.string(h.t['FlcC+/']),
              buttonText: v ? h.NW.string(h.t.aCJlq6) : h.NW.string(h.t['6I1F3t']),
              buttonDisabled: !v,
              buttonColor: v ? a.zxk.Colors.RED : a.zxk.Colors.WHITE,
              buttonLook: v ? a.zxk.Looks.FILLED : a.zxk.Looks.LINK,
              onButtonPress: Z
          })
        : null;
};
