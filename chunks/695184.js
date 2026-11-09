let i;
n(321073);
var r = n(635377),
    a = n.n(r),
    s = n(73153),
    l = n(778858),
    o = n(71393),
    d = n(287809),
    c = n(927813),
    u = n(427262),
    _ = n(792996);
let E = new (a())({ maxAge: +c.A.Millis.MINUTE });
function A(e, t, n) {
    (null != i && clearTimeout(i),
        (i = setTimeout(() => {
            let i = [];
            function r(e) {
                i.push(e.id);
            }
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
            i.length > 0 && l.A.requestMembers(i, t.toLocaleLowerCase(), n);
        }, 200)));
}
function f(e, t) {
    let n = `${e ?? ""}:${t}`,
        i = E.get(n);
    if (null != i) return i;
    E.set(n, !0);
}
(s.h.subscribe("CONNECTION_OPEN", () => {
    E.reset();
}),
    n.d(
        t,
        {},
        {
            A: {
                getGuildNameSuggestion: function (e) {
                    let t = d.default.getCurrentUser(),
                        n = u.mG(t);
                    return null == n || 0 === n.length
                        ? ""
                        : _.intl.formatToPlainString(_.t.Y6Qfju, {
                              username: e?.truncateUsername ? n.slice(0, 20) : n,
                          });
                },
                requestMembers(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        i = Array.isArray(e),
                        r = [],
                        a = !1;
                    (i
                        ? e.forEach((e) => {
                              null == f(e, t) && r.push(e);
                          })
                        : null == f(e, t) && (a = !0),
                        r.length > 0 && i ? A(r, t, n) : a && A(e, t, n));
                },
            },
        },
    ));
