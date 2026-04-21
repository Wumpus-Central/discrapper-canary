"use strict";
n.d(t, {
    Cy: () => y,
    OH: () => M,
    Qd: () => S,
    Xt: () => x,
    Z0: () => g,
    _$: () => I,
    dI: () => P,
    pi: () => w,
    sg: () => k,
}),
    n(321073);
var r = n(695497),
    i = n.n(r),
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
let p = Object.freeze(a().invert(d.V8)),
    h = a().invert(d.Nu);
(h["223"] = "`"), Object.freeze(h);
let m = a().invert(_ ?? {});
function E(e) {
    return "+" === e ? "plus" : e;
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I();
    return t === d.g$.BROWSER ? i()(e) : _[e];
}
function A(e, t, n) {
    if ((null != n && n !== d.g$.WINDOWS) || !c.Kh.has(e)) return t;
    let r = (0, c.Ze)().get("Backquote");
    if (t === r) return E(t);
    let i = { key: r, code: "Backquote", keyCode: e },
        s = (0, c.sv)(i);
    return "\\" === t && "`" === r ? t : null == s ? E(r ?? t) : E(s.key);
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
    let t,
        [, n, r] = e;
    switch (r) {
        case d.g$.LINUX:
            t = f["" + n];
            break;
        case d.g$.MACOS:
            t = p["" + n];
            break;
        case d.g$.WINDOWS:
            t = h["" + n];
            break;
        case d.g$.BROWSER: {
            let e = i()(n);
            if (null == e) return null;
            t = v(e);
            break;
        }
        default:
            t = m["" + n];
    }
    return null != t ? t : null;
}
function S(e) {
    let [, t, n] = e,
        r = T(e);
    if (null != r) return A(t, r, n);
    let i = (0, c.Pk)(t);
    return null != i ? A(i.keyCode, i.key, n) : null;
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY,
        r = N(e, t, n);
    if (null != r) return r;
    let i = (0, c.Q_)(e);
    return null != i ? i.keyCode : null;
}
function v(e) {
    let t = e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
    return "pause" === t || "break" === t ? "pause/break" : t;
}
function N(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY;
    if (null == e) return null;
    let s = r === d.zY.KEYBOARD_KEY || r === d.zY.KEYBOARD_MODIFIER_KEY;
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
            t = i()(v(e));
            break;
        case s:
            t = _[e];
            break;
        case r === d.zY.MOUSE_BUTTON:
            t = parseInt(e.replace("MOUSE", ""), 10);
            break;
        case r === d.zY.GAMEPAD_BUTTON:
            t = parseInt(e.replace("GAMEPAD", ""), 10);
            break;
        default:
            throw Error(`Unrecognized DeviceType ${r}.`);
    }
    return null != t ? t : null;
}
(0, u.isMac)() || (m["223"] = "`"), Object.freeze(m);
let C = [
        ["META", "⌘"],
        ["CMD", "⌘"],
        ["RIGHT META", "RIGHT ⌘"],
        ["RIGHT CMD", "RIGHT ⌘"],
        ["SHIFT", "⇧"],
        ["RIGHT SHIFT", "RIGHT ⇧"],
        ["ALT", "⌥"],
        ["RIGHT ALT", "RIGHT ⌥"],
        ["CTRL", "⌃"],
        ["RIGHT CTRL", "RIGHT ⌃"],
        ["ENTER", "↵"],
        ["BACKSPACE", "⌫"],
        ["DEL", "⌦"],
        ["ESC", "⎋"],
        ["PAGEUP", "⇞"],
        ["PAGEDOWN", "⇟"],
        ["UP", "↑"],
        ["DOWN", "↓"],
        ["LEFT", "←"],
        ["RIGHT", "→"],
        ["HOME", "↖"],
        ["END", "↘"],
        ["TAB", "⇥"],
        ["SPACE", "␣"],
    ],
    R = (e) => {
        for (let [t, n] of C) if (t === e.toUpperCase()) return n;
        return e;
    },
    O = (e) => {
        for (let [t, n] of C) if (n === e.toUpperCase()) return t.toLowerCase();
        return e;
    },
    b = /shift|meta|ctrl|alt$/;
function D(e) {
    return "meta" === e || "shift" === e || "alt" === e || "ctrl" === e;
}
function L(e) {
    return e + "Key";
}
function w(e) {
    let t = { keyCode: 0, key: "", code: "", metaKey: !1, shiftKey: !1, altKey: !1, ctrlKey: !1 };
    return null == e
        ? []
        : e.reduce((e, n) => {
              let r = S(n),
                  i = { ...t };
              if (null == r) return e.push({ ...i, combo: n }), e;
              if (b.test(r) && D(r)) return (t[L(r)] = !0), e.map((e) => ((e[L(r)] = !0), e));
              {
                  let t = y(r, d.g$.BROWSER);
                  return null != t && (i.keyCode = t), e.push(i), e;
              }
          }, []);
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, "")
        .replace(/NUMPAD \+/i, "numpad plus")
        .replace(/mod/i, o.Mu)
        .split("+")
        .map((e) => e.trim().replace("plus", "+"))
        .reduce((e, r) => {
            let i = y(O(r), t, n);
            return null != i && e.push([n, i, t]), e;
        }, []);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e
            .map((e) => {
                let [t, n, r] = e,
                    i = "number" == typeof r ? r : I();
                return t === d.zY.KEYBOARD_KEY || t === d.zY.KEYBOARD_MODIFIER_KEY
                    ? (S(null != i ? [t, n, i] : [t, n]) ?? `UNK${n}`)
                    : t === d.zY.MOUSE_BUTTON
                      ? `mouse${n}`
                      : t === d.zY.GAMEPAD_BUTTON
                        ? `gamepad${n}`
                        : `dev${t},${n}`;
            })
            .filter(l.Vq);
    return t
        ? (-1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? r.map(R) : r).join(" + ").toUpperCase()
        : r.join("+");
}
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        e.length === t.length &&
        e.every((e, r) => {
            let [i, s, a] = e,
                [o, l, u] = t[r];
            return i === o && s === l && (!n || a === u);
        })
    );
}
function k(e) {
    return (
        null != e &&
        "object" == typeof e &&
        "nativeEvent" in e &&
        0 === e.nativeEvent.clientX &&
        0 === e.nativeEvent.clientY
    );
}
