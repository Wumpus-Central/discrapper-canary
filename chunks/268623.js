(n.d(t, {
    Z: () => m,
    x: () => g
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(436774),
    l = n(2818),
    c = n(324701),
    u = n(575016),
    d = n(768943),
    f = n(175006),
    _ = n(898150),
    p = n(70956),
    h = n(388032);
function m(e) {
    let { enabled: t } = l.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        n = (0, a.e7)([d.Z], () => d.Z.getSavedMessage(e.channel_id, e.id)),
        i = g({
            message: e,
            savedMessage: n
        });
    return t
        ? null != n || (0, f.Z)()
            ? (0, r.jsxs)(o.sNh, {
                  id: 'save-for-later',
                  label: h.intl.string(h.t.tpxJtr),
                  action: () =>
                      null == n
                          ? (0, c.z)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                displayToast: !0
                            })
                          : (0, c.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: n.saveData.dueAt,
                                displayToast: !0
                            }),
                  children: [
                      null != n
                          ? (0, r.jsx)(o.sNh, {
                                id: 'remove-from-for-later',
                                label: h.intl.string(h.t.SvXS1d),
                                icon: o.plf,
                                action: () =>
                                    (0, c.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: n.saveData.dueAt,
                                        displayToast: !0
                                    })
                            })
                          : (0, r.jsx)(o.sNh, {
                                id: 'create-bookmark',
                                label: h.intl.string(h.t['9p3D9v']),
                                icon: o.gt9,
                                action: () =>
                                    (0, c.z)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0
                                    })
                            }),
                      (0, r.jsx)(o.Clw, {}),
                      i
                  ]
              })
            : (0, r.jsx)(o.sNh, {
                  id: 'save-for-later-upsell',
                  label: h.intl.string(h.t.tpxJtr),
                  icon: o.SrA,
                  iconProps: { color: s.JX.PREMIUM_TIER_2 },
                  action: () =>
                      (0, c.z)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          displayToast: !0
                      })
              })
        : null;
}
function g(e) {
    let { message: t, savedMessage: n } = e,
        [a, s] = i.useState(new Date());
    i.useEffect(() => {
        let e = setInterval(() => s(new Date()), p.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let l = i.useCallback(
            (e) =>
                (0, c.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e,
                    displayToast: !0
                }),
            [t.channel_id, t.id]
        ),
        d = (0, _.r)({ createReminder: l }),
        { dueInText: f } = (0, u.AT)({
            dueAt: null == n ? void 0 : n.saveData.dueAt,
            now: a,
            type: u.hQ.LONG
        });
    return (null == n ? void 0 : n.saveData.dueAt) == null
        ? (0, r.jsx)(o.kSQ, {
              label: h.intl.string(h.t.roMu1N),
              children: d
          })
        : (0, r.jsxs)(o.kSQ, {
              label: f,
              children: [
                  (0, r.jsx)(o.sNh, {
                      id: 'mark-complete',
                      label: h.intl.string(h.t.yjGtdH),
                      icon: o.kmB,
                      action: () =>
                          (0, c.z)({
                              channelId: t.channel_id,
                              messageId: t.id,
                              dueAt: void 0
                          })
                  }),
                  (0, r.jsx)(o.sNh, {
                      id: 'edit-reminder',
                      label: h.intl.string(h.t.vrbqs7),
                      children: d
                  })
              ]
          });
}
