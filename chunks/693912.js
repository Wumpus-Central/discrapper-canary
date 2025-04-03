n.d(e, {
    B2: () => o,
    DS: () => u,
    hj: () => s,
    nh: () => i
});
var r = n(63063),
    a = n(981631),
    l = n(388032);
function u(t) {
    let { application: e, username: n, usernameHook: u = a.dG4, applicationNameHook: i = a.dG4 } = t;
    return null != e
        ? l.NW.format(l.t.J8SaGx, {
              username: n,
              otherUsername: e.name,
              usernameHook: u,
              otherUsernameHook: i,
              helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : l.NW.format(l.t['+6V2sb'], {
              username: n,
              usernameHook: u,
              helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function i(t) {
    let { application: e, username: n, usernameHook: u = a.dG4, applicationNameHook: i = a.dG4 } = t;
    return null != e
        ? l.NW.format(l.t.eGCDam, {
              username: n,
              otherUsername: e.name,
              usernameHook: u,
              otherUsernameHook: i,
              helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : l.NW.format(l.t.sAX6rq, {
              username: n,
              usernameHook: u,
              helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(t) {
    let { application: e, username: n, usernameOnClick: u, applicationNameOnClick: i, medium: o } = t;
    return null != e
        ? l.NW.formatToParts(l.t['8r+Z+P'], {
              username: n,
              otherUsername: e.name,
              usernameOnClick: u,
              otherUsernameOnClick: i,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : l.NW.formatToParts(l.t.ojysqa, {
              username: n,
              usernameOnClick: u,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function s(t) {
    let { application: e, username: n, usernameOnClick: u, applicationNameOnClick: i, medium: o } = t;
    return null != e
        ? l.NW.formatToParts(l.t.zmc0mp, {
              username: n,
              otherUsername: e.name,
              usernameOnClick: u,
              otherUsernameOnClick: i,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : l.NW.formatToParts(l.t['x2CN/f'], {
              username: n,
              usernameOnClick: u,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
