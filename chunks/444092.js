r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(63063),
    a = r(927923),
    o = r(388032);
function s(e, n, r) {
    let a = null;
    return (
        'failed' === n ? (a = l(e, r.code)) : 'n/a' === n && (a = u(e, r.code)),
        null != a &&
            (a.errorCodeMessage = o.intl.format(o.t['1Bi9CQ'], {
                supportURL: i.Z.getSubmitRequestURL(),
                errorCode: r.code
            })),
        a
    );
}
function l(e, n) {
    let { platform: r, name: i } = e;
    switch (n) {
        case a.Ry.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
            return {
                title: o.intl.string(o.t['GSZ+HB']),
                body: o.intl.formatToPlainString(o.t['cYX/3N'], { deviceType: r })
            };
        case a.Ry.CONSOLE_DEVICE_INVALID_POWER_MODE:
            return {
                title: o.intl.formatToPlainString(o.t.akd6S0, { deviceType: r }),
                body: o.intl.formatToPlainString(o.t.RyOvpK, { deviceName: i })
            };
        case a.Ry.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
            return {
                title: o.intl.formatToPlainString(o.t.M6Vzam, { deviceType: r }),
                body: o.intl.formatToPlainString(o.t.InKtnJ, { deviceName: i })
            };
        case a.Ry.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
            return {
                title: o.intl.string(o.t['QL1y9/']),
                body: o.intl.formatToPlainString(o.t.D18eZm, { deviceType: r }),
                isAccountLinkError: !0
            };
        default:
            return {
                title: o.intl.string(o.t['QL1y9/']),
                body: o.intl.formatToPlainString(o.t['6ZyNHx'], { deviceName: i })
            };
    }
}
function u(e, n) {
    let { platform: r, name: i } = e;
    if (n === a.Ry.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED)
        return {
            title: o.intl.formatToPlainString(o.t.KchfhI, { deviceType: r }),
            body: o.intl.formatToPlainString(o.t['21ndz8'], { deviceName: i })
        };
    return null;
}
