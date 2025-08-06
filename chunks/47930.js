n.d(t, {
    b: () => l,
    x: () => c,
});
var r = n(255367);
n(73800);
var i = n(385499),
    o = n(245315),
    a = n(368859),
    s = n(848697);
function l(e) {
    let t,
        { message: n, channel: r, user: s, isRepliedMessage: l } = e;
    return (
        (null == n ? void 0 : n.isSystemDM())
            ? (t = i.Z.Types.SYSTEM_DM)
            : null != n && (0, a.Z)(n)
              ? (t = (0, o.cp)(n) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER)
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
    let { message: t, channel: n, user: o, compact: a, isRepliedMessage: c, hideIcon: u = !1, children: d } = e,
        f = l({
            message: t,
            channel: n,
            user: o,
            compact: a,
            isRepliedMessage: c,
            hideIcon: u,
            children: d,
        });
    return null == f
        ? null
        : (0, r.jsx)(i.Z, {
              className: a ? s.botTagCompact : s.botTagCozy,
              type: f,
              verified: null == o ? void 0 : o.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: d,
          });
}
