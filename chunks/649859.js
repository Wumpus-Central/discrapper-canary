r.d(n, {
    Kq: function () {
        return T;
    },
    L0: function () {
        return D;
    },
    Ux: function () {
        return N;
    },
    Xe: function () {
        return O;
    },
    aQ: function () {
        return A;
    },
    bU: function () {
        return y;
    },
    qb: function () {
        return S;
    }
});
var i = r(192379),
    a = r(198453),
    o = r(133886),
    s = r(495484),
    l = r(661763),
    u = r(881085);
let c = new Set(['Arab', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']),
    d = new Set(['ae', 'ar', 'arc', 'bcc', 'bqi', 'ckb', 'dv', 'fa', 'glk', 'he', 'ku', 'mzn', 'nqo', 'pnb', 'ps', 'sd', 'ug', 'ur', 'yi']);
function f(e) {
    if (Intl.Locale) {
        let n = new Intl.Locale(e).maximize(),
            r = 'function' == typeof n.getTextInfo ? n.getTextInfo() : n.textInfo;
        if (r) return 'rtl' === r.direction;
        if (n.script) return c.has(n.script);
    }
    let n = e.split('-')[0];
    return d.has(n);
}
let p = Symbol.for('react-aria.i18n.locale');
function h() {
    let e = ('undefined' != typeof window && window[p]) || ('undefined' != typeof navigator && (navigator.language || navigator.userLanguage)) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch (n) {
        e = 'en-US';
    }
    return {
        locale: e,
        direction: f(e) ? 'rtl' : 'ltr'
    };
}
let _ = h(),
    m = new Set();
function g() {
    for (let e of ((_ = h()), m)) e(_);
}
function E() {
    let e = (0, a.Av)(),
        [n, r] = (0, i.useState)(_);
    return ((0, i.useEffect)(
        () => (
            0 === m.size && window.addEventListener('languagechange', g),
            m.add(r),
            () => {
                m.delete(r), 0 === m.size && window.removeEventListener('languagechange', g);
            }
        ),
        []
    ),
    e)
        ? {
              locale: 'en-US',
              direction: 'ltr'
          }
        : n;
}
let v = i.createContext(null);
function y() {
    let e = E();
    return (0, i.useContext)(v) || e;
}
let b = new WeakMap();
function I(e) {
    let n = b.get(e);
    return !n && ((n = new o.J(e)), b.set(e, n)), n;
}
function T(e, n) {
    return (n && (0, o.J).getGlobalDictionaryForPackage(n)) || I(e);
}
function S(e, n) {
    let { locale: r } = y(),
        a = T(e, n);
    return (0, i.useMemo)(() => new o.E(r, a), [r, a]);
}
function A(e) {
    e = (0, l.vE)(null != e ? e : {}, C);
    let { locale: n } = y();
    return (0, i.useMemo)(() => new s.C(n, e), [n, e]);
}
function C(e, n) {
    if (e === n) return !0;
    let r = Object.keys(e),
        i = Object.keys(n);
    if (r.length !== i.length) return !1;
    for (let i of r) if (n[i] !== e[i]) return !1;
    return !0;
}
function N(e = {}) {
    let { locale: n } = y();
    return (0, i.useMemo)(() => new u.e(n, e), [n, e]);
}
let R = new Map();
function O(e) {
    let { locale: n } = y(),
        r =
            n +
            (e
                ? Object.entries(e)
                      .sort((e, n) => (e[0] < n[0] ? -1 : 1))
                      .join()
                : '');
    if (R.has(r)) return R.get(r);
    let i = new Intl.Collator(n, e);
    return R.set(r, i), i;
}
function D(e) {
    let n = O({
            usage: 'search',
            ...e
        }),
        r = (0, i.useCallback)((e, r) => 0 === r.length || ((e = e.normalize('NFC')), (r = r.normalize('NFC')), 0 === n.compare(e.slice(0, r.length), r)), [n]),
        a = (0, i.useCallback)((e, r) => 0 === r.length || ((e = e.normalize('NFC')), (r = r.normalize('NFC')), 0 === n.compare(e.slice(-r.length), r)), [n]),
        o = (0, i.useCallback)(
            (e, r) => {
                if (0 === r.length) return !0;
                (e = e.normalize('NFC')), (r = r.normalize('NFC'));
                let i = 0,
                    a = r.length;
                for (; i + a <= e.length; i++) {
                    let o = e.slice(i, i + a);
                    if (0 === n.compare(r, o)) return !0;
                }
                return !1;
            },
            [n]
        );
    return (0, i.useMemo)(
        () => ({
            startsWith: r,
            endsWith: a,
            contains: o
        }),
        [r, a, o]
    );
}
