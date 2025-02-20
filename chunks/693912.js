n.d(e, {
    B2: () => u,
    DS: () => l,
    hj: () => s,
    nh: () => o
});
var i = n(63063),
    r = n(981631),
    a = n(388032);
function l(t) {
    let { application: e, username: n, usernameHook: l = r.dG4, applicationNameHook: o = r.dG4 } = t;
    return null != e
        ? a.NW.format(a.t.J8SaGx, {
              username: n,
              otherUsername: e.name,
              usernameHook: l,
              otherUsernameHook: o,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : a.NW.format(a.t['+6V2sb'], {
              username: n,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(t) {
    let { application: e, username: n, usernameHook: l = r.dG4, applicationNameHook: o = r.dG4 } = t;
    return null != e
        ? a.NW.format(a.t.eGCDam, {
              username: n,
              otherUsername: e.name,
              usernameHook: l,
              otherUsernameHook: o,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : a.NW.format(a.t.sAX6rq, {
              username: n,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function u(t) {
    let { application: e, username: n, usernameOnClick: l, applicationNameOnClick: o, medium: u } = t;
    return null != e
        ? a.NW.formatToParts(a.t['8r+Z+P'], {
              username: n,
              otherUsername: e.name,
              usernameOnClick: l,
              otherUsernameOnClick: o,
              medium: u,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : a.NW.formatToParts(a.t.ojysqa, {
              username: n,
              usernameOnClick: l,
              medium: u,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function s(t) {
    let { application: e, username: n, usernameOnClick: l, applicationNameOnClick: o, medium: u } = t;
    return null != e
        ? a.NW.formatToParts(a.t.zmc0mp, {
              username: n,
              otherUsername: e.name,
              usernameOnClick: l,
              otherUsernameOnClick: o,
              medium: u,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : a.NW.formatToParts(a.t['x2CN/f'], {
              username: n,
              usernameOnClick: l,
              medium: u,
              helpCenterLink: { url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
