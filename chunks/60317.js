n.d(t, {
    YY: () => u,
    eT: () => d,
    fz: () => c,
}),
    n(457529),
    n(747238),
    n(812715);
var i = n(735438),
    l = n(835245),
    r = n(776231),
    o = n(667050),
    a = n(998304),
    s = n(297494);
let u = 7.5,
    c = (0, i.memoize)(
        (e, t, n, i) =>
            new Promise((e) => {
                let l = new Image();
                (l.src = t),
                    (l.crossOrigin = "Anonymous"),
                    (l.onload = () => {
                        let t = 32 * (0, r.mZ)(),
                            o = JSON.stringify(n);
                        if (
                            (null != i && (o = (0, s.vc)(o, (0, a.E2)(i))),
                            (l.width === t && l.height === t) || (0 === l.width && 0 === l.height))
                        )
                            e(JSON.parse(o));
                        else {
                            let t = (128 / l.width) * l.height;
                            e(
                                JSON.parse(
                                    (o = (o = o.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(
                                        /"a":{"a":0,"k":\[64,64/,
                                        '"a":{"a":0,"k":[64,'.concat(t / 2),
                                    )),
                                ),
                            );
                        }
                    });
            }),
    );

function d(e, t, n, i) {
    let { emojiSize: r, key: a, messageId: s } = null != i ? i : {},
        u = (0, o.Br)(e, null != r ? 2 * r : void 0);
    return {
        channelId: n,
        messageId: s,
        emoji: e,
        animationId: (0, l.A)(),
        url: u,
        key: a,
        color: t,
    };
}
