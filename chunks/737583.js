n.d(t, {
    J: () => l,
    l: () => i
}),
    n(47120);
var r = n(693824),
    a = n(169040);
function l(e) {
    let t,
        { canvas: n, badges: l, startPosition: i, maxWidth: o } = e;
    for (let { iconPath: e, text: s } of (n.setFont({
        size: 12,
        family: a.I8,
        weight: a.Ue,
        truncate: r.GX.None
    }),
    l)) {
        let r = null != t ? t.w + t.x + a.PW : i,
            l = null != t ? t.w + t.x + a.PW + a.NC : i + a.NC;
        n.drawPath(
            e,
            {
                x: r,
                y: a.f0
            },
            !0,
            0.6
        ),
            (t = n.drawText(
                s,
                {
                    x: l,
                    y: a.m2,
                    w: o
                },
                !0
            ));
    }
}
function i(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: a, y: l },
        avatarImageSize: i
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect(
                {
                    x: a + (e + 1) * (i - 8) - 2,
                    y: l - 1,
                    w: i + 2,
                    h: i + 2
                },
                i / 2,
                !0
            ),
            t.drawRoundedImage(
                n[e],
                {
                    x: a + e * (i - 8),
                    y: l
                },
                {
                    w: i,
                    h: i
                },
                50,
                { fillMode: r.JU.Cover }
            ),
            t.restoreContext();
}
