n.d(t, {
    Pk: () => c,
    dv: () => s,
}),
    n(415506),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(823379);
let o = i.createContext(void 0);
function s() {
    let e = i.useContext(o);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e;
}
function l(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: a, manageFocusOnAction: s } = e,
        l = i.useMemo(
            () => ({
                actionButtonRef: n,
                pollAnswerRef: a,
                manageFocusOnAction: s,
            }),
            [n, a, s],
        );
    return (0, r.jsx)(o.Provider, {
        value: l,
        children: t,
    });
}
function c(e) {
    let { children: t } = e,
        [n, o] = i.useState(),
        s = i.useRef(null),
        c = i.useRef(null),
        u = (e) => {
            switch (e) {
                case "submit":
                case "cancel":
                    o("ACTION_BUTTON");
                    break;
                case "remove":
                case "showVotes":
                    o("POLL_ANSWERS");
                    break;
                case "showVoterDetails":
                    break;
                default:
                    (0, a.vE)(e);
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
