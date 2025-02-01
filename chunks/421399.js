n.d(t, {
    Z: () => S,
    a: () => T
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(873546),
    l = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(100527),
    f = n(906732),
    _ = n(385499),
    p = n(979264),
    h = n(372900),
    m = n(477734),
    g = n(184301),
    E = n(768581),
    v = n(463396),
    y = n(981631),
    I = n(507304),
    T = (function (e) {
        return (e[(e.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (e[(e.BADGES = 1)] = 'BADGES'), e;
    })({});
function b(e) {
    let { compact: t } = e;
    return (0, i.jsx)(_.Z, {
        className: t ? I.botTagCompact : I.botTagCozy,
        type: _.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function S(e) {
    var t;
    let n,
        { author: a, message: _, channel: T, userOverride: S, compact: A = !1, withMentionPrefix: N = !1, showPopout: C = !1, className: R, onClick: O, onContextMenu: D, onPopoutRequestClose: x, renderPopout: L, renderRemixTag: P = !1, decorations: w } = e,
        M = r.useContext(h.Z),
        k = null !== (t = null == T ? void 0 : T.guild_id) && void 0 !== t ? t : M,
        { analyticsLocations: U } = (0, f.ZP)(d.Z.USERNAME),
        G = N ? '@' : '',
        { nick: B, colorString: Z, colorRoleName: F } = a,
        V = null != _.messageReference && null != _.webhookId && _.hasFlag(y.iLy.IS_CROSSPOST),
        j = (0, l.e7)([c.Z], () => c.Z.roleStyle),
        H = 'username' === j,
        Y = 'dot' === j,
        W = (0, m.X$)(),
        K = r.useMemo(
            () => ({
                source: y.jXE.CHANNEL,
                messageId: _.id,
                tagUserId: _.author.id
            }),
            [_.id, _.author.id]
        ),
        z = {
            className: I.username,
            style: H && null != Z ? { color: Z } : void 0,
            onClick: O,
            onContextMenu: D,
            children: (0, i.jsx)(i.Fragment, { children: G + B })
        };
    function q() {
        let e = null != S ? S : _.author;
        return (0, g.Z)(
            e.id,
            null != a.guildMemberAvatar && null != k
                ? (0, E.JM)({
                      guildId: k,
                      userId: e.id,
                      avatar: a.guildMemberAvatar,
                      size: 80
                  })
                : e.getAvatarURL(k, 80),
            {
                guildId: k,
                channelId: _.channel_id
            }
        );
    }
    let Q = r.useMemo(
        () =>
            A
                ? (0, i.jsx)(p.ZP, {
                      primaryGuild: a.primaryGuild,
                      userId: _.author.id,
                      contextGuildId: k,
                      className: I.clanTagChiplet,
                      profileViewedAnalytics: K
                  })
                : null,
        [A, K, a.primaryGuild, k, _.author.id]
    );
    n =
        null != L && null != C
            ? (0, i.jsx)(u.yRy, {
                  preload: V ? void 0 : q,
                  renderPopout: L,
                  shouldShow: C,
                  position: o.tq ? 'window_center' : 'right',
                  onRequestClose: x,
                  children: (e) => {
                      let { onClick: t, ...n } = e;
                      return (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.P3F, {
                                  tag: 'span',
                                  ...n,
                                  ...z,
                                  className: s()(z.className, I.clickable, R)
                              }),
                              Q
                          ]
                      });
                  }
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(u.P3F, {
                          ...z,
                          className: s()(z.className, R)
                      }),
                      Q
                  ]
              });
    let X = null != w ? w[0] : null,
        J = null != w ? w[1] : null;
    return (0, i.jsxs)(f.Gt, {
        value: U,
        children: [
            null != X && A
                ? (0, i.jsxs)(i.Fragment, {
                      children: [' ', X, ' ']
                  })
                : null,
            Y
                ? (0, i.jsx)(u.FhE, {
                      color: Z,
                      name: F,
                      className: I.roleDot
                  })
                : null,
            n,
            !A &&
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(p.ZP, {
                        primaryGuild: a.primaryGuild,
                        userId: _.author.id,
                        contextGuildId: k,
                        className: I.clanTagChiplet,
                        profileViewedAnalytics: K
                    })
                }),
            null != J ? (0, i.jsx)(i.Fragment, { children: J }) : null,
            null == X || A ? null : X,
            null != _ && (0, v.f)(_) && W && P ? (0, i.jsx)(b, {}) : null
        ]
    });
}
