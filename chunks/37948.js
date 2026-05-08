"use strict";
n.d(t, { A: () => d }), n(323874), n(14289), n(35956);
var l = n(64700),
    i = n(975807),
    s = n(853022),
    r = n(738533);
let a = "steam",
    o = /^\/app\/(\d+)(?:\/)?/,
    c = /^\/games\/store\/title\/([^/]+)/;
async function u(e) {
    if ("store.steampowered.com" === e.hostname && (await r.A.isProtocolRegistered(a))) {
        let t = e.pathname.match(o)?.[1];
        if (null != t) return `${a}://store/${t}`;
    }
    if (e.hostname === s.bH && (await r.A.isProtocolRegistered("msxbox"))) {
        let t = e.pathname.match(c)?.[1];
        if (null != t) return (0, s.b9)(decodeURIComponent(t));
    }
    return null;
}
function d(e) {
    let [t, n] = l.useState(!1);
    return l.useCallback(
        async (l) => {
            let s;
            if (null == l) return;
            try {
                s = new URL(l);
            } catch {
                return;
            }
            let r = await u(s);
            if (
                (null != r && t && (r = null),
                s.searchParams.set("utm_source", "discord"),
                (l = s.toString()),
                null != e)
            )
                e(l);
            else if (null != r) {
                var a;
                let e;
                (a = r),
                    (e = setTimeout(() => n(!0), 5e3)),
                    window.addEventListener("blur", () => clearTimeout(e), { once: !0 }),
                    (0, i.A)(a);
            } else (0, i.A)(l);
        },
        [e, t],
    );
}
