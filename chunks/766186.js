n.d(t, { s: () => l });
var i = n(280551),
    r = n(706454),
    a = n(388032);
function s(e, t) {
    try {
        return Intl.DateTimeFormat(e, t).format;
    } catch (e) {
        return Intl.DateTimeFormat(void 0, t).format;
    }
}
function o(e, t) {
    if (null == i.s) return null;
    try {
        let n = e === a.initialLocale,
            r = null != e && e.split('-')[0] === (null === a.systemLocale || void 0 === a.systemLocale ? void 0 : a.systemLocale.split('-')[0]),
            o = (0, i.s)(n && r ? void 0 : e, t);
        if (null == o) return null;
        let l = null;
        return function (n) {
            try {
                return o(n);
            } catch (e) {}
            return null == l && (l = s(e, t)), l(n);
        };
    } catch (e) {
        return null;
    }
}
function l(e) {
    let t = r.default.locale,
        n = o(t, e);
    return null != n ? n : s(t, e);
}
