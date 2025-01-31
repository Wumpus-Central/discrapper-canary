n.d(t, { l: () => s });
var i = n(442837),
    r = n(291175),
    a = n(621853);
function s(e) {
    return (0, i.e7)([a.Z], () => {
        var t;
        let n;
        let i = null != e ? a.Z.getUserProfile(e) : null,
            s = null == i ? void 0 : i.premiumSince;
        return null == i || null == s
            ? null
            : (null == i ||
                  null === (t = i.badges) ||
                  void 0 === t ||
                  t.forEach((e) => {
                      let t = (0, r.gn)(e.id);
                      null != t && (n = t);
                  }),
              n);
    });
}
