n.d(t, { p: () => r });
var i = n(311907),
    l = n(429913),
    a = n(290863),
    s = n(652215);
function r(e) {
    let t = (0, i.bG)([a.A], () => {
        if (null != e)
            return (
                (function (e) {
                    for (let t of e) if (t.type === s.$pd.PLAYING && null != t.application_id) return t.application_id;
                    return null;
                })(a.A.getActivities(e)) ?? void 0
            );
    }, [e]);
    return (0, l.h)(t) ?? void 0;
}
