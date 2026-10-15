l.d(t, { h: () => r });
var a = l(582128),
    n = l(374816),
    i = l(696016),
    s = l(105292);
function r(e) {
    return a.useMemo(() => {
        if (null != e.name && "" !== e.name) return "";
        if (e.decision?.signal != null) {
            let t = e.decision?.signal;
            if (t.type === i.Gy.GAME_EVENT)
                return (
                    t.description ??
                    (0, n.PZ)(e.applicationId, i.Gy.GAME_EVENT, t.eventName) ??
                    s.intl.string(s.t.Cyxddp)
                );
        }
        return s.intl.string(s.t.Cyxddp);
    }, [e.name, e.decision, e.applicationId]);
}
