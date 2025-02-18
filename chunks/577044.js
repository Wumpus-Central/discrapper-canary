Object.defineProperty(t, '__esModule', { value: !0 }), (t.makeDataFormatters = a);
let i = n(716377),
    r = n(404619);
function a(e, t, n = !1) {
    function s(e) {
        return n ? Object.assign(Object.assign({}, e), { localeMatcher: 'lookup' }) : e;
    }
    return {
        formatDate(n, a) {
            let o = (0, i.resolveFormatConfigOptions)(t.date, a);
            return r.dataFormatterCache.getDateTimeFormatter(e, s(o)).format(n);
        },
        formatDuration(n, a) {
            let o = (0, i.resolveFormatConfigOptions)(t.time, a);
            return r.dataFormatterCache.getDurationFormatter(e, s(o)).format(n);
        },
        formatNumber(n, a) {
            let o = (0, i.resolveFormatConfigOptions)(t.number, a);
            return r.dataFormatterCache.getNumberFormatter(e, s(o)).format(n);
        },
        formatList(n, a) {
            let o = (0, i.resolveFormatConfigOptions)(t.list, a);
            return r.dataFormatterCache.getListFormatter(e, s(o)).format(n);
        },
        formatListToParts(n, a) {
            let o = (0, i.resolveFormatConfigOptions)(t.list, a),
                l = {};
            for (let e in n) l['$+/-$placeholder.' + e] = n[e];
            return r.dataFormatterCache
                .getListFormatter(e, s(o))
                .formatToParts(Object.keys(l))
                .map((e) => {
                    var t;
                    return (e.value = null !== (t = l[e.value]) && void 0 !== t ? t : e.value);
                });
        },
        formatRelativeTime(n, a, o) {
            let l = (0, i.resolveFormatConfigOptions)(t.relativeTime, o);
            return r.dataFormatterCache.getRelativeTimeFormatter(e, s(l)).format(n, a);
        },
        formatTime(n, a) {
            let o = (0, i.resolveFormatConfigOptions)(t.time, a);
            return r.dataFormatterCache.getDateTimeFormatter(e, s(o)).format(n);
        },
        getPluralRules: (t) => r.dataFormatterCache.getPluralRules(e, s(t))
    };
}
