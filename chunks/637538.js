n.d(t, { Z: () => s });
var r = n(473749),
    a = n(493773),
    i = n(626135),
    o = n(353250),
    c = n(981631);
function s(e) {
    let { onReject: t, analyticsType: n = "Guild Join Captcha" } = e,
        s = r.useRef(!0);
    return (
        (0, a.ZP)(() => () => {
            s.current && (null == t || t(o.CaptchaError.CANCEL));
        }),
        r.useEffect(
            () => (
                i.default.track(c.rMx.OPEN_MODAL, { type: n }),
                () => {
                    s.current && i.default.track(c.rMx.MODAL_DISMISSED, { type: n });
                }
            ),
            [n],
        ),
        () => {
            s.current = !1;
        }
    );
}
