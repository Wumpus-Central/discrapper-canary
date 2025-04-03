n.d(t, { Z: () => d }), n(47120);
var l = n(512722),
    i = n.n(l),
    u = n(911969),
    a = n(388032);
let r = (e, t) => {
        let { minValues: n, maxValues: l } = e;
        if (null == t) return 0 === n ? null : a.NW.formatToPlainString(a.t.Jmwzd3, { count: n });
        if (t.type === u.re.STRING_SELECT) {
            if (t.values.length < n) return a.NW.formatToPlainString(a.t.Jmwzd3, { count: n });
            else if (t.values.length > l) return a.NW.formatToPlainString(a.t.LDvfRE, { count: l });
        } else if (t.selectedOptions.length < n) return a.NW.formatToPlainString(a.t.Jmwzd3, { count: n });
        else if (t.selectedOptions.length > l) return a.NW.formatToPlainString(a.t.LDvfRE, { count: l });
        return null;
    },
    o = (e, t) => {
        let { minLength: n, maxLength: l, required: i } = e;
        return null == t || 0 === t.value.length
            ? i
                ? a.NW.formatToPlainString(a.t.ONSqYW, {
                      min: n,
                      max: l
                  })
                : null
            : t.value.length < n || t.value.length > l
              ? a.NW.formatToPlainString(a.t.ONSqYW, {
                    min: n,
                    max: l
                })
              : null;
    };
function d(e, t) {
    switch ((null != t && i()(t.type === e.type, 'component type matches state'), e.type)) {
        case u.re.BUTTON:
            return null;
        case u.re.STRING_SELECT:
        case u.re.USER_SELECT:
        case u.re.ROLE_SELECT:
        case u.re.MENTIONABLE_SELECT:
        case u.re.CHANNEL_SELECT:
            return r(e, t);
        case u.re.TEXT_INPUT:
            return o(e, t);
        default:
            i()(!1, 'missing validator for this component');
    }
}
