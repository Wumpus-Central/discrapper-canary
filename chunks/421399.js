r.d(n, {
    Z: function () {
        return A;
    },
    a: function () {
        return i;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(873546),
    c = r(442837),
    d = r(481060),
    f = r(607070),
    p = r(100527),
    h = r(906732),
    _ = r(385499),
    m = r(979264),
    g = r(372900),
    E = r(477734),
    v = r(184301),
    y = r(768581),
    b = r(463396),
    I = r(981631),
    T = r(507304);
function S(e) {
    let { compact: n } = e;
    return (0, a.jsx)(_.Z, {
        className: n ? T.botTagCompact : T.botTagCozy,
        type: _.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function A(e) {
    var n;
    let r,
        { author: i, message: s, channel: _, userOverride: A, compact: C = !1, withMentionPrefix: N = !1, showPopout: R = !1, className: O, onClick: D, onContextMenu: x, onPopoutRequestClose: L, renderPopout: w, renderRemixTag: P = !1, decorations: M } = e,
        k = o.useContext(g.Z),
        U = null !== (n = null == _ ? void 0 : _.guild_id) && void 0 !== n ? n : k,
        { analyticsLocations: B } = (0, h.ZP)(p.Z.USERNAME),
        G = N ? '@' : '',
        { nick: Z, colorString: F, colorRoleName: V } = i,
        j = null != s.messageReference && null != s.webhookId && s.hasFlag(I.iLy.IS_CROSSPOST),
        H = (0, c.e7)([f.Z], () => f.Z.roleStyle),
        Y = 'username' === H,
        W = 'dot' === H,
        K = (0, E.X$)(),
        z = o.useMemo(
            () => ({
                source: I.jXE.CHANNEL,
                messageId: s.id,
                tagUserId: s.author.id
            }),
            [s.id, s.author.id]
        ),
        q = {
            className: T.username,
            style: Y && null != F ? { color: F } : void 0,
            onClick: D,
            onContextMenu: x,
            children: (0, a.jsx)(a.Fragment, { children: G + Z })
        };
    function Q() {
        let e = null != A ? A : s.author;
        return (0, v.Z)(
            e.id,
            null != i.guildMemberAvatar && null != U
                ? (0, y.JM)({
                      guildId: U,
                      userId: e.id,
                      avatar: i.guildMemberAvatar,
                      size: 80
                  })
                : e.getAvatarURL(U, 80),
            {
                guildId: U,
                channelId: s.channel_id
            }
        );
    }
    let X = o.useMemo(
        () =>
            C
                ? (0, a.jsx)(m.ZP, {
                      primaryGuild: i.primaryGuild,
                      userId: s.author.id,
                      contextGuildId: U,
                      className: T.clanTagChiplet,
                      profileViewedAnalytics: z
                  })
                : null,
        [C, z, i.primaryGuild, U, s.author.id]
    );
    r =
        null != w && null != R
            ? (0, a.jsx)(d.Popout, {
                  preload: j ? void 0 : Q,
                  renderPopout: w,
                  shouldShow: R,
                  position: u.tq ? 'window_center' : 'right',
                  onRequestClose: L,
                  children: (e) => {
                      let { onClick: n, ...r } = e;
                      return (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(d.Clickable, {
                                  tag: 'span',
                                  ...r,
                                  ...q,
                                  className: l()(q.className, T.clickable, O)
                              }),
                              X
                          ]
                      });
                  }
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(d.Clickable, {
                          ...q,
                          className: l()(q.className, O)
                      }),
                      X
                  ]
              });
    let J = null != M ? M[0] : null,
        $ = null != M ? M[1] : null;
    return (0, a.jsxs)(h.Gt, {
        value: B,
        children: [
            null != J && C
                ? (0, a.jsxs)(a.Fragment, {
                      children: [' ', J, ' ']
                  })
                : null,
            W
                ? (0, a.jsx)(d.RoleDot, {
                      color: F,
                      name: V,
                      className: T.roleDot
                  })
                : null,
            r,
            !C &&
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(m.ZP, {
                        primaryGuild: i.primaryGuild,
                        userId: s.author.id,
                        contextGuildId: U,
                        className: T.clanTagChiplet,
                        profileViewedAnalytics: z
                    })
                }),
            null != $ ? (0, a.jsx)(a.Fragment, { children: $ }) : null,
            null == J || C ? null : J,
            null != s && (0, b.f)(s) && K && P ? (0, a.jsx)(S, {}) : null
        ]
    });
}
!(function (e) {
    (e[(e.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (e[(e.BADGES = 1)] = 'BADGES');
})(i || (i = {}));
