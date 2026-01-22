let r;
n.d(t, {
    A: () => h,
}),
    n(321073),
    n(896048);
var i = n(635377),
    a = n.n(i),
    s = n(686956),
    o = n(71393),
    l = n(287809),
    c = n(927813),
    u = n(427262),
    d = n(985018);
let f = new (a())({
    maxAge: +c.A.Millis.MINUTE,
});

function p(e, t, n) {
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

function _(e, t) {
    let n = "".concat(null != e ? e : "", ":").concat(t),
        r = f.get(n);
    if (null != r) return r;
    f.set(n, !0);
}
let h = {
    getGuildNameSuggestion: function (e) {
        let t = l.default.getCurrentUser(),
            n = u.mG(t);
        return null == n || 0 === n.length
            ? ""
            : d.intl.formatToPlainString(d.t.Y6Qfju, {
                  username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n,
              });
    },
    requestMembers(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Array.isArray(e),
            i = [],
            a = !1;
        r
            ? e.forEach((e) => {
                  null == _(e, t) && i.push(e);
              })
            : null == _(e, t) && (a = !0),
            i.length > 0 && r ? p(i, t, n) : a && p(e, t, n);
    },
};
