(n.d(t, { A: () => d }), n(323874), n(14289), n(35956));
var l = n(582128),
    r = n(975807),
    o = n(853022),
    a = n(738533);
let i = "steam",
    s = /^\/app\/(\d+)(?:\/)?/,
    u = /^\/games\/store\/title\/([^/]+)/;
async function c(e) {
    if ("store.steampowered.com" === e.hostname && (await a.A.isProtocolRegistered(i))) {
        let t = e.pathname.match(s)?.[1];
        if (null != t) return `${i}://store/${t}`;
    }
    if (e.hostname === o.bH && (await a.A.isProtocolRegistered("msxbox"))) {
        let t = e.pathname.match(u)?.[1];
        if (null != t) return (0, o.b9)(decodeURIComponent(t));
    }
    return null;
}
function d(e) {
    let [t, n] = l.useState(!1);
    return l.useCallback(
        async (l) => {
            let o;
            if (null == l) return;
            try {
                o = new URL(l);
            } catch {
                return;
            }
            let a = await c(o);
            if (
                (null != a && t && (a = null),
                o.searchParams.set("utm_source", "discord"),
                (l = o.toString()),
                null != e)
            )
                e(l);
            else if (null != a) {
                var i;
                let e;
                ((i = a),
                    (e = setTimeout(() => n(!0), 5e3)),
                    window.addEventListener("blur", () => clearTimeout(e), { once: !0 }),
                    (0, r.A)(i));
            } else (0, r.A)(l);
        },
        [e, t],
    );
}
