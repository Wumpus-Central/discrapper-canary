l.d(t, { h: () => n });
var i = l(64700),
    s = l(372684),
    a = l(985018);
function n(e) {
    return i.useMemo(() => {
        if (null != e.name && "" !== e.name) return "";
        if (e.decision?.signal != null) {
            let t = e.decision?.signal;
            switch (t.type) {
                case s.Gy.GAME_EVENT:
                    return t.description ?? t.title ?? a.intl.string(a.t.Cyxddp);
                case s.Gy.PHRASE:
                    return `"${t.text}"`;
            }
        }
        return a.intl.string(a.t.Cyxddp);
    }, [e.name, e.decision]);
}
