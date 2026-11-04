n.d(t, { A: () => k });
var i = n(477900),
    l = n(477782),
    a = n(163328),
    s = n(192308),
    r = n(952270),
    c = n(72152),
    o = n(582128),
    u = n(976860),
    d = n(967198),
    f = n(146092),
    h = n(5180),
    b = n(652215),
    g = n(708526),
    p = n(792996),
    y = n(241326),
    v = n(253932);
function k() {
    let e = (function () {
            let e,
                { label: t, perform: n } =
                    ((e = o.useCallback(() => {
                        ((0, f.tV)(!1, "server_context_menu"), (0, h.ai)(d.A.getGuildId()) && (0, u.pX)(b.BVt.ME));
                    }, [])),
                    {
                        label: p.intl.string(g.default["8FO0y9"]),
                        subLabel: p.intl.string(g.default.FaHxWl),
                        perform: e,
                    });
            return (0, i.jsx)(l.Dr, {
                id: "hide-favorites",
                label: t,
                color: "danger",
                icon: r.EyeSlashIcon,
                leadingAccessory: { type: "icon", icon: r.EyeSlashIcon },
                action: function () {
                    ((0, c.Z)(!1), n());
                },
            });
        })(),
        t = (function () {
            let e,
                t,
                {
                    isAvailable: n,
                    label: a,
                    perform: s,
                } = ((e = v.Q_.useSetting()),
                (t = o.useCallback(() => {
                    ((0, h.ai)(d.A.getGuildId()) && (0, u.pX)(b.BVt.ME), (0, f.uM)());
                }, [])),
                {
                    isAvailable: e,
                    label: p.intl.string(g.default.YkET6R),
                    subLabel: p.intl.string(g.default.ZzcwNk),
                    perform: t,
                });
            return n
                ? (0, i.jsx)(l.Dr, {
                      id: "reset-favorites",
                      label: a,
                      color: "danger",
                      icon: y.TrashIcon,
                      leadingAccessory: { type: "icon", icon: y.TrashIcon },
                      action: function () {
                          ((0, c.Z)(!1), s());
                      },
                  })
                : null;
        })();
    return [
        (0, i.jsx)(
            l.rX,
            {
                children: (0, i.jsx)(l.Dr, {
                    id: "favorites-thread-settings",
                    label: p.intl.string(g.default.hklnjs),
                    leadingAccessory: { type: "icon", icon: a.y },
                    action: () => {
                        (0, s.mM)(async () => {
                            let { default: e } = await n.e(20587).then(n.bind(n, 167846));
                            return (t) => (0, i.jsx)(e, { ...t });
                        });
                    },
                }),
            },
            "favorites-settings",
        ),
        (0, i.jsx)(l.rX, { children: e }, "favorites-actions"),
        null != t ? (0, i.jsx)(l.rX, { children: t }, "favorites-developer") : null,
    ];
}
