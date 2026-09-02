l.d(t, { F: () => i }), l(323874), l(14289), l(35956);
var n = l(77729),
    a = l(723702),
    r = l(264572).Buffer;
async function i(e, t) {
    if (a.isPlatformEmbedded) {
        let l = r.from(await e.arrayBuffer());
        if ("function" == typeof n.A.fileManager.saveWithDialog2) await n.A.fileManager.saveWithDialog2(l, t);
        else
            try {
                await n.A.fileManager.saveWithDialog(l, t);
            } catch {}
        return;
    }
    let l = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        (e.href = l), (e.download = t), (e.rel = "noopener"), e.click();
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(l), 0);
    }
}
