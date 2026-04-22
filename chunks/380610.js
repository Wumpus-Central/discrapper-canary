"use strict";
n.d(t, {
    DI: () => h,
    bD: () => _,
    h4: () => A,
    hl: () => d,
    i_: () => c,
    k9: () => f,
    kK: () => E,
    qU: () => S,
    vS: () => m,
}),
    n(508300);
var r = n(664294),
    i = n(567243),
    s = n(562465),
    a = n(723702),
    o = n(998218),
    l = n(986238);
n(652215);
let u,
    d = (0, a.isAndroid)() ? u.Version.split(" - ")[0] : (0, a.isIOS)() ? u.Version : void 0;
function c(e) {
    return `${location.protocol}//${location.host}${e}`;
}
function _() {
    let e = o.A.safeParseWithQuery(c("/__development/build_overrides"));
    return null == e
        ? Promise.resolve(null)
        : ((e.search = null),
          d && (e.query.version = d),
          s.Bo.get({ url: i.format(e), oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => e.body || null,
              () => null,
          ));
}
function f(e) {
    if (A(e))
        return Promise.resolve(
            (function (e) {
                let t = e.match(g);
                if (null == t || 2 !== t.length) return null;
                let n = (0, a.getNativePlatform)();
                return {
                    targetBuildOverride: { [`discord_${n}`]: { type: "branch", id: t[1] } },
                    validForUserIds: [],
                    expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT",
                };
            })(e),
        );
    let t = o.A.safeParseWithQuery(e);
    return null == t
        ? Promise.resolve(null)
        : ((t.search = null),
          (t.query.meta = "true"),
          d && (t.query.version = d),
          (t.host = window.location.host),
          s.Bo.get({ url: i.format(t), oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => e.body || null,
              () => null,
          ));
}
function E() {
    return -1 !== window.document.cookie.indexOf(`${l.ZR}=`);
}
function h() {
    try {
        let e = r.parse(window.document.cookie)[l.ZR];
        if (null == e) return {};
        return JSON.parse(atob(e.substring(e.indexOf(".") + 1))).$meta.experiments ?? {};
    } catch (e) {
        return {};
    }
}
let p = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");
function m(e) {
    return null != e && p.test(e);
}
let g = RegExp("^dev://branch/([\\w-./]+)$", "i");
function A(e) {
    return null != e && g.test(e);
}
let I = new Set([
        "canary.discord.com",
        "ptb.discord.com",
        "discord.com",
        "canary.discordapp.com",
        "ptb.discordapp.com",
        "discordapp.com",
    ]),
    T = new Set(["/__development/link", "/__development/link/"]);
function S(e) {
    if (A(e)) return { payload: null, url: e };
    let t = o.A.safeParseWithQuery(e);
    if (null == t || !I.has(t.hostname) || !("s" in t.query) || !T.has(t.pathname)) return null;
    for (let e in t.query) "s" !== e && delete t.query[e];
    return { payload: t.query.s, url: i.format(t) };
}
