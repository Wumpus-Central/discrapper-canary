n.d(t, { P: () => h }), n(321073);
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(36149),
    r = n(207560),
    o = n(419954),
    d = n(287809),
    c = n(780964),
    u = n(998252),
    _ = n(980172),
    g = n(985018),
    m = n(949268);
let A = (0, o.E2)(c.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let e = [
                    g.intl.string(g.t.LYju5J),
                    g.intl.string(g.t["9AjdkD"]),
                    g.intl.string(g.t["+JkHPw"]),
                    g.intl.string(g.t.oP5zGA),
                    g.intl.string(g.t.Ulqq6K),
                ],
                t = (0, r.fk)(),
                n = (0, a.Y2)();
            return (
                t &&
                    (e.push(g.intl.string(g.t["/52UYy"])),
                    e.push(g.intl.string(g.t.sK0dmH)),
                    e.push(g.intl.string(g.t.XxRj7f)),
                    e.push(g.intl.string(g.t.DVywUB)),
                    e.push(g.intl.string(g.t["9KiIz6"])),
                    n &&
                        (e.push(g.intl.string(m.default.FTawSP)),
                        e.push(g.intl.string(m.default["bD//cU"])),
                        e.push(g.intl.string(m.default.SH6Tcv)))),
                e
            );
        },
        Component: function () {
            let e = (0, s.bG)([d.default], () => d.default.getCurrentUser());
            return (0, i.jsxs)(l.BJc, {
                gap: "md",
                children: [
                    null != e && (0, i.jsx)(u.A, { currentUser: e }),
                    null != e && (0, i.jsx)(_.A, { currentUser: e }),
                ],
            });
        },
    }),
    h = (0, o.zZ)(c.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [A] });
