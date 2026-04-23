"use strict";
n.d(t, { A: () => a });
var r = n(35277),
    i = n(711371),
    s = n(551483);
function a(e) {
    let { apply: t, onChange: n } = e;
    return (
        (e.apply = (n) => {
            t(n), i.Ot.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
        }),
        (e.onChange = () => {
            if (
                (i.Ot.isValid(e, e.selection) ||
                    (e.selection = (function (e) {
                        let t;
                        if (i.Ot.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                        else {
                            let n = i.VW.end(e, []);
                            t = { anchor: n, focus: n };
                        }
                        return t;
                    })(e)),
                null != e.selection)
            ) {
                let t,
                    n,
                    [a, o] = i.ZF.edges(e.selection),
                    l = !1;
                for (; null != a && null != (t = i.VW.getParentVoid(e, a)) && !s.XR.includes(t[0].type); )
                    (a = i.VW.before(e, a, { unit: "offset" })), (l = !0);
                for (; null != o && null != (n = i.VW.getParentVoid(e, o)) && !s.XR.includes(n[0].type); )
                    (o = i.VW.after(e, o, { unit: "offset" })), (l = !0);
                l &&
                    null != a &&
                    null != o &&
                    (i.ZF.isForward(e.selection)
                        ? r.b.select(e, { anchor: a, focus: o })
                        : r.b.select(e, { anchor: o, focus: a }));
            }
            n();
        }),
        e
    );
}
