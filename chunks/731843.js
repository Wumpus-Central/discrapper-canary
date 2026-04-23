"use strict";
n.d(t, { A: () => s });
var r = n(506774),
    i = n(652215);
function s(e, t) {
    if (0 === e.length) return "No logs";
    let n = r.w.get(i.Xlh),
        s = r.w.get(i.Ahp),
        a = null != n ? `Device Token: ${n}` : "",
        o = null != s ? `Device Voip Token: ${s}` : "",
        l = e
            .map((e) => {
                let n = e.silent ? "Silent" : "Displayed",
                    r = t ? `${e.channelId} - ${e.messageId}` : `${e.title} - ${e.content}`;
                return `${new Date(e.receivedTimestamp).toISOString()} [${e.type}] ${n} - ${r}`;
            })
            .join("\n");
    return `${a}
${o}

${l}`;
}
