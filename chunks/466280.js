n.d(t, { Ft: () => s, R9: () => o, XV: () => u, th: () => c, sm: () => d });
var r = n(582128),
    l = n(666476);
(n(323874), n(14289), n(35956));
var a = n(191850),
    i = n(792996);
function s(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
function o(e, t) {
    return (0, l.Oq)(e.size, t)
        ? "fits"
        : "image/png" === t && e.size <= l.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
          ? "webp"
          : "too-large";
}
async function c(e) {
    let t;
    try {
        t = await (async function (e) {
            let t = new Worker(new URL("/assets/" + n.u(638664), n.b));
            try {
                let n = await new Promise((n) => {
                    (t.addEventListener("message", (e) => {
                        let { data: t } = e;
                        return n(t);
                    }),
                        t.addEventListener("error", () => n(null)),
                        t.addEventListener("messageerror", () => n(null)),
                        t.postMessage(e));
                });
                if (null == n) return null;
                return new File([n], `${e.name.replace(/\.png$/i, "")}.webp`, {
                    type: "image/webp",
                    lastModified: e.lastModified,
                });
            } finally {
                t.terminate();
            }
        })(e);
    } catch {
        return null;
    }
    return null != t && (0, l.Oq)(t.size, t.type) ? t : null;
}
function u() {
    return i.intl.formatToPlainString(a.default.Q0aCVZ, { count: 10 });
}
function d(e) {
    return r.useCallback(
        (t) => {
            if (t.defaultPrevented) return;
            let n = Array.from(t.clipboardData?.files ?? []);
            0 !== n.length && (t.preventDefault(), e(n));
        },
        [e],
    );
}
