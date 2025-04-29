n.d(t, {
    Z: () => h,
    s: () => p
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(763472),
    a = n(394821),
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
        let e = await (0, o.sd)(t, n.id);
        if (e.button_urls.length <= r) return;
        let i = e.button_urls[r];
        if ('string' != typeof i) return;
        let a = l.Z.safeParseWithQuery(i);
        if ((null == a ? void 0 : a.protocol) == null || (null == a ? void 0 : a.hostname) == null) return;
        (0, s.q)({
            href: l.Z.format(a),
            trusted: !1
        });
    } catch (e) {}
}
function h(e) {
    let { user: t, activity: n, onAction: o } = e,
        { themeType: s } = (0, c.z)();
    if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1) return null;
    let l = (0, a.Z)(n);
    return s === d.lY.MODAL_V2
        ? (0, r.jsx)(r.Fragment, {
              children: n.buttons.map((e, a) =>
                  (0, r.jsx)(
                      u.tG,
                      {
                          text: l ? f.intl.string(f.t['I6JG4+']) : e,
                          size: i.PhG.TINY,
                          themeColor: 'secondary',
                          onClick: (e) => {
                              e.stopPropagation(),
                                  null == o || o({ action: l ? 'PRESS_WATCH_ON_CRUNCHYROLL_BUTTON' : 'PRESS_CUSTOM_BUTTON' }),
                                  p({
                                      user: t,
                                      activity: n,
                                      index: a
                                  });
                          }
                      },
                      a
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
                                  null == o || o({ action: l ? 'PRESS_WATCH_ON_CRUNCHYROLL_BUTTON' : 'PRESS_CUSTOM_BUTTON' }),
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
