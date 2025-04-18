n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(388032),
    l = n(499632);
function o(e) {
    let { message: t } = e;
    return (0, r.jsxs)(i.P3F, {
        onClick: () => {
            (0, i.ZDy)(async () => {
                let { default: e } = await n.e('14021').then(n.bind(n, 910673));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
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
                        })(
                            {
                                channelId: t.channel_id,
                                messageId: t.id
                            },
                            n
                        )
                    );
            });
        },
        className: l.accessory,
        children: [
            (0, r.jsx)(i.d3s, {
                size: 'xs',
                color: 'currentColor'
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                className: l.accessoryText,
                children: a.NW.string(a.t['2aXnfX'])
            })
        ]
    });
}
