r.d(n, {
    BB: function () {
        return L;
    },
    C$: function () {
        return S;
    },
    H9: function () {
        return T;
    },
    Kd: function () {
        return D;
    },
    d2: function () {
        return O;
    },
    dU: function () {
        return I;
    }
});
var i = r(47120);
var a = r(757143);
var o = r(411104);
var s = r(724458);
var l = r(653041);
var u = r(921738),
    c = r.n(u),
    d = r(392711),
    f = r.n(d),
    p = r(714338),
    h = r(823379),
    _ = r(358085),
    m = r(981631);
let g = (() => ((0, _.isLinux)() ? m.HsE : (0, _.isMac)() ? m.REU : (0, _.isWindows)() ? m.iC$ : void 0))(),
    E = f().invert(m.HsE);
(E['223'] = '`'), Object.freeze(E);
let v = Object.freeze(f().invert(m.REU)),
    y = f().invert(m.iC$);
(y['223'] = '`'), Object.freeze(y);
let b = f().invert(null != g ? g : {});
function I() {
    if ((0, _.isLinux)()) return m.CgE.LINUX;
    if ((0, _.isMac)()) return m.CgE.MACOS;
    if ((0, _.isWindows)()) return m.CgE.WINDOWS;
    else return m.CgE.BROWSER;
}
function T(e) {
    let [, n, r] = e;
    switch (r) {
        case m.CgE.LINUX:
            return E['' + n];
        case m.CgE.MACOS:
            return v['' + n];
        case m.CgE.WINDOWS:
            return y['' + n];
        case m.CgE.BROWSER:
            return c()(n);
        default:
            return b['' + n];
    }
}
function S(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.MoX.KEYBOARD_KEY;
    switch (r) {
        case m.MoX.KEYBOARD_KEY:
        case m.MoX.KEYBOARD_MODIFIER_KEY:
            switch (n) {
                case m.CgE.LINUX:
                    return m.HsE[e];
                case m.CgE.MACOS:
                    return m.REU[e];
                case m.CgE.WINDOWS:
                    return m.iC$[e];
                case m.CgE.BROWSER:
                    return c()(e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, '$2').replace('meta', 'command'));
                default:
                    return g[e];
            }
        case m.MoX.MOUSE_BUTTON:
            return parseInt(e.replace('MOUSE', ''), 10);
        case m.MoX.GAMEPAD_BUTTON:
            return parseInt(e.replace('GAMEPAD', ''), 10);
        default:
            throw Error('Unrecognized DeviceType '.concat(r, '.'));
    }
}
!(0, _.isMac)() && (b['223'] = '`'), Object.freeze(b);
let A = [
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
    C = (e) => {
        for (let [n, r] of A) if (n === e.toUpperCase()) return r;
        return e;
    },
    N = (e) => {
        for (let [n, r] of A) if (r === e.toUpperCase()) return n.toLowerCase();
        return e;
    },
    R = /shift|meta|ctrl|alt$/;
function O(e) {
    let n = {
        keyCode: 0,
        metaKey: !1,
        shiftKey: !1,
        altKey: !1,
        ctrlKey: !1
    };
    return null == e
        ? []
        : e.reduce((e, r) => {
              let i = T(r),
                  a = { ...n };
              if (null == i)
                  return (
                      e.push({
                          ...a,
                          combo: r
                      }),
                      e
                  );
              if (R.test(i)) return (n[i + 'Key'] = !0), e.map((e) => ((e[i + 'Key'] = !0), e));
              {
                  let n = S(i, m.CgE.BROWSER);
                  return null != n && (a.keyCode = n), e.push(a), e;
              }
          }, []);
}
function D(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(),
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.MoX.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, '')
        .replace(/NUMPAD \+/i, 'numpad plus')
        .replace(/mod/i, p.Z.modKey)
        .split('+')
        .map((e) => e.trim().replace('plus', '+'))
        .reduce((e, i) => {
            let a = S(N(i), n, r);
            return null != a && e.push([r, a, n]), e;
        }, []);
}
function L(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = e
            .map((e) => {
                let [n, r, i] = e;
                if (n === m.MoX.KEYBOARD_KEY || n === m.MoX.KEYBOARD_MODIFIER_KEY) {
                    var a;
                    return null !== (a = T(null != i ? [n, r, i] : [n, r])) && void 0 !== a ? a : 'UNK'.concat(r);
                }
                if (n === m.MoX.MOUSE_BUTTON) return 'mouse'.concat(r);
                if (n === m.MoX.GAMEPAD_BUTTON) return 'gamepad'.concat(r);
                else return 'dev'.concat(n, ',').concat(r);
            })
            .filter(h.lm);
    return n ? (-1 !== r.g.navigator.appVersion.indexOf('Mac OS X') ? i.map(C) : i).join(' + ').toUpperCase() : i.join('+');
}
