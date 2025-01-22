r.d(n, {
    s: function () {
        return s;
    }
});
var i = r(280551),
    a = r(706454),
    o = r(388032);
function s(e) {
    let n;
    let r = a.default.locale;
    try {
        n = Intl.DateTimeFormat(r, e).format;
    } catch (r) {
        n = Intl.DateTimeFormat(void 0, e).format;
    }
    if (null != i.s)
        try {
            let a = r === o.initialLocale,
                s = null != r && r.split('-')[0] === (null === o.systemLocale || void 0 === o.systemLocale ? void 0 : o.systemLocale.split('-')[0]),
                l = (0, i.s)(a && s ? void 0 : r, e);
            if (null != l)
                return function (e) {
                    try {
                        return l(e);
                    } catch (e) {}
                    return n(e);
                };
        } catch (e) {}
    return n;
}
