"use strict";
n.d(t, { Cf: () => _, PI: () => h, Vv: () => f, o$: () => d, tp: () => p, zU: () => c });
var r = n(311907),
    i = n(36149),
    a = n(191541),
    s = n(734057),
    o = n(576705),
    l = n(309010),
    u = n(818348);
function c() {
    let e = (0, i.yM)();
    return (0, a.f)("useIsStageSpeakingDisabledForCurrentUser") && e;
}
function d() {
    let e = (0, i.NI)();
    return (0, a.W)("isStageSpeakingDisabledForCurrentUser") && e;
}
function _(e) {
    let t = (0, i.$8)(),
        n = null != e ? e : l.A.getChannelId(),
        r = null != n ? s.A.getChannel(n) : null,
        c = null != r && o.A.can(u.xB.REQUEST_TO_SPEAK, r);
    return (0, a.W)("shouldAgeVerifyToSpeakForCurrentUser") && !t && c;
}
function f(e) {
    let t = null != e ? e : l.A.getChannelId(),
        n = (0, r.bG)([o.A, s.A], () => {
            let e = null != t ? s.A.getChannel(t) : null;
            return null != e && o.A.can(u.xB.REQUEST_TO_SPEAK, e);
        }, [t]),
        c = (0, i.uE)();
    return (0, a.f)("useShouldAgeVerifyToSpeakForCurrentUser") && !c && n;
}
function p(e) {
    let t = null != e ? e : l.A.getChannelId(),
        n = (0, r.bG)([o.A, s.A], () => {
            let e = null != t ? s.A.getChannel(t) : null;
            return null != e && o.A.can(u.xB.REQUEST_TO_SPEAK, e);
        }, [t]),
        c = (0, i.b8)();
    return (0, a.f)("useShouldShowAgeVerificationPopover") && !c && n;
}
function h() {
    let e = (0, i.uE)();
    return (0, a.f)("useShouldShowAgeVerificationForEvent") && !e;
}
