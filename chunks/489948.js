let i;
r.d(n, {
    Jc: function () {
        return H;
    },
    dx: function () {
        return U;
    },
    tE: function () {
        return K;
    }
});
var a,
    s,
    o,
    l = r(192379),
    u = Object.defineProperty,
    c = (e, n, r) =>
        n in e
            ? u(e, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r
              })
            : (e[n] = r),
    d = (e, n, r) => (c(e, 'symbol' != typeof n ? n + '' : n, r), r),
    f = { exports: {} };
!(function (e) {
    !(function () {
        var n = {}.hasOwnProperty;
        function r() {
            for (var e = [], i = 0; i < arguments.length; i++) {
                var a = arguments[i];
                if (a) {
                    var s = typeof a;
                    if ('string' === s || 'number' === s) e.push(a);
                    else if (Array.isArray(a)) {
                        if (a.length) {
                            var o = r.apply(null, a);
                            o && e.push(o);
                        }
                    } else if ('object' === s) {
                        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes('[native code]')) {
                            e.push(a.toString());
                            continue;
                        }
                        for (var l in a) n.call(a, l) && a[l] && e.push(l);
                    }
                }
            }
            return e.join(' ');
        }
        e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
    })();
})(f);
let _ = f.exports;
var h = function (e, n, r, i, a, s, o, l) {
    if (!e) {
        var u;
        if (void 0 === n) u = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var c = [r, i, a, s, o, l],
                d = 0;
            (u = Error(
                n.replace(/%s/g, function () {
                    return c[d++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((u.framesToPop = 1), u);
    }
};
function p(e, n, r) {
    if (/%$/.test(n)) return 3 === r ? parseFloat(n) / 100 : (255 * parseFloat(n)) / 100;
    if ('h' === e[r]) {
        if (/turn$/.test(n)) return 360 * parseFloat(n);
        if (/rad$/.test(n)) return 57.3 * parseFloat(n);
    }
    return parseFloat(n);
}
function m({ hue: e, saturation: n, lightness: r, alpha: i }) {
    let a;
    n /= 255;
    let s = (1 - Math.abs(2 * (r /= 255) - 1)) * n,
        o = s * (1 - Math.abs(((e / 60) % 2) - 1)),
        l = r - s / 2,
        u = (a = e < 60 ? [s, o, 0] : e < 120 ? [o, s, 0] : e < 180 ? [0, s, o] : e < 240 ? [0, o, s] : e < 300 ? [o, 0, s] : [s, 0, o]).map((e) => Math.round((e + l) * 255));
    return {
        red: u[0],
        green: u[1],
        blue: u[2],
        alpha: i
    };
}
function g({ red: e, green: n, blue: r, alpha: i }) {
    let a = e / 255,
        s = n / 255,
        o = r / 255,
        l = Math.max(a, s, o),
        u = Math.min(a, s, o),
        c = l - u,
        d = (l + u) / 2,
        f = c > 0 ? c / (1 - Math.abs(2 * d - 1)) : 0;
    if (0 === c)
        return {
            hue: 0,
            saturation: f,
            lightness: d,
            alpha: i
        };
    let _ = 0;
    switch (l) {
        case a:
            _ = ((s - o) / c) % 6;
            break;
        case s:
            _ = (o - a) / c + 2;
            break;
        case o:
            _ = (s - o) / c + 4;
    }
    return {
        hue: 60 * _,
        saturation: f,
        lightness: d,
        alpha: i
    };
}
let E = /^#[0-9a-f]{3,8}$/i,
    v = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class I {
    constructor(e, n, r, i) {
        (this.red = e), (this.green = n), (this.blue = r), (this.alpha = i);
    }
    toHexString() {
        var e = Math.round(this.red).toString(16),
            n = Math.round(this.green).toString(16),
            r = Math.round(this.blue).toString(16);
        return '#' + (this.red > 15.5 ? e : '0' + e) + (this.green > 15.5 ? n : '0' + n) + (this.blue > 15.5 ? r : '0' + r);
    }
    static parseString(e) {
        return e.match(v) ? this.parseColorFnString(e) : e.match(E) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return 'transparent' === e ? new I(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(!e.match(E) || [6, 8].includes(e.length))) {
            if ((e = e.replace('#', '')).length < 6) {
                let [n, r, i, a] = e.split('');
                (e = n + n + r + r + i + i), a && (e += a + a);
            }
            var n = e.match(/.{1,2}/g);
            if (null != n) return new I(parseInt(n[0], 16), parseInt(n[1], 16), parseInt(n[2], 16), null != n[3] ? parseInt(n[3], 16) / 255 : 1);
        }
    }
    static parseColorFnString(e) {
        var n;
        let [, r, i] = null != (n = e.match(v)) ? n : [];
        if (!r || !i) return;
        let a = i
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(',', '').trim())
            .filter((e) => '' !== e)
            .map((e, n) => p(r, e, n));
        if ('hsl' === r.substr(0, 3)) {
            let e = m({
                hue: a[0],
                saturation: a[1],
                lightness: a[2],
                alpha: a[3]
            });
            return new I(e.red, e.green, e.blue, e.alpha);
        }
        return new I(a[0], a[1], a[2], 'number' == typeof a[3] ? a[3] : 1);
    }
    toHSL() {
        return g({
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha
        });
    }
    getRelativeLuminance() {
        var e = this.red / 255,
            n = this.green / 255,
            r = this.blue / 255;
        return 0.2126 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) + 0.7152 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)) + 0.0722 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4));
    }
}
function T(e, n) {
    let r = e.alpha,
        i = (1 - r) * n.red + r * e.red,
        a = (1 - r) * n.green + r * e.green,
        s = (1 - r) * n.blue + r * e.blue;
    return new I(i, a, s, e.alpha + n.alpha * (1 - e.alpha));
}
function b(e, n) {
    if (null == e) return 'var(--focus-primary)';
    let { saturation: r } = e.toHSL(),
        i = e.getRelativeLuminance();
    return r <= 0.4 ? 'var(--focus-primary)' : 'u' > typeof n ? (i < (n.brightnessTreshold || 0.2) ? 'var(--focus-light, rgba(255,255,255,0.7))' : 'var(--focus-dark, rgba(0, 0, 0, 0.85))') : 'rgba(255,255,255,0.7)';
}
function y(e) {
    let n = [];
    for (let r of e.styles.slice(1)) {
        let e = I.parseString(r.backgroundColor);
        if (null != e) {
            if (e.alpha > 0.95) return e;
            n.push(e);
        }
    }
    return n.push(new I(255, 255, 255, 1)), n.reduce(T);
}
let S = '--__adaptive-focus-ring-color',
    A = '--__adaptive-focus-ring-radius';
