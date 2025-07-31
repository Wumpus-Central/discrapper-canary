n.d(t, { L: () => _ });
var r = n(442837),
    i = n(620662),
    a = n(841784),
    o = n(592745),
    s = n(757266),
    l = n(283595),
    c = n(417363),
    u = n(804739),
    d = n(981631);
function _(e, t) {
    var n;
    let _ = null != (n = null == t ? void 0 : t.applicationId) ? n : null == e ? void 0 : e.application_id,
        f = null != t || (0, a.Z)(e),
        p = (0, r.e7)(
            [l.Z, o.Z, c.Z, s.Z],
            () =>
                f ||
                (null != _ &&
                    (0, u.t)({
                        LibraryApplicationStore: l.Z,
                        LaunchableGameStore: o.Z,
                        DispatchApplicationStore: c.Z,
                        ConnectedAppsStore: s.Z,
                        applicationId: _
                    })),
            [_, f]
        ),
        h = (0, i.Z)(e, d.xjy.JOIN) || f;
    return !(f && null == t && (null == e || !(0, i.Z)(e, d.xjy.CONTEXTLESS))) && null != _ && h && p;
}
