(n.d(t, { Z: () => w, d: () => S }), n(938796));
var i = n(155718),
    o = n(46054),
    r = n(763754),
    a = n(889227),
    l = n(734057),
    s = n(994500),
    c = n(287809),
    u = n(403362),
    d = n(130946),
    p = n(639621),
    _ = n(652215);
function m(e) {
    return (
        "customEmoji" === e.type && (e.type = "emoji"),
        "emoji" === e.type && e.src && (e.src = (0, d.A)(e.src)),
        Array.isArray(e.content) && (e.content = e.content.map(m)),
        e
    );
}
function h(e) {
    if (null != e) return { id: e.id, name: e.name, animated: e.animated };
}
function y(e) {
    return {
        url: e.url,
        proxy_url: e.proxyUrl,
        loading_state: e.loadingState,
        height: e.height,
        width: e.width,
        placeholder: e.placeholder,
        placeholder_version: e.placeholderVersion,
        content_type: e.contentType,
        original_content_type: e.originalContentType,
        flags: e.flags,
    };
}
function f(e) {
    return {
        custom_id: e.customId,
        disabled: e.disabled,
        required: e.required,
        placeholder: e.placeholder,
        min_values: e.minValues,
        max_values: e.maxValues,
    };
}
function I(e) {
    return e
        ?.map(function e(t) {
            switch (t.type) {
                case i.I5.ACTION_ROW:
                    return { type: t.type, components: I(t.components) };
                case i.I5.BUTTON:
                    return {
                        type: t.type,
                        custom_id: t.customId,
                        disabled: t.disabled,
                        style: t.style,
                        label: t.label,
                        url: t.url,
                        emoji: h(t.emoji),
                        sku_id: t.skuId,
                    };
                case i.I5.STRING_SELECT:
                    return {
                        type: t.type,
                        ...f(t),
                        options: t.options.map((e) => ({
                            label: e.label,
                            value: e.value,
                            default: e.default,
                            description: e.description,
                            emoji: h(e.emoji),
                        })),
                    };
                case i.I5.USER_SELECT:
                case i.I5.ROLE_SELECT:
                case i.I5.MENTIONABLE_SELECT:
                    return { type: t.type, ...f(t), default_values: t.defaultValues };
                case i.I5.CHANNEL_SELECT:
                    return { type: t.type, ...f(t), channel_types: t.channelTypes, default_values: t.defaultValues };
                case i.I5.SECTION:
                    return { type: t.type, components: I(t.components), accessory: e(t.accessory) };
                case i.I5.TEXT_DISPLAY:
                    return { type: t.type, content: t.content };
                case i.I5.THUMBNAIL:
                    return { type: t.type, media: y(t.media), description: t.description, spoiler: t.spoiler ?? !1 };
                case i.I5.MEDIA_GALLERY:
                    return {
                        type: t.type,
                        items: t.items.map((e) => ({
                            media: y(e.media),
                            description: e.description,
                            spoiler: e.spoiler ?? !1,
                        })),
                    };
                case i.I5.FILE:
                    return { type: t.type, file: y(t.file), name: t.name, size: t.size, spoiler: t.spoiler ?? !1 };
                case i.I5.SEPARATOR:
                    return { type: t.type, divider: t.divider, spacing: t.spacing };
                case i.I5.CONTENT_INVENTORY_ENTRY:
                    return { type: t.type, content_inventory_entry: t.contentInventoryEntry };
                case i.I5.CONTAINER:
                    return {
                        type: t.type,
                        accent_color: t.accentColor,
                        spoiler: t.spoiler,
                        components: I(t.components),
                    };
                case i.I5.TEXT_INPUT:
                case i.I5.LABEL:
                case i.I5.FILE_UPLOAD:
                case i.I5.RADIO_GROUP:
                case i.I5.CHECKBOX_GROUP:
                case i.I5.CHECKBOX:
                case i.I5.CHECKPOINT_CARD:
                default:
                    return null;
            }
        })
        .filter(u.Vq);
}
function A(e) {
    if (null != e)
        return {
            url: e.url,
            proxy_url: e.proxyURL,
            width: e.width,
            height: e.height,
            placeholder: e.placeholder,
            placeholder_version: e.placeholderVersion,
            description: e.description,
            flags: e.flags,
            content_type: e.contentType,
        };
}
function g(e) {
    let t = (e.type === _.Auw.ARTICLE || e.type === _.Auw.IMAGE) && null == e.images,
        n = t ? e.image : e.thumbnail,
        i = t ? void 0 : e.image;
    return {
        type: e.type,
        url: e.url,
        title: e.rawTitle,
        description: e.rawDescription,
        color: e.color,
        timestamp: e.timestamp?.toISOString(),
        flags: e.flags,
        content_scan_version: e.contentScanVersion,
        fields: (e.fields ?? []).map((e) => {
            let { rawName: t, rawValue: n, inline: i } = e;
            return { name: t, value: n, inline: i };
        }),
        author: (function (e) {
            if (null != e) return { name: e.name, url: e.url, icon_url: e.iconURL, proxy_icon_url: e.iconProxyURL };
        })(e.author),
        provider: e.provider,
        thumbnail: A(n),
        image: A(i),
        video: A(e.video),
        footer: (function (e) {
            if (null != e) return { text: e.text, icon_url: e.iconURL, proxy_icon_url: e.iconProxyURL };
        })(e.footer),
        reference_id: e.referenceId,
        components: I(e.components),
    };
}
function v(e) {
    return e.map((e) => ({ ...e, emoji: { ...e.emoji, id: e.emoji.id ?? null } }));
}
function E(e, t, n) {
    let i = null != t ? o.A.parseToAST(t, !0, { channelId: e }).map(m) : [],
        a = null != e ? l.A.getChannel(e) : void 0,
        s = null != n ? (0, r.FT)(n, a) : void 0;
    return { content_parsed: i.length ? i : void 0, nick: s?.nick, author_color: s?.colorString };
}
function C(e) {
    return {
        ...e,
        user: (0, p.A)(new a.A(e.user)),
        target_user: "target_user" in e && null != e.target_user ? (0, p.A)(new a.A(e.target_user)) : void 0,
        triggering_interaction_metadata:
            "triggering_interaction_metadata" in e ? C(e.triggering_interaction_metadata) : void 0,
    };
}
function w(e) {
    return {
        id: e.id,
        channel_id: e.channel_id,
        guild_id: l.A.getChannel(e.channel_id)?.guild_id,
        author: (0, p.A)(e.author),
        content: e.content,
        timestamp: e.timestamp.toISOString(),
        edited_timestamp: e.editedTimestamp?.toISOString() ?? null,
        tts: e.tts,
        mention_everyone: e.mentionEveryone,
        mentions: e.mentions
            .map((e) => c.default.getUser(e))
            .filter(u.Vq)
            .map((e) => (0, p.A)(e)),
        mention_roles: e.mentionRoles,
        mention_channels: e.mentionChannels,
        attachments: e.attachments,
        embeds: e.embeds.flatMap((e) => {
            let t = (e.images ?? []).filter((t) => t !== e.image);
            return [g(e), ...t.map((t) => g({ id: e.id, type: _.Auw.RICH, url: e.url, image: t }))];
        }),
        components: I(e.components),
        reactions: v(
            e.reactions
                .filter((e) => e.count_details?.vote == null)
                .map((e) => ({ ...e, count: e.count + e.burst_count })),
        ),
        nonce: e.nonce,
        pinned: e.pinned,
        webhook_id: e.webhookId,
        type: e.type,
        activity: e.activity,
        application: e.application,
        application_id: e.applicationId ?? void 0,
        message_reference: e.messageReference,
        flags: e.flags,
        sticker_items: e.stickerItems.length > 0 ? e.stickerItems : void 0,
        poll: (function (e) {
            let { poll: t, reactions: n } = e;
            if (null == t) return;
            let i = n.filter((e) => e.count_details?.vote != null);
            return {
                question: t.question,
                answers: t.answers,
                expiry: t.expiry.toISOString(),
                allow_multiselect: t.allow_multiselect,
                layout_type: t.layout_type,
                results:
                    null != t.results || i.length > 0
                        ? {
                              is_finalized: t.results?.is_finalized ?? !1,
                              answer_counts: i.map((e) => ({
                                  id: Number(e.emoji.id),
                                  count: e.count_details?.vote ?? 0,
                                  me_voted: e.me_vote ?? !1,
                              })),
                          }
                        : void 0,
            };
        })(e),
        interaction_metadata: null != e.interactionMetadata ? C(e.interactionMetadata) : void 0,
        role_subscription_data: e.roleSubscriptionData,
        blocked: e.blocked,
        ...E(e.channel_id, e.content, e.author),
    };
}
function S(e) {
    let t = null != e.author ? new a.A(e.author) : void 0;
    return {
        id: e.id,
        channel_id: e.channel_id,
        guild_id: null != e.channel_id ? l.A.getChannel(e.channel_id)?.guild_id : void 0,
        author: null != t ? (0, p.A)(t) : void 0,
        content: e.content,
        timestamp: e.timestamp,
        edited_timestamp: e.edited_timestamp,
        tts: e.tts,
        mention_everyone: e.mention_everyone,
        mentions: e.mentions?.map((e) => (0, p.A)(new a.A(e))),
        mention_roles: e.mention_roles,
        mention_channels: e.mention_channels,
        attachments: e.attachments,
        embeds: e.embeds,
        components: e.components,
        reactions: null != e.reactions ? v(e.reactions) : void 0,
        nonce: e.nonce,
        pinned: e.pinned,
        webhook_id: e.webhook_id,
        type: e.type,
        activity: e.activity,
        application: e.application,
        application_id: e.application_id,
        message_reference: e.message_reference,
        flags: e.flags,
        sticker_items: e.sticker_items,
        poll: e.poll,
        interaction_metadata: null != e.interaction_metadata ? C(e.interaction_metadata) : void 0,
        role_subscription_data: e.role_subscription_data,
        blocked: null != t ? s.A.isBlockedForMessage(e) : void 0,
        ...E(e.channel_id, e.content, t),
    };
}
