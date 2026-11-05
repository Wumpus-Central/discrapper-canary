t.d(n, { A: () => k });
var i = t(477900),
    l = t(477782),
    a = t(163328),
    s = t(192308),
    r = t(952270),
    c = t(72152),
    o = t(582128),
    d = t(976860),
    u = t(967198),
    f = t(146092),
    h = t(5180),
    b = t(652215),
    g = t(708526),
    p = t(792996),
    v = t(241326),
    y = t(253932);
function k() {
    let e = (function () {
            let e,
                { label: n, perform: t } =
                    ((e = o.useCallback(() => {
                        ((0, f.tV)(!1, "server_context_menu"), (0, h.ai)(u.A.getGuildId()) && (0, d.pX)(b.BVt.ME));
                    }, [])),
                    {
                        label: p.intl.string(g.default["8FO0y9"]),
                        subLabel: p.intl.string(g.default.FaHxWl),
                        perform: e,
                    });
            return (0, i.jsx)(l.Dr, {
                id: "hide-favorites",
                label: n,
                color: "danger",
                icon: r.EyeSlashIcon,
                leadingAccessory: { type: "icon", icon: r.EyeSlashIcon },
                action: function () {
                    ((0, c.Z)(!1), t());
                },
            });
        })(),
        n = (function () {
            let e,
                n,
                {
                    isAvailable: t,
                    label: a,
                    perform: s,
                } = ((e = y.Q_.useSetting()),
                (n = o.useCallback(() => {
                    ((0, h.ai)(u.A.getGuildId()) && (0, d.pX)(b.BVt.ME), (0, f.uM)());
                }, [])),
                {
                    isAvailable: e,
                    label: p.intl.string(g.default.YkET6R),
                    subLabel: p.intl.string(g.default.ZzcwNk),
                    perform: n,
                });
            return t
                ? (0, i.jsx)(l.Dr, {
                      id: "reset-favorites",
                      label: a,
                      color: "danger",
                      icon: v.TrashIcon,
                      leadingAccessory: { type: "icon", icon: v.TrashIcon },
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
                    leadingAccessory: { type: "icon", icon: a.ThreadIcon },
                    action: () => {
                        (0, s.mM)(async () => {
                            let { default: e } = await t.e(20587).then(t.bind(t, 167846));
                            return (n) => (0, i.jsx)(e, { ...n });
                        });
                    },
                }),
            },
            "favorites-settings",
        ),
        (0, i.jsx)(l.rX, { children: e }, "favorites-actions"),
        null != n ? (0, i.jsx)(l.rX, { children: n }, "favorites-developer") : null,
    ];
}
