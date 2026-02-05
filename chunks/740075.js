n.d(t, { A: () => a });
var i = n(64700),
    l = n(842209);
function a(e, t) {
    let n = i.useRef(null),
        a = i.useCallback((e, t) => {
            e.preventDefault(),
                e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)),
                e.clipboardData.setData("text/plain", n.current?.textContent?.trim() ?? "");
        }, []);
    return l.D3({ channel: e, type: "channel" }, t), { onCopy: a, copyRef: n };
}
