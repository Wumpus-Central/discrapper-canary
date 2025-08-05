n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(991621),
    o = n(629710),
    s = n(388032);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
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
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u(e, t) {
    let l = (0, o.rb)(e),
        u =
            null != t &&
            (0, o.g4)(
                {
                    type: a.l.GenericMedia,
                    media: t
                },
                l
            );
    if (null == t || !u) return null;
    let d = () => {
        (0, i.ZDy)(async () => {
            let { default: i } = await n(788679);
            return (n) =>
                (0, r.jsx)(
                    i,
                    c(
                        {
                            channelId: e.channel_id,
                            messageId: e.id,
                            mediaItemUrl: t.url
                        },
                        n
                    )
                );
        });
    };
    return (0, r.jsx)(
        i.sNh,
        {
            id: 'report-image-false-positive',
            label: s.intl.string(s.t.ZH7P2t),
            action: d,
            icon: i.fFY
        },
        'report-image-false-positive'
    );
}
