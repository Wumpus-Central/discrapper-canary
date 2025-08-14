a.d(e, { Y: () => o });
var r = a(395848);
let _ = -1,
    n = (t) => {
        "hidden" === r.m.document.visibilityState &&
            _ > -1 &&
            ((_ = "visibilitychange" === t.type ? t.timeStamp : 0),
            removeEventListener("visibilitychange", n, !0),
            removeEventListener("prerenderingchange", n, !0));
    },
    o = () => (
        r.m.document &&
            _ < 0 &&
            ((_ = "hidden" !== r.m.document.visibilityState || r.m.document.prerendering ? 1 / 0 : 0),
            addEventListener("visibilitychange", n, !0),
            addEventListener("prerenderingchange", n, !0)),
        {
            get firstHiddenTime() {
                return _;
            },
        }
    );
