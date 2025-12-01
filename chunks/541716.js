n.d(t, {
    Ie: () => R,
    OW: () => c,
    gy: () => u,
});
var r = n(873546),
    i = n(703558);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var c = (function (e) {
        return (e[(e.TOOLTIP = 0)] = "TOOLTIP"), (e[(e.STATIC = 1)] = "STATIC"), (e[(e.NONE = 2)] = "NONE"), e;
    })({}),
    u = (function (e) {
        return (e[(e.DEFAULT = 0)] = "DEFAULT"), (e[(e.INLINE = 1)] = "INLINE"), (e[(e.FLUSH = 2)] = "FLUSH"), e;
    })({});
let d = {
        analyticsName: "normal",
        attachments: !0,
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0,
            reactions: !0,
            mentionSuggestions: !0,
        },
        commands: { enabled: !0 },
        confetti: { button: !0 },
        drafts: {
            type: i.d.ChannelMessage,
            commandType: i.d.SlashCommand,
            autoSave: !0,
        },
        emojis: { button: !0 },
        gifs: {
            button: !0,
            allowSending: !0,
        },
        gifts: { button: !0 },
        permissions: { requireSendMessages: !0 },
        showThreadPromptOnReply: !0,
        stickers: {
            button: !0,
            allowSending: !0,
            autoSuggest: !0,
        },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: r.tq,
            disableEnterToSubmit: r.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0,
        },
        uploadLongMessages: !0,
        upsellLongMessages: { iconOnly: !1 },
        showCharacterCount: !0,
        sedReplace: !0,
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0,
    },
    f = {
        analyticsName: "overlay",
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0,
            mentionSuggestions: !0,
        },
        confetti: { button: !0 },
        drafts: {
            type: i.d.ChannelMessage,
            autoSave: !0,
        },
        emojis: { button: !0 },
        gifs: {
            button: !0,
            allowSending: !0,
        },
        gifts: { button: !0 },
        permissions: { requireSendMessages: !0 },
        showThreadPromptOnReply: !0,
        stickers: {
            button: !0,
            allowSending: !0,
        },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: r.tq,
            disableEnterToSubmit: r.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0,
        },
        upsellLongMessages: { iconOnly: !1 },
        showCharacterCount: !0,
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0,
    },
    p = {
        analyticsName: "sidebar",
        attachments: !0,
        autocomplete: {
            addReactionShortcut: !0,
            mentionSuggestions: !0,
        },
        commands: { enabled: !0 },
        confetti: { button: !0 },
        disableAutoFocus: !0,
        drafts: {
            type: i.d.ChannelMessage,
            commandType: i.d.SlashCommand,
        },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        stickers: {
            allowSending: !0,
            autoSuggest: !0,
        },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: r.tq,
            disableEnterToSubmit: r.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0,
        },
        uploadLongMessages: !0,
        showCharacterCount: !0,
        upsellLongMessages: { iconOnly: !0 },
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0,
    },
    _ = {
        analyticsName: "edit",
        autocomplete: { mentionSuggestions: !0 },
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        expressionPicker: { onlyEmojis: !0 },
        permissions: { requireSendMessages: !0 },
        submit: { useDisabledStylesOnSubmit: !0 },
        showCharacterCount: !0,
    },
    m = {
        analyticsName: "forum",
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            allowEmptyMessage: !0,
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0,
        },
        showCharacterCount: !0,
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0,
    },
    h = {
        analyticsName: "voice_channel_status",
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        expressionPicker: { onlyEmojis: !0 },
        permissions: { requireSendMessages: !1 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            allowEmptyMessage: !0,
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0,
        },
        markdown: {
            disableCodeBlocks: !0,
            disableBlockQuotes: !0,
        },
        showCharacterCount: !0,
        layout: 1,
    },
    g = {
        analyticsName: "thread_creation",
        attachments: !0,
        autocomplete: { mentionSuggestions: !0 },
        drafts: { type: i.d.FirstThreadMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        stickers: { allowSending: !0 },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        permissions: { requireCreateTherads: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            button: !0,
        },
        disableAutoFocus: !0,
        showCharacterCount: !0,
        hideAttachmentArea: !0,
        upsellLongMessages: { iconOnly: !0 },
    },
    E = l(o({}, d), {
        analyticsName: "create_announcement_post",
        stickers: { allowSending: !1 },
        gifts: {},
        commands: { enabled: !1 },
        submit: { disableEnterToSubmit: !0 },
        disableAutoFocus: !0,
        permissions: { requireSendMessages: !0 },
    }),
    b = {
        analyticsName: "create_forum_post",
        attachments: !0,
        autocomplete: { mentionSuggestions: !0 },
        drafts: { type: i.d.FirstThreadMessage },
        gifs: { allowSending: !0 },
        stickers: { allowSending: !0 },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0,
        },
        disableAutoFocus: !0,
        hideAttachmentArea: !0,
        uploadLongMessages: !0,
        showSlowmodeIndicator: !0,
        layout: 2,
    },
    y = {
        analyticsName: "create_poll",
        attachments: !0,
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0,
        },
    },
    O = {
        analyticsName: "user_profile",
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !1 },
        users: { allowMentioning: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0,
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
            clearOnSubmit: !0,
        },
        toolbarType: 2,
        layout: 1,
    },
    v = {
        analyticsName: "overlay_inline_reply",
        drafts: { type: i.d.ChannelMessage },
        permissions: { requireSendMessages: !0 },
        users: { allowMentioning: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0,
        },
        submit: {
            useDisabledStylesOnSubmit: !1,
            clearOnSubmit: !0,
        },
        toolbarType: 2,
        hideAccessoryBar: !0,
        layout: 1,
    },
    S = {
        analyticsName: "user_profile_reply",
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !1 },
        users: { allowMentioning: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0,
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
            clearOnSubmit: !0,
        },
        toolbarType: 2,
    },
    I = {
        analyticsName: "profile_bio_input",
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0,
        },
        disableAutoFocus: !0,
        showCharacterCount: !0,
    },
    T = {
        analyticsName: "custom_gift_type",
        drafts: { type: i.d.ChannelMessage },
        emojis: {},
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0,
        },
        disableAutoFocus: !0,
        showCharacterCount: !0,
    },
    A = {
        analyticsName: "rules_input",
        drafts: { type: i.d.ChannelMessage },
        permissions: { requireSendMessages: !1 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0,
        },
        showCharacterCount: !1,
        disableAutoFocus: !0,
        hideAccessoryBar: !0,
    },
    C = {
        analyticsName: "forum_channel_guidelines",
        drafts: { type: i.d.ChannelMessage },
        permissions: { requireSendMessages: !1 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0,
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0,
        },
        showCharacterCount: !0,
        toolbarType: 1,
    },
    N = {
        analyticsName: "channel_topic",
        drafts: { type: i.d.ChannelMessage },
        permissions: { requireSendMessages: !1 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0,
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0,
        },
        showCharacterCount: !0,
        toolbarType: 1,
        markdown: {
            disableCodeBlocks: !0,
            disableBlockQuotes: !0,
            disableInlineCode: !0,
        },
    },
    P = {
        analyticsName: "atomic_reator_reply_input",
        drafts: { type: i.d.ChannelMessage },
        permissions: { requireSendMessages: !0 },
        users: { allowMentioning: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0,
        },
        disableAutoFocus: !0,
        showCharacterCount: !0,
        layout: 1,
    },
    R = {
        NORMAL: d,
        OVERLAY: f,
        OVERLAY_INLINE_REPLY: v,
        SIDEBAR: p,
        EDIT: _,
        FORM: m,
        VOICE_CHANNEL_STATUS: h,
        THREAD_CREATION: g,
        USER_PROFILE: O,
        USER_PROFILE_REPLY: S,
        PROFILE_BIO_INPUT: I,
        CUSTOM_GIFT: T,
        RULES_INPUT: A,
        CREATE_FORUM_POST: b,
        CREATE_ANNOUNCEMENT_POST: E,
        CREATE_POLL: y,
        FORUM_CHANNEL_GUIDELINES: C,
        CHANNEL_TOPIC: N,
        ATOMIC_REACTOR_REPLY_INPUT: P,
        FORWARD_MESSAGE_INPUT: {
            analyticsName: "forward_message_input",
            drafts: { type: i.d.ChannelMessage },
            emojis: { button: !0 },
            soundmoji: { allowSending: !0 },
            permissions: { requireSendMessages: !0 },
            submit: { useDisabledStylesOnSubmit: !0 },
            users: { allowMentioning: !0 },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0,
                mentionSuggestions: !0,
            },
            disableAutoFocus: !0,
            showCharacterCount: !0,
            layout: 1,
        },
        SHARE_CUSTOM_CLIENT_THEME_INPUT: {
            analyticsName: "share_custom_client_theme_input",
            drafts: { type: i.d.ChannelMessage },
            emojis: { button: !0 },
            soundmoji: { allowSending: !0 },
            permissions: { requireSendMessages: !0 },
            submit: { useDisabledStylesOnSubmit: !0 },
            users: { allowMentioning: !0 },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0,
            },
            disableAutoFocus: !0,
            showCharacterCount: !0,
            layout: 1,
        },
    };
