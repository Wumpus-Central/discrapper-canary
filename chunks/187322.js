"use strict";
let r;
n.d(t, { oP: () => M, vN: () => V, xp: () => k });
var i,
    a = n(64700),
    s = n(627968),
    o = Object.defineProperty,
    l = (e, t, n) => (t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
    u = (e, t, n) => (l(e, "symbol" != typeof t ? t + "" : t, n), n),
    c = { exports: {} };
!(function (e) {
    !(function () {
        var t = {}.hasOwnProperty;
        function n() {
            for (var e = [], r = 0; r < arguments.length; r++) {
                var i = arguments[r];
                if (i) {
                    var a = typeof i;
                    if ("string" === a || "number" === a) e.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var s = n.apply(null, i);
                            s && e.push(s);
                        }
                    } else if ("object" === a) {
                        if (
                            i.toString !== Object.prototype.toString &&
                            !i.toString.toString().includes("[native code]")
                        ) {
                            e.push(i.toString());
                            continue;
                        }
                        for (var o in i) t.call(i, o) && i[o] && e.push(o);
                    }
                }
            }
            return e.join(" ");
        }
        e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
})(c);
let d = c.exports;
var _ = function (e, t, n, r, i, a, s, o) {
    if (!e) {
        var l;
        if (void 0 === t)
            l = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var u = [n, r, i, a, s, o],
                c = 0;
            (l = Error(
                t.replace(/%s/g, function () {
                    return u[c++];
                }),
            )).name = "Invariant Violation";
        }
        throw ((l.framesToPop = 1), l);
    }
};
function f(e, t, n) {
    if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : (255 * parseFloat(t)) / 100;
    if ("h" === e[n]) {
        if (/turn$/.test(t)) return 360 * parseFloat(t);
        if (/rad$/.test(t)) return 57.3 * parseFloat(t);
    }
    return parseFloat(t);
}
function p({ hue: e, saturation: t, lightness: n, alpha: r }) {
    let i,
        a = (1 - Math.abs(2 * (n /= 255) - 1)) * (t /= 255),
        s = a * (1 - Math.abs(((e / 60) % 2) - 1)),
        o = n - a / 2,
        l = (i =
            e < 60
                ? [a, s, 0]
                : e < 120
                  ? [s, a, 0]
                  : e < 180
                    ? [0, a, s]
                    : e < 240
                      ? [0, s, a]
                      : e < 300
                        ? [s, 0, a]
                        : [a, 0, s]).map((e) => Math.round((e + o) * 255));
    return { red: l[0], green: l[1], blue: l[2], alpha: r };
}
function h({ red: e, green: t, blue: n, alpha: r }) {
    let i = e / 255,
        a = t / 255,
        s = n / 255,
        o = Math.max(i, a, s),
        l = Math.min(i, a, s),
        u = o - l,
        c = (o + l) / 2,
        d = u > 0 ? u / (1 - Math.abs(2 * c - 1)) : 0;
    if (0 === u) return { hue: 0, saturation: d, lightness: c, alpha: r };
    let _ = 0;
    switch (o) {
        case i:
            _ = ((a - s) / u) % 6;
            break;
        case a:
            _ = (s - i) / u + 2;
            break;
        case s:
            _ = (a - s) / u + 4;
    }
    return { hue: 60 * _, saturation: d, lightness: c, alpha: r };
}
let m = /^#[0-9a-f]{3,8}$/i,
    g = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class E {
    constructor(e, t, n, r) {
        (this.red = e), (this.green = t), (this.blue = n), (this.alpha = r);
    }
    toHexString() {
        let e = Math.round(this.red).toString(16),
            t = Math.round(this.green).toString(16),
            n = Math.round(this.blue).toString(16);
        return (
            "#" + (this.red > 15.5 ? e : "0" + e) + (this.green > 15.5 ? t : "0" + t) + (this.blue > 15.5 ? n : "0" + n)
        );
    }
    static parseString(e) {
        return e.match(g) ? this.parseColorFnString(e) : e.match(m) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return "transparent" === e ? new E(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!e.match(m) || [6, 8].includes(e.length)) return;
        if ((e = e.replace("#", "")).length < 6) {
            let [t, n, r, i] = e.split("");
            (e = t + t + n + n + r + r), i && (e += i + i);
        }
        let t = e.match(/.{1,2}/g);
        if (null != t)
            return new E(
                parseInt(t[0], 16),
                parseInt(t[1], 16),
                parseInt(t[2], 16),
                null != t[3] ? parseInt(t[3], 16) / 255 : 1,
            );
    }
    static parseColorFnString(e) {
        var t;
        let [, n, r] = null != (t = e.match(g)) ? t : [];
        if (!n || !r) return;
        let i = r
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(",", "").trim())
            .filter((e) => "" !== e)
            .map((e, t) => f(n, e, t));
        if ("hsl" === n.substr(0, 3)) {
            let e = p({ hue: i[0], saturation: i[1], lightness: i[2], alpha: i[3] });
            return new E(e.red, e.green, e.blue, e.alpha);
        }
        return new E(i[0], i[1], i[2], "number" == typeof i[3] ? i[3] : 1);
    }
    toHSL() {
        return h({ red: this.red, green: this.green, blue: this.blue, alpha: this.alpha });
    }
    getRelativeLuminance() {
        let e = this.red / 255,
            t = this.green / 255,
            n = this.blue / 255;
        return (
            0.2126 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) +
            0.7152 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
            0.0722 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
        );
    }
}
function A(e, t) {
    let n = e.alpha;
    return new E(
        (1 - n) * t.red + n * e.red,
        (1 - n) * t.green + n * e.green,
        (1 - n) * t.blue + n * e.blue,
        e.alpha + t.alpha * (1 - e.alpha),
    );
}
function I(e, t) {
    if (null == e) return "var(--focus-primary)";
    let { saturation: n } = e.toHSL(),
        r = e.getRelativeLuminance();
    return n <= 0.4
        ? "var(--focus-primary)"
        : "u" > typeof t
          ? r < (t.brightnessTreshold || 0.2)
              ? "var(--focus-light, rgba(255,255,255,0.7))"
              : "var(--focus-dark, rgba(0, 0, 0, 0.85))"
          : "rgba(255,255,255,0.7)";
}
function T(e) {
    let t = [];
    for (let n of e.styles.slice(1)) {
        let e = E.parseString(n.backgroundColor);
        if (null != e) {
            if (e.alpha > 0.95) return e;
            t.push(e);
        }
    }
    return t.push(new E(255, 255, 255, 1)), t.reduce(A);
}
let y = "--__adaptive-focus-ring-color",
    S = "--__adaptive-focus-ring-radius";
