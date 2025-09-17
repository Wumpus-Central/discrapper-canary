n.d(t, { Z: () => p });
var r = n(951288),
    i = n(442837),
    a = n(481060),
    o = n(626562),
    s = n(885110),
    l = n(51144),
    c = n(231338),
    u = n(388032),
    d = n(385612);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p() {
    var e;
    let t = (0, i.e7)([s.Z], () => s.Z.getStatus()),
        n = null != (e = (0, l.u5)(t)) ? e : "",
        f = t === c.Sk.INVISIBLE || t === c.Sk.OFFLINE,
        p = (0, o.V)({ location: "UserProfileAccountPopoutMenuItemStatusLabel" }) && f;
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            n,
            n.length > 0 &&
                p &&
                (0, r.jsx)(a.ua7, {
                    text: u.intl.string(u.t.L99HQk),
                    children: (e) =>
                        (0, r.jsx)(
                            a.Mgn,
                            _(
                                {
                                    size: "xs",
                                    color: a.TVs.colors.STATUS_WARNING,
                                },
                                e,
                            ),
                        ),
                }),
        ],
    });
}
