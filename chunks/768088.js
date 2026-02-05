"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(205693),
    a = n(37965),
    s = n(709710),
    o = n(338771),
    l = n(975571),
    u = n(200749),
    c = n(652215),
    d = n(985018);
function _(e) {
    switch (e?.type) {
        case s.iy.SCREENSHARE_OS_ERROR:
            return d.intl.format(d.t.e9LMuh, { errorMessage: e.errorMessage });
        case s.iy.STREAM_FAILED_TO_START:
        default:
            return d.intl.string(d.t.rSlOep);
    }
}
function f(e) {
    let { stream: t, width: n, avError: f, avErrorContext: p, selected: h = !1, noArt: m = !1 } = e,
        g = _(p),
        E = (0, s.B1)(f ?? s.iy.STREAM_FAILED_TO_START)?.errorCode;
    return (0, r.jsx)(u.A, {
        header: g,
        size: (0, u.J)(n),
        noArt: m,
        selected: h,
        description: d.intl.format(d.t.sXsgsP, { helpUrl: l.A.getArticleURL(c.MVz.STREAM_FAILED) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: E }),
        onCTAClick: () => {
            (0, a.W)(i.x.STREAM, t.ownerId), (0, o.A)(t);
        },
        callToAction: d.intl.string(d.t["4EGMWL"]),
    });
}
