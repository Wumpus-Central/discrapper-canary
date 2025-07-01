n.d(e, {
    B2: () => o,
    DS: () => a,
    hj: () => s,
    nh: () => u
});
var r = n(63063),
    l = n(981631),
    i = n(388032);
function a(t) {
    let { application: e, username: n, usernameHook: a = l.dG4, applicationNameHook: u = l.dG4 } = t;
    return null != e
        ? i.intl.format(i.t.J8SaGx, {
              username: n,
              otherUsername: e.name,
              usernameHook: a,
              otherUsernameHook: u,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : i.intl.format(i.t['+6V2sb'], {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function u(t) {
    let { application: e, username: n, usernameHook: a = l.dG4, applicationNameHook: u = l.dG4 } = t;
    return null != e
        ? i.intl.format(i.t.eGCDam, {
              username: n,
              otherUsername: e.name,
              usernameHook: a,
              otherUsernameHook: u,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : i.intl.format(i.t.sAX6rq, {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(t) {
    let { application: e, username: n, usernameOnClick: a, applicationNameOnClick: u, medium: o } = t;
    return null != e
        ? i.intl.formatToParts(i.t['8r+Z+P'], {
              username: n,
              otherUsername: e.name,
              usernameOnClick: a,
              otherUsernameOnClick: u,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : i.intl.formatToParts(i.t.ojysqa, {
              username: n,
              usernameOnClick: a,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function s(t) {
    let { application: e, username: n, usernameOnClick: a, applicationNameOnClick: u, medium: o } = t;
    return null != e
        ? i.intl.formatToParts(i.t.zmc0mp, {
              username: n,
              otherUsername: e.name,
              usernameOnClick: a,
              otherUsernameOnClick: u,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : i.intl.formatToParts(i.t['x2CN/f'], {
              username: n,
              usernameOnClick: a,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
