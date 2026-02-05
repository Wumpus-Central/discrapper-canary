n.d(t, { A: () => c });
var l = n(627968),
    a = n(64700),
    r = n(397927),
    s = n(155718),
    i = n(207963),
    o = n(969508),
    d = n(717820);
function c(e) {
    let t,
        { type: n, style: c, label: u, placeholder: m, minLength: p, maxLength: A, required: h, value: C } = e,
        [E, x] = a.useState(C ?? ""),
        { state: N, executeStateUpdate: I, error: _ } = (0, i.At)(e, null != C ? { type: n, value: C } : void 0),
        f = (0, o.FG)(e.id);
    a.useEffect(() => {
        N?.type === n && x(N.value);
    }, [n, N]);
    let g = {
        value: E,
        placeholder: m,
        minLength: p,
        maxLength: A,
        required: h,
        onChange: (e) => {
            x(e), I({ type: n, value: e });
        },
        autoFocus: f,
    };
    switch (c) {
        case s.qz.SMALL:
            t = (0, l.jsx)(r.ksK, { ...g });
            break;
        case s.qz.PARAGRAPH:
            t = (0, l.jsx)(r.fs1, { autosize: !0, ...g });
    }
    return null != u ? (0, l.jsx)(r.eIh, { title: u, required: h, className: d.k, error: _, children: t }) : t;
}
