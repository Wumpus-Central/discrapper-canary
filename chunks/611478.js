i.d(e, { P: () => _ }), i(321073);
var n = i(627968),
    l = i(311907),
    s = i(36149),
    r = i(207560),
    a = i(419954),
    u = i(287809),
    o = i(64313),
    d = i(780964),
    A = i(998252),
    T = i(980172),
    S = i(985018),
    E = i(949268);
let g = (0, a.E2)(d.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let t = [
                    S.intl.string(S.t.LYju5J),
                    S.intl.string(S.t["9AjdkD"]),
                    S.intl.string(S.t["+JkHPw"]),
                    S.intl.string(S.t.oP5zGA),
                    S.intl.string(S.t.Ulqq6K),
                ],
                e = (0, r.fk)(),
                i = (0, o.j)("AccountProfileSetting"),
                n = (0, s.Y2)();
            return (
                (e || i) &&
                    (t.push(S.intl.string(S.t["/52UYy"])),
                    t.push(S.intl.string(S.t.sK0dmH)),
                    t.push(S.intl.string(S.t.XxRj7f)),
                    t.push(S.intl.string(S.t.DVywUB)),
                    t.push(S.intl.string(S.t["9KiIz6"])),
                    n &&
                        (t.push(S.intl.string(E.default.FTawSP)),
                        t.push(S.intl.string(E.default["bD//cU"])),
                        t.push(S.intl.string(E.default.SH6Tcv)))),
                t
            );
        },
        Component: function () {
            let t = (0, l.bG)([u.default], () => u.default.getCurrentUser());
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    null != t && (0, n.jsx)(A.A, { currentUser: t }),
                    null != t && (0, n.jsx)(T.A, { currentUser: t }),
                ],
            });
        },
    }),
    _ = (0, a.zZ)(d.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [g] });
