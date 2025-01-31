n.d(t, { Z: () => r }), n(653041);
var i = n(633302);
function r(e) {
    let t = [];
    return (
        e.forEach((e) => {
            let n = i.ZP.getByName(e);
            if (
                null != n &&
                (t.push({
                    src: n.url,
                    colorize: !1
                }),
                n.hasDiversity)
            )
                for (let e in n.diversityChildren) {
                    let i = n.diversityChildren[e];
                    t.push({
                        src: i.url,
                        colorize: !1
                    });
                }
        }),
        t
    );
}
