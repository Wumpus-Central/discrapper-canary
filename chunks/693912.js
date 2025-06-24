n.d(t, {
    B2: () => o,
    DS: () => i,
    hj: () => c,
    nh: () => s
});
var a = n(63063),
    r = n(981631),
    l = n(388032);
function i(e) {
    let { application: t, username: n, usernameHook: i = r.dG4, applicationNameHook: s = r.dG4 } = e;
    return null != t
        ? l.intl.format(l.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: i,
              otherUsernameHook: s,
              helpCenterLink: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : l.intl.format(l.t['+6V2sb'], {
              username: n,
              usernameHook: i,
              helpCenterLink: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function s(e) {
    let { application: t, username: n, usernameHook: i = r.dG4, applicationNameHook: s = r.dG4 } = e;
    return null != t
        ? l.intl.format(l.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: i,
              otherUsernameHook: s,
              helpCenterLink: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : l.intl.format(l.t.sAX6rq, {
              username: n,
              usernameHook: i,
              helpCenterLink: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(e) {
    let { application: t, username: n, usernameOnClick: i, applicationNameOnClick: s, medium: o } = e;
    return null != t
        ? l.intl.formatToParts(l.t['8r+Z+P'], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: i,
              otherUsernameOnClick: s,
              medium: o,
              helpCenterLink: { url: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : l.intl.formatToParts(l.t.ojysqa, {
              username: n,
              usernameOnClick: i,
              medium: o,
              helpCenterLink: { url: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function c(e) {
    let { application: t, username: n, usernameOnClick: i, applicationNameOnClick: s, medium: o } = e;
    return null != t
        ? l.intl.formatToParts(l.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: i,
              otherUsernameOnClick: s,
              medium: o,
              helpCenterLink: { url: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : l.intl.formatToParts(l.t['x2CN/f'], {
              username: n,
              usernameOnClick: i,
              medium: o,
              helpCenterLink: { url: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
