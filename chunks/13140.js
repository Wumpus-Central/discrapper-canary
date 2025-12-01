n.d(t, {
    Al: () => Z,
    BB: () => U,
    C$: () => C,
    H9: () => A,
    Kd: () => k,
    UR: () => v,
    d2: () => M,
    dU: () => I,
    m3: () => G,
}),
    n(388685),
    n(704826),
    n(35282),
    n(415506),
    n(539854),
    n(781311);
var r = n(921738),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(714338),
    l = n(823379),
    c = n(358085),
    u = n(378799),
    d = n(295907);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = __OVERLAY__ ? d.iC : (0, c.isLinux)() ? d.Hs : (0, c.isMac)() ? d.RE : (0, c.isWindows)() ? d.iC : {},
    g = o().invert(d.Hs);
(g["223"] = "`"), Object.freeze(g);
let E = Object.freeze(o().invert(d.RE)),
    b = o().invert(d.iC);
(b["223"] = "`"), Object.freeze(b);
let y = o().invert(null != h ? h : {});
function O(e) {
    return "+" === e ? "plus" : e;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I();
    return t === d.Cg.BROWSER ? i()(e) : h[e];
}
function S(e, t, n) {
    if ((null != n && n !== d.Cg.WINDOWS) || !u.Dz.has(e)) return t;
    let r = (0, u.pz)().get("Backquote");
    if (t === r) return O(t);
    let i = {
            key: r,
            code: "Backquote",
            keyCode: e,
        },
        a = (0, u.jd)(i);
    return "\\" === t && "`" === r ? t : null == a ? O(null != r ? r : t) : O(a.key);
}
function I() {
    return (0, c.isLinux)()
        ? d.Cg.LINUX
        : (0, c.isMac)()
          ? d.Cg.MACOS
          : (0, c.isWindows)()
            ? d.Cg.WINDOWS
            : __OVERLAY__
              ? d.Cg.WINDOWS
              : d.Cg.BROWSER;
}
function T(e) {
    let t,
        [, n, r] = e;
    switch (r) {
        case d.Cg.LINUX:
            t = g["" + n];
            break;
        case d.Cg.MACOS:
            t = E["" + n];
            break;
        case d.Cg.WINDOWS:
            t = b["" + n];
            break;
        case d.Cg.BROWSER: {
            let e = i()(n);
            if (null == e) return null;
            t = N(e);
            break;
        }
        default:
            t = y["" + n];
    }
    return null != t ? t : null;
}
function A(e) {
    let [, t, n] = e,
        r = T(e);
    if (null != r) return S(t, r, n);
    let i = (0, u._v)(t);
    return null != i ? S(i.keyCode, i.key, n) : null;
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Mo.KEYBOARD_KEY,
        r = P(e, t, n);
    if (null != r) return r;
    let i = (0, u.T_)(e);
    return null != i ? i.keyCode : null;
}
function N(e) {
    let t = e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
    return "pause" === t || "break" === t ? "pause/break" : t;
}
function P(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Mo.KEYBOARD_KEY;
    if (null == e) return null;
    let a = r === d.Mo.KEYBOARD_KEY || r === d.Mo.KEYBOARD_MODIFIER_KEY;
    switch (!0) {
        case a && n === d.Cg.LINUX:
            t = d.Hs[e];
            break;
        case a && n === d.Cg.MACOS:
            t = d.RE[e];
            break;
        case a && n === d.Cg.WINDOWS:
            t = "+" === e ? d.iC.plus : d.iC[e];
            break;
        case a && n === d.Cg.BROWSER:
            t = i()(N(e));
            break;
        case a:
            t = h[e];
            break;
        case r === d.Mo.MOUSE_BUTTON:
            t = parseInt(e.replace("MOUSE", ""), 10);
            break;
        case r === d.Mo.GAMEPAD_BUTTON:
            t = parseInt(e.replace("GAMEPAD", ""), 10);
            break;
        default:
            throw Error("Unrecognized DeviceType ".concat(r, "."));
    }
    return null != t ? t : null;
}
(0, c.isMac)() || (y["223"] = "`"), Object.freeze(y);
let R = [
        ["META", "\u2318"],
        ["CMD", "\u2318"],
        ["RIGHT META", "RIGHT \u2318"],
        ["RIGHT CMD", "RIGHT \u2318"],
        ["SHIFT", "\u21E7"],
        ["RIGHT SHIFT", "RIGHT \u21E7"],
        ["ALT", "\u2325"],
        ["RIGHT ALT", "RIGHT \u2325"],
        ["CTRL", "\u2303"],
        ["RIGHT CTRL", "RIGHT \u2303"],
        ["ENTER", "\u21B5"],
        ["BACKSPACE", "\u232B"],
        ["DEL", "\u2326"],
        ["ESC", "\u238B"],
        ["PAGEUP", "\u21DE"],
        ["PAGEDOWN", "\u21DF"],
        ["UP", "\u2191"],
        ["DOWN", "\u2193"],
        ["LEFT", "\u2190"],
        ["RIGHT", "\u2192"],
        ["HOME", "\u2196"],
        ["END", "\u2198"],
        ["TAB", "\u21E5"],
        ["SPACE", "\u2423"],
    ],
    w = (e) => {
        for (let [t, n] of R) if (t === e.toUpperCase()) return n;
        return e;
    },
    D = (e) => {
        for (let [t, n] of R) if (n === e.toUpperCase()) return t.toLowerCase();
        return e;
    },
    x = /shift|meta|ctrl|alt$/;
