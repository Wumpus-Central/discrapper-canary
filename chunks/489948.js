let i;
n.d(t, {
    Jc: () => F,
    dx: () => M,
    tE: () => H
});
var r,
    a,
    s = n(192379),
    o = Object.defineProperty,
    l = (e, t, n) =>
        t in e
            ? o(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n
              })
            : (e[t] = n),
    u = (e, t, n) => (l(e, 'symbol' != typeof t ? t + '' : t, n), n),
    c = { exports: {} };
!(function (e) {
    !(function () {
        var t = {}.hasOwnProperty;
        function n() {
            for (var e = [], i = 0; i < arguments.length; i++) {
                var r = arguments[i];
                if (r) {
                    var a = typeof r;
                    if ('string' === a || 'number' === a) e.push(r);
                    else if (Array.isArray(r)) {
                        if (r.length) {
                            var s = n.apply(null, r);
                            s && e.push(s);
                        }
                    } else if ('object' === a) {
                        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes('[native code]')) {
                            e.push(r.toString());
                            continue;
                        }
                        for (var o in r) t.call(r, o) && r[o] && e.push(o);
                    }
                }
            }
            return e.join(' ');
        }
        e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
})(c);
let d = c.exports;
var f = function (e, t, n, i, r, a, s, o) {
    if (!e) {
        var l;
        if (void 0 === t) l = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var u = [n, i, r, a, s, o],
                c = 0;
            (l = Error(
                t.replace(/%s/g, function () {
                    return u[c++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((l.framesToPop = 1), l);
    }
};
function _(e, t, n) {
    if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : (255 * parseFloat(t)) / 100;
    if ('h' === e[n]) {
        if (/turn$/.test(t)) return 360 * parseFloat(t);
        if (/rad$/.test(t)) return 57.3 * parseFloat(t);
    }
    return parseFloat(t);
}
function p({ hue: e, saturation: t, lightness: n, alpha: i }) {
    let r;
    let a = (1 - Math.abs(2 * (n /= 255) - 1)) * (t /= 255),
        s = a * (1 - Math.abs(((e / 60) % 2) - 1)),
        o = n - a / 2,
        l = (r = e < 60 ? [a, s, 0] : e < 120 ? [s, a, 0] : e < 180 ? [0, a, s] : e < 240 ? [0, s, a] : e < 300 ? [s, 0, a] : [a, 0, s]).map((e) => Math.round((e + o) * 255));
    return {
        red: l[0],
        green: l[1],
        blue: l[2],
        alpha: i
    };
}
function h({ red: e, green: t, blue: n, alpha: i }) {
    let r = e / 255,
        a = t / 255,
        s = n / 255,
        o = Math.max(r, a, s),
        l = Math.min(r, a, s),
        u = o - l,
        c = (o + l) / 2,
        d = u > 0 ? u / (1 - Math.abs(2 * c - 1)) : 0;
    if (0 === u)
        return {
            hue: 0,
            saturation: d,
            lightness: c,
            alpha: i
        };
    let f = 0;
    switch (o) {
        case r:
            f = ((a - s) / u) % 6;
            break;
        case a:
            f = (s - r) / u + 2;
            break;
        case s:
            f = (a - s) / u + 4;
    }
    return {
        hue: 60 * f,
        saturation: d,
        lightness: c,
        alpha: i
    };
}
let m = /^#[0-9a-f]{3,8}$/i,
    g = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class E {
    constructor(e, t, n, i) {
        (this.red = e), (this.green = t), (this.blue = n), (this.alpha = i);
    }
    toHexString() {
        var e = Math.round(this.red).toString(16),
            t = Math.round(this.green).toString(16),
            n = Math.round(this.blue).toString(16);
        return '#' + (this.red > 15.5 ? e : '0' + e) + (this.green > 15.5 ? t : '0' + t) + (this.blue > 15.5 ? n : '0' + n);
    }
    static parseString(e) {
        return e.match(g) ? this.parseColorFnString(e) : e.match(m) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return 'transparent' === e ? new E(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(!e.match(m) || [6, 8].includes(e.length))) {
            if ((e = e.replace('#', '')).length < 6) {
                let [t, n, i, r] = e.split('');
                (e = t + t + n + n + i + i), r && (e += r + r);
            }
            var t = e.match(/.{1,2}/g);
            if (null != t) return new E(parseInt(t[0], 16), parseInt(t[1], 16), parseInt(t[2], 16), null != t[3] ? parseInt(t[3], 16) / 255 : 1);
        }
    }
    static parseColorFnString(e) {
        var t;
        let [, n, i] = null != (t = e.match(g)) ? t : [];
        if (!n || !i) return;
        let r = i
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(',', '').trim())
            .filter((e) => '' !== e)
            .map((e, t) => _(n, e, t));
        if ('hsl' === n.substr(0, 3)) {
            let e = p({
                hue: r[0],
                saturation: r[1],
                lightness: r[2],
                alpha: r[3]
            });
            return new E(e.red, e.green, e.blue, e.alpha);
        }
        return new E(r[0], r[1], r[2], 'number' == typeof r[3] ? r[3] : 1);
    }
    toHSL() {
        return h({
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha
        });
    }
    getRelativeLuminance() {
        var e = this.red / 255,
            t = this.green / 255,
            n = this.blue / 255;
        return 0.2126 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) + 0.7152 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) + 0.0722 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
    }
}
function v(e, t) {
    let n = e.alpha,
        i = (1 - n) * t.red + n * e.red,
        r = (1 - n) * t.green + n * e.green;
    return new E(i, r, (1 - n) * t.blue + n * e.blue, e.alpha + t.alpha * (1 - e.alpha));
}
function y(e, t) {
    if (null == e) return 'var(--focus-primary)';
    let { saturation: n } = e.toHSL(),
        i = e.getRelativeLuminance();
    return n <= 0.4 ? 'var(--focus-primary)' : 'u' > typeof t ? (i < (t.brightnessTreshold || 0.2) ? 'var(--focus-light, rgba(255,255,255,0.7))' : 'var(--focus-dark, rgba(0, 0, 0, 0.85))') : 'rgba(255,255,255,0.7)';
}
function I(e) {
    let t = [];
    for (let n of e.styles.slice(1)) {
        let e = E.parseString(n.backgroundColor);
        if (null != e) {
            if (e.alpha > 0.95) return e;
            t.push(e);
        }
    }
    return t.push(new E(255, 255, 255, 1)), t.reduce(v);
}
let b = '--__adaptive-focus-ring-color',
    T = '--__adaptive-focus-ring-radius';
function S(e) {
    e !== i && (null == i || i.hide(), (i = e));
}
function A(e) {
    if (e) return parseInt(e) > 0 ? e : void 0;
}
class N {
    constructor() {
        u(this, 'targetElement'), u(this, 'targetAncestry'), u(this, 'boundingBox'), u(this, 'className'), u(this, 'offset', 0), u(this, 'zIndex'), u(this, 'container', null), u(this, 'themeOptions'), u(this, 'invalidate', () => null);
    }
    setContainer(e) {
        this.container = e;
    }
    setThemeOptions(e) {
        this.themeOptions = e;
    }
    showElement(e, t = {}) {
        var n;
        (this.targetElement = e), (this.targetAncestry = this.getElementAncestors(this.targetElement)), (this.boundingBox = void 0), (this.className = t.className), (this.offset = null != (n = t.offset) ? n : 0), (this.zIndex = t.zIndex), S(this), this.invalidate();
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
        let t = [],
            n = [],
            i = e;
        for (; null != i; ) t.push(i), 'u' > typeof window && n.push(window.getComputedStyle(i)), (i = i.parentElement);
        return {
            elements: t,
            styles: n
        };
    }
    getNextZIndexForAncestry(e) {
        for (let t = 0; t < e.elements.length; t++) {
            let n = e.elements[t],
                i = parseInt(e.styles[t].getPropertyValue('z-index'));
            if (!isNaN(i)) return i + 1;
            if (n === this.container) break;
        }
    }
    getBorderRadius(e) {
        var t, n, i, r, a, s, o, l;
        let u = null != (n = A(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? n : '0',
            c = null != (r = A(null == (i = e.styles[0]) ? void 0 : i.borderTopRightRadius)) ? r : '0',
            d = null != (s = A(null == (a = e.styles[0]) ? void 0 : a.borderBottomRightRadius)) ? s : '0',
            f = null != (l = A(null == (o = e.styles[0]) ? void 0 : o.borderBottomLeftRadius)) ? l : '0';
        if (!('0' === u && '0' === c && '0' === d && '0' === f)) return `${u} ${c} ${d} ${f}`;
    }
    makePositionFromDOMRect(e) {
        var t, n, i, r;
        if (null == this.container) return {};
        let a = this.container.getBoundingClientRect(),
            { scrollTop: s, scrollLeft: o } = this.container,
            l = 0,
            u = 0,
            c = 0,
            d = 0;
        return (
            'number' == typeof this.offset ? ((l = this.offset), (u = this.offset), (c = this.offset), (d = this.offset)) : ((l = null != (t = this.offset.top) ? t : 0), (u = null != (n = this.offset.right) ? n : 0), (c = null != (i = this.offset.bottom) ? i : 0), (d = null != (r = this.offset.left) ? r : 0)),
            {
                top: s + e.top - a.top + l,
                width: e.width - (u + d),
                height: e.height - (c + l),
                left: o + e.left - a.left + d
            }
        );
    }
    getStyle() {
        var e;
        let t = {};
        if (
            (null != this.boundingBox &&
                (t = {
                    ...this.makePositionFromDOMRect(this.boundingBox),
                    zIndex: this.zIndex
                }),
            null != this.targetElement && null != this.targetAncestry)
        ) {
            let n = I(this.targetAncestry);
            t = {
                ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
                zIndex: null != (e = this.zIndex) ? e : this.getNextZIndexForAncestry(this.targetAncestry),
                [b]: y(n, this.themeOptions),
                [T]: this.getBorderRadius(this.targetAncestry)
            };
        }
        return t;
    }
}
let C = new N();
'u' > typeof window && C.setContainer(document.body);
let R = s.createContext(C);
var O = function (e, t, n, i) {
    var r = n ? n.call(i, e, t) : void 0;
    if (void 0 !== r) return !!r;
    if (e === t) return !0;
    if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
    var a = Object.keys(e),
        s = Object.keys(t);
    if (a.length !== s.length) return !1;
    for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
        var u = a[l];
        if (!o(u)) return !1;
        var c = e[u],
            d = t[u];
        if (!1 === (r = n ? n.call(i, c, d, u) : void 0) || (void 0 === r && c !== d)) return !1;
    }
    return !0;
};
let D = !1,
    x,
    L = {};
function P() {
    if (!D) return;
    let e = null == i ? void 0 : i.getStyle();
    null == e || O(e, L) ? null != x && cancelAnimationFrame(x) : ((L = e), null == i || i.invalidate()), (x = requestAnimationFrame(P));
}
let w = !1,
    M = {
        get ringsEnabled() {
            return w;
        },
        setRingsEnabled(e) {
            (w = e), null == i || i.invalidate();
        },
        enableAnimationTracking() {
            (D = !0), (x = requestAnimationFrame(P));
        },
        disableAnimationTracking() {
            (D = !1), null != x && cancelAnimationFrame(x);
        }
    };
var k = { exports: {} },
    U = {};
function G() {
    if (r) return U;
    r = 1;
    var e = s,
        t = Symbol.for('react.element'),
        n = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
    function l(e, n, r) {
        var s,
            l = {},
            u = null,
            c = null;
        for (s in (void 0 !== r && (u = '' + r), void 0 !== n.key && (u = '' + n.key), void 0 !== n.ref && (c = n.ref), n)) i.call(n, s) && !o.hasOwnProperty(s) && (l[s] = n[s]);
        if (e && e.defaultProps) for (s in (n = e.defaultProps)) void 0 === l[s] && (l[s] = n[s]);
        return {
            $$typeof: t,
            type: e,
            key: u,
            ref: c,
            props: l,
            _owner: a.current
        };
    }
    return (U.Fragment = n), (U.jsx = l), (U.jsxs = l), U;
}
!(function (e) {
    e.exports = G();
})(k);
let B = k.exports.jsx,
    Z = k.exports.jsxs;
function F(e) {
    let { containerRef: t, children: n, themeOptions: i } = e,
        r = s.useRef(new N());
    return (
        s.useEffect(() => {
            r.current.setContainer(t.current), r.current.setThemeOptions(i);
        }, [t.current]),
        Z(R.Provider, {
            value: r.current,
            children: [n, B(V, {})]
        })
    );
}
function V() {
    let e = s.useContext(R),
        [, t] = s.useState({});
    return (
        s.useEffect(
            () => (
                (e.invalidate = () => t({})),
                () => {
                    e.invalidate = () => null;
                }
            ),
            [e]
        ),
        M.ringsEnabled && e.visible
            ? B('div', {
                  className: d('focus-rings-ring', e.className),
                  style: e.getStyle()
              })
            : null
    );
}
let j = 'u' > typeof window && (null == (a = window.document) ? void 0 : a.createElement) != null ? s.useLayoutEffect : s.useEffect;
function H(e) {
    let { within: t = !1, enabled: n = !0, focused: i, offset: r = 0, focusTarget: a, ringTarget: o, ringClassName: l, focusClassName: u, focusWithinClassName: c, children: _ } = e;
    null != a && f(null != o, 'FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.'), null != i && f(null != o, 'FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.');
    let p = s.useRef(!1),
        [h, m] = s.useState(!1),
        g = s.useContext(R),
        E = s.Children.only(_),
        { onBlur: v, onFocus: y, ...I } = E.props,
        b = s.useMemo(
            () => ({
                className: l,
                offset: r
            }),
            [l, r]
        );
    j(() => {
        n && g.invalidate();
    }),
        s.useEffect(() => {
            n || g.hide();
        }, [n, g]),
        s.useEffect(
            () => () => {
                p.current && g.hide();
            },
            [g]
        ),
        s.useEffect(() => {
            let e = null == o ? void 0 : o.current;
            null == i || null == e || ((p.current = i), i ? g.showElement(e, b) : !1 === i && g.hide());
        }, [i, b, g, o]),
        j(() => {
            if (null != i) return;
            let e = null == a ? void 0 : a.current,
                n = null == o ? void 0 : o.current;
            if (null != e && null != n)
                return (
                    e.addEventListener('focusin', r, !0),
                    e.addEventListener('focusout', s, !0),
                    () => {
                        e.removeEventListener('focusin', r, !0), e.removeEventListener('focusout', s, !0);
                    }
                );
            function r(e) {
                if (null != n) {
                    if (e.currentTarget === e.target) {
                        (p.current = !0), g.showElement(n, b);
                        return;
                    }
                    m(!0), t && g.showElement(n, b);
                }
            }
            function s() {
                g.hide(), (p.current = !1), m(!1);
            }
        }, [t, b, i, g, a, o]);
    let T = s.useCallback(
            (e) => {
                g.hide(), (p.current = !1), m(!1), null == v || v(e);
            },
            [v, g]
        ),
        S = s.useCallback(
            (e) => {
                let n = null == o ? void 0 : o.current;
                e.currentTarget === e.target ? ((p.current = !0), g.showElement(null != n ? n : e.currentTarget, b)) : (m(!0), t && g.showElement(null != n ? n : e.currentTarget, b)), null == y || y(e);
            },
            [o, t, y, g, b]
        );
    return n && null == a && null == i
        ? s.cloneElement(E, {
              ...I,
              className: d(I.className, p.current ? u : void 0, h ? c : void 0),
              onBlur: T,
              onFocus: S
          })
        : E;
}
