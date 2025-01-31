n.d(t, { Z: () => s });
var a = n(192379),
    r = n(493773),
    i = n(626135),
    c = n(353250),
    o = n(981631);
function s(e) {
    let t = a.useRef(!0);
    return (
        (0, r.Z)(() => () => {
            t.current && (null == e || e(c.CaptchaError.CANCEL));
        }),
        a.useEffect(
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
