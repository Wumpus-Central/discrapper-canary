n.d(e, {
    B2: () => o,
    DS: () => a,
    hj: () => s,
    nh: () => u
});
var l = n(63063),
    i = n(981631),
    r = n(388032);
function a(t) {
    let { application: e, username: n, usernameHook: a = i.dG4, applicationNameHook: u = i.dG4 } = t;
    return null != e
        ? r.intl.format(r.t.J8SaGx, {
              username: n,
              otherUsername: e.name,
              usernameHook: a,
              otherUsernameHook: u,
              helpCenterLink: l.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : r.intl.format(r.t['+6V2sb'], {
              username: n,
              usernameHook: a,
              helpCenterLink: l.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function u(t) {
    let { application: e, username: n, usernameHook: a = i.dG4, applicationNameHook: u = i.dG4 } = t;
    return null != e
        ? r.intl.format(r.t.eGCDam, {
              username: n,
              otherUsername: e.name,
              usernameHook: a,
              otherUsernameHook: u,
              helpCenterLink: l.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : r.intl.format(r.t.sAX6rq, {
              username: n,
              usernameHook: a,
              helpCenterLink: l.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(t) {
    let { application: e, username: n, usernameOnClick: a, applicationNameOnClick: u, medium: o } = t;
    return null != e
        ? r.intl.formatToParts(r.t['8r+Z+P'], {
              username: n,
              otherUsername: e.name,
              usernameOnClick: a,
              otherUsernameOnClick: u,
              medium: o,
              helpCenterLink: { url: l.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : r.intl.formatToParts(r.t.ojysqa, {
              username: n,
              usernameOnClick: a,
              medium: o,
              helpCenterLink: { url: l.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function s(t) {
    let { application: e, username: n, usernameOnClick: a, applicationNameOnClick: u, medium: o } = t;
    return null != e
        ? r.intl.formatToParts(r.t.zmc0mp, {
              username: n,
              otherUsername: e.name,
              usernameOnClick: a,
              otherUsernameOnClick: u,
              medium: o,
              helpCenterLink: { url: l.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : r.intl.formatToParts(r.t['x2CN/f'], {
              username: n,
              usernameOnClick: a,
              medium: o,
              helpCenterLink: { url: l.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
