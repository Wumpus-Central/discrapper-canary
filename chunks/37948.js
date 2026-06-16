"use strict";
n.d(t, { A: () => d }), n(323874), n(14289), n(35956);
var l = n(64700),
    i = n(975807),
    r = n(853022),
    s = n(738533);
let a = "steam",
    o = /^\/app\/(\d+)(?:\/)?/,
    u = /^\/games\/store\/title\/([^/]+)/;
async function c(e) {
    if ("store.steampowered.com" === e.hostname && (await s.A.isProtocolRegistered(a))) {
        let t = e.pathname.match(o)?.[1];
        if (null != t) return `${a}://store/${t}`;
    }
    if (e.hostname === r.bH && (await s.A.isProtocolRegistered("msxbox"))) {
        let t = e.pathname.match(u)?.[1];
        if (null != t) return (0, r.b9)(decodeURIComponent(t));
    }
    return null;
}
function d(e) {
    let [t, n] = l.useState(!1);
    return l.useCallback(
        async (l) => {
            let r;
            if (null == l) return;
            try {
                r = new URL(l);
            } catch {
                return;
            }
            let s = await c(r);
            if (
                (null != s && t && (s = null),
                r.searchParams.set("utm_source", "discord"),
                (l = r.toString()),
                null != e)
            )
                e(l);
            else if (null != s) {
                var a;
                let e;
                (a = s),
                    (e = setTimeout(() => n(!0), 5e3)),
                    window.addEventListener("blur", () => clearTimeout(e), { once: !0 }),
                    (0, i.A)(a);
            } else (0, i.A)(l);
        },
        [e, t],
    );
}
