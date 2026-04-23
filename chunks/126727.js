n.d(t, { A: () => m });
var a = n(627968),
    l = n(64700),
    r = n(292666),
    i = n(260598),
    s = n(321471),
    o = n(155718),
    d = n(207963),
    c = n(969508),
    u = n(597526);
function m(e) {
    let t,
        { type: n, style: m, label: _, placeholder: p, minLength: h, maxLength: A, required: C, value: x } = e,
        [f, E] = l.useState(x ?? ""),
        { state: I, executeStateUpdate: N, error: g } = (0, d.At)(e, null != x ? { type: n, value: x } : void 0),
        v = (0, c.FG)(e.id);
    l.useEffect(() => {
        I?.type === n && E(I.value);
    }, [n, I]);
    let T = {
        value: f,
        placeholder: p,
        minLength: h,
        maxLength: A,
        required: C,
        onChange: (e) => {
            E(e), N({ type: n, value: e });
        },
        autoFocus: v,
    };
    switch (m) {
        case o.qz.SMALL:
            t = (0, a.jsx)(r.k, { ...T });
            break;
        case o.qz.PARAGRAPH:
            t = (0, a.jsx)(i.f, { autosize: !0, ...T });
    }
    return null != _ ? (0, a.jsx)(s.e, { title: _, required: C, className: u.k, error: g, children: t }) : t;
}
