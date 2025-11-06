n.d(t, { m: () => c });
var r = n(442837),
    i = n(524437),
    a = n(594174),
    o = n(312870),
    s = n(695346),
    l = n(973005);
function c() {
    var e;
    let t = s.Xr.useSetting(),
        n = s.UP.useSetting(),
        c = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        u = (0, o.s)("use_derived_dm_spam_filter_setting");
    return t !== i.Xr.DEFAULT_UNSET
        ? t
        : (null == c ? void 0 : c.nsfwAllowed) === !1 && u
          ? i.Xr.FRIENDS_AND_NON_FRIENDS
          : null != (e = l.O7.get(n))
            ? e
            : i.Xr.NON_FRIENDS;
}
