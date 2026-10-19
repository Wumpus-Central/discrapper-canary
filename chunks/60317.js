n.d(t, { YY: () => c, eT: () => d, fz: () => u });
var i = n(435558),
    l = n(132500),
    o = n(776231),
    a = n(104142),
    r = n(998304),
    s = n(297494);
let c = 7.5,
    u = (0, i.memoize)(
        (e, t, n, i) =>
            new Promise((e) => {
                let l = new Image();
                ((l.src = t),
                    (l.crossOrigin = "Anonymous"),
                    (l.onload = () => {
                        let t = 32 * (0, o.mZ)(),
                            a = JSON.stringify(n);
                        if (
                            (null != i && (a = (0, s.v)(a, (0, r.E2)(i))),
                            (l.width === t && l.height === t) || (0 === l.width && 0 === l.height))
                        )
                            e(JSON.parse(a));
                        else {
                            let t = (128 / l.width) * l.height;
                            e(
                                JSON.parse(
                                    (a = (a = a.replace(/"w":128,"h":128/, `"w":128,"h":${t}`)).replace(
                                        /"a":{"a":0,"k":\[64,64/,
                                        `"a":{"a":0,"k":[64,${t / 2}`,
                                    )),
                                ),
                            );
                        }
                    }));
            }),
    );
function d(e, t, n, i) {
    let { emojiSize: o, key: r, messageId: s } = i ?? {},
        c = (0, a.Br)(e, null != o ? 2 * o : void 0);
    return { channelId: n, messageId: s, emoji: e, animationId: (0, l.A)(), url: c, key: r, color: t };
}
