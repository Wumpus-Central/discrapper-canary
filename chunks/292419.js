r.d(n, {
    SD: function () {
        return m;
    },
    np: function () {
        return b;
    },
    uZ: function () {
        return I;
    }
});
var i = r(47120);
var a = r(866442),
    o = r(911969),
    s = r(622449),
    l = r(768494),
    u = r(768581),
    c = r(823379),
    d = r(280501),
    f = r(790642),
    p = r(388032);
let h = (e, n) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src:
            n && null != e.id
                ? u.ZP.getEmojiURL({
                      id: e.id,
                      animated: e.animated || !1,
                      size: 48
                  })
                : void 0
    }),
    _ = (e) => ((null == e ? void 0 : e.errorCode) === 429 ? p.intl.string(p.t.fitPBQ) : p.intl.string(p.t.VCsUJi)),
    m = (e, n, r) => {
        let i = (null == e ? void 0 : e.data.interactionType) === o.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === s.F.FAILED ? e.data.componentId : null;
        if (null != (null != i ? y(r, i) : null)) {
            var a;
            return null !== (a = null == n ? void 0 : n.interactionError) && void 0 !== a ? a : _(e);
        }
    },
    g = (e) => {
        switch (e) {
            case o.re.ACTION_ROW:
            case o.re.BUTTON:
            case o.re.STRING_SELECT:
            case o.re.TEXT_INPUT:
            case o.re.USER_SELECT:
            case o.re.ROLE_SELECT:
            case o.re.MENTIONABLE_SELECT:
            case o.re.CHANNEL_SELECT:
            case o.re.SECTION:
            case o.re.TEXT_DISPLAY:
            case o.re.THUMBNAIL:
            case o.re.MEDIA_GALLERY:
            case o.re.FILE:
            case o.re.SEPARATOR:
            case o.re.CONTAINER:
                return !0;
            case o.re.CONTENT_INVENTORY_ENTRY:
                return (0, f.Io)('canShowComponent');
        }
    };
