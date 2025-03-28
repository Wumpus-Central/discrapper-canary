n.d(t, {
    b: () => c,
    x: () => s
});
var r = n(200651);
n(192379);
var o = n(385499),
    i = n(245315),
    l = n(368859),
    a = n(432957);
function c(e) {
    let t,
        { message: n, channel: r, user: a, isRepliedMessage: c } = e;
    return (null == n ? void 0 : n.isSystemDM()) ? (t = o.Z.Types.SYSTEM_DM) : null != n && (0, l.Z)(n) ? (t = (0, i.cp)(n) ? o.Z.Types.OFFICIAL : o.Z.Types.SERVER) : (null == a ? void 0 : a.bot) ? (t = o.Z.Types.BOT) : null != r && r.isForumPost() && r.ownerId === (null == a ? void 0 : a.id) && !c && (t = o.Z.Types.ORIGINAL_POSTER), t;
}
function s(e) {
    let { message: t, channel: n, user: i, compact: l, isRepliedMessage: s, hideIcon: u = !1, children: m } = e,
        p = c({
            message: t,
            channel: n,
            user: i,
            compact: l,
            isRepliedMessage: s,
            hideIcon: u,
            children: m
        });
    return null == p
        ? null
        : (0, r.jsx)(o.Z, {
              className: l ? a.botTagCompact : a.botTagCozy,
              type: p,
              verified: null == i ? void 0 : i.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: m
          });
}
