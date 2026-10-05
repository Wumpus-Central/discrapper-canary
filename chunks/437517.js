n.d(t, {
    wT: () => R,
    so: () => L,
    p4: () => N,
    kC: () => C,
    ZV: () => v,
    Lr: () => S,
    j2: () => y,
    fw: () => D,
    We: () => O,
    c7: () => g,
    zv: () => m,
});
var i = n(132500),
    r = n(127258),
    a = n(317097),
    s = n(155718);
(n(574381), n(7584));
var l = n(935208);
n(957806);
var o = n(375708),
    d = n(918909),
    c = n(626584),
    u = n(337591),
    _ = n(911929),
    E = n(731068),
    A = n(486020),
    h = n(403362),
    I = n(489414),
    f = n(443155);
let p = new c.A("InteractionComponentUtils"),
    T = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src: t && null != e.id ? A.Ay.getEmojiURL({ id: e.id, animated: e.animated || !1, size: 48 }) : void 0,
    });
function m(e, t, n) {
    let i = e?.data.interactionType === r.G.MESSAGE_COMPONENT && e?.state === u.m.FAILED ? e.data.componentId : null;
    if (
        null !=
        (null != i
            ? (function (e, t) {
                  switch (e.type) {
                      case s.I5.ACTION_ROW:
                          return e.components.find((e) => e.id === t) ?? null;
                      case s.I5.SECTION:
                          if (e.accessory.id === t) return e.accessory;
                          return e.components.find((e) => e.id === t) ?? null;
                      case s.I5.CONTAINER:
                          return e.components.find((e) => e.id === t) ?? null;
                  }
              })(n, i)
            : null)
    )
        return (
            t?.interactionError ??
            (function (e) {
                if (e?.errorCode === 429) return o.intl.string(o.t.fitPBS);
                if (e?.reasonCode != null) {
                    let t = (0, _.s)(e.reasonCode, e.data.applicationId);
                    if (null != t) return t;
                }
                return o.intl.string(o.t.VCsUJu);
            })(e)
        );
}
function g(e) {
    return e.placeholder ?? o.intl.string(o.t.Otr6W2);
}
function S(e, t) {
    let { minValues: n, required: i } = e;
    return "modal" === t ? !i : 0 === n;
}
function N(e) {
    let t = new Map();
    for (let n of e)
        !(function e(t, n) {
            switch ((t.set(n.id, n), n.type)) {
                case s.I5.ACTION_ROW:
                    n.components.forEach((n) => e(t, n));
                    break;
                case s.I5.SECTION:
                    (n.components.forEach((n) => e(t, n)), e(t, n.accessory));
                    break;
                case s.I5.CONTAINER:
                    n.components.forEach((n) => e(t, n));
            }
        })(t, n);
    return t;
}
function C(e) {
    let t = Array.from(N(e).values())
        .filter((e) => e.type === s.I5.TEXT_DISPLAY)
        .map((e) => e.content)
        .join("\n");
    return "" !== t ? t : null;
}
function O(e) {
    for (let t of N(e).values())
        if (t.type === s.I5.MEDIA_GALLERY) {
            let e = t.items[0];
            if (null == e) continue;
            let n = (0, E.FE)(e.media);
            if ("INVALID" !== n) return { ...e.media, type: n, alt: e.description };
        } else if (t.type === s.I5.THUMBNAIL) {
            let e = (0, E.FE)(t.media);
            if ("INVALID" !== e) return { ...t.media, type: e, alt: t.description };
        }
    return null;
}
function R(e, t) {
    return (function e(n) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (let r of n) {
            let n = (function (e) {
                switch (e.type) {
                    case s.I5.ACTION_ROW:
                        return e.components;
                    case s.I5.SECTION:
                        return [...e.components, e.accessory];
                    case s.I5.CONTAINER:
                        return e.components;
                    case s.I5.LABEL:
                        return [e.component];
                    case s.I5.BUTTON:
                    case s.I5.STRING_SELECT:
                    case s.I5.TEXT_INPUT:
                    case s.I5.USER_SELECT:
                    case s.I5.ROLE_SELECT:
                    case s.I5.MENTIONABLE_SELECT:
                    case s.I5.CHANNEL_SELECT:
                    case s.I5.TEXT_DISPLAY:
                    case s.I5.THUMBNAIL:
                    case s.I5.MEDIA_GALLERY:
                    case s.I5.FILE:
                    case s.I5.SEPARATOR:
                    case s.I5.CONTENT_INVENTORY_ENTRY:
                    case s.I5.FILE_UPLOAD:
                    case s.I5.CHECKPOINT_CARD:
                    case s.I5.RADIO_GROUP:
                    case s.I5.CHECKBOX_GROUP:
                    case s.I5.CHECKBOX:
                        return [];
                    default:
                        return (p.warn("getComponentChildren: Unknown component type", e.type), []);
                }
            })(r);
            if (n.some((e) => e.id === t.id)) return [r, ...i];
            let a = e(n, [r, ...i]);
            if (null != a) return a;
        }
        return null;
    })(e);
}
function L(e) {
    return JSON.stringify({ type: "component-upload", containerId: e, uniqueId: crypto.randomUUID?.() ?? (0, i.A)() });
}
function y(e) {
    try {
        let t = JSON.parse(e);
        if (t?.type !== "component-upload" || "string" != typeof t.containerId || "string" != typeof t.uniqueId)
            return null;
        return t;
    } catch {
        return null;
    }
}
function D(e, t, n, i) {
    if (null != n)
        if (!(e > 1)) return o.intl.format(o.t.QLrHJG, { maxValues: t, types: n, maxSize: i });
        else if (e === t) return o.intl.format(o.t.Xp4xMV, { minValues: e, types: n, maxSize: i });
        else return o.intl.format(o.t["05AyNA"], { minValues: e, maxValues: t, types: n, maxSize: i });
    return e > 1
        ? e === t
            ? o.intl.format(o.t.SAr31z, { minValues: e, maxSize: i })
            : o.intl.format(o.t["ZG+3Ck"], { minValues: e, maxValues: t, maxSize: i })
        : o.intl.format(o.t.tyxwW1, { maxValues: t, maxSize: i });
}
function v(e) {
    return e
        .map((e, t) =>
            (function e(t, n) {
                if (
                    !(function (e) {
                        switch (e) {
                            case s.I5.ACTION_ROW:
                            case s.I5.BUTTON:
                            case s.I5.STRING_SELECT:
                            case s.I5.TEXT_INPUT:
                            case s.I5.USER_SELECT:
                            case s.I5.ROLE_SELECT:
                            case s.I5.MENTIONABLE_SELECT:
                            case s.I5.CHANNEL_SELECT:
                            case s.I5.SECTION:
                            case s.I5.TEXT_DISPLAY:
                            case s.I5.THUMBNAIL:
                            case s.I5.MEDIA_GALLERY:
                            case s.I5.FILE:
                            case s.I5.SEPARATOR:
                            case s.I5.CONTAINER:
                            case s.I5.LABEL:
                            case s.I5.FILE_UPLOAD:
                            case s.I5.CHECKPOINT_CARD:
                            case s.I5.RADIO_GROUP:
                            case s.I5.CHECKBOX_GROUP:
                            case s.I5.CHECKBOX:
                            case s.I5.CONTENT_INVENTORY_ENTRY:
                                return !0;
                            case s.I5.UNKNOWN:
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
                    case s.I5.ACTION_ROW: {
                        let e = t.components.map((e, t) => i(e, t)).filter(h.Vq);
                        return { type: s.I5.ACTION_ROW, id: b(n), components: e };
                    }
                    case s.I5.BUTTON: {
                        let e = null != t.emoji ? T(t.emoji, !1) : void 0;
                        return {
                            type: s.I5.BUTTON,
                            id: b(n),
                            customId: t.custom_id,
                            style: t.style,
                            disabled: t.disabled,
                            url: t.url,
                            label: t.label,
                            emoji: e,
                            skuId: t.sku_id,
                        };
                    }
                    case s.I5.STRING_SELECT:
                        return {
                            type: s.I5.STRING_SELECT,
                            id: b(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            options: t.options.map((e) => ({
                                type: I.iw.STRING,
                                label: e.label,
                                value: e.value,
                                default: e.default,
                                description: e.description,
                                emoji: null != e.emoji ? T(e.emoji, !1) : void 0,
                            })),
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                        };
                    case s.I5.TEXT_INPUT:
                        return {
                            type: t.type,
                            id: b(n),
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
                    case s.I5.USER_SELECT:
                        return {
                            type: s.I5.USER_SELECT,
                            id: b(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            defaultValues: t.default_values,
                        };
                    case s.I5.ROLE_SELECT:
                        return {
                            type: s.I5.ROLE_SELECT,
                            id: b(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            defaultValues: t.default_values,
                        };
                    case s.I5.MENTIONABLE_SELECT:
                        return {
                            type: s.I5.MENTIONABLE_SELECT,
                            id: b(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            defaultValues: t.default_values,
                        };
                    case s.I5.CHANNEL_SELECT:
                        return {
                            type: s.I5.CHANNEL_SELECT,
                            id: b(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            channelTypes: t.channel_types,
                            defaultValues: t.default_values,
                        };
                    case s.I5.SECTION: {
                        let e = t.components.map((e, t) => i(e, t)).filter(h.Vq),
                            r = i(t.accessory, e.length);
                        if (0 === e.length || null == r) return null;
                        return { type: s.I5.SECTION, id: b(n), components: e, accessory: r };
                    }
                    case s.I5.TEXT_DISPLAY:
                        return { type: s.I5.TEXT_DISPLAY, id: b(n), content: t.content };
                    case s.I5.THUMBNAIL:
                        return {
                            type: s.I5.THUMBNAIL,
                            id: b(n),
                            media: (0, E.Uv)(t.media),
                            description: t.description,
                            spoiler: t.spoiler,
                        };
                    case s.I5.MEDIA_GALLERY:
                        return {
                            type: s.I5.MEDIA_GALLERY,
                            id: b(n),
                            items: t.items.map((e) => ({
                                media: (0, E.Uv)(e.media),
                                description: e.description,
                                spoiler: e.spoiler,
                            })),
                        };
                    case s.I5.FILE:
                        return {
                            type: s.I5.FILE,
                            id: b(n),
                            file: (0, E.Uv)(t.file),
                            name: t.name,
                            size: t.size,
                            spoiler: t.spoiler,
                        };
                    case s.I5.SEPARATOR:
                        return {
                            type: s.I5.SEPARATOR,
                            id: b(n),
                            divider: t.divider ?? !0,
                            spacing: t.spacing ?? s.C8.SMALL,
                        };
                    case s.I5.CONTENT_INVENTORY_ENTRY:
                        if (null == t.content_inventory_entry) return null;
                        return {
                            type: s.I5.CONTENT_INVENTORY_ENTRY,
                            id: b(n),
                            contentInventoryEntry: t.content_inventory_entry,
                        };
                    case s.I5.CONTAINER: {
                        let e = t.components.map((e, t) => i(e, t)).filter(h.Vq);
                        return {
                            type: s.I5.CONTAINER,
                            id: b(n),
                            accentColor: null != t.accent_color ? (0, a.$k)(t.accent_color, !0) : void 0,
                            spoiler: t.spoiler,
                            components: e,
                        };
                    }
                    case s.I5.LABEL: {
                        let e = i(t.component, 0);
                        if (null == e) return null;
                        return { type: s.I5.LABEL, id: b(n), label: t.label, description: t.description, component: e };
                    }
                    case s.I5.FILE_UPLOAD:
                        return {
                            type: t.type,
                            id: b(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            fileTypes: t.file_types,
                        };
                    case s.I5.CHECKPOINT_CARD:
                        return (function (e, t) {
                            let n = e.checkpoint_data;
                            switch (n.version) {
                                case f.wk.V2025:
                                    return {
                                        type: e.type,
                                        id: b(t),
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
                                                          emojiId: l.default.isProbablyAValidSnowflake(
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
                                case f.wk.V2026:
                                    let i = (0, d.q6)(n);
                                    if (null == i) break;
                                    return { type: e.type, id: b(t), checkpointData: i };
                            }
                            return null;
                        })(t, n);
                    case s.I5.RADIO_GROUP:
                        return {
                            type: t.type,
                            id: b(n),
                            customId: t.custom_id,
                            options: t.options,
                            required: t.required ?? !1,
                        };
                    case s.I5.CHECKBOX_GROUP:
                        return {
                            type: t.type,
                            id: b(n),
                            customId: t.custom_id,
                            options: t.options,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            required: t.required ?? !1,
                        };
                    case s.I5.CHECKBOX:
                        return { type: t.type, id: b(n), customId: t.custom_id, default: t.default };
                    default:
                        return (p.warn("transformComponent: Unknown component type", t.type), null);
                }
            })(e, [t]),
        )
        .filter((e) => null != e);
}
function b(e) {
    return (0, I.X1)(e.join(","));
}
