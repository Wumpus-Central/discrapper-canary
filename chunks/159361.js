n.d(t, { Z: () => l });
var r = n(581050),
    i = n(388032);
function l(e) {
    var t, n;
    return {
        isApplicationRejected: (null == e || null == (t = e.latestRequest) ? void 0 : t.state) === r.X.REJECTED,
        requestCooldownDuration: (function (e) {
            let t;
            if (null == e) return;
            let n = Date.parse(e),
                r = Date.now();
            if (isNaN(n) || n < r) return;
            let l = Math.round((n - r) / 60000),
                s = (e) => Math.round(l / e);
            return l >= 43200 ? i.intl.formatToPlainString(i.t.kridzM, { months: s(43200) }) : l >= 10080 ? i.intl.formatToPlainString(i.t.EmoBDw, { weeks: s(10080) }) : l >= 1440 ? i.intl.formatToPlainString(i.t.k2UNz8, { days: s(1440) }) : l >= 60 ? i.intl.formatToPlainString(i.t.xCjYxM, { hours: s(60) }) : i.intl.formatToPlainString(i.t.iXLF9f, { minutes: l });
        })(null == e || null == (n = e.rejection) ? void 0 : n.can_reapply_at)
    };
}
