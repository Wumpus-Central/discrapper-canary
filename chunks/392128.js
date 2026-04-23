s.d(t, { e: () => l });
var i = s(544420),
    r = s(15285),
    n = s(403362);
async function l() {
    let e = r.Ay.getRunningGames();
    return (
        await Promise.all(
            e.map(async (e) => {
                let t;
                if (null == e.name) return null;
                try {
                    t = await i.Ay.identifyGame(e.pid, e.name);
                } catch (e) {
                    return null;
                }
                let s = e.windowHandle,
                    r = e.name,
                    n = t.icon;
                return null != s && null != r && null != n
                    ? { id: `window:${s}`, name: r, url: `data:image/bmp;base64,${n}` }
                    : null;
            }),
        )
    ).filter(n.Vq);
}
