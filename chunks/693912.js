n.d(t, {
    B2: () => c,
    DS: () => o,
    hj: () => s,
    nh: () => l
});
var r = n(63063),
    a = n(981631),
    i = n(388032);
function o(e) {
    let { application: t, username: n, usernameHook: o = a.dG4, applicationNameHook: l = a.dG4 } = e;
    return null != t
        ? i.NW.format(i.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: o,
              otherUsernameHook: l,
              helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : i.NW.format(i.t['+6V2sb'], {
              username: n,
              usernameHook: o,
              helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function l(e) {
    let { application: t, username: n, usernameHook: o = a.dG4, applicationNameHook: l = a.dG4 } = e;
    return null != t
        ? i.NW.format(i.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: o,
              otherUsernameHook: l,
              helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : i.NW.format(i.t.sAX6rq, {
              username: n,
              usernameHook: o,
              helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function c(e) {
    let { application: t, username: n, usernameOnClick: o, applicationNameOnClick: l, medium: c } = e;
    return null != t
        ? i.NW.formatToParts(i.t['8r+Z+P'], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: o,
              otherUsernameOnClick: l,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : i.NW.formatToParts(i.t.ojysqa, {
              username: n,
              usernameOnClick: o,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function s(e) {
    let { application: t, username: n, usernameOnClick: o, applicationNameOnClick: l, medium: c } = e;
    return null != t
        ? i.NW.formatToParts(i.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: o,
              otherUsernameOnClick: l,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : i.NW.formatToParts(i.t['x2CN/f'], {
              username: n,
              usernameOnClick: o,
              medium: c,
              helpCenterLink: { url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
