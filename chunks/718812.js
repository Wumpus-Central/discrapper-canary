l.d(t, { h: () => a }), l(228524);
var n = l(64700),
    r = l(372684),
    i = l(985018);
function a(e) {
    return n.useMemo(() => {
        var t, l, n, a;
        if (null != e.name && "" !== e.name) return "";
        if ((null == (t = e.decision) ? void 0 : t.signal) != null) {
            let t = null == (l = e.decision) ? void 0 : l.signal;
            switch (t.type) {
                case r.Gy.GAME_EVENT:
                    return null != (n = null != (a = t.description) ? a : t.title) ? n : i.intl.string(i.t.Cyxddp);
                case r.Gy.PHRASE:
                    return '"'.concat(t.text, '"');
            }
        }
        return i.intl.string(i.t.Cyxddp);
    }, [e.name, e.decision]);
}
