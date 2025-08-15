n.d(t, {
    b: () => o,
    x: () => c,
});
var r = n(255367);
n(73800);
var i = n(385499),
    l = n(245315),
    a = n(368859),
    s = n(724913);
function o(e) {
    let t,
        { message: n, channel: r, user: s, isRepliedMessage: o } = e;
    return (
        (null == n ? void 0 : n.isSystemDM())
            ? (t = i.Z.Types.SYSTEM_DM)
            : null != n && (0, a.Z)(n)
              ? (t = (0, l.cp)(n) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER)
              : (null == s ? void 0 : s.bot)
                ? (t = i.Z.Types.BOT)
                : null != r &&
                  r.isForumPost() &&
                  r.ownerId === (null == s ? void 0 : s.id) &&
                  !o &&
                  (t = i.Z.Types.ORIGINAL_POSTER),
        t
    );
}
function c(e) {
    let { message: t, channel: n, user: l, compact: a, isRepliedMessage: c, hideIcon: u = !1, children: d } = e,
        h = o({
            message: t,
            channel: n,
            user: l,
            compact: a,
            isRepliedMessage: c,
            hideIcon: u,
            children: d,
        });
    return null == h
        ? null
        : (0, r.jsx)(i.Z, {
              className: a ? s.botTagCompact : s.botTagCozy,
              type: h,
              verified: null == l ? void 0 : l.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: d,
          });
}
