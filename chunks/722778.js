r.d(t, { Y: () => o });
var n = r(514962);
let a = -1,
    i = (e) => {
        "hidden" === n.m.document.visibilityState &&
            a > -1 &&
            ((a = "visibilitychange" === e.type ? e.timeStamp : 0),
            removeEventListener("visibilitychange", i, !0),
            removeEventListener("prerenderingchange", i, !0));
    },
    o = () => (
        n.m.document &&
            a < 0 &&
            ((a = "hidden" !== n.m.document.visibilityState || n.m.document.prerendering ? 1 / 0 : 0),
            addEventListener("visibilitychange", i, !0),
            addEventListener("prerenderingchange", i, !0)),
        {
            get firstHiddenTime() {
                return a;
            },
        }
    );
