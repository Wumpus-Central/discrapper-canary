var a = e(582128),
    u = e(855986),
    t = e(233470),
    i = e(260498),
    s = e(951178),
    c = e(171890),
    r = e(685033),
    b = e(191850),
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
            let n = (0, u.bG)([i.Ay], () => i.Ay.getProject(l) ?? null, [l]),
                { shareLinksEnabled: e, loadFailed: b, setShareLinksEnabled: d, reload: k } = (0, r.A)(l),
                [o, g] = a.useState(null),
                [p, f] = a.useState(!1),
                _ = a.useCallback(
                    async (l) => {
                        let a = null != n && (null != e || b) ? (0, c.F)(n, e, l) : null;
                        if (null != n && null != a && 0 !== Object.keys(a).length) {
                            (g(l), f(!1));
                            try {
                                (await (0, t.CW)(n.id, a), null != a.share_links_enabled && d(a.share_links_enabled));
                            } catch {
                                (f(!0), await k());
                            }
                            g(null);
                        }
                    },
                    [n, e, b, d, k],
                ),
                y = a.useMemo(() => h(), []),
                A = null != n && (0, i.PV)(n);
            return {
                project: n,
                isOwner: A,
                options: y,
                mode: o ?? (null != n ? (0, c.E)(n, e) : null),
                canChange: null != n && A && (0, s.IU)(n) && (null != e || b),
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
