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
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(873546),
    c = r(442837),
    d = r(481060),
    f = r(607070),
    _ = r(100527),
    h = r(906732),
    p = r(385499),
    m = r(979264),
    g = r(372900),
    E = r(477734),
    v = r(184301),
    I = r(768581),
    T = r(463396),
    b = r(981631),
    y = r(507304);
function S(e) {
    let { compact: n } = e;
    return (0, a.jsx)(p.Z, {
        className: n ? y.botTagCompact : y.botTagCozy,
        type: p.Z.Types.REMIX,
        useRemSizes: !0
    });
}
function A(e) {
    var n;
    let r,
        { author: i, message: o, channel: p, userOverride: A, compact: N = !1, withMentionPrefix: C = !1, showPopout: R = !1, className: O, onClick: D, onContextMenu: L, onPopoutRequestClose: x, renderPopout: w, renderRemixTag: P = !1, decorations: M } = e,
        k = s.useContext(g.Z),
        U = null !== (n = null == p ? void 0 : p.guild_id) && void 0 !== n ? n : k,
        { analyticsLocations: B } = (0, h.ZP)(_.Z.USERNAME),
        G = C ? '@' : '',
        { nick: Z, colorString: F, colorRoleName: V } = i,
        j = null != o.messageReference && null != o.webhookId && o.hasFlag(b.iLy.IS_CROSSPOST),
        H = (0, c.e7)([f.Z], () => f.Z.roleStyle),
        Y = 'username' === H,
        W = 'dot' === H,
        K = (0, E.X$)(),
        z = s.useMemo(
            () => ({
                source: b.jXE.CHANNEL,
                messageId: o.id,
                tagUserId: o.author.id
            }),
            [o.id, o.author.id]
        ),
        q = {
            className: y.username,
            style: Y && null != F ? { color: F } : void 0,
            onClick: D,
            onContextMenu: L,
            children: (0, a.jsx)(a.Fragment, { children: G + Z })
        };
    function Q() {
        let e = null != A ? A : o.author;
        return (0, v.Z)(
            e.id,
            null != i.guildMemberAvatar && null != U
                ? (0, I.JM)({
                      guildId: U,
                      userId: e.id,
                      avatar: i.guildMemberAvatar,
                      size: 80
                  })
                : e.getAvatarURL(U, 80),
            {
                guildId: U,
                channelId: o.channel_id
            }
        );
    }
    let X = s.useMemo(
        () =>
            N
                ? (0, a.jsx)(m.ZP, {
                      primaryGuild: i.primaryGuild,
                      userId: o.author.id,
                      contextGuildId: U,
                      className: y.clanTagChiplet,
                      profileViewedAnalytics: z
                  })
                : null,
        [N, z, i.primaryGuild, U, o.author.id]
    );
    r =
        null != w && null != R
            ? (0, a.jsx)(d.Popout, {
                  preload: j ? void 0 : Q,
                  renderPopout: w,
                  shouldShow: R,
                  position: u.tq ? 'window_center' : 'right',
                  onRequestClose: x,
                  children: (e) => {
                      let { onClick: n, ...r } = e;
                      return (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(d.Clickable, {
                                  tag: 'span',
                                  ...r,
                                  ...q,
                                  className: l()(q.className, y.clickable, O)
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
            null != J && N
                ? (0, a.jsxs)(a.Fragment, {
                      children: [' ', J, ' ']
                  })
                : null,
            W
                ? (0, a.jsx)(d.RoleDot, {
                      color: F,
                      name: V,
                      className: y.roleDot
                  })
                : null,
            r,
            !N &&
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(m.ZP, {
                        primaryGuild: i.primaryGuild,
                        userId: o.author.id,
                        contextGuildId: U,
                        className: y.clanTagChiplet,
                        profileViewedAnalytics: z
                    })
                }),
            null != $ ? (0, a.jsx)(a.Fragment, { children: $ }) : null,
            null == J || N ? null : J,
            null != o && (0, T.f)(o) && K && P ? (0, a.jsx)(S, {}) : null
        ]
    });
}
!(function (e) {
    (e[(e.SYSTEM_TAG = 0)] = 'SYSTEM_TAG'), (e[(e.BADGES = 1)] = 'BADGES');
})(i || (i = {}));
