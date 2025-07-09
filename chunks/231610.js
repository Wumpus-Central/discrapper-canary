(n.d(t, { Z: () => h }), n(388685));
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    s = n(723047),
    a = n(727843),
    o = n(290348),
    c = n(783454),
    d = n(893729),
    u = n(619326),
    m = n(553204),
    g = n(388032),
    p = n(301849),
    f = n(181517);
function h() {
    let { editStateId: e, guildId: t } = (0, a.N)(),
        [, h] = o.p9(e, t),
        [x, b] = o.Ek(e, t),
        j = o.qs(e, t);
    function _() {
        (0, l.ZDy)(async () => {
            let { default: e } = await n.e('22942').then(n.bind(n, 660727));
            return (n) => {
                var i, l;
                return (0, r.jsx)(
                    e,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, n)),
                    (l = l =
                        {
                            guildId: t,
                            onUploadIcon: (e) =>
                                h({
                                    icon: e,
                                    unicodeEmoji: null
                                }),
                            onSelectUnicodeEmoji: (e) =>
                                h({
                                    icon: null,
                                    unicodeEmoji: e
                                })
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
                    i)
                );
            };
        });
    }
    let v = (0, s.mY)();
    return (0, r.jsxs)(c.Z, {
        title: g.intl.string(g.t['Ah+sQ0']),
        description: g.intl.string(g.t.ixbWiI),
        children: [
            (0, r.jsx)(l.hjN, {
                title: g.intl.string(g.t['6OUqDQ']),
                disabled: v,
                children: (0, r.jsx)(u.Z, {
                    value: x,
                    onChange: b,
                    disabled: v
                })
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)('div', {
                className: p.__invalid_iconSection,
                children: (0, r.jsxs)(l.hjN, {
                    title: g.intl.string(g.t['zn8/AQ']),
                    disabled: v,
                    children: [
                        (0, r.jsx)(l.R94, {
                            type: l.R94.Types.DESCRIPTION,
                            className: p.formDescription,
                            disabled: v,
                            children: g.intl.string(g.t.AqHUra)
                        }),
                        (0, r.jsxs)('div', {
                            className: f.iconUploaderContainer,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    role: j,
                                    'aria-label': g.intl.string(g.t.mD1oGB),
                                    onClick: _,
                                    disabled: v
                                }),
                                (0, r.jsx)(i.zx, {
                                    look: i.zx.Looks.OUTLINED,
                                    color: i.zx.Colors.PRIMARY,
                                    className: p.__invalid_imageUploadButtonCTA,
                                    onClick: _,
                                    disabled: v,
                                    children: g.intl.string(g.t.mD1oGB)
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(l.Rny, {
                children: (0, r.jsxs)('div', {
                    className: f.previewContainer,
                    'aria-hidden': !0,
                    children: [
                        (0, r.jsx)(d.Z, {
                            guildId: t,
                            role: j,
                            className: f.messageContainer,
                            theme: 'light'
                        }),
                        (0, r.jsx)(d.Z, {
                            guildId: t,
                            role: j,
                            className: f.messageContainer,
                            theme: 'dark'
                        })
                    ]
                })
            })
        ]
    });
}
