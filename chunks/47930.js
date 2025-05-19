n.d(t, {
    b: () => s,
    x: () => c
});
var r = n(255367);
n(73800);
var i = n(385499),
    l = n(245315),
    a = n(368859),
    o = n(161441);
function s(e) {
    let t,
        { message: n, channel: r, user: o, isRepliedMessage: s } = e;
    return (null == n ? void 0 : n.isSystemDM()) ? (t = i.Z.Types.SYSTEM_DM) : null != n && (0, a.Z)(n) ? (t = (0, l.cp)(n) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER) : (null == o ? void 0 : o.bot) ? (t = i.Z.Types.BOT) : null != r && r.isForumPost() && r.ownerId === (null == o ? void 0 : o.id) && !s && (t = i.Z.Types.ORIGINAL_POSTER), t;
}
function c(e) {
    let { message: t, channel: n, user: l, compact: a, isRepliedMessage: c, hideIcon: u = !1, children: d } = e,
        g = s({
            message: t,
            channel: n,
            user: l,
            compact: a,
            isRepliedMessage: c,
            hideIcon: u,
            children: d
        });
    return null == g
        ? null
        : (0, r.jsx)(i.Z, {
              className: a ? o.botTagCompact : o.botTagCozy,
              type: g,
              verified: null == l ? void 0 : l.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: d
          });
}
