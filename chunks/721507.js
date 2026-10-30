(a.d(t, { o: () => l }), a(323874), a(14289), a(35956));
var n = a(77729),
    i = a(723702),
    r = a(264572).Buffer;
async function l(e, t) {
    if (i.isPlatformEmbedded) {
        let a = r.from(await e.arrayBuffer());
        if ("function" == typeof n.A.fileManager.saveWithDialog2) await n.A.fileManager.saveWithDialog2(a, t);
        else
            try {
                await n.A.fileManager.saveWithDialog(a, t);
            } catch {}
        return;
    }
    let a = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = a), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
