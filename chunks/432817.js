n.d(t, { L: () => m });
var i = n(627968),
    l = n(311907),
    a = n(732955),
    s = n(397927),
    r = n(824552),
    o = n(933958),
    c = n(869003),
    d = n(954571),
    u = n(652215),
    h = n(985018);
let m = (e) => {
    let { channel: t, user: n, application: m, oauth2Token: A } = e,
        p = (0, l.bG)([o.Ay], () => o.Ay.getSelfEmbeddedActivities());
    if (!n.bot || null == m) return null;
    function g() {
        r.A.delete(A.id);
        let e = p.get(m.id);
        null != e && c.A.leaveActivity({ location: e.location, applicationId: m.id });
    }
    return (0, i.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: h.intl.string(h.t["5S3sQF"]),
        onClick: () => {
            (0, s.qfG)((e) =>
                (0, i.jsx)(a.aFV, {
                    title: h.intl.string(h.t["DT39A+"]),
                    subtitle: h.intl.formatToPlainString(h.t.QWGvxA, { applicationName: m.name }),
                    actions: [
                        { text: h.intl.string(h.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: h.intl.string(h.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                g(), e.onClose();
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                d.default.track(u.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: m.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
};
