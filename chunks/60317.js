n.d(t, {
    YY: () => c,
    eT: () => p,
    fz: () => f,
}),
    n(457529),
    n(747238),
    n(812715);
var r = n(735438),
    i = n(835245),
    a = n(776231),
    s = n(667050),
    o = n(998304),
    l = n(297494);
let c = 7.5,
    u = 128,
    d = 32,
    f = (0, r.memoize)(
        (e, t, n, r) =>
            new Promise((e) => {
                let i = new Image();
                (i.src = t),
                    (i.crossOrigin = "Anonymous"),
                    (i.onload = () => {
                        let t = d * (0, a.mZ)(),
                            s = JSON.stringify(n);
                        if (
                            (null != r && (s = (0, l.vc)(s, (0, o.E2)(r))),
                            (i.width === t && i.height === t) || (0 === i.width && 0 === i.height))
                        )
                            e(JSON.parse(s));
                        else {
                            let t = (u / i.width) * i.height;
                            e(
                                JSON.parse(
                                    (s = (s = s.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(
                                        /"a":{"a":0,"k":\[64,64/,
                                        '"a":{"a":0,"k":[64,'.concat(t / 2),
                                    )),
                                ),
                            );
                        }
                    });
            }),
    );

function p(e, t, n, r) {
    let { emojiSize: a, key: o, messageId: l } = null != r ? r : {},
        c = null != a ? 2 * a : void 0,
        u = (0, s.Br)(e, c);
    return {
        channelId: n,
        messageId: l,
        emoji: e,
        animationId: (0, i.A)(),
        url: u,
        key: o,
        color: t,
    };
}
