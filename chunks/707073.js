Object.defineProperty(t, '__esModule', { value: !0 }), (t.makeDataFormatters = o);
let r = n(223794),
    i = n(719371);
function o(e, t, n = !1) {
    function a(e) {
        return n ? Object.assign(Object.assign({}, e), { localeMatcher: 'lookup' }) : e;
    }
    return {
        formatDate(n, o) {
            let s = (0, r.resolveFormatConfigOptions)(t.date, o);
            return i.dataFormatterCache.getDateTimeFormatter(e, a(s)).format(n);
        },
        formatDuration(n, o) {
            let s = (0, r.resolveFormatConfigOptions)(t.time, o);
            return i.dataFormatterCache.getDurationFormatter(e, a(s)).format(n);
        },
        formatNumber(n, o) {
            let s = (0, r.resolveFormatConfigOptions)(t.number, o);
            return i.dataFormatterCache.getNumberFormatter(e, a(s)).format(n);
        },
        formatList(n, o) {
            let s = (0, r.resolveFormatConfigOptions)(t.list, o);
            return i.dataFormatterCache.getListFormatter(e, a(s)).format(n);
        },
        formatListToParts(n, o) {
            let s = (0, r.resolveFormatConfigOptions)(t.list, o),
                l = {};
            for (let e in n) l['$+/-$placeholder.' + e] = n[e];
            return i.dataFormatterCache
                .getListFormatter(e, a(s))
                .formatToParts(Object.keys(l))
                .map((e) => {
                    var t;
                    return (e.value = null != (t = l[e.value]) ? t : e.value);
                });
        },
        formatRelativeTime(n, o, s) {
            let l = (0, r.resolveFormatConfigOptions)(t.relativeTime, s);
            return i.dataFormatterCache.getRelativeTimeFormatter(e, a(l)).format(n, o);
        },
        formatTime(n, o) {
            let s = (0, r.resolveFormatConfigOptions)(t.time, o);
            return i.dataFormatterCache.getDateTimeFormatter(e, a(s)).format(n);
        },
        getPluralRules: (t) => i.dataFormatterCache.getPluralRules(e, a(t))
    };
}
