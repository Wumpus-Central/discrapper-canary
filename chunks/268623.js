n.d(t, { Z: () => p }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(436774),
    s = n(2818),
    c = n(324701),
    u = n(575016),
    d = n(768943),
    f = n(175006),
    g = n(742989),
    m = n(898150),
    b = n(70956),
    h = n(388032);
function p(e) {
    let { enabled: t } = s.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        { showReminders: n } = g.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        p = (0, l.e7)([d.Z], () => d.Z.getSavedMessage(e.channel_id, e.id)),
        O = (function (e) {
            let { message: t, savedMessage: n } = e,
                [l, o] = r.useState(new Date());
            r.useEffect(() => {
                let e = setInterval(() => o(new Date()), b.Z.Millis.MINUTE);
                return () => {
                    clearInterval(e);
                };
            }, []);
            let s = r.useCallback(
                    (e) =>
                        (0, c.z)({
                            channelId: t.channel_id,
                            messageId: t.id,
                            dueAt: e,
                            displayToast: !0
                        }),
                    [t.channel_id, t.id]
                ),
                d = (0, m.r)({ createReminder: s }),
                { dueInText: f } = (0, u.AT)({
                    dueAt: null == n ? void 0 : n.saveData.dueAt,
                    now: l,
                    type: u.hQ.LONG
                });
            return (null == n ? void 0 : n.saveData.dueAt) == null
                ? (0, i.jsx)(a.kSQ, {
                      label: h.intl.string(h.t.roMu1N),
                      children: d
                  })
                : (0, i.jsxs)(a.kSQ, {
                      label: f,
                      children: [
                          (0, i.jsx)(a.sNh, {
                              id: 'mark-complete',
                              label: h.intl.string(h.t.yjGtdH),
                              icon: a.kmB,
                              action: () =>
                                  (0, c.z)({
                                      channelId: t.channel_id,
                                      messageId: t.id,
                                      dueAt: void 0
                                  })
                          }),
                          (0, i.jsx)(a.sNh, {
                              id: 'edit-reminder',
                              label: h.intl.string(h.t.vrbqs7),
                              children: d
                          })
                      ]
                  });
        })({
            message: e,
            savedMessage: p
        });
    return t || n
        ? null != p || (0, f.Z)()
            ? (0, i.jsxs)(a.sNh, {
                  id: 'save-for-later',
                  label: h.intl.string(h.t.tpxJtr),
                  action: () =>
                      null == p
                          ? (0, c.z)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                displayToast: !0
                            })
                          : (0, c.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: p.saveData.dueAt,
                                displayToast: !0
                            }),
                  children: [
                      null != p
                          ? (0, i.jsx)(a.sNh, {
                                id: 'remove-from-for-later',
                                label: h.intl.string(h.t.SvXS1d),
                                icon: a.plf,
                                action: () =>
                                    (0, c.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: p.saveData.dueAt,
                                        displayToast: !0
                                    })
                            })
                          : (0, i.jsx)(a.sNh, {
                                id: 'create-bookmark',
                                label: h.intl.string(h.t['9p3D9v']),
                                icon: a.gt9,
                                action: () =>
                                    (0, c.z)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0
                                    })
                            }),
                      (0, i.jsx)(a.Clw, {}),
                      O
                  ]
              })
            : (0, i.jsx)(a.sNh, {
                  id: 'save-for-later-upsell',
                  label: h.intl.string(h.t.tpxJtr),
                  icon: a.SrA,
                  iconProps: { color: o.JX.PREMIUM_TIER_2 },
                  action: () =>
                      (0, c.z)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          displayToast: !0
                      })
              })
        : null;
}
