n.d(t, { A: () => s }), n(321073);
var i = n(7584);
function s(e) {
    let t = [];
    return (
        e.forEach((e) => {
            let n = i.Ay.getByName(e);
            if (null != n && (t.push({ src: n.url, colorize: !1 }), n.hasDiversity))
                for (let e in n.diversityChildren) {
                    let i = n.diversityChildren[e];
                    t.push({ src: i.url, colorize: !1 });
                }
        }),
        t
    );
}
