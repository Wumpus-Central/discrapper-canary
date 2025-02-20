n.d(t, { Z: () => a });
var r = n(63063),
    i = n(927923),
    o = n(388032);
function a(e, t, n) {
    let i = null;
    return (
        'failed' === t ? (i = s(e, n.code)) : 'n/a' === t && (i = l(e, n.code)),
        null != i &&
            (i.errorCodeMessage = o.NW.format(o.t['1Bi9CQ'], {
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
                title: o.NW.string(o.t['GSZ+HB']),
                body: o.NW.formatToPlainString(o.t['cYX/3N'], { deviceType: n })
            };
        case i.Ry.CONSOLE_DEVICE_INVALID_POWER_MODE:
            return {
                title: o.NW.formatToPlainString(o.t.akd6S0, { deviceType: n }),
                body: o.NW.formatToPlainString(o.t.RyOvpK, { deviceName: r })
            };
        case i.Ry.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
            return {
                title: o.NW.formatToPlainString(o.t.M6Vzam, { deviceType: n }),
                body: o.NW.formatToPlainString(o.t.InKtnJ, { deviceName: r })
            };
        case i.Ry.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
            return {
                title: o.NW.string(o.t['QL1y9/']),
                body: o.NW.formatToPlainString(o.t.D18eZm, { deviceType: n }),
                isAccountLinkError: !0
            };
        default:
            return {
                title: o.NW.string(o.t['QL1y9/']),
                body: o.NW.formatToPlainString(o.t['6ZyNHx'], { deviceName: r })
            };
    }
}
function l(e, t) {
    let { platform: n, name: r } = e;
    return t === i.Ry.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED
        ? {
              title: o.NW.formatToPlainString(o.t.KchfhI, { deviceType: n }),
              body: o.NW.formatToPlainString(o.t['21ndz8'], { deviceName: r })
          }
        : null;
}
