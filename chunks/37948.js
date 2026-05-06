"use strict";
n.d(t, { A: () => l }), n(323874), n(14289), n(35956);
var i = n(64700),
    r = n(975807),
    s = n(738533);
let a = "steam",
    o = /^\/app\/(\d+)(?:\/)?/;
function l(e) {
    let t = (function (e) {
        let [t, n] = i.useState(!1);
        return (
            i.useEffect(() => {
                s.A.isProtocolRegistered(e).then(n);
            }, [e]),
            t
        );
    })(a);
    return i.useCallback(
        (n) => {
            let i;
            if (null != n) {
                try {
                    i = new URL(n);
                } catch {
                    return;
                }
                if ("store.steampowered.com" === i.hostname && t) {
                    let t = i.pathname.match(o)?.[1];
                    if (null != t) {
                        let n = `${a}://store/${t}`;
                        if (null != e) return void e(n);
                        i.searchParams.set("utm_source", "discord");
                        let s = i.toString(),
                            o = setTimeout(() => {
                                (0, r.A)(s);
                            }, 2500);
                        return (
                            window.addEventListener("blur", () => clearTimeout(o), { once: !0 }),
                            void (window.location.href = n)
                        );
                    }
                }
                i.searchParams.set("utm_source", "discord"), (n = i.toString()), null != e ? e(n) : (0, r.A)(n);
            }
        },
        [e, t],
    );
}
