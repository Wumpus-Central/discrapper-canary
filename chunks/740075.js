"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    r = n(842209);
function s(e, t) {
    let n = i.useRef(null),
        s = i.useCallback((e, t) => {
            e.preventDefault(),
                e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)),
                e.clipboardData.setData("text/plain", n.current?.textContent?.trim() ?? "");
        }, []);
    return r.D3({ channel: e, type: "channel" }, t), { onCopy: s, copyRef: n };
}