function L(e) {
    return "meta" === e || "shift" === e || "alt" === e || "ctrl" === e;
}
function j(e) {
    return e + "Key";
}
function M(e) {
    let t = {
        keyCode: 0,
        key: "",
        code: "",
        metaKey: !1,
        shiftKey: !1,
        altKey: !1,
        ctrlKey: !1,
    };
    return null == e
        ? []
        : e.reduce((e, n) => {
              let r = A(n),
                  i = p({}, t);
              if (null == r) return e.push(m(p({}, i), { combo: n })), e;
              if (x.test(r) && L(r)) return (t[j(r)] = !0), e.map((e) => ((e[j(r)] = !0), e));
              {
                  let t = C(r, d.Cg.BROWSER);
                  return null != t && (i.keyCode = t), e.push(i), e;
              }
          }, []);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Mo.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, "")
        .replace(/NUMPAD \+/i, "numpad plus")
        .replace(/mod/i, s.Z.modKey)
        .split("+")
        .map((e) => e.trim().replace("plus", "+"))
        .reduce((e, r) => {
            let i = C(D(r), t, n);
            return null != i && e.push([n, i, t]), e;
        }, []);
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e
            .map((e) => {
                let [t, n, r] = e,
                    i = "number" == typeof r ? r : I();
                if (t === d.Mo.KEYBOARD_KEY || t === d.Mo.KEYBOARD_MODIFIER_KEY) {
                    var a;
                    return null != (a = A(null != i ? [t, n, i] : [t, n])) ? a : "UNK".concat(n);
                }
                return t === d.Mo.MOUSE_BUTTON
                    ? "mouse".concat(n)
                    : t === d.Mo.GAMEPAD_BUTTON
                      ? "gamepad".concat(n)
                      : "dev".concat(t, ",").concat(n);
            })
            .filter(l.lm);
    return t
        ? (-1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? r.map(w) : r).join(" + ").toUpperCase()
        : r.join("+");
}
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        e.length === t.length &&
        e.every((e, r) => {
            let [i, a, o] = e,
                [s, l, c] = t[r];
            return i === s && a === l && (!n || o === c);
        })
    );
}
function Z(e) {
    return (
        null != e &&
        "object" == typeof e &&
        "nativeEvent" in e &&
        0 === e.nativeEvent.clientX &&
        0 === e.nativeEvent.clientY
    );
}
