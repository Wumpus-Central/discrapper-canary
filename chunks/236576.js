"use strict";
n.d(t, { A: () => r });
var i = n(35277),
    l = n(711371),
    s = n(551483);
function r(e) {
    let { apply: t, onChange: n } = e;
    return (
        (e.apply = (n) => {
            t(n), l.Ot.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
        }),
        (e.onChange = () => {
            if (
                (l.Ot.isValid(e, e.selection) ||
                    (e.selection = (function (e) {
                        let t;
                        if (l.Ot.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                        else {
                            let n = l.VW.end(e, []);
                            t = { anchor: n, focus: n };
                        }
                        return t;
                    })(e)),
                null != e.selection)
            ) {
                let t,
                    n,
                    [r, a] = l.ZF.edges(e.selection),
                    o = !1;
                for (; null != r && null != (t = l.VW.getParentVoid(e, r)) && !s.XR.includes(t[0].type); )
                    (r = l.VW.before(e, r, { unit: "offset" })), (o = !0);
                for (; null != a && null != (n = l.VW.getParentVoid(e, a)) && !s.XR.includes(n[0].type); )
                    (a = l.VW.after(e, a, { unit: "offset" })), (o = !0);
                o &&
                    null != r &&
                    null != a &&
                    (l.ZF.isForward(e.selection)
                        ? i.b.select(e, { anchor: r, focus: a })
                        : i.b.select(e, { anchor: a, focus: r }));
            }
            n();
        }),
        e
    );
}
