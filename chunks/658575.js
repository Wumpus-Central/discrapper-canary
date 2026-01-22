n.d(t, { G: () => o });
var r = n(311907),
    i = n(587895),
    a = n(212534),
    s = n(622543);
function o(e) {
    return (0, r.bG)([i.A, s.A, a.A], () => {
        var t, n, r, o, l, c, u;
        return (
            null !=
                (t =
                    null !=
                    (n =
                        null != (r = null == (o = i.A.getApplication(e)) ? void 0 : o.storefront_available)
                            ? r
                            : null == (c = s.A.getUserProfile(e)) || null == (l = c.application)
                              ? void 0
                              : l.storefront_available)
                        ? n
                        : null == (u = a.A.getApplication(e))
                          ? void 0
                          : u.storefront_available) && t
        );
    }, [e]);
}
