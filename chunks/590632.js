n.d(t, { A: () => d });
var i = n(64700),
    s = n(311907),
    r = n(384904),
    a = n(166403),
    l = n(244287),
    o = n(2242);
let c = [];
function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, l.A)() === o.M_.SUBSCRIBED,
        n = (0, s.bG)([a.A], () => a.A.getActiveGuildSubscriptions()),
        d = i.useRef(!1);
    return (
        i.useEffect(() => {
            (function (e) {
                let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                    s = a.A.getActiveGuildSubscriptions();
                return ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !a.A.hasFetchedSubscriptions());
            })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: d.current }) && ((d.current = !0), r.hP());
        }, [e, t]),
        n ?? c
    );
}
