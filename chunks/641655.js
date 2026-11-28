var u = e(582128),
    a = e(855986),
    t = e(233470),
    i = e(260498),
    r = e(951178),
    s = e(171890),
    c = e(685033),
    b = e(258576),
    d = e(792996);
function h() {
    return [
        { value: "collaborators", label: d.intl.string(b.default["a/Tlqf"]) },
        { value: "link", label: d.intl.string(b.default.e0VakN) },
        { value: "public", label: d.intl.string(b.default["98MAcX"]) },
    ];
}
e.d(
    n,
    {},
    {
        A: function (l) {
            let n = (0, a.bG)([i.Ay], () => i.Ay.getProject(l) ?? null, [l]),
                { shareLinksEnabled: e, loadFailed: b, setShareLinksEnabled: d, reload: k } = (0, c.A)(l),
                [o, g] = u.useState(null),
                [p, f] = u.useState(!1),
                _ = u.useCallback(
                    async (l) => {
                        let u = null != n && (null != e || b) ? (0, s.F)(n, e, l) : null;
                        if (null == n || null == u || 0 === Object.keys(u).length) return !0;
                        (g(l), f(!1));
                        let a = !0;
                        try {
                            (await (0, t.CW)(n.id, u), null != u.share_links_enabled && d(u.share_links_enabled));
                        } catch {
                            ((a = !1), f(!0), await k());
                        }
                        return (g(null), a);
                    },
                    [n, e, b, d, k],
                ),
                y = u.useMemo(() => h(), []),
                A = null != n && (0, i.PV)(n);
            return {
                project: n,
                isOwner: A,
                options: y,
                mode: o ?? (null != n ? (0, s.E)(n, e) : null),
                canChange: null != n && A && (0, r.IU)(n) && (null != e || b),
                changing: null != o,
                loadFailed: b,
                saveFailed: p,
                reload: k,
                changeMode: _,
            };
        },
        R: h,
    },
);
