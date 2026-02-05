"use strict";
n.d(t, { t: () => l });
var r = n(151258),
    i = n(773669),
    a = n(985018);
function s(e, t) {
    try {
        return Intl.DateTimeFormat(e, t).format;
    } catch (e) {
        return Intl.DateTimeFormat(void 0, t).format;
    }
}
function o(e, t) {
    if (null == r.t) return null;
    try {
        let n = e === a.initialLocale,
            i = null != e && e.split("-")[0] === a.systemLocale?.split("-")[0],
            o = (0, r.t)(n && i ? void 0 : e, t);
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
    let t = i.default.locale,
        n = o(t, e);
    return null != n ? n : s(t, e);
}
