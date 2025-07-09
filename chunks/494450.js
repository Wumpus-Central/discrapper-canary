n.d(t, { l: () => a });
var i = n(442837),
    r = n(291175),
    s = n(621853);
function a(e) {
    return (0, i.e7)([s.Z], () => {
        var t;
        let n,
            i = null != e ? s.Z.getUserProfile(e) : null,
            a = null == i ? void 0 : i.premiumSince;
        return null == i || null == a
            ? null
            : (null == i ||
                  null == (t = i.badges) ||
                  t.forEach((e) => {
                      let t = (0, r.gn)(e.id);
                      null != t && (n = t);
                  }),
              n);
    });
}
