n.d(t, { O: () => r, R: () => s });
var l = n(615839),
    a = n(261425),
    i = n(105292);
function r(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : i.intl.string(a.default.KcFvbo);
}
function s(e) {
    let t = (function (e) {
        let [t, n] = [e.charAt(0), e.charAt(1)];
        return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase() ? e : t.toLocaleLowerCase() + e.slice(1);
    })(r(e));
    switch (e.status) {
        case "failed":
            return i.intl.formatToPlainString(a.default.YrVgOf, { task: t });
        case "cancelled":
            return i.intl.formatToPlainString(a.default.kWfWa6, { task: t });
        case "done":
            if (null != e.durationMs)
                return i.intl.formatToPlainString(a.default["++9woZ"], { task: t, duration: (0, l.MB)(e.durationMs) });
            return i.intl.formatToPlainString(a.default.nmI9Uh, { task: t });
        default:
            return i.intl.formatToPlainString(a.default.nmI9Uh, { task: t });
    }
}
