n.d(t, {
    B2: () => l,
    DS: () => o,
    hj: () => c,
    nh: () => s,
});
var r = n(63063),
    i = n(981631),
    a = n(388032);
function o(e) {
    let { application: t, username: n, usernameHook: o = i.dG4, applicationNameHook: s = i.dG4 } = e;
    return null != t
        ? a.intl.format(a.t.J8SaGy, {
              username: n,
              otherUsername: t.name,
              usernameHook: o,
              otherUsernameHook: s,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : a.intl.format(a.t["+6V2sd"], {
              username: n,
              usernameHook: o,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function s(e) {
    let { application: t, username: n, usernameHook: o = i.dG4, applicationNameHook: s = i.dG4 } = e;
    return null != t
        ? a.intl.format(a.t.eGCDak, {
              username: n,
              otherUsername: t.name,
              usernameHook: o,
              otherUsernameHook: s,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : a.intl.format(a.t.sAX6rs, {
              username: n,
              usernameHook: o,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function l(e) {
    let { application: t, username: n, usernameOnClick: o, applicationNameOnClick: s, medium: l } = e;
    return null != t
        ? a.intl.formatToParts(a.t["8r+Z+I"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: o,
              otherUsernameOnClick: s,
              medium: l,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : a.intl.formatToParts(a.t.ojysqe, {
              username: n,
              usernameOnClick: o,
              medium: l,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
function c(e) {
    let { application: t, username: n, usernameOnClick: o, applicationNameOnClick: s, medium: l } = e;
    return null != t
        ? a.intl.formatToParts(a.t.zmc0mq, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: o,
              otherUsernameOnClick: s,
              medium: l,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : a.intl.formatToParts(a.t["x2CN/Z"], {
              username: n,
              usernameOnClick: o,
              medium: l,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
