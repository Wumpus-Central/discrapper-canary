n.d(t, {
    Eu: () => c,
    Pq: () => u,
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(772848),
    i = n(544891),
    s = n(579092),
    l = n(981631);
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
        return new s.Yd("Auth").error("Failed to check external redirect", e), !1;
    }
}
async function u(e) {
    let t = (0, r.Z)();
    try {
        let n = (
                await i.tn.post({
                    url: l.ANM.HANDOFF,
                    body: { key: t },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
            ).body.handoff_token,
            r = (function (e) {
                let t = new URL(e.urlString),
                    n = "handoff_key="
                        .concat(encodeURIComponent(e.handoffKey), "&handoff_token=")
                        .concat(encodeURIComponent(e.handoffToken));
                return "" !== t.hash ? (t.hash += "&".concat(n)) : (t.hash = "#".concat(n)), t.href;
            })({
                urlString: e,
                handoffKey: t,
                handoffToken: n,
            });
        window.location.href = r;
    } catch (t) {
        window.location.href = e;
    }
}
