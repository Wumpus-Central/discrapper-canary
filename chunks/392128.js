s.d(t, { e: () => l });
var r = s(544420),
    i = s(15285),
    n = s(403362);
async function l() {
    let e = i.Ay.getRunningGames();
    return (
        await Promise.all(
            e.map(async (e) => {
                let t;
                if (null == e.name) return null;
                try {
                    t = await r.Ay.identifyGame(e.pid, e.name);
                } catch (e) {
                    return null;
                }
                let s = e.windowHandle,
                    i = e.name,
                    n = t.icon;
                return null != s && null != i && null != n
                    ? { id: `window:${s}`, name: i, url: `data:image/bmp;base64,${n}` }
                    : null;
            }),
        )
    ).filter(n.Vq);
}
