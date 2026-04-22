"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(205693),
    s = n(37965),
    a = n(487329),
    o = n(338771),
    l = n(975571),
    u = n(200749),
    d = n(652215),
    c = n(985018);
function _(e) {
    let { stream: t, width: n, avError: _, avErrorContext: f, selected: E = !1, noArt: h = !1 } = e,
        p = (function (e) {
            switch (e?.type) {
                case a.iy.SCREENSHARE_OS_ERROR:
                    return c.intl.format(c.t.e9LMuh, { errorMessage: e.errorMessage });
                case a.iy.STREAM_FAILED_TO_START:
                default:
                    return c.intl.string(c.t.rSlOep);
            }
        })(f),
        m = (0, a.B1)(_ ?? a.iy.STREAM_FAILED_TO_START)?.errorCode;
    return (0, r.jsx)(u.A, {
        header: p,
        size: (0, u.J)(n),
        noArt: h,
        selected: E,
        description: c.intl.format(c.t.sXsgsP, { helpUrl: l.A.getArticleURL(d.MVz.STREAM_FAILED) }),
        errorCodeMessage: c.intl.formatToPlainString(c.t.ejOT95, { errorCode: m }),
        onCTAClick: () => {
            (0, s.W)(i.x.STREAM, t.ownerId), (0, o.A)(t);
        },
        callToAction: c.intl.string(c.t["4EGMWL"]),
    });
}
