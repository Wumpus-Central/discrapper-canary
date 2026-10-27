async function s(e) {
    let t = new Worker(new URL("/assets/" + a.u("638664"), a.b));
    try {
        let a = await new Promise((a) => {
            (t.addEventListener("message", (e) => {
                let { data: t } = e;
                return a(t);
            }),
                t.addEventListener("error", () => a(null)),
                t.addEventListener("messageerror", () => a(null)),
                t.postMessage(e));
        });
        if (null == a) return null;
        return new File([a], `${e.name.replace(/\.png$/i, "")}.webp`, {
            type: "image/webp",
            lastModified: e.lastModified,
        });
    } finally {
        t.terminate();
    }
}
(a.d(t, { c: () => s }), a(323874), a(14289), a(35956));
