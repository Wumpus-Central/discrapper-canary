i.d(e, { P: () => E }), i(321073);
var n = i(627968),
    l = i(311907),
    s = i(207560),
    r = i(419954),
    a = i(287809),
    u = i(64313),
    o = i(780964),
    d = i(998252),
    A = i(980172),
    T = i(985018);
let S = (0, r.E2)(o.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let t = [
                    T.intl.string(T.t.LYju5J),
                    T.intl.string(T.t["9AjdkD"]),
                    T.intl.string(T.t["+JkHPw"]),
                    T.intl.string(T.t.oP5zGA),
                    T.intl.string(T.t.Ulqq6K),
                ],
                e = (0, s.fk)(),
                i = (0, u.j)("AccountProfileSetting");
            return (
                (e || i) &&
                    (t.push(T.intl.string(T.t["/52UYy"])),
                    t.push(T.intl.string(T.t.sK0dmH)),
                    t.push(T.intl.string(T.t.XxRj7f)),
                    t.push(T.intl.string(T.t.yNGjyK)),
                    t.push(T.intl.string(T.t.KPGVWl))),
                t
            );
        },
        Component: function () {
            let t = (0, l.bG)([a.default], () => a.default.getCurrentUser());
            return (0, n.jsxs)(n.Fragment, {
                children: [null != t && (0, n.jsx)(d.A, { currentUser: t }), (0, n.jsx)(A.A, {})],
            });
        },
    }),
    E = (0, r.zZ)(o.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [S] });
