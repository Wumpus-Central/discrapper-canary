n.d(t, {
    B2: () => o,
    DS: () => l,
    hj: () => d,
    nh: () => u
});
var i = n(63063),
    r = n(981631),
    a = n(388032);
function l(e) {
    let { application: t, username: n, usernameHook: l = r.dG4, applicationNameHook: u = r.dG4 } = e;
    return null != t
        ? a.intl.format(a.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: u,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : a.intl.format(a.t['+6V2sb'], {
              username: n,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function u(e) {
    let { application: t, username: n, usernameHook: l = r.dG4, applicationNameHook: u = r.dG4 } = e;
    return null != t
        ? a.intl.format(a.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: u,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : a.intl.format(a.t.sAX6rq, {
              username: n,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(e) {
    let { application: t, username: n, usernameOnClick: l, applicationNameOnClick: u, medium: o } = e;
    return null != t
        ? a.intl.formatToParts(a.t['8r+Z+P'], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: u,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : a.intl.formatToParts(a.t.ojysqa, {
              username: n,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function d(e) {
    let { application: t, username: n, usernameOnClick: l, applicationNameOnClick: u, medium: o } = e;
    return null != t
        ? a.intl.formatToParts(a.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: u,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : a.intl.formatToParts(a.t['x2CN/f'], {
              username: n,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
