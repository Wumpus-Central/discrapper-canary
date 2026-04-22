n.d(t, { A: () => I });
var i = n(73153),
    r = n(997509),
    l = n(542580),
    T = n(824953);
let I = {
    init() {
        i.h.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        i.h.dispatch({ type: "INTEGRATION_SETTINGS_SET_SECTION", section: e, sectionId: t });
    },
    startEditingCommandPermissions(e) {
        i.h.dispatch({ type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND", commandId: e });
    },
    stopEditingCommandPermissions(e) {
        i.h.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND", commandId: e });
    },
    startEditingIntegration(e) {
        i.h.dispatch({ type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION", integrationId: e });
    },
    stopEditingIntegration() {
        i.h.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION" });
    },
    updateIntegration(e) {
        i.h.dispatch({ type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION", settings: e });
    },
    startEditingWebhook(e) {
        i.h.dispatch({ type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK", webhookId: e });
    },
    stopEditingWebhook() {
        i.h.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
    },
    updateWebhook(e) {
        i.h.dispatch({ type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK", settings: e });
    },
    async saveApplicationPermissions(e, t, n) {
        try {
            i.h.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await l.Ni({
                    applicationId: e,
                    commandId: e,
                    defaultEveryoneValue: !0,
                    defaultEverywhereValue: !0,
                    guildId: t,
                    permissions: n,
                }),
                i.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
        } catch (e) {
            i.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: e.body });
        }
    },
    async saveIntegration(e, t) {
        try {
            i.h.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await r.A.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons),
                i.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
        } catch (e) {
            i.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: e.body });
        }
    },
    async saveWebhook(e, t) {
        try {
            i.h.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await T.A.update(e, t.id, t),
                i.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
        } catch (e) {
            i.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: e.body });
        }
    },
};
