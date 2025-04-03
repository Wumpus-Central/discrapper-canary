n.d(t, {
    b: () => s,
    x: () => c
});
var r = n(200651);
n(192379);
var l = n(385499),
    o = n(245315),
    i = n(368859),
    a = n(848697);
function s(e) {
    let t,
        { message: n, channel: r, user: a, isRepliedMessage: s } = e;
    return (null == n ? void 0 : n.isSystemDM()) ? (t = l.Z.Types.SYSTEM_DM) : null != n && (0, i.Z)(n) ? (t = (0, o.cp)(n) ? l.Z.Types.OFFICIAL : l.Z.Types.SERVER) : (null == a ? void 0 : a.bot) ? (t = l.Z.Types.BOT) : null != r && r.isForumPost() && r.ownerId === (null == a ? void 0 : a.id) && !s && (t = l.Z.Types.ORIGINAL_POSTER), t;
}
function c(e) {
    let { message: t, channel: n, user: o, compact: i, isRepliedMessage: c, hideIcon: u = !1, children: d } = e,
        m = s({
            message: t,
            channel: n,
            user: o,
            compact: i,
            isRepliedMessage: c,
            hideIcon: u,
            children: d
        });
    return null == m
        ? null
        : (0, r.jsx)(l.Z, {
              className: i ? a.botTagCompact : a.botTagCozy,
              type: m,
              verified: null == o ? void 0 : o.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: d
          });
}
