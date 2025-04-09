r.d(t, {
    b: () => c,
    x: () => s
});
var n = r(200651);
r(192379);
var i = r(385499),
    l = r(245315),
    a = r(368859),
    o = r(848697);
function c(e) {
    let t,
        { message: r, channel: n, user: o, isRepliedMessage: c } = e;
    return (null == r ? void 0 : r.isSystemDM()) ? (t = i.Z.Types.SYSTEM_DM) : null != r && (0, a.Z)(r) ? (t = (0, l.cp)(r) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER) : (null == o ? void 0 : o.bot) ? (t = i.Z.Types.BOT) : null != n && n.isForumPost() && n.ownerId === (null == o ? void 0 : o.id) && !c && (t = i.Z.Types.ORIGINAL_POSTER), t;
}
function s(e) {
    let { message: t, channel: r, user: l, compact: a, isRepliedMessage: s, hideIcon: u = !1, children: m } = e,
        p = c({
            message: t,
            channel: r,
            user: l,
            compact: a,
            isRepliedMessage: s,
            hideIcon: u,
            children: m
        });
    return null == p
        ? null
        : (0, n.jsx)(i.Z, {
              className: a ? o.botTagCompact : o.botTagCozy,
              type: p,
              verified: null == l ? void 0 : l.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: m
          });
}
