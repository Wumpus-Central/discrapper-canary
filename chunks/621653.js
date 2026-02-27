s.d(t, { g: () => i }), s(321073);
var r = s(64700),
    l = s(417597),
    n = s(73153),
    a = s(248352),
    o = s(652215);
function i() {
    let e = r.useRef(new Map()),
        t = (0, l.bG)([a.A], () => a.A.getUserDiscounts());
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
                            n.h.dispatch({ type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED", discountIds: [e.discountId] }),
                                s.delete(e.discountId);
                        },
                        Math.min(o.mnr, t),
                    );
                    s.set(e.discountId, r);
                }
            }),
            l.length > 0 && n.h.dispatch({ type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED", discountIds: l }),
            () => {
                s.forEach((e) => clearTimeout(e)), s.clear();
            }
        );
    }, [t]);
}
