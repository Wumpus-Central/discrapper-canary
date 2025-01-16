n.d(t, {
    l: function () {
        return i;
    }
});
var s = n(442837),
    a = n(291175),
    r = n(621853);
function i(e) {
    return (0, s.e7)([r.Z], () => {
        var t;
        let n;
        let s = null != e ? r.Z.getUserProfile(e) : null,
            i = null == s ? void 0 : s.premiumSince;
        return null == s || null == i
            ? null
            : (null == s ||
                  null === (t = s.badges) ||
                  void 0 === t ||
                  t.forEach((e) => {
                      let t = (0, a.gn)(e.id);
                      null != t && (n = t);
                  }),
              n);
    });
}
