"use strict";
n.d(t, { A: () => a });
var r = n(975571),
    i = n(544105),
    s = n(985018);
function a(e, t, n) {
    let a = null;
    return (
        "failed" === t
            ? (a = (function (e, t) {
                  let { platform: n, name: r } = e;
                  switch (t) {
                      case i.K8.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
                          return {
                              title: s.intl.string(s.t["GSZ+HI"]),
                              body: s.intl.formatToPlainString(s.t["cYX/3E"], { deviceType: n }),
                          };
                      case i.K8.CONSOLE_DEVICE_INVALID_POWER_MODE:
                          return {
                              title: s.intl.formatToPlainString(s.t.akd6Sx, { deviceType: n }),
                              body: s.intl.formatToPlainString(s.t.RyOvpJ, { deviceName: r }),
                          };
                      case i.K8.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
                          return {
                              title: s.intl.formatToPlainString(s.t.M6Vzat, { deviceType: n }),
                              body: s.intl.formatToPlainString(s.t.InKtnC, { deviceName: r }),
                          };
                      case i.K8.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
                          return {
                              title: s.intl.string(s.t.QL1y93),
                              body: s.intl.formatToPlainString(s.t.D18eZu, { deviceType: n }),
                              isAccountLinkError: !0,
                          };
                      default:
                          return {
                              title: s.intl.string(s.t.QL1y93),
                              body: s.intl.formatToPlainString(s.t["6ZyNH/"], { deviceName: r }),
                          };
                  }
              })(e, n.code))
            : "n/a" === t &&
              (a = (function (e, t) {
                  let { platform: n, name: r } = e;
                  return t === i.K8.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED
                      ? {
                            title: s.intl.formatToPlainString(s.t.KchfhO, { deviceType: n }),
                            body: s.intl.formatToPlainString(s.t["21ndz7"], { deviceName: r }),
                        }
                      : null;
              })(e, n.code)),
        null != a &&
            (a.errorCodeMessage = s.intl.format(s.t["1Bi9Cf"], {
                supportURL: r.A.getSubmitRequestURL(),
                errorCode: n.code,
            })),
        a
    );
}
