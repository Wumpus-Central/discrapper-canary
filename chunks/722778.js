n.d(t, { Y: () => o });
var r = n(514962);
let i = -1,
    a = (e) => {
        "hidden" === r.m.document.visibilityState &&
            i > -1 &&
            ((i = "visibilitychange" === e.type ? e.timeStamp : 0),
            removeEventListener("visibilitychange", a, !0),
            removeEventListener("prerenderingchange", a, !0));
    },
    o = () => (
        r.m.document &&
            i < 0 &&
            ((i = "hidden" !== r.m.document.visibilityState || r.m.document.prerendering ? 1 / 0 : 0),
            addEventListener("visibilitychange", a, !0),
            addEventListener("prerenderingchange", a, !0)),
        {
            get firstHiddenTime() {
                return i;
            },
        }
    );
