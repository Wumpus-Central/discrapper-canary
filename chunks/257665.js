n.d(t, {
    F0: () => l,
    cN: () => s,
    vc: () => o,
});
var a,
    r,
    i = n(544891),
    l =
        (((a = {})[(a.DEFAULT = 0)] = "DEFAULT"),
        (a[(a.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (a[(a.FAILURE = 2)] = "FAILURE"),
        (a[(a.NONE = 3)] = "NONE"),
        a),
    s =
        (((r = {})[(r.REWIND = 1)] = "REWIND"),
        (r[(r.RENEW = 2)] = "RENEW"),
        (r[(r.CANCEL = 3)] = "CANCEL"),
        (r[(r.UNCANCEL = 4)] = "UNCANCEL"),
        (r[(r.TIME_TRAVEL = 5)] = "TIME_TRAVEL"),
        (r[(r.RESET = 6)] = "RESET"),
        (r[(r.PAY_INVOICE = 7)] = "PAY_INVOICE"),
        (r[(r.END = 8)] = "END"),
        (r[(r.RESUME = 9)] = "RESUME"),
        r);
async function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: a, paymentType: r, sendReminderEmail: l } = n;
    return (
        await i.tn.post({
            url: "/debug/subscriptions/".concat(e, "/transition"),
            body: {
                target_datetime: null == a ? void 0 : a.toISOString(),
                payment_type: null != r ? r : 0,
                transition: t,
                send_reminder_email: null != l && l,
            },
            rejectWithError: !0,
        })
    ).body;
}
