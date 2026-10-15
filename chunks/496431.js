n.d(t, { A: () => s });
var i = n(582128),
    r = n(58703),
    a = n(396583);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        [l, o] = (0, i.useState)(Date.now),
        d = (0, r.Tf)(l, e),
        c = (0, i.useCallback)(() => {
            let t = (0, r.Tf)(Date.now(), e),
                i = 0 === t.days && 0 === t.hours && 0 === t.minutes && 0 === t.seconds;
            (i && o(Number(e)), i || s || (o(Date.now()), n?.()));
        }, [e, s, n]);
    return ((0, a.A)(c, s ? null : t), d);
}
