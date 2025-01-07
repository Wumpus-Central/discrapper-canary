r.d(n, {
    SD: function () {
        return m;
    },
    uZ: function () {
        return I;
    }
});
var i = r(47120);
var a = r(866442),
    s = r(911969),
    o = r(622449),
    l = r(768494),
    u = r(768581),
    c = r(823379),
    d = r(280501),
    f = r(790642),
    _ = r(388032);
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
    p = (e) => ((null == e ? void 0 : e.errorCode) === 429 ? _.intl.string(_.t.fitPBQ) : _.intl.string(_.t.VCsUJi)),
    m = (e, n, r) => {
        let i = (null == e ? void 0 : e.data.interactionType) === s.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === o.F.FAILED ? e.data.componentId : null;
        if (null != (null != i ? v(r, i) : null)) {
            var a;
            return null !== (a = null == n ? void 0 : n.interactionError) && void 0 !== a ? a : p(e);
        }
    },
    g = (e) => {
        switch (e) {
            case s.re.ACTION_ROW:
            case s.re.BUTTON:
            case s.re.STRING_SELECT:
            case s.re.TEXT_INPUT:
            case s.re.USER_SELECT:
            case s.re.ROLE_SELECT:
            case s.re.MENTIONABLE_SELECT:
            case s.re.CHANNEL_SELECT:
            case s.re.SECTION:
            case s.re.TEXT_DISPLAY:
            case s.re.THUMBNAIL:
            case s.re.MEDIA_GALLERY:
            case s.re.FILE:
            case s.re.SEPARATOR:
            case s.re.CONTAINER:
                return !0;
            case s.re.CONTENT_INVENTORY_ENTRY:
                return (0, f.Io)('canShowComponent');
        }
    };
function E(e, n) {
    switch (((e[n.id] = n), n.type)) {
        case ComponentType.ACTION_ROW:
            n.components.forEach((n) => E(e, n));
            break;
        case ComponentType.SECTION:
            n.components.forEach((n) => E(e, n)), E(e, n.accessory);
            break;
        case ComponentType.CONTAINER:
            n.components.forEach((n) => E(e, n));
    }
}
function v(e, n) {
    var r, i, a;
    switch (e.type) {
        case s.re.ACTION_ROW:
            return null !== (r = e.components.find((e) => e.id === n)) && void 0 !== r ? r : null;
        case s.re.SECTION:
            if (e.accessory.id === n) return e.accessory;
            return null !== (i = e.components.find((e) => e.id === n)) && void 0 !== i ? i : null;
        case s.re.CONTAINER:
            return null !== (a = e.components.find((e) => e.id === n)) && void 0 !== a ? a : null;
    }
}
function I(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e.map((e, r) => T(e, n, [r])).filter((e) => null != e);
}
function T(e, n, r) {
    var i, o, u, f, p, m, E, v;
    if (!g(e.type)) return null;
    function I(e, i) {
        let a = T(e, n, [...r, i]);
        return null == a ? null : a;
    }
    let { includeEmojiSrc: y } = n;
    switch (e.type) {
        case s.re.ACTION_ROW: {
            let n = e.components.map((e, n) => I(e, n)).filter(c.lm);
            return {
                type: s.re.ACTION_ROW,
                id: b(r),
                components: n
            };
        }
        case s.re.BUTTON: {
            let n = null != e.emoji ? h(e.emoji, y) : void 0;
            return {
                type: s.re.BUTTON,
                id: b(r),
                customId: e.custom_id,
                style: e.style,
                disabled: e.disabled,
                url: e.url,
                label: e.label,
                emoji: n,
                skuId: e.sku_id
            };
        }
        case s.re.STRING_SELECT:
            return {
                type: s.re.STRING_SELECT,
                id: b(r),
                customId: e.custom_id,
                disabled: e.disabled,
                options: e.options.map((e) => ({
                    type: d.tM.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? h(e.emoji, y) : void 0
                })),
                placeholder: null !== (i = e.placeholder) && void 0 !== i ? i : _.intl.string(_.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values
            };
        case s.re.TEXT_INPUT:
            return {
                type: e.type,
                id: b(r),
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
        case s.re.USER_SELECT:
            return {
                type: s.re.USER_SELECT,
                id: b(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (u = e.placeholder) && void 0 !== u ? u : _.intl.string(_.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case s.re.ROLE_SELECT:
            return {
                type: s.re.ROLE_SELECT,
                id: b(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (f = e.placeholder) && void 0 !== f ? f : _.intl.string(_.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case s.re.MENTIONABLE_SELECT:
            return {
                type: s.re.MENTIONABLE_SELECT,
                id: b(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (p = e.placeholder) && void 0 !== p ? p : _.intl.string(_.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case s.re.CHANNEL_SELECT:
            return {
                type: s.re.CHANNEL_SELECT,
                id: b(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (m = e.placeholder) && void 0 !== m ? m : _.intl.string(_.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                channelTypes: e.channel_types,
                defaultValues: e.default_values
            };
        case s.re.SECTION: {
            let n = e.components.map((e, n) => I(e, n)).filter(c.lm),
                i = I(e.accessory, n.length);
            if (0 === n.length || null == i) return null;
            return {
                type: s.re.SECTION,
                id: b(r),
                components: n,
                accessory: i
            };
        }
        case s.re.TEXT_DISPLAY:
            return {
                type: s.re.TEXT_DISPLAY,
                id: b(r),
                content: e.content
            };
        case s.re.THUMBNAIL:
            return {
                type: s.re.THUMBNAIL,
                id: b(r),
                image: (0, l.ym)(e.image),
                description: e.description,
                spoiler: e.spoiler
            };
        case s.re.MEDIA_GALLERY:
            return {
                type: s.re.MEDIA_GALLERY,
                id: b(r),
                items: e.items.map((e) => ({
                    media: (0, l.ym)(e.media),
                    description: e.description,
                    spoiler: e.spoiler
                }))
            };
        case s.re.FILE:
            return {
                type: s.re.FILE,
                id: b(r),
                file: (0, l.ym)(e.file),
                name: e.name,
                size: e.size,
                spoiler: e.spoiler
            };
        case s.re.SEPARATOR:
            return {
                type: s.re.SEPARATOR,
                id: b(r),
                divider: null === (E = e.divider) || void 0 === E || E,
                spacing: null !== (v = e.spacing) && void 0 !== v ? v : s.US.SMALL
            };
        case s.re.CONTENT_INVENTORY_ENTRY:
            if (null == e.content_inventory_entry) return null;
            return {
                type: s.re.CONTENT_INVENTORY_ENTRY,
                id: b(r),
                contentInventoryEntry: e.content_inventory_entry
            };
        case s.re.CONTAINER: {
            let n = e.components.map((e, n) => I(e, n)).filter(c.lm);
            return {
                type: s.re.CONTAINER,
                id: b(r),
                accentColor: null != e.accent_color ? (0, a.ho)(e.accent_color, !0) : void 0,
                spoiler: e.spoiler,
                components: n
            };
        }
        default:
            return null;
    }
}
function b(e) {
    return (0, d.FF)(e.join(','));
}
