n.d(t, { _z: () => g, QX: () => m, PU: () => p, Ld: () => T });
var i = n(158390),
    r = n(620632),
    a = n(611599),
    s = n(73153),
    l = n(927813),
    o = n(856383);
let d = (0, n(945810).mj)({
    kind: "user",
    name: "2026-07-parental-consent-warning-fetch",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var c = n(577517);
let u = new a.Vy("ParentalConsentWarning"),
    _ = new i.A(5 * l.A.Millis.SECOND, 5 * l.A.Millis.MINUTE, !0),
    E = null,
    A = null,
    f = 0;
function h() {
    null != A && (clearTimeout(A), (A = null));
}
function I() {
    if (!d.getConfig({ location: "parental_consent_warning_manager" }).enabled) return Promise.resolve();
    if (null != E) return E;
    let e = f;
    return (E = (async () => {
        try {
            var t;
            let n = await r.Bo.get({ url: "/users/@me/parental-consent/warning", rejectWithError: !0 });
            if (e !== f) return;
            let i =
                ((t = n.body),
                {
                    inGrace: !0 === t.in_grace,
                    daysRemaining: "number" == typeof t.days_remaining ? t.days_remaining : null,
                    surfaces: Array.isArray(t.surfaces) ? t.surfaces : [],
                });
            (_.succeed(), h(), s.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning: i }));
        } catch (t) {
            if (e !== f) return;
            (u.error("Failed to fetch parental-consent warning", t),
                o.A.captureException(t, { tags: { source: "parental_consent_warning", step: "fetch_warning" } }),
                null == A &&
                    (A = setTimeout(() => {
                        ((A = null), p());
                    }, _.fail())));
        } finally {
            e === f && (E = null);
        }
    })());
}
async function p() {
    null == E && null == A && c.A.shouldFetchToday() && (await I());
}
async function m() {
    (h(), null != E && (f++, (E = null)), await I());
}
function T() {
    (f++, h(), (E = null), _.succeed());
}
function g() {
    s.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_CLEARED" });
}
