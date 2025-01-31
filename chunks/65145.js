n.d(t, {
    Pk: () => c,
    dv: () => s
}),
    n(411104),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(823379);
let r = l.createContext(void 0);
function s() {
    let e = l.useContext(r);
    if (null == e) throw Error('No PollFocusContextProvider found');
    return e;
}
function o(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: a, manageFocusOnAction: s } = e,
        o = l.useMemo(
            () => ({
                actionButtonRef: n,
                pollAnswerRef: a,
                manageFocusOnAction: s
            }),
            [n, a, s]
        );
    return (0, i.jsx)(r.Provider, {
        value: o,
        children: t
    });
}
function c(e) {
    let { children: t } = e,
        [n, r] = l.useState(),
        s = l.useRef(null),
        c = l.useRef(null);
    return (
        l.useEffect(() => {
            var e, t, i;
            'POLL_ANSWERS' === n && null != c.current && (null === (t = c.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), 'ACTION_BUTTON' === n && null != s.current && (null === (i = s.current) || void 0 === i || i.focus());
        }, [n]),
        (0, i.jsx)(o, {
            pollAnswerRef: c,
            actionButtonRef: s,
            manageFocusOnAction: (e) => {
                switch (e) {
                    case 'submit':
                    case 'cancel':
                        r('ACTION_BUTTON');
                        break;
                    case 'remove':
                    case 'showVotes':
                        r('POLL_ANSWERS');
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
