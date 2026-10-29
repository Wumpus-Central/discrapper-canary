(i.d(e, { o: () => l }), i(323874), i(14289), i(35956));
var a = i(77729),
    n = i(723702),
    r = i(264572).Buffer;
async function l(t, e) {
    if (n.isPlatformEmbedded) {
        let i = r.from(await t.arrayBuffer());
        if ("function" == typeof a.A.fileManager.saveWithDialog2) await a.A.fileManager.saveWithDialog2(i, e);
        else
            try {
                await a.A.fileManager.saveWithDialog(i, e);
            } catch {}
        return;
    }
    let i = URL.createObjectURL(t);
    try {
        let t = document.createElement("a");
        ((t.href = i), (t.download = e), (t.rel = "noopener"), t.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(i), 0);
    }
}
