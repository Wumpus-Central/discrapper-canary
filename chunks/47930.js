r.d(t, { x: () => c });
var n = r(200651);
r(192379);
var i = r(385499),
    a = r(245315),
    l = r(368859),
    o = r(456536);
function c(e) {
    let t,
        { message: r, channel: c, user: s, compact: u, isRepliedMessage: m, hideIcon: p = !1, children: d } = e;
    return ((null == r ? void 0 : r.isSystemDM()) ? (t = i.Z.Types.SYSTEM_DM) : null != r && (0, l.Z)(r) ? (t = (0, a.cp)(r) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER) : (null == s ? void 0 : s.bot) ? (t = i.Z.Types.BOT) : null != c && c.isForumPost() && c.ownerId === (null == s ? void 0 : s.id) && !m && (t = i.Z.Types.ORIGINAL_POSTER), null == t)
        ? null
        : (0, n.jsx)(i.Z, {
              className: u ? o.botTagCompact : o.botTagCozy,
              type: t,
              verified: null == s ? void 0 : s.isVerifiedBot(),
              hideIcon: p,
              useRemSizes: !0,
              children: d
          });
}
