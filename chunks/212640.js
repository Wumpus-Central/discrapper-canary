"use strict";
n.d(t, { NY: () => d, RZ: () => c }), n(323874), n(14289), n(35956);
var i = n(835245),
    s = n(562465),
    r = n(118356),
    l = n(652215);
let a = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return "127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href;
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
    try {
        let { origin: i } = new URL(o(e, t));
        return n
            .map((e) => o(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return i === t;
            });
    } catch (e) {
        return new r.Vy("Auth").error("Failed to check external redirect", e), !1;
    }
}
async function d(e) {
    let t = (0, i.A)();
    try {
        var n;
        let i,
            r,
            a = (await s.Bo.post({ url: l.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
                .handoff_token,
            o =
                ((n = { urlString: e, handoffKey: t, handoffToken: a }),
                (i = new URL(n.urlString)),
                (r = `handoff_key=${encodeURIComponent(n.handoffKey)}&handoff_token=${encodeURIComponent(n.handoffToken)}`),
                "" !== i.hash ? (i.hash += `&${r}`) : (i.hash = `#${r}`),
                i.href);
        window.location.href = o;
    } catch (t) {
        window.location.href = e;
    }
}
