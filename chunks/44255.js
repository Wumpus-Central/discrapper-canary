(n.d(t, { Dt: () => u, TP: () => r, lD: () => a }), n(321073));
var l = n(248675),
    i = n(105292);
function a(e) {
    if ("cron" === e.type) return i.intl.formatToPlainString(l.default.aewci7, { expression: e.expression });
    let t = e.everyMs / 6e4;
    return t % 1440 == 0
        ? i.intl.formatToPlainString(l.default["x/G8tD"], { count: t / 1440 })
        : t % 60 == 0
          ? i.intl.formatToPlainString(l.default["q4AgE/"], { count: t / 60 })
          : i.intl.formatToPlainString(l.default["+y7hwg"], { count: t });
}
function r(e) {
    return new Date(e).toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
}
function u(e) {
    let t = a(e.trigger);
    "interval" === e.trigger.type &&
        null != e.trigger.startsAt &&
        (t = i.intl.formatToPlainString(l.default["qCM+Fa"], { interval: t, time: r(e.trigger.startsAt) }));
    let n = [t];
    n.push(i.intl.formatToPlainString(l.default["T/dCkl"], { time: r(e.next_run_at) }));
    let u = e.last_run;
    if (null != u) {
        let e = r(u.scheduled_at);
        n.push(
            "succeeded" === u.status
                ? i.intl.formatToPlainString(l.default.yMA4zs, { time: e })
                : "skipped" === u.status
                  ? i.intl.formatToPlainString(l.default["0ikIhz"], { time: e })
                  : i.intl.formatToPlainString(l.default.HMNRj4, {
                        time: e,
                        error: u.error ?? i.intl.string(l.default.dRxtva),
                    }),
        );
    }
    return n;
}
