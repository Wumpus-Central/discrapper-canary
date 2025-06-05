n.d(t, {
    B2: () => c,
    DS: () => a,
    hj: () => u,
    nh: () => l
});
var r = n(63063),
    i = n(981631),
    o = n(388032);
function a(e) {
    let { application: t, username: n, usernameHook: a = i.dG4, applicationNameHook: l = i.dG4 } = e;
    return null != t
        ? o.intl.format(o.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: l,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : o.intl.format(o.t['+6V2sb'], {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function l(e) {
    let { application: t, username: n, usernameHook: a = i.dG4, applicationNameHook: l = i.dG4 } = e;
    return null != t
        ? o.intl.format(o.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: l,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : o.intl.format(o.t.sAX6rq, {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function c(e) {
    let { application: t, username: n, usernameOnClick: a, applicationNameOnClick: l, medium: c } = e;
    return null != t
        ? o.intl.formatToParts(o.t['8r+Z+P'], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: l,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : o.intl.formatToParts(o.t.ojysqa, {
              username: n,
              usernameOnClick: a,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function u(e) {
    let { application: t, username: n, usernameOnClick: a, applicationNameOnClick: l, medium: c } = e;
    return null != t
        ? o.intl.formatToParts(o.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: l,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : o.intl.formatToParts(o.t['x2CN/f'], {
              username: n,
              usernameOnClick: a,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
