n.d(t, { Z: () => h }), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(723047),
    a = n(727843),
    l = n(290348),
    o = n(783454),
    c = n(893729),
    d = n(619326),
    u = n(553204),
    m = n(388032),
    g = n(301849),
    p = n(181517);
function h() {
    let { editStateId: e, guildId: t } = (0, a.N)(),
        [, h] = l.p9(e, t),
        [f, b] = l.Ek(e, t),
        x = l.qs(e, t);
    function j() {
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('22942').then(n.bind(n, 660727));
            return (n) => {
                var i, s;
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
                    (s = s =
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
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    i)
                );
            };
        });
    }
    let N = (0, s.mY)();
    return (0, r.jsxs)(o.Z, {
        title: m.NW.string(m.t['Ah+sQ0']),
        description: m.NW.string(m.t.ixbWiI),
        children: [
            (0, r.jsx)(i.hjN, {
                title: m.NW.string(m.t['6OUqDQ']),
                disabled: N,
                children: (0, r.jsx)(d.Z, {
                    value: f,
                    onChange: b,
                    disabled: N
                })
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)('div', {
                className: g.__invalid_iconSection,
                children: (0, r.jsxs)(i.hjN, {
                    title: m.NW.string(m.t['zn8/AQ']),
                    disabled: N,
                    children: [
                        (0, r.jsx)(i.R94, {
                            type: i.R94.Types.DESCRIPTION,
                            className: g.formDescription,
                            disabled: N,
                            children: m.NW.string(m.t.AqHUra)
                        }),
                        (0, r.jsxs)('div', {
                            className: p.iconUploaderContainer,
                            children: [
                                (0, r.jsx)(u.Z, {
                                    role: x,
                                    'aria-label': m.NW.string(m.t.mD1oGB),
                                    onClick: j,
                                    disabled: N
                                }),
                                (0, r.jsx)(i.zxk, {
                                    look: i.zxk.Looks.OUTLINED,
                                    color: i.zxk.Colors.PRIMARY,
                                    className: g.__invalid_imageUploadButtonCTA,
                                    onClick: j,
                                    disabled: N,
                                    children: m.NW.string(m.t.mD1oGB)
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
                            role: x,
                            className: p.messageContainer,
                            theme: 'light'
                        }),
                        (0, r.jsx)(c.Z, {
                            guildId: t,
                            role: x,
                            className: p.messageContainer,
                            theme: 'dark'
                        })
                    ]
                })
            })
        ]
    });
}
