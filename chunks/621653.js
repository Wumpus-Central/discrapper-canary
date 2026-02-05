"use strict";
s.d(t, { g: () => i }), s(321073);
var n = s(64700),
    r = s(417597),
    l = s(73153),
    a = s(248352);
function i() {
    let e = n.useRef(new Map()),
        t = (0, r.bG)([a.A], () => a.A.getUserDiscounts());
    n.useEffect(() => {
        let s = e.current,
            n = Date.now(),
            r = [];
        return (
            t.forEach((e) => {
                if (null == e.expiresAt) return;
                let t = e.expiresAt.getTime() - n;
                if (t <= 0) r.push(e.discountId);
                else {
                    let n = setTimeout(
                        () => {
                            l.h.dispatch({ type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED", discountIds: [e.discountId] }),
                                s.delete(e.discountId);
                        },
                        Math.min(0x7fffffff, t),
                    );
                    s.set(e.discountId, n);
                }
            }),
            r.length > 0 && l.h.dispatch({ type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED", discountIds: r }),
            () => {
                s.forEach((e) => clearTimeout(e)), s.clear();
            }
        );
    }, [t]);
}
