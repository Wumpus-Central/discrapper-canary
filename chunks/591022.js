var i = n(855986),
    l = n(975460),
    s = n(587895),
    r = n(733110);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A;
    if (!t.isHydrated(e)) return t.didFetchingApplicationFail(e) ? "error" : "loading";
    let i = (0, l.t)(t.getApplication(e));
    if (null == i) return "link_unavailable";
    let a = i.parentId ?? i.id;
    return n.getFetchStateForApplication(a) !== r.FetchState.FETCHED
        ? "loading"
        : null != n.getNewestTokenForApplication(a)
          ? "linked"
          : null != i.connectionEntrypointUrl
            ? "needs_link"
            : "link_unavailable";
}
n.d(
    t,
    {},
    {
        O: function (e) {
            return (0, i.bG)([s.A, r.A], () => (null == e ? "loading" : a(e, s.A, r.A)), [e]);
        },
        n: a,
    },
);
