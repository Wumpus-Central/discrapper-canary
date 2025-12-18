n.d(e, { z: () => g }), n(539854);
var i = n(54381),
    l = n(442837),
    s = n(332473),
    u = n(509613),
    r = n(594174),
    a = n(128064),
    o = n(313789),
    T = n(499311),
    S = n(732521),
    c = n(2719),
    E = n(388032);
let d = (0, u.ON)(o.n.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let t = [
                E.intl.string(E.t.LYju5J),
                E.intl.string(E.t["9AjdkD"]),
                E.intl.string(E.t["+JkHPw"]),
                E.intl.string(E.t.oP5zGA),
                E.intl.string(E.t.Ulqq6K),
            ];
            return (
                (0, a.pY)("AccountProfileSetting") &&
                    (t.push(E.intl.string(E.t["/52UYy"])),
                    t.push(E.intl.string(E.t.sK0dmH)),
                    t.push(E.intl.string(E.t.XxRj7f)),
                    t.push(E.intl.string(E.t.yNGjyK)),
                    t.push(E.intl.string(E.t.KPGVWl))),
                t
            );
        },
        Component: function () {
            let t = (0, s.b)(),
                e = (0, l.e7)([r.default], () => r.default.getCurrentUser());
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    t && (0, i.jsx)(T.Z, {}),
                    null != e && (0, i.jsx)(S.Z, { currentUser: e }),
                    (0, i.jsx)(c.Z, {}),
                ],
            });
        },
    }),
    g = (0, u.k4)(o.n.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [d] });
