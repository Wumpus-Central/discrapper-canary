n.d(t, {
    oQ: () => C,
    A5: () => _,
    WU: () => h,
    Vh: () => O,
    mU: () => N,
    Bf: () => S,
    UT: () => m,
    St: () => g,
    Bs: () => T,
    _7: () => I,
    Im: () => f,
    IY: () => p,
    q1: () => A,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c = n(734057),
    u = n(174459),
    _ =
        (((i = {}).NSFW_CHANNEL_AGE_VERIFY = "nsfw_channel_age_verify"),
        (i.NSFW_CHANNEL_UNDERAGE = "nsfw_channel_underage"),
        (i.NSFW_CHANNEL_VERIFIED = "nsfw_channel_verified"),
        (i.GUILD_LARGE_SERVER = "guild_large_server"),
        (i.GUILD_LARGE_SERVER_UNDERAGE = "guild_large_server_underage"),
        (i.NSFW_EMBEDDED_ACTIVITY = "nsfw_embedded_activity"),
        (i.NSFW_APP_LISTING = "nsfw_app_listing"),
        (i.SPOILER_CHANNEL = "spoiler_channel"),
        i),
    E = n(652215),
    A =
        (((r = {}).GET_STARTED_MODAL = "get_started_modal"),
        (r.RETRY_MODAL = "retry_modal"),
        (r.NSFW_GUILD = "nsfw_guild"),
        (r.NSFW_AGE_GATE = "nsfw_age_gate"),
        (r.OBSCURED_MEDIA = "obscured_media"),
        (r.SYSTEM_DM_RETRY_BUTTON = "system_dm_retry_button"),
        (r.MANUAL_REVIEW = "manual_review"),
        (r.DEV_TOOLS_QUICK_ACTIONS = "dev_tools_quick_actions"),
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
        (r.TINY_BRONCO_POPOVER = "tiny_bronco_popover"),
        r),
    h =
        (((a = {})[(a.PRIMARY = 1)] = "PRIMARY"),
        (a[(a.RETRY = 2)] = "RETRY"),
        (a[(a.EXPRESSIVE_PRIMARY = 3)] = "EXPRESSIVE_PRIMARY"),
        (a[(a.SAFETY_FLOWS = 4)] = "SAFETY_FLOWS"),
        (a[(a.EXPRESSIVE_V2 = 5)] = "EXPRESSIVE_V2"),
        a),
    I =
        (((s = {}).MANUAL_REVIEW_REQUEST = "manual_review_request"),
        (s.LEARN_MORE = "learn_more"),
        (s.GET_STARTED = "get_started"),
        (s.SYSTEM_DMS_LEARN_MORE = "system_dms_learn_more"),
        (s.TRUSTED_PROVIDERS = "trusted_providers"),
        (s.METHOD_SELECT = "method_select"),
        (s.LOG_OUT = "log_out"),
        s),
    f = (((l = {}).RETRY = "retry"), (l.CONNECT_TO_TEEN = "connect_to_teen"), (l.MANUAL_REVIEW = "manual_review"), l),
    p =
        (((o = {}).NSFW_CHANNEL_AGREE_CTA = "nsfw_channel_agree_cta"),
        (o.NSFW_CHANNEL_DISAGREE_CTA = "nsfw_channel_disagree_cta"),
        o);
function T(e, t, n) {
    u.default.track(E.HAw.AGE_VERIFICATION_MODAL_VIEWED, { modal_session_id: e, modal_version: t, entry_point: n });
}
function g(e, t, n, i) {
    u.default.track(E.HAw.AGE_VERIFICATION_MODAL_CLICKED, { modal_session_id: e, modal_version: t, cta: n, method: i });
}
function m(e, t) {
    u.default.track(E.HAw.AGE_VERIFICATION_DM_CLICKED, { cta: e, channel_id: t });
}
function S(e, t, n) {
    u.default.track(E.HAw.NSFW_SPACE_WARNING_MODAL_VIEWED, { channel_id: t, guild_id: n, modal_type: e });
}
function N(e, t, n, i) {
    let r = null != n ? c.A.getChannel(n) : null,
        a = r?.topic != null && "" !== r.topic.trim();
    u.default.track(E.HAw.NSFW_SPACE_WARNING_MODAL_CLICKED, {
        cta: e,
        modal_type: t,
        channel_id: n,
        guild_id: i,
        has_channel_topic: a,
    });
}
var C =
    (((d = {}).VERIFIED_TEEN = "verified_teen"),
    (d.VERIFIED_ADULT = "verified_adult"),
    (d.ERROR = "error"),
    (d.FAE_FAILED = "fae_failed"),
    (d.ID_FAILED = "id_failed"),
    (d.UNDERAGE = "underage"),
    d);
function O(e) {
    u.default.track(E.HAw.AGE_VERIFICATION_TOAST_VIEWED, { toast_type: e });
}
