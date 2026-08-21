n.d(t, { A: () => k });
var i = n(477900),
    l = n(477782),
    r = n(789645),
    a = n(952270),
    s = n(72152),
    c = n(582128),
    u = n(976860),
    o = n(967198),
    d = n(16236),
    f = n(93055),
    b = n(5180),
    p = n(652215),
    g = n(867698),
    h = n(375708),
    v = n(241326),
    x = n(885386);
function k() {
    let e = (function () {
            let {
                    isPreview: e,
                    label: t,
                    subLabel: n,
                    perform: v,
                } = (function () {
                    let { hasAccess: e } = (0, f.TW)(),
                        t = c.useCallback(() => {
                            e && (0, d.tV)(!1, "server_context_menu"),
                                (0, b.ai)(o.A.getGuildId()) && (0, u.pX)(p.BVt.ME);
                        }, [e]);
                    return {
                        isPreview: !e,
                        label: h.intl.string(e ? g.default["8FO0y9"] : h.t.ojM1xJ),
                        subLabel: e ? h.intl.string(g.default.FaHxWl) : void 0,
                        perform: t,
                    };
                })(),
                x = e ? r.P : a.EyeSlashIcon;
            return (0, i.jsx)(l.Dr, {
                id: "hide-favorites",
                label: t,
                subtext: n,
                color: e ? "default" : "danger",
                icon: x,
                leadingAccessory: { type: "icon", icon: x },
                action: function () {
                    (0, s.Z)(!1), v();
                },
            });
        })(),
        t = (function () {
            let {
                isAvailable: e,
                label: t,
                subLabel: n,
                perform: r,
            } = (function () {
                let e = x.Q_.useSetting(),
                    { hasAccess: t } = (0, f.TW)(),
                    n = c.useCallback(() => {
                        (0, b.ai)(o.A.getGuildId()) && (0, u.pX)(p.BVt.ME), (0, d.uM)();
                    }, []);
                return {
                    isAvailable: e && t,
                    label: h.intl.string(g.default.YkET6R),
                    subLabel: h.intl.string(g.default.ZzcwNk),
                    perform: n,
                };
            })();
            return e
                ? (0, i.jsx)(l.Dr, {
                      id: "reset-favorites",
                      label: t,
                      subtext: n,
                      color: "danger",
                      icon: v.TrashIcon,
                      leadingAccessory: { type: "icon", icon: v.TrashIcon },
                      action: function () {
                          (0, s.Z)(!1), r();
                      },
                  })
                : null;
        })();
    return [
        (0, i.jsx)(l.rX, { children: e }, "favorites-actions"),
        null != t ? (0, i.jsx)(l.rX, { children: t }, "favorites-developer") : null,
    ];
}
