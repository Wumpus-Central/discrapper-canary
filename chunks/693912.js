n.d(t, {
    B2: () => u,
    DS: () => i,
    hj: () => s,
    nh: () => o
});
var r = n(63063),
    l = n(981631),
    a = n(388032);
function i(e) {
    let { application: t, username: n, usernameHook: i = l.dG4, applicationNameHook: o = l.dG4 } = e;
    return null != t
        ? a.intl.format(a.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: i,
              otherUsernameHook: o,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : a.intl.format(a.t['+6V2sb'], {
              username: n,
              usernameHook: i,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(e) {
    let { application: t, username: n, usernameHook: i = l.dG4, applicationNameHook: o = l.dG4 } = e;
    return null != t
        ? a.intl.format(a.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: i,
              otherUsernameHook: o,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : a.intl.format(a.t.sAX6rq, {
              username: n,
              usernameHook: i,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function u(e) {
    let { application: t, username: n, usernameOnClick: i, applicationNameOnClick: o, medium: u } = e;
    return null != t
        ? a.intl.formatToParts(a.t['8r+Z+P'], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: i,
              otherUsernameOnClick: o,
              medium: u,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : a.intl.formatToParts(a.t.ojysqa, {
              username: n,
              usernameOnClick: i,
              medium: u,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function s(e) {
    let { application: t, username: n, usernameOnClick: i, applicationNameOnClick: o, medium: u } = e;
    return null != t
        ? a.intl.formatToParts(a.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: i,
              otherUsernameOnClick: o,
              medium: u,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : a.intl.formatToParts(a.t['x2CN/f'], {
              username: n,
              usernameOnClick: i,
              medium: u,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
