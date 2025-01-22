r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(653041);
var a = r(633302);
function o(e) {
    let n = [];
    return (
        e.forEach((e) => {
            let r = a.ZP.getByName(e);
            if (null != r) {
                if (
                    (n.push({
                        src: r.url,
                        colorize: !1
                    }),
                    r.hasDiversity)
                )
                    for (let e in r.diversityChildren) {
                        let i = r.diversityChildren[e];
                        n.push({
                            src: i.url,
                            colorize: !1
                        });
                    }
            }
        }),
        n
    );
}
