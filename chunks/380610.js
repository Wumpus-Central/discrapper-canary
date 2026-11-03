(n.d(t, {
    DI: () => f,
    bD: () => E,
    h4: () => T,
    hl: () => u,
    i_: () => _,
    k9: () => A,
    kK: () => h,
    qU: () => N,
    vS: () => p,
}),
    n(508300),
    n(323874),
    n(14289),
    n(35956));
var i = n(664294),
    r = n(567243),
    a = n(636537),
    s = n(723702),
    l = n(998218),
    o = n(94977),
    d = n(986238);
n(652215);
let c,
    u = (0, s.isAndroid)() ? c.Version.split(" - ")[0] : (0, s.isIOS)() ? c.Version : void 0;
function _(e) {
    return `${location.protocol}//${location.host}${e}`;
}
function E() {
    let e = l.A.safeParseWithQuery(_("/__development/build_overrides"));
    return null == e
        ? Promise.resolve(null)
        : ((e.search = null),
          u && (e.query.version = u),
          a.Bo.get({ url: r.format(e), oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => e.body || null,
              () => null,
          ));
}
function A(e) {
    if ((0, o.e)(e)) return Promise.resolve((0, o.t)(e));
    if (T(e))
        return Promise.resolve(
            (function (e) {
                let t = e.match(m);
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
          u && (t.query.version = u),
          (t.host = window.location.host),
          a.Bo.get({ url: r.format(t), oldFormErrors: !0, rejectWithError: !1 }).then(
              (e) => e.body || null,
              () => null,
          ));
}
function h() {
    return -1 !== window.document.cookie.indexOf(`${d.ZR}=`);
}
function f() {
    try {
        let e = i.parse(window.document.cookie)[d.ZR];
        if (null == e) return {};
        return JSON.parse(atob(e.substring(e.indexOf(".") + 1))).$meta.experiments ?? {};
    } catch (e) {
        return {};
    }
}
let I = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link/?\\?[\\S]+$", "i");
function p(e) {
    return null != e && (I.test(e) || (0, o.e)(e));
}
let m = RegExp("^dev://branch/([\\w-./]+)$", "i");
function T(e) {
    return null != e && m.test(e);
}
let g = new Set([
        "canary.discord.com",
        "ptb.discord.com",
        "discord.com",
        "canary.discordapp.com",
        "ptb.discordapp.com",
        "discordapp.com",
    ]),
    S = new Set(["/__development/link", "/__development/link/"]);
function N(e) {
    if ((0, o.e)(e)) return { payload: new URL(e).searchParams.get("s"), url: e };
    if (T(e)) return { payload: null, url: e };
    let t = l.A.safeParseWithQuery(e);
    if (null == t || !g.has(t.hostname) || !("s" in t.query) || !S.has(t.pathname)) return null;
    for (let e in t.query) "s" !== e && delete t.query[e];
    return { payload: t.query.s, url: r.format(t) };
}
