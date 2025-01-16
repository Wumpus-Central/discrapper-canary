n.d(t, {
    A$: function () {
        return S;
    },
    OF: function () {
        return p;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a = n(192379),
    o = n(622131),
    l = n(247123),
    u = n(350934),
    c = n(646785),
    s = n(585647),
    d = n(883349),
    f = n(993173),
    h = n(650021),
    v = n(807608);
let b = [u.Z, c.Z, s.Z, f.Z, d.Z, v.Z, h.Z],
    p = 'data-accessibility-violation',
    m = 'function' == typeof (null === (i = navigator) || void 0 === i ? void 0 : null === (r = i.scheduling) || void 0 === r ? void 0 : r.isInputPending),
    g = null,
    w = null,
    A = 0,
    y = 0,
    k = null,
    _ = {
        hash: 0,
        violations: new Map()
    },
    I = () => {},
    x = document.body;
function N() {
    (A = 0),
        (y = 0),
        (k = null),
        (_ = {
            hash: 0,
            violations: new Map()
        });
}
function E() {
    w = requestIdleCallback(Z);
}
function M() {
    (k = null), (y = 0), A < b.length - 1 ? ((A += 1), E()) : (I(_), N());
}
function Z() {
    let e = b[A];
    if ((null == k && (k = null != e.selector ? Array.from(x.querySelectorAll(e.selector)) : e.select(x)), 0 === k.length)) return M();
    let t = performance.now() + 16,
        n = { includeContinuous: !0 };
    for (; y < k.length && !(navigator.scheduling.isInputPending(n) || performance.now() >= t); ) {
        let t = k[y++],
            n = e.check(t);
        if (n !== l.w) {
            var r, i;
            let a = (0, o.P)(t),
                l = T(
                    ''
                        .concat(n, '_')
                        .concat(e.id, '_')
                        .concat(
                            null == a
                                ? (function (e) {
                                      let t = '',
                                          n = e;
                                      for (; null != n; ) (t += n.className), (n = n.parentElement);
                                      return T(t);
                                  })(t)
                                : a.join('\n')
                        )
                );
            _.hash = T(''.concat(_.hash).concat(l));
            let u = ''.concat(e.id, '_').concat(l),
                c =
                    null !== (r = _.violations.get(e.id)) && void 0 !== r
                        ? r
                        : {
                              rule: e,
                              instances: new Map()
                          },
                s = null !== (i = c.instances.get(u)) && void 0 !== i ? i : [];
            s.push({
                element: t,
                message: n,
                trace: null != a ? a : [],
                hash: l
            }),
                c.instances.set(u, s),
                _.violations.set(e.id, c);
        }
    }
    if (y < k.length - 1) return E();
    M();
}
let L = (e) => {
    let t = e.filter((e) => ('attributes' !== e.type || e.attributeName !== p) && !0);
    0 !== t.length && (N(), null != g && (clearTimeout(g), (g = null)), null != w && (clearTimeout(w), (w = null)), (g = setTimeout(E, 250)));
};
function S(e, t) {
    let n = (0, a.useRef)(t);
    (0, a.useLayoutEffect)(() => {
        n.current = t;
    }),
        (0, a.useLayoutEffect)(() => {
            if (m && null != e) {
                (I = n.current), (x = e);
                let t = (function (e) {
                    let t = new MutationObserver(L);
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
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = 3735928559 ^ t,
        r = 1103547991 ^ t;
    for (let t = 0, i; t < e.length; t++) (n = Math.imul(n ^ (i = e.charCodeAt(t)), 2654435761)), (r = Math.imul(r ^ i, 1597334677));
    return (n = Math.imul(n ^ (n >>> 16), 2246822507) ^ Math.imul(r ^ (r >>> 13), 3266489909)), 4294967296 * (2097151 & (r = Math.imul(r ^ (r >>> 16), 2246822507) ^ Math.imul(n ^ (n >>> 13), 3266489909))) + (n >>> 0);
}
