s.d(t, { g: () => o }), s(321073);
var r = s(64700),
    l = s(417597),
    a = s(73153),
    n = s(248352);
function o() {
    let e = r.useRef(new Map()),
        t = (0, l.bG)([n.A], () => n.A.getUserDiscounts());
    r.useEffect(() => {
        let s = e.current,
            r = Date.now(),
            l = [];
        return (
            t.forEach((e) => {
                if (null == e.expiresAt) return;
                let t = e.expiresAt.getTime() - r;
                if (t <= 0) l.push(e.discountId);
                else {
                    let r = setTimeout(
                        () => {
                            a.h.dispatch({ type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED", discountIds: [e.discountId] }),
                                s.delete(e.discountId);
                        },
                        Math.min(0x7fffffff, t),
                    );
                    s.set(e.discountId, r);
                }
            }),
            l.length > 0 && a.h.dispatch({ type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED", discountIds: l }),
            () => {
                s.forEach((e) => clearTimeout(e)), s.clear();
            }
        );
    }, [t]);
}
