"use strict";
n.d(t, { A: () => u }), n(323874), n(14289), n(35956);
var i = n(64700),
    r = n(975807),
    s = n(738533);
let a = "steam",
    o = /^\/app\/(\d+)(?:\/)?/;
async function l(e) {
    if ("store.steampowered.com" === e.hostname && (await s.A.isProtocolRegistered(a))) {
        let t = e.pathname.match(o)?.[1];
        if (null != t) return `${a}://store/${t}`;
    }
    return null;
}
function u(e) {
    let [t, n] = i.useState(!1);
    return i.useCallback(
        async (i) => {
            let s;
            if (null == i) return;
            try {
                s = new URL(i);
            } catch {
                return;
            }
            let a = await l(s);
            if (
                (null != a && t && (a = null),
                s.searchParams.set("utm_source", "discord"),
                (i = s.toString()),
                null != e)
            )
                e(i);
            else if (null != a) {
                var o;
                let e;
                (o = a),
                    (e = setTimeout(() => n(!0), 5e3)),
                    window.addEventListener("blur", () => clearTimeout(e), { once: !0 }),
                    (0, r.A)(o);
            } else (0, r.A)(i);
        },
        [e, t],
    );
}
