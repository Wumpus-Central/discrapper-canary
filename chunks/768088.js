n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(205693),
    a = n(37965),
    s = n(487329),
    o = n(338771),
    l = n(975571),
    c = n(200749),
    u = n(652215),
    d = n(985018);
function f(e) {
    switch (null == e ? void 0 : e.type) {
        case s.iy.SCREENSHARE_OS_ERROR:
            return d.intl.format(d.t.e9LMuh, { errorMessage: e.errorMessage });
        case s.iy.STREAM_FAILED_TO_START:
        default:
            return d.intl.string(d.t.rSlOep);
    }
}
function p(e) {
    var t;
    let { stream: n, width: p, avError: _, avErrorContext: h, selected: m = !1, noArt: g = !1 } = e,
        E = f(h),
        b = null == (t = (0, s.B1)(null != _ ? _ : s.iy.STREAM_FAILED_TO_START)) ? void 0 : t.errorCode;
    return (0, r.jsx)(c.A, {
        header: E,
        size: (0, c.J)(p),
        noArt: g,
        selected: m,
        description: d.intl.format(d.t.sXsgsP, { helpUrl: l.A.getArticleURL(u.MVz.STREAM_FAILED) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: b }),
        onCTAClick: () => {
            (0, a.W)(i.x.STREAM, n.ownerId), (0, o.A)(n);
        },
        callToAction: d.intl.string(d.t["4EGMWL"]),
    });
}
