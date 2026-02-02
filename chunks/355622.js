n.d(t, {
    O1: () => c,
    oU: () => v,
    wt: () => u,
});
var r = n(607399),
    i = n(31717);

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
        commands: {
            enabled: !0,
        },
        confetti: {
            button: !0,
        },
        drafts: {
            type: i.C.ChannelMessage,
            commandType: i.C.SlashCommand,
            autoSave: !0,
        },
        emojis: {
            button: !0,
        },
        gifs: {
            button: !0,
            allowSending: !0,
        },
        gifts: {
            button: !0,
        },
        permissions: {
            requireSendMessages: !0,
        },
        showThreadPromptOnReply: !0,
        stickers: {
            button: !0,
            allowSending: !0,
            autoSuggest: !0,
        },
        soundmoji: {
            allowSending: !0,
        },
        users: {
            allowMentioning: !0,
        },
        submit: {
            button: !0,
            ignorePreference: r.Fr,
            disableEnterToSubmit: r.Fr,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0,
        },
        uploadLongMessages: !0,
        upsellLongMessages: {
            iconOnly: !1,
        },
        showCharacterCount: !0,
        sedReplace: !0,
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0,
    },
    f = {
        analyticsName: "overlay",
        attachments: !0,
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0,
            mentionSuggestions: !0,
        },
        confetti: {
            button: !0,
        },
        drafts: {
            type: i.C.ChannelMessage,
            autoSave: !0,
        },
        emojis: {
            button: !0,
        },
        gifs: {
            button: !0,
            allowSending: !0,
        },
        gifts: {
            button: !0,
        },
        permissions: {
            requireSendMessages: !0,
        },
        showThreadPromptOnReply: !0,
        stickers: {
            button: !0,
            allowSending: !0,
        },
        users: {
            allowMentioning: !0,
        },
        submit: {
            button: !0,
            ignorePreference: r.Fr,
            disableEnterToSubmit: r.Fr,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0,
        },
        upsellLongMessages: {
            iconOnly: !1,
        },
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
        commands: {
            enabled: !0,
        },
        confetti: {
            button: !0,
        },
        disableAutoFocus: !0,
        drafts: {
            type: i.C.ChannelMessage,
            commandType: i.C.SlashCommand,
        },
        emojis: {
            button: !0,
        },
        gifs: {
            allowSending: !0,
        },
        permissions: {
            requireSendMessages: !0,
        },
        stickers: {
            allowSending: !0,
            autoSuggest: !0,
        },
        soundmoji: {
            allowSending: !0,
        },
        users: {
            allowMentioning: !0,
        },
        submit: {
            button: !0,
            ignorePreference: r.Fr,
            disableEnterToSubmit: r.Fr,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0,
        },
        uploadLongMessages: !0,
        showCharacterCount: !0,
        upsellLongMessages: {
            iconOnly: !0,
        },
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0,
    },
    _ = {
        analyticsName: "edit",
        autocomplete: {
            mentionSuggestions: !0,
        },
        drafts: {
            type: i.C.ChannelMessage,
        },
        emojis: {
            button: !0,
        },
        soundmoji: {
            allowSending: !0,
        },
        users: {
            allowMentioning: !0,
        },
        expressionPicker: {
            onlyEmojis: !0,
        },
        permissions: {
            requireSendMessages: !0,
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
        },
        showCharacterCount: !0,
    },
    h = {
        analyticsName: "forum",
        drafts: {
            type: i.C.ChannelMessage,
        },
        emojis: {
            button: !0,
        },
        gifs: {
            allowSending: !0,
        },
        permissions: {
            requireSendMessages: !0,
        },
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
    m = {
        analyticsName: "voice_channel_status",
        drafts: {
            type: i.C.ChannelMessage,
        },
        emojis: {
            button: !0,
        },
        expressionPicker: {
            onlyEmojis: !0,
        },
        permissions: {
            requireSendMessages: !1,
        },
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
        autocomplete: {
            mentionSuggestions: !0,
        },
        drafts: {
            type: i.C.FirstThreadMessage,
        },
        emojis: {
            button: !0,
        },
        gifs: {
            allowSending: !0,
        },
        stickers: {
            allowSending: !0,
        },
        soundmoji: {
            allowSending: !0,
        },
        users: {
            allowMentioning: !0,
        },
        permissions: {
            requireCreateTherads: !0,
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
            button: !0,
        },
        disableAutoFocus: !0,
        showCharacterCount: !0,
        hideAttachmentArea: !0,
        upsellLongMessages: {
            iconOnly: !0,
        },
    },
    E = l(o({}, d), {
        analyticsName: "create_announcement_post",
        stickers: {
            allowSending: !1,
        },
        gifts: {},
        commands: {
            enabled: !1,
        },
        submit: {
            disableEnterToSubmit: !0,
        },
        disableAutoFocus: !0,
        permissions: {
            requireSendMessages: !0,
        },
    }),
    y = {
        analyticsName: "create_forum_post",
        attachments: !0,
        autocomplete: {
            mentionSuggestions: !0,
        },
        drafts: {
            type: i.C.FirstThreadMessage,
        },
        gifs: {
            allowSending: !0,
        },
        stickers: {
            allowSending: !0,
        },
        soundmoji: {
            allowSending: !0,
        },
        users: {
            allowMentioning: !0,
        },
        permissions: {
            requireSendMessages: !0,
        },
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
    b = {
        analyticsName: "create_poll",
        attachments: !0,
        drafts: {
            type: i.C.ChannelMessage,
        },
        emojis: {
            button: !0,
        },
        gifs: {
            allowSending: !0,
        },
        permissions: {
            requireSendMessages: !0,
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0,
        },
    },
    O = {
        analyticsName: "user_profile",
        drafts: {
            type: i.C.ChannelMessage,
        },
        emojis: {
            button: !0,
        },
        permissions: {
            requireSendMessages: !1,
        },
        users: {
            allowMentioning: !0,
        },
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
        NORMAL: d,
        OVERLAY: f,
        OVERLAY_INLINE_REPLY: {
            analyticsName: "overlay_inline_reply",
            drafts: {
                type: i.C.ChannelMessage,
            },
            permissions: {
                requireSendMessages: !0,
            },
            users: {
                allowMentioning: !0,
            },
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
        SIDEBAR: p,
        EDIT: _,
        FORM: h,
        VOICE_CHANNEL_STATUS: m,
        THREAD_CREATION: g,
        USER_PROFILE: O,
        USER_PROFILE_REPLY: {
            analyticsName: "user_profile_reply",
            drafts: {
                type: i.C.ChannelMessage,
            },
            emojis: {
                button: !0,
            },
            permissions: {
                requireSendMessages: !1,
            },
            users: {
                allowMentioning: !0,
            },
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
        PROFILE_BIO_INPUT: {
            analyticsName: "profile_bio_input",
            drafts: {
                type: i.C.ChannelMessage,
            },
            emojis: {
                button: !0,
            },
            permissions: {
                requireSendMessages: !0,
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0,
            },
            disableAutoFocus: !0,
            showCharacterCount: !0,
        },
        CUSTOM_GIFT: {
            analyticsName: "custom_gift_type",
            drafts: {
                type: i.C.ChannelMessage,
            },
            emojis: {},
            permissions: {
                requireSendMessages: !0,
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0,
            },
            disableAutoFocus: !0,
            showCharacterCount: !0,
        },
        RULES_INPUT: {
            analyticsName: "rules_input",
            drafts: {
                type: i.C.ChannelMessage,
            },
            permissions: {
                requireSendMessages: !1,
            },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0,
            },
            showCharacterCount: !1,
            disableAutoFocus: !0,
            hideAccessoryBar: !0,
        },
        CREATE_FORUM_POST: y,
        CREATE_ANNOUNCEMENT_POST: E,
        CREATE_POLL: b,
        FORUM_CHANNEL_GUIDELINES: {
            analyticsName: "forum_channel_guidelines",
            drafts: {
                type: i.C.ChannelMessage,
            },
            permissions: {
                requireSendMessages: !1,
            },
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
        CHANNEL_TOPIC: {
            analyticsName: "channel_topic",
            drafts: {
                type: i.C.ChannelMessage,
            },
            permissions: {
                requireSendMessages: !1,
            },
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
        ATOMIC_REACTOR_REPLY_INPUT: {
            analyticsName: "atomic_reator_reply_input",
            drafts: {
                type: i.C.ChannelMessage,
            },
            permissions: {
                requireSendMessages: !0,
            },
            users: {
                allowMentioning: !0,
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0,
            },
            disableAutoFocus: !0,
            showCharacterCount: !0,
            layout: 1,
        },
        FORWARD_MESSAGE_INPUT: {
            analyticsName: "forward_message_input",
            drafts: {
                type: i.C.ChannelMessage,
            },
            emojis: {
                button: !0,
            },
            soundmoji: {
                allowSending: !0,
            },
            permissions: {
                requireSendMessages: !0,
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
            },
            users: {
                allowMentioning: !0,
            },
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
            drafts: {
                type: i.C.ChannelMessage,
            },
            emojis: {
                button: !0,
            },
            soundmoji: {
                allowSending: !0,
            },
            permissions: {
                requireSendMessages: !0,
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
            },
            users: {
                allowMentioning: !0,
            },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0,
            },
            disableAutoFocus: !0,
            showCharacterCount: !0,
            layout: 1,
        },
        HAVEN: {
            analyticsName: "haven",
            attachments: !1,
            autocomplete: {
                addReactionShortcut: !0,
                forceChatLayer: !0,
                reactions: !0,
            },
            commands: {
                enabled: !1,
            },
            confetti: {
                button: !1,
            },
            drafts: {
                type: i.C.ChannelMessage,
                commandType: i.C.SlashCommand,
                autoSave: !1,
            },
            emojis: {
                button: !0,
            },
            gifs: void 0,
            gifts: void 0,
            permissions: {
                requireSendMessages: !0,
            },
            showThreadPromptOnReply: !1,
            stickers: void 0,
            soundmoji: {
                allowSending: !1,
            },
            users: {
                allowMentioning: !0,
            },
            submit: {
                button: !0,
                ignorePreference: r.Fr,
                disableEnterToSubmit: r.Fr,
                clearOnSubmit: !0,
                useDisabledStylesOnSubmit: !0,
            },
            uploadLongMessages: !0,
            upsellLongMessages: {
                iconOnly: !1,
            },
            showCharacterCount: !0,
            sedReplace: !1,
            showSlowmodeIndicator: !0,
            showTypingIndicator: !1,
        },
    };
