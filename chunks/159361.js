n.d(t, { Z: () => s });
var r = n(581050),
    i = n(388032);
function s(e) {
    var t, n;
    return {
        isApplicationRejected: (null == e || null == (t = e.latestRequest) ? void 0 : t.state) === r.X.REJECTED,
        requestCooldownDuration: (function (e) {
            let t;
            if (null == e) return;
            let n = Date.parse(e),
                r = Date.now();
            if (isNaN(n) || n < r) return;
            let s = Math.round((n - r) / 60000),
                a = (e) => Math.round(s / e);
            return s >= 43200 ? i.NW.formatToPlainString(i.t.kridzM, { months: a(43200) }) : s >= 10080 ? i.NW.formatToPlainString(i.t.EmoBDw, { weeks: a(10080) }) : s >= 1440 ? i.NW.formatToPlainString(i.t.k2UNz8, { days: a(1440) }) : s >= 60 ? i.NW.formatToPlainString(i.t.xCjYxM, { hours: a(60) }) : i.NW.formatToPlainString(i.t.iXLF9f, { minutes: s });
        })(null == e || null == (n = e.rejection) ? void 0 : n.can_reapply_at)
    };
}
