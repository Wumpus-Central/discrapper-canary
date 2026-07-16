"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(459838),
    a = n(37965),
    s = n(487329),
    l = n(338771),
    o = n(975571),
    d = n(200749),
    c = n(652215),
    u = n(375708);
function _(e) {
    let { stream: t, width: n, avError: _, avErrorContext: E, selected: A = !1, noArt: h = !1 } = e,
        I = (function (e) {
            switch (e?.type) {
                case s.iy.SCREENSHARE_OS_ERROR:
                    return u.intl.format(u.t.e9LMuh, { errorMessage: e.errorMessage });
                case s.iy.STREAM_FAILED_TO_START:
                default:
                    return u.intl.string(u.t.rSlOep);
            }
        })(E),
        f = (0, s.B1)(_ ?? s.iy.STREAM_FAILED_TO_START)?.errorCode;
    return (0, i.jsx)(d.A, {
        header: I,
        size: (0, d.J)(n),
        noArt: h,
        selected: A,
        description: u.intl.format(u.t.sXsgsP, { helpUrl: o.A.getArticleURL(c.MVz.STREAM_FAILED) }),
        errorCodeMessage: u.intl.formatToPlainString(u.t.ejOT95, { errorCode: f }),
        onCTAClick: () => {
            (0, a.W)(r.x.STREAM, t.ownerId), (0, l.A)(t);
        },
        callToAction: u.intl.string(u.t["4EGMWL"]),
    });
}
