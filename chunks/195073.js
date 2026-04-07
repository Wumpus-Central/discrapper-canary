n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(732955),
    r = n(397927),
    o = n(824552),
    c = n(933958),
    d = n(869003),
    u = n(496231),
    h = n(546183),
    m = n(543465),
    A = n(954571),
    g = n(33364),
    p = n(652215),
    f = n(985018);
function _(e) {
    let { channel: t } = e,
        l = (0, s.bG)([m.Ay], () => m.Ay.isChannelMuted(null, t.id));
    return (0, i.jsx)(r.Button, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? f.intl.string(f.t.YqAjXy) : f.intl.string(f.t.w4m945),
        onClick: function () {
            (0, r.mMO)(async () => {
                let { default: e } = await n.e("99312").then(n.bind(n, 259763));
                return (n) => (0, i.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function E(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        u = (0, s.bG)([c.Ay], () => c.Ay.getSelfEmbeddedActivities());
    function h() {
        o.A.delete(l.id);
        let e = u.get(n.id);
        null != e && d.A.leaveActivity({ location: e.location, applicationId: n.id });
    }
    return (0, i.jsx)(r.Button, {
        variant: "secondary",
        text: f.intl.string(f.t["5S3sQF"]),
        onClick: () => {
            (0, r.qfG)((e) =>
                (0, i.jsx)(a.aFV, {
                    title: f.intl.string(f.t["DT39A+"]),
                    subtitle: f.intl.formatToPlainString(f.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: f.intl.string(f.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: f.intl.string(f.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                h(), e.onClose();
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                A.default.track(p.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
}
function x(e) {
    let { channel: t, user: n } = e,
        a = (0, u.A)(n?.id ?? p.dJq),
        { authorizedAppToken: c, authorizedAppsFetchState: d } = (0, s.cf)([h.default], () => ({
            authorizedAppToken: h.default.getNewestTokenForApplication(a?.id),
            authorizedAppsFetchState: h.default.getFetchState(),
        }));
    return (l.useEffect(() => {
        n.bot && d === h.FetchState.NOT_FETCHED && o.A.fetch();
    }, [n.bot, d]),
    n.bot && null != a && null != c)
        ? (0, i.jsxs)(r.ButtonGroup, {
              size: "sm",
              children: [
                  (0, i.jsx)(_, { channel: t }),
                  (0, i.jsx)(E, { application: a, channel: t, oauth2Token: c }),
                  (0, i.jsx)(g.A, { channel: t, user: n }),
              ],
          })
        : (0, i.jsx)(r.ButtonGroup, { size: "sm", children: (0, i.jsx)(g.A, { channel: t, user: n }) });
}
