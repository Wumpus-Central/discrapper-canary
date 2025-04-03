n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
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
    p = n(388032);
function h(e) {
    let { enabled: t } = s.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        { showReminders: n } = g.Z.useExperiment({ location: 'LongPressMessageActionSheet' }),
        h = (0, l.e7)([d.Z], () => d.Z.getSavedMessage(e.channel_id, e.id)),
        y = (function (e) {
            let { message: t, savedMessage: n } = e,
                [l, o] = i.useState(new Date());
            i.useEffect(() => {
                let e = setInterval(() => o(new Date()), b.Z.Millis.MINUTE);
                return () => {
                    clearInterval(e);
                };
            }, []);
            let s = i.useCallback(
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
                ? (0, r.jsx)(a.kSQ, {
                      label: p.NW.string(p.t.roMu1N),
                      children: d
                  })
                : (0, r.jsxs)(a.kSQ, {
                      label: f,
                      children: [
                          (0, r.jsx)(a.sNh, {
                              id: 'mark-complete',
                              label: p.NW.string(p.t.yjGtdH),
                              icon: a.kmB,
                              action: () =>
                                  (0, c.z)({
                                      channelId: t.channel_id,
                                      messageId: t.id,
                                      dueAt: void 0
                                  })
                          }),
                          (0, r.jsx)(a.sNh, {
                              id: 'edit-reminder',
                              label: p.NW.string(p.t.vrbqs7),
                              children: d
                          })
                      ]
                  });
        })({
            message: e,
            savedMessage: h
        });
    return t || n
        ? null != h || (0, f.Z)()
            ? (0, r.jsxs)(a.sNh, {
                  id: 'save-for-later',
                  label: p.NW.string(p.t.tpxJtr),
                  action: () =>
                      null == h
                          ? (0, c.z)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                displayToast: !0
                            })
                          : (0, c.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: h.saveData.dueAt,
                                displayToast: !0
                            }),
                  children: [
                      null != h
                          ? (0, r.jsx)(a.sNh, {
                                id: 'remove-from-for-later',
                                label: p.NW.string(p.t.SvXS1d),
                                icon: a.plf,
                                action: () =>
                                    (0, c.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: h.saveData.dueAt,
                                        displayToast: !0
                                    })
                            })
                          : (0, r.jsx)(a.sNh, {
                                id: 'create-bookmark',
                                label: p.NW.string(p.t['9p3D9v']),
                                icon: a.gt9,
                                action: () =>
                                    (0, c.z)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0
                                    })
                            }),
                      (0, r.jsx)(a.Clw, {}),
                      y
                  ]
              })
            : (0, r.jsx)(a.sNh, {
                  id: 'save-for-later-upsell',
                  label: p.NW.string(p.t.tpxJtr),
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
