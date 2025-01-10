n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var l = n(512722),
    i = n.n(l),
    u = n(911969),
    r = n(388032);
let a = (e, t) => {
        let { minValues: n, maxValues: l } = e;
        if (null == t) return 0 === n ? null : r.intl.formatToPlainString(r.t.Jmwzd3, { count: n });
        if (t.type === u.re.STRING_SELECT) {
            if (t.values.length < n) return r.intl.formatToPlainString(r.t.Jmwzd3, { count: n });
            if (t.values.length > l) return r.intl.formatToPlainString(r.t.LDvfRE, { count: l });
        } else {
            if (t.selectedOptions.length < n) return r.intl.formatToPlainString(r.t.Jmwzd3, { count: n });
            if (t.selectedOptions.length > l) return r.intl.formatToPlainString(r.t.LDvfRE, { count: l });
        }
        return null;
    },
    o = (e, t) => {
        let { minLength: n, maxLength: l, required: i } = e;
        if (null == t || 0 === t.value.length)
            return i
                ? r.intl.formatToPlainString(r.t.ONSqYW, {
                      min: n,
                      max: l
                  })
                : null;
        return t.value.length < n || t.value.length > l
            ? r.intl.formatToPlainString(r.t.ONSqYW, {
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
            return a(e, t);
        case u.re.TEXT_INPUT:
            return o(e, t);
        default:
            i()(!1, 'missing validator for this component');
    }
}
