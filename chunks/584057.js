n.d(t, { L: () => f });
var r = n(442837),
    i = n(620662),
    a = n(841784),
    o = n(592745),
    s = n(757266),
    l = n(283595),
    c = n(417363),
    u = n(804739),
    d = n(981631);
function f(e, t) {
    var n;
    let f = null != (n = null == t ? void 0 : t.applicationId) ? n : null == e ? void 0 : e.application_id,
        _ = null != t || (0, a.Z)(e),
        p = (0, r.e7)(
            [l.Z, o.Z, c.Z, s.Z],
            () =>
                _ ||
                (null != f &&
                    (0, u.t)({
                        LibraryApplicationStore: l.Z,
                        LaunchableGameStore: o.Z,
                        DispatchApplicationStore: c.Z,
                        ConnectedAppsStore: s.Z,
                        applicationId: f
                    })),
            [f, _]
        ),
        h = (0, i.Z)(e, d.xjy.JOIN) || _;
    return !(_ && null == t && (null == e || !(0, i.Z)(e, d.xjy.CONTEXTLESS))) && null != f && h && p;
}
