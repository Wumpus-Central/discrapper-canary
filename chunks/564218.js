(n(323874), n(14289), n(35956));
var l = n(77729),
    s = n(723702),
    a = n(264572).hp;
n.d(
    t,
    {},
    {
        H: async function (e, t) {
            if (s.isPlatformEmbedded) {
                let n = a.from(await e.arrayBuffer());
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
        },
    },
);
