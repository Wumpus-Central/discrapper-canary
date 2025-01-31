n.d(t, { Z: () => s }), n(47120);
var i = n(436660),
    r = n(887490),
    a = n(42530);
function s(e) {
    let { apply: t, onChange: n } = e;
    return (
        (e.apply = (n) => {
            t(n), r.Ew.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
        }),
        (e.onChange = () => {
            if ((r.Ew.isValid(e, e.selection) || (e.selection = o(e)), null != e.selection)) {
                let t,
                    n,
                    [s, o] = r.M8.edges(e.selection),
                    l = !1;
                for (; null != s && null != (t = r.bN.getParentVoid(e, s)) && !a.On.includes(t[0].type); ) (s = r.bN.before(e, s, { unit: 'offset' })), (l = !0);
                for (; null != o && null != (n = r.bN.getParentVoid(e, o)) && !a.On.includes(n[0].type); ) (o = r.bN.after(e, o, { unit: 'offset' })), (l = !0);
                l &&
                    null != s &&
                    null != o &&
                    (r.M8.isForward(e.selection)
                        ? i.Q.select(e, {
                              anchor: s,
                              focus: o
                          })
                        : i.Q.select(e, {
                              anchor: o,
                              focus: s
                          }));
            }
            n();
        }),
        e
    );
}
function o(e) {
    let t;
    if (r.Ew.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
    else {
        let n = r.bN.end(e, []);
        t = {
            anchor: n,
            focus: n
        };
    }
    return t;
}
