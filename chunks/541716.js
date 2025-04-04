n.d(t, {
    Ie: () => I,
    OW: () => o,
    gy: () => a
});
var r = n(873546),
    i = n(703558),
    o = (function (e) {
        return (e[(e.TOOLTIP = 0)] = 'TOOLTIP'), (e[(e.STATIC = 1)] = 'STATIC'), (e[(e.NONE = 2)] = 'NONE'), e;
    })({}),
    a = (function (e) {
        return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.INLINE = 1)] = 'INLINE'), (e[(e.FLUSH = 2)] = 'FLUSH'), e;
    })({});
let s = {
        analyticsName: 'normal',
        attachments: !0,
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0,
            reactions: !0
        },
        commands: { enabled: !0 },
        confetti: { button: !0 },
        drafts: {
            type: i.d.ChannelMessage,
            commandType: i.d.SlashCommand,
            autoSave: !0
        },
        emojis: { button: !0 },
        gifs: {
            button: !0,
            allowSending: !0
        },
        gifts: { button: !0 },
        permissions: { requireSendMessages: !0 },
        showThreadPromptOnReply: !0,
        stickers: {
            button: !0,
            allowSending: !0,
            autoSuggest: !0
        },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: r.tq,
            disableEnterToSubmit: r.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        uploadLongMessages: !0,
        upsellLongMessages: { iconOnly: !1 },
        showCharacterCount: !0,
        sedReplace: !0,
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0
    },
    l = {
        analyticsName: 'overlay',
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0
        },
        confetti: { button: !0 },
        drafts: {
            type: i.d.ChannelMessage,
            autoSave: !0
        },
        emojis: { button: !0 },
        gifs: {
            button: !0,
            allowSending: !0
        },
        gifts: { button: !0 },
        permissions: { requireSendMessages: !0 },
        showThreadPromptOnReply: !0,
        stickers: {
            button: !0,
            allowSending: !0
        },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: r.tq,
            disableEnterToSubmit: r.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        upsellLongMessages: { iconOnly: !1 },
        showCharacterCount: !0,
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0
    },
    c = {
        analyticsName: 'sidebar',
        attachments: !0,
        autocomplete: { addReactionShortcut: !0 },
        commands: { enabled: !0 },
        confetti: { button: !0 },
        disableAutoFocus: !0,
        drafts: {
            type: i.d.ChannelMessage,
            commandType: i.d.SlashCommand
        },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        stickers: {
            allowSending: !0,
            autoSuggest: !0
        },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        submit: {
            button: !0,
            ignorePreference: r.tq,
            disableEnterToSubmit: r.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        uploadLongMessages: !0,
        showCharacterCount: !0,
        upsellLongMessages: { iconOnly: !0 },
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0
    },
    u = {
        analyticsName: 'edit',
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        expressionPicker: { onlyEmojis: !0 },
        permissions: { requireSendMessages: !0 },
        submit: { useDisabledStylesOnSubmit: !0 },
        showCharacterCount: !0
    },
    d = {
        analyticsName: 'forum',
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            allowEmptyMessage: !0
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !0,
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0
    },
    f = {
        analyticsName: 'voice_channel_status',
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        expressionPicker: { onlyEmojis: !0 },
        permissions: { requireSendMessages: !1 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            allowEmptyMessage: !0
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        markdown: {
            disableCodeBlocks: !0,
            disableBlockQuotes: !0
        },
        showCharacterCount: !0,
        layout: 1
    },
    _ = {
        analyticsName: 'thread_creation',
        attachments: !0,
        drafts: { type: i.d.FirstThreadMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        stickers: { allowSending: !0 },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        permissions: { requireCreateTherads: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            button: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0,
        hideAttachmentArea: !0,
        upsellLongMessages: { iconOnly: !0 }
    },
    p = {
        analyticsName: 'create_forum_post',
        attachments: !0,
        drafts: { type: i.d.FirstThreadMessage },
        gifs: { allowSending: !0 },
        stickers: { allowSending: !0 },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        hideAttachmentArea: !0,
        uploadLongMessages: !0,
        showSlowmodeIndicator: !0,
        layout: 2
    },
    h = {
        analyticsName: 'create_poll',
        attachments: !0,
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        }
    },
    m = {
        analyticsName: 'user_profile',
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !1 },
        users: { allowMentioning: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
            clearOnSubmit: !0
        },
        toolbarType: 2,
        layout: 1
    },
    g = {
        analyticsName: 'overlay_inline_reply',
        drafts: { type: i.d.ChannelMessage },
        permissions: { requireSendMessages: !0 },
        users: { allowMentioning: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        submit: {
            useDisabledStylesOnSubmit: !1,
            clearOnSubmit: !0
        },
        toolbarType: 2,
        hideAccessoryBar: !0,
        layout: 1
    },
    E = {
        analyticsName: 'user_profile_reply',
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !1 },
        users: { allowMentioning: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
            clearOnSubmit: !0
        },
        toolbarType: 2
    },
    b = {
        analyticsName: 'profile_bio_input',
        drafts: { type: i.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    },
    y = {
        analyticsName: 'custom_gift_type',
        drafts: { type: i.d.ChannelMessage },
        emojis: {},
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    },
    v = {
        analyticsName: 'rules_input',
        drafts: { type: i.d.ChannelMessage },
        permissions: { requireSendMessages: !1 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !1,
        disableAutoFocus: !0,
        hideAccessoryBar: !0
    },
    O = {
        analyticsName: 'forum_channel_guidelines',
        drafts: { type: i.d.ChannelMessage },
        permissions: { requireSendMessages: !1 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !0,
        toolbarType: 1
    },
    I = {
        NORMAL: s,
        OVERLAY: l,
        OVERLAY_INLINE_REPLY: g,
        SIDEBAR: c,
        EDIT: u,
        FORM: d,
        VOICE_CHANNEL_STATUS: f,
        THREAD_CREATION: _,
        USER_PROFILE: m,
        USER_PROFILE_REPLY: E,
        PROFILE_BIO_INPUT: b,
        CUSTOM_GIFT: y,
        RULES_INPUT: v,
        CREATE_FORUM_POST: p,
        CREATE_POLL: h,
        FORUM_CHANNEL_GUIDELINES: O,
        ATOMIC_REACTOR_REPLY_INPUT: {
            analyticsName: 'atomic_reator_reply_input',
            drafts: { type: i.d.ChannelMessage },
            permissions: { requireSendMessages: !0 },
            users: { allowMentioning: !0 },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0
            },
            disableAutoFocus: !0,
            showCharacterCount: !0,
            layout: 1
        },
        FORWARD_MESSAGE_INPUT: {
            analyticsName: 'forward_message_input',
            drafts: { type: i.d.ChannelMessage },
            emojis: { button: !0 },
            soundmoji: { allowSending: !0 },
            permissions: { requireSendMessages: !0 },
            submit: { useDisabledStylesOnSubmit: !0 },
            users: { allowMentioning: !0 },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0
            },
            disableAutoFocus: !0,
            showCharacterCount: !0,
            layout: 1
        }
    };
