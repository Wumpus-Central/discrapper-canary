"use strict";
n.d(t, { A: () => u, q: () => h });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(36525),
    a = n(282956),
    r = n(875264),
    o = n(291731),
    d = n(863036),
    c = n(71393);
function u(e) {
    let { refToScroller: t } = e,
        n = (0, i.bG)([d.A], () => d.A.getChannel(), []),
        s = (0, i.bG)([c.A], () => (null != n ? c.A.getGuild(n.getGuildId()) : null), [n]),
        {
            section: a,
            sectionId: u,
            webhooks: h,
            editedWebhook: g,
            isFetching: m,
            errors: x,
        } = (0, i.cf)([o.A], () => o.A.getProps(), []);
    return null == s || null == n
        ? null
        : (0, l.jsx)(r.A, {
              guild: s,
              channel: n,
              section: a,
              sectionId: u,
              webhooks: h,
              editedWebhook: g,
              isFetchingWebhooks: m,
              hasChanges: o.A.hasChanges,
              errors: x,
              refToScroller: t,
          });
}
function h() {
    let { channel: e, submitting: t } = (0, i.cf)([d.A], () => d.A.getProps()),
        n = (0, i.bG)([o.A], () => o.A.editedWebhook),
        r = (0, i.bG)([c.A], () => (null != e ? c.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, l.jsx)(s.A, {
        submitting: t,
        onReset: () => {
            a.A.init();
        },
        onSave: () => {
            null != r && null != n && a.A.saveWebhook(r.id, n);
        },
    });
}
