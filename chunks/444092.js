n.d(t, { Z: () => s });
var i = n(63063),
    r = n(927923),
    a = n(388032);
function s(e, t, n) {
    let r = null;
    return (
        'failed' === t ? (r = o(e, n.code)) : 'n/a' === t && (r = l(e, n.code)),
        null != r &&
            (r.errorCodeMessage = a.intl.format(a.t['1Bi9CQ'], {
                supportURL: i.Z.getSubmitRequestURL(),
                errorCode: n.code
            })),
        r
    );
}
function o(e, t) {
    let { platform: n, name: i } = e;
    switch (t) {
        case r.Ry.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
            return {
                title: a.intl.string(a.t['GSZ+HB']),
                body: a.intl.formatToPlainString(a.t['cYX/3N'], { deviceType: n })
            };
        case r.Ry.CONSOLE_DEVICE_INVALID_POWER_MODE:
            return {
                title: a.intl.formatToPlainString(a.t.akd6S0, { deviceType: n }),
                body: a.intl.formatToPlainString(a.t.RyOvpK, { deviceName: i })
            };
        case r.Ry.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
            return {
                title: a.intl.formatToPlainString(a.t.M6Vzam, { deviceType: n }),
                body: a.intl.formatToPlainString(a.t.InKtnJ, { deviceName: i })
            };
        case r.Ry.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
            return {
                title: a.intl.string(a.t['QL1y9/']),
                body: a.intl.formatToPlainString(a.t.D18eZm, { deviceType: n }),
                isAccountLinkError: !0
            };
        default:
            return {
                title: a.intl.string(a.t['QL1y9/']),
                body: a.intl.formatToPlainString(a.t['6ZyNHx'], { deviceName: i })
            };
    }
}
function l(e, t) {
    let { platform: n, name: i } = e;
    return t === r.Ry.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED
        ? {
              title: a.intl.formatToPlainString(a.t.KchfhI, { deviceType: n }),
              body: a.intl.formatToPlainString(a.t['21ndz8'], { deviceName: i })
          }
        : null;
}
