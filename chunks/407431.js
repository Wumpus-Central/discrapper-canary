l.d(n, { A: () => c });
var e = l(477900);
l(582128);
var u = l(683071),
    r = l(5377),
    a = l(258576),
    i = l(792996),
    s = l(838117);
function c(t) {
    let { projectId: n } = t,
        l = (0, s.Ay)(n),
        c = (0, s.cg)(n);
    if (null == l) return null;
    let o = l.updatesPaused;
    return (0, e.jsx)(u.w, {
        type: o || c?.status !== "failed" ? "info" : "critical",
        role: "none",
        title: i.intl.string(a.default["+QBNDE"]),
        message: `${(function (t, n) {
            let { sourceName: l } = t;
            return null == l
                ? i.intl.string(n ? a.default["5wuDGB"] : a.default.rxvuqx)
                : i.intl.formatToPlainString(n ? a.default.HHthpS : a.default.qpGg7d, { name: l });
        })(l, o)} ${(function (t, n) {
            if (n) return i.intl.string(a.default["uV/luq"]);
            if (null == t || null == t.atMs) return i.intl.string(a.default.gHndTq);
            let l = (0, r.i$)(new Date(t.atMs), "LLL");
            switch (t.status) {
                case "updated":
                    return i.intl.formatToPlainString(a.default["6rQ8So"], { time: l });
                case "failed":
                    return i.intl.formatToPlainString(a.default.HZnsMq, { time: l });
                case "held":
                    return i.intl.string(a.default.AwPHix);
                case "current":
                case "paused":
                    return i.intl.formatToPlainString(a.default.yc0AaP, { time: l });
            }
        })(c, o)}`,
    });
}
