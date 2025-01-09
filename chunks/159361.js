n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(581050),
    r = n(388032);
function l(e) {
    var t, n;
    let l = (null == e ? void 0 : null === (t = e.latestRequest) || void 0 === t ? void 0 : t.state) === i.X.REJECTED;
    return {
        isApplicationRejected: l,
        requestCooldownDuration: (function (e) {
            let t;
            if (null == e) return;
            let n = Date.parse(e),
                i = Date.now();
            if (isNaN(n) || n < i) return;
            let l = 1440,
                s = 10080,
                a = 43200,
                o = Math.round((n - i) / 60000),
                c = (e) => Math.round(o / e);
            return (t = o >= 43200 ? r.intl.formatToPlainString(r.t.kridzM, { months: c(a) }) : o >= s ? r.intl.formatToPlainString(r.t.EmoBDw, { weeks: c(s) }) : o >= l ? r.intl.formatToPlainString(r.t.k2UNz8, { days: c(l) }) : o >= 60 ? r.intl.formatToPlainString(r.t.xCjYxM, { hours: c(60) }) : r.intl.formatToPlainString(r.t.iXLF9f, { minutes: o }));
        })(null == e ? void 0 : null === (n = e.rejection) || void 0 === n ? void 0 : n.can_reapply_at)
    };
}
