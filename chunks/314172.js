n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(235874),
    o = n(28664),
    s = n(481060),
    l = n(607070),
    c = n(345162),
    u = n(496675),
    d = n(608798),
    f = n(981631),
    p = n(388032),
    _ = n(880033);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { guild: t, guildMember: n, numRoles: m, highestRole: g, onAddRole: b, buttonRef: y } = e,
        O = (0, i.e7)([l.Z], () => l.Z.roleStyle);
    if (!(0, i.e7)([u.Z], () => u.Z.can(f.Plq.MANAGE_ROLES, t))) return null;
    let v = (e) => !(0, c.fI)(e) && !e.managed && u.Z.isRoleHigher(t, g, e) && -1 === n.roles.indexOf(e.id);
    return (0, r.jsx)(a.y, {
        targetElementRef: y,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(d.Z, {
                guild: t,
                roleStyle: O,
                roleFilter: v,
                onSelect: b,
                onClose: n,
            });
        },
        children: (e) =>
            (0, r.jsx)(o.u, {
                asContainer: !0,
                text: p.intl.string(p.t.icyMgc),
                "aria-label": !1,
                shouldShow: m > 0,
                children: (0, r.jsxs)(
                    s.P3F,
                    E(
                        h(
                            {
                                innerRef: y,
                                className: _.button,
                                role: "button",
                                "aria-label": p.intl.string(p.t.icyMgc),
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, r.jsx)(s.qJs, {
                                    size: "xs",
                                    color: "currentColor",
                                }),
                                0 === m &&
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/normal",
                                        color: "none",
                                        children: p.intl.string(p.t.icyMgc),
                                    }),
                            ],
                        },
                    ),
                ),
            }),
    });
}
