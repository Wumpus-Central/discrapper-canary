n.d(t, { i: () => a });
var r = n(436283),
    i = n(647438);
function a(e, t) {
    let n = (0, i.useRef)(!0),
        a = (0, i.useRef)(null);
    (0, r.b)(
        () => (
            (n.current = !0),
            () => {
                n.current = !1;
            }
        ),
        [],
    ),
        (0, r.b)(() => {
            n.current ? (n.current = !1) : (!a.current || t.some((e, t) => !Object.is(e, a[t]))) && e(),
                (a.current = t);
        }, t);
}
