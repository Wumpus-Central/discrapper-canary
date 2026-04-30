n.d(t, { NY: () => c, RZ: () => u }), n(323874), n(14289), n(35956);
var l = n(132500),
    a = n(636537),
    s = n(118356),
    i = n(652215);
let r = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return "127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
    try {
        let { origin: l } = new URL(o(e, t));
        return n
            .map((e) => o(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return l === t;
            });
    } catch (e) {
        return new s.Vy("Auth").error("Failed to check external redirect", e), !1;
    }
}
async function c(e) {
    let t = (0, l.A)();
    try {
        var n;
        let l,
            s,
            r = (await a.Bo.post({ url: i.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
                .handoff_token,
            o =
                ((n = { urlString: e, handoffKey: t, handoffToken: r }),
                (l = new URL(n.urlString)),
                (s = `handoff_key=${encodeURIComponent(n.handoffKey)}&handoff_token=${encodeURIComponent(n.handoffToken)}`),
                "" !== l.hash ? (l.hash += `&${s}`) : (l.hash = `#${s}`),
                l.href);
        window.location.href = o;
    } catch (t) {
        window.location.href = e;
    }
}
