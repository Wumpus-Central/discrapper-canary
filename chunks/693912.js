n.d(t, {
    B2: function () {
        return o;
    },
    DS: function () {
        return a;
    },
    hj: function () {
        return s;
    },
    nh: function () {
        return u;
    }
});
var r = n(63063),
    i = n(981631),
    l = n(388032);
function a(e) {
    let { application: t, username: n, usernameHook: a = i.dG4, applicationNameHook: u = i.dG4 } = e;
    return null != t
        ? l.intl.format(l.t.J8SaGx, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: u,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : l.intl.format(l.t['+6V2sb'], {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function u(e) {
    let { application: t, username: n, usernameHook: a = i.dG4, applicationNameHook: u = i.dG4 } = e;
    return null != t
        ? l.intl.format(l.t.eGCDam, {
              username: n,
              otherUsername: t.name,
              usernameHook: a,
              otherUsernameHook: u,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : l.intl.format(l.t.sAX6rq, {
              username: n,
              usernameHook: a,
              helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function o(e) {
    let { application: t, username: n, usernameOnClick: a, applicationNameOnClick: u, medium: o } = e;
    return null != t
        ? l.intl.formatToParts(l.t['8r+Z+P'], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: u,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : l.intl.formatToParts(l.t.ojysqa, {
              username: n,
              usernameOnClick: a,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function s(e) {
    let { application: t, username: n, usernameOnClick: a, applicationNameOnClick: u, medium: o } = e;
    return null != t
        ? l.intl.formatToParts(l.t.zmc0mp, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: a,
              otherUsernameOnClick: u,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : l.intl.formatToParts(l.t['x2CN/f'], {
              username: n,
              usernameOnClick: a,
              medium: o,
              helpCenterLink: { url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
