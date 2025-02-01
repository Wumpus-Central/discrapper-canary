n.d(t, {
    SD: () => p,
    np: () => v,
    uZ: () => y
}),
    n(47120);
var i = n(866442),
    r = n(911969),
    a = n(622449),
    s = n(768494),
    o = n(768581),
    l = n(823379),
    u = n(280501),
    c = n(790642),
    d = n(388032);
let f = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src:
            t && null != e.id
                ? o.ZP.getEmojiURL({
                      id: e.id,
                      animated: e.animated || !1,
                      size: 48
                  })
                : void 0
    }),
    _ = (e) => ((null == e ? void 0 : e.errorCode) === 429 ? d.intl.string(d.t.fitPBQ) : d.intl.string(d.t.VCsUJi)),
    p = (e, t, n) => {
        let i = (null == e ? void 0 : e.data.interactionType) === r.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === a.F.FAILED ? e.data.componentId : null;
        if (null != (null != i ? E(n, i) : null)) {
            var s;
            return null !== (s = null == t ? void 0 : t.interactionError) && void 0 !== s ? s : _(e);
        }
    },
    h = (e) => {
        switch (e) {
            case r.re.ACTION_ROW:
            case r.re.BUTTON:
            case r.re.STRING_SELECT:
            case r.re.TEXT_INPUT:
            case r.re.USER_SELECT:
            case r.re.ROLE_SELECT:
            case r.re.MENTIONABLE_SELECT:
            case r.re.CHANNEL_SELECT:
            case r.re.SECTION:
            case r.re.TEXT_DISPLAY:
            case r.re.THUMBNAIL:
            case r.re.MEDIA_GALLERY:
            case r.re.FILE:
            case r.re.SEPARATOR:
            case r.re.CONTAINER:
                return !0;
            case r.re.CONTENT_INVENTORY_ENTRY:
                return (0, c.Io)('canShowComponent');
        }
    };
