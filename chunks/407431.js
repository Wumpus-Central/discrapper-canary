e.d(n, { A: () => s });
var l = e(477900);
e(582128);
var r = e(331322),
    i = e(834730),
    u = e(5377),
    a = e(191850),
    c = e(792996),
    d = e(60498);
function s(t) {
    let { projectId: n } = t,
        e = (0, d.Ay)(n),
        s = (0, d.cg)(n);
    if (null == e) return null;
    let o = e.updatesPaused;
    return (0, l.jsxs)(r.B, {
        gap: 4,
        children: [
            (0, l.jsx)(i.E, {
                variant: "body-md/medium",
                color: "text-default",
                children: c.intl.string(a.default["+QBNDE"]),
            }),
            (0, l.jsx)(i.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: (function (t, n) {
                    let { sourceName: e } = t;
                    return null == e
                        ? c.intl.string(n ? a.default["5wuDGB"] : a.default.rxvuqx)
                        : c.intl.formatToPlainString(n ? a.default.HHthpS : a.default.qpGg7d, { name: e });
                })(e, o),
            }),
            (0, l.jsx)(i.E, {
                variant: "body-sm/normal",
                color: o || s?.status !== "failed" ? "text-muted" : "text-feedback-critical",
                children: (function (t, n) {
                    if (n) return c.intl.string(a.default["uV/luq"]);
                    if (null == t || null == t.atMs) return c.intl.string(a.default.gHndTq);
                    let e = (0, u.i$)(new Date(t.atMs), "LLL");
                    switch (t.status) {
                        case "updated":
                            return c.intl.formatToPlainString(a.default["6rQ8So"], { time: e });
                        case "failed":
                            return c.intl.formatToPlainString(a.default.HZnsMq, { time: e });
                        case "held":
                            return c.intl.string(a.default.AwPHix);
                        case "current":
                        case "paused":
                            return c.intl.formatToPlainString(a.default.yc0AaP, { time: e });
                    }
                })(s, o),
            }),
        ],
    });
}
