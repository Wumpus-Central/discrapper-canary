n.d(t, { A: () => h });
var i = n(477900);
n(582128);
var r = n(205693),
    l = n(37965),
    s = n(487329),
    a = n(338771),
    o = n(975571),
    u = n(200749),
    c = n(652215),
    d = n(105292);
function h(e) {
    let { stream: t, width: n, avError: h, avErrorContext: m, selected: A = !1, noArt: E = !1 } = e,
        g = (function (e) {
            switch (e?.type) {
                case s.iy.SCREENSHARE_OS_ERROR:
                    return d.intl.format(d.t.e9LMuh, { errorMessage: e.errorMessage });
                case s.iy.STREAM_FAILED_TO_START:
                default:
                    return d.intl.string(d.t.rSlOep);
            }
        })(m),
        f = (0, s.B1)(h ?? s.iy.STREAM_FAILED_TO_START)?.errorCode;
    return (0, i.jsx)(u.A, {
        header: g,
        size: (0, u.J)(n),
        noArt: E,
        selected: A,
        description: d.intl.format(d.t.sXsgsP, { helpUrl: o.A.getArticleURL(c.MVz.STREAM_FAILED) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: f }),
        onCTAClick: () => {
            ((0, l.W)(r.x.STREAM, t.ownerId), (0, a.A)(t));
        },
        callToAction: d.intl.string(d.t["4EGMWL"]),
    });
}
