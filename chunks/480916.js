n.d(t, {
    cU: () => o,
    d_: () => a,
    lA: () => s
});
var r = n(626135),
    i = n(981631),
    o = (function (e) {
        return (e.GET_STARTED_MODAL = 'get_started_modal'), (e.NSFW_GUILD = 'nsfw_guild'), (e.NSFW_CHANNEL = 'nsfw_channel'), (e.OBSCURED_MEDIA = 'obscured_media'), (e.SYSTEM_DM_RETRY_BUTTON = 'system_dm_retry_button'), (e.DEV_TOOLS_QUICK_ACTIONS = 'dev_tools_quick_actions'), (e.SENSITIVE_MEDIA_FILTER_SETTINGS = 'sensitive_media_filter_settings'), (e.MESSAGE_REQUESTS_SETTINGS = 'message_requests_settings'), e;
    })({}),
    a = (function (e) {
        return (e[(e.PRIMARY = 1)] = 'PRIMARY'), e;
    })({});
function s(e, t, n) {
    r.default.track(i.rMx.AGE_VERIFICATION_MODAL_VIEWED, {
        modal_session_id: e,
        modal_version: t,
        entry_point: n
    });
}
