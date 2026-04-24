n.d(t, { A: () => l });
var T = n(228366),
    I = n(997509),
    i = n(542580),
    N = n(824953);
let l = {
    init() {
        T.h.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        T.h.dispatch({ type: "INTEGRATION_SETTINGS_SET_SECTION", section: e, sectionId: t });
    },
    startEditingCommandPermissions(e) {
        T.h.dispatch({ type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND", commandId: e });
    },
    stopEditingCommandPermissions(e) {
        T.h.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND", commandId: e });
    },
    startEditingIntegration(e) {
        T.h.dispatch({ type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION", integrationId: e });
    },
    stopEditingIntegration() {
        T.h.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION" });
    },
    updateIntegration(e) {
        T.h.dispatch({ type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION", settings: e });
    },
    startEditingWebhook(e) {
        T.h.dispatch({ type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK", webhookId: e });
    },
    stopEditingWebhook() {
        T.h.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
    },
    updateWebhook(e) {
        T.h.dispatch({ type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK", settings: e });
    },
    async saveApplicationPermissions(e, t, n) {
        try {
            T.h.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await i.Ni({
                    applicationId: e,
                    commandId: e,
                    defaultEveryoneValue: !0,
                    defaultEverywhereValue: !0,
                    guildId: t,
                    permissions: n,
                }),
                T.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
        } catch (e) {
            T.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: e.body });
        }
    },
    async saveIntegration(e, t) {
        try {
            T.h.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await I.A.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons),
                T.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
        } catch (e) {
            T.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: e.body });
        }
    },
    async saveWebhook(e, t) {
        try {
            T.h.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await N.A.update(e, t.id, t),
                T.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
        } catch (e) {
            T.h.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: e.body });
        }
    },
};
