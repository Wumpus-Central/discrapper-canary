"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    s = n(311907),
    l = n(554375),
    r = n(475743),
    a = n(885617),
    o = n(492494);
let d = [];
function c(e) {
    let { revision: t, emojis: n } = (0, s.cf)([a.A], () => ({
            revision: a.A.getEmojiRevision(e),
            emojis: a.A.getEmojis(e),
        })),
        c = (0, r.A)(t);
    return (
        i.useEffect(() => {
            (0, l.dZ)(e);
        }, [e]),
        i.useEffect(() => {
            null != c && c < t && (0, l.dZ)(e);
        }, [t, c, e]),
        i.useMemo(() => (null == n ? d : n.filter((t) => (0, o.Eg)(t, e))), [n, e])
    );
}
