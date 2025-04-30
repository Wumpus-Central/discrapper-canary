r.d(t, { Z: () => s });
var n = r(192379),
    a = r(493773),
    i = r(626135),
    c = r(353250),
    o = r(981631);
function s(e) {
    let t = n.useRef(!0);
    return (
        (0, a.ZP)(() => () => {
            t.current && (null == e || e(c.CaptchaError.CANCEL));
        }),
        n.useEffect(
            () => (
                i.default.track(o.rMx.OPEN_MODAL, { type: 'Guild Join Captcha' }),
                () => {
                    t.current && i.default.track(o.rMx.MODAL_DISMISSED, { type: 'Guild Join Captcha' });
                }
            ),
            []
        ),
        () => {
            t.current = !1;
        }
    );
}
