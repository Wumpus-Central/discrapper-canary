n.d(t, {
    Z: function () {
        return h;
    },
    j: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(139387),
    a = n(852860),
    s = n(490655),
    o = n(434404),
    c = n(360606),
    d = n(999382),
    u = n(821864),
    m = n(905753);
function h(e) {
    let { refToScroller: t } = e,
        n = (0, r.e7)([d.Z], () => d.Z.getGuild()),
        {
            section: l,
            sectionId: a,
            integrations: o,
            editedIntegration: u,
            webhooks: m,
            editedWebhook: h,
            isFetching: g,
            errors: x
        } = (0, r.cj)([c.default], () => ({
            editedIntegration: c.default.editedIntegration,
            editedWebhook: c.default.editedWebhook,
            errors: c.default.getErrors(),
            integrations: c.default.integrations,
            isFetching: c.default.isFetching(),
            section: c.default.getSection(),
            sectionId: c.default.getSectionId(),
            webhooks: c.default.webhooks
        }));
    return null == n
        ? null
        : (0, i.jsx)(s.Z, {
              guild: n,
              section: l,
              sectionId: a,
              integrations: o,
              webhooks: m,
              editedIntegration: u,
              editedWebhook: h,
              isFetching: g,
              hasChanges: c.default.hasChanges,
              errors: x,
              refToScroller: t
          });
}
function g() {
    let { guild: e, submitting: t } = (0, r.cj)([d.Z], () => ({
        guild: d.Z.getGuild(),
        submitting: d.Z.isSubmitting()
    }));
    return (0, i.jsx)(a.Z, {
        submitting: t,
        onReset: () => {
            l.Z.init(), u.Ui(), null != e && o.Z.init(e.id);
        },
        onSave: () => {
            if (null != e) {
                if (null != c.default.editedIntegration) l.Z.saveIntegration(e.id, c.default.editedIntegration);
                else if (null != c.default.editedWebhook) l.Z.saveWebhook(e.id, c.default.editedWebhook);
                else if (null != c.default.editedCommandId) {
                    let t = c.default.getSectionId(),
                        n = m.Z.getEditedApplication();
                    if (null == t || null == n) return;
                    l.Z.saveApplicationPermissions(t, e.id, Object.values(n));
                }
                d.Z.hasChanges() && o.Z.saveGuild(e.id, { features: e.features });
            }
        }
    });
}
