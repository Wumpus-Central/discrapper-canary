"use strict";
n.d(t, {
    DI: () => m,
    bD: () => f,
    h4: () => I,
    hl: () => d,
    i_: () => _,
    k9: () => p,
    kK: () => h,
    qU: () => C,
    vS: () => E,
}),
    n(508300);
var r = n(664294),
    i = n(567243),
    a = n(562465),
    s = n(723702),
    o = n(998218),
    l = n(986238);
n(652215);
let u,
    c = "/__development/build_overrides",
    d = (0, s.isAndroid)() ? u.Version.split(" - ")[0] : (0, s.isIOS)() ? u.Version : void 0;
function _(e) {
    return `${location.protocol}//${location.host}${e}`;
}
function f() {
    let e = o.A.safeParseWithQuery(_(c));
    return null == e
        ? Promise.resolve(null)
        : ((e.search = null),
          d && (e.query.version = d),
          a.Bo.get({ url: i.format(e), oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => e.body || null,
              () => null,
          ));
}
function p(e) {
    if (I(e)) return Promise.resolve(T(e));
    let t = o.A.safeParseWithQuery(e);
    return null == t
        ? Promise.resolve(null)
        : ((t.search = null),
          (t.query.meta = "true"),
          d && (t.query.version = d),
          (t.host = window.location.host),
          a.Bo.get({ url: i.format(t), oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => e.body || null,
              () => null,
          ));
}
function h() {
    return -1 !== window.document.cookie.indexOf(`${l.ZR}=`);
}
function m() {
    try {
        let e = r.parse(window.document.cookie)[l.ZR];
        if (null == e) return {};
        return JSON.parse(atob(e.substring(e.indexOf(".") + 1))).$meta.experiments ?? {};
    } catch (e) {
        return {};
    }
}
let g = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");
function E(e) {
    return null != e && g.test(e);
}
let A = RegExp("^dev://branch/([\\w-./]+)$", "i");
function I(e) {
    return null != e && A.test(e);
}
function T(e) {
    let t = e.match(A);
    if (null == t || 2 !== t.length) return null;
    let n = (0, s.getNativePlatform)();
    return {
        targetBuildOverride: { [`discord_${n}`]: { type: "branch", id: t[1] } },
        validForUserIds: [],
        expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT",
    };
}
let y = "s",
    S = new Set([
        "canary.discord.com",
        "ptb.discord.com",
        "discord.com",
        "canary.discordapp.com",
        "ptb.discordapp.com",
        "discordapp.com",
    ]),
    v = new Set(["/__development/link", "/__development/link/"]);
function C(e) {
    if (I(e)) return { payload: null, url: e };
    let t = o.A.safeParseWithQuery(e);
    if (null == t || !S.has(t.hostname) || !(y in t.query) || !v.has(t.pathname)) return null;
    for (let e in t.query) e !== y && delete t.query[e];
    return { payload: t.query[y], url: i.format(t) };
}
