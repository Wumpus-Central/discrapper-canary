r.d(t, { w: () => a });
var n = r(64700),
    l = r(311907),
    s = r(383501),
    u = r(162605),
    i = r(814278);
function a(e) {
    let { channelId: t, userId: r, nickname: a, onAlertOpen: c } = e,
        o = (function (e) {
            let { userId: t } = e;
            return (0, l.bG)([s.A, u.A], () => (0, i.m8)(t, [s.A, u.A]));
        })({ userId: r }),
        d = n.useRef(null);
    n.useEffect(() => {
        o && null == d.current
            ? (d.current = setTimeout(() => {
                  c(), (0, i.Vw)({ userId: r, channelId: t, nickname: a });
              }, 1e3))
            : (clearTimeout(d.current), (d.current = null));
        let e = d.current;
        return () => {
            clearTimeout(e);
        };
    }, [t, o, a, c, r]);
}
