n.d(t, { s: () => l }), n(35282);
var r = n(280551),
    i = n(706454),
    a = n(388032);
function o(e, t) {
    try {
        return Intl.DateTimeFormat(e, t).format;
    } catch (e) {
        return Intl.DateTimeFormat(void 0, t).format;
    }
}
function s(e, t) {
    if (null == r.s) return null;
    try {
        let n = e === a.St,
            i = null != e && e.split('-')[0] === (null === a.Kj || void 0 === a.Kj ? void 0 : a.Kj.split('-')[0]),
            s = (0, r.s)(n && i ? void 0 : e, t);
        if (null == s) return null;
        let l = null;
        return function (n) {
            try {
                return s(n);
            } catch (e) {}
            return null == l && (l = o(e, t)), l(n);
        };
    } catch (e) {
        return null;
    }
}
function l(e) {
    let t = i.default.locale,
        n = s(t, e);
    return null != n ? n : o(t, e);
}
