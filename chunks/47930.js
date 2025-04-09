r.d(t, {
    b: () => c,
    x: () => s
});
var n = r(200651);
r(192379);
var l = r(385499),
    i = r(245315),
    a = r(368859),
    o = r(848697);
function c(e) {
    let t,
        { message: r, channel: n, user: o, isRepliedMessage: c } = e;
    return (null == r ? void 0 : r.isSystemDM()) ? (t = l.Z.Types.SYSTEM_DM) : null != r && (0, a.Z)(r) ? (t = (0, i.cp)(r) ? l.Z.Types.OFFICIAL : l.Z.Types.SERVER) : (null == o ? void 0 : o.bot) ? (t = l.Z.Types.BOT) : null != n && n.isForumPost() && n.ownerId === (null == o ? void 0 : o.id) && !c && (t = l.Z.Types.ORIGINAL_POSTER), t;
}
function s(e) {
    let { message: t, channel: r, user: i, compact: a, isRepliedMessage: s, hideIcon: u = !1, children: m } = e,
        p = c({
            message: t,
            channel: r,
            user: i,
            compact: a,
            isRepliedMessage: s,
            hideIcon: u,
            children: m
        });
    return null == p
        ? null
        : (0, n.jsx)(l.Z, {
              className: a ? o.botTagCompact : o.botTagCozy,
              type: p,
              verified: null == i ? void 0 : i.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: m
          });
}
