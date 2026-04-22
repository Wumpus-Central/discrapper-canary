"use strict";
let r;
n.d(t, { oP: () => C, vN: () => w, xp: () => b });
var i,
    s = n(64700),
    a = n(627968),
    o = Object.defineProperty,
    l = (e, t, n) => {
        let r;
        return (
            (r = "symbol" != typeof t ? t + "" : t) in e
                ? o(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
                : (e[r] = n),
            n
        );
    },
    u = { exports: {} },
    d = {}.hasOwnProperty;
function c() {
    for (var e = [], t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        if (n) {
            var r = typeof n;
            if ("string" === r || "number" === r) e.push(n);
            else if (Array.isArray(n)) {
                if (n.length) {
                    var i = c.apply(null, n);
                    i && e.push(i);
                }
            } else if ("object" === r) {
                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                    e.push(n.toString());
                    continue;
                }
                for (var s in n) d.call(n, s) && n[s] && e.push(s);
            }
        }
    }
    return e.join(" ");
}
u.exports ? ((c.default = c), (u.exports = c)) : (window.classNames = c);
let _ = u.exports;
var f = function (e, t, n, r, i, s, a, o) {
    if (!e) {
        var l;
        if (void 0 === t)
            l = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var u = [n, r, i, s, a, o],
                d = 0;
            (l = Error(
                t.replace(/%s/g, function () {
                    return u[d++];
                }),
            )).name = "Invariant Violation";
        }
        throw ((l.framesToPop = 1), l);
    }
};
let E = /^#[0-9a-f]{3,8}$/i,
    h = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class p {
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
        return e.match(h) ? this.parseColorFnString(e) : e.match(E) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return "transparent" === e ? new p(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!e.match(E) || [6, 8].includes(e.length)) return;
        if ((e = e.replace("#", "")).length < 6) {
            let [t, n, r, i] = e.split("");
            (e = t + t + n + n + r + r), i && (e += i + i);
        }
        let t = e.match(/.{1,2}/g);
        if (null != t)
            return new p(
                parseInt(t[0], 16),
                parseInt(t[1], 16),
                parseInt(t[2], 16),
                null != t[3] ? parseInt(t[3], 16) / 255 : 1,
            );
    }
    static parseColorFnString(e) {
        var t;
        let [, n, r] = null != (t = e.match(h)) ? t : [];
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
                    s = i * (1 - Math.abs(((e / 60) % 2) - 1)),
                    a = n - i / 2,
                    o = (
                        e < 60
                            ? [i, s, 0]
                            : e < 120
                              ? [s, i, 0]
                              : e < 180
                                ? [0, i, s]
                                : e < 240
                                  ? [0, s, i]
                                  : e < 300
                                    ? [s, 0, i]
                                    : [i, 0, s]
                    ).map((e) => Math.round((e + a) * 255));
                return { red: o[0], green: o[1], blue: o[2], alpha: r };
            })({ hue: i[0], saturation: i[1], lightness: i[2], alpha: i[3] });
            return new p(e.red, e.green, e.blue, e.alpha);
        }
        return new p(i[0], i[1], i[2], "number" == typeof i[3] ? i[3] : 1);
    }
    toHSL() {
        return (function ({ red: e, green: t, blue: n, alpha: r }) {
            let i = e / 255,
                s = t / 255,
                a = n / 255,
                o = Math.max(i, s, a),
                l = Math.min(i, s, a),
                u = o - l,
                d = (o + l) / 2,
                c = u > 0 ? u / (1 - Math.abs(2 * d - 1)) : 0;
            if (0 === u) return { hue: 0, saturation: c, lightness: d, alpha: r };
            let _ = 0;
            switch (o) {
                case i:
                    _ = ((s - a) / u) % 6;
                    break;
                case s:
                    _ = (a - i) / u + 2;
                    break;
                case a:
                    _ = (s - a) / u + 4;
            }
            return { hue: 60 * _, saturation: c, lightness: d, alpha: r };
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
    return new p(
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
        var t, n, r, i, s, a, o, l;
        let u = null != (n = g(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? n : "0",
            d = null != (i = g(null == (r = e.styles[0]) ? void 0 : r.borderTopRightRadius)) ? i : "0",
            c = null != (a = g(null == (s = e.styles[0]) ? void 0 : s.borderBottomRightRadius)) ? a : "0",
            _ = null != (l = g(null == (o = e.styles[0]) ? void 0 : o.borderBottomLeftRadius)) ? l : "0";
        if ("0" !== u || "0" !== d || "0" !== c || "0" !== _) return `${u} ${d} ${c} ${_}`;
    }
    makePositionFromDOMRect(e) {
        var t, n, r, i;
        if (null == this.container) return {};
        let s = this.container.getBoundingClientRect(),
            { scrollTop: a, scrollLeft: o } = this.container,
            l = 0,
            u = 0,
            d = 0,
            c = 0;
        return (
            "number" == typeof this.offset
                ? ((l = this.offset), (u = this.offset), (d = this.offset), (c = this.offset))
                : ((l = null != (t = this.offset.top) ? t : 0),
                  (u = null != (n = this.offset.right) ? n : 0),
                  (d = null != (r = this.offset.bottom) ? r : 0),
                  (c = null != (i = this.offset.left) ? i : 0)),
            {
                top: a + e.top - s.top + l,
                width: e.width - (u + c),
                height: e.height - (d + l),
                left: o + e.left - s.left + c,
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
                    let e = p.parseString(n.backgroundColor);
                    if (null != e) {
                        if (e.alpha > 0.95) return e;
                        t.push(e);
                    }
                }
                return t.push(new p(255, 255, 255, 1)), t.reduce(m);
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
let I = new A();
"u" > typeof window && I.setContainer(document.body);
let T = s.createContext(I);
var S = function (e, t, n, r) {
    var i = n ? n.call(r, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var s = Object.keys(e),
        a = Object.keys(t);
    if (s.length !== a.length) return !1;
    for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < s.length; l++) {
        var u = s[l];
        if (!o(u)) return !1;
        var d = e[u],
            c = t[u];
        if (!1 === (i = n ? n.call(r, d, c, u) : void 0) || (void 0 === i && d !== c)) return !1;
    }
    return !0;
};
let y = !1,
    N,
    O = {};
function R() {
    if (!y) return;
    let e = null == r ? void 0 : r.getStyle();
    null == e || S(e, O) ? null != N && cancelAnimationFrame(N) : ((O = e), null == r || r.invalidate()),
        (N = requestAnimationFrame(R));
}
let v = !1,
    C = {
        get ringsEnabled() {
            return v;
        },
        setRingsEnabled(e) {
            (v = e), null == r || r.invalidate();
        },
        enableAnimationTracking() {
            (y = !0), (N = requestAnimationFrame(R));
        },
        disableAnimationTracking() {
            (y = !1), null != N && cancelAnimationFrame(N);
        },
    };
function b(e) {
    let { containerRef: t, children: n, themeOptions: r } = e,
        i = s.useRef(new A());
    return (
        s.useEffect(() => {
            i.current.setContainer(t.current), i.current.setThemeOptions(r);
        }, [t.current]),
        (0, a.jsxs)(T.Provider, { value: i.current, children: [n, (0, a.jsx)(D, {})] })
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
        C.ringsEnabled && e.visible
            ? (0, a.jsx)("div", { className: _("focus-rings-ring", e.className), style: e.getStyle() })
            : null
    );
}
let L =
    "u" > typeof window && (null == (i = window.document) ? void 0 : i.createElement) != null
        ? s.useLayoutEffect
        : s.useEffect;
function w(e) {
    let {
        within: t = !1,
        enabled: n = !0,
        focused: r,
        offset: i = 0,
        focusTarget: a,
        ringTarget: o,
        ringClassName: l,
        focusClassName: u,
        focusWithinClassName: d,
        children: c,
    } = e;
    null != a &&
        f(
            null != o,
            "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.",
        ),
        null != r &&
            f(
                null != o,
                "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.",
            );
    let E = s.useRef(!1),
        [h, p] = s.useState(!1),
        m = s.useContext(T),
        g = s.Children.only(c),
        { onBlur: A, onFocus: I, ...S } = g.props,
        y = s.useMemo(() => ({ className: l, offset: i }), [l, i]);
    L(() => {
        n && m.invalidate();
    }),
        s.useEffect(() => {
            n || m.hide();
        }, [n, m]),
        s.useEffect(
            () => () => {
                E.current && m.hide();
            },
            [m],
        ),
        s.useEffect(() => {
            let e = null == o ? void 0 : o.current;
            null == r || null == e || ((E.current = r), r ? m.showElement(e, y) : !1 === r && m.hide());
        }, [r, y, m, o]),
        L(() => {
            if (null != r) return;
            let e = null == a ? void 0 : a.current,
                n = null == o ? void 0 : o.current;
            if (null != e && null != n)
                return (
                    e.addEventListener("focusin", i, !0),
                    e.addEventListener("focusout", s, !0),
                    () => {
                        e.removeEventListener("focusin", i, !0), e.removeEventListener("focusout", s, !0);
                    }
                );
            function i(e) {
                if (null != n) {
                    if (e.currentTarget === e.target) {
                        (E.current = !0), m.showElement(n, y);
                        return;
                    }
                    p(!0), t && m.showElement(n, y);
                }
            }
            function s() {
                m.hide(), (E.current = !1), p(!1);
            }
        }, [t, y, r, m, a, o]);
    let N = s.useCallback(
            (e) => {
                m.hide(), (E.current = !1), p(!1), null == A || A(e);
            },
            [A, m],
        ),
        O = s.useCallback(
            (e) => {
                let n = null == o ? void 0 : o.current;
                e.currentTarget === e.target
                    ? ((E.current = !0), m.showElement(null != n ? n : e.currentTarget, y))
                    : (p(!0), t && m.showElement(null != n ? n : e.currentTarget, y)),
                    null == I || I(e);
            },
            [o, t, I, m, y],
        );
    return n && null == a && null == r
        ? s.cloneElement(g, {
              ...S,
              className: _(S.className, E.current ? u : void 0, h ? d : void 0),
              onBlur: N,
              onFocus: O,
          })
        : g;
}
