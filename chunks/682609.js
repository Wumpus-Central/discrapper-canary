n.d(t, { default: () => f });
var r = n(200651);
n(192379);
var o = n(98278),
    c = n(790527),
    l = n(474936),
    a = n(981631),
    i = n(388032),
    u = n(330226);
function f(e) {
    var { channel: t, onClose: n } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++) (n = c[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['channel', 'onClose']);
    let s = i.NW.format(i.t.AVVUsb, {
        onLearnMore: function () {
            n(), (0, o.z)(!0);
        }
    });
    return (0, r.jsx)(
        c.Z,
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
                artURL: u.Z,
                type: l.cd.MESSAGE_LENGTH_UPSELL,
                title: i.NW.string(i.t.SeL3eX),
                body: s,
                glowUp: s,
                analyticsSource: { page: (null == t ? void 0 : t.getGuildId()) != null ? a.ZY5.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? a.ZY5.DM_CHANNEL : null },
                analyticsLocation: {
                    section: a.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
                    object: a.qAy.BUTTON_CTA
                },
                onClose: n
            },
            f
        )
    );
}
