n.d(t, {
    A: () => d,
});
var r = n(64700),
    i = n(311907),
    a = n(384904),
    s = n(166403),
    o = n(244287),
    l = n(2242);
let c = [];

function u(e) {
    var t;
    let { ensureFresh: n, hasFetched: r, hasRoleSubscriptions: i } = e,
        a = s.A.getActiveGuildSubscriptions();
    return (
        ((null != (t = null == a ? void 0 : a.length) ? t : 0) === 0 && !!i) ||
        (!!n && !r) ||
        (!r && !s.A.hasFetchedSubscriptions())
    );
}

function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, o.A)() === l.M_.SUBSCRIBED,
        n = (0, i.bG)([s.A], () => s.A.getActiveGuildSubscriptions()),
        d = r.useRef(!1);
    return (
        r.useEffect(() => {
            u({
                ensureFresh: e,
                hasRoleSubscriptions: t,
                hasFetched: d.current,
            }) && ((d.current = !0), a.hP());
        }, [e, t]),
        null != n ? n : c
    );
}
