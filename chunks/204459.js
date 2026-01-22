r.d(t, {
    w: () => c,
});
var n = r(64700),
    l = r(311907),
    u = r(383501),
    a = r(162605),
    i = r(814278);

function c(e) {
    let { channelId: t, userId: r, nickname: c, onAlertOpen: s } = e,
        o = (function (e) {
            let { userId: t } = e;
            return (0, l.bG)([u.A, a.A], () => (0, i.m8)(t, [u.A, a.A]));
        })({
            userId: r,
        }),
        f = n.useRef(null);
    n.useEffect(() => {
        o && null == f.current
            ? (f.current = setTimeout(() => {
                  s(),
                      (0, i.Vw)({
                          userId: r,
                          channelId: t,
                          nickname: c,
                      });
              }, 1e3))
            : (clearTimeout(f.current), (f.current = null));
        let e = f.current;
        return () => {
            clearTimeout(e);
        };
    }, [t, o, c, s, r]);
}
