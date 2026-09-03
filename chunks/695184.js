let i;
n.d(t, { A: () => h }), n(321073);
var r = n(635377),
    a = n.n(r),
    s = n(66834),
    l = n(71393),
    o = n(287809),
    d = n(927813),
    c = n(427262),
    u = n(375708);
let _ = new (a())({ maxAge: +d.A.Millis.MINUTE });
function E(e, t, n) {
    null != i && clearTimeout(i),
        (i = setTimeout(() => {
            let i = [];
            function r(e) {
                i.push(e.id);
            }
            if (null == e) i.push(...l.A.getGuildIds());
            else if (Array.isArray(e))
                e.forEach((e) => {
                    let t = l.A.getGuild(e);
                    null != t && r(t);
                });
            else {
                let t = l.A.getGuild(e);
                null != t && r(t);
            }
            i.length > 0 && s.A.requestMembers(i, t.toLocaleLowerCase(), n);
        }, 200));
}
function A(e, t) {
    let n = `${e ?? ""}:${t}`,
        i = _.get(n);
    if (null != i) return i;
    _.set(n, !0);
}
let h = {
    getGuildNameSuggestion: function (e) {
        let t = o.default.getCurrentUser(),
            n = c.mG(t);
        return null == n || 0 === n.length
            ? ""
            : u.intl.formatToPlainString(u.t.Y6Qfju, { username: e?.truncateUsername ? n.slice(0, 20) : n });
    },
    requestMembers(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            i = Array.isArray(e),
            r = [],
            a = !1;
        i
            ? e.forEach((e) => {
                  null == A(e, t) && r.push(e);
              })
            : null == A(e, t) && (a = !0),
            r.length > 0 && i ? E(r, t, n) : a && E(e, t, n);
    },
};
