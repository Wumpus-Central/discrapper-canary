(n.d(t, { Z: () => c }), n(388685));
var r = n(512722),
    i = n.n(r),
    o = n(911969),
    a = n(388032);
let s = (e, t) => {
        let { minValues: n, maxValues: r } = e;
        if (null == t) return 0 === n ? null : a.intl.formatToPlainString(a.t.Jmwzd3, { count: n });
        if (t.type === o.re.STRING_SELECT) {
            if (t.values.length < n) return a.intl.formatToPlainString(a.t.Jmwzd3, { count: n });
            else if (t.values.length > r) return a.intl.formatToPlainString(a.t.LDvfRE, { count: r });
        } else if (t.selectedOptions.length < n) return a.intl.formatToPlainString(a.t.Jmwzd3, { count: n });
        else if (t.selectedOptions.length > r) return a.intl.formatToPlainString(a.t.LDvfRE, { count: r });
        return null;
    },
    l = (e, t) => {
        let { minLength: n, maxLength: r, required: i } = e;
        return null == t || 0 === t.value.length
            ? i
                ? a.intl.formatToPlainString(a.t.ONSqYW, {
                      min: n,
                      max: r
                  })
                : null
            : t.value.length < n || t.value.length > r
              ? a.intl.formatToPlainString(a.t.ONSqYW, {
                    min: n,
                    max: r
                })
              : null;
    };
function c(e, t) {
    switch ((null != t && i()(t.type === e.type, 'component type matches state'), e.type)) {
        case o.re.BUTTON:
            return null;
        case o.re.STRING_SELECT:
        case o.re.USER_SELECT:
        case o.re.ROLE_SELECT:
        case o.re.MENTIONABLE_SELECT:
        case o.re.CHANNEL_SELECT:
            return s(e, t);
        case o.re.TEXT_INPUT:
            return l(e, t);
        default:
            i()(!1, 'missing validator for this component');
    }
}
