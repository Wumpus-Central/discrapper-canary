n.d(t, { H7: () => r, J7: () => l, tB: () => o });
var a,
    s,
    i = n(562465),
    l =
        (((a = {})[(a.DEFAULT = 0)] = "DEFAULT"),
        (a[(a.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (a[(a.FAILURE = 2)] = "FAILURE"),
        (a[(a.NONE = 3)] = "NONE"),
        a),
    r =
        (((s = {})[(s.REWIND = 1)] = "REWIND"),
        (s[(s.RENEW = 2)] = "RENEW"),
        (s[(s.CANCEL = 3)] = "CANCEL"),
        (s[(s.UNCANCEL = 4)] = "UNCANCEL"),
        (s[(s.TIME_TRAVEL = 5)] = "TIME_TRAVEL"),
        (s[(s.RESET = 6)] = "RESET"),
        (s[(s.PAY_INVOICE = 7)] = "PAY_INVOICE"),
        (s[(s.END = 8)] = "END"),
        (s[(s.RESUME = 9)] = "RESUME"),
        s);
async function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: a, paymentType: s, sendReminderEmail: l } = n;
    return (
        await i.Bo.post({
            url: `/debug/subscriptions/${e}/transition`,
            body: {
                target_datetime: a?.toISOString(),
                payment_type: s ?? 0,
                transition: t,
                send_reminder_email: l ?? !1,
            },
            rejectWithError: !0,
        })
    ).body;
}
