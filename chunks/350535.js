n.d(t, {
    Cy: () => C,
    OH: () => k,
    Qd: () => T,
    Xt: () => G,
    Z0: () => A,
    _$: () => S,
    dI: () => U,
    pi: () => M,
    sg: () => V,
}),
    n(896048),
    n(747238),
    n(812715),
    n(65821),
    n(321073),
    n(733351);
var r = n(695497),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(775121),
    l = n(403362),
    c = n(723702),
    u = n(316501),
    d = n(650583);

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

function h(e, t) {
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
let m = __OVERLAY__ ? d.Nu : (0, c.isLinux)() ? d.C8 : (0, c.isMac)() ? d.V8 : (0, c.isWindows)() ? d.Nu : {},
    g = s().invert(d.C8);
(g["223"] = "`"), Object.freeze(g);
let E = Object.freeze(s().invert(d.V8)),
    b = s().invert(d.Nu);
(b["223"] = "`"), Object.freeze(b);
let y = s().invert(null != m ? m : {});

function O(e) {
    return "+" === e ? "plus" : e;
}

function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S();
    return t === d.g$.BROWSER ? i()(e) : m[e];
}

function v(e, t, n) {
    if ((null != n && n !== d.g$.WINDOWS) || !u.Kh.has(e)) return t;
    let r = (0, u.Ze)().get("Backquote");
    if (t === r) return O(t);
    let i = {
            key: r,
            code: "Backquote",
            keyCode: e,
        },
        a = (0, u.sv)(i);
    return "\\" === t && "`" === r ? t : null == a ? O(null != r ? r : t) : O(a.key);
}

function S() {
    return (0, c.isLinux)()
        ? d.g$.LINUX
        : (0, c.isMac)()
          ? d.g$.MACOS
          : (0, c.isWindows)()
            ? d.g$.WINDOWS
            : __OVERLAY__
              ? d.g$.WINDOWS
              : d.g$.BROWSER;
}

function I(e) {
    let t,
        [, n, r] = e;
    switch (r) {
        case d.g$.LINUX:
            t = g["" + n];
            break;
        case d.g$.MACOS:
            t = E["" + n];
            break;
        case d.g$.WINDOWS:
            t = b["" + n];
            break;
        case d.g$.BROWSER: {
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

function T(e) {
    let [, t, n] = e,
        r = I(e);
    if (null != r) return v(t, r, n);
    let i = (0, u.Pk)(t);
    return null != i ? v(i.keyCode, i.key, n) : null;
}

function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY,
        r = R(e, t, n);
    if (null != r) return r;
    let i = (0, u.Q_)(e);
    return null != i ? i.keyCode : null;
}

function N(e) {
    let t = e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
    return "pause" === t || "break" === t ? "pause/break" : t;
}

function R(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S(),
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY;
    if (null == e) return null;
    let a = r === d.zY.KEYBOARD_KEY || r === d.zY.KEYBOARD_MODIFIER_KEY;
    switch (!0) {
        case a && n === d.g$.LINUX:
            t = d.C8[e];
            break;
        case a && n === d.g$.MACOS:
            t = d.V8[e];
            break;
        case a && n === d.g$.WINDOWS:
            t = "+" === e ? d.Nu.plus : d.Nu[e];
            break;
        case a && n === d.g$.BROWSER:
            t = i()(N(e));
            break;
        case a:
            t = m[e];
            break;
        case r === d.zY.MOUSE_BUTTON:
            t = parseInt(e.replace("MOUSE", ""), 10);
            break;
        case r === d.zY.GAMEPAD_BUTTON:
            t = parseInt(e.replace("GAMEPAD", ""), 10);
            break;
        default:
            throw Error("Unrecognized DeviceType ".concat(r, "."));
    }
    return null != t ? t : null;
}
(0, c.isMac)() || (y["223"] = "`"), Object.freeze(y);
let w = [
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
    P = (e) => {
        for (let [t, n] of w) if (t === e.toUpperCase()) return n;
        return e;
    },
    D = (e) => {
        for (let [t, n] of w) if (n === e.toUpperCase()) return t.toLowerCase();
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
              let r = T(n),
                  i = p({}, t);
              if (null == r)
                  return (
                      e.push(
                          h(p({}, i), {
                              combo: n,
                          }),
                      ),
                      e
                  );
              if (x.test(r) && L(r)) return (t[j(r)] = !0), e.map((e) => ((e[j(r)] = !0), e));
              {
                  let t = C(r, d.g$.BROWSER);
                  return null != t && (i.keyCode = t), e.push(i), e;
              }
          }, []);
}

function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.zY.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, "")
        .replace(/NUMPAD \+/i, "numpad plus")
        .replace(/mod/i, o.A.modKey)
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
                    i = "number" == typeof r ? r : S();
                if (t === d.zY.KEYBOARD_KEY || t === d.zY.KEYBOARD_MODIFIER_KEY) {
                    var a;
                    return null != (a = T(null != i ? [t, n, i] : [t, n])) ? a : "UNK".concat(n);
                }
                return t === d.zY.MOUSE_BUTTON
                    ? "mouse".concat(n)
                    : t === d.zY.GAMEPAD_BUTTON
                      ? "gamepad".concat(n)
                      : "dev".concat(t, ",").concat(n);
            })
            .filter(l.Vq);
    return t
        ? (-1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? r.map(P) : r).join(" + ").toUpperCase()
        : r.join("+");
}

function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        e.length === t.length &&
        e.every((e, r) => {
            let [i, a, s] = e,
                [o, l, c] = t[r];
            return i === o && a === l && (!n || s === c);
        })
    );
}

function V(e) {
    return (
        null != e &&
        "object" == typeof e &&
        "nativeEvent" in e &&
        0 === e.nativeEvent.clientX &&
        0 === e.nativeEvent.clientY
    );
}
