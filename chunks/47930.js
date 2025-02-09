i.d(t, { x: () => o });
var n = i(200651);
i(192379);
var a = i(385499),
    l = i(245315),
    r = i(368859),
    s = i(562797);
function o(e) {
    let t,
        { message: i, channel: o, user: c, compact: u, isRepliedMessage: m, hideIcon: d = !1, children: p } = e;
    return ((null == i ? void 0 : i.isSystemDM()) ? (t = a.Z.Types.SYSTEM_DM) : null != i && (0, r.Z)(i) ? (t = (0, l.cp)(i) ? a.Z.Types.OFFICIAL : a.Z.Types.SERVER) : (null == c ? void 0 : c.bot) ? (t = a.Z.Types.BOT) : null != o && o.isForumPost() && o.ownerId === (null == c ? void 0 : c.id) && !m && (t = a.Z.Types.ORIGINAL_POSTER), null == t)
        ? null
        : (0, n.jsx)(a.Z, {
              className: u ? s.botTagCompact : s.botTagCozy,
              type: t,
              verified: null == c ? void 0 : c.isVerifiedBot(),
              hideIcon: d,
              useRemSizes: !0,
              children: p
          });
}
