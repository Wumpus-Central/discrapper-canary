l.d(t, {
    g: () => i,
}),
    l(896048),
    l(321073);
var n = l(64700),
    r = l(417597),
    s = l(73153),
    a = l(248352);

function i() {
    let e = n.useRef(new Map()),
        t = (0, r.bG)([a.A], () => a.A.getUserDiscounts());
    n.useEffect(() => {
        let l = e.current,
            n = Date.now(),
            r = [];
        return (
            t.forEach((e) => {
                if (null == e.expiresAt) return;
                let t = e.expiresAt.getTime() - n;
                if (t <= 0) r.push(e.discountId);
                else {
                    let n = setTimeout(() => {
                        s.h.dispatch({
                            type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
                            discountIds: [e.discountId],
                        }),
                            l.delete(e.discountId);
                    }, t);
                    l.set(e.discountId, n);
                }
            }),
            r.length > 0 &&
                s.h.dispatch({
                    type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
                    discountIds: r,
                }),
            () => {
                l.forEach((e) => clearTimeout(e)), l.clear();
            }
        );
    }, [t]);
}
