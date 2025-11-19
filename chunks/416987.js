_.d(e, { Y: () => o });
var a = _(395848);
let r = -1,
    n = (t) => {
        "hidden" === a.m.document.visibilityState &&
            r > -1 &&
            ((r = "visibilitychange" === t.type ? t.timeStamp : 0),
            removeEventListener("visibilitychange", n, !0),
            removeEventListener("prerenderingchange", n, !0));
    },
    o = () => (
        a.m.document &&
            r < 0 &&
            ((r = "hidden" !== a.m.document.visibilityState || a.m.document.prerendering ? 1 / 0 : 0),
            addEventListener("visibilitychange", n, !0),
            addEventListener("prerenderingchange", n, !0)),
        {
            get firstHiddenTime() {
                return r;
            },
        }
    );
