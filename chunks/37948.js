n.d(t, { A: () => s }), n(323874), n(14289), n(35956);
var l = n(64700),
    a = n(25171);
let i = "steam",
    r = /^\/app\/(\d+)(?:\/)?/;
function s(e) {
    let t = (function (e) {
        let [t, n] = l.useState(!1);
        return (
            l.useEffect(() => {
                a.A.isProtocolRegistered(e).then(n);
            }, [e]),
            t
        );
    })(i);
    return l.useCallback(
        (n) => {
            let l;
            if (null != n) {
                try {
                    l = new URL(n);
                } catch {
                    return;
                }
                if ("store.steampowered.com" === l.hostname && t) {
                    let e = l.pathname.match(r)?.[1];
                    null != e && (n = `${i}://store/${e}`);
                } else l.searchParams.set("utm_source", "discord"), (n = l.toString());
                null != e ? e(n) : window.open(n, "_blank", "noreferrer noopener");
            }
        },
        [e, t],
    );
}
