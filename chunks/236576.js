n.d(t, {
    A: () => s,
}),
    n(896048);
var r = n(35277),
    i = n(711371),
    a = n(551483);

function s(e) {
    let { apply: t, onChange: n } = e;
    return (
        (e.apply = (n) => {
            t(n), i.Ot.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
        }),
        (e.onChange = () => {
            if ((i.Ot.isValid(e, e.selection) || (e.selection = o(e)), null != e.selection)) {
                let t,
                    n,
                    [s, o] = i.ZF.edges(e.selection),
                    l = !1;
                for (; null != s && null != (t = i.VW.getParentVoid(e, s)) && !a.XR.includes(t[0].type); )
                    (s = i.VW.before(e, s, {
                        unit: "offset",
                    })),
                        (l = !0);
                for (; null != o && null != (n = i.VW.getParentVoid(e, o)) && !a.XR.includes(n[0].type); )
                    (o = i.VW.after(e, o, {
                        unit: "offset",
                    })),
                        (l = !0);
                l &&
                    null != s &&
                    null != o &&
                    (i.ZF.isForward(e.selection)
                        ? r.b.select(e, {
                              anchor: s,
                              focus: o,
                          })
                        : r.b.select(e, {
                              anchor: o,
                              focus: s,
                          }));
            }
            n();
        }),
        e
    );
}

function o(e) {
    let t;
    if (i.Ot.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
    else {
        let n = i.VW.end(e, []);
        t = {
            anchor: n,
            focus: n,
        };
    }
    return t;
}
