n.d(t, { Z: () => u }), n(388685);
var r = n(512722),
    i = n.n(r),
    o = n(911969),
    a = n(388032);
function s(e) {
    return null == e ? 0 : e.type === o.re.STRING_SELECT ? e.values.length : e.selectedOptions.length;
}
let l = (e, t, n) => {
        let { minValues: r, maxValues: i, required: o } = e,
            l = s(t);
        return 0 === l
            ? ("modal" === n ? o : 0 !== r)
                ? a.intl.string(a.t.eJEUvL)
                : null
            : l < r
              ? a.intl.formatToPlainString(a.t.Jmwzd3, { count: r })
              : l > i
                ? a.intl.formatToPlainString(a.t.LDvfRE, { count: i })
                : null;
    },
    c = (e, t) => {
        let { minLength: n, maxLength: r, required: i } = e;
        return null == t || 0 === t.value.length
            ? i
                ? a.intl.string(a.t.eJEUvL)
                : null
            : t.value.length < n || t.value.length > r
              ? a.intl.formatToPlainString(a.t.ONSqYW, {
                    min: n,
                    max: r,
                })
              : null;
    };
function u(e, t, n) {
    switch ((null != t && i()(t.type === e.type, "component type matches state"), e.type)) {
        case o.re.BUTTON:
            return null;
        case o.re.STRING_SELECT:
        case o.re.USER_SELECT:
        case o.re.ROLE_SELECT:
        case o.re.MENTIONABLE_SELECT:
        case o.re.CHANNEL_SELECT:
            return l(e, t, n);
        case o.re.TEXT_INPUT:
            return c(e, t);
        default:
            i()(!1, "missing validator for this component");
    }
}
