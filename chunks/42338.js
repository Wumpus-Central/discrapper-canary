e.d(n, { X: () => c });
var o = e(255367);
e(73800);
var i = e(859097),
    r = e(981631),
    s = e(388032);
function c(t) {
    let { onContinue: n, onClose: e, errorCode: c } = t,
        a = c === r.evJ.UNDER_MINIMUM_AGE ? s.intl.string(s.t['3dIn2N']) : s.intl.string(s.t.qE9nqK);
    return (0, o.jsx)(i.C, {
        title: s.intl.string(s.t.eY3qHR),
        body: a,
        onClose: e,
        onContinue: n
    });
}
