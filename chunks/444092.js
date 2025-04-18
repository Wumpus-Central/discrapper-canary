n.d(t, { Z: () => o });
var r = n(63063),
    i = n(927923),
    a = n(388032);
function o(e, t, n) {
    let i = null;
    return (
        'failed' === t ? (i = s(e, n.code)) : 'n/a' === t && (i = l(e, n.code)),
        null != i &&
            (i.errorCodeMessage = a.NW.format(a.t['1Bi9CQ'], {
                supportURL: r.Z.getSubmitRequestURL(),
                errorCode: n.code
            })),
        i
    );
}
function s(e, t) {
    let { platform: n, name: r } = e;
    switch (t) {
        case i.Ry.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
            return {
                title: a.NW.string(a.t['GSZ+HB']),
                body: a.NW.formatToPlainString(a.t['cYX/3N'], { deviceType: n })
            };
        case i.Ry.CONSOLE_DEVICE_INVALID_POWER_MODE:
            return {
                title: a.NW.formatToPlainString(a.t.akd6S0, { deviceType: n }),
                body: a.NW.formatToPlainString(a.t.RyOvpK, { deviceName: r })
            };
        case i.Ry.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
            return {
                title: a.NW.formatToPlainString(a.t.M6Vzam, { deviceType: n }),
                body: a.NW.formatToPlainString(a.t.InKtnJ, { deviceName: r })
            };
        case i.Ry.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
            return {
                title: a.NW.string(a.t['QL1y9/']),
                body: a.NW.formatToPlainString(a.t.D18eZm, { deviceType: n }),
                isAccountLinkError: !0
            };
        default:
            return {
                title: a.NW.string(a.t['QL1y9/']),
                body: a.NW.formatToPlainString(a.t['6ZyNHx'], { deviceName: r })
            };
    }
}
function l(e, t) {
    let { platform: n, name: r } = e;
    return t === i.Ry.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED
        ? {
              title: a.NW.formatToPlainString(a.t.KchfhI, { deviceType: n }),
              body: a.NW.formatToPlainString(a.t['21ndz8'], { deviceName: r })
          }
        : null;
}
