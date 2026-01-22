n.d(t, {
    $: () => a,
    v: () => s,
}),
    n(896048);
var r = n(583954),
    i = n(241678);
function a(e) {
    let t,
        { canvas: n, badges: a, startPosition: s, maxWidth: o } = e;
    for (let { iconPath: e, text: l } of (n.setFont({
        size: 12,
        family: i.mw,
        weight: 500,
        truncate: r.Kq.None,
    }),
    a)) {
        let r = null != t ? t.w + t.x + 12 : s,
            i = null != t ? t.w + t.x + 12 + 18 : s + 18;
        n.drawPath(
            e,
            {
                x: r,
                y: 88,
            },
            !0,
            0.6,
        ),
            (t = n.drawText(
                l,
                {
                    x: i,
                    y: 99,
                    w: o,
                },
                !0,
            ));
    }
}
function s(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: i, y: a },
        avatarImageSize: s,
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect(
                {
                    x: i + (e + 1) * (s - 8) - 2,
                    y: a - 1,
                    w: s + 2,
                    h: s + 2,
                },
                s / 2,
                !0,
            ),
            t.drawRoundedImage(
                n[e],
                {
                    x: i + e * (s - 8),
                    y: a,
                },
                {
                    w: s,
                    h: s,
                },
                50,
                { fillMode: r.VZ.Cover },
            ),
            t.restoreContext();
}
