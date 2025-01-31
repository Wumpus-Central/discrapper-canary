n.d(t, {
    J: () => i,
    l: () => r
}),
    n(47120);
var l = n(693824),
    a = n(169040);
function i(e) {
    let t,
        { canvas: n, badges: i, startPosition: r, maxWidth: o } = e;
    for (let { iconPath: e, text: s } of (n.setFont({
        size: 12,
        family: a.I8,
        weight: a.Ue,
        truncate: l.GX.None
    }),
    i)) {
        let l = null != t ? t.w + t.x + a.PW : r,
            i = null != t ? t.w + t.x + a.PW + a.NC : r + a.NC;
        n.drawPath(
            e,
            {
                x: l,
                y: a.f0
            },
            !0,
            0.6
        ),
            (t = n.drawText(
                s,
                {
                    x: i,
                    y: a.m2,
                    w: o
                },
                !0
            ));
    }
}
function r(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: a, y: i },
        avatarImageSize: r
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect(
                {
                    x: a + (e + 1) * (r - 8) - 2,
                    y: i - 1,
                    w: r + 2,
                    h: r + 2
                },
                r / 2,
                !0
            ),
            t.drawRoundedImage(
                n[e],
                {
                    x: a + e * (r - 8),
                    y: i
                },
                {
                    w: r,
                    h: r
                },
                50,
                { fillMode: l.JU.Cover }
            ),
            t.restoreContext();
}
