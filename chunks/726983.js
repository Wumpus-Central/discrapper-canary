let i;
r.d(n, {
    Bq: function () {
        return eq;
    },
    IB: function () {
        return eS;
    },
    NE: function () {
        return eQ;
    },
    RP: function () {
        return eY;
    },
    Sv: function () {
        return eW;
    },
    U4: function () {
        return eV;
    },
    Xj: function () {
        return eZ;
    },
    aV: function () {
        return ez;
    },
    tN: function () {
        return ev;
    }
});
var a = r(97290),
    s = r(880126),
    o = r(638074),
    l = r(842189),
    u = r(872684),
    c = r(209269),
    d = r(47451),
    f = r(612072),
    _ = r(363154),
    h = r(362670),
    p = r(561017),
    m = r(713198),
    g = r(552019),
    E = r(176123),
    v = r(814010),
    I = r(48087),
    T = r(787969),
    b = r(43771),
    y = r(14046),
    S = r(287372),
    A = r(712139),
    N = r(446894),
    C = r(304665),
    R = r(839074),
    O = r(617348),
    D = r(302992),
    L = r(487085),
    x = r(745258),
    w = r(860890),
    P = r(961075),
    M = r(869477),
    k = r(979217),
    U = r(784731),
    B = r(876580),
    G = r(192379),
    Z = r(239700),
    F = r(661763),
    V = r(649859),
    j = r(662845),
    H = r(921336),
    Y = r(995295),
    W = r(198453),
    K = r(867824);
function z(e) {
    return e && e.__esModule ? e.default : e;
}
let q = {
        top: 'top',
        bottom: 'top',
        left: 'left',
        right: 'left'
    },
    Q = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
    },
    X = {
        top: 'left',
        left: 'top'
    },
    J = {
        top: 'height',
        left: 'width'
    },
    $ = {
        width: 'totalWidth',
        height: 'totalHeight'
    },
    ee = {},
    et = 'undefined' != typeof document && window.visualViewport;
