n.d(e, { default: () => b });
var r = n(54381);
n(473749);
var o = n(703558),
    i = n(585483),
    a = n(403182),
    c = n(127654),
    l = n(98278),
    u = n(790527),
    s = n(474936),
    f = n(981631),
    d = n(388032),
    p = n(391853);
function b(t) {
    var { channel: e, onClose: n, content: b } = t,
        y = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ["channel", "onClose", "content"]);
    function g() {
        n(), (0, l.z)();
    }
    return (0, r.jsx)(
        u.Z,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        }),
                    )),
                    r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = r);
                    });
            }
            return t;
        })(
            {
                artURL: p.Z,
                type: s.cd.MESSAGE_LENGTH_UPSELL,
                title: d.intl.string(d.t.TZT3sJ),
                body: d.intl.format(d.t.QhcEAL, {
                    maxLength: f.J6R,
                    onLearnMore: g,
                }),
                context: d.intl.formatToPlainString(d.t.Fc1uVe, { maxLength: f.J6R }),
                glowUp: d.intl.format(d.t.Mi8kt1, { onLearnMore: g }),
                analyticsSource: {
                    page:
                        (null == e ? void 0 : e.getGuildId()) != null
                            ? f.ZY5.GUILD_CHANNEL
                            : (null == e ? void 0 : e.isGroupDM()) || (null == e ? void 0 : e.isPrivate())
                              ? f.ZY5.DM_CHANNEL
                              : null,
                },
                analyticsLocation: {
                    section: f.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
                    object: f.qAy.BUTTON_CTA,
                },
                onClose: n,
                secondaryCTA: d.intl.string(d.t.Fnsb1t),
                onSecondaryClick: function () {
                    n();
                    let t = new Blob([b], { type: "text/plain" });
                    (0, c.d)([(0, a.dp)(t, "message.txt", "text/plain")], e, o.d.ChannelMessage, {
                        requireConfirm: !0,
                    }),
                        i.S.dispatchToLastSubscribed(f.CkL.CLEAR_TEXT);
                },
            },
            y,
        ),
    );
}
