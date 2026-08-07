n.d(t, { Q: () => f });
var r = n(477900),
    a = n(582128),
    u = n(284009),
    i = n.n(u),
    l = n(612324),
    s = n(95477);
let o = /^-?\d*$/,
    d = /^-?\d*\.?\d*$/;
function c(e) {
    return null != e ? e.toString() : "";
}
function p(e, t) {
    let n = t ? parseFloat(e) : parseInt(e, 10);
    return Number.isNaN(n) ? void 0 : n;
}
function m(e) {
    let t = e.toString(),
        n = t.indexOf(".");
    return -1 === n ? 0 : t.length - n - 1;
}
function f(e) {
    let {
            name: t = "",
            value: n,
            onChange: u,
            inputRef: f,
            min: v,
            max: h,
            step: w = 1,
            mode: b = "integer",
            disabled: k,
            readOnly: g,
            ...x
        } = e,
        E = "decimal" === b;
    i()(E || Number.isInteger(w), 'NumberInput step must be an integer when mode is "integer"');
    let N = a.useRef(null),
        y = (0, l.A)(f, N),
        [C, D] = a.useState(() => c(n));
    C !== c(n) && p(C, E) !== n && D(c(n)),
        (function (e) {
            let { name: t, disabled: n, readOnly: r, value: u, min: i, max: l, step: s, onChange: o, ref: d } = e;
            a.useEffect(() => {
                let e = d.current;
                if (!n && !r && null != e)
                    return (
                        e.addEventListener("keydown", c),
                        e.addEventListener("wheel", p, { passive: !1 }),
                        () => {
                            e.removeEventListener("keydown", c), e.removeEventListener("wheel", p);
                        }
                    );
                function a(e) {
                    var n;
                    let r = u ?? 0,
                        a = Math.max(m(s), m(r));
                    o(((n = Number((r + e * s).toFixed(a))), null != i && n < i ? i : null != l && n > l ? l : n), t);
                }
                function c(e) {
                    switch (e.key) {
                        case "ArrowUp":
                            e.preventDefault(), a(1);
                            break;
                        case "ArrowDown":
                            e.preventDefault(), a(-1);
                    }
                }
                function p(t) {
                    document.activeElement === e && (t.preventDefault(), a(t.deltaY < 0 ? 1 : -1));
                }
            }, [n, r, u, i, l, s, o, d, t]);
        })({ name: t, disabled: k, readOnly: g, value: n, min: v, max: h, step: w, onChange: u, ref: N });
    let L = a.useCallback(
        (e, t) => {
            (E ? d : o).test(e) && (D(e), u(p(e, E), t));
        },
        [u, E],
    );
    return (0, r.jsx)(s.k, {
        ...x,
        name: t,
        disabled: k,
        readOnly: g,
        role: "spinbutton",
        "aria-valuenow": n,
        "aria-valuemin": v,
        "aria-valuemax": h,
        onChange: L,
        inputRef: y,
        value: C,
        min: v,
        max: h,
        type: "text",
        inputMode: E ? "decimal" : "numeric",
    });
}
