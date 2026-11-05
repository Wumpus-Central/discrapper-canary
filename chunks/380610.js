(n(508300), n(323874), n(14289), n(35956));
var i = n(664294),
    r = n(567243),
    a = n(620632),
    s = n(723702),
    l = n(998218),
    o = n(94977),
    d = n(986238);
n(652215);
let c,
    u = (0, s.m0)() ? c.Version.split(" - ")[0] : (0, s.un)() ? c.Version : void 0;
function _(e) {
    return `${location.protocol}//${location.host}${e}`;
}
let E = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link/?\\?[\\S]+$", "i"),
    A = RegExp("^dev://branch/([\\w-./]+)$", "i");
function f(e) {
    return null != e && A.test(e);
}
let h = new Set([
        "canary.discord.com",
        "ptb.discord.com",
        "discord.com",
        "canary.discordapp.com",
        "ptb.discordapp.com",
        "discordapp.com",
    ]),
    I = new Set(["/__development/link", "/__development/link/"]);
n.d(
    t,
    {},
    {
        DI: function () {
            try {
                let e = i.q(window.document.cookie)[d.ZR];
                if (null == e) return {};
                return JSON.parse(atob(e.substring(e.indexOf(".") + 1))).$meta.experiments ?? {};
            } catch (e) {
                return {};
            }
        },
        bD: function () {
            let e = l.A.safeParseWithQuery(_("/__development/build_overrides"));
            return null == e
                ? Promise.resolve(null)
                : ((e.search = null),
                  u && (e.query.version = u),
                  a.Bo.get({ url: r.GP(e), oldFormErrors: !0, rejectWithError: !1 }).then(
                      (e) => e.body || null,
                      () => null,
                  ));
        },
        h4: f,
        hl: u,
        i_: _,
        k9: function (e) {
            if ((0, o.e)(e)) return Promise.resolve((0, o.t)(e));
            if (f(e))
                return Promise.resolve(
                    (function (e) {
                        let t = e.match(A);
                        if (null == t || 2 !== t.length) return null;
                        let n = (0, s.r_)();
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
                  a.Bo.get({ url: r.GP(t), oldFormErrors: !0, rejectWithError: !1 }).then(
                      (e) => e.body || null,
                      () => null,
                  ));
        },
        kK: function () {
            return -1 !== window.document.cookie.indexOf(`${d.ZR}=`);
        },
        qU: function (e) {
            if ((0, o.e)(e)) return { payload: new URL(e).searchParams.get("s"), url: e };
            if (f(e)) return { payload: null, url: e };
            let t = l.A.safeParseWithQuery(e);
            if (null == t || !h.has(t.hostname) || !("s" in t.query) || !I.has(t.pathname)) return null;
            for (let e in t.query) "s" !== e && delete t.query[e];
            return { payload: t.query.s, url: r.GP(t) };
        },
        vS: function (e) {
            return null != e && (E.test(e) || (0, o.e)(e));
        },
    },
);
