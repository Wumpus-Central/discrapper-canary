(l.d(t, { Dt: () => s, TP: () => i, lD: () => r }), l(321073));
var n = l(87501),
    a = l(105292);
function r(e) {
    if ("cron" === e.type) return a.intl.formatToPlainString(n.default.aewci7, { expression: e.expression });
    let t = e.everyMs / 6e4;
    return t % 1440 == 0
        ? a.intl.formatToPlainString(n.default["x/G8tD"], { count: t / 1440 })
        : t % 60 == 0
          ? a.intl.formatToPlainString(n.default["q4AgE/"], { count: t / 60 })
          : a.intl.formatToPlainString(n.default["+y7hwg"], { count: t });
}
function i(e) {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
}
function s(e) {
    let t = r(e.trigger);
    "interval" === e.trigger.type &&
        null != e.trigger.startsAt &&
        (t = a.intl.formatToPlainString(n.default["qCM+Fa"], { interval: t, time: i(e.trigger.startsAt) }));
    let l = [t];
    l.push(a.intl.formatToPlainString(n.default["T/dCkl"], { time: i(e.next_run_at) }));
    let s = e.last_run;
    if (null != s) {
        let e = i(s.scheduled_at);
        l.push(
            "succeeded" === s.status
                ? a.intl.formatToPlainString(n.default.yMA4zs, { time: e })
                : "skipped" === s.status
                  ? a.intl.formatToPlainString(n.default["0ikIhz"], { time: e })
                  : a.intl.formatToPlainString(n.default.HMNRj4, {
                        time: e,
                        error: s.error ?? a.intl.string(n.default.dRxtva),
                    }),
        );
    }
    return l;
}
