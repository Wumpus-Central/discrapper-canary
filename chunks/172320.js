n.d(e, { z: () => g }), n(539854);
var i = n(54381),
    l = n(442837),
    s = n(332473),
    u = n(980945),
    r = n(509613),
    a = n(594174),
    o = n(312870),
    T = n(313789),
    S = n(499311),
    c = n(732521),
    E = n(2719),
    d = n(388032);
let _ = (0, r.ON)(T.n.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let t = [
                    d.intl.string(d.t.LYju5J),
                    d.intl.string(d.t["9AjdkD"]),
                    d.intl.string(d.t["+JkHPw"]),
                    d.intl.string(d.t.oP5zGA),
                    d.intl.string(d.t.Ulqq6K),
                ],
                e = (0, u.nj)(),
                n = (0, o.s)("AccountProfileSetting");
            return (
                (e || n) &&
                    (t.push(d.intl.string(d.t["/52UYy"])),
                    t.push(d.intl.string(d.t.sK0dmH)),
                    t.push(d.intl.string(d.t.XxRj7f)),
                    t.push(d.intl.string(d.t.yNGjyK)),
                    t.push(d.intl.string(d.t.KPGVWl))),
                t
            );
        },
        Component: function () {
            let t = (0, s.b)(),
                e = (0, l.e7)([a.default], () => a.default.getCurrentUser());
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    t && (0, i.jsx)(S.Z, {}),
                    null != e && (0, i.jsx)(c.Z, { currentUser: e }),
                    (0, i.jsx)(E.Z, {}),
                ],
            });
        },
    }),
    g = (0, r.k4)(T.n.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [_] });
