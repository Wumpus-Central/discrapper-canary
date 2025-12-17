n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(481060),
    l = n(723047),
    a = n(727843),
    s = n(290348),
    o = n(783454),
    c = n(893729),
    d = n(619326),
    u = n(553204),
    g = n(388032),
    f = n(357923);
function m() {
    let { editStateId: e, guildId: t } = (0, a.N)(),
        [, m] = s.p9(e, t),
        [b, p] = s.Ek(e, t),
        h = s.qs(e, t);
    function x() {
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e("63635").then(n.bind(n, 660727));
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
                                m({
                                    icon: e,
                                    unicodeEmoji: null,
                                }),
                            onSelectUnicodeEmoji: (e) =>
                                m({
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
    let j = (0, l.mY)();
    return (0, r.jsx)(o.Z, {
        title: g.intl.string(g.t["Ah+sQ9"]),
        description: g.intl.string(g.t.ixbWiB),
        children: (0, r.jsxs)(i.Kqy, {
            direction: "vertical",
            gap: 24,
            children: [
                (0, r.jsx)(i.gNt, {
                    label: g.intl.string(g.t["6OUqDa"]),
                    disabled: j,
                    children: (0, r.jsx)(d.Z, {
                        value: b,
                        onChange: p,
                        disabled: j,
                    }),
                }),
                (0, r.jsx)(i.gNt, {
                    label: g.intl.string(g.t["zn8/AX"]),
                    disabled: j,
                    description: g.intl.string(g.t.AqHUrU),
                    children: (0, r.jsxs)(i.Kqy, {
                        direction: "horizontal",
                        gap: 16,
                        children: [
                            (0, r.jsx)(u.Z, {
                                role: h,
                                "aria-label": g.intl.string(g.t.mD1oGB),
                                onClick: x,
                                disabled: j,
                            }),
                            (0, r.jsx)(i.Button, {
                                variant: "secondary",
                                onClick: x,
                                disabled: j,
                                text: g.intl.string(g.t.mD1oGB),
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(i.Rny, {
                    children: (0, r.jsxs)("div", {
                        className: f.previewContainer,
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)(c.Z, {
                                guildId: t,
                                role: h,
                                className: f.messageContainer,
                                theme: "light",
                            }),
                            (0, r.jsx)(c.Z, {
                                guildId: t,
                                role: h,
                                className: f.messageContainer,
                                theme: "dark",
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
