n.d(t, { JR: () => _, P5: () => f, Qg: () => I, Qs: () => c, Xm: () => h, jS: () => A, yZ: () => E, yf: () => m });
var l = n(485845),
    i = n(136722),
    r = n(20015),
    u = n(951178),
    o = n(696645),
    a = n(373677),
    s = n(652215);
let d =
    221552 == n.j
        ? {
              frame: (e) => e.hasFrame,
              widget: (e) => e.hasProfileWidget,
              overlay: (e) => !0 === e.hasOverlay,
              bot: (e) => !0 === e.hasBotDm,
          }
        : null;
function f(e, t) {
    let { legacy: n, widgetResolvable: l, botDmResolvable: i } = t;
    return null == e || 0 === e.length
        ? n
        : {
              hasFrame: (0, a.Hc)(e),
              hasProfileWidget: l && e.includes(u.q7.PROFILE_WIDGET),
              hasBotDm: i && (e.includes(u.q7.BOT) || e.includes(u.q7.APPLICATION_COMMANDS)),
          };
}
function h(e) {
    let t = o.N.filter((t) => d[t](e));
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
function c(e, t) {
    return null != e && t.modes.includes(e) ? e : t.defaultMode;
}
function m(e, t) {
    return ("frame" === t && e.modes.includes("frame")) || 0 === e.modes.length;
}
function E(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function I(e) {
    let { installScope: t, previewReady: n, integrationInstalled: l, botPermissionsChanged: i } = e;
    return !!n && null != l && (!!i || ("user" !== t && !l));
}
let g = [s.gfo.GATEWAY_PRESENCE_LIMITED, s.gfo.GATEWAY_GUILD_MEMBERS_LIMITED, s.gfo.GATEWAY_MESSAGE_CONTENT_LIMITED];
function A(e) {
    if (null == e) return !1;
    let t =
        e.integrationTypesConfig?.[l.b.GUILD_INSTALL]?.oauth2InstallParams?.permissions ?? e.installParams?.permissions;
    return !(null == t || i.aI(i.iu(t), i.BY)) || g.some((t) => (0, r.n)(e, t));
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return !!t && (!!l || "bot" === e || (n && "frame" === e));
}
