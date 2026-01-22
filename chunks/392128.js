r.d(t, { e: () => i }), r(896048);
var n = r(544420),
    l = r(15285),
    s = r(403362);
async function i() {
    let e = l.Ay.getRunningGames();
    return (
        await Promise.all(
            e.map(async (e) => {
                let t;
                if (null == e.name) return null;
                try {
                    t = await n.A.identifyGame(e.pid, e.name);
                } catch (e) {
                    return null;
                }
                let r = e.windowHandle,
                    l = e.name,
                    s = t.icon;
                return null != r && null != l && null != s
                    ? {
                          id: "window:".concat(r),
                          name: l,
                          url: "data:image/bmp;base64,".concat(s),
                      }
                    : null;
            }),
        )
    ).filter(s.Vq);
}
