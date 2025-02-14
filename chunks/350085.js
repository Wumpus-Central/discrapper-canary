n.d(t, { M: () => u });
var i = n(392711),
    l = n.n(i),
    r = n(283595),
    a = n(808506),
    s = n(237997),
    o = n(996106),
    d = n(186901),
    c = n(981631);
let u = {
    [c.zMe.OVERLAY_UPDATE]: {
        scope: d.lH,
        handler(e) {
            let {
                args: { pid: t },
                socket: n
            } = e;
            if ('number' != typeof t || t < 10) throw new o.Z({ errorCode: c.lTL.INVALID_EVENT }, 'Invalid pid');
            return (e) => {
                let { prevState: i, dispatch: o } = e,
                    d = a.Z.enabled,
                    c = !0,
                    u = n.application.id;
                if (null != u) {
                    let e = r.Z.getActiveLibraryApplication(u);
                    null != e && (d = d && e.isOverlayEnabled()), (c = s.Z.isLocked(t));
                }
                let h = {
                    enabled: d,
                    locked: c
                };
                return l().isEqual(h, i) || o(h), h;
            };
        }
    }
};
