n.d(t, {
    Z: () => h,
    s: () => p
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(763472),
    o = n(394821),
    s = n(49012),
    l = n(591759),
    c = n(652853),
    u = n(475413),
    d = n(228168),
    f = n(388032),
    _ = n(227832);
async function p(e) {
    let { activity: t, user: n, index: r } = e;
    try {
        let e = await (0, a.sd)(t, n.id);
        if (e.button_urls.length <= r) return;
        let i = e.button_urls[r];
        if ('string' != typeof i) return;
        let o = l.Z.safeParseWithQuery(i);
        if ((null == o ? void 0 : o.protocol) == null || (null == o ? void 0 : o.hostname) == null) return;
        (0, s.q)({
            href: l.Z.format(o),
            trusted: !1
        });
    } catch (e) {}
}
function h(e) {
    let { user: t, activity: n, onAction: a } = e,
        { themeType: s } = (0, c.z)();
    if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1) return null;
    let l = (0, o.Z)(n);
    return s === d.lY.MODAL_V2
        ? (0, r.jsx)(r.Fragment, {
              children: n.buttons.map((e, o) =>
                  (0, r.jsx)(
                      u.tG,
                      {
                          text: l ? f.intl.string(f.t['I6JG4+']) : e,
                          size: i.PhG.TINY,
                          themeColor: 'none',
                          onClick: (e) => {
                              e.stopPropagation(),
                                  null == a || a({ action: l ? 'PRESS_WATCH_ON_CRUNCHYROLL_BUTTON' : 'PRESS_CUSTOM_BUTTON' }),
                                  p({
                                      user: t,
                                      activity: n,
                                      index: o
                                  });
                          }
                      },
                      o
                  )
              )
          })
        : (0, r.jsx)(r.Fragment, {
              children: n.buttons.map((e, i) =>
                  (0, r.jsx)(
                      u.tG,
                      {
                          text: l ? f.intl.string(f.t['I6JG4+']) : e,
                          className: _.customButton,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(),
                                  null == a || a({ action: l ? 'PRESS_WATCH_ON_CRUNCHYROLL_BUTTON' : 'PRESS_CUSTOM_BUTTON' }),
                                  p({
                                      user: t,
                                      activity: n,
                                      index: i
                                  });
                          }
                      },
                      i
                  )
              )
          });
}
