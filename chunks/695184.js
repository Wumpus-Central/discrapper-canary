"use strict";
let i;
n.d(t, { A: () => p }), n(321073);
var r = n(635377),
    s = n.n(r),
    a = n(66834),
    o = n(71393),
    l = n(287809),
    u = n(927813),
    c = n(427262),
    d = n(375708);
let _ = new (s())({ maxAge: +u.A.Millis.MINUTE });
function f(e, t, n) {
    null != i && clearTimeout(i),
        (i = setTimeout(() => {
            let i = [],
                r = (e) => {
                    i.push(e.id);
                };
            if (null == e) i.push(...o.A.getGuildIds());
            else if (Array.isArray(e))
                e.forEach((e) => {
                    let t = o.A.getGuild(e);
                    null != t && r(t);
                });
            else {
                let t = o.A.getGuild(e);
                null != t && r(t);
            }
            i.length > 0 && a.A.requestMembers(i, t.toLocaleLowerCase(), n);
        }, 200));
}
function h(e, t) {
    let n = `${e ?? ""}:${t}`,
        i = _.get(n);
    if (null != i) return i;
    _.set(n, !0);
}
let p = {
    getGuildNameSuggestion: function (e) {
        let t = l.default.getCurrentUser(),
            n = c.mG(t);
        return null == n || 0 === n.length
            ? ""
            : d.intl.formatToPlainString(d.t.Y6Qfju, { username: e?.truncateUsername ? n.slice(0, 20) : n });
    },
    requestMembers(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            i = Array.isArray(e),
            r = [],
            s = !1;
        i
            ? e.forEach((e) => {
                  null == h(e, t) && r.push(e);
              })
            : null == h(e, t) && (s = !0),
            r.length > 0 && i ? f(r, t, n) : s && f(e, t, n);
    },
};
