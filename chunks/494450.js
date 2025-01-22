r.d(n, {
    l: function () {
        return s;
    }
});
var i = r(442837),
    a = r(291175),
    o = r(621853);
function s(e) {
    return (0, i.e7)([o.Z], () => {
        var n;
        let r;
        let i = null != e ? o.Z.getUserProfile(e) : null,
            s = null == i ? void 0 : i.premiumSince;
        return null == i || null == s
            ? null
            : (null == i ||
                  null === (n = i.badges) ||
                  void 0 === n ||
                  n.forEach((e) => {
                      let n = (0, a.gn)(e.id);
                      null != n && (r = n);
                  }),
              r);
    });
}
