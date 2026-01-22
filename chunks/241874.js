n.d(t, { A: () => h });
var r = n(627968),
    l = n(64700),
    i = n(143413),
    a = n(860227),
    s = n(643204),
    o = n(449859),
    c = n(535421),
    u = n(112758),
    d = n(652215);
let f = l.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: i = !1,
                groupId: a,
                isGroupStart: o,
                usernameProfile: f,
                avatarProfile: p,
                setPopout: h,
                author: b,
                repliedMessage: g,
                roleIcon: m,
            } = e,
            A = (0, u.r4)(t.author.id, n.id),
            y = (0, u.m)(t, n, f, h),
            O = (0, u.Jo)(p, h),
            j = l.useCallback(() => {
                h({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1,
                });
            }, [h]);
        return (0, r.jsx)(s.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: g,
            author: b,
            compact: i,
            subscribeToGroupId: a,
            showTimestampOnHover: !o && i && t.type !== d.lAJ.REPLY,
            renderPopout: c.A,
            showAvatarPopout: p,
            showUsernamePopout: f,
            onClickAvatar: O,
            onClickUsername: y,
            onContextMenu: A,
            onPopoutRequestClose: j,
            roleIcon: m,
        });
    }),
    p = l.memo(o.A);
function h(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: l,
            replyReference: s,
            author: o,
            repliedMessage: c,
            roleIcon: u,
        } = e,
        { message: d, compact: h, channel: b, groupId: g } = t,
        { usernameProfile: m, avatarProfile: A } = l;
    if ((0, i.A)(d)) return null;
    let y = d.id === g;
    return y || h || null != s
        ? (0, r.jsx)(f, {
              message: d,
              channel: b,
              compact: h,
              subscribeToGroupId: g,
              isGroupStart: y,
              groupId: g,
              setPopout: n,
              usernameProfile: m,
              avatarProfile: A,
              author: o,
              repliedMessage: c,
              roleIcon: u,
          })
        : (0, r.jsx)(p, {
              compact: !0,
              timestamp: d.timestamp,
              isInline: !1,
              id: (0, a.xl)(d),
              isVisibleOnlyOnHover: !0,
              cozyAlt: !0,
          });
}
