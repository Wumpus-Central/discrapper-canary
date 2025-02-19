n.d(t, {
    BB: () => R,
    C$: () => O,
    H9: () => y,
    Kd: () => C,
    d2: () => A,
    dU: () => b
}),
    n(47120),
    n(757143),
    n(301563),
    n(411104),
    n(653041),
    n(566702);
var r = n(921738),
    i = n.n(r),
    o = n(392711),
    a = n.n(o),
    s = n(714338),
    l = n(823379),
    c = n(358085),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (0, c.isLinux)() ? u.HsE : (0, c.isMac)() ? u.REU : (0, c.isWindows)() ? u.iC$ : void 0,
    m = a().invert(u.HsE);
(m['223'] = '`'), Object.freeze(m);
let g = Object.freeze(a().invert(u.REU)),
    E = a().invert(u.iC$);
(E['223'] = '`'), Object.freeze(E);
let v = a().invert(null != h ? h : {});
function b() {
    return (0, c.isLinux)() ? u.CgE.LINUX : (0, c.isMac)() ? u.CgE.MACOS : (0, c.isWindows)() ? u.CgE.WINDOWS : u.CgE.BROWSER;
}
function y(e) {
    let [, t, n] = e;
    switch (n) {
        case u.CgE.LINUX:
            return m['' + t];
        case u.CgE.MACOS:
            return g['' + t];
        case u.CgE.WINDOWS:
            return E['' + t];
        case u.CgE.BROWSER:
            return i()(t);
        default:
            return v['' + t];
    }
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.MoX.KEYBOARD_KEY;
    switch (n) {
        case u.MoX.KEYBOARD_KEY:
        case u.MoX.KEYBOARD_MODIFIER_KEY:
            switch (t) {
                case u.CgE.LINUX:
                    return u.HsE[e];
                case u.CgE.MACOS:
                    return u.REU[e];
                case u.CgE.WINDOWS:
                    return u.iC$[e];
                case u.CgE.BROWSER:
                    return i()(e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, '$2').replace('meta', 'command'));
                default:
                    return h[e];
            }
        case u.MoX.MOUSE_BUTTON:
            return parseInt(e.replace('MOUSE', ''), 10);
        case u.MoX.GAMEPAD_BUTTON:
            return parseInt(e.replace('GAMEPAD', ''), 10);
        default:
            throw Error('Unrecognized DeviceType '.concat(n, '.'));
    }
}
(0, c.isMac)() || (v['223'] = '`'), Object.freeze(v);
let S = [
        ['META', '\u2318'],
        ['RIGHT META', 'RIGHT \u2318'],
        ['SHIFT', '\u21E7'],
        ['RIGHT SHIFT', 'RIGHT \u21E7'],
        ['ALT', '\u2325'],
        ['RIGHT ALT', 'RIGHT \u2325'],
        ['CTRL', '\u2303'],
        ['RIGHT CTRL', 'RIGHT \u2303'],
        ['ENTER', '\u21B5'],
        ['BACKSPACE', '\u232B'],
        ['DEL', '\u2326'],
        ['ESC', '\u238B'],
        ['PAGEUP', '\u21DE'],
        ['PAGEDOWN', '\u21DF'],
        ['UP', '\u2191'],
        ['DOWN', '\u2193'],
        ['LEFT', '\u2190'],
        ['RIGHT', '\u2192'],
        ['HOME', '\u2196'],
        ['END', '\u2198'],
        ['TAB', '\u21E5'],
        ['SPACE', '\u2423']
    ],
    I = (e) => {
        for (let [t, n] of S) if (t === e.toUpperCase()) return n;
        return e;
    },
    T = (e) => {
        for (let [t, n] of S) if (n === e.toUpperCase()) return t.toLowerCase();
        return e;
    },
    N = /shift|meta|ctrl|alt$/;
function A(e) {
    let t = {
        keyCode: 0,
        metaKey: !1,
        shiftKey: !1,
        altKey: !1,
        ctrlKey: !1
    };
    return null == e
        ? []
        : e.reduce((e, n) => {
              let r = y(n),
                  i = f({}, t);
              if (null == r) return e.push(_(f({}, i), { combo: n })), e;
              if (N.test(r)) return (t[r + 'Key'] = !0), e.map((e) => ((e[r + 'Key'] = !0), e));
              {
                  let t = O(r, u.CgE.BROWSER);
                  return null != t && (i.keyCode = t), e.push(i), e;
              }
          }, []);
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.MoX.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, '')
        .replace(/NUMPAD \+/i, 'numpad plus')
        .replace(/mod/i, s.Z.modKey)
        .split('+')
        .map((e) => e.trim().replace('plus', '+'))
        .reduce((e, r) => {
            let i = O(T(r), t, n);
            return null != i && e.push([n, i, t]), e;
        }, []);
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e
            .map((e) => {
                let [t, n, r] = e;
                if (t === u.MoX.KEYBOARD_KEY || t === u.MoX.KEYBOARD_MODIFIER_KEY) {
                    var i;
                    return null !== (i = y(null != r ? [t, n, r] : [t, n])) && void 0 !== i ? i : 'UNK'.concat(n);
                }
                return t === u.MoX.MOUSE_BUTTON ? 'mouse'.concat(n) : t === u.MoX.GAMEPAD_BUTTON ? 'gamepad'.concat(n) : 'dev'.concat(t, ',').concat(n);
            })
            .filter(l.lm);
    return t ? (-1 !== n.g.navigator.appVersion.indexOf('Mac OS X') ? r.map(I) : r).join(' + ').toUpperCase() : r.join('+');
}
