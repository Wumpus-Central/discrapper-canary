n.d(t, {
    A0: () => o,
    eu: () => s,
    g6: () => l,
    uk: () => c,
});
var r = n(975571),
    i = n(652215),
    a = n(985018);
function s(e) {
    let { application: t, username: n, usernameHook: s = i.tEg, applicationNameHook: o = i.tEg } = e;
    return null != t
        ? a.intl.format(a.t.J8SaGy, {
              username: n,
              otherUsername: t.name,
              usernameHook: s,
              otherUsernameHook: o,
              helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : a.intl.format(a.t["+6V2sd"], {
              username: n,
              usernameHook: s,
              helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function o(e) {
    let { application: t, username: n, usernameHook: s = i.tEg, applicationNameHook: o = i.tEg } = e;
    return null != t
        ? a.intl.format(a.t.eGCDak, {
              username: n,
              otherUsername: t.name,
              usernameHook: s,
              otherUsernameHook: o,
              helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : a.intl.format(a.t.sAX6rs, {
              username: n,
              usernameHook: s,
              helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function l(e) {
    let { application: t, username: n, usernameOnClick: s, applicationNameOnClick: o, medium: l } = e;
    return null != t
        ? a.intl.formatToParts(a.t["8r+Z+I"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: s,
              otherUsernameOnClick: o,
              medium: l,
              helpCenterLink: { url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : a.intl.formatToParts(a.t.ojysqe, {
              username: n,
              usernameOnClick: s,
              medium: l,
              helpCenterLink: { url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
function c(e) {
    let { application: t, username: n, usernameOnClick: s, applicationNameOnClick: o, medium: l } = e;
    return null != t
        ? a.intl.formatToParts(a.t.zmc0mq, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: s,
              otherUsernameOnClick: o,
              medium: l,
              helpCenterLink: { url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : a.intl.formatToParts(a.t["x2CN/Z"], {
              username: n,
              usernameOnClick: s,
              medium: l,
              helpCenterLink: { url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
