i.d(e, { P: () => I }), i(321073);
var n = i(627968),
    l = i(311907),
    s = i(772786),
    r = i(207560),
    u = i(419954),
    a = i(287809),
    o = i(64313),
    T = i(780964),
    A = i(433410),
    S = i(998252),
    E = i(980172),
    d = i(985018);
let _ = (0, u.E2)(T.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let t = [
                    d.intl.string(d.t.LYju5J),
                    d.intl.string(d.t["9AjdkD"]),
                    d.intl.string(d.t["+JkHPw"]),
                    d.intl.string(d.t.oP5zGA),
                    d.intl.string(d.t.Ulqq6K),
                ],
                e = (0, r.fk)(),
                i = (0, o.j)("AccountProfileSetting");
            return (
                (e || i) &&
                    (t.push(d.intl.string(d.t["/52UYy"])),
                    t.push(d.intl.string(d.t.sK0dmH)),
                    t.push(d.intl.string(d.t.XxRj7f)),
                    t.push(d.intl.string(d.t.yNGjyK)),
                    t.push(d.intl.string(d.t.KPGVWl))),
                t
            );
        },
        Component: function () {
            let t = (0, s.g)(),
                e = (0, l.bG)([a.default], () => a.default.getCurrentUser());
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    t && (0, n.jsx)(A.A, {}),
                    null != e && (0, n.jsx)(S.A, { currentUser: e }),
                    (0, n.jsx)(E.A, {}),
                ],
            });
        },
    }),
    I = (0, u.zZ)(T.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [_] });
