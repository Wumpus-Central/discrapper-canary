"use strict";
n.d(t, { A: () => o }), n(323874), n(14289), n(35956);
var i = n(64700),
    r = n(738533);
let s = "steam",
    a = /^\/app\/(\d+)(?:\/)?/;
function o(e) {
    let t = (function (e) {
        let [t, n] = i.useState(!1);
        return (
            i.useEffect(() => {
                r.A.isProtocolRegistered(e).then(n);
            }, [e]),
            t
        );
    })(s);
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
                    let e = i.pathname.match(a)?.[1];
                    null != e && (n = `${s}://store/${e}`);
                } else i.searchParams.set("utm_source", "discord"), (n = i.toString());
                null != e ? e(n) : window.open(n, "_blank", "noreferrer noopener");
            }
        },
        [e, t],
    );
}