function N(e) {
    e !== i && (null == i || i.hide(), (i = e));
}
function C(e) {
    if (e) return parseInt(e) > 0 ? e : void 0;
}
class R {
    constructor() {
        d(this, 'targetElement'), d(this, 'targetAncestry'), d(this, 'boundingBox'), d(this, 'className'), d(this, 'offset', 0), d(this, 'zIndex'), d(this, 'container', null), d(this, 'themeOptions'), d(this, 'invalidate', () => null);
    }
    setContainer(e) {
        this.container = e;
    }
    setThemeOptions(e) {
        this.themeOptions = e;
    }
    showElement(e, n = {}) {
        var r;
        (this.targetElement = e), (this.targetAncestry = this.getElementAncestors(this.targetElement)), (this.boundingBox = void 0), (this.className = n.className), (this.offset = null != (r = n.offset) ? r : 0), (this.zIndex = n.zIndex), N(this), this.invalidate();
    }
    hide() {
        (this.targetElement = void 0), (this.targetAncestry = void 0), (this.boundingBox = void 0), (this.className = void 0), (this.offset = 0), (this.zIndex = void 0), this.invalidate();
    }
    get visible() {
        return null != this.targetElement || null != this.boundingBox;
    }
    getElementAncestors(e) {
        if (null == e)
            return {
                elements: [],
                styles: []
            };
        let n = [],
            r = [],
            i = e;
        for (; null != i; ) n.push(i), 'u' > typeof window && r.push(window.getComputedStyle(i)), (i = i.parentElement);
        return {
            elements: n,
            styles: r
        };
    }
    getNextZIndexForAncestry(e) {
        for (let n = 0; n < e.elements.length; n++) {
            let r = e.elements[n],
                i = parseInt(e.styles[n].getPropertyValue('z-index'));
            if (!isNaN(i)) return i + 1;
            if (r === this.container) break;
        }
    }
    getBorderRadius(e) {
        var n, r, i, a, s, o, l, u;
        let c = null != (r = C(null == (n = e.styles[0]) ? void 0 : n.borderTopLeftRadius)) ? r : '0',
            d = null != (a = C(null == (i = e.styles[0]) ? void 0 : i.borderTopRightRadius)) ? a : '0',
            f = null != (o = C(null == (s = e.styles[0]) ? void 0 : s.borderBottomRightRadius)) ? o : '0',
            _ = null != (u = C(null == (l = e.styles[0]) ? void 0 : l.borderBottomLeftRadius)) ? u : '0';
        if (!('0' === c && '0' === d && '0' === f && '0' === _)) return `${c} ${d} ${f} ${_}`;
    }
    makePositionFromDOMRect(e) {
        var n, r, i, a;
        if (null == this.container) return {};
        let s = this.container.getBoundingClientRect(),
            { scrollTop: o, scrollLeft: l } = this.container,
            u = 0,
            c = 0,
            d = 0,
            f = 0;
        return (
            'number' == typeof this.offset ? ((u = this.offset), (c = this.offset), (d = this.offset), (f = this.offset)) : ((u = null != (n = this.offset.top) ? n : 0), (c = null != (r = this.offset.right) ? r : 0), (d = null != (i = this.offset.bottom) ? i : 0), (f = null != (a = this.offset.left) ? a : 0)),
            {
                top: o + e.top - s.top + u,
                width: e.width - (c + f),
                height: e.height - (d + u),
                left: l + e.left - s.left + f
            }
        );
    }
    getStyle() {
        var e;
        let n = {};
        if (
            (null != this.boundingBox &&
                (n = {
                    ...this.makePositionFromDOMRect(this.boundingBox),
                    zIndex: this.zIndex
                }),
            null != this.targetElement && null != this.targetAncestry)
        ) {
            let r = y(this.targetAncestry);
            n = {
                ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
                zIndex: null != (e = this.zIndex) ? e : this.getNextZIndexForAncestry(this.targetAncestry),
                [S]: b(r, this.themeOptions),
                [A]: this.getBorderRadius(this.targetAncestry)
            };
        }
        return n;
    }
}
let O = new R();
'u' > typeof window && O.setContainer(document.body);
let D = l.createContext(O);
var L = function (e, n, r, i) {
    var a = r ? r.call(i, e, n) : void 0;
    if (void 0 !== a) return !!a;
    if (e === n) return !0;
    if ('object' != typeof e || !e || 'object' != typeof n || !n) return !1;
    var s = Object.keys(e),
        o = Object.keys(n);
    if (s.length !== o.length) return !1;
    for (var l = Object.prototype.hasOwnProperty.bind(n), u = 0; u < s.length; u++) {
        var c = s[u];
        if (!l(c)) return !1;
        var d = e[c],
            f = n[c];
        if (!1 === (a = r ? r.call(i, d, f, c) : void 0) || (void 0 === a && d !== f)) return !1;
    }
    return !0;
};
let x = !1,
    w,
    P = {};
