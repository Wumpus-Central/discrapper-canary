"use strict";
n.d(t, {
    Cy: () => S,
    OH: () => C,
    Qd: () => T,
    Xt: () => D,
    Z0: () => g,
    _$: () => I,
    dI: () => b,
    pi: () => v,
    sg: () => L,
}),
    n(321073);
var r = n(695497),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(649334),
    l = n(403362),
    u = n(723702),
    d = n(316501),
    c = n(650583);
let _ = __OVERLAY__ ? c.Nu : (0, u.isLinux)() ? c.C8 : (0, u.isMac)() ? c.V8 : (0, u.isWindows)() ? c.Nu : {},
    f = a().invert(c.C8);
(f["223"] = "`"), Object.freeze(f);
let E = Object.freeze(a().invert(c.V8)),
    h = a().invert(c.Nu);
(h["223"] = "`"), Object.freeze(h);
let p = a().invert(_ ?? {});
function m(e) {
    return "+" === e ? "plus" : e;
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I();
    return t === c.g$.BROWSER ? i()(e) : _[e];
}
function A(e, t, n) {
    if ((null != n && n !== c.g$.WINDOWS) || !d.Kh.has(e)) return t;
    let r = (0, d.Ze)().get("Backquote");
    if (t === r) return m(t);
    let i = (0, d.sv)({ key: r, code: "Backquote", keyCode: e });
    return "\\" === t && "`" === r ? t : null == i ? m(r ?? t) : m(i.key);
}
function I() {
    return (0, u.isLinux)()
        ? c.g$.LINUX
        : (0, u.isMac)()
          ? c.g$.MACOS
          : (0, u.isWindows)()
            ? c.g$.WINDOWS
            : __OVERLAY__
              ? c.g$.WINDOWS
              : c.g$.BROWSER;
}
function T(e) {
    let [, t, n] = e,
        r = (function (e) {
            let t,
                [, n, r] = e;
            switch (r) {
                case c.g$.LINUX:
                    t = f["" + n];
                    break;
                case c.g$.MACOS:
                    t = E["" + n];
                    break;
                case c.g$.WINDOWS:
                    t = h["" + n];
                    break;
                case c.g$.BROWSER: {
                    let e = i()(n);
                    if (null == e) return null;
                    t = y(e);
                    break;
                }
                default:
                    t = p["" + n];
            }
            return null != t ? t : null;
        })(e);
    if (null != r) return A(t, r, n);
    let s = (0, d.Pk)(t);
    return null != s ? A(s.keyCode, s.key, n) : null;
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.zY.KEYBOARD_KEY,
        r = (function (e) {
            let t,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.zY.KEYBOARD_KEY;
            if (null == e) return null;
            let s = r === c.zY.KEYBOARD_KEY || r === c.zY.KEYBOARD_MODIFIER_KEY;
            switch (!0) {
                case s && n === c.g$.LINUX:
                    t = c.C8[e];
                    break;
                case s && n === c.g$.MACOS:
                    t = c.V8[e];
                    break;
                case s && n === c.g$.WINDOWS:
                    t = "+" === e ? c.Nu.plus : c.Nu[e];
                    break;
                case s && n === c.g$.BROWSER:
                    t = i()(y(e));
                    break;
                case s:
                    t = _[e];
                    break;
                case r === c.zY.MOUSE_BUTTON:
                    t = parseInt(e.replace("MOUSE", ""), 10);
                    break;
                case r === c.zY.GAMEPAD_BUTTON:
                    t = parseInt(e.replace("GAMEPAD", ""), 10);
                    break;
                default:
                    throw Error(`Unrecognized DeviceType ${r}.`);
            }
            return null != t ? t : null;
        })(e, t, n);
    if (null != r) return r;
    let s = (0, d.Q_)(e);
    return null != s ? s.keyCode : null;
}
function y(e) {
    let t = e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
    return "pause" === t || "break" === t ? "pause/break" : t;
}
(0, u.isMac)() || (p["223"] = "`"), Object.freeze(p);
let N = [
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
    O = (e) => {
        for (let [t, n] of N) if (t === e.toUpperCase()) return n;
        return e;
    },
    R = /shift|meta|ctrl|alt$/;
function v(e) {
    let t = { keyCode: 0, key: "", code: "", metaKey: !1, shiftKey: !1, altKey: !1, ctrlKey: !1 };
    return null == e
        ? []
        : e.reduce((e, n) => {
              let r = T(n),
                  i = { ...t };
              if (null == r) return e.push({ ...i, combo: n }), e;
              if (R.test(r) && ("meta" === r || "shift" === r || "alt" === r || "ctrl" === r))
                  return (t[r + "Key"] = !0), e.map((e) => ((e[r + "Key"] = !0), e));
              {
                  let t = S(r, c.g$.BROWSER);
                  return null != t && (i.keyCode = t), e.push(i), e;
              }
          }, []);
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.zY.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, "")
        .replace(/NUMPAD \+/i, "numpad plus")
        .replace(/mod/i, o.Mu)
        .split("+")
        .map((e) => e.trim().replace("plus", "+"))
        .reduce((e, r) => {
            let i = S(
                ((e) => {
                    for (let [t, n] of N) if (n === e.toUpperCase()) return t.toLowerCase();
                    return e;
                })(r),
                t,
                n,
            );
            return null != i && e.push([n, i, t]), e;
        }, []);
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e
            .map((e) => {
                let [t, n, r] = e,
                    i = "number" == typeof r ? r : I();
                return t === c.zY.KEYBOARD_KEY || t === c.zY.KEYBOARD_MODIFIER_KEY
                    ? (T(null != i ? [t, n, i] : [t, n]) ?? `UNK${n}`)
                    : t === c.zY.MOUSE_BUTTON
                      ? `mouse${n}`
                      : t === c.zY.GAMEPAD_BUTTON
                        ? `gamepad${n}`
                        : `dev${t},${n}`;
            })
            .filter(l.Vq);
    return t
        ? (-1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? r.map(O) : r).join(" + ").toUpperCase()
        : r.join("+");
}
function D(e, t) {
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
function L(e) {
    return (
        null != e &&
        "object" == typeof e &&
        "nativeEvent" in e &&
        0 === e.nativeEvent.clientX &&
        0 === e.nativeEvent.clientY
    );
}
