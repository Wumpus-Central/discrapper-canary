r.d(t, { w: () => o });
var n = r(241872),
    i = r(582128);
function o(e, t) {
    let r = (0, i.useRef)(!0),
        o = (0, i.useRef)(null),
        a = (0, n.J)(e);
    (0, i.useEffect)(
        () => (
            (r.current = !0),
            () => {
                r.current = !1;
            }
        ),
        [],
    ),
        (0, i.useEffect)(() => {
            let e = o.current;
            r.current ? (r.current = !1) : (!e || t.some((t, r) => !Object.is(t, e[r]))) && a(), (o.current = t);
        }, t);
}
