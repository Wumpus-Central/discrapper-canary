n.d(t, {
    Pk: function () {
        return d;
    },
    dv: function () {
        return c;
    }
}),
    n(411104),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(823379);
((r = i || (i = {})).POLL_ANSWERS = 'POLL_ANSWERS'), (r.ACTION_BUTTON = 'ACTION_BUTTON');
let s = a.createContext(void 0);
function c() {
    let e = a.useContext(s);
    if (null == e) throw Error('No PollFocusContextProvider found');
    return e;
}
function u(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: i, manageFocusOnAction: r } = e,
        o = a.useMemo(
            () => ({
                actionButtonRef: n,
                pollAnswerRef: i,
                manageFocusOnAction: r
            }),
            [n, i, r]
        );
    return (0, l.jsx)(s.Provider, {
        value: o,
        children: t
    });
}
function d(e) {
    let { children: t } = e,
        [n, i] = a.useState(),
        r = a.useRef(null),
        s = a.useRef(null);
    return (
        a.useEffect(() => {
            var e, t, i;
            'POLL_ANSWERS' === n && null != s.current && (null === (t = s.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), 'ACTION_BUTTON' === n && null != r.current && (null === (i = r.current) || void 0 === i || i.focus());
        }, [n]),
        (0, l.jsx)(u, {
            pollAnswerRef: s,
            actionButtonRef: r,
            manageFocusOnAction: (e) => {
                switch (e) {
                    case 'submit':
                    case 'cancel':
                        i('ACTION_BUTTON');
                        break;
                    case 'remove':
                    case 'showVotes':
                        i('POLL_ANSWERS');
                        break;
                    case 'showVoterDetails':
                        break;
                    default:
                        (0, o.vE)(e);
                }
            },
            children: t
        })
    );
}
