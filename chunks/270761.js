n.d(t, {
    A: () => u,
}),
    n(896048);
var l = n(284009),
    r = n.n(l),
    i = n(155718),
    a = n(985018);

function u(e, t, n) {
    switch ((null != t && r()(t.type === e.type, "component type matches state"), e.type)) {
        case i.I5.BUTTON:
            return null;
        case i.I5.STRING_SELECT:
        case i.I5.USER_SELECT:
        case i.I5.ROLE_SELECT:
        case i.I5.MENTIONABLE_SELECT:
        case i.I5.CHANNEL_SELECT:
            return ((e, t, n) => {
                let { minValues: l, maxValues: r, required: u } = e,
                    o = null == t ? 0 : t.type === i.I5.STRING_SELECT ? t.values.length : t.selectedOptions.length;
                return 0 === o
                    ? ("modal" === n ? u : 0 !== l)
                        ? a.intl.string(a.t.eJEUvD)
                        : null
                    : o < l
                      ? a.intl.formatToPlainString(a.t.Jmwzdx, {
                            count: l,
                        })
                      : o > r
                        ? a.intl.formatToPlainString(a.t.LDvfRP, {
                              count: r,
                          })
                        : null;
            })(e, t, n);
        case i.I5.TEXT_INPUT:
            return ((e, t) => {
                let { minLength: n, maxLength: l, required: r } = e;
                return null == t || 0 === t.value.length
                    ? r
                        ? a.intl.string(a.t.eJEUvD)
                        : null
                    : t.value.length < n || t.value.length > l
                      ? a.intl.formatToPlainString(a.t.ONSqYd, {
                            min: n,
                            max: l,
                        })
                      : null;
            })(e, t);
        case i.I5.FILE_UPLOAD:
            return ((e, t) => {
                var n;
                let { minValues: l, maxValues: r, required: i } = e,
                    u = null != (n = null == t ? void 0 : t.uploadIds.length) ? n : 0;
                return 0 === u
                    ? i
                        ? a.intl.string(a.t.eJEUvD)
                        : null
                    : u < l
                      ? a.intl.formatToPlainString(a.t.pmAt62, {
                            minValues: l,
                        })
                      : u > r
                        ? a.intl.formatToPlainString(a.t.dy6viJ, {
                              maxValues: r,
                          })
                        : null;
            })(e, t);
        case i.I5.RADIO_GROUP:
            return ((e, t) => {
                let { required: n } = e;
                return null == t || null == t.value ? (n ? a.intl.string(a.t.eJEUvD) : null) : null;
            })(e, t);
        case i.I5.CHECKBOX_GROUP:
            return ((e, t) => {
                var n;
                let { minValues: l, maxValues: r, required: i } = e,
                    u = null != (n = null == t ? void 0 : t.values.length) ? n : 0;
                return 0 === u
                    ? i
                        ? a.intl.string(a.t.eJEUvD)
                        : null
                    : u < l
                      ? a.intl.formatToPlainString(a.t.Jmwzdx, {
                            count: l,
                        })
                      : u > r
                        ? a.intl.formatToPlainString(a.t.LDvfRP, {
                              count: r,
                          })
                        : null;
            })(e, t);
        case i.I5.CHECKBOX:
            return null;
        default:
            r()(!1, "missing validator for this component");
    }
}
