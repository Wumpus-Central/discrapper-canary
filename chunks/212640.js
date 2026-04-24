n.d(t, { NY: () => c, RZ: () => u }), n(323874), n(14289), n(35956);
var r = n(132500),
    l = n(636537),
    i = n(118356),
    a = n(652215);
let s = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return "127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
    try {
        let { origin: r } = new URL(o(e, t));
        return n
            .map((e) => o(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return r === t;
            });
    } catch (e) {
        return new i.Vy("Auth").error("Failed to check external redirect", e), !1;
    }
}
async function c(e) {
    let t = (0, r.A)();
    try {
        var n;
        let r,
            i,
            s = (await l.Bo.post({ url: a.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
                .handoff_token,
            o =
                ((n = { urlString: e, handoffKey: t, handoffToken: s }),
                (r = new URL(n.urlString)),
                (i = `handoff_key=${encodeURIComponent(n.handoffKey)}&handoff_token=${encodeURIComponent(n.handoffToken)}`),
                "" !== r.hash ? (r.hash += `&${i}`) : (r.hash = `#${i}`),
                r.href);
        window.location.href = o;
    } catch (t) {
        window.location.href = e;
    }
}