function en(e) {
    let n = 0,
        r = 0,
        i = 0,
        a = 0,
        s = 0,
        o = 0,
        l = {};
    if ('BODY' === e.tagName) {
        var u, c;
        let s = document.documentElement;
        (i = s.clientWidth), (a = s.clientHeight), (n = null !== (u = null == et ? void 0 : et.width) && void 0 !== u ? u : i), (r = null !== (c = null == et ? void 0 : et.height) && void 0 !== c ? c : a), (l.top = s.scrollTop || e.scrollTop), (l.left = s.scrollLeft || e.scrollLeft);
    } else ({ width: n, height: r, top: s, left: o } = ef(e)), (l.top = e.scrollTop), (l.left = e.scrollLeft), (i = n), (a = r);
    return {
        width: n,
        height: r,
        totalWidth: i,
        totalHeight: a,
        scroll: l,
        top: s,
        left: o
    };
}
function er(e) {
    return {
        top: e.scrollTop,
        left: e.scrollLeft,
        width: e.scrollWidth,
        height: e.scrollHeight
    };
}
function ei(e, n, r, i, a, s) {
    let o = a.scroll[e],
        l = i[J[e]],
        u = n - s - o,
        c = n + s - o + r;
    return u < 0 ? -u : c > l ? Math.max(l - c, -u) : 0;
}
function ea(e) {
    let n = window.getComputedStyle(e);
    return {
        top: parseInt(n.marginTop, 10) || 0,
        bottom: parseInt(n.marginBottom, 10) || 0,
        left: parseInt(n.marginLeft, 10) || 0,
        right: parseInt(n.marginRight, 10) || 0
    };
}
function es(e) {
    if (ee[e]) return ee[e];
    let [n, r] = e.split(' '),
        i = q[n] || 'right',
        a = X[i];
    !q[r] && (r = 'center');
    let s = J[i],
        o = J[a];
    return (
        (ee[e] = {
            placement: n,
            crossPlacement: r,
            axis: i,
            crossAxis: a,
            size: s,
            crossSize: o
        }),
        ee[e]
    );
}
function eo(e, n, r, i, a, s, o, l, u, c) {
    let { placement: d, crossPlacement: f, axis: _, crossAxis: h, size: p, crossSize: m } = i,
        g = {};
    (g[h] = e[h]), 'center' === f ? (g[h] += (e[m] - r[m]) / 2) : f !== h && (g[h] += e[m] - r[m]), (g[h] += s);
    let E = e[h] - r[m] + u + c,
        v = e[h] + e[m] - u - c;
    if (((g[h] = (0, Z.uZ)(g[h], E, v)), d === _)) {
        let r = l ? o[p] : n[$[p]];
        g[Q[_]] = Math.floor(r - e[_] + a);
    } else g[_] = Math.floor(e[_] + e[p] + a);
    return g;
}
function el(e, n, r, i, a, s) {
    return null != e.top ? Math.max(0, n.height + n.top + n.scroll.top - (r.top + e.top) - (a.top + a.bottom + s)) : Math.max(0, i.top + r.top - (n.top + n.scroll.top) - (a.top + a.bottom + s));
}
function eu(e, n, r, i, a, s) {
    let { placement: o, axis: l, size: u } = s;
    return o === l ? Math.max(0, r[l] - e[l] - e.scroll[l] + n[l] - i[l] - i[Q[l]] - a) : Math.max(0, e[u] + e[l] + e.scroll[l] - n[l] - r[l] - r[u] - i[l] - i[Q[l]] - a);
}
function ec(e, n, r, i, a, s, o, l, u, c, d, f, _, h, p, m) {
    let g = es(e),
        { size: E, crossAxis: v, crossSize: I, placement: T, crossPlacement: b } = g,
        y = eo(n, l, r, g, d, f, c, _, p, m),
        S = d,
        A = eu(l, c, n, a, s + d, g);
    if (o && i[E] > A) {
        let e = es(`${Q[T]} ${b}`),
            i = eo(n, l, r, e, d, f, c, _, p, m);
        eu(l, c, n, a, s + d, e) > A && ((g = e), (y = i), (S = d));
    }
    let N = ei(v, y[v], r[I], l, u, s);
    y[v] += N;
    let C = el(y, l, c, n, a, s);
    h && h < C && (C = h), (r.height = Math.min(r.height, C)), (N = ei(v, (y = eo(n, l, r, g, S, f, c, _, p, m))[v], r[I], l, u, s)), (y[v] += N);
    let R = {},
        O = n[v] + 0.5 * n[I] - r[v],
        D = p / 2 + m,
        L = r[I] - p / 2 - m,
        x = n[v] - r[v] + p / 2,
        w = n[v] + n[I] - r[v] - p / 2,
        P = (0, Z.uZ)(O, x, w);
    return (
        (R[v] = (0, Z.uZ)(P, D, L)),
        {
            position: y,
            maxHeight: C,
            arrowOffsetLeft: R.left,
            arrowOffsetTop: R.top,
            placement: g.placement
        }
    );
}
function ed(e) {
    let { placement: n, targetNode: r, overlayNode: i, scrollNode: a, padding: s, shouldFlip: o, boundaryElement: l, offset: u, crossOffset: c, maxHeight: d, arrowSize: f = 0, arrowBoundaryOffset: _ = 0 } = e,
        h = i instanceof HTMLElement ? eh(i) : document.documentElement,
        p = h === document.documentElement,
        m = window.getComputedStyle(h).position,
        g = !!m && 'static' !== m,
        E = p ? ef(r) : e_(r, h);
    if (!p) {
        let { marginTop: e, marginLeft: n } = window.getComputedStyle(r);
        (E.top += parseInt(e, 10) || 0), (E.left += parseInt(n, 10) || 0);
    }
    let v = ef(i),
        I = ea(i);
    return (v.width += I.left + I.right), (v.height += I.top + I.bottom), ec(n, E, v, er(a), I, s, o, en(l), en(h), 'BODY' === l.tagName ? ef(h) : e_(h, l), u, c, g, d, f, _);
}
function ef(e) {
    let { top: n, left: r, width: i, height: a } = e.getBoundingClientRect(),
        { scrollTop: s, scrollLeft: o, clientTop: l, clientLeft: u } = document.documentElement;
    return {
        top: n + s - l,
        left: r + o - u,
        width: i,
        height: a
    };
}
function e_(e, n) {
    let r,
        i = window.getComputedStyle(e);
    if ('fixed' === i.position) {
        let { top: n, left: i, width: a, height: s } = e.getBoundingClientRect();
        r = {
            top: n,
            left: i,
            width: a,
            height: s
        };
    } else {
        r = ef(e);
        let i = ef(n),
            a = window.getComputedStyle(n);
        (i.top += (parseInt(a.borderTopWidth, 10) || 0) - n.scrollTop), (i.left += (parseInt(a.borderLeftWidth, 10) || 0) - n.scrollLeft), (r.top -= i.top), (r.left -= i.left);
    }
    return (r.top -= parseInt(i.marginTop, 10) || 0), (r.left -= parseInt(i.marginLeft, 10) || 0), r;
}
function eh(e) {
    let n = e.offsetParent;
    if ((n && n === document.body && 'static' === window.getComputedStyle(n).position && !ep(n) && (n = document.documentElement), null == n)) for (n = e.parentElement; n && !ep(n); ) n = n.parentElement;
    return n || document.documentElement;
}
function ep(e) {
    let n = window.getComputedStyle(e);
    return 'none' !== n.transform || /transform|perspective/.test(n.willChange) || 'none' !== n.filter || 'paint' === n.contain || ('backdropFilter' in n && 'none' !== n.backdropFilter) || ('WebkitBackdropFilter' in n && 'none' !== n.WebkitBackdropFilter);
}
let em = new WeakMap();
function eg(e) {
    let { triggerRef: n, isOpen: r, onClose: i } = e;
    (0, G.useEffect)(() => {
        if (!r || null === i) return;
        let e = (e) => {
            let r = e.target;
            if (!n.current || (r instanceof Node && !r.contains(n.current))) return;
            let a = i || em.get(n.current);
            a && a();
        };
        return (
            window.addEventListener('scroll', e, !0),
            () => {
                window.removeEventListener('scroll', e, !0);
            }
        );
    }, [r, i, n]);
}
let eE = 'undefined' != typeof document && window.visualViewport;
function ev(e) {
    let { direction: n } = (0, V.bU)(),
        { arrowSize: r = 0, targetRef: i, overlayRef: a, scrollRef: s = a, placement: o = 'bottom', containerPadding: l = 12, shouldFlip: u = !0, boundaryElement: c = 'undefined' != typeof document ? document.body : null, offset: d = 0, crossOffset: f = 0, shouldUpdatePosition: _ = !0, isOpen: h = !0, onClose: p, maxHeight: m, arrowBoundaryOffset: g = 0 } = e,
        [E, v] = (0, G.useState)({
            position: {},
            arrowOffsetLeft: void 0,
            arrowOffsetTop: void 0,
            maxHeight: void 0,
            placement: void 0
        }),
        I = [_, o, a.current, i.current, s.current, l, u, c, d, f, h, n, m, g, r],
        T = (0, G.useCallback)(() => {
            if (!1 === _ || !h || !a.current || !i.current || !s.current || !c) return;
            let e = ed({
                placement: eT(o, n),
                overlayNode: a.current,
                targetNode: i.current,
                scrollNode: s.current,
                padding: l,
                shouldFlip: u,
                boundaryElement: c,
                offset: d,
                crossOffset: f,
                maxHeight: m,
                arrowSize: r,
                arrowBoundaryOffset: g
            });
            Object.keys(e.position).forEach((n) => (a.current.style[n] = e.position[n] + 'px')), (a.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + 'px' : void 0), v(e);
        }, I);
    (0, F.bt)(T, I),
        eI(T),
        (0, F.yU)({
            ref: a,
            onResize: T
        });
    let b = (0, G.useRef)(!1);
    (0, F.bt)(() => {
        let e;
        let n = () => {
            (b.current = !0),
                clearTimeout(e),
                (e = setTimeout(() => {
                    b.current = !1;
                }, 500)),
                T();
        };
        return (
            null == eE || eE.addEventListener('resize', n),
            null == eE || eE.addEventListener('scroll', n),
            () => {
                null == eE || eE.removeEventListener('resize', n), null == eE || eE.removeEventListener('scroll', n);
            }
        );
    }, [T]);
    let y = (0, G.useCallback)(() => {
        !b.current && p();
    }, [p, b]);
    return (
        eg({
            triggerRef: i,
            isOpen: h,
            onClose: p && y
        }),
        {
            overlayProps: {
                style: {
                    position: 'absolute',
                    zIndex: 100000,
                    ...E.position,
                    maxHeight: E.maxHeight
                }
            },
            placement: E.placement,
            arrowProps: {
                'aria-hidden': 'true',
                role: 'presentation',
                style: {
                    left: E.arrowOffsetLeft,
                    top: E.arrowOffsetTop
                }
            },
            updatePosition: T
        }
    );
}
function eI(e) {
    (0, F.bt)(
        () => (
            window.addEventListener('resize', e, !1),
            () => {
                window.removeEventListener('resize', e, !1);
            }
        ),
        [e]
    );
}
function eT(e, n) {
    return 'rtl' === n ? e.replace('start', 'right').replace('end', 'left') : e.replace('start', 'left').replace('end', 'right');
}
let eb = [];
function ey(e, n) {
    let { onClose: r, shouldCloseOnBlur: i, isOpen: a, isDismissable: s = !1, isKeyboardDismissDisabled: o = !1, shouldCloseOnInteractOutside: l } = e;
    (0, G.useEffect)(
        () => (
            a && eb.push(n),
            () => {
                let e = eb.indexOf(n);
                e >= 0 && eb.splice(e, 1);
            }
        ),
        [a, n]
    );
    let u = () => {
            eb[eb.length - 1] === n && r && r();
        },
        c = (e) => {
            (!l || l(e.target)) && eb[eb.length - 1] === n && (e.stopPropagation(), e.preventDefault());
        },
        d = (e) => {
            (!l || l(e.target)) && (eb[eb.length - 1] === n && (e.stopPropagation(), e.preventDefault()), u());
        },
        f = (e) => {
            'Escape' === e.key && !o && (e.stopPropagation(), e.preventDefault(), u());
        };
    (0, H.Fc)({
        ref: n,
        onInteractOutside: s && a ? d : null,
        onInteractOutsideStart: c
    });
    let { focusWithinProps: _ } = (0, H.L_)({
            isDisabled: !i,
            onBlurWithin: (e) => {
                !(!e.relatedTarget || (0, j.cW)(e.relatedTarget)) && (!l || l(e.relatedTarget)) && r();
            }
        }),
        h = (e) => {
            e.target === e.currentTarget && e.preventDefault();
        };
    return {
        overlayProps: {
            onKeyDown: f,
            ..._
        },
        underlayProps: { onPointerDown: h }
    };
}
function eS(e, n, r) {
    let i,
        { type: a } = e,
        { isOpen: s } = n;
    (0, G.useEffect)(() => {
        r && r.current && em.set(r.current, n.close);
    });
    'menu' === a ? (i = !0) : 'listbox' === a && (i = 'listbox');
    let o = (0, F.Me)();
    return {
        triggerProps: {
            'aria-haspopup': i,
            'aria-expanded': s,
            'aria-controls': s ? o : null,
            onPress: n.toggle
        },
        overlayProps: { id: o }
    };
}
let eA = 'undefined' != typeof document && window.visualViewport,
    eN = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']),
    eC = 0;
