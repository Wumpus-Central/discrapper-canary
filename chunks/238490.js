n.d(t, { JR: () => N, P5: () => a, Qg: () => f, Qs: () => d, Xm: () => o, yZ: () => s, yf: () => c });
var r = n(164892),
    l = n(696645),
    u = n(373677);
let i =
    221552 == n.j
        ? {
              frame: (e) => e.hasFrame,
              widget: (e) => e.hasProfileWidget,
              overlay: (e) => !0 === e.hasOverlay,
              bot: (e) => !0 === e.hasBotDm,
          }
        : null;
function a(e, t) {
    let { legacy: n, widgetResolvable: l, botDmResolvable: i } = t;
    return null == e || 0 === e.length
        ? n
        : {
              hasFrame: (0, u.Hc)(e),
              hasProfileWidget: l && e.includes(r.q7.PROFILE_WIDGET),
              hasBotDm: i && (e.includes(r.q7.BOT) || e.includes(r.q7.APPLICATION_COMMANDS)),
          };
}
function o(e) {
    let t = l.NK.filter((t) => i[t](e));
    return {
        modes: t,
        defaultMode: t[0] ?? null,
        showModeSwitch: t.length > 1,
        profileState: (function (e) {
            let { installScope: t, ownerAuthorizationRevoked: n } = e;
            return "user" === t && !0 === n ? "unavailable-authorization-revoked" : "available";
        })(e),
    };
}
function d(e, t) {
    return null != e && t.modes.includes(e) ? e : t.defaultMode;
}
function c(e, t) {
    return ("frame" === t && e.modes.includes("frame")) || 0 === e.modes.length;
}
function s(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function f(e) {
    let { installScope: t, previewReady: n, integrationInstalled: r, botPermissionsChanged: l } = e;
    return !!n && null != r && (!!l || ("user" !== t && !r));
}
function N(e, t) {
    return t && "bot" === e;
}
