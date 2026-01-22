n.d(t, { A: () => b }), n(896048);
var r = n(627968),
    i = n(397927),
    l = n(11351),
    s = n(306444),
    a = n(922975),
    c = n(963175),
    o = n(792105),
    d = n(389082),
    u = n(136230),
    f = n(985018),
    g = n(436151);
function b() {
    let { editStateId: e, guildId: t } = (0, s.O)(),
        [, b] = a.$7(e, t),
        [m, p] = a.xR(e, t),
        x = a.It(e, t);
    function h() {
        (0, i.mMO)(async () => {
            let { default: e } = await n.e("64939").then(n.bind(n, 836774));
            return (n) => {
                var i, l;
                return (0, r.jsx)(
                    e,
                    ((i = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, n)),
                    (l = l =
                        {
                            guildId: t,
                            onUploadIcon: (e) =>
                                b({
                                    icon: e,
                                    unicodeEmoji: null,
                                }),
                            onSelectUnicodeEmoji: (e) =>
                                b({
                                    icon: null,
                                    unicodeEmoji: e,
                                }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i),
                );
            };
        });
    }
    let j = (0, l.gN)();
    return (0, r.jsx)(c.A, {
        title: f.intl.string(f.t["Ah+sQ9"]),
        description: f.intl.string(f.t.ixbWiB),
        children: (0, r.jsxs)(i.BJc, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(i.D0$, {
                    label: f.intl.string(f.t["6OUqDa"]),
                    disabled: j,
                    children: (0, r.jsx)(d.A, {
                        value: m,
                        onChange: p,
                        disabled: j,
                    }),
                }),
                (0, r.jsx)(i.D0$, {
                    label: f.intl.string(f.t["zn8/AX"]),
                    disabled: j,
                    description: f.intl.string(f.t.AqHUrU),
                    children: (0, r.jsxs)(i.BJc, {
                        direction: "horizontal",
                        gap: 16,
                        children: [
                            (0, r.jsx)(u.A, {
                                role: x,
                                "aria-label": f.intl.string(f.t.mD1oGB),
                                onClick: h,
                                disabled: j,
                            }),
                            (0, r.jsx)(i.Button, {
                                variant: "secondary",
                                onClick: h,
                                disabled: j,
                                text: f.intl.string(f.t.mD1oGB),
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(i.M1G, {
                    children: (0, r.jsxs)("div", {
                        className: g.i,
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)(o.A, {
                                guildId: t,
                                role: x,
                                className: g.z,
                                theme: "light",
                            }),
                            (0, r.jsx)(o.A, {
                                guildId: t,
                                role: x,
                                className: g.z,
                                theme: "dark",
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
