(n.d(t, { F: () => i }), n(323874), n(14289), n(35956));
var l = n(77729),
    a = n(723702),
    r = n(264572).Buffer;
async function i(e, t) {
    if (a.isPlatformEmbedded) {
        let n = r.from(await e.arrayBuffer());
        if ("function" == typeof l.A.fileManager.saveWithDialog2) await l.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await l.A.fileManager.saveWithDialog(n, t);
            } catch {}
        return;
    }
    let n = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = n), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(n), 0);
    }
}
