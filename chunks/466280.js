r.d(t, { Ft: () => s, R9: () => o, XV: () => u, th: () => c, sm: () => d });
var n = r(582128),
    l = r(666476);
(r(323874), r(14289), r(35956));
var a = r(191850),
    i = r(792996);
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
            let t = new Worker(new URL("/assets/" + r.u(638664), r.b));
            try {
                let r = await new Promise((r) => {
                    (t.addEventListener("message", (e) => {
                        let { data: t } = e;
                        return r(t);
                    }),
                        t.addEventListener("error", () => r(null)),
                        t.addEventListener("messageerror", () => r(null)),
                        t.postMessage(e));
                });
                if (null == r) return null;
                return new File([r], `${e.name.replace(/\.png$/i, "")}.webp`, {
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
    return n.useCallback(
        (t) => {
            if (t.defaultPrevented) return;
            let r = Array.from(t.clipboardData?.files ?? []);
            0 !== r.length && (t.preventDefault(), e(r));
        },
        [e],
    );
}
