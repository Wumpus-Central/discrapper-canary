Object.defineProperty(t, '__esModule', { value: !0 }), (t.makeDataFormatters = a);
let r = n(223794),
    i = n(719371);
function a(e, t, n = !1) {
    function o(e) {
        return n ? Object.assign(Object.assign({}, e), { localeMatcher: 'lookup' }) : e;
    }
    return {
        formatDate(n, a) {
            let s = (0, r.resolveFormatConfigOptions)(t.date, a);
            return i.dataFormatterCache.getDateTimeFormatter(e, o(s)).format(n);
        },
        formatDuration(n, a) {
            let s = (0, r.resolveFormatConfigOptions)(t.time, a);
            return i.dataFormatterCache.getDurationFormatter(e, o(s)).format(n);
        },
        formatNumber(n, a) {
            let s = (0, r.resolveFormatConfigOptions)(t.number, a);
            return i.dataFormatterCache.getNumberFormatter(e, o(s)).format(n);
        },
        formatList(n, a) {
            let s = (0, r.resolveFormatConfigOptions)(t.list, a);
            return i.dataFormatterCache.getListFormatter(e, o(s)).format(n);
        },
        formatListToParts(n, a) {
            let s = (0, r.resolveFormatConfigOptions)(t.list, a),
                l = {};
            for (let e in n) l['$+/-$placeholder.' + e] = n[e];
            return i.dataFormatterCache
                .getListFormatter(e, o(s))
                .formatToParts(Object.keys(l))
                .map((e) => {
                    var t;
                    return (e.value = null != (t = l[e.value]) ? t : e.value);
                });
        },
        formatRelativeTime(n, a, s) {
            let l = (0, r.resolveFormatConfigOptions)(t.relativeTime, s);
            return i.dataFormatterCache.getRelativeTimeFormatter(e, o(l)).format(n, a);
        },
        formatTime(n, a) {
            let s = (0, r.resolveFormatConfigOptions)(t.time, a);
            return i.dataFormatterCache.getDateTimeFormatter(e, o(s)).format(n);
        },
        getPluralRules: (t) => i.dataFormatterCache.getPluralRules(e, o(t))
    };
}
