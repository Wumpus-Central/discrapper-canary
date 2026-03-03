i.d(e, { P: () => g }), i(321073);
var n = i(627968),
    l = i(311907),
    s = i(36149),
    r = i(207560),
    a = i(419954),
    u = i(287809),
    o = i(780964),
    d = i(998252),
    A = i(980172),
    T = i(985018),
    S = i(536242);
let E = (0, a.E2)(o.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let t = [
                    T.intl.string(T.t.LYju5J),
                    T.intl.string(T.t["9AjdkD"]),
                    T.intl.string(T.t["+JkHPw"]),
                    T.intl.string(T.t.oP5zGA),
                    T.intl.string(T.t.Ulqq6K),
                ],
                e = (0, r.fk)(),
                i = (0, s.Y2)();
            return (
                e &&
                    (t.push(T.intl.string(T.t["/52UYy"])),
                    t.push(T.intl.string(T.t.sK0dmH)),
                    t.push(T.intl.string(T.t.XxRj7f)),
                    t.push(T.intl.string(T.t.DVywUB)),
                    t.push(T.intl.string(T.t["9KiIz6"])),
                    i &&
                        (t.push(T.intl.string(S.default.FTawSP)),
                        t.push(T.intl.string(S.default["bD//cU"])),
                        t.push(T.intl.string(S.default.SH6Tcv)))),
                t
            );
        },
        Component: function () {
            let t = (0, l.bG)([u.default], () => u.default.getCurrentUser());
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    null != t && (0, n.jsx)(d.A, { currentUser: t }),
                    null != t && (0, n.jsx)(A.A, { currentUser: t }),
                ],
            });
        },
    }),
    g = (0, a.zZ)(o.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [E] });
