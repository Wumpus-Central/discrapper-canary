i.d(t, {
    Z: () => I,
    a: () => j
});
var n,
    a = i(200651),
    l = i(192379),
    r = i(120356),
    s = i.n(r),
    o = i(873546),
    c = i(442837),
    u = i(481060),
    m = i(607070),
    d = i(100527),
    p = i(906732),
    x = i(385499),
    h = i(979264),
    g = i(372900),
    f = i(477734),
    N = i(184301),
    S = i(768581),
    T = i(463396),
    v = i(981631),
    R = i(507304),
    j = (((n = {})[(n.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (n[(n.BADGES = 1)] = 'BADGES'), n);
function A(e) {
    let { compact: t } = e;
    return (0, a.jsx)(x.Z, {
        className: t ? R.botTagCompact : R.botTagCozy,
        type: x.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function I(e) {
    var t;
    let i,
        { author: n, message: r, channel: x, userOverride: j, compact: I = !1, withMentionPrefix: y = !1, showPopout: C = !1, className: Z, onClick: F, onContextMenu: E, onPopoutRequestClose: b, renderPopout: L, renderRemixTag: _ = !1, decorations: M } = e,
        k = l.useContext(g.Z),
        P = null !== (t = null == x ? void 0 : x.guild_id) && void 0 !== t ? t : k,
        { analyticsLocations: G } = (0, p.ZP)(d.Z.USERNAME),
        { nick: O, colorString: w, colorRoleName: B } = n,
        z = null != r.messageReference && null != r.webhookId && r.hasFlag(v.iLy.IS_CROSSPOST),
        D = (0, c.e7)([m.Z], () => m.Z.roleStyle),
        U = (0, f.X$)(),
        V = l.useMemo(
            () => ({
                source: v.jXE.CHANNEL,
                messageId: r.id,
                tagUserId: r.author.id
            }),
            [r.id, r.author.id]
        ),
        H = {
            className: R.username,
            style: 'username' === D && null != w ? { color: w } : void 0,
            onClick: F,
            onContextMenu: E,
            children: (0, a.jsx)(a.Fragment, { children: (y ? '@' : '') + O })
        },
        X = l.useMemo(
            () =>
                I
                    ? (0, a.jsx)(h.ZP, {
                          primaryGuild: n.primaryGuild,
                          userId: r.author.id,
                          contextGuildId: P,
                          className: R.clanTagChiplet,
                          profileViewedAnalytics: V
                      })
                    : null,
            [I, V, n.primaryGuild, P, r.author.id]
        );
    i =
        null != L && null != C
            ? (0, a.jsx)(u.yRy, {
                  preload: z
                      ? void 0
                      : function () {
                            let e = null != j ? j : r.author;
                            return (0, N.Z)(
                                e.id,
                                null != n.guildMemberAvatar && null != P
                                    ? (0, S.JM)({
                                          guildId: P,
                                          userId: e.id,
                                          avatar: n.guildMemberAvatar,
                                          size: 80
                                      })
                                    : e.getAvatarURL(P, 80),
                                {
                                    guildId: P,
                                    channelId: r.channel_id
                                }
                            );
                        },
                  renderPopout: L,
                  shouldShow: C,
                  position: o.tq ? 'window_center' : 'right',
                  onRequestClose: b,
                  children: (e) => {
                      let { onClick: t, ...i } = e;
                      return (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(u.P3F, {
                                  tag: 'span',
                                  ...i,
                                  ...H,
                                  className: s()(H.className, R.clickable, Z)
                              }),
                              X
                          ]
                      });
                  }
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(u.P3F, {
                          ...H,
                          className: s()(H.className, Z)
                      }),
                      X
                  ]
              });
    let J = null != M ? M[0] : null,
        Y = null != M ? M[1] : null;
    return (0, a.jsxs)(p.Gt, {
        value: G,
        children: [
            null != J && I
                ? (0, a.jsxs)(a.Fragment, {
                      children: [' ', J, ' ']
                  })
                : null,
            'dot' === D
                ? (0, a.jsx)(u.FhE, {
                      color: w,
                      name: B,
                      className: R.roleDot
                  })
                : null,
            i,
            !I &&
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(h.ZP, {
                        primaryGuild: n.primaryGuild,
                        userId: r.author.id,
                        contextGuildId: P,
                        className: R.clanTagChiplet,
                        profileViewedAnalytics: V
                    })
                }),
            null != Y ? (0, a.jsx)(a.Fragment, { children: Y }) : null,
            null == J || I ? null : J,
            null != r && (0, T.f)(r) && U && _ ? (0, a.jsx)(A, {}) : null
        ]
    });
}
