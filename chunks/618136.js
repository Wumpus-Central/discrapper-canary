n.d(t, { Z: () => a }), n(47120);
var r = n(436660),
    i = n(887490),
    o = n(42530);
function a(e) {
    let { apply: t, onChange: n } = e;
    return (
        (e.apply = (n) => {
            t(n), i.Ew.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
        }),
        (e.onChange = () => {
            if ((i.Ew.isValid(e, e.selection) || (e.selection = s(e)), null != e.selection)) {
                let t,
                    n,
                    [a, s] = i.M8.edges(e.selection),
                    l = !1;
                for (; null != a && null != (t = i.bN.getParentVoid(e, a)) && !o.On.includes(t[0].type); ) (a = i.bN.before(e, a, { unit: 'offset' })), (l = !0);
                for (; null != s && null != (n = i.bN.getParentVoid(e, s)) && !o.On.includes(n[0].type); ) (s = i.bN.after(e, s, { unit: 'offset' })), (l = !0);
                l &&
                    null != a &&
                    null != s &&
                    (i.M8.isForward(e.selection)
                        ? r.Q.select(e, {
                              anchor: a,
                              focus: s
                          })
                        : r.Q.select(e, {
                              anchor: s,
                              focus: a
                          }));
            }
            n();
        }),
        e
    );
}
function s(e) {
    let t;
    if (i.Ew.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
    else {
        let n = i.bN.end(e, []);
        t = {
            anchor: n,
            focus: n
        };
    }
    return t;
}
