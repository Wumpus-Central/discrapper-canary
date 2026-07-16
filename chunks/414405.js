n.d(t, { A: () => g });
var i = n(17928),
    l = n(616356),
    s = n(186295),
    r = n(532624),
    a = n(350535),
    o = n(915725),
    u = n(572164),
    d = n(652215),
    c = n(16590),
    h = n(375708);
function g() {
    let e = (0, u.Et)(),
        t = (0, i.bG)([o.Ay], () => o.Ay.getLastClipsError()),
        n = (0, i.bG)(
            [s.Ay, l.A],
            () => s.Ay.hasClipsSource() || l.A.getCurrentUserActiveStream()?.state === d.XYD.ACTIVE,
        ),
        g = (0, i.bG)([r.Ay], () => r.Ay.getKeybindForAction(d.hCu.SAVE_CLIP));
    return {
        tooltip:
            null != t
                ? t
                : e && !n
                  ? h.intl.string(c.default["+QNUov"])
                  : e
                    ? null != g
                        ? h.intl.formatToPlainString(h.t.HIMcv1, { hotkey: a.dI(g?.shortcut, !0) })
                        : h.intl.string(h.t.s52pju)
                    : h.intl.string(c.default.Jc3hn1),
        clipsInitError: t,
        clipsEnabled: e,
        clipsSourceAttached: n,
    };
}
