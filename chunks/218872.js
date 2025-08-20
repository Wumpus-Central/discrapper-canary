n.d(t, { M: () => i }), n(704826), n(35282), n(539854);
let r = /[^0-9/]/g;
function i(e) {
    let t = e.replace(r, "").split("/"),
        n = t[0],
        i = t[1],
        a = [];
    return (
        parseInt(n, 10) > 12 && (n = n.substring(0, 1)),
        a.push(n),
        (parseInt(n, 10) > 1 || 2 === n.length || (null != i && "" !== i)) && a.push("/"),
        null != i && "" !== i && parseInt(i, 10) > 99 && (i = (i + "").substring(0, 2)),
        a.push(i),
        a.join("")
    );
}
