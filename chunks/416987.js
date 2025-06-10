a.d(e, { Y: () => c });
var r = a(395848);
let _ = -1,
    n = () => {
        _ = 'hidden' !== r.m.document.visibilityState || r.m.document.prerendering ? 1 / 0 : 0;
    },
    o = (t) => {
        'hidden' === r.m.document.visibilityState && _ > -1 && ((_ = 'visibilitychange' === t.type ? t.timeStamp : 0), removeEventListener('visibilitychange', o, !0), removeEventListener('prerenderingchange', o, !0));
    },
    i = () => {
        addEventListener('visibilitychange', o, !0), addEventListener('prerenderingchange', o, !0);
    },
    c = () => (
        r.m.document && _ < 0 && (n(), i()),
        {
            get firstHiddenTime() {
                return _;
            }
        }
    );
