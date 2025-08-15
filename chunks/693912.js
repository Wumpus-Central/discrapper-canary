n.d(t, {
    B2: () => c,
    DS: () => a,
    hj: () => s,
    nh: () => o,
});
var r = n(63063),
    i = n(981631),
    l = n(388032);
function a(e) {
    let { application: t, username: n, usernameHook: a = i.dG4, applicationNameHook: o = i.dG4 } = e;
    return null != t
        ? l.intl.format(l.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: o,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : l.intl.format(l.t["+6V2sb"], {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function o(e) {
    let { application: t, username: n, usernameHook: a = i.dG4, applicationNameHook: o = i.dG4 } = e;
    return null != t
        ? l.intl.format(l.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: o,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
          })
        : l.intl.format(l.t.sAX6rq, {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
          });
}
function c(e) {
    let { application: t, username: n, usernameOnClick: a, applicationNameOnClick: o, medium: c } = e;
    return null != t
        ? l.intl.formatToParts(l.t["8r+Z+P"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: o,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : l.intl.formatToParts(l.t.ojysqa, {
              username: n,
              usernameOnClick: a,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
function s(e) {
    let { application: t, username: n, usernameOnClick: a, applicationNameOnClick: o, medium: c } = e;
    return null != t
        ? l.intl.formatToParts(l.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: o,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) },
          })
        : l.intl.formatToParts(l.t["x2CN/f"], {
              username: n,
              usernameOnClick: a,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) },
          });
}
