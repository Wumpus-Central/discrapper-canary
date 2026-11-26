n.d(t, {
    Lr: () => T,
    j2: () => D,
    p4: () => S,
    kC: () => N,
    fw: () => b,
    We: () => C,
    zv: () => m,
    wT: () => O,
    c7: () => g,
    U: () => L,
    so: () => y,
    ZV: () => v,
});
var i = n(115560),
    r = n(127258),
    a = n(155718);
(n(574381), n(7584));
var s = n(661191);
n(989238);
var l = n(792996),
    o = n(819648),
    d = n(626584),
    c = n(337591),
    u = n(911929),
    _ = n(731068),
    E = n(486020),
    A = n(403362),
    f = n(489414),
    h = n(532294);
let I = new d.A("InteractionComponentUtils"),
    p = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src: t && null != e.id ? E.Ay.getEmojiURL({ id: e.id, animated: e.animated || !1, size: 48 }) : void 0,
    });
function m(e, t, n) {
    let i = e?.data.interactionType === r.G.MESSAGE_COMPONENT && e?.state === c.m.FAILED ? e.data.componentId : null;
    if (
        null !=
        (null != i
            ? (function e(t, n) {
                  for (let i of R(t)) {
                      if (i.id === n) return i;
                      let t = e(i, n);
                      if (null != t) return t;
                  }
                  return null;
              })(n, i)
            : null)
    )
        return (
            t?.interactionError ??
            (function (e) {
                if (e?.errorCode === 429) return l.intl.string(l.t.fitPBS);
                if (e?.reasonCode != null) {
                    let t = (0, u.s)(e.reasonCode, e.data.applicationId);
                    if (null != t) return t;
                }
                return l.intl.string(l.t.VCsUJu);
            })(e)
        );
}
function g(e) {
    return e.placeholder ?? l.intl.string(l.t.Otr6W2);
}
function T(e, t) {
    let { minValues: n, required: i } = e;
    return "modal" === t ? !i : 0 === n;
}
function S(e) {
    let t = new Map();
    for (let n of e)
        !(function e(t, n) {
            for (let i of (t.set(n.id, n), R(n))) e(t, i);
        })(t, n);
    return t;
}
function N(e) {
    let t = Array.from(S(e).values())
        .filter((e) => e.type === a.I5.TEXT_DISPLAY)
        .map((e) => e.content)
        .join("\n");
    return "" !== t ? t : null;
}
function C(e) {
    for (let t of S(e).values())
        if (t.type === a.I5.MEDIA_GALLERY) {
            let e = t.items[0];
            if (null == e) continue;
            let n = (0, _.FE)(e.media);
            if ("INVALID" !== n) return { ...e.media, type: n, alt: e.description };
        } else if (t.type === a.I5.THUMBNAIL) {
            let e = (0, _.FE)(t.media);
            if ("INVALID" !== e) return { ...t.media, type: e, alt: t.description };
        }
    return null;
}
function O(e, t) {
    return (function e(n) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (let r of n) {
            let n = R(r);
            if (n.some((e) => e.id === t.id)) return [r, ...i];
            let a = e(n, [r, ...i]);
            if (null != a) return a;
        }
        return null;
    })(e);
}
function R(e) {
    switch (e.type) {
        case a.I5.ACTION_ROW:
            return e.components;
        case a.I5.SECTION:
            return [...e.components, e.accessory];
        case a.I5.CONTAINER:
            return e.components;
        case a.I5.LABEL:
            return [e.component];
        case a.I5.OVERFLOW_MENU:
            return e.groups.flatMap((e) => e.components);
        case a.I5.MENU_ACTION_ITEM:
        case a.I5.BUTTON:
        case a.I5.STRING_SELECT:
        case a.I5.TEXT_INPUT:
        case a.I5.USER_SELECT:
        case a.I5.ROLE_SELECT:
        case a.I5.MENTIONABLE_SELECT:
        case a.I5.CHANNEL_SELECT:
        case a.I5.TEXT_DISPLAY:
        case a.I5.THUMBNAIL:
        case a.I5.MEDIA_GALLERY:
        case a.I5.FILE:
        case a.I5.SEPARATOR:
        case a.I5.CONTENT_INVENTORY_ENTRY:
        case a.I5.FILE_UPLOAD:
        case a.I5.CHECKPOINT_CARD:
        case a.I5.RADIO_GROUP:
        case a.I5.CHECKBOX_GROUP:
        case a.I5.CHECKBOX:
            return [];
        default:
            return (I.warn("getComponentChildren: Unknown component type", e.type), []);
    }
}
function L(e) {
    switch (e.type) {
        case a.I5.BUTTON:
        case a.I5.STRING_SELECT:
        case a.I5.TEXT_INPUT:
        case a.I5.USER_SELECT:
        case a.I5.ROLE_SELECT:
        case a.I5.MENTIONABLE_SELECT:
        case a.I5.CHANNEL_SELECT:
        case a.I5.FILE_UPLOAD:
        case a.I5.RADIO_GROUP:
        case a.I5.CHECKBOX_GROUP:
        case a.I5.CHECKBOX:
        case a.I5.MENU_ACTION_ITEM:
            return !0;
        case a.I5.ACTION_ROW:
        case a.I5.SECTION:
        case a.I5.CONTAINER:
        case a.I5.LABEL:
        case a.I5.OVERFLOW_MENU:
        case a.I5.TEXT_DISPLAY:
        case a.I5.THUMBNAIL:
        case a.I5.MEDIA_GALLERY:
        case a.I5.FILE:
        case a.I5.SEPARATOR:
        case a.I5.CONTENT_INVENTORY_ENTRY:
        case a.I5.CHECKPOINT_CARD:
        default:
            return !1;
    }
}
function y(e) {
    return JSON.stringify({ type: "component-upload", containerId: e, uniqueId: crypto.randomUUID?.() ?? (0, i.A)() });
}
function D(e) {
    try {
        let t = JSON.parse(e);
        if (t?.type !== "component-upload" || "string" != typeof t.containerId || "string" != typeof t.uniqueId)
            return null;
        return t;
    } catch {
        return null;
    }
}
function b(e, t, n, i) {
    if (null != n)
        if (!(e > 1)) return l.intl.format(l.t.QLrHJG, { maxValues: t, types: n, maxSize: i });
        else if (e === t) return l.intl.format(l.t.Xp4xMV, { minValues: e, types: n, maxSize: i });
        else return l.intl.format(l.t["05AyNA"], { minValues: e, maxValues: t, types: n, maxSize: i });
    return e > 1
        ? e === t
            ? l.intl.format(l.t.SAr31z, { minValues: e, maxSize: i })
            : l.intl.format(l.t["ZG+3Ck"], { minValues: e, maxValues: t, maxSize: i })
        : l.intl.format(l.t.tyxwW1, { maxValues: t, maxSize: i });
}
function v(e) {
    return e
        .map(function e(t) {
            if (
                !(function (e) {
                    switch (e) {
                        case a.I5.ACTION_ROW:
                        case a.I5.BUTTON:
                        case a.I5.STRING_SELECT:
                        case a.I5.TEXT_INPUT:
                        case a.I5.USER_SELECT:
                        case a.I5.ROLE_SELECT:
                        case a.I5.MENTIONABLE_SELECT:
                        case a.I5.CHANNEL_SELECT:
                        case a.I5.SECTION:
                        case a.I5.TEXT_DISPLAY:
                        case a.I5.THUMBNAIL:
                        case a.I5.MEDIA_GALLERY:
                        case a.I5.FILE:
                        case a.I5.SEPARATOR:
                        case a.I5.CONTAINER:
                        case a.I5.LABEL:
                        case a.I5.FILE_UPLOAD:
                        case a.I5.CHECKPOINT_CARD:
                        case a.I5.RADIO_GROUP:
                        case a.I5.CHECKBOX_GROUP:
                        case a.I5.CHECKBOX:
                        case a.I5.CONTENT_INVENTORY_ENTRY:
                        case a.I5.OVERFLOW_MENU:
                        case a.I5.MENU_ACTION_ITEM:
                            return !0;
                        case a.I5.UNKNOWN:
                        default:
                            return !1;
                    }
                })(t.type)
            )
                return null;
            function n(t) {
                let n = e(t);
                return null == n ? null : n;
            }
            switch (t.type) {
                case a.I5.ACTION_ROW: {
                    let e = t.components.map(n).filter(A.Vq);
                    return { type: a.I5.ACTION_ROW, id: t.id, components: e };
                }
                case a.I5.BUTTON: {
                    let e = null != t.emoji ? p(t.emoji, !1) : void 0;
                    return {
                        type: a.I5.BUTTON,
                        id: t.id,
                        customId: t.custom_id,
                        style: t.style,
                        disabled: t.disabled,
                        url: t.url,
                        label: t.label,
                        emoji: e,
                        skuId: t.sku_id,
                    };
                }
                case a.I5.STRING_SELECT:
                    return {
                        type: a.I5.STRING_SELECT,
                        id: t.id,
                        customId: t.custom_id,
                        disabled: t.disabled,
                        required: t.required ?? !1,
                        options: t.options.map((e) => ({
                            type: f.iw.STRING,
                            label: e.label,
                            value: e.value,
                            default: e.default,
                            description: e.description,
                            emoji: null != e.emoji ? p(e.emoji, !1) : void 0,
                        })),
                        placeholder: t.placeholder,
                        minValues: t.min_values,
                        maxValues: t.max_values,
                    };
                case a.I5.TEXT_INPUT:
                    return {
                        type: t.type,
                        id: t.id,
                        style: t.style,
                        customId: t.custom_id,
                        label: t.label,
                        value: t.value,
                        placeholder: t.placeholder,
                        disabled: t.disabled,
                        required: t.required ?? !1,
                        minLength: t.min_length,
                        maxLength: t.max_length,
                    };
                case a.I5.USER_SELECT:
                    return {
                        type: a.I5.USER_SELECT,
                        id: t.id,
                        customId: t.custom_id,
                        disabled: t.disabled,
                        required: t.required ?? !1,
                        placeholder: t.placeholder,
                        minValues: t.min_values,
                        maxValues: t.max_values,
                        defaultValues: t.default_values,
                    };
                case a.I5.ROLE_SELECT:
                    return {
                        type: a.I5.ROLE_SELECT,
                        id: t.id,
                        customId: t.custom_id,
                        disabled: t.disabled,
                        required: t.required ?? !1,
                        placeholder: t.placeholder,
                        minValues: t.min_values,
                        maxValues: t.max_values,
                        defaultValues: t.default_values,
                    };
                case a.I5.MENTIONABLE_SELECT:
                    return {
                        type: a.I5.MENTIONABLE_SELECT,
                        id: t.id,
                        customId: t.custom_id,
                        disabled: t.disabled,
                        required: t.required ?? !1,
                        placeholder: t.placeholder,
                        minValues: t.min_values,
                        maxValues: t.max_values,
                        defaultValues: t.default_values,
                    };
                case a.I5.CHANNEL_SELECT:
                    return {
                        type: a.I5.CHANNEL_SELECT,
                        id: t.id,
                        customId: t.custom_id,
                        disabled: t.disabled,
                        required: t.required ?? !1,
                        placeholder: t.placeholder,
                        minValues: t.min_values,
                        maxValues: t.max_values,
                        channelTypes: t.channel_types,
                        defaultValues: t.default_values,
                    };
                case a.I5.SECTION: {
                    let e = t.components.map(n).filter(A.Vq),
                        i = n(t.accessory);
                    if (0 === e.length || null == i) return null;
                    return { type: a.I5.SECTION, id: t.id, components: e, accessory: i };
                }
                case a.I5.TEXT_DISPLAY:
                    return { type: a.I5.TEXT_DISPLAY, id: t.id, content: t.content };
                case a.I5.THUMBNAIL:
                    return {
                        type: a.I5.THUMBNAIL,
                        id: t.id,
                        media: (0, _.Uv)(t.media),
                        description: t.description,
                        spoiler: t.spoiler,
                    };
                case a.I5.MEDIA_GALLERY:
                    return {
                        type: a.I5.MEDIA_GALLERY,
                        id: t.id,
                        items: t.items.map((e) => ({
                            media: (0, _.Uv)(e.media),
                            description: e.description,
                            spoiler: e.spoiler,
                        })),
                    };
                case a.I5.FILE:
                    return {
                        type: a.I5.FILE,
                        id: t.id,
                        file: (0, _.Uv)(t.file),
                        name: t.name,
                        size: t.size,
                        spoiler: t.spoiler,
                    };
                case a.I5.SEPARATOR:
                    return {
                        type: a.I5.SEPARATOR,
                        id: t.id,
                        divider: t.divider ?? !0,
                        spacing: t.spacing ?? a.C8.SMALL,
                    };
                case a.I5.CONTENT_INVENTORY_ENTRY:
                    if (null == t.content_inventory_entry) return null;
                    return {
                        type: a.I5.CONTENT_INVENTORY_ENTRY,
                        id: t.id,
                        contentInventoryEntry: t.content_inventory_entry,
                    };
                case a.I5.CONTAINER: {
                    let e = t.components.map(n).filter(A.Vq);
                    return {
                        type: a.I5.CONTAINER,
                        id: t.id,
                        accentColor: t.accent_color,
                        spoiler: t.spoiler,
                        components: e,
                    };
                }
                case a.I5.LABEL: {
                    let e = n(t.component);
                    if (null == e) return null;
                    return { type: a.I5.LABEL, id: t.id, label: t.label, description: t.description, component: e };
                }
                case a.I5.FILE_UPLOAD:
                    return {
                        type: t.type,
                        id: t.id,
                        customId: t.custom_id,
                        disabled: t.disabled,
                        required: t.required ?? !1,
                        minValues: t.min_values,
                        maxValues: t.max_values,
                        fileTypes: t.file_types,
                    };
                case a.I5.CHECKPOINT_CARD:
                    return (function (e) {
                        let t = e.checkpoint_data;
                        switch (t.version) {
                            case h.wk.V2025:
                                return {
                                    type: e.type,
                                    id: e.id,
                                    checkpointData: {
                                        version: t.version,
                                        cardId: t.card_id,
                                        powerLevel: t.power_level,
                                        powerLevelPercentile: t.power_level_percentile,
                                        numMessagesSent: t.num_messages_sent,
                                        totalVoiceMinutes: t.total_voice_minutes,
                                        numEmojisSent: t.num_emojis_sent,
                                        topGuild:
                                            null != t.top_guild
                                                ? {
                                                      guildId: t.top_guild.guild_id,
                                                      guildName: t.top_guild.guild_name,
                                                      guildIcon: t.top_guild.guild_icon,
                                                  }
                                                : void 0,
                                        topEmoji:
                                            null != t.top_emoji
                                                ? {
                                                      emojiId: s.default.isProbablyAValidSnowflake(t.top_emoji.emoji_id)
                                                          ? t.top_emoji.emoji_id
                                                          : void 0,
                                                      emojiName: t.top_emoji?.emoji_name,
                                                  }
                                                : void 0,
                                        topGame:
                                            null != t.top_game
                                                ? {
                                                      applicationId: t.top_game.application_id,
                                                      applicationName: t.top_game.application_name,
                                                      applicationImageId: t.top_game.application_image_id,
                                                  }
                                                : void 0,
                                    },
                                };
                            case h.wk.V2026:
                                let n = (0, o.q6)(t);
                                if (null == n) break;
                                return { type: e.type, id: e.id, checkpointData: n };
                        }
                        return null;
                    })(t);
                case a.I5.RADIO_GROUP:
                    return {
                        type: t.type,
                        id: t.id,
                        customId: t.custom_id,
                        options: t.options,
                        required: t.required ?? !1,
                    };
                case a.I5.CHECKBOX_GROUP:
                    return {
                        type: t.type,
                        id: t.id,
                        customId: t.custom_id,
                        options: t.options,
                        minValues: t.min_values,
                        maxValues: t.max_values,
                        required: t.required ?? !1,
                    };
                case a.I5.CHECKBOX:
                    return { type: t.type, id: t.id, customId: t.custom_id, default: t.default };
                case a.I5.OVERFLOW_MENU: {
                    let e = t.groups
                        .map((e) => ({ label: e.label, components: e.components.map(n).filter(A.Vq) }))
                        .filter((e) => e.components.length > 0);
                    if (0 === e.length) return null;
                    return { type: a.I5.OVERFLOW_MENU, id: t.id, groups: e };
                }
                case a.I5.MENU_ACTION_ITEM:
                    return {
                        type: a.I5.MENU_ACTION_ITEM,
                        id: t.id,
                        customId: t.custom_id,
                        disabled: t.disabled,
                        label: t.label,
                        style: t.style,
                        description: t.description,
                        url: t.url,
                        emoji: null != t.emoji ? p(t.emoji, !1) : void 0,
                    };
                default:
                    return (I.warn("transformComponent: Unknown component type", t.type), null);
            }
        })
        .filter((e) => null != e);
}
