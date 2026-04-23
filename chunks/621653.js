r.d(t, { g: () => i }), r(321073);
var n = r(64700),
    s = r(702841),
    l = r(228366),
    a = r(248352),
    o = r(652215);
function i() {
    let e = n.useRef(new Map()),
        t = (0, s.bG)([a.A], () => a.A.getUserDiscounts());
    n.useEffect(() => {
        let r = e.current,
            n = Date.now(),
            s = [];
        return (
            t.forEach((e) => {
                if (null == e.expiresAt) return;
                let t = e.expiresAt.getTime() - n;
                if (t <= 0) s.push(e.discountId);
                else {
                    let n = setTimeout(
                        () => {
                            l.h.dispatch({ type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED", discountIds: [e.discountId] }),
                                r.delete(e.discountId);
                        },
                        Math.min(o.mnr, t),
                    );
                    r.set(e.discountId, n);
                }
            }),
            s.length > 0 && l.h.dispatch({ type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED", discountIds: s }),
            () => {
                r.forEach((e) => clearTimeout(e)), r.clear();
            }
        );
    }, [t]);
}
