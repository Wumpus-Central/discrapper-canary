i.d(t, { YY: () => u, eT: () => c, fz: () => d });
var n = i(735438),
    l = i(132500),
    a = i(776231),
    s = i(104142),
    o = i(998304),
    r = i(297494);
let u = 7.5,
    d = (0, n.memoize)(
        (e, t, i, n) =>
            new Promise((e) => {
                let l = new Image();
                (l.src = t),
                    (l.crossOrigin = "Anonymous"),
                    (l.onload = () => {
                        let t = 32 * (0, a.mZ)(),
                            s = JSON.stringify(i);
                        if (
                            (null != n && (s = (0, r.vc)(s, (0, o.E2)(n))),
                            (l.width === t && l.height === t) || (0 === l.width && 0 === l.height))
                        )
                            e(JSON.parse(s));
                        else {
                            let t = (128 / l.width) * l.height;
                            e(
                                JSON.parse(
                                    (s = (s = s.replace(/"w":128,"h":128/, `"w":128,"h":${t}`)).replace(
                                        /"a":{"a":0,"k":\[64,64/,
                                        `"a":{"a":0,"k":[64,${t / 2}`,
                                    )),
                                ),
                            );
                        }
                    });
            }),
    );
function c(e, t, i, n) {
    let { emojiSize: a, key: o, messageId: r } = n ?? {},
        u = (0, s.Br)(e, null != a ? 2 * a : void 0);
    return { channelId: i, messageId: r, emoji: e, animationId: (0, l.A)(), url: u, key: o, color: t };
}