function M() {
    if (!x) return;
    let e = null == i ? void 0 : i.getStyle();
    null == e || L(e, P) ? null != w && cancelAnimationFrame(w) : ((P = e), null == i || i.invalidate()), (w = requestAnimationFrame(M));
}
let k = !1,
    U = {
        get ringsEnabled() {
            return k;
        },
        setRingsEnabled(e) {
            (k = e), null == i || i.invalidate();
        },
        enableAnimationTracking() {
            (x = !0), (w = requestAnimationFrame(M));
        },
        disableAnimationTracking() {
            (x = !1), null != w && cancelAnimationFrame(w);
        }
    };
var B = { exports: {} },
    G = {};
function Z() {
    if (a) return G;
    a = 1;
    var e = l,
        n = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
    function u(e, r, a) {
        var l,
            u = {},
            c = null,
            d = null;
        for (l in (void 0 !== a && (c = '' + a), void 0 !== r.key && (c = '' + r.key), void 0 !== r.ref && (d = r.ref), r)) i.call(r, l) && !o.hasOwnProperty(l) && (u[l] = r[l]);
        if (e && e.defaultProps) for (l in (r = e.defaultProps)) void 0 === u[l] && (u[l] = r[l]);
        return {
            $$typeof: n,
            type: e,
            key: c,
            ref: d,
            props: u,
            _owner: s.current
        };
    }
    return (G.Fragment = r), (G.jsx = u), (G.jsxs = u), G;
}
var F = {};
!(function (e) {
    e.exports = Z();
})(B);
let V = B.exports.jsx,
    j = B.exports.jsxs;
