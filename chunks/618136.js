r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(436660),
    o = r(887490),
    s = r(42530);
function l(e) {
    let { apply: n, onChange: r } = e;
    return (
        (e.apply = (r) => {
            n(r), o.Ew.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
        }),
        (e.onChange = () => {
            if ((!o.Ew.isValid(e, e.selection) && (e.selection = u(e)), null != e.selection)) {
                let n,
                    r,
                    [i, l] = o.M8.edges(e.selection),
                    u = !1;
                for (; null != i && null != (n = o.bN.getParentVoid(e, i)) && !s.On.includes(n[0].type); ) (i = o.bN.before(e, i, { unit: 'offset' })), (u = !0);
                for (; null != l && null != (r = o.bN.getParentVoid(e, l)) && !s.On.includes(r[0].type); ) (l = o.bN.after(e, l, { unit: 'offset' })), (u = !0);
                u &&
                    null != i &&
                    null != l &&
                    (o.M8.isForward(e.selection)
                        ? a.Q.select(e, {
                              anchor: i,
                              focus: l
                          })
                        : a.Q.select(e, {
                              anchor: l,
                              focus: i
                          }));
            }
            r();
        }),
        e
    );
}
function u(e) {
    let n;
    if (o.Ew.isValid(e, e.lastGoodSelection)) n = e.lastGoodSelection;
    else {
        let r = o.bN.end(e, []);
        n = {
            anchor: r,
            focus: r
        };
    }
    return n;
}
