a.d(t, { H7: () => r, J7: () => s, tB: () => o });
var n,
    l,
    i = a(562465),
    s =
        (((n = {})[(n.DEFAULT = 0)] = "DEFAULT"),
        (n[(n.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (n[(n.FAILURE = 2)] = "FAILURE"),
        (n[(n.NONE = 3)] = "NONE"),
        n),
    r =
        (((l = {})[(l.REWIND = 1)] = "REWIND"),
        (l[(l.RENEW = 2)] = "RENEW"),
        (l[(l.CANCEL = 3)] = "CANCEL"),
        (l[(l.UNCANCEL = 4)] = "UNCANCEL"),
        (l[(l.TIME_TRAVEL = 5)] = "TIME_TRAVEL"),
        (l[(l.RESET = 6)] = "RESET"),
        (l[(l.PAY_INVOICE = 7)] = "PAY_INVOICE"),
        (l[(l.END = 8)] = "END"),
        (l[(l.RESUME = 9)] = "RESUME"),
        l);
async function o(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await i.Bo.post({
            url: `/debug/subscriptions/${e}/transition`,
            body: {
                target_datetime: n?.toISOString(),
                payment_type: l ?? 0,
                transition: t,
                send_reminder_email: s ?? !1,
            },
            rejectWithError: !0,
        })
    ).body;
}
