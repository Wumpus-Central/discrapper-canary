(a.d(e, { o: () => c }), a(323874), a(14289), a(35956));
var i = a(77729),
    n = a(723702),
    r = a(264572).Buffer;
async function c(t, e) {
    if (n.isPlatformEmbedded) {
        let a = r.from(await t.arrayBuffer());
        if ("function" == typeof i.A.fileManager.saveWithDialog2) await i.A.fileManager.saveWithDialog2(a, e);
        else
            try {
                await i.A.fileManager.saveWithDialog(a, e);
            } catch {}
        return;
    }
    let a = URL.createObjectURL(t);
    try {
        let t = document.createElement("a");
        ((t.href = a), (t.download = e), (t.rel = "noopener"), t.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
