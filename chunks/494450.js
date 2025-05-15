n.d(t, { l: () => o });
var r = n(442837),
    i = n(291175),
    a = n(621853);
function o(e) {
    return (0, r.e7)([a.Z], () => {
        var t;
        let n,
            r = null != e ? a.Z.getUserProfile(e) : null,
            o = null == r ? void 0 : r.premiumSince;
        return null == r || null == o
            ? null
            : (null == r ||
                  null == (t = r.badges) ||
                  t.forEach((e) => {
                      let t = (0, i.gn)(e.id);
                      null != t && (n = t);
                  }),
              n);
    });
}
