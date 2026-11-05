var i = n(855986),
    r = n(616356),
    l = n(754712),
    s = n(532624),
    a = n(350535),
    o = n(419490),
    u = n(572164),
    d = n(652215),
    c = n(683825),
    h = n(792996);
n.d(
    t,
    {},
    {
        A: function () {
            let { isActivity: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = (0, u.E)(),
                n = (0, i.bG)([o.Ay], () => o.Ay.getLastClipsError()),
                f = (0, i.bG)(
                    [l.Ay, r.A],
                    () => l.Ay.hasClipsSource() || r.A.getCurrentUserActiveStream()?.state === d.XYD.ACTIVE,
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
        },
    },
);
