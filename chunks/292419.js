n.d(t, {
    SD: () => g,
    VD: () => A,
    Wo: () => E,
    cd: () => I,
    kS: () => y,
    np: () => S,
    uZ: () => N,
    yw: () => C,
}),
    n(388685),
    n(49124),
    n(953529);
var r = n(772848),
    i = n(866442),
    a = n(911969),
    o = n(710845),
    s = n(622449),
    l = n(768494),
    c = n(768581),
    u = n(823379),
    d = n(280501),
    f = n(790642),
    p = n(388032);
let _ = new o.Z("InteractionComponentUtils"),
    m = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src:
            t && null != e.id
                ? c.ZP.getEmojiURL({
                      id: e.id,
                      animated: e.animated || !1,
                      size: 48,
                  })
                : void 0,
    }),
    h = (e) => ((null == e ? void 0 : e.errorCode) === 429 ? p.intl.string(p.t.fitPBS) : p.intl.string(p.t.VCsUJu)),
    g = (e, t, n) => {
        let r =
            (null == e ? void 0 : e.data.interactionType) === a.B8.MESSAGE_COMPONENT &&
            (null == e ? void 0 : e.state) === s.F.FAILED
                ? e.data.componentId
                : null;
        if (null != (null != r ? v(n, r) : null)) {
            var i;
            return null != (i = null == t ? void 0 : t.interactionError) ? i : h(e);
        }
    };
