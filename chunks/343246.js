"use strict";
n.d(t, { t: () => o });
var r = n(151258),
    i = n(773669),
    s = n(985018);
function a(e, t) {
    try {
        return Intl.DateTimeFormat(e, t).format;
    } catch (e) {
        return Intl.DateTimeFormat(void 0, t).format;
    }
}
function o(e) {
    let t = i.default.locale,
        n = (function (e, t) {
            if (null == r.t) return null;
            try {
                let n = e === s.initialLocale,
                    i = null != e && e.split("-")[0] === s.systemLocale?.split("-")[0],
                    o = (0, r.t)(n && i ? void 0 : e, t);
                if (null == o) return null;
                let l = null;
                return function (n) {
                    try {
                        return o(n);
                    } catch (e) {}
                    return null == l && (l = a(e, t)), l(n);
                };
            } catch (e) {
                return null;
            }
        })(t, e);
    return null != n ? n : a(t, e);
}
