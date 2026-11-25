(n(323874), n(14289), n(35956));
var l = n(582128),
    i = n(975807),
    a = n(853022),
    r = n(292702);
let s = "steam",
    o = /^\/app\/(\d+)(?:\/)?/,
    u = /^\/games\/store\/title\/([^/]+)/;
n.d(
    t,
    {},
    {
        A: function (e) {
            let [t, n] = l.useState(!1);
            return l.useCallback(
                async (l) => {
                    let c;
                    if (null == l) return;
                    try {
                        c = new URL(l);
                    } catch {
                        return;
                    }
                    let d = await (async function (e) {
                        if ("store.steampowered.com" === e.hostname && (await r.A.isProtocolRegistered(s))) {
                            let t = e.pathname.match(o)?.[1];
                            if (null != t) return `${s}://store/${t}`;
                        }
                        if (e.hostname === a.bH && (await r.A.isProtocolRegistered("msxbox"))) {
                            let t = e.pathname.match(u)?.[1];
                            if (null != t) return (0, a.b9)(decodeURIComponent(t));
                        }
                        return null;
                    })(c);
                    if (
                        (null != d && t && (d = null),
                        c.searchParams.set("utm_source", "discord"),
                        (l = c.toString()),
                        null != e)
                    )
                        e(l);
                    else if (null != d) {
                        var m;
                        let e;
                        ((m = d),
                            (e = setTimeout(() => n(!0), 5e3)),
                            window.addEventListener("blur", () => clearTimeout(e), { once: !0 }),
                            (0, i.A)(m));
                    } else (0, i.A)(l);
                },
                [e, t],
            );
        },
    },
);
