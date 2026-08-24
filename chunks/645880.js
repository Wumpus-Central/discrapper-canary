"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.makeDataFormatters = function (e, t, r = !1) {
        function o(e) {
            return r ? Object.assign(Object.assign({}, e), { localeMatcher: "lookup" }) : e;
        }
        return {
            formatDate(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.date, a);
                return i.dataFormatterCache.getDateTimeFormatter(e, o(s)).format(r);
            },
            formatDuration(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.time, a);
                return i.dataFormatterCache.getDurationFormatter(e, o(s)).format(r);
            },
            formatNumber(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.number, a);
                return i.dataFormatterCache.getNumberFormatter(e, o(s)).format(r);
            },
            formatList(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.list, a);
                return i.dataFormatterCache.getListFormatter(e, o(s)).format(r);
            },
            formatListToParts(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.list, a),
                    l = {};
                for (let e in r) l["$+/-$placeholder." + e] = r[e];
                return i.dataFormatterCache
                    .getListFormatter(e, o(s))
                    .formatToParts(Object.keys(l))
                    .map((e) => {
                        var t;
                        return (e.value = null != (t = l[e.value]) ? t : e.value);
                    });
            },
            formatRelativeTime(r, a, s) {
                let l = (0, n.resolveFormatConfigOptions)(t.relativeTime, s);
                return i.dataFormatterCache.getRelativeTimeFormatter(e, o(l)).format(r, a);
            },
            formatTime(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.time, a);
                return i.dataFormatterCache.getDateTimeFormatter(e, o(s)).format(r);
            },
            getPluralRules: (t) => i.dataFormatterCache.getPluralRules(e, o(t)),
        };
    });
let n = r(731244),
    i = r(175182);
