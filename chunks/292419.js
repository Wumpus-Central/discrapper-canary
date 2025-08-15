n.d(t, {
    SD: () => m,
    kS: () => E,
    np: () => O,
    uZ: () => v,
}),
    n(388685),
    n(953529);
var r = n(866442),
    i = n(911969),
    a = n(710845),
    o = n(622449),
    s = n(768494),
    l = n(768581),
    c = n(823379),
    u = n(280501),
    d = n(790642),
    f = n(388032);
let _ = new a.Z("InteractionComponentUtils"),
    p = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src:
            t && null != e.id
                ? l.ZP.getEmojiURL({
                      id: e.id,
                      animated: e.animated || !1,
                      size: 48,
                  })
                : void 0,
    }),
    h = (e) => ((null == e ? void 0 : e.errorCode) === 429 ? f.intl.string(f.t.fitPBQ) : f.intl.string(f.t.VCsUJi)),
    m = (e, t, n) => {
        let r =
            (null == e ? void 0 : e.data.interactionType) === i.B8.MESSAGE_COMPONENT &&
            (null == e ? void 0 : e.state) === o.F.FAILED
                ? e.data.componentId
                : null;
        if (null != (null != r ? y(n, r) : null)) {
            var a;
            return null != (a = null == t ? void 0 : t.interactionError) ? a : h(e);
        }
    },
    g = (e) => {
        switch (e) {
            case i.re.ACTION_ROW:
            case i.re.BUTTON:
            case i.re.STRING_SELECT:
            case i.re.TEXT_INPUT:
            case i.re.USER_SELECT:
            case i.re.ROLE_SELECT:
            case i.re.MENTIONABLE_SELECT:
            case i.re.CHANNEL_SELECT:
            case i.re.SECTION:
            case i.re.TEXT_DISPLAY:
            case i.re.THUMBNAIL:
            case i.re.MEDIA_GALLERY:
            case i.re.FILE:
            case i.re.SEPARATOR:
            case i.re.CONTAINER:
            case i.re.LABEL:
                return !0;
            case i.re.CONTENT_INVENTORY_ENTRY:
                return (0, d.Io)("canShowComponent");
        }
    };
