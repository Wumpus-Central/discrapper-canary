l.d(n, { A: () => o });
var e = l(477900);
l(582128);
var r = l(331322),
    u = l(834730),
    a = l(5377),
    i = l(191850),
    s = l(792996),
    c = l(60498);
function o(t) {
    let { projectId: n } = t,
        l = (0, c.Ay)(n),
        o = (0, c.cg)(n);
    if (null == l) return null;
    let d = l.updatesPaused;
    return (0, e.jsxs)(r.B, {
        gap: 4,
        children: [
            (0, e.jsx)(u.E, {
                variant: "body-md/medium",
                color: "text-default",
                children: s.intl.string(i.default["+QBNDE"]),
            }),
            (0, e.jsx)(u.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: (function (t, n) {
                    let { sourceName: l } = t;
                    return null == l
                        ? s.intl.string(n ? i.default["5wuDGB"] : i.default.rxvuqx)
                        : s.intl.formatToPlainString(n ? i.default.HHthpS : i.default.qpGg7d, { name: l });
                })(l, d),
            }),
            (0, e.jsx)(u.E, {
                variant: "body-sm/normal",
                color: d || o?.status !== "failed" ? "text-muted" : "text-feedback-critical",
                children: (function (t, n) {
                    if (n) return s.intl.string(i.default["uV/luq"]);
                    if (null == t || null == t.atMs) return s.intl.string(i.default.gHndTq);
                    let l = (0, a.i$)(new Date(t.atMs), "LLL");
                    switch (t.status) {
                        case "updated":
                            return s.intl.formatToPlainString(i.default["6rQ8So"], { time: l });
                        case "failed":
                            return s.intl.formatToPlainString(i.default.HZnsMq, { time: l });
                        case "held":
                            return s.intl.string(i.default.AwPHix);
                        case "current":
                        case "paused":
                            return s.intl.formatToPlainString(i.default.yc0AaP, { time: l });
                    }
                })(o, d),
            }),
        ],
    });
}
