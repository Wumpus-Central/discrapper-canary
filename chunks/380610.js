n.d(t, {
    DI: () => h,
    bD: () => _,
    h4: () => T,
    hl: () => c,
    i_: () => u,
    k9: () => E,
    kK: () => A,
    qU: () => S,
    vS: () => f,
}),
    n(508300);
var i = n(664294),
    r = n(567243),
    a = n(636537),
    s = n(723702),
    l = n(998218),
    o = n(986238);
n(652215);
let d,
    c = (0, s.isAndroid)() ? d.Version.split(" - ")[0] : (0, s.isIOS)() ? d.Version : void 0;
function u(e) {
    return `${location.protocol}//${location.host}${e}`;
}
function _() {
    let e = l.A.safeParseWithQuery(u("/__development/build_overrides"));
    return null == e
        ? Promise.resolve(null)
        : ((e.search = null),
          c && (e.query.version = c),
          a.Bo.get({ url: r.format(e), oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => e.body || null,
              () => null,
          ));
}
function E(e) {
    if (T(e))
        return Promise.resolve(
            (function (e) {
                let t = e.match(p);
                if (null == t || 2 !== t.length) return null;
                let n = (0, s.getNativePlatform)();
                return {
                    targetBuildOverride: { [`discord_${n}`]: { type: "branch", id: t[1] } },
                    validForUserIds: [],
                    expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT",
                };
            })(e),
        );
    let t = l.A.safeParseWithQuery(e);
    return null == t
        ? Promise.resolve(null)
        : ((t.search = null),
          (t.query.meta = "true"),
          c && (t.query.version = c),
          (t.host = window.location.host),
          a.Bo.get({ url: r.format(t), oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => e.body || null,
              () => null,
          ));
}
function A() {
    return -1 !== window.document.cookie.indexOf(`${o.ZR}=`);
}
function h() {
    try {
        let e = i.parse(window.document.cookie)[o.ZR];
        if (null == e) return {};
        return JSON.parse(atob(e.substring(e.indexOf(".") + 1))).$meta.experiments ?? {};
    } catch (e) {
        return {};
    }
}
let I = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link/?\\?[\\S]+$", "i");
function f(e) {
    return null != e && I.test(e);
}
let p = RegExp("^dev://branch/([\\w-./]+)$", "i");
function T(e) {
    return null != e && p.test(e);
}
let m = new Set([
        "canary.discord.com",
        "ptb.discord.com",
        "discord.com",
        "canary.discordapp.com",
        "ptb.discordapp.com",
        "discordapp.com",
    ]),
    g = new Set(["/__development/link", "/__development/link/"]);
function S(e) {
    if (T(e)) return { payload: null, url: e };
    let t = l.A.safeParseWithQuery(e);
    if (null == t || !m.has(t.hostname) || !("s" in t.query) || !g.has(t.pathname)) return null;
    for (let e in t.query) "s" !== e && delete t.query[e];
    return { payload: t.query.s, url: r.format(t) };
}
