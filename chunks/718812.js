l.d(t, { h: () => s });
var n = l(582128),
    a = l(372684),
    i = l(375708);
function s(e) {
    return n.useMemo(() => {
        if (null != e.name && "" !== e.name) return "";
        if (e.decision?.signal != null) {
            let t = e.decision?.signal;
            if (t.type === a.Gy.GAME_EVENT) return t.description ?? t.title ?? i.intl.string(i.t.Cyxddp);
        }
        return i.intl.string(i.t.Cyxddp);
    }, [e.name, e.decision]);
}
