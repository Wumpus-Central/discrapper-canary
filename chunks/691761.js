n.d(t, {
    p: () => s,
}),
    n(896048);
var i = n(311907),
    r = n(429913),
    l = n(290863),
    a = n(652215);

function s(e) {
    var t;
    let n = (0, i.bG)([l.A], () => {
        var t;
        if (null != e)
            return null !=
                (t = (function (e) {
                    for (let t of e) if (t.type === a.$pd.PLAYING && null != t.application_id) return t.application_id;
                    return null;
                })(l.A.getActivities(e)))
                ? t
                : void 0;
    }, [e]);
    return null != (t = (0, r.h)(n)) ? t : void 0;
}
