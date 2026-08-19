"use strict";
let n;
r.d(t, { oP: () => M, vN: () => I, xp: () => P });
var o,
    i = r(582128),
    a = r(477900),
    s = Object.defineProperty,
    l = (e, t, r) => {
        let n;
        return (
            (n = "symbol" != typeof t ? t + "" : t) in e
                ? s(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
                : (e[n] = r),
            r
        );
    },
    u = { exports: {} },
    c = {}.hasOwnProperty;
function f() {
    for (var e = [], t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        if (r) {
            var n = typeof r;
            if ("string" === n || "number" === n) e.push(r);
            else if (Array.isArray(r)) {
                if (r.length) {
                    var o = f.apply(null, r);
                    o && e.push(o);
                }
            } else if ("object" === n) {
                if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                    e.push(r.toString());
                    continue;
                }
                for (var i in r) c.call(r, i) && r[i] && e.push(i);
            }
        }
    }
    return e.join(" ");
}
u.exports ? ((f.default = f), (u.exports = f)) : (window.classNames = f);
let p = u.exports;
var d = function (e, t, r, n, o, i, a, s) {
    if (!e) {
        var l;
        if (void 0 === t)
            l = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var u = [r, n, o, i, a, s],
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
class v {
    constructor(e, t, r, n) {
        (this.red = e), (this.green = t), (this.blue = r), (this.alpha = n);
    }
    toHexString() {
        let e = Math.round(this.red).toString(16),
            t = Math.round(this.green).toString(16),
            r = Math.round(this.blue).toString(16);
        return (
            "#" + (this.red > 15.5 ? e : "0" + e) + (this.green > 15.5 ? t : "0" + t) + (this.blue > 15.5 ? r : "0" + r)
        );
    }
    static parseString(e) {
        return e.match(m) ? this.parseColorFnString(e) : e.match(h) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return "transparent" === e ? new v(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!e.match(h) || [6, 8].includes(e.length)) return;
        if ((e = e.replace("#", "")).length < 6) {
            let [t, r, n, o] = e.split("");
            (e = t + t + r + r + n + n), o && (e += o + o);
        }
        let t = e.match(/.{1,2}/g);
        if (null != t)
            return new v(
                parseInt(t[0], 16),
                parseInt(t[1], 16),
                parseInt(t[2], 16),
                null != t[3] ? parseInt(t[3], 16) / 255 : 1,
            );
    }
    static parseColorFnString(e) {
        var t;
        let [, r, n] = null != (t = e.match(m)) ? t : [];
        if (!r || !n) return;
        let o = n
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(",", "").trim())
            .filter((e) => "" !== e)
            .map((e, t) =>
                (function (e, t, r) {
                    if (/%$/.test(t)) return 3 === r ? parseFloat(t) / 100 : (255 * parseFloat(t)) / 100;
                    if ("h" === e[r]) {
                        if (/turn$/.test(t)) return 360 * parseFloat(t);
                        if (/rad$/.test(t)) return 57.3 * parseFloat(t);
                    }
                    return parseFloat(t);
                })(r, e, t),
            );
        if ("hsl" === r.substr(0, 3)) {
            let e = (function ({ hue: e, saturation: t, lightness: r, alpha: n }) {
                let o = (1 - Math.abs(2 * (r /= 255) - 1)) * (t /= 255),
                    i = o * (1 - Math.abs(((e / 60) % 2) - 1)),
                    a = r - o / 2,
                    s = (
                        e < 60
                            ? [o, i, 0]
                            : e < 120
                              ? [i, o, 0]
                              : e < 180
                                ? [0, o, i]
                                : e < 240
                                  ? [0, i, o]
                                  : e < 300
                                    ? [i, 0, o]
                                    : [o, 0, i]
                    ).map((e) => Math.round((e + a) * 255));
                return { red: s[0], green: s[1], blue: s[2], alpha: n };
            })({ hue: o[0], saturation: o[1], lightness: o[2], alpha: o[3] });
            return new v(e.red, e.green, e.blue, e.alpha);
        }
        return new v(o[0], o[1], o[2], "number" == typeof o[3] ? o[3] : 1);
    }
    toHSL() {
        return (function ({ red: e, green: t, blue: r, alpha: n }) {
            let o = e / 255,
                i = t / 255,
                a = r / 255,
                s = Math.max(o, i, a),
                l = Math.min(o, i, a),
                u = s - l,
                c = (s + l) / 2,
                f = u > 0 ? u / (1 - Math.abs(2 * c - 1)) : 0;
            if (0 === u) return { hue: 0, saturation: f, lightness: c, alpha: n };
            let p = 0;
            switch (s) {
                case o:
                    p = ((i - a) / u) % 6;
                    break;
                case i:
                    p = (a - o) / u + 2;
                    break;
                case a:
                    p = (i - a) / u + 4;
            }
            return { hue: 60 * p, saturation: f, lightness: c, alpha: n };
        })({ red: this.red, green: this.green, blue: this.blue, alpha: this.alpha });
    }
    getRelativeLuminance() {
        let e = this.red / 255,
            t = this.green / 255,
            r = this.blue / 255;
        return (
            0.2126 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) +
            0.7152 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
            0.0722 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4))
        );
    }
}
function y(e, t) {
    let r = e.alpha;
    return new v(
        (1 - r) * t.red + r * e.red,
        (1 - r) * t.green + r * e.green,
        (1 - r) * t.blue + r * e.blue,
        e.alpha + t.alpha * (1 - e.alpha),
    );
}
function g(e) {
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
        var r;
        (this.targetElement = e),
            (this.targetAncestry = this.getElementAncestors(this.targetElement)),
            (this.boundingBox = void 0),
            (this.className = t.className),
            (this.offset = null != (r = t.offset) ? r : 0),
            (this.zIndex = t.zIndex),
            this !== n && (null == n || n.hide(), (n = this)),
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
            r = [],
            n = e;
        for (; null != n; ) t.push(n), "u" > typeof window && r.push(window.getComputedStyle(n)), (n = n.parentElement);
        return { elements: t, styles: r };
    }
    getNextZIndexForAncestry(e) {
        for (let t = 0; t < e.elements.length; t++) {
            let r = e.elements[t],
                n = parseInt(e.styles[t].getPropertyValue("z-index"));
            if (!isNaN(n)) return n + 1;
            if (r === this.container) break;
        }
    }
    getBorderRadius(e) {
        var t, r, n, o, i, a, s, l;
        let u = null != (r = g(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? r : "0",
            c = null != (o = g(null == (n = e.styles[0]) ? void 0 : n.borderTopRightRadius)) ? o : "0",
            f = null != (a = g(null == (i = e.styles[0]) ? void 0 : i.borderBottomRightRadius)) ? a : "0",
            p = null != (l = g(null == (s = e.styles[0]) ? void 0 : s.borderBottomLeftRadius)) ? l : "0";
        if ("0" !== u || "0" !== c || "0" !== f || "0" !== p) return `${u} ${c} ${f} ${p}`;
    }
    makePositionFromDOMRect(e) {
        var t, r, n, o;
        if (null == this.container) return {};
        let i = this.container.getBoundingClientRect(),
            { scrollTop: a, scrollLeft: s } = this.container,
            l = 0,
            u = 0,
            c = 0,
            f = 0;
        return (
            "number" == typeof this.offset
                ? ((l = this.offset), (u = this.offset), (c = this.offset), (f = this.offset))
                : ((l = null != (t = this.offset.top) ? t : 0),
                  (u = null != (r = this.offset.right) ? r : 0),
                  (c = null != (n = this.offset.bottom) ? n : 0),
                  (f = null != (o = this.offset.left) ? o : 0)),
            {
                top: a + e.top - i.top + l,
                width: e.width - (u + f),
                height: e.height - (c + l),
                left: s + e.left - i.left + f,
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
            let r = (function (e) {
                let t = [];
                for (let r of e.styles.slice(1)) {
                    let e = v.parseString(r.backgroundColor);
                    if (null != e) {
                        if (e.alpha > 0.95) return e;
                        t.push(e);
                    }
                }
                return t.push(new v(255, 255, 255, 1)), t.reduce(y);
            })(this.targetAncestry);
            t = {
                ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
                zIndex: null != (e = this.zIndex) ? e : this.getNextZIndexForAncestry(this.targetAncestry),
                "--__adaptive-focus-ring-color": (function (e, t) {
                    if (null == e) return "var(--focus-primary)";
                    let { saturation: r } = e.toHSL(),
                        n = e.getRelativeLuminance();
                    return r <= 0.4
                        ? "var(--focus-primary)"
                        : "u" > typeof t
                          ? n < (t.brightnessTreshold || 0.2)
                              ? "var(--focus-light, rgba(255,255,255,0.7))"
                              : "var(--focus-dark, rgba(0, 0, 0, 0.85))"
                          : "rgba(255,255,255,0.7)";
                })(r, this.themeOptions),
                "--__adaptive-focus-ring-radius": this.getBorderRadius(this.targetAncestry),
            };
        }
        return t;
    }
}
let w = new b();
"u" > typeof window && w.setContainer(document.body);
let _ = i.createContext(w);
var S = function (e, t, r, n) {
    var o = r ? r.call(n, e, t) : void 0;
    if (void 0 !== o) return !!o;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var i = Object.keys(e),
        a = Object.keys(t);
    if (i.length !== a.length) return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < i.length; l++) {
        var u = i[l];
        if (!s(u)) return !1;
        var c = e[u],
            f = t[u];
        if (!1 === (o = r ? r.call(n, c, f, u) : void 0) || (void 0 === o && c !== f)) return !1;
    }
    return !0;
};
let E = !1,
    x,
    k = {};
function C() {
    if (!E) return;
    let e = null == n ? void 0 : n.getStyle();
    null == e || S(e, k) ? null != x && cancelAnimationFrame(x) : ((k = e), null == n || n.invalidate()),
        (x = requestAnimationFrame(C));
}
let T = !1,
    M = {
        get ringsEnabled() {
            return T;
        },
        setRingsEnabled(e) {
            (T = e), null == n || n.invalidate();
        },
        enableAnimationTracking() {
            (E = !0), (x = requestAnimationFrame(C));
        },
        disableAnimationTracking() {
            (E = !1), null != x && cancelAnimationFrame(x);
        },
    };
function P(e) {
    let { containerRef: t, children: r, themeOptions: n } = e,
        o = i.useRef(new b());
    return (
        i.useEffect(() => {
            o.current.setContainer(t.current), o.current.setThemeOptions(n);
        }, [t.current]),
        (0, a.jsxs)(_.Provider, { value: o.current, children: [r, (0, a.jsx)(A, {})] })
    );
}
function A() {
    let e = i.useContext(_),
        [, t] = i.useState({});
    return (
        i.useEffect(
            () => (
                (e.invalidate = () => t({})),
                () => {
                    e.invalidate = () => null;
                }
            ),
            [e],
        ),
        M.ringsEnabled && e.visible
            ? (0, a.jsx)("div", { className: p("focus-rings-ring", e.className), style: e.getStyle() })
            : null
    );
}
let O =
    "u" > typeof window && (null == (o = window.document) ? void 0 : o.createElement) != null
        ? i.useLayoutEffect
        : i.useEffect;
function I(e) {
    let {
        within: t = !1,
        enabled: r = !0,
        focused: n,
        offset: o = 0,
        focusTarget: a,
        ringTarget: s,
        ringClassName: l,
        focusClassName: u,
        focusWithinClassName: c,
        children: f,
    } = e;
    null != a &&
        d(
            null != s,
            "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.",
        ),
        null != n &&
            d(
                null != s,
                "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.",
            );
    let h = i.useRef(!1),
        [m, v] = i.useState(!1),
        y = i.useContext(_),
        g = i.Children.only(f),
        { onBlur: b, onFocus: w, ...S } = g.props,
        E = i.useMemo(() => ({ className: l, offset: o }), [l, o]);
    O(() => {
        r && y.invalidate();
    }),
        i.useEffect(() => {
            r || y.hide();
        }, [r, y]),
        i.useEffect(
            () => () => {
                h.current && y.hide();
            },
            [y],
        ),
        i.useEffect(() => {
            let e = null == s ? void 0 : s.current;
            null == n || null == e || ((h.current = n), n ? y.showElement(e, E) : !1 === n && y.hide());
        }, [n, E, y, s]),
        O(() => {
            if (null != n) return;
            let e = null == a ? void 0 : a.current,
                r = null == s ? void 0 : s.current;
            if (null != e && null != r)
                return (
                    e.addEventListener("focusin", o, !0),
                    e.addEventListener("focusout", i, !0),
                    () => {
                        e.removeEventListener("focusin", o, !0), e.removeEventListener("focusout", i, !0);
                    }
                );
            function o(e) {
                if (null != r) {
                    if (e.currentTarget === e.target) {
                        (h.current = !0), y.showElement(r, E);
                        return;
                    }
                    v(!0), t && y.showElement(r, E);
                }
            }
            function i() {
                y.hide(), (h.current = !1), v(!1);
            }
        }, [t, E, n, y, a, s]);
    let x = i.useCallback(
            (e) => {
                y.hide(), (h.current = !1), v(!1), null == b || b(e);
            },
            [b, y],
        ),
        k = i.useCallback(
            (e) => {
                let r = null == s ? void 0 : s.current;
                e.currentTarget === e.target
                    ? ((h.current = !0), y.showElement(null != r ? r : e.currentTarget, E))
                    : (v(!0), t && y.showElement(null != r ? r : e.currentTarget, E)),
                    null == w || w(e);
            },
            [s, t, w, y, E],
        );
    return r && null == a && null == n
        ? i.cloneElement(g, {
              ...S,
              className: p(S.className, h.current ? u : void 0, m ? c : void 0),
              onBlur: x,
              onFocus: k,
          })
        : g;
}
