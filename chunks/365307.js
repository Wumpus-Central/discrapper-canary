n.d(t, {
    Z: () => g,
    j: () => p
});
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(139387),
    a = n(852860),
    l = n(490655),
    o = n(434404),
    c = n(360606),
    d = n(999382),
    u = n(821864),
    m = n(905753);
function g(e) {
    let { refToScroller: t } = e,
        n = (0, i.e7)([d.Z], () => d.Z.getGuild()),
        {
            section: s,
            sectionId: a,
            integrations: o,
            editedIntegration: u,
            webhooks: m,
            editedWebhook: g,
            isFetching: p,
            errors: h
        } = (0, i.cj)([c.default], () => ({
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
        : (0, r.jsx)(l.Z, {
              guild: n,
              section: s,
              sectionId: a,
              integrations: o,
              webhooks: m,
              editedIntegration: u,
              editedWebhook: g,
              isFetchingWebhooks: p,
              hasChanges: c.default.hasChanges,
              errors: h,
              refToScroller: t
          });
}
function p() {
    let { guild: e, submitting: t } = (0, i.cj)([d.Z], () => ({
        guild: d.Z.getGuild(),
        submitting: d.Z.isSubmitting()
    }));
    return (0, r.jsx)(a.Z, {
        submitting: t,
        onReset: () => {
            s.Z.init(), u.Ui(), null != e && o.Z.init(e.id);
        },
        onSave: () => {
            if (null != e) {
                if (null != c.default.editedIntegration) s.Z.saveIntegration(e.id, c.default.editedIntegration);
                else if (null != c.default.editedWebhook) s.Z.saveWebhook(e.id, c.default.editedWebhook);
                else if (null != c.default.editedCommandId) {
                    let t = c.default.getSectionId(),
                        n = m.Z.getEditedApplication();
                    if (null == t || null == n) return;
                    s.Z.saveApplicationPermissions(t, e.id, Object.values(n));
                }
                d.Z.hasChanges() && o.Z.saveGuild(e.id, { features: e.features });
            }
        }
    });
}
