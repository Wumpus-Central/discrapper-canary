n.d(t, {
    A: () => a,
});
var r = n(506774),
    i = n(652215);

function a(e, t) {
    if (0 === e.length) return "No logs";
    let n = r.w.get(i.Xlh),
        a = r.w.get(i.Ahp),
        s = null != n ? "Device Token: ".concat(n) : "",
        o = null != a ? "Device Voip Token: ".concat(a) : "",
        l = e
            .map((e) => {
                let n = e.silent ? "Silent" : "Displayed",
                    r = t
                        ? "".concat(e.channelId, " - ").concat(e.messageId)
                        : "".concat(e.title, " - ").concat(e.content);
                return ""
                    .concat(new Date(e.receivedTimestamp).toISOString(), " [")
                    .concat(e.type, "] ")
                    .concat(n, " - ")
                    .concat(r);
            })
            .join("\n");
    return "".concat(s, "\n").concat(o, "\n\n").concat(l);
}
