i.d(e, { P: () => _ }), i(321073);
var n = i(627968),
    l = i(311907),
    s = i(772786),
    r = i(207560),
    a = i(419954),
    u = i(287809),
    o = i(64313),
    d = i(780964),
    T = i(433410),
    A = i(998252),
    S = i(980172),
    E = i(985018);
let g = (0, a.E2)(d.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let t = [
                    E.intl.string(E.t.LYju5J),
                    E.intl.string(E.t["9AjdkD"]),
                    E.intl.string(E.t["+JkHPw"]),
                    E.intl.string(E.t.oP5zGA),
                    E.intl.string(E.t.Ulqq6K),
                ],
                e = (0, r.fk)(),
                i = (0, o.j)("AccountProfileSetting");
            return (
                (e || i) &&
                    (t.push(E.intl.string(E.t["/52UYy"])),
                    t.push(E.intl.string(E.t.sK0dmH)),
                    t.push(E.intl.string(E.t.XxRj7f)),
                    t.push(E.intl.string(E.t.yNGjyK)),
                    t.push(E.intl.string(E.t.KPGVWl))),
                t
            );
        },
        Component: function () {
            let t = (0, s.g)(),
                e = (0, l.bG)([u.default], () => u.default.getCurrentUser());
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    t && (0, n.jsx)(T.A, {}),
                    null != e && (0, n.jsx)(A.A, { currentUser: e }),
                    (0, n.jsx)(S.A, {}),
                ],
            });
        },
    }),
    _ = (0, a.zZ)(d.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [g] });
