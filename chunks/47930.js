n.d(t, {
    b: () => l,
    x: () => c,
});
var r = n(54381);
n(473749);
var i = n(385499),
    a = n(245315),
    o = n(368859),
    s = n(724913);
function l(e) {
    let t,
        { message: n, channel: r, user: s, isRepliedMessage: l } = e;
    return (
        (null == n ? void 0 : n.isSystemDM())
            ? (t = i.Z.Types.SYSTEM_DM)
            : null != n && (0, o.Z)(n)
              ? (t = (0, a.cp)(n) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER)
              : (null == s ? void 0 : s.bot)
                ? (t = i.Z.Types.BOT)
                : null != r &&
                  r.isForumPost() &&
                  r.ownerId === (null == s ? void 0 : s.id) &&
                  !l &&
                  (t = i.Z.Types.ORIGINAL_POSTER),
        t
    );
}
function c(e) {
    let { message: t, channel: n, user: a, compact: o, isRepliedMessage: c, hideIcon: u = !1, children: d } = e,
        f = l({
            message: t,
            channel: n,
            user: a,
            compact: o,
            isRepliedMessage: c,
            hideIcon: u,
            children: d,
        });
    return null == f
        ? null
        : (0, r.jsx)(i.Z, {
              className: o ? s.botTagCompact : s.botTagCozy,
              type: f,
              verified: null == a ? void 0 : a.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: d,
          });
}
