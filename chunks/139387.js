n.d(t, { Z: () => I });
var i = n(570140),
    l = n(434404),
    r = n(821864),
    T = n(308063);
let I = {
    init() {
        i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_INIT' });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_SET_SECTION',
            section: e,
            sectionId: t
        });
    },
    startEditingCommandPermissions(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_COMMAND',
            commandId: e
        });
    },
    stopEditingCommandPermissions(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_STOP_EDITING_COMMAND',
            commandId: e
        });
    },
    startEditingIntegration(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_INTEGRATION',
            integrationId: e
        });
    },
    stopEditingIntegration() {
        i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION' });
    },
    updateIntegration(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_UPDATE_INTEGRATION',
            settings: e
        });
    },
    startEditingWebhook(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_START_EDITING_WEBHOOK',
            webhookId: e
        });
    },
    stopEditingWebhook() {
        i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK' });
    },
    updateWebhook(e) {
        i.Z.dispatch({
            type: 'INTEGRATION_SETTINGS_UPDATE_WEBHOOK',
            settings: e
        });
    },
    async saveApplicationPermissions(e, t, n) {
        try {
            i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }),
                await r.U3({
                    applicationId: e,
                    commandId: e,
                    defaultEveryoneValue: !0,
                    defaultEverywhereValue: !0,
                    guildId: t,
                    permissions: n
                }),
                i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (e) {
            i.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: e.body
            });
        }
    },
    async saveIntegration(e, t) {
        try {
            i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }), await l.Z.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (e) {
            i.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: e.body
            });
        }
    },
    async saveWebhook(e, t) {
        try {
            i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SUBMITTING' }), await T.Z.update(e, t.id, t), i.Z.dispatch({ type: 'INTEGRATION_SETTINGS_SAVE_SUCCESS' });
        } catch (e) {
            i.Z.dispatch({
                type: 'INTEGRATION_SETTINGS_SAVE_FAILURE',
                errors: e.body
            });
        }
    }
};