function m(e) {
    let t = {};
    for (let n of e) g(t, n);
    return t;
}
function g(e, t) {
    switch (((e[t.id] = t), t.type)) {
        case r.re.ACTION_ROW:
            t.components.forEach((t) => g(e, t));
            break;
        case r.re.SECTION:
            t.components.forEach((t) => g(e, t)), g(e, t.accessory);
            break;
        case r.re.CONTAINER:
            t.components.forEach((t) => g(e, t));
    }
}
function E(e, t) {
    var n, i, a;
    switch (e.type) {
        case r.re.ACTION_ROW:
            return null !== (n = e.components.find((e) => e.id === t)) && void 0 !== n ? n : null;
        case r.re.SECTION:
            if (e.accessory.id === t) return e.accessory;
            return null !== (i = e.components.find((e) => e.id === t)) && void 0 !== i ? i : null;
        case r.re.CONTAINER:
            return null !== (a = e.components.find((e) => e.id === t)) && void 0 !== a ? a : null;
    }
}
function v(e) {
    let t = Object.values(m(e))
        .filter((e) => e.type === r.re.TEXT_DISPLAY)
        .map((e) => e.content)
        .join('\n');
    return '' !== t ? t : null;
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e.map((e, n) => I(e, t, [n])).filter((e) => null != e);
}
function I(e, t, n) {
    var a, o, c, _, p, m, g, E;
    if (!h(e.type)) return null;
    function v(e, i) {
        let r = I(e, t, [...n, i]);
        return null == r ? null : r;
    }
    let { includeEmojiSrc: y } = t;
    switch (e.type) {
        case r.re.ACTION_ROW: {
            let t = e.components.map((e, t) => v(e, t)).filter(l.lm);
            return {
                type: r.re.ACTION_ROW,
                id: T(n),
                components: t
            };
        }
        case r.re.BUTTON: {
            let t = null != e.emoji ? f(e.emoji, y) : void 0;
            return {
                type: r.re.BUTTON,
                id: T(n),
                customId: e.custom_id,
                style: e.style,
                disabled: e.disabled,
                url: e.url,
                label: e.label,
                emoji: t,
                skuId: e.sku_id
            };
        }
        case r.re.STRING_SELECT:
            return {
                type: r.re.STRING_SELECT,
                id: T(n),
                customId: e.custom_id,
                disabled: e.disabled,
                options: e.options.map((e) => ({
                    type: u.tM.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? f(e.emoji, y) : void 0
                })),
                placeholder: null !== (a = e.placeholder) && void 0 !== a ? a : d.intl.string(d.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values
            };
        case r.re.TEXT_INPUT:
            return {
                type: e.type,
                id: T(n),
                style: e.style,
                customId: e.custom_id,
                label: e.label,
                value: e.value,
                placeholder: e.placeholder,
                disabled: e.disabled,
                required: null !== (o = e.required) && void 0 !== o && o,
                minLength: e.min_length,
                maxLength: e.max_length
            };
        case r.re.USER_SELECT:
            return {
                type: r.re.USER_SELECT,
                id: T(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (c = e.placeholder) && void 0 !== c ? c : d.intl.string(d.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case r.re.ROLE_SELECT:
            return {
                type: r.re.ROLE_SELECT,
                id: T(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (_ = e.placeholder) && void 0 !== _ ? _ : d.intl.string(d.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case r.re.MENTIONABLE_SELECT:
            return {
                type: r.re.MENTIONABLE_SELECT,
                id: T(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (p = e.placeholder) && void 0 !== p ? p : d.intl.string(d.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case r.re.CHANNEL_SELECT:
            return {
                type: r.re.CHANNEL_SELECT,
                id: T(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (m = e.placeholder) && void 0 !== m ? m : d.intl.string(d.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                channelTypes: e.channel_types,
                defaultValues: e.default_values
            };
        case r.re.SECTION: {
            let t = e.components.map((e, t) => v(e, t)).filter(l.lm),
                i = v(e.accessory, t.length);
            if (0 === t.length || null == i) return null;
            return {
                type: r.re.SECTION,
                id: T(n),
                components: t,
                accessory: i
            };
        }
        case r.re.TEXT_DISPLAY:
            return {
                type: r.re.TEXT_DISPLAY,
                id: T(n),
                content: e.content
            };
        case r.re.THUMBNAIL:
            return {
                type: r.re.THUMBNAIL,
                id: T(n),
                media: (0, s.ym)(e.media),
                description: e.description,
                spoiler: e.spoiler
            };
        case r.re.MEDIA_GALLERY:
            return {
                type: r.re.MEDIA_GALLERY,
                id: T(n),
                items: e.items.map((e) => ({
                    media: (0, s.ym)(e.media),
                    description: e.description,
                    spoiler: e.spoiler
                }))
            };
        case r.re.FILE:
            return {
                type: r.re.FILE,
                id: T(n),
                file: (0, s.ym)(e.file),
                name: e.name,
                size: e.size,
                spoiler: e.spoiler
            };
        case r.re.SEPARATOR:
            return {
                type: r.re.SEPARATOR,
                id: T(n),
                divider: null === (g = e.divider) || void 0 === g || g,
                spacing: null !== (E = e.spacing) && void 0 !== E ? E : r.US.SMALL
            };
        case r.re.CONTENT_INVENTORY_ENTRY:
            if (null == e.content_inventory_entry) return null;
            return {
                type: r.re.CONTENT_INVENTORY_ENTRY,
                id: T(n),
                contentInventoryEntry: e.content_inventory_entry
            };
        case r.re.CONTAINER: {
            let t = e.components.map((e, t) => v(e, t)).filter(l.lm);
            return {
                type: r.re.CONTAINER,
                id: T(n),
                accentColor: null != e.accent_color ? (0, i.ho)(e.accent_color, !0) : void 0,
                spoiler: e.spoiler,
                components: t
            };
        }
        default:
            return null;
    }
}
function T(e) {
    return (0, u.FF)(e.join(','));
}
