a.d(e, { Y: () => c });
var r = a(395848);
let n = -1,
    _ = () => {
        n = 'hidden' !== r.m.document.visibilityState || r.m.document.prerendering ? 1 / 0 : 0;
    },
    o = (t) => {
        'hidden' === r.m.document.visibilityState && n > -1 && ((n = 'visibilitychange' === t.type ? t.timeStamp : 0), removeEventListener('visibilitychange', o, !0), removeEventListener('prerenderingchange', o, !0));
    },
    i = () => {
        addEventListener('visibilitychange', o, !0), addEventListener('prerenderingchange', o, !0);
    },
    c = () => (
        r.m.document && n < 0 && (_(), i()),
        {
            get firstHiddenTime() {
                return n;
            }
        }
    );
