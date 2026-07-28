n.d(t, { A: () => k });
var i = n(477900),
    l = n(477782),
    r = n(789645),
    u = n(952270),
    a = n(72152),
    s = n(582128),
    c = n(976860),
    o = n(967198),
    d = n(659324),
    f = n(281980),
    b = n(5180),
    p = n(652215),
    g = n(449817),
    v = n(375708),
    x = n(241326),
    h = n(885386);
function k() {
    let e = (function () {
            let {
                    isPreview: e,
                    label: t,
                    subLabel: n,
                    perform: x,
                } = (function () {
                    let { hasAccess: e } = (0, f.TW)(),
                        t = s.useCallback(() => {
                            e && (0, d.tV)(!1, "server_context_menu"),
                                (0, b.ai)(o.A.getGuildId()) && (0, c.pX)(p.BVt.ME);
                        }, [e]);
                    return {
                        isPreview: !e,
                        label: v.intl.string(e ? g.default["8FO0y9"] : v.t.ojM1xJ),
                        subLabel: e ? v.intl.string(g.default.FaHxWl) : void 0,
                        perform: t,
                    };
                })(),
                h = e ? r.P : u.G;
            return (0, i.jsx)(l.Dr, {
                id: "hide-favorites",
                label: t,
                subtext: n,
                color: e ? "default" : "danger",
                icon: h,
                leadingAccessory: { type: "icon", icon: h },
                action: function () {
                    (0, a.Z)(!1), x();
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
                let e = h.Q_.useSetting(),
                    { hasAccess: t } = (0, f.TW)(),
                    n = s.useCallback(() => {
                        (0, d.uM)();
                    }, []);
                return {
                    isAvailable: e && t,
                    label: v.intl.string(g.default.YkET6R),
                    subLabel: v.intl.string(g.default.ZzcwNk),
                    perform: n,
                };
            })();
            return e
                ? (0, i.jsx)(l.Dr, {
                      id: "reset-favorites",
                      label: t,
                      subtext: n,
                      color: "danger",
                      icon: x.u,
                      leadingAccessory: { type: "icon", icon: x.u },
                      action: function () {
                          (0, a.Z)(!1), r();
                      },
                  })
                : null;
        })();
    return [
        (0, i.jsx)(l.rX, { children: e }, "favorites-actions"),
        null != t ? (0, i.jsx)(l.rX, { children: t }, "favorites-developer") : null,
    ];
}
