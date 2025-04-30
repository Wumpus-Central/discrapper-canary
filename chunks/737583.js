n.d(t, {
    J: () => a,
    l: () => o
}),
    n(388685);
var r = n(693824),
    i = n(169040);
function a(e) {
    let t,
        { canvas: n, badges: a, startPosition: o, maxWidth: s } = e;
    for (let { iconPath: e, text: l } of (n.setFont({
        size: 12,
        family: i.I8,
        weight: i.Ue,
        truncate: r.GX.None
    }),
    a)) {
        let r = null != t ? t.w + t.x + i.PW : o,
            a = null != t ? t.w + t.x + i.PW + i.NC : o + i.NC;
        n.drawPath(
            e,
            {
                x: r,
                y: i.f0
            },
            !0,
            0.6
        ),
            (t = n.drawText(
                l,
                {
                    x: a,
                    y: i.m2,
                    w: s
                },
                !0
            ));
    }
}
function o(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: i, y: a },
        avatarImageSize: o
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect(
                {
                    x: i + (e + 1) * (o - 8) - 2,
                    y: a - 1,
                    w: o + 2,
                    h: o + 2
                },
                o / 2,
                !0
            ),
            t.drawRoundedImage(
                n[e],
                {
                    x: i + e * (o - 8),
                    y: a
                },
                {
                    w: o,
                    h: o
                },
                50,
                { fillMode: r.JU.Cover }
            ),
            t.restoreContext();
}
