"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.makeDataFormatters = function (e, t, r = !1) {
        function i(e) {
            return r ? Object.assign(Object.assign({}, e), { localeMatcher: "lookup" }) : e;
        }
        return {
            formatDate(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.date, a);
                return o.dataFormatterCache.getDateTimeFormatter(e, i(s)).format(r);
            },
            formatDuration(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.time, a);
                return o.dataFormatterCache.getDurationFormatter(e, i(s)).format(r);
            },
            formatNumber(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.number, a);
                return o.dataFormatterCache.getNumberFormatter(e, i(s)).format(r);
            },
            formatList(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.list, a);
                return o.dataFormatterCache.getListFormatter(e, i(s)).format(r);
            },
            formatListToParts(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.list, a),
                    l = {};
                for (let e in r) l["$+/-$placeholder." + e] = r[e];
                return o.dataFormatterCache
                    .getListFormatter(e, i(s))
                    .formatToParts(Object.keys(l))
                    .map((e) => {
                        var t;
                        return (e.value = null != (t = l[e.value]) ? t : e.value);
                    });
            },
            formatRelativeTime(r, a, s) {
                let l = (0, n.resolveFormatConfigOptions)(t.relativeTime, s);
                return o.dataFormatterCache.getRelativeTimeFormatter(e, i(l)).format(r, a);
            },
            formatTime(r, a) {
                let s = (0, n.resolveFormatConfigOptions)(t.time, a);
                return o.dataFormatterCache.getDateTimeFormatter(e, i(s)).format(r);
            },
            getPluralRules: (t) => o.dataFormatterCache.getPluralRules(e, i(t)),
        };
    });
let n = r(533658),
    o = r(331188);
