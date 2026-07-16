"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(616356),
    a = n(186295),
    s = n(532624),
    l = n(350535),
    o = n(915725),
    d = n(572164),
    c = n(652215),
    u = n(16590),
    _ = n(375708);
function E() {
    let e = (0, d.Et)(),
        t = (0, i.bG)([o.Ay], () => o.Ay.getLastClipsError()),
        n = (0, i.bG)(
            [a.Ay, r.A],
            () => a.Ay.hasClipsSource() || r.A.getCurrentUserActiveStream()?.state === c.XYD.ACTIVE,
        ),
        E = (0, i.bG)([s.Ay], () => s.Ay.getKeybindForAction(c.hCu.SAVE_CLIP));
    return {
        tooltip:
            null != t
                ? t
                : e && !n
                  ? _.intl.string(u.default["+QNUov"])
                  : e
                    ? null != E
                        ? _.intl.formatToPlainString(_.t.HIMcv1, { hotkey: l.dI(E?.shortcut, !0) })
                        : _.intl.string(_.t.s52pju)
                    : _.intl.string(u.default.Jc3hn1),
        clipsInitError: t,
        clipsEnabled: e,
        clipsSourceAttached: n,
    };
}
