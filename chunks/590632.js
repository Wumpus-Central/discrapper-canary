n.d(t, { A: () => u });
var i = n(64700),
    s = n(311907),
    l = n(323082),
    a = n(166403),
    r = n(244287),
    o = n(2242);
let d = [];
function u() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.A)() === o.M_.SUBSCRIBED,
        n = (0, s.bG)([a.A], () => a.A.getActiveGuildSubscriptions()),
        u = i.useRef(!1);
    return (
        i.useEffect(() => {
            (function (e) {
                let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                    s = a.A.getActiveGuildSubscriptions();
                return ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !a.A.hasFetchedSubscriptions());
            })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: u.current }) && ((u.current = !0), l.hP());
        }, [e, t]),
        n ?? d
    );
}
