n.d(e, { A: () => o });
var l = n(284009),
    i = n.n(l),
    r = n(155718),
    a = n(814890),
    u = n(985018);
function o(t, e, n) {
    switch ((null != e && i()(e.type === t.type, "component type matches state"), t.type)) {
        case r.I5.BUTTON:
            return null;
        case r.I5.STRING_SELECT:
        case r.I5.USER_SELECT:
        case r.I5.ROLE_SELECT:
        case r.I5.MENTIONABLE_SELECT:
        case r.I5.CHANNEL_SELECT:
            return ((t, e, n) => {
                let { minValues: l, maxValues: i, required: o } = t,
                    s = null == e ? 0 : e.type === r.I5.STRING_SELECT ? e.values.length : e.selectedOptions.length;
                return 0 === s
                    ? (0, a.Lr)({ minValues: l, required: o }, n)
                        ? null
                        : u.intl.string(u.t.eJEUvD)
                    : s < l
                      ? u.intl.formatToPlainString(u.t.Jmwzdx, { count: l })
                      : s > i
                        ? u.intl.formatToPlainString(u.t.LDvfRP, { count: i })
                        : null;
            })(t, e, n);
        case r.I5.TEXT_INPUT:
            return ((t, e) => {
                let { minLength: n, maxLength: l, required: i } = t;
                return null == e || 0 === e.value.length
                    ? i
                        ? u.intl.string(u.t.eJEUvD)
                        : null
                    : e.value.length < n || e.value.length > l
                      ? u.intl.formatToPlainString(u.t.ONSqYd, { min: n, max: l })
                      : null;
            })(t, e);
        case r.I5.FILE_UPLOAD:
            return ((t, e) => {
                let { minValues: n, maxValues: l, required: i } = t,
                    r = e?.uploadIds.length ?? 0;
                return 0 === r
                    ? i
                        ? u.intl.string(u.t.eJEUvD)
                        : null
                    : r < n
                      ? u.intl.formatToPlainString(u.t.pmAt62, { minValues: n })
                      : r > l
                        ? u.intl.formatToPlainString(u.t.dy6viJ, { maxValues: l })
                        : null;
            })(t, e);
        case r.I5.RADIO_GROUP:
            return ((t, e) => {
                let { required: n } = t;
                return null == e || null == e.value ? (n ? u.intl.string(u.t.eJEUvD) : null) : null;
            })(t, e);
        case r.I5.CHECKBOX_GROUP:
            return ((t, e) => {
                let { minValues: n, maxValues: l, required: i } = t,
                    r = e?.values.length ?? 0;
                return 0 === r
                    ? i
                        ? u.intl.string(u.t.eJEUvD)
                        : null
                    : r < n
                      ? u.intl.formatToPlainString(u.t.Jmwzdx, { count: n })
                      : r > l
                        ? u.intl.formatToPlainString(u.t.LDvfRP, { count: l })
                        : null;
            })(t, e);
        case r.I5.CHECKBOX:
            return null;
        default:
            i()(!1, "missing validator for this component");
    }
}
