n.d(t, {
    wT: () => O,
    so: () => R,
    p4: () => S,
    kC: () => N,
    ZV: () => D,
    Lr: () => m,
    j2: () => L,
    fw: () => y,
    We: () => C,
    c7: () => g,
    zv: () => T,
});
var i = n(132500),
    r = n(317097),
    a = n(155718);
(n(574381), n(7584));
var s = n(935208);
n(957806);
var l = n(375708),
    o = n(114070),
    d = n(626584),
    c = n(337591),
    u = n(911929),
    _ = n(731068),
    E = n(486020),
    A = n(403362),
    h = n(489414),
    I = n(532294);
let f = new d.A("InteractionComponentUtils"),
    p = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src: t && null != e.id ? E.Ay.getEmojiURL({ id: e.id, animated: e.animated || !1, size: 48 }) : void 0,
    });
function T(e, t, n) {
    let i = e?.data.interactionType === a.G4.MESSAGE_COMPONENT && e?.state === c.m.FAILED ? e.data.componentId : null;
    if (
        null !=
        (null != i
            ? (function (e, t) {
                  switch (e.type) {
                      case a.I5.ACTION_ROW:
                          return e.components.find((e) => e.id === t) ?? null;
                      case a.I5.SECTION:
                          if (e.accessory.id === t) return e.accessory;
                          return e.components.find((e) => e.id === t) ?? null;
                      case a.I5.CONTAINER:
                          return e.components.find((e) => e.id === t) ?? null;
                  }
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
function m(e, t) {
    let { minValues: n, required: i } = e;
    return "modal" === t ? !i : 0 === n;
}
function S(e) {
    let t = new Map();
    for (let n of e)
        !(function e(t, n) {
            switch ((t.set(n.id, n), n.type)) {
                case a.I5.ACTION_ROW:
                    n.components.forEach((n) => e(t, n));
                    break;
                case a.I5.SECTION:
                    (n.components.forEach((n) => e(t, n)), e(t, n.accessory));
                    break;
                case a.I5.CONTAINER:
                    n.components.forEach((n) => e(t, n));
            }
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
            let n = (function (e) {
                switch (e.type) {
                    case a.I5.ACTION_ROW:
                        return e.components;
                    case a.I5.SECTION:
                        return [...e.components, e.accessory];
                    case a.I5.CONTAINER:
                        return e.components;
                    case a.I5.LABEL:
                        return [e.component];
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
                        return (f.warn("getComponentChildren: Unknown component type", e.type), []);
                }
            })(r);
            if (n.some((e) => e.id === t.id)) return [r, ...i];
            let s = e(n, [r, ...i]);
            if (null != s) return s;
        }
        return null;
    })(e);
}
function R(e) {
    return JSON.stringify({ type: "component-upload", containerId: e, uniqueId: crypto.randomUUID?.() ?? (0, i.A)() });
}
function L(e) {
    try {
        let t = JSON.parse(e);
        if (t?.type !== "component-upload" || "string" != typeof t.containerId || "string" != typeof t.uniqueId)
            return null;
        return t;
    } catch {
        return null;
    }
}
function y(e, t, n, i) {
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
function D(e) {
    return e
        .map((e, t) =>
            (function e(t, n) {
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
                                return !0;
                            case a.I5.UNKNOWN:
                            default:
                                return !1;
                        }
                    })(t.type)
                )
                    return null;
                function i(t, i) {
                    let r = e(t, [...n, i]);
                    return null == r ? null : r;
                }
                switch (t.type) {
                    case a.I5.ACTION_ROW: {
                        let e = t.components.map((e, t) => i(e, t)).filter(A.Vq);
                        return { type: a.I5.ACTION_ROW, id: v(n), components: e };
                    }
                    case a.I5.BUTTON: {
                        let e = null != t.emoji ? p(t.emoji, !1) : void 0;
                        return {
                            type: a.I5.BUTTON,
                            id: v(n),
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
                            id: v(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            options: t.options.map((e) => ({
                                type: h.iw.STRING,
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
                            id: v(n),
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
                            id: v(n),
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
                            id: v(n),
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
                            id: v(n),
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
                            id: v(n),
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
                        let e = t.components.map((e, t) => i(e, t)).filter(A.Vq),
                            r = i(t.accessory, e.length);
                        if (0 === e.length || null == r) return null;
                        return { type: a.I5.SECTION, id: v(n), components: e, accessory: r };
                    }
                    case a.I5.TEXT_DISPLAY:
                        return { type: a.I5.TEXT_DISPLAY, id: v(n), content: t.content };
                    case a.I5.THUMBNAIL:
                        return {
                            type: a.I5.THUMBNAIL,
                            id: v(n),
                            media: (0, _.Uv)(t.media),
                            description: t.description,
                            spoiler: t.spoiler,
                        };
                    case a.I5.MEDIA_GALLERY:
                        return {
                            type: a.I5.MEDIA_GALLERY,
                            id: v(n),
                            items: t.items.map((e) => ({
                                media: (0, _.Uv)(e.media),
                                description: e.description,
                                spoiler: e.spoiler,
                            })),
                        };
                    case a.I5.FILE:
                        return {
                            type: a.I5.FILE,
                            id: v(n),
                            file: (0, _.Uv)(t.file),
                            name: t.name,
                            size: t.size,
                            spoiler: t.spoiler,
                        };
                    case a.I5.SEPARATOR:
                        return {
                            type: a.I5.SEPARATOR,
                            id: v(n),
                            divider: t.divider ?? !0,
                            spacing: t.spacing ?? a.C8.SMALL,
                        };
                    case a.I5.CONTENT_INVENTORY_ENTRY:
                        if (null == t.content_inventory_entry) return null;
                        return {
                            type: a.I5.CONTENT_INVENTORY_ENTRY,
                            id: v(n),
                            contentInventoryEntry: t.content_inventory_entry,
                        };
                    case a.I5.CONTAINER: {
                        let e = t.components.map((e, t) => i(e, t)).filter(A.Vq);
                        return {
                            type: a.I5.CONTAINER,
                            id: v(n),
                            accentColor: null != t.accent_color ? (0, r.$k)(t.accent_color, !0) : void 0,
                            spoiler: t.spoiler,
                            components: e,
                        };
                    }
                    case a.I5.LABEL: {
                        let e = i(t.component, 0);
                        if (null == e) return null;
                        return { type: a.I5.LABEL, id: v(n), label: t.label, description: t.description, component: e };
                    }
                    case a.I5.FILE_UPLOAD:
                        return {
                            type: t.type,
                            id: v(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            fileTypes: t.file_types,
                        };
                    case a.I5.CHECKPOINT_CARD:
                        return (function (e, t) {
                            let n = e.checkpoint_data;
                            switch (n.version) {
                                case I.wk.V2025:
                                    return {
                                        type: e.type,
                                        id: v(t),
                                        checkpointData: {
                                            version: n.version,
                                            cardId: n.card_id,
                                            powerLevel: n.power_level,
                                            powerLevelPercentile: n.power_level_percentile,
                                            numMessagesSent: n.num_messages_sent,
                                            totalVoiceMinutes: n.total_voice_minutes,
                                            numEmojisSent: n.num_emojis_sent,
                                            topGuild:
                                                null != n.top_guild
                                                    ? {
                                                          guildId: n.top_guild.guild_id,
                                                          guildName: n.top_guild.guild_name,
                                                          guildIcon: n.top_guild.guild_icon,
                                                      }
                                                    : void 0,
                                            topEmoji:
                                                null != n.top_emoji
                                                    ? {
                                                          emojiId: s.default.isProbablyAValidSnowflake(
                                                              n.top_emoji.emoji_id,
                                                          )
                                                              ? n.top_emoji.emoji_id
                                                              : void 0,
                                                          emojiName: n.top_emoji?.emoji_name,
                                                      }
                                                    : void 0,
                                            topGame:
                                                null != n.top_game
                                                    ? {
                                                          applicationId: n.top_game.application_id,
                                                          applicationName: n.top_game.application_name,
                                                          applicationImageId: n.top_game.application_image_id,
                                                      }
                                                    : void 0,
                                        },
                                    };
                                case I.wk.V2026:
                                    let i = (0, o.q6)(n);
                                    if (null == i) break;
                                    return { type: e.type, id: v(t), checkpointData: i };
                            }
                            return null;
                        })(t, n);
                    case a.I5.RADIO_GROUP:
                        return {
                            type: t.type,
                            id: v(n),
                            customId: t.custom_id,
                            options: t.options,
                            required: t.required ?? !1,
                        };
                    case a.I5.CHECKBOX_GROUP:
                        return {
                            type: t.type,
                            id: v(n),
                            customId: t.custom_id,
                            options: t.options,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            required: t.required ?? !1,
                        };
                    case a.I5.CHECKBOX:
                        return { type: t.type, id: v(n), customId: t.custom_id, default: t.default };
                    default:
                        return (f.warn("transformComponent: Unknown component type", t.type), null);
                }
            })(e, [t]),
        )
        .filter((e) => null != e);
}
function v(e) {
    return (0, h.X1)(e.join(","));
}