function H(e) {
    let { containerRef: n, children: r, themeOptions: i } = e,
        a = l.useRef(new R());
    return (
        l.useEffect(() => {
            a.current.setContainer(n.current), a.current.setThemeOptions(i);
        }, [n.current]),
        j(D.Provider, {
            value: a.current,
            children: [r, V(Y, {})]
        })
    );
}
function Y() {
    let e = l.useContext(D),
        [, n] = l.useState({});
    return (
        l.useEffect(
            () => (
                (e.invalidate = () => n({})),
                () => {
                    e.invalidate = () => null;
                }
            ),
            [e]
        ),
        U.ringsEnabled && e.visible
            ? V('div', {
                  className: _('focus-rings-ring', e.className),
                  style: e.getStyle()
              })
            : null
    );
}
let W = 'u' > typeof window && (null == (o = window.document) ? void 0 : o.createElement) != null ? l.useLayoutEffect : l.useEffect;
function K(e) {
    let { within: n = !1, enabled: r = !0, focused: i, offset: a = 0, focusTarget: s, ringTarget: o, ringClassName: u, focusClassName: c, focusWithinClassName: d, children: f } = e;
    null != s && h(null != o, 'FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.'), null != i && h(null != o, 'FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.');
    let p = l.useRef(!1),
        [m, g] = l.useState(!1),
        E = l.useContext(D),
        v = l.Children.only(f),
        { onBlur: I, onFocus: T, ...b } = v.props,
        y = l.useMemo(
            () => ({
                className: u,
                offset: a
            }),
            [u, a]
        );
    W(() => {
        r && E.invalidate();
    }),
        l.useEffect(() => {
            r || E.hide();
        }, [r, E]),
        l.useEffect(
            () => () => {
                p.current && E.hide();
            },
            [E]
        ),
        l.useEffect(() => {
            let e = null == o ? void 0 : o.current;
            null == i || null == e || ((p.current = i), i ? E.showElement(e, y) : !1 === i && E.hide());
        }, [i, y, E, o]),
        W(() => {
            if (null != i) return;
            let e = null == s ? void 0 : s.current,
                r = null == o ? void 0 : o.current;
            if (null != e && null != r)
                return (
                    e.addEventListener('focusin', a, !0),
                    e.addEventListener('focusout', l, !0),
                    () => {
                        e.removeEventListener('focusin', a, !0), e.removeEventListener('focusout', l, !0);
                    }
                );
            function a(e) {
                if (null != r) {
                    if (e.currentTarget === e.target) {
                        (p.current = !0), E.showElement(r, y);
                        return;
                    }
                    g(!0), n && E.showElement(r, y);
                }
            }
            function l() {
                E.hide(), (p.current = !1), g(!1);
            }
        }, [n, y, i, E, s, o]);
    let S = l.useCallback(
            (e) => {
                E.hide(), (p.current = !1), g(!1), null == I || I(e);
            },
            [I, E]
        ),
        A = l.useCallback(
            (e) => {
                let r = null == o ? void 0 : o.current;
                e.currentTarget === e.target ? ((p.current = !0), E.showElement(null != r ? r : e.currentTarget, y)) : (g(!0), n && E.showElement(null != r ? r : e.currentTarget, y)), null == T || T(e);
            },
            [o, n, T, E, y]
        );
    return r && null == s && null == i
        ? l.cloneElement(v, {
              ...b,
              className: _(b.className, p.current ? c : void 0, m ? d : void 0),
              onBlur: S,
              onFocus: A
          })
        : v;
}
