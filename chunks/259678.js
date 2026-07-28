"use strict";
let r;
n.d(t, { oP: () => P, vN: () => I, xp: () => A });
var i,
    a = n(582128),
    o = n(477900),
    s = Object.defineProperty,
    l = (e, t, n) => {
        let r;
        return (
            (r = "symbol" != typeof t ? t + "" : t) in e
                ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
                : (e[r] = n),
            n
        );
    },
    u = { exports: {} },
    c = {}.hasOwnProperty;
function d() {
    for (var e = [], t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        if (n) {
            var r = typeof n;
            if ("string" === r || "number" === r) e.push(n);
            else if (Array.isArray(n)) {
                if (n.length) {
                    var i = d.apply(null, n);
                    i && e.push(i);
                }
            } else if ("object" === r) {
                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                    e.push(n.toString());
                    continue;
                }
                for (var a in n) c.call(n, a) && n[a] && e.push(a);
            }
        }
    }
    return e.join(" ");
}
u.exports ? ((d.default = d), (u.exports = d)) : (window.classNames = d);
let f = u.exports;
var p = function (e, t, n, r, i, a, o, s) {
    if (!e) {
        var l;
        if (void 0 === t)
            l = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var u = [n, r, i, a, o, s],
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
let h = /^#[0-9a-f]{3,8}$/i,
    m = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class g {
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
        return e.match(m) ? this.parseColorFnString(e) : e.match(h) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return "transparent" === e ? new g(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!e.match(h) || [6, 8].includes(e.length)) return;
        if ((e = e.replace("#", "")).length < 6) {
            let [t, n, r, i] = e.split("");
            (e = t + t + n + n + r + r), i && (e += i + i);
        }
        let t = e.match(/.{1,2}/g);
        if (null != t)
            return new g(
                parseInt(t[0], 16),
                parseInt(t[1], 16),
                parseInt(t[2], 16),
                null != t[3] ? parseInt(t[3], 16) / 255 : 1,
            );
    }
    static parseColorFnString(e) {
        var t;
        let [, n, r] = null != (t = e.match(m)) ? t : [];
        if (!n || !r) return;
        let i = r
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(",", "").trim())
            .filter((e) => "" !== e)
            .map((e, t) =>
                (function (e, t, n) {
                    if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : (255 * parseFloat(t)) / 100;
                    if ("h" === e[n]) {
                        if (/turn$/.test(t)) return 360 * parseFloat(t);
                        if (/rad$/.test(t)) return 57.3 * parseFloat(t);
                    }
                    return parseFloat(t);
                })(n, e, t),
            );
        if ("hsl" === n.substr(0, 3)) {
            let e = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
                let i = (1 - Math.abs(2 * (n /= 255) - 1)) * (t /= 255),
                    a = i * (1 - Math.abs(((e / 60) % 2) - 1)),
                    o = n - i / 2,
                    s = (
                        e < 60
                            ? [i, a, 0]
                            : e < 120
                              ? [a, i, 0]
                              : e < 180
                                ? [0, i, a]
                                : e < 240
                                  ? [0, a, i]
                                  : e < 300
                                    ? [a, 0, i]
                                    : [i, 0, a]
                    ).map((e) => Math.round((e + o) * 255));
                return { red: s[0], green: s[1], blue: s[2], alpha: r };
            })({ hue: i[0], saturation: i[1], lightness: i[2], alpha: i[3] });
            return new g(e.red, e.green, e.blue, e.alpha);
        }
        return new g(i[0], i[1], i[2], "number" == typeof i[3] ? i[3] : 1);
    }
    toHSL() {
        return (function ({ red: e, green: t, blue: n, alpha: r }) {
            let i = e / 255,
                a = t / 255,
                o = n / 255,
                s = Math.max(i, a, o),
                l = Math.min(i, a, o),
                u = s - l,
                c = (s + l) / 2,
                d = u > 0 ? u / (1 - Math.abs(2 * c - 1)) : 0;
            if (0 === u) return { hue: 0, saturation: d, lightness: c, alpha: r };
            let f = 0;
            switch (s) {
                case i:
                    f = ((a - o) / u) % 6;
                    break;
                case a:
                    f = (o - i) / u + 2;
                    break;
                case o:
                    f = (a - o) / u + 4;
            }
            return { hue: 60 * f, saturation: d, lightness: c, alpha: r };
        })({ red: this.red, green: this.green, blue: this.blue, alpha: this.alpha });
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
function v(e, t) {
    let n = e.alpha;
    return new g(
        (1 - n) * t.red + n * e.red,
        (1 - n) * t.green + n * e.green,
        (1 - n) * t.blue + n * e.blue,
        e.alpha + t.alpha * (1 - e.alpha),
    );
}
function y(e) {
    if (e) return parseInt(e) > 0 ? e : void 0;
}
class b {
    constructor() {
        l(this, "targetElement"),
            l(this, "targetAncestry"),
            l(this, "boundingBox"),
            l(this, "className"),
            l(this, "offset", 0),
            l(this, "zIndex"),
            l(this, "container", null),
            l(this, "themeOptions"),
            l(this, "invalidate", () => null);
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
            this !== r && (null == r || r.hide(), (r = this)),
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
        var t, n, r, i, a, o, s, l;
        let u = null != (n = y(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? n : "0",
            c = null != (i = y(null == (r = e.styles[0]) ? void 0 : r.borderTopRightRadius)) ? i : "0",
            d = null != (o = y(null == (a = e.styles[0]) ? void 0 : a.borderBottomRightRadius)) ? o : "0",
            f = null != (l = y(null == (s = e.styles[0]) ? void 0 : s.borderBottomLeftRadius)) ? l : "0";
        if ("0" !== u || "0" !== c || "0" !== d || "0" !== f) return `${u} ${c} ${d} ${f}`;
    }
    makePositionFromDOMRect(e) {
        var t, n, r, i;
        if (null == this.container) return {};
        let a = this.container.getBoundingClientRect(),
            { scrollTop: o, scrollLeft: s } = this.container,
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
                top: o + e.top - a.top + l,
                width: e.width - (u + d),
                height: e.height - (c + l),
                left: s + e.left - a.left + d,
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
            let n = (function (e) {
                let t = [];
                for (let n of e.styles.slice(1)) {
                    let e = g.parseString(n.backgroundColor);
                    if (null != e) {
                        if (e.alpha > 0.95) return e;
                        t.push(e);
                    }
                }
                return t.push(new g(255, 255, 255, 1)), t.reduce(v);
            })(this.targetAncestry);
            t = {
                ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
                zIndex: null != (e = this.zIndex) ? e : this.getNextZIndexForAncestry(this.targetAncestry),
                "--__adaptive-focus-ring-color": (function (e, t) {
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
                })(n, this.themeOptions),
                "--__adaptive-focus-ring-radius": this.getBorderRadius(this.targetAncestry),
            };
        }
        return t;
    }
}
let _ = new b();
"u" > typeof window && _.setContainer(document.body);
let w = a.createContext(_);
var x = function (e, t, n, r) {
    var i = n ? n.call(r, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var a = Object.keys(e),
        o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
        var u = a[l];
        if (!s(u)) return !1;
        var c = e[u],
            d = t[u];
        if (!1 === (i = n ? n.call(r, c, d, u) : void 0) || (void 0 === i && c !== d)) return !1;
    }
    return !0;
};
let E = !1,
    S,
    k = {};
function T() {
    if (!E) return;
    let e = null == r ? void 0 : r.getStyle();
    null == e || x(e, k) ? null != S && cancelAnimationFrame(S) : ((k = e), null == r || r.invalidate()),
        (S = requestAnimationFrame(T));
}
let C = !1,
    P = {
        get ringsEnabled() {
            return C;
        },
        setRingsEnabled(e) {
            (C = e), null == r || r.invalidate();
        },
        enableAnimationTracking() {
            (E = !0), (S = requestAnimationFrame(T));
        },
        disableAnimationTracking() {
            (E = !1), null != S && cancelAnimationFrame(S);
        },
    };
function A(e) {
    let { containerRef: t, children: n, themeOptions: r } = e,
        i = a.useRef(new b());
    return (
        a.useEffect(() => {
            i.current.setContainer(t.current), i.current.setThemeOptions(r);
        }, [t.current]),
        (0, o.jsxs)(w.Provider, { value: i.current, children: [n, (0, o.jsx)(M, {})] })
    );
}
function M() {
    let e = a.useContext(w),
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
        P.ringsEnabled && e.visible
            ? (0, o.jsx)("div", { className: f("focus-rings-ring", e.className), style: e.getStyle() })
            : null
    );
}
let R =
    "u" > typeof window && (null == (i = window.document) ? void 0 : i.createElement) != null
        ? a.useLayoutEffect
        : a.useEffect;
function I(e) {
    let {
        within: t = !1,
        enabled: n = !0,
        focused: r,
        offset: i = 0,
        focusTarget: o,
        ringTarget: s,
        ringClassName: l,
        focusClassName: u,
        focusWithinClassName: c,
        children: d,
    } = e;
    null != o &&
        p(
            null != s,
            "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.",
        ),
        null != r &&
            p(
                null != s,
                "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.",
            );
    let h = a.useRef(!1),
        [m, g] = a.useState(!1),
        v = a.useContext(w),
        y = a.Children.only(d),
        { onBlur: b, onFocus: _, ...x } = y.props,
        E = a.useMemo(() => ({ className: l, offset: i }), [l, i]);
    R(() => {
        n && v.invalidate();
    }),
        a.useEffect(() => {
            n || v.hide();
        }, [n, v]),
        a.useEffect(
            () => () => {
                h.current && v.hide();
            },
            [v],
        ),
        a.useEffect(() => {
            let e = null == s ? void 0 : s.current;
            null == r || null == e || ((h.current = r), r ? v.showElement(e, E) : !1 === r && v.hide());
        }, [r, E, v, s]),
        R(() => {
            if (null != r) return;
            let e = null == o ? void 0 : o.current,
                n = null == s ? void 0 : s.current;
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
                        (h.current = !0), v.showElement(n, E);
                        return;
                    }
                    g(!0), t && v.showElement(n, E);
                }
            }
            function a() {
                v.hide(), (h.current = !1), g(!1);
            }
        }, [t, E, r, v, o, s]);
    let S = a.useCallback(
            (e) => {
                v.hide(), (h.current = !1), g(!1), null == b || b(e);
            },
            [b, v],
        ),
        k = a.useCallback(
            (e) => {
                let n = null == s ? void 0 : s.current;
                e.currentTarget === e.target
                    ? ((h.current = !0), v.showElement(null != n ? n : e.currentTarget, E))
                    : (g(!0), t && v.showElement(null != n ? n : e.currentTarget, E)),
                    null == _ || _(e);
            },
            [s, t, _, v, E],
        );
    return n && null == o && null == r
        ? a.cloneElement(y, {
              ...x,
              className: f(x.className, h.current ? u : void 0, m ? c : void 0),
              onBlur: S,
              onFocus: k,
          })
        : y;
}
