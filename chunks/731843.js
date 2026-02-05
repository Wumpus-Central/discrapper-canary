"use strict";
n.d(t, { A: () => a });
var r = n(506774),
    i = n(652215);
function a(e, t) {
    if (0 === e.length) return "No logs";
    let n = r.w.get(i.Xlh),
        a = r.w.get(i.Ahp),
        s = null != n ? `Device Token: ${n}` : "",
        o = null != a ? `Device Voip Token: ${a}` : "",
        l = e
            .map((e) => {
                let n = e.silent ? "Silent" : "Displayed",
                    r = t ? `${e.channelId} - ${e.messageId}` : `${e.title} - ${e.content}`;
                return `${new Date(e.receivedTimestamp).toISOString()} [${e.type}] ${n} - ${r}`;
            })
            .join("\n");
    return `${s}
${o}

${l}`;
}
