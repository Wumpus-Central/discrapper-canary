l.d(t, { h: () => s });
var a = l(582128),
    n = l(696016),
    i = l(375708);
function s(e) {
    return a.useMemo(() => {
        if (null != e.name && "" !== e.name) return "";
        if (e.decision?.signal != null) {
            let t = e.decision?.signal;
            if (t.type === n.Gy.GAME_EVENT) return t.description ?? t.title ?? i.intl.string(i.t.Cyxddp);
        }
        return i.intl.string(i.t.Cyxddp);
    }, [e.name, e.decision]);
}
