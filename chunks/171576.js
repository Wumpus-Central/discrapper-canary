n.d(t, {
    Im: () => h,
    _7: () => f,
    q1: () => E,
    WU: () => A,
    IY: () => I,
    A5: () => u,
    UT: () => T,
    St: () => m,
    Bs: () => p,
    mU: () => S,
    Bf: () => g,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d = n(734057),
    c = n(129230),
    u =
        (((i = {}).NSFW_CHANNEL_AGE_VERIFY = "nsfw_channel_age_verify"),
        (i.NSFW_CHANNEL_UNDERAGE = "nsfw_channel_underage"),
        (i.NSFW_CHANNEL_VERIFIED = "nsfw_channel_verified"),
        (i.GUILD_LARGE_SERVER = "guild_large_server"),
        (i.GUILD_LARGE_SERVER_UNDERAGE = "guild_large_server_underage"),
        (i.NSFW_EMBEDDED_ACTIVITY = "nsfw_embedded_activity"),
        (i.NSFW_APP_LISTING = "nsfw_app_listing"),
        (i.SPOILER_CHANNEL = "spoiler_channel"),
        i),
    _ = n(652215),
    E =
        (((r = {}).GET_STARTED_MODAL = "get_started_modal"),
        (r.RETRY_MODAL = "retry_modal"),
        (r.NSFW_GUILD = "nsfw_guild"),
        (r.NSFW_AGE_GATE = "nsfw_age_gate"),
        (r.OBSCURED_MEDIA = "obscured_media"),
        (r.SYSTEM_DM_RETRY_BUTTON = "system_dm_retry_button"),
        (r.MANUAL_REVIEW = "manual_review"),
        (r.SENSITIVE_MEDIA_FILTER_SETTINGS = "sensitive_media_filter_settings"),
        (r.SENSITIVE_MEDIA_LEARN_MORE = "sensitive_media_learn_more"),
        (r.MESSAGE_REQUESTS_SETTINGS = "message_requests_settings"),
        (r.ACCOUNT_AGE_GROUP = "account_age_group"),
        (r.FORUM_POST_MEDIA_PREVIEW = "forum_post_media_preview"),
        (r.SEARCH_MEDIA_PREVIEW = "search_media_preview"),
        (r.CONTENT_AND_SOCIAL_NOTICE = "content_and_social_notice"),
        (r.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL = "dev_tools_age_verification_retry_modal"),
        (r.SAFETY_FLOWS = "safety_flows"),
        (r.AUTOMATED_UNDERAGE_APPEALS = "automated_underage_appeals"),
        (r.EXPRESSIVE_GET_STARTED = "expressive_get_started"),
        (r.STAGE_CHANNEL_RAISE_HAND = "stage_channel_raise_hand"),
        (r.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT = "stage_channel_age_verification_prompt"),
        (r.START_STAGE_PROMPT = "start_stage_prompt"),
        (r.AGE_RESTRICTED_DM_COMMANDS_SETTINGS = "age_restricted_dm_commands_settings"),
        (r.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS = "age_restricted_servers_access_settings"),
        (r.FAMILY_CENTER_CONNECTION = "family_center_connection"),
        (r.PARENTAL_CONSENT_LOCKOUT = "parental_consent_lockout"),
        (r.AGE_NOTICE_POPOVER = "tiny_bronco_popover"),
        r),
    A =
        (((a = {})[(a.PRIMARY = 1)] = "PRIMARY"),
        (a[(a.RETRY = 2)] = "RETRY"),
        (a[(a.EXPRESSIVE_PRIMARY = 3)] = "EXPRESSIVE_PRIMARY"),
        (a[(a.SAFETY_FLOWS = 4)] = "SAFETY_FLOWS"),
        (a[(a.EXPRESSIVE_V2 = 5)] = "EXPRESSIVE_V2"),
        a),
    f =
        (((s = {}).LEARN_MORE = "learn_more"),
        (s.GET_STARTED = "get_started"),
        (s.SYSTEM_DMS_LEARN_MORE = "system_dms_learn_more"),
        (s.TRUSTED_PROVIDERS = "trusted_providers"),
        (s.METHOD_SELECT = "method_select"),
        (s.LOG_OUT = "log_out"),
        s),
    h = (((l = {}).RETRY = "retry"), (l.CONNECT_TO_TEEN = "connect_to_teen"), (l.MANUAL_REVIEW = "manual_review"), l),
    I =
        (((o = {}).NSFW_CHANNEL_AGREE_CTA = "nsfw_channel_agree_cta"),
        (o.NSFW_CHANNEL_DISAGREE_CTA = "nsfw_channel_disagree_cta"),
        o);
function p(e, t, n) {
    c.default.track(_.HAw.AGE_VERIFICATION_MODAL_VIEWED, { modal_session_id: e, modal_version: t, entry_point: n });
}
function m(e, t, n, i) {
    c.default.track(_.HAw.AGE_VERIFICATION_MODAL_CLICKED, { modal_session_id: e, modal_version: t, cta: n, method: i });
}
function T(e, t) {
    c.default.track(_.HAw.AGE_VERIFICATION_DM_CLICKED, { cta: e, channel_id: t });
}
function g(e, t, n) {
    c.default.track(_.HAw.NSFW_SPACE_WARNING_MODAL_VIEWED, { channel_id: t, guild_id: n, modal_type: e });
}
function S(e, t, n, i) {
    let r = null != n ? d.A.getChannel(n) : null,
        a = r?.topic != null && "" !== r.topic.trim();
    c.default.track(_.HAw.NSFW_SPACE_WARNING_MODAL_CLICKED, {
        cta: e,
        modal_type: t,
        channel_id: n,
        guild_id: i,
        has_channel_topic: a,
    });
}
