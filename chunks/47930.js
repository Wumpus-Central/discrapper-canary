n.d(t, {
    b: () => c,
    x: () => s
});
var r = n(200651);
n(192379);
var o = n(385499),
    l = n(245315),
    i = n(368859),
    a = n(848697);
function c(e) {
    let t,
        { message: n, channel: r, user: a, isRepliedMessage: c } = e;
    return (null == n ? void 0 : n.isSystemDM()) ? (t = o.Z.Types.SYSTEM_DM) : null != n && (0, i.Z)(n) ? (t = (0, l.cp)(n) ? o.Z.Types.OFFICIAL : o.Z.Types.SERVER) : (null == a ? void 0 : a.bot) ? (t = o.Z.Types.BOT) : null != r && r.isForumPost() && r.ownerId === (null == a ? void 0 : a.id) && !c && (t = o.Z.Types.ORIGINAL_POSTER), t;
}
function s(e) {
    let { message: t, channel: n, user: l, compact: i, isRepliedMessage: s, hideIcon: u = !1, children: m } = e,
        p = c({
            message: t,
            channel: n,
            user: l,
            compact: i,
            isRepliedMessage: s,
            hideIcon: u,
            children: m
        });
    return null == p
        ? null
        : (0, r.jsx)(o.Z, {
              className: i ? a.botTagCompact : a.botTagCozy,
              type: p,
              verified: null == l ? void 0 : l.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: m
          });
}
