r.d(n, {
    x: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(385499),
    s = r(245315),
    o = r(368859),
    l = r(507304);
function u(e) {
    let n,
        { message: r, channel: u, user: c, compact: d, isRepliedMessage: f, hideIcon: _ = !1, children: h } = e;
    return ((null == r ? void 0 : r.isSystemDM()) ? (n = a.Z.Types.SYSTEM_DM) : null != r && (0, o.Z)(r) ? (n = (0, s.cp)(r) ? a.Z.Types.OFFICIAL : a.Z.Types.SERVER) : (null == c ? void 0 : c.bot) ? (n = a.Z.Types.BOT) : null != u && u.isForumPost() && u.ownerId === (null == c ? void 0 : c.id) && !f && (n = a.Z.Types.ORIGINAL_POSTER), null == n)
        ? null
        : (0, i.jsx)(a.Z, {
              className: d ? l.botTagCompact : l.botTagCozy,
              type: n,
              verified: null == c ? void 0 : c.isVerifiedBot(),
              hideIcon: _,
              useRemSizes: !0,
              children: h
          });
}