function E(e) {
    let n = {};
    for (let r of e) v(n, r);
    return n;
}
function v(e, n) {
    switch (((e[n.id] = n), n.type)) {
        case o.re.ACTION_ROW:
            n.components.forEach((n) => v(e, n));
            break;
        case o.re.SECTION:
            n.components.forEach((n) => v(e, n)), v(e, n.accessory);
            break;
        case o.re.CONTAINER:
            n.components.forEach((n) => v(e, n));
    }
}
function y(e, n) {
    var r, i, a;
    switch (e.type) {
        case o.re.ACTION_ROW:
            return null !== (r = e.components.find((e) => e.id === n)) && void 0 !== r ? r : null;
        case o.re.SECTION:
            if (e.accessory.id === n) return e.accessory;
            return null !== (i = e.components.find((e) => e.id === n)) && void 0 !== i ? i : null;
        case o.re.CONTAINER:
            return null !== (a = e.components.find((e) => e.id === n)) && void 0 !== a ? a : null;
    }
}
function b(e) {
    let n = Object.values(E(e))
        .filter((e) => e.type === o.re.TEXT_DISPLAY)
        .map((e) => e.content)
        .join('\n');
    return '' !== n ? n : null;
}
function I(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e.map((e, r) => T(e, n, [r])).filter((e) => null != e);
}
function T(e, n, r) {
    var i, s, u, f, _, m, E, v;
    if (!g(e.type)) return null;
    function y(e, i) {
        let a = T(e, n, [...r, i]);
        return null == a ? null : a;
    }
    let { includeEmojiSrc: b } = n;
    switch (e.type) {
        case o.re.ACTION_ROW: {
            let n = e.components.map((e, n) => y(e, n)).filter(c.lm);
            return {
                type: o.re.ACTION_ROW,
                id: S(r),
                components: n
            };
        }
        case o.re.BUTTON: {
            let n = null != e.emoji ? h(e.emoji, b) : void 0;
            return {
                type: o.re.BUTTON,
                id: S(r),
                customId: e.custom_id,
                style: e.style,
                disabled: e.disabled,
                url: e.url,
                label: e.label,
                emoji: n,
                skuId: e.sku_id
            };
        }
        case o.re.STRING_SELECT:
            return {
                type: o.re.STRING_SELECT,
                id: S(r),
                customId: e.custom_id,
                disabled: e.disabled,
                options: e.options.map((e) => ({
                    type: d.tM.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? h(e.emoji, b) : void 0
                })),
                placeholder: null !== (i = e.placeholder) && void 0 !== i ? i : p.intl.string(p.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values
            };
        case o.re.TEXT_INPUT:
            return {
                type: e.type,
                id: S(r),
                style: e.style,
                customId: e.custom_id,
                label: e.label,
                value: e.value,
                placeholder: e.placeholder,
                disabled: e.disabled,
                required: null !== (s = e.required) && void 0 !== s && s,
                minLength: e.min_length,
                maxLength: e.max_length
            };
        case o.re.USER_SELECT:
            return {
                type: o.re.USER_SELECT,
                id: S(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (u = e.placeholder) && void 0 !== u ? u : p.intl.string(p.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case o.re.ROLE_SELECT:
            return {
                type: o.re.ROLE_SELECT,
                id: S(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (f = e.placeholder) && void 0 !== f ? f : p.intl.string(p.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case o.re.MENTIONABLE_SELECT:
            return {
                type: o.re.MENTIONABLE_SELECT,
                id: S(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (_ = e.placeholder) && void 0 !== _ ? _ : p.intl.string(p.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case o.re.CHANNEL_SELECT:
            return {
                type: o.re.CHANNEL_SELECT,
                id: S(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (m = e.placeholder) && void 0 !== m ? m : p.intl.string(p.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                channelTypes: e.channel_types,
                defaultValues: e.default_values
            };
        case o.re.SECTION: {
            let n = e.components.map((e, n) => y(e, n)).filter(c.lm),
                i = y(e.accessory, n.length);
            if (0 === n.length || null == i) return null;
            return {
                type: o.re.SECTION,
                id: S(r),
                components: n,
                accessory: i
            };
        }
        case o.re.TEXT_DISPLAY:
            return {
                type: o.re.TEXT_DISPLAY,
                id: S(r),
                content: e.content
            };
        case o.re.THUMBNAIL:
            return {
                type: o.re.THUMBNAIL,
                id: S(r),
                media: (0, l.ym)(e.media),
                description: e.description,
                spoiler: e.spoiler
            };
        case o.re.MEDIA_GALLERY:
            return {
                type: o.re.MEDIA_GALLERY,
                id: S(r),
                items: e.items.map((e) => ({
                    media: (0, l.ym)(e.media),
                    description: e.description,
                    spoiler: e.spoiler
                }))
            };
        case o.re.FILE:
            return {
                type: o.re.FILE,
                id: S(r),
                file: (0, l.ym)(e.file),
                name: e.name,
                size: e.size,
                spoiler: e.spoiler
            };
        case o.re.SEPARATOR:
            return {
                type: o.re.SEPARATOR,
                id: S(r),
                divider: null === (E = e.divider) || void 0 === E || E,
                spacing: null !== (v = e.spacing) && void 0 !== v ? v : o.US.SMALL
            };
        case o.re.CONTENT_INVENTORY_ENTRY:
            if (null == e.content_inventory_entry) return null;
            return {
                type: o.re.CONTENT_INVENTORY_ENTRY,
                id: S(r),
                contentInventoryEntry: e.content_inventory_entry
            };
        case o.re.CONTAINER: {
            let n = e.components.map((e, n) => y(e, n)).filter(c.lm);
            return {
                type: o.re.CONTAINER,
                id: S(r),
                accentColor: null != e.accent_color ? (0, a.ho)(e.accent_color, !0) : void 0,
                spoiler: e.spoiler,
                components: n
            };
        }
        default:
            return null;
    }
}
function S(e) {
    return (0, d.FF)(e.join(','));
}