function E(e) {
    var t;
    return null != (t = e.placeholder) ? t : p.intl.string(p.t.Otr6W2);
}
let b = (e) => {
    switch (e) {
        case a.re.ACTION_ROW:
        case a.re.BUTTON:
        case a.re.STRING_SELECT:
        case a.re.TEXT_INPUT:
        case a.re.USER_SELECT:
        case a.re.ROLE_SELECT:
        case a.re.MENTIONABLE_SELECT:
        case a.re.CHANNEL_SELECT:
        case a.re.SECTION:
        case a.re.TEXT_DISPLAY:
        case a.re.THUMBNAIL:
        case a.re.MEDIA_GALLERY:
        case a.re.FILE:
        case a.re.SEPARATOR:
        case a.re.CONTAINER:
        case a.re.LABEL:
        case a.re.FILE_UPLOAD:
        case a.re.CHECKPOINT_CARD:
            return !0;
        case a.re.CONTENT_INVENTORY_ENTRY:
            return (0, f.Io)("canShowComponent");
    }
};
function y(e) {
    let t = new Map();
    for (let n of e) O(t, n);
    return t;
}
function O(e, t) {
    switch ((e.set(t.id, t), t.type)) {
        case a.re.ACTION_ROW:
            t.components.forEach((t) => O(e, t));
            break;
        case a.re.SECTION:
            t.components.forEach((t) => O(e, t)), O(e, t.accessory);
            break;
        case a.re.CONTAINER:
            t.components.forEach((t) => O(e, t));
    }
}
function v(e, t) {
    var n, r, i;
    switch (e.type) {
        case a.re.ACTION_ROW:
            return null != (n = e.components.find((e) => e.id === t)) ? n : null;
        case a.re.SECTION:
            if (e.accessory.id === t) return e.accessory;
            return null != (r = e.components.find((e) => e.id === t)) ? r : null;
        case a.re.CONTAINER:
            return null != (i = e.components.find((e) => e.id === t)) ? i : null;
    }
}
function S(e) {
    let t = Array.from(y(e).values())
        .filter((e) => e.type === a.re.TEXT_DISPLAY)
        .map((e) => e.content)
        .join("\n");
    return "" !== t ? t : null;
}
function I(e, t) {
    function n(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (let i of e) {
            let e = T(i);
            if (e.some((e) => e.id === t.id)) return [i, ...r];
            let a = n(e, [i, ...r]);
            if (null != a) return a;
        }
        return null;
    }
    return n(e);
}
function T(e) {
    switch (e.type) {
        case a.re.ACTION_ROW:
            return e.components;
        case a.re.SECTION:
            return [...e.components, e.accessory];
        case a.re.CONTAINER:
            return e.components;
        case a.re.LABEL:
            return [e.component];
        case a.re.BUTTON:
        case a.re.STRING_SELECT:
        case a.re.TEXT_INPUT:
        case a.re.USER_SELECT:
        case a.re.ROLE_SELECT:
        case a.re.MENTIONABLE_SELECT:
        case a.re.CHANNEL_SELECT:
        case a.re.TEXT_DISPLAY:
        case a.re.THUMBNAIL:
        case a.re.MEDIA_GALLERY:
        case a.re.FILE:
        case a.re.SEPARATOR:
        case a.re.CONTENT_INVENTORY_ENTRY:
        case a.re.FILE_UPLOAD:
        case a.re.CHECKPOINT_CARD:
            return [];
        default:
            return _.warn("getComponentChildren: Unknown component type", e.type), [];
    }
}
function A(e) {
    var t, n, i;
    return JSON.stringify({
        type: "component-upload",
        containerId: e,
        uniqueId: null != (i = null == (t = (n = crypto).randomUUID) ? void 0 : t.call(n)) ? i : (0, r.Z)(),
    });
}
function C(e) {
    try {
        let t = JSON.parse(e);
        if (
            (null == t ? void 0 : t.type) !== "component-upload" ||
            "string" != typeof t.containerId ||
            "string" != typeof t.uniqueId
        )
            return null;
        return t;
    } catch (e) {
        return null;
    }
}
function N(e) {
    return e.map((e, t) => P(e, [t])).filter((e) => null != e);
}
function P(e, t) {
    var n, r, o, s, c, f, p, h, g;
    if (!b(e.type)) return null;
    function E(e, n) {
        let r = P(e, [...t, n]);
        return null == r ? null : r;
    }
    let y = !1;
    switch (e.type) {
        case a.re.ACTION_ROW: {
            let n = e.components.map((e, t) => E(e, t)).filter(u.lm);
            return {
                type: a.re.ACTION_ROW,
                id: R(t),
                components: n,
            };
        }
        case a.re.BUTTON: {
            let n = null != e.emoji ? m(e.emoji, y) : void 0;
            return {
                type: a.re.BUTTON,
                id: R(t),
                customId: e.custom_id,
                style: e.style,
                disabled: e.disabled,
                url: e.url,
                label: e.label,
                emoji: n,
                skuId: e.sku_id,
            };
        }
        case a.re.STRING_SELECT:
            return {
                type: a.re.STRING_SELECT,
                id: R(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (n = e.required) && n,
                options: e.options.map((e) => ({
                    type: d.tM.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? m(e.emoji, y) : void 0,
                })),
                placeholder: e.placeholder,
                minValues: e.min_values,
                maxValues: e.max_values,
            };
        case a.re.TEXT_INPUT:
            return {
                type: e.type,
                id: R(t),
                style: e.style,
                customId: e.custom_id,
                label: e.label,
                value: e.value,
                placeholder: e.placeholder,
                disabled: e.disabled,
                required: null != (r = e.required) && r,
                minLength: e.min_length,
                maxLength: e.max_length,
            };
        case a.re.USER_SELECT:
            return {
                type: a.re.USER_SELECT,
                id: R(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (o = e.required) && o,
                placeholder: e.placeholder,
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case a.re.ROLE_SELECT:
            return {
                type: a.re.ROLE_SELECT,
                id: R(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (s = e.required) && s,
                placeholder: e.placeholder,
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case a.re.MENTIONABLE_SELECT:
            return {
                type: a.re.MENTIONABLE_SELECT,
                id: R(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (c = e.required) && c,
                placeholder: e.placeholder,
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case a.re.CHANNEL_SELECT:
            return {
                type: a.re.CHANNEL_SELECT,
                id: R(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (f = e.required) && f,
                placeholder: e.placeholder,
                minValues: e.min_values,
                maxValues: e.max_values,
                channelTypes: e.channel_types,
                defaultValues: e.default_values,
            };
        case a.re.SECTION: {
            let n = e.components.map((e, t) => E(e, t)).filter(u.lm),
                r = E(e.accessory, n.length);
            if (0 === n.length || null == r) return null;
            return {
                type: a.re.SECTION,
                id: R(t),
                components: n,
                accessory: r,
            };
        }
        case a.re.TEXT_DISPLAY:
            return {
                type: a.re.TEXT_DISPLAY,
                id: R(t),
                content: e.content,
            };
        case a.re.THUMBNAIL:
            return {
                type: a.re.THUMBNAIL,
                id: R(t),
                media: (0, l.ym)(e.media),
                description: e.description,
                spoiler: e.spoiler,
            };
        case a.re.MEDIA_GALLERY:
            return {
                type: a.re.MEDIA_GALLERY,
                id: R(t),
                items: e.items.map((e) => ({
                    media: (0, l.ym)(e.media),
                    description: e.description,
                    spoiler: e.spoiler,
                })),
            };
        case a.re.FILE:
            return {
                type: a.re.FILE,
                id: R(t),
                file: (0, l.ym)(e.file),
                name: e.name,
                size: e.size,
                spoiler: e.spoiler,
            };
        case a.re.SEPARATOR:
            return {
                type: a.re.SEPARATOR,
                id: R(t),
                divider: null == (p = e.divider) || p,
                spacing: null != (h = e.spacing) ? h : a.US.SMALL,
            };
        case a.re.CONTENT_INVENTORY_ENTRY:
            if (null == e.content_inventory_entry) return null;
            return {
                type: a.re.CONTENT_INVENTORY_ENTRY,
                id: R(t),
                contentInventoryEntry: e.content_inventory_entry,
            };
        case a.re.CONTAINER: {
            let n = e.components.map((e, t) => E(e, t)).filter(u.lm);
            return {
                type: a.re.CONTAINER,
                id: R(t),
                accentColor: null != e.accent_color ? (0, i.ho)(e.accent_color, !0) : void 0,
                spoiler: e.spoiler,
                components: n,
            };
        }
        case a.re.LABEL: {
            let n = E(e.component, 0);
            if (null == n) return null;
            return {
                type: a.re.LABEL,
                id: R(t),
                label: e.label,
                description: e.description,
                component: n,
            };
        }
        case a.re.FILE_UPLOAD:
            return {
                type: e.type,
                id: R(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (g = e.required) && g,
                minValues: e.min_values,
                maxValues: e.max_values,
            };
        case a.re.CHECKPOINT_CARD:
            return {
                type: e.type,
                id: R(t),
                checkpointData: {},
            };
        default:
            return _.warn("transformComponent: Unknown component type", e.type), null;
    }
}
function R(e) {
    return (0, d.FF)(e.join(","));
}
