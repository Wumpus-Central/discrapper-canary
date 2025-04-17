n.d(t, { e: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(240872),
    l = n(923500),
    o = n(247206),
    s = n(774863),
    c = n(388032);
function u(e, t) {
    if (
        ((0, o.aP)({
            action: o.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
            messageId: t,
            channelId: e
        }),
        !s.Z.canSubmitFpReport(t))
    ) {
        a.Z.show({
            title: c.NW.string(c.t['iS/eFB']),
            body: c.NW.string(c.t.YrjcgY),
            confirmText: c.NW.string(c.t.BddRzc)
        }),
            l.Z.disableFalsePositiveButton(e, t);
        return;
    }
    (0, i.ZDy)(async () => {
        let { default: i } = await n(773276);
        return (n) =>
            (0, r.jsx)(
                i,
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
                        channelId: e,
                        messageId: t
                    },
                    n
                )
            );
    });
}
