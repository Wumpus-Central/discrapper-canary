n.d(t, { C: () => i }), n(388685), n(642613);
var r = n(992261);
function i(e, t, n) {
    let i = (0, r.HG)(n);
    return null == i
        ? e
        : "vc_probability" === i
          ? [...e].sort((e, n) => {
                var r, i, a, o;
                return (
                    (null != (a = null == (r = t.get(n.id)) ? void 0 : r.vcProbability) ? a : 0) -
                    (null != (o = null == (i = t.get(e.id)) ? void 0 : i.vcProbability) ? o : 0)
                );
            })
          : [...e].sort((e, n) => {
                var r, i, a, o;
                return (
                    (null != (a = null == (r = t.get(n.id)) ? void 0 : r.communicationProbability) ? a : 0) -
                    (null != (o = null == (i = t.get(e.id)) ? void 0 : i.communicationProbability) ? o : 0)
                );
            });
}
