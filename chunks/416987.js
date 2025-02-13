a.d(e, { Y: () => c });
var r = a(395848);
let n = -1,
    o = () => {
        n = 'hidden' !== r.m.document.visibilityState || r.m.document.prerendering ? 1 / 0 : 0;
    },
    _ = (t) => {
        'hidden' === r.m.document.visibilityState && n > -1 && ((n = 'visibilitychange' === t.type ? t.timeStamp : 0), removeEventListener('visibilitychange', _, !0), removeEventListener('prerenderingchange', _, !0));
    },
    i = () => {
        addEventListener('visibilitychange', _, !0), addEventListener('prerenderingchange', _, !0);
    },
    c = () => (
        r.m.document && n < 0 && (o(), i()),
        {
            get firstHiddenTime() {
                return n;
            }
        }
    );
