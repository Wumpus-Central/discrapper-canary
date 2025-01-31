n.d(t, {
    A$: () => T,
    OF: () => p
}),
    n(47120),
    n(653041);
var r,
    a,
    i = n(192379),
    l = n(622131),
    o = n(247123),
    u = n(350934),
    c = n(646785),
    s = n(585647),
    d = n(883349),
    f = n(993173),
    h = n(650021),
    b = n(807608);
let v = [u.Z, c.Z, s.Z, f.Z, d.Z, b.Z, h.Z],
    p = 'data-accessibility-violation',
    m = 'function' == typeof (null === (a = navigator) || void 0 === a ? void 0 : null === (r = a.scheduling) || void 0 === r ? void 0 : r.isInputPending),
    g = null,
    w = null,
    A = 0,
    y = 0,
    k = null,
    x = {
        hash: 0,
        violations: new Map()
    },
    _ = () => {},
    I = document.body;
function E() {
    (A = 0),
        (y = 0),
        (k = null),
        (x = {
            hash: 0,
            violations: new Map()
        });
}
function N() {
    w = requestIdleCallback(Z);
}
function M() {
    (k = null), (y = 0), A < v.length - 1 ? ((A += 1), N()) : (_(x), E());
}
function Z() {
    let e = v[A];
    if ((null == k && (k = null != e.selector ? Array.from(I.querySelectorAll(e.selector)) : e.select(I)), 0 === k.length)) return M();
    let t = performance.now() + 16,
        n = { includeContinuous: !0 };
    for (; y < k.length && !(navigator.scheduling.isInputPending(n) || performance.now() >= t); ) {
        let t = k[y++],
            n = e.check(t);
        if (n !== o.w) {
            var r, a;
            let i = (0, l.P)(t),
                o = L(
                    ''
                        .concat(n, '_')
                        .concat(e.id, '_')
                        .concat(
                            null == i
                                ? (function (e) {
                                      let t = '',
                                          n = e;
                                      for (; null != n; ) (t += n.className), (n = n.parentElement);
                                      return L(t);
                                  })(t)
                                : i.join('\n')
                        )
                );
            x.hash = L(''.concat(x.hash).concat(o));
            let u = ''.concat(e.id, '_').concat(o),
                c =
                    null !== (r = x.violations.get(e.id)) && void 0 !== r
                        ? r
                        : {
                              rule: e,
                              instances: new Map()
                          },
                s = null !== (a = c.instances.get(u)) && void 0 !== a ? a : [];
            s.push({
                element: t,
                message: n,
                trace: null != i ? i : [],
                hash: o
            }),
                c.instances.set(u, s),
                x.violations.set(e.id, c);
        }
    }
    if (y < k.length - 1) return N();
    M();
}
let S = (e) => {
    0 !== e.filter((e) => 'attributes' !== e.type || e.attributeName !== p).length && (E(), null != g && (clearTimeout(g), (g = null)), null != w && (clearTimeout(w), (w = null)), (g = setTimeout(N, 250)));
};
function T(e, t) {
    let n = (0, i.useRef)(t);
    (0, i.useLayoutEffect)(() => {
        n.current = t;
    }),
        (0, i.useLayoutEffect)(() => {
            if (m && null != e) {
                (_ = n.current), (I = e);
                let t = (function (e) {
                    let t = new MutationObserver(S);
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
                    (_ = () => {}), t.disconnect();
                };
            }
        }, [e]);
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = 3735928559 ^ t,
        r = 1103547991 ^ t;
    for (let t = 0, a; t < e.length; t++) (n = Math.imul(n ^ (a = e.charCodeAt(t)), 2654435761)), (r = Math.imul(r ^ a, 1597334677));
    return (n = Math.imul(n ^ (n >>> 16), 2246822507) ^ Math.imul(r ^ (r >>> 13), 3266489909)), 4294967296 * (2097151 & (r = Math.imul(r ^ (r >>> 16), 2246822507) ^ Math.imul(n ^ (n >>> 13), 3266489909))) + (n >>> 0);
}
