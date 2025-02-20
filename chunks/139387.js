n.d(t, { Z: () => s });
var r = n(570140),
    i = n(434404),
    o = n(821864),
    a = n(308063);
let s = {
    init() {
        r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_INIT' });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_SET_SECTION',
            section: e,
            sectionId: t
        });
    },
    startEditingCommandPermissions(e) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_COMMAND',
            commandId: e
        });
    },
    stopEditingCommandPermissions(e) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_STOP_EDITING_COMMAND',
            commandId: e
        });
    },
    startEditingIntegration(e) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_INTEGRATION',
            integrationId: e
        });
    },
    stopEditingIntegration() {
        r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION' });
    },
    updateIntegration(e) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_UPDATE_INTEGRATION',
            settings: e
        });
    },
    startEditingWebhook(e) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_WEBHOOK',
            webhookId: e
        });
    },
    stopEditingWebhook() {
        r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK' });
    },
    updateWebhook(e) {
        r.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_UPDATE_WEBHOOK',
            settings: e
        });
    },
    async saveApplicationPermissions(e, t, n) {
        try {
            r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }),
                await o.U3({
                    applicationId: e,
                    commandId: e,
                    defaultEveryoneValue: !0,
                    defaultEverywhereValue: !0,
                    guildId: t,
                    permissions: n
                }),
                r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (e) {
            r.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: e.body
            });
        }
    },
    async saveIntegration(e, t) {
        try {
            r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }), await i.Z.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (e) {
            r.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: e.body
            });
        }
    },
    async saveWebhook(e, t) {
        try {
            r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }), await a.Z.update(e, t.id, t), r.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (e) {
            r.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: e.body
            });
        }
    }
};
