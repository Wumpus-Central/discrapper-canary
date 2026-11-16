(n(508300), n(323874), n(14289), n(35956));
var i = n(664294),
    r = n(567243),
    a = n(620632),
    s = n(403362),
    l = n(723702),
    o = n(998218),
    d = n(94977),
    c = n(986238);
n(652215);
let u,
    _ = (0, l.m0)() ? u.Version.split(" - ")[0] : (0, l.un)() ? u.Version : void 0;
function E(e) {
    return `${location.protocol}//${location.host}${e}`;
}
let A = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link/?\\?[\\S]+$", "i"),
    f = RegExp("^dev://branch/([\\w-./]+)$", "i");
function h(e) {
    return null != e && f.test(e);
}
let I = new Set([
        "canary.discord.com",
        "ptb.discord.com",
        "discord.com",
        "canary.discordapp.com",
        "ptb.discordapp.com",
        "discordapp.com",
    ]),
    p = new Set(["/__development/link", "/__development/link/"]);
n.d(
    t,
    {},
    {
        DI: function () {
            try {
                let e = i.q(window.document.cookie)[c.ZR];
                if (null == e) return {};
                return JSON.parse(atob(e.substring(e.indexOf(".") + 1))).$meta.experiments ?? {};
            } catch (e) {
                return {};
            }
        },
        bD: function () {
            if ((0, s.iT)()) return Promise.resolve(null);
            let e = o.A.safeParseWithQuery(E("/__development/build_overrides"));
            return null == e
                ? Promise.resolve(null)
                : ((e.search = null),
                  _ && (e.query.version = _),
                  a.Bo.get({ url: r.GP(e), oldFormErrors: !0, rejectWithError: !1 }).then(
                      (e) => e.body || null,
                      () => null,
                  ));
        },
        h4: h,
        hl: _,
        i_: E,
        k9: function (e) {
            if ((0, d.e)(e)) return Promise.resolve((0, d.t)(e));
            if (h(e))
                return Promise.resolve(
                    (function (e) {
                        let t = e.match(f);
                        if (null == t || 2 !== t.length) return null;
                        let n = (0, l.r_)();
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
                  _ && (t.query.version = _),
                  (t.host = window.location.host),
                  a.Bo.get({ url: r.GP(t), oldFormErrors: !0, rejectWithError: !1 }).then(
                      (e) => e.body || null,
                      () => null,
                  ));
        },
        kK: function () {
            return -1 !== window.document.cookie.indexOf(`${c.ZR}=`);
        },
        qU: function (e) {
            if ((0, d.e)(e)) return { payload: new URL(e).searchParams.get("s"), url: e };
            if (h(e)) return { payload: null, url: e };
            let t = o.A.safeParseWithQuery(e);
            if (null == t || !I.has(t.hostname) || !("s" in t.query) || !p.has(t.pathname)) return null;
            for (let e in t.query) "s" !== e && delete t.query[e];
            return { payload: t.query.s, url: r.GP(t) };
        },
        vS: function (e) {
            return null != e && (A.test(e) || (0, d.e)(e));
        },
    },
);
