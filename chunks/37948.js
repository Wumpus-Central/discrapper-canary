n.d(t, { A: () => s }), n(323874), n(14289), n(35956);
var a = n(64700),
    l = n(25171);
let i = "steam",
    r = /^\/app\/(\d+)(?:\/)?/;
function s(e) {
    let t = (function (e) {
        let [t, n] = a.useState(!1);
        return (
            a.useEffect(() => {
                l.A.isProtocolRegistered(e).then(n);
            }, [e]),
            t
        );
    })(i);
    return a.useCallback(
        (n) => {
            let a;
            if (null != n) {
                try {
                    a = new URL(n);
                } catch {
                    return;
                }
                if ("store.steampowered.com" === a.hostname && t) {
                    let e = a.pathname.match(r)?.[1];
                    null != e && (n = `${i}://store/${e}`);
                } else a.searchParams.set("utm_source", "discord"), (n = a.toString());
                null != e ? e(n) : window.open(n, "_blank", "noreferrer noopener");
            }
        },
        [e, t],
    );
}
