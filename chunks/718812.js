l.d(t, { h: () => i });
var a = l(64700),
    n = l(372684),
    s = l(375708);
function i(e) {
    return a.useMemo(() => {
        if (null != e.name && "" !== e.name) return "";
        if (e.decision?.signal != null) {
            let t = e.decision?.signal;
            switch (t.type) {
                case n.Gy.GAME_EVENT:
                    return t.description ?? t.title ?? s.intl.string(s.t.Cyxddp);
                case n.Gy.PHRASE:
                    return `"${t.text}"`;
            }
        }
        return s.intl.string(s.t.Cyxddp);
    }, [e.name, e.decision]);
}
