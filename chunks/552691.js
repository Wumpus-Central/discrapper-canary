"use strict";
n.d(t, { A0: () => o, eu: () => a, g6: () => l, uk: () => u });
var r = n(975571),
    i = n(652215),
    s = n(985018);
function a(e) {
    let { application: t, username: n, usernameHook: a = i.tEg, applicationNameHook: o = i.tEg } = e;
    return null != t
        ? s.intl.format(s.t.J8SaGy, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: o,
              helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : s.intl.format(s.t["+6V2sd"], {
              username: n,
              usernameHook: a,
              helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function o(e) {
    let { application: t, username: n, usernameHook: a = i.tEg, applicationNameHook: o = i.tEg } = e;
    return null != t
        ? s.intl.format(s.t.eGCDak, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: o,
              helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : s.intl.format(s.t.sAX6rs, {
              username: n,
              usernameHook: a,
              helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function l(e) {
    let { application: t, username: n, usernameOnClick: a, applicationNameOnClick: o, medium: l } = e;
    return null != t
        ? s.intl.formatToParts(s.t["8r+Z+I"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: o,
              medium: l,
              helpCenterLink: { url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : s.intl.formatToParts(s.t.ojysqe, {
              username: n,
              usernameOnClick: a,
              medium: l,
              helpCenterLink: { url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
function u(e) {
    let { application: t, username: n, usernameOnClick: a, applicationNameOnClick: o, medium: l } = e;
    return null != t
        ? s.intl.formatToParts(s.t.zmc0mq, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: o,
              medium: l,
              helpCenterLink: { url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : s.intl.formatToParts(s.t["x2CN/Z"], {
              username: n,
              usernameOnClick: a,
              medium: l,
              helpCenterLink: { url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
