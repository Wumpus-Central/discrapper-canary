(t(323874), t(14289), t(35956));
var i = t(77729),
    r = t(723702),
    n = t(264572).hp;
t.d(
    a,
    {},
    {
        H: async function (e, a) {
            if (r.isPlatformEmbedded) {
                let t = n.from(await e.arrayBuffer());
                if ("function" == typeof i.A.fileManager.saveWithDialog2) await i.A.fileManager.saveWithDialog2(t, a);
                else
                    try {
                        await i.A.fileManager.saveWithDialog(t, a);
                    } catch {}
                return;
            }
            let t = URL.createObjectURL(e);
            try {
                let e = document.createElement("a");
                ((e.href = t), (e.download = a), (e.rel = "noopener"), e.click());
            } finally {
                window.setTimeout(() => URL.revokeObjectURL(t), 0);
            }
        },
    },
);
