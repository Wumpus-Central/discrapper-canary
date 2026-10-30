s.d(t, { sm: () => m, R9: () => o, XV: () => d, Ft: () => c, th: () => u });
var n = s(582128),
    l = s(666476);
async function r(e) {
    let t = new Worker(new URL("/assets/" + s.u("638664"), s.b));
    try {
        let s = await new Promise((s) => {
            (t.addEventListener("message", (e) => {
                let { data: t } = e;
                return s(t);
            }),
                t.addEventListener("error", () => s(null)),
                t.addEventListener("messageerror", () => s(null)),
                t.postMessage(e));
        });
        if (null == s) return null;
        return new File([s], `${e.name.replace(/\.png$/i, "")}.webp`, {
            type: "image/webp",
            lastModified: e.lastModified,
        });
    } finally {
        t.terminate();
    }
}
(s(323874), s(14289), s(35956));
var a = s(809526),
    i = s(105292);
function c(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
function o(e, t) {
    return (0, l.Oq)(e.size, t)
        ? "fits"
        : "image/png" === t && e.size <= l.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
          ? "webp"
          : "too-large";
}
async function u(e) {
    let t;
    try {
        t = await r(e);
    } catch {
        return null;
    }
    return null != t && (0, l.Oq)(t.size, t.type) ? t : null;
}
function d() {
    return i.intl.formatToPlainString(a.default.Q0aCVZ, { count: l.lN });
}
function m(e) {
    return n.useCallback(
        (t) => {
            if (t.defaultPrevented) return;
            let s = Array.from(t.clipboardData?.files ?? []);
            0 !== s.length && (t.preventDefault(), e(s));
        },
        [e],
    );
}
