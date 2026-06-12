"use strict";
let i;
n.d(t, { oP: () => O, vN: () => w, xp: () => b });
var r,
    s = n(64700),
    a = n(627968),
    o = Object.defineProperty,
    l = (e, t, n) => {
        let i;
        return (
            (i = "symbol" != typeof t ? t + "" : t) in e
                ? o(e, i, { enumerable: !0, configurable: !0, writable: !0, value: n })
                : (e[i] = n),
            n
        );
    },
    u = { exports: {} },
    c = {}.hasOwnProperty;
function d() {
    for (var e = [], t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        if (n) {
            var i = typeof n;
            if ("string" === i || "number" === i) e.push(n);
            else if (Array.isArray(n)) {
                if (n.length) {
                    var r = d.apply(null, n);
                    r && e.push(r);
                }
            } else if ("object" === i) {
                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                    e.push(n.toString());
                    continue;
                }
                for (var s in n) c.call(n, s) && n[s] && e.push(s);
            }
        }
    }
    return e.join(" ");
}
u.exports ? ((d.default = d), (u.exports = d)) : (window.classNames = d);
let _ = u.exports;
var h = function (e, t, n, i, r, s, a, o) {
    if (!e) {
        var l;
        if (void 0 === t)
            l = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var u = [n, i, r, s, a, o],
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
let f = /^#[0-9a-f]{3,8}$/i,
    p = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class E {
    constructor(e, t, n, i) {
        (this.red = e), (this.green = t), (this.blue = n), (this.alpha = i);
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
        return e.match(p) ? this.parseColorFnString(e) : e.match(f) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return "transparent" === e ? new E(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!e.match(f) || [6, 8].includes(e.length)) return;
        if ((e = e.replace("#", "")).length < 6) {
            let [t, n, i, r] = e.split("");
            (e = t + t + n + n + i + i), r && (e += r + r);
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
        let [, n, i] = null != (t = e.match(p)) ? t : [];
        if (!n || !i) return;
        let r = i
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
            let e = (function ({ hue: e, saturation: t, lightness: n, alpha: i }) {
                let r = (1 - Math.abs(2 * (n /= 255) - 1)) * (t /= 255),
                    s = r * (1 - Math.abs(((e / 60) % 2) - 1)),
                    a = n - r / 2,
                    o = (
                        e < 60
                            ? [r, s, 0]
                            : e < 120
                              ? [s, r, 0]
                              : e < 180
                                ? [0, r, s]
                                : e < 240
                                  ? [0, s, r]
                                  : e < 300
                                    ? [s, 0, r]
                                    : [r, 0, s]
                    ).map((e) => Math.round((e + a) * 255));
                return { red: o[0], green: o[1], blue: o[2], alpha: i };
            })({ hue: r[0], saturation: r[1], lightness: r[2], alpha: r[3] });
            return new E(e.red, e.green, e.blue, e.alpha);
        }
        return new E(r[0], r[1], r[2], "number" == typeof r[3] ? r[3] : 1);
    }
    toHSL() {
        return (function ({ red: e, green: t, blue: n, alpha: i }) {
            let r = e / 255,
                s = t / 255,
                a = n / 255,
                o = Math.max(r, s, a),
                l = Math.min(r, s, a),
                u = o - l,
                c = (o + l) / 2,
                d = u > 0 ? u / (1 - Math.abs(2 * c - 1)) : 0;
            if (0 === u) return { hue: 0, saturation: d, lightness: c, alpha: i };
            let _ = 0;
            switch (o) {
                case r:
                    _ = ((s - a) / u) % 6;
                    break;
                case s:
                    _ = (a - r) / u + 2;
                    break;
                case a:
                    _ = (s - a) / u + 4;
            }
            return { hue: 60 * _, saturation: d, lightness: c, alpha: i };
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
function m(e, t) {
    let n = e.alpha;
    return new E(
        (1 - n) * t.red + n * e.red,
        (1 - n) * t.green + n * e.green,
        (1 - n) * t.blue + n * e.blue,
        e.alpha + t.alpha * (1 - e.alpha),
    );
}
function g(e) {
    if (e) return parseInt(e) > 0 ? e : void 0;
}
class A {
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
            this !== i && (null == i || i.hide(), (i = this)),
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
            i = e;
        for (; null != i; ) t.push(i), "u" > typeof window && n.push(window.getComputedStyle(i)), (i = i.parentElement);
        return { elements: t, styles: n };
    }
    getNextZIndexForAncestry(e) {
        for (let t = 0; t < e.elements.length; t++) {
            let n = e.elements[t],
                i = parseInt(e.styles[t].getPropertyValue("z-index"));
            if (!isNaN(i)) return i + 1;
            if (n === this.container) break;
        }
    }
    getBorderRadius(e) {
        var t, n, i, r, s, a, o, l;
        let u = null != (n = g(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? n : "0",
            c = null != (r = g(null == (i = e.styles[0]) ? void 0 : i.borderTopRightRadius)) ? r : "0",
            d = null != (a = g(null == (s = e.styles[0]) ? void 0 : s.borderBottomRightRadius)) ? a : "0",
            _ = null != (l = g(null == (o = e.styles[0]) ? void 0 : o.borderBottomLeftRadius)) ? l : "0";
        if ("0" !== u || "0" !== c || "0" !== d || "0" !== _) return `${u} ${c} ${d} ${_}`;
    }
    makePositionFromDOMRect(e) {
        var t, n, i, r;
        if (null == this.container) return {};
        let s = this.container.getBoundingClientRect(),
            { scrollTop: a, scrollLeft: o } = this.container,
            l = 0,
            u = 0,
            c = 0,
            d = 0;
        return (
            "number" == typeof this.offset
                ? ((l = this.offset), (u = this.offset), (c = this.offset), (d = this.offset))
                : ((l = null != (t = this.offset.top) ? t : 0),
                  (u = null != (n = this.offset.right) ? n : 0),
                  (c = null != (i = this.offset.bottom) ? i : 0),
                  (d = null != (r = this.offset.left) ? r : 0)),
            {
                top: a + e.top - s.top + l,
                width: e.width - (u + d),
                height: e.height - (c + l),
                left: o + e.left - s.left + d,
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
                    let e = E.parseString(n.backgroundColor);
                    if (null != e) {
                        if (e.alpha > 0.95) return e;
                        t.push(e);
                    }
                }
                return t.push(new E(255, 255, 255, 1)), t.reduce(m);
            })(this.targetAncestry);
            t = {
                ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
                zIndex: null != (e = this.zIndex) ? e : this.getNextZIndexForAncestry(this.targetAncestry),
                "--__adaptive-focus-ring-color": (function (e, t) {
                    if (null == e) return "var(--focus-primary)";
                    let { saturation: n } = e.toHSL(),
                        i = e.getRelativeLuminance();
                    return n <= 0.4
                        ? "var(--focus-primary)"
                        : "u" > typeof t
                          ? i < (t.brightnessTreshold || 0.2)
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
let I = new A();
"u" > typeof window && I.setContainer(document.body);
let T = s.createContext(I);
var S = function (e, t, n, i) {
    var r = n ? n.call(i, e, t) : void 0;
    if (void 0 !== r) return !!r;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var s = Object.keys(e),
        a = Object.keys(t);
    if (s.length !== a.length) return !1;
    for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < s.length; l++) {
        var u = s[l];
        if (!o(u)) return !1;
        var c = e[u],
            d = t[u];
        if (!1 === (r = n ? n.call(i, c, d, u) : void 0) || (void 0 === r && c !== d)) return !1;
    }
    return !0;
};
let y = !1,
    N,
    v = {};
function C() {
    if (!y) return;
    let e = null == i ? void 0 : i.getStyle();
    null == e || S(e, v) ? null != N && cancelAnimationFrame(N) : ((v = e), null == i || i.invalidate()),
        (N = requestAnimationFrame(C));
}
let R = !1,
    O = {
        get ringsEnabled() {
            return R;
        },
        setRingsEnabled(e) {
            (R = e), null == i || i.invalidate();
        },
        enableAnimationTracking() {
            (y = !0), (N = requestAnimationFrame(C));
        },
        disableAnimationTracking() {
            (y = !1), null != N && cancelAnimationFrame(N);
        },
    };
function b(e) {
    let { containerRef: t, children: n, themeOptions: i } = e,
        r = s.useRef(new A());
    return (
        s.useEffect(() => {
            r.current.setContainer(t.current), r.current.setThemeOptions(i);
        }, [t.current]),
        (0, a.jsxs)(T.Provider, { value: r.current, children: [n, (0, a.jsx)(D, {})] })
    );
}
function D() {
    let e = s.useContext(T),
        [, t] = s.useState({});
    return (
        s.useEffect(
            () => (
                (e.invalidate = () => t({})),
                () => {
                    e.invalidate = () => null;
                }
            ),
            [e],
        ),
        O.ringsEnabled && e.visible
            ? (0, a.jsx)("div", { className: _("focus-rings-ring", e.className), style: e.getStyle() })
            : null
    );
}
let L =
    "u" > typeof window && (null == (r = window.document) ? void 0 : r.createElement) != null
        ? s.useLayoutEffect
        : s.useEffect;
function w(e) {
    let {
        within: t = !1,
        enabled: n = !0,
        focused: i,
        offset: r = 0,
        focusTarget: a,
        ringTarget: o,
        ringClassName: l,
        focusClassName: u,
        focusWithinClassName: c,
        children: d,
    } = e;
    null != a &&
        h(
            null != o,
            "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.",
        ),
        null != i &&
            h(
                null != o,
                "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.",
            );
    let f = s.useRef(!1),
        [p, E] = s.useState(!1),
        m = s.useContext(T),
        g = s.Children.only(d),
        { onBlur: A, onFocus: I, ...S } = g.props,
        y = s.useMemo(() => ({ className: l, offset: r }), [l, r]);
    L(() => {
        n && m.invalidate();
    }),
        s.useEffect(() => {
            n || m.hide();
        }, [n, m]),
        s.useEffect(
            () => () => {
                f.current && m.hide();
            },
            [m],
        ),
        s.useEffect(() => {
            let e = null == o ? void 0 : o.current;
            null == i || null == e || ((f.current = i), i ? m.showElement(e, y) : !1 === i && m.hide());
        }, [i, y, m, o]),
        L(() => {
            if (null != i) return;
            let e = null == a ? void 0 : a.current,
                n = null == o ? void 0 : o.current;
            if (null != e && null != n)
                return (
                    e.addEventListener("focusin", r, !0),
                    e.addEventListener("focusout", s, !0),
                    () => {
                        e.removeEventListener("focusin", r, !0), e.removeEventListener("focusout", s, !0);
                    }
                );
            function r(e) {
                if (null != n) {
                    if (e.currentTarget === e.target) {
                        (f.current = !0), m.showElement(n, y);
                        return;
                    }
                    E(!0), t && m.showElement(n, y);
                }
            }
            function s() {
                m.hide(), (f.current = !1), E(!1);
            }
        }, [t, y, i, m, a, o]);
    let N = s.useCallback(
            (e) => {
                m.hide(), (f.current = !1), E(!1), null == A || A(e);
            },
            [A, m],
        ),
        v = s.useCallback(
            (e) => {
                let n = null == o ? void 0 : o.current;
                e.currentTarget === e.target
                    ? ((f.current = !0), m.showElement(null != n ? n : e.currentTarget, y))
                    : (E(!0), t && m.showElement(null != n ? n : e.currentTarget, y)),
                    null == I || I(e);
            },
            [o, t, I, m, y],
        );
    return n && null == a && null == i
        ? s.cloneElement(g, {
              ...S,
              className: _(S.className, f.current ? u : void 0, p ? c : void 0),
              onBlur: N,
              onFocus: v,
          })
        : g;
}
