n.d(t, { A: () => p });
var r = n(64700),
    i = n(311907),
    a = n(252452),
    s = n(775602),
    o = n(628965),
    l = n(355097),
    c = n(652215);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = Object.freeze({
        [l.Ew.ProfileCustomizationScrollPositions.TRY_IT_OUT]: c.nc_.PROFILE_CUSTOMIZATION,
        [l.Ew.ProfileCustomizationScrollPositions.GUILD_TAG]: c.nc_.PROFILE_CUSTOMIZATION,
        [l.Ew.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: c.nc_.ACCESSIBILITY,
        [l.Ew.AppearanceScrollPositions.CUSTOM_APP_ICONS]: c.nc_.APPEARANCE,
        [l.Ew.ContentAndSocialScrollPositions.DM_SAFETY_ALERTS_V2]: c.nc_.CONTENT_AND_SOCIAL,
        [l.Ew.ContentAndSocialScrollPositions.MESSAGE_REQUESTS_V2]: c.nc_.CONTENT_AND_SOCIAL,
        [l.Ew.ContentAndSocialScrollPositions.EXPLICIT_MEDIA_REDACTION_V2]: c.nc_.CONTENT_AND_SOCIAL,
        [l.Ew.ContentAndSocialScrollPositions.RESTRICTED_ACCOUNTS]: c.nc_.CONTENT_AND_SOCIAL,
        [l.Ew.AccountScrollPositions.DISABLE_ACCOUNT]: c.nc_.ACCOUNT,
    }),
    p = function (e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            c = (0, i.bG)([s.A], () => s.A.useReducedMotion),
            u = (0, i.bG)([o.A], () => o.A.getScrollPosition());
        (0, r.useEffect)(() => {
            let r = e.current;
            null != r &&
                t === u &&
                setTimeout(() => {
                    let e = requestAnimationFrame(() => {
                        r.scrollIntoView(d({ behavior: c ? "auto" : "smooth" }, n)), a.A.clearScrollPosition(f[t]);
                    });
                    return () => cancelAnimationFrame(e);
                }, l);
        }, [e, t, u, c, n, l]);
    };
