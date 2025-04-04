n.d(t, {
    SD: () => p,
    np: () => b,
    uZ: () => y
}),
    n(47120),
    n(266796);
var r = n(866442),
    i = n(911969),
    o = n(622449),
    a = n(768494),
    s = n(768581),
    l = n(823379),
    c = n(280501),
    u = n(790642),
    d = n(388032);
let f = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src:
            t && null != e.id
                ? s.ZP.getEmojiURL({
                      id: e.id,
                      animated: e.animated || !1,
                      size: 48
                  })
                : void 0
    }),
    _ = (e) => ((null == e ? void 0 : e.errorCode) === 429 ? d.NW.string(d.t.fitPBQ) : d.NW.string(d.t.VCsUJi)),
    p = (e, t, n) => {
        let r = (null == e ? void 0 : e.data.interactionType) === i.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === o.F.FAILED ? e.data.componentId : null;
        if (null != (null != r ? E(n, r) : null)) {
            var a;
            return null != (a = null == t ? void 0 : t.interactionError) ? a : _(e);
        }
    },
    h = (e) => {
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
                return !0;
            case i.re.CONTENT_INVENTORY_ENTRY:
                return (0, u.Io)('canShowComponent');
        }
    };
function m(e) {
    let t = {};
    for (let n of e) g(t, n);
    return t;
}
function g(e, t) {
    switch (((e[t.id] = t), t.type)) {
        case i.re.ACTION_ROW:
            t.components.forEach((t) => g(e, t));
            break;
        case i.re.SECTION:
            t.components.forEach((t) => g(e, t)), g(e, t.accessory);
            break;
        case i.re.CONTAINER:
            t.components.forEach((t) => g(e, t));
    }
}
function E(e, t) {
    var n, r, o;
    switch (e.type) {
        case i.re.ACTION_ROW:
            return null != (n = e.components.find((e) => e.id === t)) ? n : null;
        case i.re.SECTION:
            if (e.accessory.id === t) return e.accessory;
            return null != (r = e.components.find((e) => e.id === t)) ? r : null;
        case i.re.CONTAINER:
            return null != (o = e.components.find((e) => e.id === t)) ? o : null;
    }
}
function b(e) {
    let t = Object.values(m(e))
        .filter((e) => e.type === i.re.TEXT_DISPLAY)
        .map((e) => e.content)
        .join('\n');
    return '' !== t ? t : null;
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e.map((e, n) => v(e, t, [n])).filter((e) => null != e);
}
function v(e, t, n) {
    var o, s, u, _, p, m, g, E;
    if (!h(e.type)) return null;
    function b(e, r) {
        let i = v(e, t, [...n, r]);
        return null == i ? null : i;
    }
    let { includeEmojiSrc: y } = t;
    switch (e.type) {
        case i.re.ACTION_ROW: {
            let t = e.components.map((e, t) => b(e, t)).filter(l.lm);
            return {
                type: i.re.ACTION_ROW,
                id: O(n),
                components: t
            };
        }
        case i.re.BUTTON: {
            let t = null != e.emoji ? f(e.emoji, y) : void 0;
            return {
                type: i.re.BUTTON,
                id: O(n),
                customId: e.custom_id,
                style: e.style,
                disabled: e.disabled,
                url: e.url,
                label: e.label,
                emoji: t,
                skuId: e.sku_id
            };
        }
        case i.re.STRING_SELECT:
            return {
                type: i.re.STRING_SELECT,
                id: O(n),
                customId: e.custom_id,
                disabled: e.disabled,
                options: e.options.map((e) => ({
                    type: c.tM.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? f(e.emoji, y) : void 0
                })),
                placeholder: null != (o = e.placeholder) ? o : d.NW.string(d.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values
            };
        case i.re.TEXT_INPUT:
            return {
                type: e.type,
                id: O(n),
                style: e.style,
                customId: e.custom_id,
                label: e.label,
                value: e.value,
                placeholder: e.placeholder,
                disabled: e.disabled,
                required: null != (s = e.required) && s,
                minLength: e.min_length,
                maxLength: e.max_length
            };
        case i.re.USER_SELECT:
            return {
                type: i.re.USER_SELECT,
                id: O(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null != (u = e.placeholder) ? u : d.NW.string(d.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case i.re.ROLE_SELECT:
            return {
                type: i.re.ROLE_SELECT,
                id: O(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null != (_ = e.placeholder) ? _ : d.NW.string(d.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case i.re.MENTIONABLE_SELECT:
            return {
                type: i.re.MENTIONABLE_SELECT,
                id: O(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null != (p = e.placeholder) ? p : d.NW.string(d.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case i.re.CHANNEL_SELECT:
            return {
                type: i.re.CHANNEL_SELECT,
                id: O(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null != (m = e.placeholder) ? m : d.NW.string(d.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                channelTypes: e.channel_types,
                defaultValues: e.default_values
            };
        case i.re.SECTION: {
            let t = e.components.map((e, t) => b(e, t)).filter(l.lm),
                r = b(e.accessory, t.length);
            if (0 === t.length || null == r) return null;
            return {
                type: i.re.SECTION,
                id: O(n),
                components: t,
                accessory: r
            };
        }
        case i.re.TEXT_DISPLAY:
            return {
                type: i.re.TEXT_DISPLAY,
                id: O(n),
                content: e.content
            };
        case i.re.THUMBNAIL:
            return {
                type: i.re.THUMBNAIL,
                id: O(n),
                media: (0, a.ym)(e.media),
                description: e.description,
                spoiler: e.spoiler
            };
        case i.re.MEDIA_GALLERY:
            return {
                type: i.re.MEDIA_GALLERY,
                id: O(n),
                items: e.items.map((e) => ({
                    media: (0, a.ym)(e.media),
                    description: e.description,
                    spoiler: e.spoiler
                }))
            };
        case i.re.FILE:
            return {
                type: i.re.FILE,
                id: O(n),
                file: (0, a.ym)(e.file),
                name: e.name,
                size: e.size,
                spoiler: e.spoiler
            };
        case i.re.SEPARATOR:
            return {
                type: i.re.SEPARATOR,
                id: O(n),
                divider: null == (g = e.divider) || g,
                spacing: null != (E = e.spacing) ? E : i.US.SMALL
            };
        case i.re.CONTENT_INVENTORY_ENTRY:
            if (null == e.content_inventory_entry) return null;
            return {
                type: i.re.CONTENT_INVENTORY_ENTRY,
                id: O(n),
                contentInventoryEntry: e.content_inventory_entry
            };
        case i.re.CONTAINER: {
            let t = e.components.map((e, t) => b(e, t)).filter(l.lm);
            return {
                type: i.re.CONTAINER,
                id: O(n),
                accentColor: null != e.accent_color ? (0, r.ho)(e.accent_color, !0) : void 0,
                spoiler: e.spoiler,
                components: t
            };
        }
        default:
            return null;
    }
}
function O(e) {
    return (0, c.FF)(e.join(','));
}
