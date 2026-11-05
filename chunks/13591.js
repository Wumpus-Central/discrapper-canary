n.d(t, { A: () => _ });
var i = n(439372),
    r = n(397369),
    a = n(760751),
    s = n(856383),
    l = n(620632),
    o = n(627784),
    d = n(652215);
function c(e) {
    let { game: t } = e,
        n = r.Ay.isDetectionEnabled(t),
        i = t.id ?? a.A.findGame(t)?.id;
    null != i &&
        (async function (e, t) {
            try {
                await (async function (e, t) {
                    try {
                        await l.Bo.patch({
                            url: d.Rsh.MY_CONTENT_INVENTORY_APPLICATION(e),
                            body: t,
                            rejectWithError: (0, l.fT)(),
                        });
                    } catch (e) {
                        throw new o.LG(e);
                    }
                })(e, { is_sharing: t });
            } catch (e) {
                s.A.captureException(e);
            }
        })(i, n);
}
class u extends i.A {
    actions = { RUNNING_GAME_TOGGLE_DETECTION: c, RUNNING_GAME_DELETE_ENTRY: c };
}
let _ = new u();
