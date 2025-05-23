r.d(t, { Z: () => s });
var n = r(73800),
    a = r(493773),
    i = r(626135),
    c = r(353250),
    o = r(981631);
function s(e) {
    let { onReject: t, analyticsType: r = 'Guild Join Captcha' } = e,
        s = n.useRef(!0);
    return (
        (0, a.ZP)(() => () => {
            s.current && (null == t || t(c.CaptchaError.CANCEL));
        }),
        n.useEffect(
            () => (
                i.default.track(o.rMx.OPEN_MODAL, { type: r }),
                () => {
                    s.current && i.default.track(o.rMx.MODAL_DISMISSED, { type: r });
                }
            ),
            [r]
        ),
        () => {
            s.current = !1;
        }
    );
}
