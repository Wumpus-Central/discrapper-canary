n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    a = n(143413),
    s = n(860227),
    r = n(643204),
    o = n(449859),
    c = n(535421),
    d = n(112758),
    u = n(652215);
let h = l.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: a = !1,
                groupId: s,
                isGroupStart: o,
                usernameProfile: h,
                avatarProfile: m,
                setPopout: A,
                author: g,
                repliedMessage: _,
                roleIcon: p,
            } = e,
            f = (0, d.r4)(t.author.id, n.id),
            E = (0, d.m)(t, n, h, A),
            C = (0, d.Jo)(m, A),
            x = l.useCallback(() => {
                A({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 });
            }, [A]);
        return (0, i.jsx)(r.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: _,
            author: g,
            compact: a,
            subscribeToGroupId: s,
            showTimestampOnHover: !o && a && t.type !== u.lAJ.REPLY,
            renderPopout: c.A,
            showAvatarPopout: m,
            showUsernamePopout: h,
            onClickAvatar: C,
            onClickUsername: E,
            onContextMenu: f,
            onPopoutRequestClose: x,
            roleIcon: p,
        });
    }),
    m = l.memo(o.A);
function A(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: l,
            replyReference: r,
            author: o,
            repliedMessage: c,
            roleIcon: d,
        } = e,
        { message: u, compact: A, channel: g, groupId: _ } = t,
        { usernameProfile: p, avatarProfile: f } = l;
    if ((0, a.A)(u)) return null;
    let E = u.id === _;
    return E || A || null != r
        ? (0, i.jsx)(h, {
              message: u,
              channel: g,
              compact: A,
              subscribeToGroupId: _,
              isGroupStart: E,
              groupId: _,
              setPopout: n,
              usernameProfile: p,
              avatarProfile: f,
              author: o,
              repliedMessage: c,
              roleIcon: d,
          })
        : (0, i.jsx)(m, {
              compact: !0,
              timestamp: u.timestamp,
              isInline: !1,
              id: (0, s.xl)(u),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
