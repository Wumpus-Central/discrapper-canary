r.d(n, {
    l: function () {
        return o;
    }
});
var i = r(442837),
    a = r(291175),
    s = r(621853);
function o(e) {
    return (0, i.e7)([s.Z], () => {
        var n;
        let r;
        let i = null != e ? s.Z.getUserProfile(e) : null,
            o = null == i ? void 0 : i.premiumSince;
        return null == i || null == o
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
