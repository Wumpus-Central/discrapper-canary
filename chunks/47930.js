n.d(t, {
    b: () => o,
    x: () => c
});
var r = n(255367);
n(73800);
var i = n(385499),
    l = n(245315),
    s = n(368859),
    a = n(848697);
function o(e) {
    let t,
        { message: n, channel: r, user: a, isRepliedMessage: o } = e;
    return ((null == n ? void 0 : n.isSystemDM()) ? (t = i.Z.Types.SYSTEM_DM) : null != n && (0, s.Z)(n) ? (t = (0, l.cp)(n) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER) : (null == a ? void 0 : a.bot) ? (t = i.Z.Types.BOT) : null != r && r.isForumPost() && r.ownerId === (null == a ? void 0 : a.id) && !o && (t = i.Z.Types.ORIGINAL_POSTER), t);
}
function c(e) {
    let { message: t, channel: n, user: l, compact: s, isRepliedMessage: c, hideIcon: u = !1, children: d } = e,
        h = o({
            message: t,
            channel: n,
            user: l,
            compact: s,
            isRepliedMessage: c,
            hideIcon: u,
            children: d
        });
    return null == h
        ? null
        : (0, r.jsx)(i.Z, {
              className: s ? a.botTagCompact : a.botTagCozy,
              type: h,
              verified: null == l ? void 0 : l.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: d
          });
}
