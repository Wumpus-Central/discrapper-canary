n.d(t, { A0: () => s, eu: () => l, g6: () => o, uk: () => u });
var i = n(975571),
    r = n(652215),
    a = n(985018);
function l(e) {
    let { application: t, username: n, usernameHook: l = r.tEg, applicationNameHook: s = r.tEg } = e;
    return null != t
        ? a.intl.format(a.t.J8SaGy, {
              username: n,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: s,
              helpCenterLink: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : a.intl.format(a.t["+6V2sd"], {
              username: n,
              usernameHook: l,
              helpCenterLink: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function s(e) {
    let { application: t, username: n, usernameHook: l = r.tEg, applicationNameHook: s = r.tEg } = e;
    return null != t
        ? a.intl.format(a.t.eGCDak, {
              username: n,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: s,
              helpCenterLink: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : a.intl.format(a.t.sAX6rs, {
              username: n,
              usernameHook: l,
              helpCenterLink: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function o(e) {
    let { application: t, username: n, usernameOnClick: l, applicationNameOnClick: s, medium: o } = e;
    return null != t
        ? a.intl.formatToParts(a.t["8r+Z+I"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: s,
              medium: o,
              helpCenterLink: { url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : a.intl.formatToParts(a.t.ojysqe, {
              username: n,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: { url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
function u(e) {
    let { application: t, username: n, usernameOnClick: l, applicationNameOnClick: s, medium: o } = e;
    return null != t
        ? a.intl.formatToParts(a.t.zmc0mq, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: s,
              medium: o,
              helpCenterLink: { url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : a.intl.formatToParts(a.t["x2CN/Z"], {
              username: n,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: { url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
