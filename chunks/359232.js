n.d(t, { Z: () => p }), n(388685);
var r = n(512722),
    i = n.n(r),
    a = n(911969),
    o = n(388032);
function s(e) {
    return null == e ? 0 : e.type === a.re.STRING_SELECT ? e.values.length : e.selectedOptions.length;
}
let l = (e, t, n) => {
        let { minValues: r, maxValues: i, required: a } = e,
            l = s(t);
        return 0 === l
            ? ("modal" === n ? a : 0 !== r)
                ? o.intl.string(o.t.eJEUvD)
                : null
            : l < r
              ? o.intl.formatToPlainString(o.t.Jmwzdx, { count: r })
              : l > i
                ? o.intl.formatToPlainString(o.t.LDvfRP, { count: i })
                : null;
    },
    c = (e, t) => {
        let { minLength: n, maxLength: r, required: i } = e;
        return null == t || 0 === t.value.length
            ? i
                ? o.intl.string(o.t.eJEUvD)
                : null
            : t.value.length < n || t.value.length > r
              ? o.intl.formatToPlainString(o.t.ONSqYd, {
                    min: n,
                    max: r,
                })
              : null;
    },
    u = (e, t) => {
        var n;
        let { minValues: r, maxValues: i, required: a } = e,
            s = null != (n = null == t ? void 0 : t.uploadIds.length) ? n : 0;
        return 0 === s
            ? a
                ? o.intl.string(o.t.eJEUvD)
                : null
            : s < r
              ? o.intl.formatToPlainString(o.t.pmAt62, { minValues: r })
              : s > i
                ? o.intl.formatToPlainString(o.t.dy6viJ, { maxValues: i })
                : null;
    },
    d = (e, t) => {
        let { required: n } = e;
        return null == t || null == t.value ? (n ? o.intl.string(o.t.eJEUvD) : null) : null;
    },
    f = (e, t) => {
        var n;
        let { minValues: r, maxValues: i, required: a } = e,
            s = null != (n = null == t ? void 0 : t.values.length) ? n : 0;
        return 0 === s
            ? a
                ? o.intl.string(o.t.eJEUvD)
                : null
            : s < r
              ? o.intl.formatToPlainString(o.t.Jmwzdx, { count: r })
              : s > i
                ? o.intl.formatToPlainString(o.t.LDvfRP, { count: i })
                : null;
    };
function p(e, t, n) {
    switch ((null != t && i()(t.type === e.type, "component type matches state"), e.type)) {
        case a.re.BUTTON:
            return null;
        case a.re.STRING_SELECT:
        case a.re.USER_SELECT:
        case a.re.ROLE_SELECT:
        case a.re.MENTIONABLE_SELECT:
        case a.re.CHANNEL_SELECT:
            return l(e, t, n);
        case a.re.TEXT_INPUT:
            return c(e, t);
        case a.re.FILE_UPLOAD:
            return u(e, t);
        case a.re.RADIO_GROUP:
            return d(e, t);
        case a.re.CHECKBOX_GROUP:
            return f(e, t);
        case a.re.CHECKBOX:
            return null;
        default:
            i()(!1, "missing validator for this component");
    }
}
