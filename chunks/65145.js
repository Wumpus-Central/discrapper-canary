n.d(t, {
    Pk: () => c,
    dv: () => o
}),
    n(415506),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(823379);
let a = i.createContext(void 0);
function o() {
    let e = i.useContext(a);
    if (null == e) throw Error('No PollFocusContextProvider found');
    return e;
}
function s(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: l, manageFocusOnAction: o } = e,
        s = i.useMemo(
            () => ({
                actionButtonRef: n,
                pollAnswerRef: l,
                manageFocusOnAction: o
            }),
            [n, l, o]
        );
    return (0, r.jsx)(a.Provider, {
        value: s,
        children: t
    });
}
function c(e) {
    let { children: t } = e,
        [n, a] = i.useState(),
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
                        a('ACTION_BUTTON');
                        break;
                    case 'remove':
                    case 'showVotes':
                        a('POLL_ANSWERS');
                        break;
                    case 'showVoterDetails':
                        break;
                    default:
                        (0, l.vE)(e);
                }
            },
            children: t
        })
    );
}
