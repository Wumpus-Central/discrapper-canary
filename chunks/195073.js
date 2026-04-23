n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(189213),
    r = n(192308),
    o = n(821609),
    c = n(825484),
    d = n(824552),
    u = n(933958),
    h = n(869003),
    m = n(496231),
    A = n(546183),
    g = n(543465),
    _ = n(954571),
    p = n(33364),
    f = n(652215),
    E = n(985018);
function C(e) {
    let { channel: t } = e,
        l = (0, a.bG)([g.Ay], () => g.Ay.isChannelMuted(null, t.id));
    return (0, i.jsx)(o.$, {
        variant: l ? "secondary" : "critical-primary",
        text: l ? E.intl.string(E.t.YqAjXy) : E.intl.string(E.t.w4m945),
        onClick: function () {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("99312").then(n.bind(n, 259763));
                return (n) => (0, i.jsx)(e, { channelId: t.id, ...n });
            });
        },
    });
}
function x(e) {
    let { channel: t, application: n, oauth2Token: l } = e,
        c = (0, a.bG)([u.Ay], () => u.Ay.getSelfEmbeddedActivities());
    function m() {
        d.A.delete(l.id);
        let e = c.get(n.id);
        null != e && h.A.leaveActivity({ location: e.location, applicationId: n.id });
    }
    return (0, i.jsx)(o.$, {
        variant: "secondary",
        text: E.intl.string(E.t["5S3sQF"]),
        onClick: () => {
            (0, r.openModal)((e) =>
                (0, i.jsx)(s.Modal, {
                    title: E.intl.string(E.t["DT39A+"]),
                    subtitle: E.intl.formatToPlainString(E.t.QWGvxA, { applicationName: n.name }),
                    actions: [
                        { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                        {
                            text: E.intl.string(E.t.xUqheM),
                            variant: "critical-primary",
                            onClick: () => {
                                m(), e.onClose();
                            },
                        },
                    ],
                    ...e,
                }),
            ),
                _.default.track(f.HAw.APP_MANAGE_CTA_CLICKED, {
                    application_id: n.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
}
function S(e) {
    let { channel: t, user: n } = e,
        s = (0, m.A)(n?.id ?? f.dJq),
        { authorizedAppToken: r, authorizedAppsFetchState: o } = (0, a.cf)([A.default], () => ({
            authorizedAppToken: A.default.getNewestTokenForApplication(s?.id),
            authorizedAppsFetchState: A.default.getFetchState(),
        }));
    return (l.useEffect(() => {
        n.bot && o === A.FetchState.NOT_FETCHED && d.A.fetch();
    }, [n.bot, o]),
    n.bot && null != s && null != r)
        ? (0, i.jsxs)(c.e, {
              size: "sm",
              children: [
                  (0, i.jsx)(C, { channel: t }),
                  (0, i.jsx)(x, { application: s, channel: t, oauth2Token: r }),
                  (0, i.jsx)(p.A, { channel: t, user: n }),
              ],
          })
        : (0, i.jsx)(c.e, { size: "sm", children: (0, i.jsx)(p.A, { channel: t, user: n }) });
}
