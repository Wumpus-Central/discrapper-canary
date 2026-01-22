n.d(t, { v: () => s });
var r = n(311907),
    i = n(439174),
    a = n(622543);
function s(e) {
    return (0, r.bG)([a.A], () => {
        var t;
        let n,
            r = null != e ? a.A.getUserProfile(e) : null,
            s = null == r ? void 0 : r.premiumSince;
        return null == r || null == s
            ? null
            : (null == r ||
                  null == (t = r.badges) ||
                  t.forEach((e) => {
                      let t = (0, i.cZ)(e.id);
                      null != t && (n = t);
                  }),
              n);
    });
}
