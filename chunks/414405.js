n.d(t, { A: () => f });
var i = n(17928),
    l = n(616356),
    r = n(25578),
    s = n(532624),
    a = n(350535),
    o = n(915725),
    u = n(572164),
    d = n(652215),
    c = n(268378),
    h = n(375708);
function f() {
    let e = (0, u.E)(),
        t = (0, i.bG)([o.Ay], () => o.Ay.getLastClipsError()),
        n = (0, i.bG)(
            [r.Ay, l.A],
            () => r.Ay.hasClipsSource() || l.A.getCurrentUserActiveStream()?.state === d.XYD.ACTIVE,
        ),
        f = (0, i.bG)([s.Ay], () => s.Ay.getKeybindForAction(d.hCu.SAVE_CLIP));
    return {
        tooltip:
            null != t
                ? t
                : e && !n
                  ? h.intl.string(c.default["+QNUov"])
                  : e
                    ? null != f
                        ? h.intl.formatToPlainString(h.t.HIMcv1, { hotkey: a.dI(f?.shortcut, !0) })
                        : h.intl.string(h.t.s52pju)
                    : h.intl.string(c.default.Jc3hn1),
        clipsInitError: t,
        clipsEnabled: e,
        clipsSourceAttached: n,
    };
}
