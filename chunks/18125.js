n.d(t, { A: () => s });
var r = n(975571),
    i = n(544105),
    a = n(985018);
function s(e, t, n) {
    let i = null;
    return (
        "failed" === t ? (i = o(e, n.code)) : "n/a" === t && (i = l(e, n.code)),
        null != i &&
            (i.errorCodeMessage = a.intl.format(a.t["1Bi9Cf"], {
                supportURL: r.A.getSubmitRequestURL(),
                errorCode: n.code,
            })),
        i
    );
}
function o(e, t) {
    let { platform: n, name: r } = e;
    switch (t) {
        case i.K8.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
            return {
                title: a.intl.string(a.t["GSZ+HI"]),
                body: a.intl.formatToPlainString(a.t["cYX/3E"], { deviceType: n }),
            };
        case i.K8.CONSOLE_DEVICE_INVALID_POWER_MODE:
            return {
                title: a.intl.formatToPlainString(a.t.akd6Sx, { deviceType: n }),
                body: a.intl.formatToPlainString(a.t.RyOvpJ, { deviceName: r }),
            };
        case i.K8.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
            return {
                title: a.intl.formatToPlainString(a.t.M6Vzat, { deviceType: n }),
                body: a.intl.formatToPlainString(a.t.InKtnC, { deviceName: r }),
            };
        case i.K8.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
            return {
                title: a.intl.string(a.t.QL1y93),
                body: a.intl.formatToPlainString(a.t.D18eZu, { deviceType: n }),
                isAccountLinkError: !0,
            };
        default:
            return {
                title: a.intl.string(a.t.QL1y93),
                body: a.intl.formatToPlainString(a.t["6ZyNH/"], { deviceName: r }),
            };
    }
}
function l(e, t) {
    let { platform: n, name: r } = e;
    return t === i.K8.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED
        ? {
              title: a.intl.formatToPlainString(a.t.KchfhO, { deviceType: n }),
              body: a.intl.formatToPlainString(a.t["21ndz7"], { deviceName: r }),
          }
        : null;
}
