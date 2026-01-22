n.d(t, { A: () => a }), n(457529), n(733351);
var r = n(64700),
    i = n(842209);
function a(e, t) {
    let n = r.useRef(null),
        a = r.useCallback((e, t) => {
            var r, i, a;
            e.preventDefault(),
                e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)),
                e.clipboardData.setData(
                    "text/plain",
                    null != (r = null == (a = n.current) || null == (i = a.textContent) ? void 0 : i.trim()) ? r : "",
                );
        }, []);
    return (
        i.D3(
            {
                channel: e,
                type: "channel",
            },
            t,
        ),
        {
            onCopy: a,
            copyRef: n,
        }
    );
}