function eR(e = {}) {
    let { isDisabled: n } = e;
    (0, F.bt)(() => {
        if (!n)
            return (
                eC++,
                1 === eC && (i = (0, F.gn)() ? eD() : eO()),
                () => {
                    0 == --eC && i();
                }
            );
    }, [n]);
}
function eO() {
    return (0, F.tS)(eL(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), eL(document.documentElement, 'overflow', 'hidden'));
}
function eD() {
    let e, n;
    let r = (r) => {
            ((e = (0, F.rP)(r.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && 'auto' === window.getComputedStyle(e).overscrollBehavior && (n = eL(e, 'overscrollBehavior', 'contain'));
        },
        i = (n) => {
            if (!e || e === document.documentElement || e === document.body) {
                n.preventDefault();
                return;
            }
            e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && n.preventDefault();
        },
        a = (e) => {
            let r = e.target;
            eP(r) &&
                r !== document.activeElement &&
                (e.preventDefault(),
                l(),
                (r.style.transform = 'translateY(-2000px)'),
                r.focus(),
                requestAnimationFrame(() => {
                    r.style.transform = '';
                })),
                n && n();
        },
        s = (e) => {
            let n = e.target;
            eP(n) &&
                (l(),
                (n.style.transform = 'translateY(-2000px)'),
                requestAnimationFrame(() => {
                    (n.style.transform = ''),
                        eA &&
                            (eA.height < window.innerHeight
                                ? requestAnimationFrame(() => {
                                      ew(n);
                                  })
                                : eA.addEventListener('resize', () => ew(n), { once: !0 }));
                }));
        },
        o = null,
        l = () => {
            if (o) return;
            let e = () => {
                    window.scrollTo(0, 0);
                },
                n = window.pageXOffset,
                r = window.pageYOffset;
            (o = (0, F.tS)(ex(window, 'scroll', e), eL(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), eL(document.documentElement, 'overflow', 'hidden'), eL(document.body, 'marginTop', `-${r}px`), () => {
                window.scrollTo(n, r);
            })),
                window.scrollTo(0, 0);
        },
        u = (0, F.tS)(
            ex(document, 'touchstart', r, {
                passive: !1,
                capture: !0
            }),
            ex(document, 'touchmove', i, {
                passive: !1,
                capture: !0
            }),
            ex(document, 'touchend', a, {
                passive: !1,
                capture: !0
            }),
            ex(document, 'focus', s, !0)
        );
    return () => {
        null == n || n(), null == o || o(), u();
    };
}
function eL(e, n, r) {
    let i = e.style[n];
    return (
        (e.style[n] = r),
        () => {
            e.style[n] = i;
        }
    );
}
function ex(e, n, r, i) {
    return (
        e.addEventListener(n, r, i),
        () => {
            e.removeEventListener(n, r, i);
        }
    );
}
function ew(e) {
    let n = document.scrollingElement || document.documentElement;
    for (; e && e !== n; ) {
        let n = (0, F.rP)(e);
        if (n !== document.documentElement && n !== document.body && n !== e) {
            let r = n.getBoundingClientRect().top,
                i = e.getBoundingClientRect().top;
            i > r + e.clientHeight && (n.scrollTop += i - r);
        }
        e = n.parentElement;
    }
}
function eP(e) {
    return (e instanceof HTMLInputElement && !eN.has(e.type)) || e instanceof HTMLTextAreaElement || (e instanceof HTMLElement && e.isContentEditable);
}
let eM = G.createContext(null);
function ek(e) {
    let { children: n } = e,
        r = (0, G.useContext)(eM),
        [i, a] = (0, G.useState)(0),
        s = (0, G.useMemo)(
            () => ({
                parent: r,
                modalCount: i,
                addModal() {
                    a((e) => e + 1), r && r.addModal();
                },
                removeModal() {
                    a((e) => e - 1), r && r.removeModal();
                }
            }),
            [r, i]
        );
    return G.createElement(eM.Provider, { value: s }, n);
}
function eU() {
    let e = (0, G.useContext)(eM);
    return { modalProviderProps: { 'aria-hidden': (!!e && e.modalCount > 0) || null } };
}
function eB(e) {
    let { modalProviderProps: n } = eU();
    return G.createElement('div', {
        'data-overlay-container': !0,
        ...e,
        ...n
    });
}
function eG(e) {
    return G.createElement(ek, null, G.createElement(eB, e));
}
function eZ(e) {
    let n = (0, W.Av)(),
        { portalContainer: r = n ? null : document.body, ...i } = e;
    if (
        (G.useEffect(() => {
            if (null == r ? void 0 : r.closest('[data-overlay-container]')) throw Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
        }, [r]),
        !r)
    )
        return null;
    let a = G.createElement(eG, i);
    return Y.createPortal(a, r);
}
var eF = {};
function eV(e) {
    let { onDismiss: n, ...r } = e,
        i = (0, V.qb)(z(eF), '@react-aria/overlays'),
        a = (0, F.bE)(r, i.format('dismiss')),
        s = () => {
            n && n();
        };
    return G.createElement(
        K.T,
        null,
        G.createElement('button', {
            ...a,
            tabIndex: -1,
            onClick: s,
            style: {
                width: 1,
                height: 1
            }
        })
    );
}
eF = {
    'ar-AE': a.Z,
    'bg-BG': s.Z,
    'cs-CZ': o.Z,
    'da-DK': l.Z,
    'de-DE': u.Z,
    'el-GR': c.Z,
    'en-US': d.Z,
    'es-ES': f.Z,
    'et-EE': _.Z,
    'fi-FI': h.Z,
    'fr-FR': p.Z,
    'he-IL': m.Z,
    'hr-HR': g.Z,
    'hu-HU': E.Z,
    'it-IT': v.Z,
    'ja-JP': I.Z,
    'ko-KR': T.Z,
    'lt-LT': b.Z,
    'lv-LV': y.Z,
    'nb-NO': S.Z,
    'nl-NL': A.Z,
    'pl-PL': N.Z,
    'pt-BR': C.Z,
    'pt-PT': R.Z,
    'ro-RO': O.Z,
    'ru-RU': D.Z,
    'sk-SK': L.Z,
    'sl-SI': x.Z,
    'sr-SP': w.Z,
    'sv-SE': P.Z,
    'tr-TR': M.Z,
    'uk-UA': k.Z,
    'zh-CN': U.Z,
    'zh-TW': B.Z
};
let ej = new WeakMap(),
    eH = [];
function eY(e, n = document.body) {
    let r = new Set(e),
        i = new Set(),
        a = (e) => {
            for (let n of e.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]')) r.add(n);
            let n = (e) => {
                    if (r.has(e) || (i.has(e.parentElement) && 'row' !== e.parentElement.getAttribute('role'))) return NodeFilter.FILTER_REJECT;
                    for (let n of r) if (e.contains(n)) return NodeFilter.FILTER_SKIP;
                    return NodeFilter.FILTER_ACCEPT;
                },
                a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: n }),
                o = n(e);
            if ((o === NodeFilter.FILTER_ACCEPT && s(e), o !== NodeFilter.FILTER_REJECT)) {
                let e = a.nextNode();
                for (; null != e; ) s(e), (e = a.nextNode());
            }
        },
        s = (e) => {
            var n;
            let r = null !== (n = ej.get(e)) && void 0 !== n ? n : 0;
            ('true' !== e.getAttribute('aria-hidden') || 0 !== r) && (0 === r && e.setAttribute('aria-hidden', 'true'), i.add(e), ej.set(e, r + 1));
        };
    eH.length && eH[eH.length - 1].disconnect(), a(n);
    let o = new MutationObserver((e) => {
        for (let n of e)
            if ('childList' === n.type && 0 !== n.addedNodes.length && ![...r, ...i].some((e) => e.contains(n.target))) {
                for (let e of n.removedNodes) e instanceof Element && (r.delete(e), i.delete(e));
                for (let e of n.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && ('true' === e.dataset.liveAnnouncer || 'true' === e.dataset.reactAriaTopLayer) ? r.add(e) : e instanceof Element && a(e);
            }
    });
    o.observe(n, {
        childList: !0,
        subtree: !0
    });
    let l = {
        observe() {
            o.observe(n, {
                childList: !0,
                subtree: !0
            });
        },
        disconnect() {
            o.disconnect();
        }
    };
    return (
        eH.push(l),
        () => {
            for (let e of (o.disconnect(), i)) {
                let n = ej.get(e);
                1 === n ? (e.removeAttribute('aria-hidden'), ej.delete(e)) : ej.set(e, n - 1);
            }
            l === eH[eH.length - 1] ? (eH.pop(), eH.length && eH[eH.length - 1].observe()) : eH.splice(eH.indexOf(l), 1);
        }
    );
}
function eW(e, n) {
    let { triggerRef: r, popoverRef: i, isNonModal: a, isKeyboardDismissDisabled: s, shouldCloseOnInteractOutside: o, ...l } = e,
        { overlayProps: u, underlayProps: c } = ey(
            {
                isOpen: n.isOpen,
                onClose: n.close,
                shouldCloseOnBlur: !0,
                isDismissable: !a,
                isKeyboardDismissDisabled: s,
                shouldCloseOnInteractOutside: o
            },
            i
        ),
        {
            overlayProps: d,
            arrowProps: f,
            placement: _
        } = ev({
            ...l,
            targetRef: r,
            overlayRef: i,
            isOpen: n.isOpen,
            onClose: a ? n.close : null
        });
    return (
        eR({ isDisabled: a || !n.isOpen }),
        (0, F.bt)(() => {
            if (n.isOpen && !a && i.current) return eY([i.current]);
        }, [a, n.isOpen, i]),
        {
            popoverProps: (0, F.dG)(u, d),
            arrowProps: f,
            underlayProps: c,
            placement: _
        }
    );
}
let eK = G.createContext(null);
function ez(e) {
    let n = (0, W.Av)(),
        { portalContainer: r = n ? null : document.body, isExiting: i } = e,
        [a, s] = (0, G.useState)(!1),
        o = (0, G.useMemo)(
            () => ({
                contain: a,
                setContain: s
            }),
            [a, s]
        );
    if (!r) return null;
    let l = e.children;
    return (
        !e.disableFocusManagement &&
            (l = G.createElement(
                j.MT,
                {
                    restoreFocus: !0,
                    contain: a && !i
                },
                l
            )),
        (l = G.createElement(eK.Provider, { value: o }, G.createElement(H.mk, null, l))),
        Y.createPortal(l, r)
    );
}
function eq() {
    let e = (0, G.useContext)(eK),
        n = null == e ? void 0 : e.setContain;
    (0, F.bt)(() => {
        null == n || n(!0);
    }, [n]);
}
function eQ(e, n, r) {
    let { overlayProps: i, underlayProps: a } = ey(
        {
            ...e,
            isOpen: n.isOpen,
            onClose: n.close
        },
        r
    );
    return (
        eR({ isDisabled: !n.isOpen }),
        eq(),
        (0, G.useEffect)(() => {
            if (n.isOpen) return eY([r.current]);
        }, [n.isOpen, r]),
        {
            modalProps: (0, F.dG)(i),
            underlayProps: a
        }
    );
}
