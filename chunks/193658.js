"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    s = n(252452),
    a = n(775602),
    o = n(628965),
    l = n(355097),
    u = n(652215);
let c = Object.freeze({
        [l.Ew.ProfileCustomizationScrollPositions.TRY_IT_OUT]: u.nc_.PROFILE_CUSTOMIZATION,
        [l.Ew.ProfileCustomizationScrollPositions.GUILD_TAG]: u.nc_.PROFILE_CUSTOMIZATION,
        [l.Ew.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: u.nc_.ACCESSIBILITY,
        [l.Ew.AppearanceScrollPositions.CUSTOM_APP_ICONS]: u.nc_.APPEARANCE,
        [l.Ew.ContentAndSocialScrollPositions.DM_SAFETY_ALERTS_V2]: u.nc_.CONTENT_AND_SOCIAL,
        [l.Ew.ContentAndSocialScrollPositions.MESSAGE_REQUESTS_V2]: u.nc_.CONTENT_AND_SOCIAL,
        [l.Ew.ContentAndSocialScrollPositions.EXPLICIT_MEDIA_REDACTION_V2]: u.nc_.CONTENT_AND_SOCIAL,
        [l.Ew.ContentAndSocialScrollPositions.RESTRICTED_ACCOUNTS]: u.nc_.CONTENT_AND_SOCIAL,
    }),
    d = function (e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            u = (0, i.bG)([a.A], () => a.A.useReducedMotion),
            d = (0, i.bG)([o.A], () => o.A.getScrollPosition());
        (0, r.useEffect)(() => {
            let r = e.current;
            null != r &&
                t === d &&
                setTimeout(() => {
                    let e = requestAnimationFrame(() => {
                        r.scrollIntoView({ behavior: u ? "auto" : "smooth", ...n }), s.A.clearScrollPosition(c[t]);
                    });
                    return () => cancelAnimationFrame(e);
                }, l);
        }, [e, t, d, u, n, l]);
    };
