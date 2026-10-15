n.d(t, { A: () => f });
var i = n(17928),
    l = n(616356),
    r = n(192820),
    s = n(532624),
    a = n(350535),
    o = n(274372),
    u = n(572164),
    d = n(652215),
    c = n(268378),
    h = n(105292);
function f() {
    let { isActivity: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, u.E)(),
        n = (0, i.bG)([o.Ay], () => o.Ay.getLastClipsError()),
        f = (0, i.bG)(
            [r.Ay, l.A],
            () => r.Ay.hasClipsSource() || l.A.getCurrentUserActiveStream()?.state === d.XYD.ACTIVE,
        ),
        g = (0, i.bG)([s.Ay], () => s.Ay.getKeybindForAction(d.hCu.SAVE_CLIP));
    return {
        tooltip:
            null != n
                ? n
                : t && !f
                  ? h.intl.string(e ? c.default.fbbIpP : c.default["+QNUov"])
                  : t
                    ? null != g
                        ? h.intl.formatToPlainString(h.t.HIMcv1, { hotkey: a.dI(g?.shortcut, !0) })
                        : h.intl.string(h.t.s52pju)
                    : h.intl.string(c.default.Jc3hn1),
        clipsInitError: n,
        clipsEnabled: t,
        clipsSourceAttached: f,
    };
}
