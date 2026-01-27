n.d(t, {
    A: () => d,
});
var r = n(64700),
    i = n(311907),
    l = n(384904),
    s = n(166403),
    a = n(244287),
    o = n(2242);
let c = [];

function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, a.A)() === o.M_.SUBSCRIBED,
        n = (0, i.bG)([s.A], () => s.A.getActiveGuildSubscriptions()),
        d = r.useRef(!1);
    return (
        r.useEffect(() => {
            (function (e) {
                var t;
                let { ensureFresh: n, hasFetched: r, hasRoleSubscriptions: i } = e,
                    l = s.A.getActiveGuildSubscriptions();
                return (
                    ((null != (t = null == l ? void 0 : l.length) ? t : 0) === 0 && !!i) ||
                    (!!n && !r) ||
                    (!r && !s.A.hasFetchedSubscriptions())
                );
            })({
                ensureFresh: e,
                hasRoleSubscriptions: t,
                hasFetched: d.current,
            }) && ((d.current = !0), l.hP());
        }, [e, t]),
        null != n ? n : c
    );
}
