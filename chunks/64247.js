n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(438536),
    a = n(71991),
    s = n(346479),
    o = n(723170),
    c = n(124368);
function d(e) {
    let { channel: t, closePopout: n, onSelect: d, navId: u, label: p } = e,
        h = (0, l.Z)(t, "Notifications Bell"),
        f = (0, a.Z)(t),
        g = (0, o.B)(t);
    return (0, r.jsxs)(i.v2r, {
        navId: u,
        onClose: n,
        "aria-label": p,
        onSelect: d,
        children: [
            (0, r.jsxs)(i.kSQ, {
                children: [t.isForumPost() ? h : null, f],
            }),
            (0, r.jsx)(i.kSQ, {
                children: (0, c.zb)().map((e) => {
                    let { setting: n, label: l } = e;
                    return (0, r.jsx)(
                        i.k5B,
                        {
                            group: "thread-notifications",
                            id: "".concat(n),
                            label: l,
                            action: () => s.Z.setNotificationSettings(t, { flags: n }),
                            checked: n === g,
                        },
                        n,
                    );
                }),
            }),
        ],
    });
}
