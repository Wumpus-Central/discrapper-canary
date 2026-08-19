"use strict";
n.d(t, { A0: () => l, eu: () => s, g6: () => o, uk: () => d });
var i = n(975571),
    r = n(652215),
    a = n(375708);
function s(e) {
    let { application: t, username: n, usernameHook: s = r.tEg, applicationNameHook: l = r.tEg } = e;
    return null != t
        ? a.intl.format(a.t.J8SaGy, {
              username: n,
              otherUsername: t.name,
              usernameHook: s,
              otherUsernameHook: l,
              helpCenterLink: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : a.intl.format(a.t["+6V2sd"], {
              username: n,
              usernameHook: s,
              helpCenterLink: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function l(e) {
    let { application: t, username: n, usernameHook: s = r.tEg, applicationNameHook: l = r.tEg } = e;
    return null != t
        ? a.intl.format(a.t.eGCDak, {
              username: n,
              otherUsername: t.name,
              usernameHook: s,
              otherUsernameHook: l,
              helpCenterLink: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : a.intl.format(a.t.sAX6rs, {
              username: n,
              usernameHook: s,
              helpCenterLink: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function o(e) {
    let { application: t, username: n, usernameOnClick: s, applicationNameOnClick: l, medium: o } = e;
    return null != t
        ? a.intl.formatToParts(a.t["8r+Z+I"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: s,
              otherUsernameOnClick: l,
              medium: o,
              helpCenterLink: { url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : a.intl.formatToParts(a.t.ojysqe, {
              username: n,
              usernameOnClick: s,
              medium: o,
              helpCenterLink: { url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
function d(e) {
    let { application: t, username: n, usernameOnClick: s, applicationNameOnClick: l, medium: o } = e;
    return null != t
        ? a.intl.formatToParts(a.t.zmc0mq, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: s,
              otherUsernameOnClick: l,
              medium: o,
              helpCenterLink: { url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : a.intl.formatToParts(a.t["x2CN/Z"], {
              username: n,
              usernameOnClick: s,
              medium: o,
              helpCenterLink: { url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
