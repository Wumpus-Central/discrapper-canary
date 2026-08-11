i.d(t, { A: () => k });
var n = i(477900),
    l = i(477782),
    r = i(789645),
    u = i(952270),
    a = i(72152),
    s = i(582128),
    c = i(976860),
    o = i(967198),
    d = i(16236),
    f = i(93055),
    b = i(5180),
    p = i(652215),
    g = i(449817),
    v = i(375708),
    x = i(241326),
    h = i(885386);
function k() {
    let e = (function () {
            let {
                    isPreview: e,
                    label: t,
                    subLabel: i,
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
            return (0, n.jsx)(l.Dr, {
                id: "hide-favorites",
                label: t,
                subtext: i,
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
                subLabel: i,
                perform: r,
            } = (function () {
                let e = h.Q_.useSetting(),
                    { hasAccess: t } = (0, f.TW)(),
                    i = s.useCallback(() => {
                        (0, b.ai)(o.A.getGuildId()) && (0, c.pX)(p.BVt.ME), (0, d.uM)();
                    }, []);
                return {
                    isAvailable: e && t,
                    label: v.intl.string(g.default.YkET6R),
                    subLabel: v.intl.string(g.default.ZzcwNk),
                    perform: i,
                };
            })();
            return e
                ? (0, n.jsx)(l.Dr, {
                      id: "reset-favorites",
                      label: t,
                      subtext: i,
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
        (0, n.jsx)(l.rX, { children: e }, "favorites-actions"),
        null != t ? (0, n.jsx)(l.rX, { children: t }, "favorites-developer") : null,
    ];
}
