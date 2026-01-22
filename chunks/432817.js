n.d(t, { L: () => p });
var r = n(627968),
    l = n(311907),
    i = n(732955),
    a = n(397927),
    s = n(824552),
    o = n(933958),
    c = n(869003),
    u = n(954571),
    d = n(652215),
    f = n(985018);
let p = (e) => {
    let { channel: t, user: n, application: p, oauth2Token: h } = e,
        b = (0, l.bG)([o.Ay], () => o.Ay.getSelfEmbeddedActivities());
    if (!n.bot || null == p) return null;
    function g() {
        s.A.delete(h.id);
        let e = b.get(p.id);
        null != e &&
            c.A.leaveActivity({
                location: e.location,
                applicationId: p.id,
            });
    }
    return (0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: f.intl.string(f.t["5S3sQF"]),
        onClick: () => {
            (0, a.qfG)((e) =>
                (0, r.jsx)(
                    i.aFV,
                    (function (e) {
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
                    })(
                        {
                            title: f.intl.string(f.t["DT39A+"]),
                            subtitle: f.intl.formatToPlainString(f.t.QWGvxA, { applicationName: p.name }),
                            actions: [
                                {
                                    text: f.intl.string(f.t["ETE/oC"]),
                                    variant: "secondary",
                                    onClick: e.onClose,
                                },
                                {
                                    text: f.intl.string(f.t.xUqheM),
                                    variant: "critical-primary",
                                    onClick: () => {
                                        g(), e.onClose();
                                    },
                                },
                            ],
                        },
                        e,
                    ),
                ),
            ),
                u.default.track(d.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: p.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
};
