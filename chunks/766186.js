n.d(t, { s: () => s });
var i = n(280551),
    r = n(706454),
    a = n(388032);
function s(e) {
    let t;
    let n = r.default.locale;
    try {
        t = Intl.DateTimeFormat(n, e).format;
    } catch (n) {
        t = Intl.DateTimeFormat(void 0, e).format;
    }
    if (null != i.s)
        try {
            let r = n === a.initialLocale,
                s = null != n && n.split('-')[0] === (null === a.systemLocale || void 0 === a.systemLocale ? void 0 : a.systemLocale.split('-')[0]),
                o = (0, i.s)(r && s ? void 0 : n, e);
            if (null != o)
                return function (e) {
                    try {
                        return o(e);
                    } catch (e) {}
                    return t(e);
                };
        } catch (e) {}
    return t;
}
