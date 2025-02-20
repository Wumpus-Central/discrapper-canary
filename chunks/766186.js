n.d(t, { s: () => l }), n(301563);
var r = n(280551),
    i = n(706454),
    o = n(388032);
function a(e, t) {
    try {
        return Intl.DateTimeFormat(e, t).format;
    } catch (e) {
        return Intl.DateTimeFormat(void 0, t).format;
    }
}
function s(e, t) {
    if (null == r.s) return null;
    try {
        let n = e === o.St,
            i = null != e && e.split('-')[0] === (null === o.Kj || void 0 === o.Kj ? void 0 : o.Kj.split('-')[0]),
            s = (0, r.s)(n && i ? void 0 : e, t);
        if (null == s) return null;
        let l = null;
        return function (n) {
            try {
                return s(n);
            } catch (e) {}
            return null == l && (l = a(e, t)), l(n);
        };
    } catch (e) {
        return null;
    }
}
function l(e) {
    let t = i.default.locale,
        n = s(t, e);
    return null != n ? n : a(t, e);
}
