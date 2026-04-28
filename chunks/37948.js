l.d(t, { A: () => r }), l(323874), l(14289), l(35956);
var n = l(64700),
    i = l(738533);
let s = "steam",
    a = /^\/app\/(\d+)(?:\/)?/;
function r(e) {
    let t = (function (e) {
        let [t, l] = n.useState(!1);
        return (
            n.useEffect(() => {
                i.A.isProtocolRegistered(e).then(l);
            }, [e]),
            t
        );
    })(s);
    return n.useCallback(
        (l) => {
            let n;
            if (null != l) {
                try {
                    n = new URL(l);
                } catch {
                    return;
                }
                if ("store.steampowered.com" === n.hostname && t) {
                    let e = n.pathname.match(a)?.[1];
                    null != e && (l = `${s}://store/${e}`);
                } else n.searchParams.set("utm_source", "discord"), (l = n.toString());
                null != e ? e(l) : window.open(l, "_blank", "noreferrer noopener");
            }
        },
        [e, t],
    );
}
