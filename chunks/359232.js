(n.d(t, { Z: () => c }), n(388685));
var r = n(512722),
    i = n.n(r),
    a = n(911969),
    o = n(388032);
let s = (e, t) => {
        let { minValues: n, maxValues: r } = e;
        if (null == t) return 0 === n ? null : o.intl.formatToPlainString(o.t.Jmwzd3, { count: n });
        if (t.type === a.re.STRING_SELECT) {
            if (t.values.length < n) return o.intl.formatToPlainString(o.t.Jmwzd3, { count: n });
            else if (t.values.length > r) return o.intl.formatToPlainString(o.t.LDvfRE, { count: r });
        } else if (t.selectedOptions.length < n) return o.intl.formatToPlainString(o.t.Jmwzd3, { count: n });
        else if (t.selectedOptions.length > r) return o.intl.formatToPlainString(o.t.LDvfRE, { count: r });
        return null;
    },
    l = (e, t) => {
        let { minLength: n, maxLength: r, required: i } = e;
        return null == t || 0 === t.value.length
            ? i
                ? o.intl.formatToPlainString(o.t.ONSqYW, {
                      min: n,
                      max: r
                  })
                : null
            : t.value.length < n || t.value.length > r
              ? o.intl.formatToPlainString(o.t.ONSqYW, {
                    min: n,
                    max: r
                })
              : null;
    };
function c(e, t) {
    switch ((null != t && i()(t.type === e.type, 'component type matches state'), e.type)) {
        case a.re.BUTTON:
            return null;
        case a.re.STRING_SELECT:
        case a.re.USER_SELECT:
        case a.re.ROLE_SELECT:
        case a.re.MENTIONABLE_SELECT:
        case a.re.CHANNEL_SELECT:
            return s(e, t);
        case a.re.TEXT_INPUT:
            return l(e, t);
        default:
            i()(!1, 'missing validator for this component');
    }
}
