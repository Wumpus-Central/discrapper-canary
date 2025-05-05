n.d(t, {
    BB: () => j,
    C$: () => A,
    H9: () => T,
    Kd: () => k,
    d2: () => M,
    dU: () => I
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
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
let m = __OVERLAY__ ? d.iC$ : (0, c.isLinux)() ? d.HsE : (0, c.isMac)() ? d.REU : (0, c.isWindows)() ? d.iC$ : {},
    g = o().invert(d.HsE);
(g['223'] = '`'), Object.freeze(g);
let E = Object.freeze(o().invert(d.REU)),
    b = o().invert(d.iC$);
(b['223'] = '`'), Object.freeze(b);
let y = o().invert(null != m ? m : {});
function O(e) {
    return '+' === e ? 'plus' : e;
}
function v(e, t, n) {
    if ((null != n && n !== d.CgE.WINDOWS) || !u.Dz.has(e)) return t;
    let r = (0, u.pz)().get('Backquote');
    if (t === r) return O(t);
    let i = {
            key: r,
            code: 'Backquote',
            keyCode: e
        },
        a = (0, u.jd)(i);
    return '\\' === t && '`' === r ? t : null == a ? O(null != r ? r : t) : O(a.key);
}
function I() {
    return (0, c.isLinux)() ? d.CgE.LINUX : (0, c.isMac)() ? d.CgE.MACOS : (0, c.isWindows)() ? d.CgE.WINDOWS : __OVERLAY__ ? d.CgE.WINDOWS : d.CgE.BROWSER;
}
function S(e) {
    let t,
        [, n, r] = e;
    switch (r) {
        case d.CgE.LINUX:
            t = g['' + n];
            break;
        case d.CgE.MACOS:
            t = E['' + n];
            break;
        case d.CgE.WINDOWS:
            t = b['' + n];
            break;
        case d.CgE.BROWSER: {
            let e = i()(n);
            if (null == e) return null;
            t = N(e);
            break;
        }
        default:
            t = y['' + n];
    }
    return null != t ? t : null;
}
function T(e) {
    let [, t, n] = e,
        r = S(e);
    if (null != r) return v(t, r, n);
    let i = (0, u._v)(t);
    return null != i ? v(i.keyCode, i.key, n) : null;
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.MoX.KEYBOARD_KEY,
        r = C(e, t, n);
    if (null != r) return r;
    let i = (0, u.T_)(e);
    return null != i ? i.keyCode : null;
}
function N(e) {
    let t = e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, '$2').replace('meta', 'command');
    return 'pause' === t || 'break' === t ? 'pause/break' : t;
}
function C(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.MoX.KEYBOARD_KEY;
    if (null == e) return null;
    let a = r === d.MoX.KEYBOARD_KEY || r === d.MoX.KEYBOARD_MODIFIER_KEY;
    switch (!0) {
        case a && n === d.CgE.LINUX:
            t = d.HsE[e];
            break;
        case a && n === d.CgE.MACOS:
            t = d.REU[e];
            break;
        case a && n === d.CgE.WINDOWS:
            t = '+' === e ? d.iC$.plus : d.iC$[e];
            break;
        case a && n === d.CgE.BROWSER:
            t = i()(N(e));
            break;
        case a:
            t = m[e];
            break;
        case r === d.MoX.MOUSE_BUTTON:
            t = parseInt(e.replace('MOUSE', ''), 10);
            break;
        case r === d.MoX.GAMEPAD_BUTTON:
            t = parseInt(e.replace('GAMEPAD', ''), 10);
            break;
        default:
            throw Error('Unrecognized DeviceType '.concat(r, '.'));
    }
    return null != t ? t : null;
}
(0, c.isMac)() || (y['223'] = '`'), Object.freeze(y);
let R = [
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
    P = (e) => {
        for (let [t, n] of R) if (t === e.toUpperCase()) return n;
        return e;
    },
    w = (e) => {
        for (let [t, n] of R) if (n === e.toUpperCase()) return t.toLowerCase();
        return e;
    },
    D = /shift|meta|ctrl|alt$/;
function L(e) {
    return 'meta' === e || 'shift' === e || 'alt' === e || 'ctrl' === e;
}
function x(e) {
    return e + 'Key';
}
function M(e) {
    let t = {
        keyCode: 0,
        key: '',
        code: '',
        metaKey: !1,
        shiftKey: !1,
        altKey: !1,
        ctrlKey: !1
    };
    return null == e
        ? []
        : e.reduce((e, n) => {
              let r = T(n),
                  i = _({}, t);
              if (null == r) return e.push(h(_({}, i), { combo: n })), e;
              if (D.test(r) && L(r)) return (t[x(r)] = !0), e.map((e) => ((e[x(r)] = !0), e));
              {
                  let t = A(r, d.CgE.BROWSER);
                  return null != t && (i.keyCode = t), e.push(i), e;
              }
          }, []);
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.MoX.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, '')
        .replace(/NUMPAD \+/i, 'numpad plus')
        .replace(/mod/i, s.Z.modKey)
        .split('+')
        .map((e) => e.trim().replace('plus', '+'))
        .reduce((e, r) => {
            let i = A(w(r), t, n);
            return null != i && e.push([n, i, t]), e;
        }, []);
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e
            .map((e) => {
                let [t, n, r] = e,
                    i = 'number' == typeof r ? r : I();
                if (t === d.MoX.KEYBOARD_KEY || t === d.MoX.KEYBOARD_MODIFIER_KEY) {
                    var a;
                    return null != (a = T(null != i ? [t, n, i] : [t, n])) ? a : 'UNK'.concat(n);
                }
                return t === d.MoX.MOUSE_BUTTON ? 'mouse'.concat(n) : t === d.MoX.GAMEPAD_BUTTON ? 'gamepad'.concat(n) : 'dev'.concat(t, ',').concat(n);
            })
            .filter(l.lm);
    return t ? (-1 !== n.g.navigator.appVersion.indexOf('Mac OS X') ? r.map(P) : r).join(' + ').toUpperCase() : r.join('+');
}
