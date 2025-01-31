n.d(t, { Z: () => l });
var i = n(581050),
    r = n(388032);
function l(e) {
    var t, n;
    return {
        isApplicationRejected: (null == e ? void 0 : null === (t = e.latestRequest) || void 0 === t ? void 0 : t.state) === i.X.REJECTED,
        requestCooldownDuration: (function (e) {
            let t;
            if (null == e) return;
            let n = Date.parse(e),
                i = Date.now();
            if (isNaN(n) || n < i) return;
            let l = Math.round((n - i) / 60000),
                s = (e) => Math.round(l / e);
            return l >= 43200 ? r.intl.formatToPlainString(r.t.kridzM, { months: s(43200) }) : l >= 10080 ? r.intl.formatToPlainString(r.t.EmoBDw, { weeks: s(10080) }) : l >= 1440 ? r.intl.formatToPlainString(r.t.k2UNz8, { days: s(1440) }) : l >= 60 ? r.intl.formatToPlainString(r.t.xCjYxM, { hours: s(60) }) : r.intl.formatToPlainString(r.t.iXLF9f, { minutes: l });
        })(null == e ? void 0 : null === (n = e.rejection) || void 0 === n ? void 0 : n.can_reapply_at)
    };
}
