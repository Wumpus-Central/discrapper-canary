n.d(t, { default: () => b });
var r = n(200651);
n(192379);
var o = n(703558),
    a = n(585483),
    c = n(403182),
    i = n(127654),
    l = n(98278),
    s = n(790527),
    u = n(474936),
    f = n(981631),
    d = n(388032),
    p = n(330226);
function b(e) {
    var { channel: t, onClose: n, content: b } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['channel', 'onClose', 'content']);
    function y() {
        n(), (0, l.z)(!0);
    }
    return (0, r.jsx)(
        s.Z,
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
                artURL: p.Z,
                type: u.cd.MESSAGE_LENGTH_UPSELL,
                title: d.NW.string(d.t.TZT3sL),
                body: d.NW.format(d.t.QhcEAA, {
                    maxLength: f.J6R,
                    onLearnMore: y
                }),
                context: d.NW.formatToPlainString(d.t.Fc1uVV, { maxLength: f.J6R }),
                glowUp: d.NW.format(d.t.Mi8kt7, { onLearnMore: y }),
                analyticsSource: { page: (null == t ? void 0 : t.getGuildId()) != null ? f.ZY5.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? f.ZY5.DM_CHANNEL : null },
                analyticsLocation: {
                    section: f.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
                    object: f.qAy.BUTTON_CTA
                },
                onClose: n,
                secondaryCTA: d.NW.string(d.t.Fnsb1t),
                onSecondaryClick: function () {
                    n();
                    let e = new Blob([b], { type: 'text/plain' });
                    (0, i.d)([(0, c.dp)(e, 'message.txt', 'text/plain')], t, o.d.ChannelMessage, {
                        requireConfirm: !0,
                        showLargeMessageDialog: !0
                    }),
                        a.S.dispatchToLastSubscribed(f.CkL.CLEAR_TEXT);
                }
            },
            g
        )
    );
}
