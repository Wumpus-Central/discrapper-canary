(n(323874), n(14289), n(35956));
var l = n(582128),
    r = n(975807),
    o = n(853022),
    a = n(292702);
let i = "steam",
    s = /^\/app\/(\d+)(?:\/)?/,
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
                        if ("store.steampowered.com" === e.hostname && (await a.A.isProtocolRegistered(i))) {
                            let t = e.pathname.match(s)?.[1];
                            if (null != t) return `${i}://store/${t}`;
                        }
                        if (e.hostname === o.bH && (await a.A.isProtocolRegistered("msxbox"))) {
                            let t = e.pathname.match(u)?.[1];
                            if (null != t) return (0, o.b9)(decodeURIComponent(t));
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
                        var E;
                        let e;
                        ((E = d),
                            (e = setTimeout(() => n(!0), 5e3)),
                            window.addEventListener("blur", () => clearTimeout(e), { once: !0 }),
                            (0, r.A)(E));
                    } else (0, r.A)(l);
                },
                [e, t],
            );
        },
    },
);
