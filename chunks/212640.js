n.d(t, {
    NY: () => u,
    RZ: () => c,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(835245),
    i = n(562465),
    s = n(118356),
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
        let { origin: r } = new URL(o(e, t));
        return n
            .map((e) => o(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return r === t;
            });
    } catch (e) {
        return new s.Vy("Auth").error("Failed to check external redirect", e), !1;
    }
}
async function u(e) {
    let t = (0, r.A)();
    try {
        var n;
        let r,
            s,
            a = (
                await i.Bo.post({
                    url: l.Rsh.HANDOFF,
                    body: { key: t },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
            ).body.handoff_token,
            o =
                ((n = {
                    urlString: e,
                    handoffKey: t,
                    handoffToken: a,
                }),
                (r = new URL(n.urlString)),
                (s = "handoff_key="
                    .concat(encodeURIComponent(n.handoffKey), "&handoff_token=")
                    .concat(encodeURIComponent(n.handoffToken))),
                "" !== r.hash ? (r.hash += "&".concat(s)) : (r.hash = "#".concat(s)),
                r.href);
        window.location.href = o;
    } catch (t) {
        window.location.href = e;
    }
}
