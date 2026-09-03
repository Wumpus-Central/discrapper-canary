let n;
r.d(t, { oP: () => M, vN: () => O, xp: () => P });
var i,
    o = r(582128),
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
                    var i = f.apply(null, r);
                    i && e.push(i);
                }
            } else if ("object" === n) {
                if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                    e.push(r.toString());
                    continue;
                }
                for (var o in r) c.call(r, o) && r[o] && e.push(o);
            }
        }
    }
    return e.join(" ");
}
u.exports ? ((f.default = f), (u.exports = f)) : (window.classNames = f);
let d = u.exports;
var p = function (e, t, r, n, i, o, a, s) {
    if (!e) {
        var l;
        if (void 0 === t)
            l = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var u = [r, n, i, o, a, s],
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
            let [t, r, n, i] = e.split("");
            (e = t + t + r + r + n + n), i && (e += i + i);
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
        let i = n
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
                let i = (1 - Math.abs(2 * (r /= 255) - 1)) * (t /= 255),
                    o = i * (1 - Math.abs(((e / 60) % 2) - 1)),
                    a = r - i / 2,
                    s = (
                        e < 60
                            ? [i, o, 0]
                            : e < 120
                              ? [o, i, 0]
                              : e < 180
                                ? [0, i, o]
                                : e < 240
                                  ? [0, o, i]
                                  : e < 300
                                    ? [o, 0, i]
                                    : [i, 0, o]
                    ).map((e) => Math.round((e + a) * 255));
                return { red: s[0], green: s[1], blue: s[2], alpha: n };
            })({ hue: i[0], saturation: i[1], lightness: i[2], alpha: i[3] });
            return new v(e.red, e.green, e.blue, e.alpha);
        }
        return new v(i[0], i[1], i[2], "number" == typeof i[3] ? i[3] : 1);
    }
    toHSL() {
        return (function ({ red: e, green: t, blue: r, alpha: n }) {
            let i = e / 255,
                o = t / 255,
                a = r / 255,
                s = Math.max(i, o, a),
                l = Math.min(i, o, a),
                u = s - l,
                c = (s + l) / 2,
                f = u > 0 ? u / (1 - Math.abs(2 * c - 1)) : 0;
            if (0 === u) return { hue: 0, saturation: f, lightness: c, alpha: n };
            let d = 0;
            switch (s) {
                case i:
                    d = ((o - a) / u) % 6;
                    break;
                case o:
                    d = (a - i) / u + 2;
                    break;
                case a:
                    d = (o - a) / u + 4;
            }
            return { hue: 60 * d, saturation: f, lightness: c, alpha: n };
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
        var t, r, n, i, o, a, s, l;
        let u = null != (r = g(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? r : "0",
            c = null != (i = g(null == (n = e.styles[0]) ? void 0 : n.borderTopRightRadius)) ? i : "0",
            f = null != (a = g(null == (o = e.styles[0]) ? void 0 : o.borderBottomRightRadius)) ? a : "0",
            d = null != (l = g(null == (s = e.styles[0]) ? void 0 : s.borderBottomLeftRadius)) ? l : "0";
        if ("0" !== u || "0" !== c || "0" !== f || "0" !== d) return `${u} ${c} ${f} ${d}`;
    }
    makePositionFromDOMRect(e) {
        var t, r, n, i;
        if (null == this.container) return {};
        let o = this.container.getBoundingClientRect(),
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
                  (f = null != (i = this.offset.left) ? i : 0)),
            {
                top: a + e.top - o.top + l,
                width: e.width - (u + f),
                height: e.height - (c + l),
                left: s + e.left - o.left + f,
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
let _ = o.createContext(w);
var S = function (e, t, r, n) {
    var i = r ? r.call(n, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var o = Object.keys(e),
        a = Object.keys(t);
    if (o.length !== a.length) return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < o.length; l++) {
        var u = o[l];
        if (!s(u)) return !1;
        var c = e[u],
            f = t[u];
        if (!1 === (i = r ? r.call(n, c, f, u) : void 0) || (void 0 === i && c !== f)) return !1;
    }
    return !0;
};
let x = !1,
    E,
    k = {};
function C() {
    if (!x) return;
    let e = null == n ? void 0 : n.getStyle();
    null == e || S(e, k) ? null != E && cancelAnimationFrame(E) : ((k = e), null == n || n.invalidate()),
        (E = requestAnimationFrame(C));
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
            (x = !0), (E = requestAnimationFrame(C));
        },
        disableAnimationTracking() {
            (x = !1), null != E && cancelAnimationFrame(E);
        },
    };
function P(e) {
    let { containerRef: t, children: r, themeOptions: n } = e,
        i = o.useRef(new b());
    return (
        o.useEffect(() => {
            i.current.setContainer(t.current), i.current.setThemeOptions(n);
        }, [t.current]),
        (0, a.jsxs)(_.Provider, { value: i.current, children: [r, (0, a.jsx)(A, {})] })
    );
}
function A() {
    let e = o.useContext(_),
        [, t] = o.useState({});
    return (
        o.useEffect(
            () => (
                (e.invalidate = () => t({})),
                () => {
                    e.invalidate = () => null;
                }
            ),
            [e],
        ),
        M.ringsEnabled && e.visible
            ? (0, a.jsx)("div", { className: d("focus-rings-ring", e.className), style: e.getStyle() })
            : null
    );
}
let I =
    "u" > typeof window && (null == (i = window.document) ? void 0 : i.createElement) != null
        ? o.useLayoutEffect
        : o.useEffect;
function O(e) {
    let {
        within: t = !1,
        enabled: r = !0,
        focused: n,
        offset: i = 0,
        focusTarget: a,
        ringTarget: s,
        ringClassName: l,
        focusClassName: u,
        focusWithinClassName: c,
        children: f,
    } = e;
    null != a &&
        p(
            null != s,
            "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.",
        ),
        null != n &&
            p(
                null != s,
                "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.",
            );
    let h = o.useRef(!1),
        [m, v] = o.useState(!1),
        y = o.useContext(_),
        g = o.Children.only(f),
        { onBlur: b, onFocus: w, ...S } = g.props,
        x = o.useMemo(() => ({ className: l, offset: i }), [l, i]);
    I(() => {
        r && y.invalidate();
    }),
        o.useEffect(() => {
            r || y.hide();
        }, [r, y]),
        o.useEffect(
            () => () => {
                h.current && y.hide();
            },
            [y],
        ),
        o.useEffect(() => {
            let e = null == s ? void 0 : s.current;
            null == n || null == e || ((h.current = n), n ? y.showElement(e, x) : !1 === n && y.hide());
        }, [n, x, y, s]),
        I(() => {
            if (null != n) return;
            let e = null == a ? void 0 : a.current,
                r = null == s ? void 0 : s.current;
            if (null != e && null != r)
                return (
                    e.addEventListener("focusin", i, !0),
                    e.addEventListener("focusout", o, !0),
                    () => {
                        e.removeEventListener("focusin", i, !0), e.removeEventListener("focusout", o, !0);
                    }
                );
            function i(e) {
                if (null != r) {
                    if (e.currentTarget === e.target) {
                        (h.current = !0), y.showElement(r, x);
                        return;
                    }
                    v(!0), t && y.showElement(r, x);
                }
            }
            function o() {
                y.hide(), (h.current = !1), v(!1);
            }
        }, [t, x, n, y, a, s]);
    let E = o.useCallback(
            (e) => {
                y.hide(), (h.current = !1), v(!1), null == b || b(e);
            },
            [b, y],
        ),
        k = o.useCallback(
            (e) => {
                let r = null == s ? void 0 : s.current;
                e.currentTarget === e.target
                    ? ((h.current = !0), y.showElement(null != r ? r : e.currentTarget, x))
                    : (v(!0), t && y.showElement(null != r ? r : e.currentTarget, x)),
                    null == w || w(e);
            },
            [s, t, w, y, x],
        );
    return r && null == a && null == n
        ? o.cloneElement(g, {
              ...S,
              className: d(S.className, h.current ? u : void 0, m ? c : void 0),
              onBlur: E,
              onFocus: k,
          })
        : g;
}
