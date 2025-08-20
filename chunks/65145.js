n.d(t, {
    Pk: () => c,
    dv: () => a,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(823379);
let o = i.createContext(void 0);
function a() {
    let e = i.useContext(o);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e;
}
function s(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: l, manageFocusOnAction: a } = e,
        s = i.useMemo(
            () => ({
                actionButtonRef: n,
                pollAnswerRef: l,
                manageFocusOnAction: a,
            }),
            [n, l, a],
        );
    return (0, r.jsx)(o.Provider, {
        value: s,
        children: t,
    });
}
function c(e) {
    let { children: t } = e,
        [n, o] = i.useState(),
        a = i.useRef(null),
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            var e, t, r;
            "POLL_ANSWERS" === n && null != c.current && (null == (t = c.current) || null == (e = t.ref) || e.focus()),
                "ACTION_BUTTON" === n && null != a.current && (null == (r = a.current) || r.focus());
        }, [n]),
        (0, r.jsx)(s, {
            pollAnswerRef: c,
            actionButtonRef: a,
            manageFocusOnAction: (e) => {
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
                        (0, l.vE)(e);
                }
            },
            children: t,
        })
    );
}
