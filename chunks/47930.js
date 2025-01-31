n.d(t, { x: () => l });
var i = n(200651);
n(192379);
var r = n(385499),
    a = n(245315),
    s = n(368859),
    o = n(507304);
function l(e) {
    let t,
        { message: n, channel: l, user: u, compact: c, isRepliedMessage: d, hideIcon: f = !1, children: _ } = e;
    return ((null == n ? void 0 : n.isSystemDM()) ? (t = r.Z.Types.SYSTEM_DM) : null != n && (0, s.Z)(n) ? (t = (0, a.cp)(n) ? r.Z.Types.OFFICIAL : r.Z.Types.SERVER) : (null == u ? void 0 : u.bot) ? (t = r.Z.Types.BOT) : null != l && l.isForumPost() && l.ownerId === (null == u ? void 0 : u.id) && !d && (t = r.Z.Types.ORIGINAL_POSTER), null == t)
        ? null
        : (0, i.jsx)(r.Z, {
              className: c ? o.botTagCompact : o.botTagCozy,
              type: t,
              verified: null == u ? void 0 : u.isVerifiedBot(),
              hideIcon: f,
              useRemSizes: !0,
              children: _
          });
}
