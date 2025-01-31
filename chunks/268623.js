n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    s = n(481060),
    r = n(436774),
    o = n(2818),
    d = n(324701),
    c = n(575016),
    u = n(768943),
    g = n(175006),
    f = n(742989),
    m = n(898150),
    h = n(70956),
    E = n(388032);
function v(e) {
    let { enabled: t } = o.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        { showReminders: n } = f.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        v = (0, a.e7)([u.Z], () => u.Z.getSavedMessage(e.channel_id, e.id)),
        Z = (function (e) {
            let { message: t, savedMessage: n } = e,
                [a, r] = l.useState(new Date());
            l.useEffect(() => {
                let e = setInterval(() => r(new Date()), h.Z.Millis.MINUTE);
                return () => {
                    clearInterval(e);
                };
            }, []);
            let o = l.useCallback(
                    (e) =>
                        (0, d.z)({
                            channelId: t.channel_id,
                            messageId: t.id,
                            dueAt: e,
                            displayToast: !0
                        }),
                    [t.channel_id, t.id]
                ),
                u = (0, m.r)({ createReminder: o }),
                { dueInText: g } = (0, c.AT)({
                    dueAt: null == n ? void 0 : n.saveData.dueAt,
                    now: a,
                    type: c.hQ.LONG
                });
            return (null == n ? void 0 : n.saveData.dueAt) == null
                ? (0, i.jsx)(s.kSQ, {
                      label: E.intl.string(E.t.roMu1N),
                      children: u
                  })
                : (0, i.jsxs)(s.kSQ, {
                      label: g,
                      children: [
                          (0, i.jsx)(s.sNh, {
                              id: 'mark-complete',
                              label: E.intl.string(E.t.yjGtdH),
                              icon: s.kmB,
                              action: () =>
                                  (0, d.z)({
                                      channelId: t.channel_id,
                                      messageId: t.id,
                                      dueAt: void 0
                                  })
                          }),
                          (0, i.jsx)(s.sNh, {
                              id: 'edit-reminder',
                              label: E.intl.string(E.t.vrbqs7),
                              children: u
                          })
                      ]
                  });
        })({
            message: e,
            savedMessage: v
        });
    return t || n
        ? null != v || (0, g.Z)()
            ? (0, i.jsxs)(s.sNh, {
                  id: 'save-for-later',
                  label: E.intl.string(E.t.tpxJtr),
                  action: () =>
                      null == v
                          ? (0, d.z)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                displayToast: !0
                            })
                          : (0, d.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: v.saveData.dueAt,
                                displayToast: !0
                            }),
                  children: [
                      null != v
                          ? (0, i.jsx)(s.sNh, {
                                id: 'remove-from-for-later',
                                label: E.intl.string(E.t.SvXS1d),
                                icon: s.plf,
                                action: () =>
                                    (0, d.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: v.saveData.dueAt,
                                        displayToast: !0
                                    })
                            })
                          : (0, i.jsx)(s.sNh, {
                                id: 'create-bookmark',
                                label: E.intl.string(E.t['9p3D9v']),
                                icon: s.gt9,
                                action: () =>
                                    (0, d.z)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0
                                    })
                            }),
                      (0, i.jsx)(s.Clw, {}),
                      Z
                  ]
              })
            : (0, i.jsx)(s.sNh, {
                  id: 'save-for-later-upsell',
                  label: E.intl.string(E.t.tpxJtr),
                  icon: s.SrA,
                  iconProps: { color: r.JX.PREMIUM_TIER_2 },
                  action: () =>
                      (0, d.z)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          displayToast: !0
                      })
              })
        : null;
}