function E(e) {
    let t = new Map();
    for (let n of e) b(t, n);
    return t;
}
function b(e, t) {
    switch ((e.set(t.id, t), t.type)) {
        case i.re.ACTION_ROW:
            t.components.forEach((t) => b(e, t));
            break;
        case i.re.SECTION:
            t.components.forEach((t) => b(e, t)), b(e, t.accessory);
            break;
        case i.re.CONTAINER:
            t.components.forEach((t) => b(e, t));
    }
}
function y(e, t) {
    var n, r, a;
    switch (e.type) {
        case i.re.ACTION_ROW:
            return null != (n = e.components.find((e) => e.id === t)) ? n : null;
        case i.re.SECTION:
            if (e.accessory.id === t) return e.accessory;
            return null != (r = e.components.find((e) => e.id === t)) ? r : null;
        case i.re.CONTAINER:
            return null != (a = e.components.find((e) => e.id === t)) ? a : null;
    }
}
function O(e) {
    let t = Array.from(E(e).values())
        .filter((e) => e.type === i.re.TEXT_DISPLAY)
        .map((e) => e.content)
        .join("\n");
    return "" !== t ? t : null;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e.map((e, n) => I(e, t, [n])).filter((e) => null != e);
}
function I(e, t, n) {
    var a, o, l, d, h, m, E, b, y;
    if (!g(e.type)) return null;
    function O(e, r) {
        let i = I(e, t, [...n, r]);
        return null == i ? null : i;
    }
    let { includeEmojiSrc: v } = t;
    switch (e.type) {
        case i.re.ACTION_ROW: {
            let t = e.components.map((e, t) => O(e, t)).filter(c.lm);
            return {
                type: i.re.ACTION_ROW,
                id: T(n),
                components: t,
            };
        }
        case i.re.BUTTON: {
            let t = null != e.emoji ? p(e.emoji, v) : void 0;
            return {
                type: i.re.BUTTON,
                id: T(n),
                customId: e.custom_id,
                style: e.style,
                disabled: e.disabled,
                url: e.url,
                label: e.label,
                emoji: t,
                skuId: e.sku_id,
            };
        }
        case i.re.STRING_SELECT:
            return {
                type: i.re.STRING_SELECT,
                id: T(n),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (a = e.required) && a,
                options: e.options.map((e) => ({
                    type: u.tM.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? p(e.emoji, v) : void 0,
                })),
                placeholder: null != (o = e.placeholder) ? o : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
            };
        case i.re.TEXT_INPUT:
            return {
                type: e.type,
                id: T(n),
                style: e.style,
                customId: e.custom_id,
                label: e.label,
                value: e.value,
                placeholder: e.placeholder,
                disabled: e.disabled,
                required: null != (l = e.required) && l,
                minLength: e.min_length,
                maxLength: e.max_length,
            };
        case i.re.USER_SELECT:
            return {
                type: i.re.USER_SELECT,
                id: T(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null != (d = e.placeholder) ? d : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case i.re.ROLE_SELECT:
            return {
                type: i.re.ROLE_SELECT,
                id: T(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null != (h = e.placeholder) ? h : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case i.re.MENTIONABLE_SELECT:
            return {
                type: i.re.MENTIONABLE_SELECT,
                id: T(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null != (m = e.placeholder) ? m : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case i.re.CHANNEL_SELECT:
            return {
                type: i.re.CHANNEL_SELECT,
                id: T(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null != (E = e.placeholder) ? E : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                channelTypes: e.channel_types,
                defaultValues: e.default_values,
            };
        case i.re.SECTION: {
            let t = e.components.map((e, t) => O(e, t)).filter(c.lm),
                r = O(e.accessory, t.length);
            if (0 === t.length || null == r) return null;
            return {
                type: i.re.SECTION,
                id: T(n),
                components: t,
                accessory: r,
            };
        }
        case i.re.TEXT_DISPLAY:
            return {
                type: i.re.TEXT_DISPLAY,
                id: T(n),
                content: e.content,
            };
        case i.re.THUMBNAIL:
            return {
                type: i.re.THUMBNAIL,
                id: T(n),
                media: (0, s.ym)(e.media),
                description: e.description,
                spoiler: e.spoiler,
            };
        case i.re.MEDIA_GALLERY:
            return {
                type: i.re.MEDIA_GALLERY,
                id: T(n),
                items: e.items.map((e) => ({
                    media: (0, s.ym)(e.media),
                    description: e.description,
                    spoiler: e.spoiler,
                })),
            };
        case i.re.FILE:
            return {
                type: i.re.FILE,
                id: T(n),
                file: (0, s.ym)(e.file),
                name: e.name,
                size: e.size,
                spoiler: e.spoiler,
            };
        case i.re.SEPARATOR:
            return {
                type: i.re.SEPARATOR,
                id: T(n),
                divider: null == (b = e.divider) || b,
                spacing: null != (y = e.spacing) ? y : i.US.SMALL,
            };
        case i.re.CONTENT_INVENTORY_ENTRY:
            if (null == e.content_inventory_entry) return null;
            return {
                type: i.re.CONTENT_INVENTORY_ENTRY,
                id: T(n),
                contentInventoryEntry: e.content_inventory_entry,
            };
        case i.re.CONTAINER: {
            let t = e.components.map((e, t) => O(e, t)).filter(c.lm);
            return {
                type: i.re.CONTAINER,
                id: T(n),
                accentColor: null != e.accent_color ? (0, r.ho)(e.accent_color, !0) : void 0,
                spoiler: e.spoiler,
                components: t,
            };
        }
        case i.re.LABEL: {
            let t = O(e.component, 0);
            if (null == t) return null;
            return {
                type: i.re.LABEL,
                id: T(n),
                label: e.label,
                description: e.description,
                component: t,
            };
        }
        default:
            return _.warn("transformComponent: Unknown component type", e.type), null;
    }
}
function T(e) {
    return (0, u.FF)(e.join(","));
}
