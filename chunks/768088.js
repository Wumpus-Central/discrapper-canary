n.d(t, { A: () => A });
var i = n(477900);
n(582128);
var r = n(459838),
    l = n(37965),
    s = n(487329),
    a = n(338771),
    o = n(975571),
    u = n(200749),
    c = n(652215),
    d = n(375708);
function A(e) {
    let { stream: t, width: n, avError: A, avErrorContext: h, selected: m = !1, noArt: g = !1 } = e,
        f = (function (e) {
            switch (e?.type) {
                case s.iy.SCREENSHARE_OS_ERROR:
                    return d.intl.format(d.t.e9LMuh, { errorMessage: e.errorMessage });
                case s.iy.STREAM_FAILED_TO_START:
                default:
                    return d.intl.string(d.t.rSlOep);
            }
        })(h),
        E = (0, s.B1)(A ?? s.iy.STREAM_FAILED_TO_START)?.errorCode;
    return (0, i.jsx)(u.A, {
        header: f,
        size: (0, u.J)(n),
        noArt: g,
        selected: m,
        description: d.intl.format(d.t.sXsgsP, { helpUrl: o.A.getArticleURL(c.MVz.STREAM_FAILED) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: E }),
        onCTAClick: () => {
            (0, l.W)(r.x.STREAM, t.ownerId), (0, a.A)(t);
        },
        callToAction: d.intl.string(d.t["4EGMWL"]),
    });
}
