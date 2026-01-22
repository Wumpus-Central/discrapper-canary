n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(105330),
    o = n(961350),
    l = n(559908),
    c = n(620141),
    u = n(224964),
    d = n(31408),
    f = n(851110);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let h = 16,
    m = 0.05;
function g(e) {
    var t, n;
    let { editorHeight: r, textValue: c, channelId: d } = e,
        p = i.useRef(c),
        _ = (0, s.l)({ editorHeight: r }),
        g = (0, u.A)(),
        E = (0, a.bG)([l.Ay, o.default], () => l.Ay.isComboing(o.default.getId(), d)),
        b = null != (t = null == _ ? void 0 : _.left) ? t : 0,
        y = (null != (n = null == _ ? void 0 : _.top) ? n : 0) - h,
        O = 0 === c.length,
        A = i.useMemo(() => Math.random() < m, [O]);
    return (
        i.useEffect(() => {
            0 !== c.length && c !== p.current && E && (g.fire(b, y, A ? { sprite: f.dR } : null), (p.current = c));
        }, [c, E, b, y, A, g]),
        null
    );
}
function E(e) {
    return (0, r.jsx)(c.A, {
        confettiLocation: d.k.CHAT_INPUT,
        children: (0, r.jsx)(g, _({}, e)),
    });
}
