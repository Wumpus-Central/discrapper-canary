n.d(t, {
    Cy: () => S,
    OH: () => y,
    Qd: () => g,
    Xt: () => b,
    Z0: () => p,
    _$: () => m,
    dI: () => v,
    pi: () => L,
    rB: () => D,
    sg: () => M,
}),
    n(321073);
var i = n(695497),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(649334),
    o = n(403362),
    d = n(723702),
    c = n(316501),
    u = n(650583);
let _ = __OVERLAY__ ? u.Nu : (0, d.isLinux)() ? u.C8 : (0, d.isMac)() ? u.V8 : (0, d.isWindows)() ? u.Nu : {},
    E = s().invert(u.C8);
(E["223"] = "`"), Object.freeze(E);
let A = Object.freeze(s().invert(u.V8)),
    h = s().invert(u.Nu);
(h["223"] = "`"), Object.freeze(h);
let I = s().invert(_ ?? {});
function f(e) {
    return "+" === e ? "plus" : e;
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m();
    return t === u.g$.BROWSER ? r()(e) : _[e];
}
function T(e, t, n) {
    if ((null != n && n !== u.g$.WINDOWS) || !c.Kh.has(e)) return t;
    let i = (0, c.Ze)().get("Backquote");
    if (t === i) return f(t);
    let r = (0, c.sv)({ key: i, code: "Backquote", keyCode: e });
    return ("\\" === t || ("'" === t && 192 !== e)) && "`" === i ? t : null == r ? f(i ?? t) : f(r.key);
}
function m() {
    return (0, d.isLinux)()
        ? u.g$.LINUX
        : (0, d.isMac)()
          ? u.g$.MACOS
          : (0, d.isWindows)()
            ? u.g$.WINDOWS
            : __OVERLAY__
              ? u.g$.WINDOWS
              : u.g$.BROWSER;
}
function g(e) {
    let [, t, n] = e,
        i = (function (e) {
            let t,
                [, n, i] = e;
            switch (i) {
                case u.g$.LINUX:
                    t = E["" + n];
                    break;
                case u.g$.MACOS:
                    t = A["" + n];
                    break;
                case u.g$.WINDOWS:
                    t = h["" + n];
                    break;
                case u.g$.BROWSER: {
                    let e = r()(n);
                    if (null == e) return null;
                    t = N(e);
                    break;
                }
                default:
                    t = I["" + n];
            }
            return null != t ? t : null;
        })(e);
    if (null != i) return T(t, i, n);
    let a = (0, c.Pk)(t);
    return null != a ? T(a.keyCode, a.key, n) : null;
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.zY.KEYBOARD_KEY,
        i = (function (e) {
            let t,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m(),
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.zY.KEYBOARD_KEY;
            if (null == e) return null;
            let a = i === u.zY.KEYBOARD_KEY || i === u.zY.KEYBOARD_MODIFIER_KEY;
            switch (!0) {
                case a && n === u.g$.LINUX:
                    t = u.C8[e];
                    break;
                case a && n === u.g$.MACOS:
                    t = u.V8[e];
                    break;
                case a && n === u.g$.WINDOWS:
                    t = "+" === e ? u.Nu.plus : u.Nu[e];
                    break;
                case a && n === u.g$.BROWSER:
                    t = r()(N(e));
                    break;
                case a:
                    t = _[e];
                    break;
                case i === u.zY.MOUSE_BUTTON:
                    t = parseInt(e.replace("MOUSE", ""), 10);
                    break;
                case i === u.zY.GAMEPAD_BUTTON:
                    t = parseInt(e.replace("GAMEPAD", ""), 10);
                    break;
                default:
                    throw Error(`Unrecognized DeviceType ${i}.`);
            }
            return null != t ? t : null;
        })(e, t, n);
    if (null != i) return i;
    let a = (0, c.Q_)(e);
    return null != a ? a.keyCode : null;
}
function N(e) {
    let t = e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
    return "pause" === t || "break" === t ? "pause/break" : t;
}
(0, d.isMac)() || (I["223"] = "`"), Object.freeze(I);
let C = [
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
];
function O(e) {
    for (let [t, n] of C) if (t === e.toUpperCase()) return n;
    return e;
}
let R = /shift|meta|ctrl|alt$/;
function L(e) {
    let t = { keyCode: 0, key: "", code: "", metaKey: !1, shiftKey: !1, altKey: !1, ctrlKey: !1 };
    return null == e
        ? []
        : e.reduce((e, n) => {
              let i = g(n),
                  r = { ...t };
              if (null == i) return e.push({ ...r, combo: n }), e;
              if (R.test(i) && ("meta" === i || "shift" === i || "alt" === i || "ctrl" === i))
                  return (t[i + "Key"] = !0), e.map((e) => ((e[i + "Key"] = !0), e));
              {
                  let t = S(i, u.g$.BROWSER);
                  return null != t && (r.keyCode = t), e.push(r), e;
              }
          }, []);
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.zY.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, "")
        .replace(/NUMPAD \+/i, "numpad plus")
        .replace(/mod/i, l.Mu)
        .split("+")
        .map((e) => e.trim().replace("plus", "+"))
        .reduce((e, i) => {
            let r = S(
                (function (e) {
                    for (let [t, n] of C) if (n === e.toUpperCase()) return t.toLowerCase();
                    return e;
                })(i),
                t,
                n,
            );
            return null != r && e.push([n, r, t]), e;
        }, []);
}
function D(e) {
    return e
        .map((e) => {
            let [t, n, i] = e,
                r = "number" == typeof i ? i : m();
            switch (t) {
                case u.zY.KEYBOARD_KEY:
                case u.zY.KEYBOARD_MODIFIER_KEY:
                    return g(null != r ? [t, n, r] : [t, n]) ?? `UNK${n}`;
                case u.zY.MOUSE_BUTTON:
                    return `mouse${n}`;
                case u.zY.GAMEPAD_BUTTON:
                    return `gamepad${n}`;
                default:
                    return `dev${t},${n}`;
            }
        })
        .filter(o.Vq);
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = D(e);
    return t
        ? (-1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? i.map(O) : i).join(" + ").toUpperCase()
        : i.join("+");
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        e.length === t.length &&
        e.every((e, i) => {
            let [r, a, s] = e,
                [l, o, d] = t[i];
            return r === l && a === o && (!n || s === d);
        })
    );
}
function M(e) {
    return (
        null != e &&
        "object" == typeof e &&
        "nativeEvent" in e &&
        0 === e.nativeEvent.clientX &&
        0 === e.nativeEvent.clientY
    );
}
