"use strict";
n.d(t, {
    Cy: () => S,
    OH: () => R,
    Qd: () => T,
    Xt: () => D,
    Z0: () => g,
    _$: () => I,
    dI: () => b,
    pi: () => O,
    sg: () => L,
}),
    n(321073);
var i = n(695497),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(649334),
    l = n(403362),
    u = n(723702),
    c = n(316501),
    d = n(650583);
let _ = __OVERLAY__ ? d.Nu : (0, u.isLinux)() ? d.C8 : (0, u.isMac)() ? d.V8 : (0, u.isWindows)() ? d.Nu : {},
    f = a().invert(d.C8);
(f["223"] = "`"), Object.freeze(f);
let h = Object.freeze(a().invert(d.V8)),
    p = a().invert(d.Nu);
(p["223"] = "`"), Object.freeze(p);
let E = a().invert(_ ?? {});
function m(e) {
    return "+" === e ? "plus" : e;
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I();
    return t === d.g$.BROWSER ? r()(e) : _[e];
}
function A(e, t, n) {
    if ((null != n && n !== d.g$.WINDOWS) || !c.Kh.has(e)) return t;
    let i = (0, c.Ze)().get("Backquote");
    if (t === i) return m(t);
    let r = (0, c.sv)({ key: i, code: "Backquote", keyCode: e });
    return "\\" === t && "`" === i ? t : null == r ? m(i ?? t) : m(r.key);
}
function I() {
    return (0, u.isLinux)()
        ? d.g$.LINUX
        : (0, u.isMac)()
          ? d.g$.MACOS
          : (0, u.isWindows)()
            ? d.g$.WINDOWS
            : __OVERLAY__
              ? d.g$.WINDOWS
              : d.g$.BROWSER;
}
function T(e) {
    let [, t, n] = e,
        i = (function (e) {
            let t,
                [, n, i] = e;
            switch (i) {
                case d.g$.LINUX:
                    t = f["" + n];
                    break;
                case d.g$.MACOS:
                    t = h["" + n];
                    break;
                case d.g$.WINDOWS:
                    t = p["" + n];
                    break;
                case d.g$.BROWSER: {
                    let e = r()(n);
                    if (null == e) return null;
                    t = N(e);
                    break;
                }
                default:
                    t = E["" + n];
            }
            return null != t ? t : null;
        })(e);
    if (null != i) return A(t, i, n);
    let s = (0, c.Pk)(t);
    return null != s ? A(s.keyCode, s.key, n) : null;
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY,
        i = (function (e) {
            let t,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY;
            if (null == e) return null;
            let s = i === d.zY.KEYBOARD_KEY || i === d.zY.KEYBOARD_MODIFIER_KEY;
            switch (!0) {
                case s && n === d.g$.LINUX:
                    t = d.C8[e];
                    break;
                case s && n === d.g$.MACOS:
                    t = d.V8[e];
                    break;
                case s && n === d.g$.WINDOWS:
                    t = "+" === e ? d.Nu.plus : d.Nu[e];
                    break;
                case s && n === d.g$.BROWSER:
                    t = r()(N(e));
                    break;
                case s:
                    t = _[e];
                    break;
                case i === d.zY.MOUSE_BUTTON:
                    t = parseInt(e.replace("MOUSE", ""), 10);
                    break;
                case i === d.zY.GAMEPAD_BUTTON:
                    t = parseInt(e.replace("GAMEPAD", ""), 10);
                    break;
                default:
                    throw Error(`Unrecognized DeviceType ${i}.`);
            }
            return null != t ? t : null;
        })(e, t, n);
    if (null != i) return i;
    let s = (0, c.Q_)(e);
    return null != s ? s.keyCode : null;
}
function N(e) {
    let t = e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
    return "pause" === t || "break" === t ? "pause/break" : t;
}
(0, u.isMac)() || (E["223"] = "`"), Object.freeze(E);
let y = [
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
    C = (e) => {
        for (let [t, n] of y) if (t === e.toUpperCase()) return n;
        return e;
    },
    v = /shift|meta|ctrl|alt$/;
function O(e) {
    let t = { keyCode: 0, key: "", code: "", metaKey: !1, shiftKey: !1, altKey: !1, ctrlKey: !1 };
    return null == e
        ? []
        : e.reduce((e, n) => {
              let i = T(n),
                  r = { ...t };
              if (null == i) return e.push({ ...r, combo: n }), e;
              if (v.test(i) && ("meta" === i || "shift" === i || "alt" === i || "ctrl" === i))
                  return (t[i + "Key"] = !0), e.map((e) => ((e[i + "Key"] = !0), e));
              {
                  let t = S(i, d.g$.BROWSER);
                  return null != t && (r.keyCode = t), e.push(r), e;
              }
          }, []);
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, "")
        .replace(/NUMPAD \+/i, "numpad plus")
        .replace(/mod/i, o.Mu)
        .split("+")
        .map((e) => e.trim().replace("plus", "+"))
        .reduce((e, i) => {
            let r = S(
                ((e) => {
                    for (let [t, n] of y) if (n === e.toUpperCase()) return t.toLowerCase();
                    return e;
                })(i),
                t,
                n,
            );
            return null != r && e.push([n, r, t]), e;
        }, []);
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = e
            .map((e) => {
                let [t, n, i] = e,
                    r = "number" == typeof i ? i : I();
                return t === d.zY.KEYBOARD_KEY || t === d.zY.KEYBOARD_MODIFIER_KEY
                    ? (T(null != r ? [t, n, r] : [t, n]) ?? `UNK${n}`)
                    : t === d.zY.MOUSE_BUTTON
                      ? `mouse${n}`
                      : t === d.zY.GAMEPAD_BUTTON
                        ? `gamepad${n}`
                        : `dev${t},${n}`;
            })
            .filter(l.Vq);
    return t
        ? (-1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? i.map(C) : i).join(" + ").toUpperCase()
        : i.join("+");
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        e.length === t.length &&
        e.every((e, i) => {
            let [r, s, a] = e,
                [o, l, u] = t[i];
            return r === o && s === l && (!n || a === u);
        })
    );
}
function L(e) {
    return (
        null != e &&
        "object" == typeof e &&
        "nativeEvent" in e &&
        0 === e.nativeEvent.clientX &&
        0 === e.nativeEvent.clientY
    );
}
