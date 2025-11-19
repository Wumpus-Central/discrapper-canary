n.d(t, {
    Z: () => p,
    s: () => _,
});
var r = n(54381);
n(473749);
var i = n(763472),
    a = n(394821),
    o = n(49012),
    s = n(591759),
    l = n(652853),
    c = n(732380),
    u = n(671955),
    d = n(388032),
    f = n(663907);
async function _(e) {
    let { activity: t, user: n, index: r } = e;
    try {
        let e = await (0, i.sd)(t, n.id);
        if (e.button_urls.length <= r) return;
        let a = e.button_urls[r];
        if ("string" != typeof a) return;
        let l = s.Z.safeParseWithQuery(a);
        if ((null == l ? void 0 : l.protocol) == null || (null == l ? void 0 : l.hostname) == null) return;
        (0, o.q)({
            href: s.Z.format(l),
            trusted: !1,
        });
    } catch (e) {}
}
function p(e) {
    let { user: t, activity: n, onAction: i } = e,
        { themeType: o } = (0, l.z)();
    if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1) return null;
    let s = (0, a.Z)(n);
    return o === u.l.MODAL_V2
        ? (0, r.jsx)("div", {
              className: f.customButtons,
              children: n.buttons.map((e, a) =>
                  (0, r.jsx)(
                      c.O1,
                      {
                          text: s ? d.intl.string(d.t.I6JG46) : e,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  null == i ||
                                      i({ action: s ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  _({
                                      user: t,
                                      activity: n,
                                      index: a,
                                  });
                          },
                      },
                      a,
                  ),
              ),
          })
        : (0, r.jsx)("div", {
              className: f.customButtons,
              children: n.buttons.map((e, a) =>
                  (0, r.jsx)(
                      c.O1,
                      {
                          text: s ? d.intl.string(d.t.I6JG46) : e,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  null == i ||
                                      i({ action: s ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON" : "PRESS_CUSTOM_BUTTON" }),
                                  _({
                                      user: t,
                                      activity: n,
                                      index: a,
                                  });
                          },
                      },
                      a,
                  ),
              ),
          });
}
