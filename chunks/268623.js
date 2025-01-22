t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(436774),
    s = t(2818),
    u = t(324701),
    d = t(575016),
    c = t(768943),
    g = t(175006),
    f = t(742989),
    m = t(898150),
    h = t(70956),
    E = t(388032);
function I(e) {
    let { enabled: n } = s.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        { showReminders: t } = f.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        I = (0, r.e7)([c.Z], () => c.Z.getSavedMessage(e.channel_id, e.id)),
        v = (function (e) {
            let { message: n, savedMessage: t } = e,
                [r, o] = l.useState(new Date());
            l.useEffect(() => {
                let e = setInterval(() => o(new Date()), h.Z.Millis.MINUTE);
                return () => {
                    clearInterval(e);
                };
            }, []);
            let s = l.useCallback(
                    (e) =>
                        (0, u.z)({
                            channelId: n.channel_id,
                            messageId: n.id,
                            dueAt: e,
                            displayToast: !0
                        }),
                    [n.channel_id, n.id]
                ),
                c = (0, m.useMessageReminderDurationSuggestions)({ createReminder: s }),
                { dueInText: g } = (0, d.AT)({
                    dueAt: null == t ? void 0 : t.saveData.dueAt,
                    now: r,
                    type: d.hQ.LONG
                });
            return (null == t ? void 0 : t.saveData.dueAt) == null
                ? (0, i.jsx)(a.MenuGroup, {
                      label: E.intl.string(E.t.roMu1N),
                      children: c
                  })
                : (0, i.jsxs)(a.MenuGroup, {
                      label: g,
                      children: [
                          (0, i.jsx)(a.MenuItem, {
                              id: 'mark-complete',
                              label: E.intl.string(E.t.yjGtdH),
                              icon: a.CheckmarkSmallIcon,
                              action: () =>
                                  (0, u.z)({
                                      channelId: n.channel_id,
                                      messageId: n.id,
                                      dueAt: void 0
                                  })
                          }),
                          (0, i.jsx)(a.MenuItem, {
                              id: 'edit-reminder',
                              label: E.intl.string(E.t.vrbqs7),
                              children: c
                          })
                      ]
                  });
        })({
            message: e,
            savedMessage: I
        });
    return n || t
        ? null != I || (0, g.Z)()
            ? (0, i.jsxs)(a.MenuItem, {
                  id: 'save-for-later',
                  label: E.intl.string(E.t.tpxJtr),
                  action: () =>
                      null == I
                          ? (0, u.z)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                displayToast: !0
                            })
                          : (0, u.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: I.saveData.dueAt,
                                displayToast: !0
                            }),
                  children: [
                      null != I
                          ? (0, i.jsx)(a.MenuItem, {
                                id: 'remove-from-for-later',
                                label: E.intl.string(E.t.SvXS1d),
                                icon: a.BookmarkIcon,
                                action: () =>
                                    (0, u.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: I.saveData.dueAt,
                                        displayToast: !0
                                    })
                            })
                          : (0, i.jsx)(a.MenuItem, {
                                id: 'create-bookmark',
                                label: E.intl.string(E.t['9p3D9v']),
                                icon: a.BookmarkOutlineIcon,
                                action: () =>
                                    (0, u.z)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0
                                    })
                            }),
                      (0, i.jsx)(a.MenuSeparator, {}),
                      v
                  ]
              })
            : (0, i.jsx)(a.MenuItem, {
                  id: 'save-for-later-upsell',
                  label: E.intl.string(E.t.tpxJtr),
                  icon: a.NitroWheelIcon,
                  iconProps: { color: o.JX.PREMIUM_TIER_2 },
                  action: () =>
                      (0, u.z)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          displayToast: !0
                      })
              })
        : null;
}
