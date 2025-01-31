n.d(t, { Z: () => f }), n(47120);
var i,
    r = n(192379),
    a = n(442837),
    s = n(695346),
    o = n(135869),
    l = n(763296),
    u = n(242291),
    c = n(22382),
    d = n(747071);
function f(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : (() => {
                      var e;
                      return null !== (i = null === (e = s.kU.getSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== i ? i : 100;
                  })(),
        { currentPreviewRef: f } = r.useContext(o.Z),
        [_, p] = r.useState(!1),
        h = (0, a.e7)([l.Z], () => l.Z.isPlayingSound(e.soundId), [e]),
        m = r.useCallback(
            (n) => {
                null != f.current && f.current.pause(), null != t && (0, u.GN)(e, t, n);
            },
            [e, f, t]
        ),
        g = r.useCallback(() => {
            let t = new Audio((0, c.Z)(e.soundId));
            null != f.current && f.current.pause(), (f.current = t), (t.currentTime = 0), (t.volume = (0, d.Z)(e.volume, n)), t.play(), p(!0), t.addEventListener('pause', () => p(!1), { once: !0 });
        }, [e, n, f]);
    return (
        r.useCallback(
            () => () => {
                var e;
                return null === (e = f.current) || void 0 === e ? void 0 : e.pause();
            },
            [f]
        ),
        {
            playSoundboardSound: m,
            isPlayingSound: h,
            previewSound: g,
            isPreviewingSound: _
        }
    );
}
