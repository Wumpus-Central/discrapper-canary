n.d(t, {
    Pk: () => c,
    dv: () => s,
}),
    n(415506),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(823379);
let a = i.createContext(void 0);
function s() {
    let e = i.useContext(a);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e;
}
function l(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: o, manageFocusOnAction: s } = e,
        l = i.useMemo(
            () => ({
                actionButtonRef: n,
                pollAnswerRef: o,
                manageFocusOnAction: s,
            }),
            [n, o, s],
        );
    return (0, r.jsx)(a.Provider, {
        value: l,
        children: t,
    });
}
function c(e) {
    let { children: t } = e,
        [n, a] = i.useState(),
        s = i.useRef(null),
        c = i.useRef(null),
        u = (e) => {
            switch (e) {
                case "submit":
                case "cancel":
                    a("ACTION_BUTTON");
                    break;
                case "remove":
                case "showVotes":
                    a("POLL_ANSWERS");
                    break;
                case "showVoterDetails":
                    break;
                default:
                    (0, o.vE)(e);
            }
        };
    return (
        i.useEffect(() => {
            var e, t, r;
            "POLL_ANSWERS" === n && null != c.current && (null == (t = c.current) || null == (e = t.ref) || e.focus()),
                "ACTION_BUTTON" === n && null != s.current && (null == (r = s.current) || r.focus());
        }, [n]),
        (0, r.jsx)(l, {
            pollAnswerRef: c,
            actionButtonRef: s,
            manageFocusOnAction: u,
            children: t,
        })
    );
}
