"use strict";
let r;
n.d(t, { A: () => h }), n(321073);
var i = n(635377),
    a = n.n(i),
    s = n(686956),
    o = n(71393),
    l = n(287809),
    u = n(927813),
    c = n(427262),
    d = n(985018);
let _ = new (a())({ maxAge: +u.A.Millis.MINUTE });
function f(e, t, n) {
    null != r && clearTimeout(r),
        (r = setTimeout(() => {
            let r = [],
                i = (e) => {
                    r.push(e.id);
                };
            if (null == e) r.push(...o.A.getGuildIds());
            else if (Array.isArray(e))
                e.forEach((e) => {
                    let t = o.A.getGuild(e);
                    null != t && i(t);
                });
            else {
                let t = o.A.getGuild(e);
                null != t && i(t);
            }
            r.length > 0 && s.A.requestMembers(r, t.toLocaleLowerCase(), n);
        }, 200));
}
function p(e, t) {
    let n = `${e ?? ""}:${t}`,
        r = _.get(n);
    if (null != r) return r;
    _.set(n, !0);
}
let h = {
    getGuildNameSuggestion: function (e) {
        let t = l.default.getCurrentUser(),
            n = c.mG(t);
        return null == n || 0 === n.length
            ? ""
            : d.intl.formatToPlainString(d.t.Y6Qfju, { username: e?.truncateUsername ? n.slice(0, 20) : n });
    },
    requestMembers(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Array.isArray(e),
            i = [],
            a = !1;
        r
            ? e.forEach((e) => {
                  null == p(e, t) && i.push(e);
              })
            : null == p(e, t) && (a = !0),
            i.length > 0 && r ? f(i, t, n) : a && f(e, t, n);
    },
};
