n.d(t, {
    M: function () {
        return u;
    }
});
var i = n(392711),
    r = n.n(i),
    l = n(283595),
    a = n(808506),
    s = n(237997),
    o = n(996106),
    c = n(186901),
    d = n(981631);
let u = {
    [d.zMe.OVERLAY_UPDATE]: {
        scope: c.lH,
        handler(e) {
            let {
                args: { pid: t },
                socket: n
            } = e;
            if ('number' != typeof t || t < 10) throw new o.Z({ errorCode: d.lTL.INVALID_EVENT }, 'Invalid pid');
            return (e) => {
                let { prevState: i, dispatch: o } = e,
                    c = a.Z.enabled,
                    d = !0,
                    u = n.application.id;
                if (null != u) {
                    let e = l.Z.getActiveLibraryApplication(u);
                    null != e && (c = c && e.isOverlayEnabled()), (d = s.Z.isLocked(t));
                }
                let h = {
                    enabled: c,
                    locked: d
                };
                return !r().isEqual(h, i) && o(h), h;
            };
        }
    }
};
