n.d(t, { A: () => s });
var a = n(64700),
    r = n(964486),
    i = n(954571),
    c = n(577015),
    o = n(652215);
function s(e) {
    let { onReject: t, analyticsType: n = "Guild Join Captcha" } = e,
        s = a.useRef(!0);
    return (
        (0, r.Ay)(() => () => {
            s.current && t?.(c.CaptchaError.CANCEL);
        }),
        a.useEffect(
            () => (
                i.default.track(o.HAw.OPEN_MODAL, { type: n }),
                () => {
                    s.current && i.default.track(o.HAw.MODAL_DISMISSED, { type: n });
                }
            ),
            [n],
        ),
        () => {
            s.current = !1;
        }
    );
}
