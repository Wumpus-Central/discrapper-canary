n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(192379),
    i = n(493773),
    a = n(626135),
    c = n(353250),
    o = n(981631);
function s(e) {
    let t = r.useRef(!0);
    return (
        (0, i.Z)(() => () => {
            t.current && (null == e || e(c.CaptchaError.CANCEL));
        }),
        r.useEffect(
            () => (
                a.default.track(o.rMx.OPEN_MODAL, { type: 'Guild Join Captcha' }),
                () => {
                    t.current && a.default.track(o.rMx.MODAL_DISMISSED, { type: 'Guild Join Captcha' });
                }
            ),
            []
        ),
        () => {
            t.current = !1;
        }
    );
}
