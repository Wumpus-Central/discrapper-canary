r.d(n, {
    Z: function () {
        return h;
    }
});
var i,
    a = r(47120);
var o = r(192379),
    s = r(442837),
    l = r(695346),
    u = r(135869),
    c = r(763296),
    d = r(242291),
    f = r(22382),
    p = r(747071);
function h(e, n) {
    let r =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : (() => {
                      var e;
                      return null !== (i = null === (e = l.kU.getSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== i ? i : 100;
                  })(),
        { currentPreviewRef: a } = o.useContext(u.Z),
        [h, _] = o.useState(!1),
        m = (0, s.e7)([c.Z], () => c.Z.isPlayingSound(e.soundId), [e]),
        g = o.useCallback(
            (r) => {
                null != a.current && a.current.pause(), null != n && (0, d.GN)(e, n, r);
            },
            [e, a, n]
        ),
        E = o.useCallback(() => {
            let n = new Audio((0, f.Z)(e.soundId));
            null != a.current && a.current.pause(), (a.current = n), (n.currentTime = 0), (n.volume = (0, p.Z)(e.volume, r)), n.play(), _(!0), n.addEventListener('pause', () => _(!1), { once: !0 });
        }, [e, r, a]);
    return (
        o.useCallback(
            () => () => {
                var e;
                return null === (e = a.current) || void 0 === e ? void 0 : e.pause();
            },
            [a]
        ),
        {
            playSoundboardSound: g,
            isPlayingSound: m,
            previewSound: E,
            isPreviewingSound: h
        }
    );
}
