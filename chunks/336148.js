n.d(t, { DL: () => h, X6: () => c });
var l = n(311907),
    i = n(680049),
    r = n(827734),
    s = n(21119),
    a = n(994500),
    u = n(741961),
    o = n(287809),
    d = n(240516);
function c(e) {
    return (0, l.bG)([u.A, o.default], () => {
        if (null == e) return !1;
        let t = o.default.getCurrentUser()?.id ?? null,
            n = u.A.getTypingUsers(e.id);
        for (let e in n) if (e !== t) return !0;
        return !1;
    }, [e]);
}
function h(e) {
    return (0, l.bG)([u.A, o.default, a.A, s.A], () => {
        if (null == e) return null;
        switch (
            (function (e, t) {
                let [n, l, i, r] = t;
                if (null == e) return "NONE";
                let s = (function (e, t, n) {
                    let [l] = n,
                        i = l.getTypingUsers(e.id);
                    for (let e in i) if (e !== t) return e;
                    return null;
                })(e, l.getCurrentUser()?.id ?? null, [n]);
                return null == s
                    ? "NONE"
                    : (function (e, t) {
                          let [n, l] = t;
                          if (n.isFriend(e)) return "FRIEND";
                          let i = l.getUserAffinity(e),
                              r = i?.communicationProbability ?? 0;
                          return r >= d.u.HIGH_AFFINITY_MINIMUM ? "HIGH_AFFINITY" : r > 0 ? "LOW_AFFINITY" : "NONE";
                      })(s, [i, r]);
            })(e, [u.A, o.default, a.A, s.A])
        ) {
            case "FRIEND":
                return r.A.colors.STATUS_ONLINE.resolve({ theme: i.NJ.DARK, saturation: 1 }).hex();
            case "HIGH_AFFINITY":
                return r.A.colors.STATUS_ONLINE.resolve({ theme: i.NJ.DARK, saturation: 0.7 }).hex();
            case "LOW_AFFINITY":
                return r.A.colors.STATUS_ONLINE.resolve({ theme: i.NJ.DARK, saturation: 0.4 }).hex();
            default:
                return null;
        }
    }, [e]);
}
