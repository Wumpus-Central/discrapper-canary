n.d(t, { Z: () => h }), n(388685);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(723047),
    s = n(727843),
    a = n(290348),
    o = n(783454),
    c = n(893729),
    u = n(619326),
    d = n(553204),
    m = n(388032),
    g = n(301849),
    p = n(181517);
function h() {
    let { editStateId: e, guildId: t } = (0, s.N)(),
        [, h] = a.p9(e, t),
        [f, x] = a.Ek(e, t),
        b = a.qs(e, t);
    function j() {
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('22942').then(n.bind(n, 660727));
            return (n) => {
                var i, l;
                return (0, r.jsx)(
                    e,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
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
    let _ = (0, l.mY)();
    return (0, r.jsxs)(o.Z, {
        title: m.intl.string(m.t['Ah+sQ0']),
        description: m.intl.string(m.t.ixbWiI),
        children: [
            (0, r.jsx)(i.hjN, {
                title: m.intl.string(m.t['6OUqDQ']),
                disabled: _,
                children: (0, r.jsx)(u.Z, {
                    value: f,
                    onChange: x,
                    disabled: _
                })
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)('div', {
                className: g.__invalid_iconSection,
                children: (0, r.jsxs)(i.hjN, {
                    title: m.intl.string(m.t['zn8/AQ']),
                    disabled: _,
                    children: [
                        (0, r.jsx)(i.R94, {
                            type: i.R94.Types.DESCRIPTION,
                            className: g.formDescription,
                            disabled: _,
                            children: m.intl.string(m.t.AqHUra)
                        }),
                        (0, r.jsxs)('div', {
                            className: p.iconUploaderContainer,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    role: b,
                                    'aria-label': m.intl.string(m.t.mD1oGB),
                                    onClick: j,
                                    disabled: _
                                }),
                                (0, r.jsx)(i.zxk, {
                                    look: i.zxk.Looks.OUTLINED,
                                    color: i.zxk.Colors.PRIMARY,
                                    className: g.__invalid_imageUploadButtonCTA,
                                    onClick: j,
                                    disabled: _,
                                    children: m.intl.string(m.t.mD1oGB)
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)(i.Rny, {
                children: (0, r.jsxs)('div', {
                    className: p.previewContainer,
                    'aria-hidden': !0,
                    children: [
                        (0, r.jsx)(c.Z, {
                            guildId: t,
                            role: b,
                            className: p.messageContainer,
                            theme: 'light'
                        }),
                        (0, r.jsx)(c.Z, {
                            guildId: t,
                            role: b,
                            className: p.messageContainer,
                            theme: 'dark'
                        })
                    ]
                })
            })
        ]
    });
}
