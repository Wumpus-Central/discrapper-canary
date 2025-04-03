n.d(t, {
    Pk: () => c,
    dv: () => o
}),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(823379);
let l = i.createContext(void 0);
function o() {
    let e = i.useContext(l);
    if (null == e) throw Error('No PollFocusContextProvider found');
    return e;
}
function s(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: a, manageFocusOnAction: o } = e,
        s = i.useMemo(
            () => ({
                actionButtonRef: n,
                pollAnswerRef: a,
                manageFocusOnAction: o
            }),
            [n, a, o]
        );
    return (0, r.jsx)(l.Provider, {
        value: s,
        children: t
    });
}
function c(e) {
    let { children: t } = e,
        [n, l] = i.useState(),
        o = i.useRef(null),
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            var e, t, r;
            'POLL_ANSWERS' === n && null != c.current && (null == (t = c.current) || null == (e = t.ref) || e.focus()), 'ACTION_BUTTON' === n && null != o.current && (null == (r = o.current) || r.focus());
        }, [n]),
        (0, r.jsx)(s, {
            pollAnswerRef: c,
            actionButtonRef: o,
            manageFocusOnAction: (e) => {
                switch (e) {
                    case 'submit':
                    case 'cancel':
                        l('ACTION_BUTTON');
                        break;
                    case 'remove':
                    case 'showVotes':
                        l('POLL_ANSWERS');
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
