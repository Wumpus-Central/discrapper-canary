r.d(n, {
    Ie: function () {
        return A;
    },
    OW: function () {
        return i;
    },
    gy: function () {
        return a;
    }
});
var i,
    a,
    s = r(873546),
    o = r(703558);
!(function (e) {
    (e[(e.TOOLTIP = 0)] = 'TOOLTIP'), (e[(e.STATIC = 1)] = 'STATIC'), (e[(e.NONE = 2)] = 'NONE');
})(i || (i = {})),
    !(function (e) {
        (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.INLINE = 1)] = 'INLINE'), (e[(e.FLUSH = 2)] = 'FLUSH');
    })(a || (a = {}));
let l = {
        analyticsName: 'normal',
        attachments: !0,
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0,
            reactions: !0
        },
        commands: { enabled: !0 },
        drafts: {
            type: o.d.ChannelMessage,
            commandType: o.d.SlashCommand,
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
            ignorePreference: s.tq,
            disableEnterToSubmit: s.tq,
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
    u = {
        analyticsName: 'overlay',
        autocomplete: {
            addReactionShortcut: !0,
            forceChatLayer: !0
        },
        drafts: {
            type: o.d.ChannelMessage,
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
            ignorePreference: s.tq,
            disableEnterToSubmit: s.tq,
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
        disableAutoFocus: !0,
        drafts: {
            type: o.d.ChannelMessage,
            commandType: o.d.SlashCommand
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
            ignorePreference: s.tq,
            disableEnterToSubmit: s.tq,
            clearOnSubmit: !0,
            useDisabledStylesOnSubmit: !0
        },
        uploadLongMessages: !0,
        showCharacterCount: !0,
        upsellLongMessages: { iconOnly: !0 },
        showSlowmodeIndicator: !0,
        showTypingIndicator: !0
    },
    d = {
        analyticsName: 'edit',
        drafts: { type: o.d.ChannelMessage },
        emojis: { button: !0 },
        soundmoji: { allowSending: !0 },
        users: { allowMentioning: !0 },
        expressionPicker: { onlyEmojis: !0 },
        permissions: { requireSendMessages: !0 },
        submit: { useDisabledStylesOnSubmit: !0 },
        showCharacterCount: !0
    },
    f = {
        analyticsName: 'forum',
        drafts: { type: o.d.ChannelMessage },
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
    _ = {
        analyticsName: 'voice_channel_status',
        drafts: { type: o.d.ChannelMessage },
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
    h = {
        analyticsName: 'thread_creation',
        attachments: !0,
        drafts: { type: o.d.FirstThreadMessage },
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
        drafts: { type: o.d.FirstThreadMessage },
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
    m = {
        analyticsName: 'create_poll',
        attachments: !0,
        drafts: { type: o.d.ChannelMessage },
        emojis: { button: !0 },
        gifs: { allowSending: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        }
    },
    g = {
        analyticsName: 'user_profile',
        drafts: { type: o.d.ChannelMessage },
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
    E = {
        analyticsName: 'overlay_inline_reply',
        drafts: { type: o.d.ChannelMessage },
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
        toolbarType: 2
    },
    v = {
        analyticsName: 'user_profile_reply',
        drafts: { type: o.d.ChannelMessage },
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
    I = {
        analyticsName: 'profile_bio_input',
        drafts: { type: o.d.ChannelMessage },
        emojis: { button: !0 },
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    },
    T = {
        analyticsName: 'custom_gift_type',
        drafts: { type: o.d.ChannelMessage },
        emojis: {},
        permissions: { requireSendMessages: !0 },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        },
        disableAutoFocus: !0,
        showCharacterCount: !0
    },
    b = {
        analyticsName: 'rules_input',
        drafts: { type: o.d.ChannelMessage },
        permissions: { requireSendMessages: !0 },
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        showCharacterCount: !1,
        disableAutoFocus: !0
    },
    y = {
        analyticsName: 'forum_channel_guidelines',
        drafts: { type: o.d.ChannelMessage },
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
    S = {
        analyticsName: 'atomic_reator_reply_input',
        drafts: { type: o.d.ChannelMessage },
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
    A = {
        NORMAL: l,
        OVERLAY: u,
        OVERLAY_INLINE_REPLY: E,
        SIDEBAR: c,
        EDIT: d,
        FORM: f,
        VOICE_CHANNEL_STATUS: _,
        THREAD_CREATION: h,
        USER_PROFILE: g,
        USER_PROFILE_REPLY: v,
        PROFILE_BIO_INPUT: I,
        CUSTOM_GIFT: T,
        RULES_INPUT: b,
        CREATE_FORUM_POST: p,
        CREATE_POLL: m,
        FORUM_CHANNEL_GUIDELINES: y,
        ATOMIC_REACTOR_REPLY_INPUT: S,
        FORWARD_MESSAGE_INPUT: {
            analyticsName: 'forward_message_input',
            drafts: { type: o.d.ChannelMessage },
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
