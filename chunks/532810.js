n.d(t, {
    A$: () => L,
    OF: () => p
}),
    n(47120),
    n(653041);
var r,
    a,
    l = n(192379),
    i = n(622131),
    u = n(247123),
    o = n(350934),
    c = n(646785),
    s = n(585647),
    d = n(883349),
    f = n(993173),
    h = n(650021),
    b = n(807608);
let m = [o.Z, c.Z, s.Z, f.Z, d.Z, b.Z, h.Z],
    p = 'data-accessibility-violation',
    g = 'function' == typeof (null == (a = navigator) || null == (r = a.scheduling) ? void 0 : r.isInputPending),
    v = null,
    w = null,
    A = 0,
    y = 0,
    x = null,
    k = {
        hash: 0,
        violations: new Map()
    },
    I = () => {},
    E = document.body;
function N() {
    (A = 0),
        (y = 0),
        (x = null),
        (k = {
            hash: 0,
            violations: new Map()
        });
}
function M() {
    w = requestIdleCallback(_);
}
function Z() {
    (x = null), (y = 0), A < m.length - 1 ? ((A += 1), M()) : (I(k), N());
}
function _() {
    let e = m[A];
    if ((null == x && (x = null != e.selector ? Array.from(E.querySelectorAll(e.selector)) : e.select(E)), 0 === x.length)) return Z();
    let t = performance.now() + 16,
        n = { includeContinuous: !0 };
    for (; y < x.length && !(navigator.scheduling.isInputPending(n) || performance.now() >= t); ) {
        let t = x[y++],
            n = e.check(t);
        if (n !== u.w) {
            var r, a;
            let l = (0, i.P)(t),
                u = S(
                    ''
                        .concat(n, '_')
                        .concat(e.id, '_')
                        .concat(
                            null == l
                                ? (function (e) {
                                      let t = '',
                                          n = e;
                                      for (; null != n; ) (t += n.className), (n = n.parentElement);
                                      return S(t);
                                  })(t)
                                : l.join('\n')
                        )
                );
            k.hash = S(''.concat(k.hash).concat(u));
            let o = ''.concat(e.id, '_').concat(u),
                c =
                    null != (r = k.violations.get(e.id))
                        ? r
                        : {
                              rule: e,
                              instances: new Map()
                          },
                s = null != (a = c.instances.get(o)) ? a : [];
            s.push({
                element: t,
                message: n,
                trace: null != l ? l : [],
                hash: u
            }),
                c.instances.set(o, s),
                k.violations.set(e.id, c);
        }
    }
    if (y < x.length - 1) return M();
    Z();
}
let T = (e) => {
    0 !== e.filter((e) => 'attributes' !== e.type || e.attributeName !== p).length && (N(), null != v && (clearTimeout(v), (v = null)), null != w && (clearTimeout(w), (w = null)), (v = setTimeout(M, 250)));
};
function L(e, t) {
    let n = (0, l.useRef)(t);
    (0, l.useLayoutEffect)(() => {
        n.current = t;
    }),
        (0, l.useLayoutEffect)(() => {
            if (g && null != e) {
                (I = n.current), (E = e);
                let t = (function (e) {
                    let t = new MutationObserver(T);
                    return (
                        t.observe(e, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0
                        }),
                        t
                    );
                })(e);
                return () => {
                    (I = () => {}), t.disconnect();
                };
            }
        }, [e]);
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = 3735928559 ^ t,
        r = 1103547991 ^ t;
    for (let t = 0, a; t < e.length; t++) (n = Math.imul(n ^ (a = e.charCodeAt(t)), 2654435761)), (r = Math.imul(r ^ a, 1597334677));
    return (n = Math.imul(n ^ (n >>> 16), 2246822507) ^ Math.imul(r ^ (r >>> 13), 3266489909)), 4294967296 * (2097151 & (r = Math.imul(r ^ (r >>> 16), 2246822507) ^ Math.imul(n ^ (n >>> 13), 3266489909))) + (n >>> 0);
}
