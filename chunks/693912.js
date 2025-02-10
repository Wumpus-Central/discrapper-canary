n.d(e, {
    B2: () => u,
    DS: () => l,
    hj: () => s,
    nh: () => o
});
var i = n(63063),
    a = n(981631),
    r = n(388032);
function l(t) {
    let { application: e, username: n, usernameHook: l = a.dG4, applicationNameHook: o = a.dG4 } = t;
    return null != e
        ? r.intl.format(r.t.J8SaGx, {
              username: n,
              otherUsername: e.name,
              usernameHook: l,
              otherUsernameHook: o,
              helpCenterLink: i.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : r.intl.format(r.t['+6V2sb'], {
              username: n,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(t) {
    let { application: e, username: n, usernameHook: l = a.dG4, applicationNameHook: o = a.dG4 } = t;
    return null != e
        ? r.intl.format(r.t.eGCDam, {
              username: n,
              otherUsername: e.name,
              usernameHook: l,
              otherUsernameHook: o,
              helpCenterLink: i.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : r.intl.format(r.t.sAX6rq, {
              username: n,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function u(t) {
    let { application: e, username: n, usernameOnClick: l, applicationNameOnClick: o, medium: u } = t;
    return null != e
        ? r.intl.formatToParts(r.t['8r+Z+P'], {
              username: n,
              otherUsername: e.name,
              usernameOnClick: l,
              otherUsernameOnClick: o,
              medium: u,
              helpCenterLink: { url: i.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : r.intl.formatToParts(r.t.ojysqa, {
              username: n,
              usernameOnClick: l,
              medium: u,
              helpCenterLink: { url: i.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function s(t) {
    let { application: e, username: n, usernameOnClick: l, applicationNameOnClick: o, medium: u } = t;
    return null != e
        ? r.intl.formatToParts(r.t.zmc0mp, {
              username: n,
              otherUsername: e.name,
              usernameOnClick: l,
              otherUsernameOnClick: o,
              medium: u,
              helpCenterLink: { url: i.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : r.intl.formatToParts(r.t['x2CN/f'], {
              username: n,
              usernameOnClick: l,
              medium: u,
              helpCenterLink: { url: i.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
