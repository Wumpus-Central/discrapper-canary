n.d(e, { A: () => u });
var l = n(284009),
    i = n.n(l),
    r = n(155718),
    a = n(985018);
function u(t, e, n) {
    switch ((null != e && i()(e.type === t.type, "component type matches state"), t.type)) {
        case r.I5.BUTTON:
            return null;
        case r.I5.STRING_SELECT:
        case r.I5.USER_SELECT:
        case r.I5.ROLE_SELECT:
        case r.I5.MENTIONABLE_SELECT:
        case r.I5.CHANNEL_SELECT:
            return ((t, e, n) => {
                let { minValues: l, maxValues: i, required: u } = t,
                    o = null == e ? 0 : e.type === r.I5.STRING_SELECT ? e.values.length : e.selectedOptions.length;
                return 0 === o
                    ? ("modal" === n ? u : 0 !== l)
                        ? a.intl.string(a.t.eJEUvD)
                        : null
                    : o < l
                      ? a.intl.formatToPlainString(a.t.Jmwzdx, { count: l })
                      : o > i
                        ? a.intl.formatToPlainString(a.t.LDvfRP, { count: i })
                        : null;
            })(t, e, n);
        case r.I5.TEXT_INPUT:
            return ((t, e) => {
                let { minLength: n, maxLength: l, required: i } = t;
                return null == e || 0 === e.value.length
                    ? i
                        ? a.intl.string(a.t.eJEUvD)
                        : null
                    : e.value.length < n || e.value.length > l
                      ? a.intl.formatToPlainString(a.t.ONSqYd, { min: n, max: l })
                      : null;
            })(t, e);
        case r.I5.FILE_UPLOAD:
            return ((t, e) => {
                let { minValues: n, maxValues: l, required: i } = t,
                    r = e?.uploadIds.length ?? 0;
                return 0 === r
                    ? i
                        ? a.intl.string(a.t.eJEUvD)
                        : null
                    : r < n
                      ? a.intl.formatToPlainString(a.t.pmAt62, { minValues: n })
                      : r > l
                        ? a.intl.formatToPlainString(a.t.dy6viJ, { maxValues: l })
                        : null;
            })(t, e);
        case r.I5.RADIO_GROUP:
            return ((t, e) => {
                let { required: n } = t;
                return null == e || null == e.value ? (n ? a.intl.string(a.t.eJEUvD) : null) : null;
            })(t, e);
        case r.I5.CHECKBOX_GROUP:
            return ((t, e) => {
                let { minValues: n, maxValues: l, required: i } = t,
                    r = e?.values.length ?? 0;
                return 0 === r
                    ? i
                        ? a.intl.string(a.t.eJEUvD)
                        : null
                    : r < n
                      ? a.intl.formatToPlainString(a.t.Jmwzdx, { count: n })
                      : r > l
                        ? a.intl.formatToPlainString(a.t.LDvfRP, { count: l })
                        : null;
            })(t, e);
        case r.I5.CHECKBOX:
            return null;
        default:
            i()(!1, "missing validator for this component");
    }
}
