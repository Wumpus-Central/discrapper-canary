n.d(t, {
    Pk: () => c,
    dv: () => l
}),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(823379);
let o = i.createContext(void 0);
function l() {
    let e = i.useContext(o);
    if (null == e) throw Error('No PollFocusContextProvider found');
    return e;
}
function s(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: a, manageFocusOnAction: l } = e,
        s = i.useMemo(
            () => ({
                actionButtonRef: n,
                pollAnswerRef: a,
                manageFocusOnAction: l
            }),
            [n, a, l]
        );
    return (0, r.jsx)(o.Provider, {
        value: s,
        children: t
    });
}
function c(e) {
    let { children: t } = e,
        [n, o] = i.useState(),
        l = i.useRef(null),
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            var e, t, r;
            'POLL_ANSWERS' === n && null != c.current && (null === (t = c.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), 'ACTION_BUTTON' === n && null != l.current && (null === (r = l.current) || void 0 === r || r.focus());
        }, [n]),
        (0, r.jsx)(s, {
            pollAnswerRef: c,
            actionButtonRef: l,
            manageFocusOnAction: (e) => {
                switch (e) {
                    case 'submit':
                    case 'cancel':
                        o('ACTION_BUTTON');
                        break;
                    case 'remove':
                    case 'showVotes':
                        o('POLL_ANSWERS');
                        break;
                    case 'showVoterDetails':
                        break;
                    default:
                        (0, a.vE)(e);
                }
            },
            children: t
        })
    );
}
