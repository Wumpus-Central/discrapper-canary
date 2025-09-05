n.d(t, {
    SD: () => m,
    cd: () => v,
    kS: () => E,
    np: () => O,
    uZ: () => T,
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
function v(e, t) {
    function n(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (let i of e) {
            let e = I(i);
            if (e.some((e) => e.id === t.id)) return [i, ...r];
            let a = n(e, [i, ...r]);
            if (null != a) return a;
        }
        return null;
    }
    return n(e);
}
function I(e) {
    switch (e.type) {
        case i.re.ACTION_ROW:
            return e.components;
        case i.re.SECTION:
            return [...e.components, e.accessory];
        case i.re.CONTAINER:
            return e.components;
        case i.re.LABEL:
            return [e.component];
        case i.re.BUTTON:
        case i.re.STRING_SELECT:
        case i.re.TEXT_INPUT:
        case i.re.USER_SELECT:
        case i.re.ROLE_SELECT:
        case i.re.MENTIONABLE_SELECT:
        case i.re.CHANNEL_SELECT:
        case i.re.TEXT_DISPLAY:
        case i.re.THUMBNAIL:
        case i.re.MEDIA_GALLERY:
        case i.re.FILE:
        case i.re.SEPARATOR:
        case i.re.CONTENT_INVENTORY_ENTRY:
            return [];
        default:
            return _.warn("getComponentChildren: Unknown component type", e.type), [];
    }
}
function T(e) {
    return e.map((e, t) => S(e, [t])).filter((e) => null != e);
}
function S(e, t) {
    var n, a, o, l, d, h, m, E, b, y, O, v, I;
    if (!g(e.type)) return null;
    function T(e, n) {
        let r = S(e, [...t, n]);
        return null == r ? null : r;
    }
    let C = !1;
    switch (e.type) {
        case i.re.ACTION_ROW: {
            let n = e.components.map((e, t) => T(e, t)).filter(c.lm);
            return {
                type: i.re.ACTION_ROW,
                id: A(t),
                components: n,
            };
        }
        case i.re.BUTTON: {
            let n = null != e.emoji ? p(e.emoji, C) : void 0;
            return {
                type: i.re.BUTTON,
                id: A(t),
                customId: e.custom_id,
                style: e.style,
                disabled: e.disabled,
                url: e.url,
                label: e.label,
                emoji: n,
                skuId: e.sku_id,
            };
        }
        case i.re.STRING_SELECT:
            return {
                type: i.re.STRING_SELECT,
                id: A(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (n = e.required) && n,
                options: e.options.map((e) => ({
                    type: u.tM.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? p(e.emoji, C) : void 0,
                })),
                placeholder: null != (a = e.placeholder) ? a : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
            };
        case i.re.TEXT_INPUT:
            return {
                type: e.type,
                id: A(t),
                style: e.style,
                customId: e.custom_id,
                label: e.label,
                value: e.value,
                placeholder: e.placeholder,
                disabled: e.disabled,
                required: null != (o = e.required) && o,
                minLength: e.min_length,
                maxLength: e.max_length,
            };
        case i.re.USER_SELECT:
            return {
                type: i.re.USER_SELECT,
                id: A(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (l = e.required) && l,
                placeholder: null != (d = e.placeholder) ? d : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case i.re.ROLE_SELECT:
            return {
                type: i.re.ROLE_SELECT,
                id: A(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (h = e.required) && h,
                placeholder: null != (m = e.placeholder) ? m : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case i.re.MENTIONABLE_SELECT:
            return {
                type: i.re.MENTIONABLE_SELECT,
                id: A(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (E = e.required) && E,
                placeholder: null != (b = e.placeholder) ? b : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case i.re.CHANNEL_SELECT:
            return {
                type: i.re.CHANNEL_SELECT,
                id: A(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: null != (y = e.required) && y,
                placeholder: null != (O = e.placeholder) ? O : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                channelTypes: e.channel_types,
                defaultValues: e.default_values,
            };
        case i.re.SECTION: {
            let n = e.components.map((e, t) => T(e, t)).filter(c.lm),
                r = T(e.accessory, n.length);
            if (0 === n.length || null == r) return null;
            return {
                type: i.re.SECTION,
                id: A(t),
                components: n,
                accessory: r,
            };
        }
        case i.re.TEXT_DISPLAY:
            return {
                type: i.re.TEXT_DISPLAY,
                id: A(t),
                content: e.content,
            };
        case i.re.THUMBNAIL:
            return {
                type: i.re.THUMBNAIL,
                id: A(t),
                media: (0, s.ym)(e.media),
                description: e.description,
                spoiler: e.spoiler,
            };
        case i.re.MEDIA_GALLERY:
            return {
                type: i.re.MEDIA_GALLERY,
                id: A(t),
                items: e.items.map((e) => ({
                    media: (0, s.ym)(e.media),
                    description: e.description,
                    spoiler: e.spoiler,
                })),
            };
        case i.re.FILE:
            return {
                type: i.re.FILE,
                id: A(t),
                file: (0, s.ym)(e.file),
                name: e.name,
                size: e.size,
                spoiler: e.spoiler,
            };
        case i.re.SEPARATOR:
            return {
                type: i.re.SEPARATOR,
                id: A(t),
                divider: null == (v = e.divider) || v,
                spacing: null != (I = e.spacing) ? I : i.US.SMALL,
            };
        case i.re.CONTENT_INVENTORY_ENTRY:
            if (null == e.content_inventory_entry) return null;
            return {
                type: i.re.CONTENT_INVENTORY_ENTRY,
                id: A(t),
                contentInventoryEntry: e.content_inventory_entry,
            };
        case i.re.CONTAINER: {
            let n = e.components.map((e, t) => T(e, t)).filter(c.lm);
            return {
                type: i.re.CONTAINER,
                id: A(t),
                accentColor: null != e.accent_color ? (0, r.ho)(e.accent_color, !0) : void 0,
                spoiler: e.spoiler,
                components: n,
            };
        }
        case i.re.LABEL: {
            let n = T(e.component, 0);
            if (null == n) return null;
            return {
                type: i.re.LABEL,
                id: A(t),
                label: e.label,
                description: e.description,
                component: n,
            };
        }
        default:
            return _.warn("transformComponent: Unknown component type", e.type), null;
    }
}
function A(e) {
    return (0, u.FF)(e.join(","));
}
