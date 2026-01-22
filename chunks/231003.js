r.d(t, {
    A: () => s,
});
var n = r(64700),
    a = r(964486),
    i = r(954571),
    o = r(577015),
    c = r(652215);

function s(e) {
    let { onReject: t, analyticsType: r = "Guild Join Captcha" } = e,
        s = n.useRef(!0);
    return (
        (0, a.Ay)(() => () => {
            s.current && (null == t || t(o.CaptchaError.CANCEL));
        }),
        n.useEffect(
            () => (
                i.default.track(c.HAw.OPEN_MODAL, {
                    type: r,
                }),
                () => {
                    s.current &&
                        i.default.track(c.HAw.MODAL_DISMISSED, {
                            type: r,
                        });
                }
            ),
            [r],
        ),
        () => {
            s.current = !1;
        }
    );
}
