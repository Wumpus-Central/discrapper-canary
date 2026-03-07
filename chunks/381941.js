"use strict";
n.d(t, {
    ES: () => a,
    Fd: () => l,
    Gt: () => _,
    Hx: () => g,
    N0: () => c,
    VP: () => m,
    ZG: () => E,
    _W: () => p,
    k8: () => d,
    mZ: () => u,
    q4: () => f,
    qh: () => s,
    ty: () => h,
    y5: () => o,
});
var r = n(158390),
    i = n(927813);
n(652215);
let s = [0, 4, 8, 16, 24],
    a = 16,
    o = 0,
    l = Object.freeze({
        referencedAvatarProfile: !1,
        referencedUsernameProfile: !1,
        interactionAvatarProfile: !1,
        interactionUsernameProfile: !1,
        interactionData: !1,
        avatarProfile: !1,
        usernameProfile: !1,
        emojiPicker: !1,
        emojiBurstPicker: !1,
        moreUtilities: !1,
        contextMenu: !1,
    }),
    u = 16,
    c = 16,
    d = 32,
    _ = 64,
    f = "---new-messages-bar",
    p = "SPOILER_";
var h = (function (e) {
    return (
        (e.ERROR_SOURCE_UNKNOWN = "ERROR_SOURCE_UNKNOWN"),
        (e.PRECOMPRESSION_SUM_TOO_LARGE = "PRECOMPRESSION_SUM_TOO_LARGE"),
        (e.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE"),
        (e.POSTCOMPRESSION_SUM_TOO_LARGE = "POSTCOMPRESSION_SUM_TOO_LARGE"),
        (e.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE"),
        (e.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR = "UPLOAD_MESSAGE_ATTACHMENT_MAX_SIZE_ERROR"),
        (e.EXPLICIT_CONTENT = "EXPLICIT_CONTENT"),
        e
    );
})({});
let m = 0xc800000,
    E = { timeout: 60 * i.A.Millis.SECOND, retries: 3, backoff: new r.A() };
var g = (function (e) {
    return (
        (e.PUSH_NOTIFICATION = "push_notification"),
        (e.CHAT_INPUT = "chat_input"),
        (e.SHARE_MODAL = "share_modal"),
        (e.VOICE_MESSAGE = "voice_message"),
        (e.THREAD_CREATION = "thread_creation"),
        (e.FORWARDING = "forwarding"),
        (e.USER_PROFILE = "user_profile"),
        (e.RETRY = "explicit_retry"),
        (e.OVERLAY = "overlay"),
        (e.ACTIVITY_SHARE = "activity_share"),
        (e.ICYMI = "icymi"),
        (e.INSTANT_UPLOAD = "instant_upload"),
        (e.APP_COMMAND = "app_command"),
        (e.PRIVATE_MESSAGE_COMMAND = "private_message_command"),
        (e.POLL_CREATION = "poll_creation"),
        (e.SHARE_CUSTOM_THEME = "share_custom_theme"),
        (e.GIF_REPLY = "gif_reply"),
        (e.STICKER_REPLY = "sticker_reply"),
        (e.SEND_WAVE = "send_wave"),
        (e.GIFTING = "gifting"),
        (e.CONTENT_INVENTORY_MEMBERLIST = "content_inventory_memberlist"),
        (e.GREET = "greet"),
        (e.SOCIAL_LAYER_STOREFRONT = "social_layer_storefront"),
        (e.OTHER = "other"),
        e
    );
})({});
