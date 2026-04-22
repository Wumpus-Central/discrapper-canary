n.d(t, { P: () => h }), n(321073);
var i = n(627968),
    s = n(311907),
    l = n(331322),
    a = n(36149),
    r = n(207560),
    o = n(419954),
    d = n(287809),
    u = n(780964),
    c = n(431832),
    g = n(443064),
    m = n(985018),
    _ = n(516761);
let A = (0, o.E2)(u.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let e = [
                    m.intl.string(m.t.LYju5J),
                    m.intl.string(m.t["9AjdkD"]),
                    m.intl.string(m.t["+JkHPw"]),
                    m.intl.string(m.t.oP5zGA),
                    m.intl.string(m.t.Ulqq6K),
                ],
                t = (0, r.fk)(),
                n = (0, a.Y2)();
            return (
                t &&
                    (e.push(m.intl.string(m.t["/52UYy"])),
                    e.push(m.intl.string(m.t.sK0dmH)),
                    e.push(m.intl.string(m.t.XxRj7f)),
                    e.push(m.intl.string(m.t.DVywUB)),
                    e.push(m.intl.string(m.t["9KiIz6"])),
                    n &&
                        (e.push(m.intl.string(_.default.FTawSP)),
                        e.push(m.intl.string(_.default["bD//cU"])),
                        e.push(m.intl.string(_.default.SH6Tcv)))),
                e
            );
        },
        Component: function () {
            let e = (0, s.bG)([d.default], () => d.default.getCurrentUser());
            return (0, i.jsxs)(l.B, {
                gap: "md",
                children: [
                    null != e && (0, i.jsx)(c.A, { currentUser: e }),
                    null != e && (0, i.jsx)(g.A, { currentUser: e }),
                ],
            });
        },
    }),
    h = (0, o.zZ)(u.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [A] });