function v(e) {
    e !== r && (null == r || r.hide(), (r = e));
}
function C(e) {
    if (e) return parseInt(e) > 0 ? e : void 0;
}
class b {
    constructor() {
        u(this, "targetElement"),
            u(this, "targetAncestry"),
            u(this, "boundingBox"),
            u(this, "className"),
            u(this, "offset", 0),
            u(this, "zIndex"),
            u(this, "container", null),
            u(this, "themeOptions"),
            u(this, "invalidate", () => null);
    }
    setContainer(e) {
        this.container = e;
    }
    setThemeOptions(e) {
        this.themeOptions = e;
    }
    showElement(e, t = {}) {
        var n;
        (this.targetElement = e),
            (this.targetAncestry = this.getElementAncestors(this.targetElement)),
            (this.boundingBox = void 0),
            (this.className = t.className),
            (this.offset = null != (n = t.offset) ? n : 0),
            (this.zIndex = t.zIndex),
            v(this),
            this.invalidate();
    }
    hide() {
        (this.targetElement = void 0),
            (this.targetAncestry = void 0),
            (this.boundingBox = void 0),
            (this.className = void 0),
            (this.offset = 0),
            (this.zIndex = void 0),
            this.invalidate();
    }
    get visible() {
        return null != this.targetElement || null != this.boundingBox;
    }
    getElementAncestors(e) {
        if (null == e) return { elements: [], styles: [] };
        let t = [],
            n = [],
            r = e;
        for (; null != r; ) t.push(r), "u" > typeof window && n.push(window.getComputedStyle(r)), (r = r.parentElement);
        return { elements: t, styles: n };
    }
    getNextZIndexForAncestry(e) {
        for (let t = 0; t < e.elements.length; t++) {
            let n = e.elements[t],
                r = parseInt(e.styles[t].getPropertyValue("z-index"));
            if (!isNaN(r)) return r + 1;
            if (n === this.container) break;
        }
    }
    getBorderRadius(e) {
        var t, n, r, i, a, s, o, l;
        let u = null != (n = C(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? n : "0",
            c = null != (i = C(null == (r = e.styles[0]) ? void 0 : r.borderTopRightRadius)) ? i : "0",
            d = null != (s = C(null == (a = e.styles[0]) ? void 0 : a.borderBottomRightRadius)) ? s : "0",
            _ = null != (l = C(null == (o = e.styles[0]) ? void 0 : o.borderBottomLeftRadius)) ? l : "0";
        if ("0" !== u || "0" !== c || "0" !== d || "0" !== _) return `${u} ${c} ${d} ${_}`;
    }
    makePositionFromDOMRect(e) {
        var t, n, r, i;
        if (null == this.container) return {};
        let a = this.container.getBoundingClientRect(),
            { scrollTop: s, scrollLeft: o } = this.container,
            l = 0,
            u = 0,
            c = 0,
            d = 0;
        return (
            "number" == typeof this.offset
                ? ((l = this.offset), (u = this.offset), (c = this.offset), (d = this.offset))
                : ((l = null != (t = this.offset.top) ? t : 0),
                  (u = null != (n = this.offset.right) ? n : 0),
                  (c = null != (r = this.offset.bottom) ? r : 0),
                  (d = null != (i = this.offset.left) ? i : 0)),
            {
                top: s + e.top - a.top + l,
                width: e.width - (u + d),
                height: e.height - (c + l),
                left: o + e.left - a.left + d,
            }
        );
    }
    getStyle() {
        var e;
        let t = {};
        if (
            (null != this.boundingBox &&
                (t = { ...this.makePositionFromDOMRect(this.boundingBox), zIndex: this.zIndex }),
            null != this.targetElement && null != this.targetAncestry)
        ) {
            let n = T(this.targetAncestry);
            t = {
                ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
                zIndex: null != (e = this.zIndex) ? e : this.getNextZIndexForAncestry(this.targetAncestry),
                [y]: I(n, this.themeOptions),
                [S]: this.getBorderRadius(this.targetAncestry),
            };
        }
        return t;
    }
}
let N = new b();
"u" > typeof window && N.setContainer(document.body);
let R = a.createContext(N);
var O = function (e, t, n, r) {
    var i = n ? n.call(r, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var a = Object.keys(e),
        s = Object.keys(t);
    if (a.length !== s.length) return !1;
    for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
        var u = a[l];
        if (!o(u)) return !1;
        var c = e[u],
            d = t[u];
        if (!1 === (i = n ? n.call(r, c, d, u) : void 0) || (void 0 === i && c !== d)) return !1;
    }
    return !0;
};
let D = !1,
    L,
    w = {};
function x() {
    if (!D) return;
    let e = null == r ? void 0 : r.getStyle();
    null == e || O(e, w) ? null != L && cancelAnimationFrame(L) : ((w = e), null == r || r.invalidate()),
        (L = requestAnimationFrame(x));
}
let P = !1,
    M = {
        get ringsEnabled() {
            return P;
        },
        setRingsEnabled(e) {
            (P = e), null == r || r.invalidate();
        },
        enableAnimationTracking() {
            (D = !0), (L = requestAnimationFrame(x));
        },
        disableAnimationTracking() {
            (D = !1), null != L && cancelAnimationFrame(L);
        },
    };
function k(e) {
    let { containerRef: t, children: n, themeOptions: r } = e,
        i = a.useRef(new b());
    return (
        a.useEffect(() => {
            i.current.setContainer(t.current), i.current.setThemeOptions(r);
        }, [t.current]),
        (0, s.jsxs)(R.Provider, { value: i.current, children: [n, (0, s.jsx)(U, {})] })
    );
}
function U() {
    let e = a.useContext(R),
        [, t] = a.useState({});
    return (
        a.useEffect(
            () => (
                (e.invalidate = () => t({})),
                () => {
                    e.invalidate = () => null;
                }
            ),
            [e],
        ),
        M.ringsEnabled && e.visible
            ? (0, s.jsx)("div", { className: d("focus-rings-ring", e.className), style: e.getStyle() })
            : null
    );
}
let G =
    "u" > typeof window && (null == (i = window.document) ? void 0 : i.createElement) != null
        ? a.useLayoutEffect
        : a.useEffect;
function V(e) {
    let {
        within: t = !1,
        enabled: n = !0,
        focused: r,
        offset: i = 0,
        focusTarget: s,
        ringTarget: o,
        ringClassName: l,
        focusClassName: u,
        focusWithinClassName: c,
        children: f,
    } = e;
    null != s &&
        _(
            null != o,
            "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.",
        ),
        null != r &&
            _(
                null != o,
                "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.",
            );
    let p = a.useRef(!1),
        [h, m] = a.useState(!1),
        g = a.useContext(R),
        E = a.Children.only(f),
        { onBlur: A, onFocus: I, ...T } = E.props,
        y = a.useMemo(() => ({ className: l, offset: i }), [l, i]);
    G(() => {
        n && g.invalidate();
    }),
        a.useEffect(() => {
            n || g.hide();
        }, [n, g]),
        a.useEffect(
            () => () => {
                p.current && g.hide();
            },
            [g],
        ),
        a.useEffect(() => {
            let e = null == o ? void 0 : o.current;
            null == r || null == e || ((p.current = r), r ? g.showElement(e, y) : !1 === r && g.hide());
        }, [r, y, g, o]),
        G(() => {
            if (null != r) return;
            let e = null == s ? void 0 : s.current,
                n = null == o ? void 0 : o.current;
            if (null != e && null != n)
                return (
                    e.addEventListener("focusin", i, !0),
                    e.addEventListener("focusout", a, !0),
                    () => {
                        e.removeEventListener("focusin", i, !0), e.removeEventListener("focusout", a, !0);
                    }
                );
            function i(e) {
                if (null != n) {
                    if (e.currentTarget === e.target) {
                        (p.current = !0), g.showElement(n, y);
                        return;
                    }
                    m(!0), t && g.showElement(n, y);
                }
            }
            function a() {
                g.hide(), (p.current = !1), m(!1);
            }
        }, [t, y, r, g, s, o]);
    let S = a.useCallback(
            (e) => {
                g.hide(), (p.current = !1), m(!1), null == A || A(e);
            },
            [A, g],
        ),
        v = a.useCallback(
            (e) => {
                let n = null == o ? void 0 : o.current;
                e.currentTarget === e.target
                    ? ((p.current = !0), g.showElement(null != n ? n : e.currentTarget, y))
                    : (m(!0), t && g.showElement(null != n ? n : e.currentTarget, y)),
                    null == I || I(e);
            },
            [o, t, I, g, y],
        );
    return n && null == s && null == r
        ? a.cloneElement(E, {
              ...T,
              className: d(T.className, p.current ? u : void 0, h ? c : void 0),
              onBlur: S,
              onFocus: v,
          })
        : E;
}
