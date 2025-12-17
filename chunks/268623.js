n.d(t, {
    Z: () => O,
    x: () => y,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(436774),
    c = n(2818),
    s = n(324701),
    u = n(575016),
    d = n(768943),
    f = n(175006),
    g = n(898150),
    b = n(70956),
    p = n(388032);
function O(e) {
    let { enabled: t } = c.Z.useExperiment({ location: "LongPressMessageActionSheet" }),
        n = (0, l.e7)([d.Z], () => d.Z.getSavedMessage(e.channel_id, e.id)),
        i = y({
            message: e,
            savedMessage: n,
        });
    return t
        ? null != n || (0, f.Z)()
            ? (0, r.jsxs)(o.sNh, {
                  id: "save-for-later",
                  label: p.intl.string(p.t.tpxJto),
                  action: () =>
                      null == n
                          ? (0, s.z)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                displayToast: !0,
                            })
                          : (0, s.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: n.saveData.dueAt,
                                displayToast: !0,
                            }),
                  children: [
                      null != n
                          ? (0, r.jsx)(o.sNh, {
                                id: "remove-from-for-later",
                                label: p.intl.string(p.t.SvXS1Z),
                                icon: o.plf,
                                action: () =>
                                    (0, s.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: n.saveData.dueAt,
                                        displayToast: !0,
                                    }),
                            })
                          : (0, r.jsx)(o.sNh, {
                                id: "create-bookmark",
                                label: p.intl.string(p.t["9p3D9p"]),
                                icon: o.gt9,
                                action: () =>
                                    (0, s.z)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0,
                                    }),
                            }),
                      (0, r.jsx)(o.Clw, {}),
                      i,
                  ],
              })
            : (0, r.jsx)(o.sNh, {
                  id: "save-for-later-upsell",
                  label: p.intl.string(p.t.tpxJto),
                  icon: o.SrA,
                  iconProps: { color: a.JX.PREMIUM_TIER_2 },
                  action: () =>
                      (0, s.z)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          displayToast: !0,
                      }),
              })
        : null;
}
function y(e) {
    let { message: t, savedMessage: n } = e,
        [l, a] = i.useState(new Date());
    i.useEffect(() => {
        let e = setInterval(() => a(new Date()), b.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let c = i.useCallback(
            (e) =>
                (0, s.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e,
                    displayToast: !0,
                }),
            [t.channel_id, t.id],
        ),
        d = (0, g.r)({ createReminder: c }),
        { dueInText: f } = (0, u.AT)({
            dueAt: null == n ? void 0 : n.saveData.dueAt,
            now: l,
            type: u.hQ.LONG,
        });
    return (null == n ? void 0 : n.saveData.dueAt) == null
        ? (0, r.jsx)(o.kSQ, {
              label: p.intl.string(p.t.roMu1H),
              children: d,
          })
        : (0, r.jsxs)(o.kSQ, {
              label: f,
              children: [
                  (0, r.jsx)(o.sNh, {
                      id: "mark-complete",
                      label: p.intl.string(p.t.yjGtdJ),
                      icon: o.kmB,
                      action: () =>
                          (0, s.z)({
                              channelId: t.channel_id,
                              messageId: t.id,
                              dueAt: void 0,
                          }),
                  }),
                  (0, r.jsx)(o.sNh, {
                      id: "edit-reminder",
                      label: p.intl.string(p.t.vrbqs1),
                      children: d,
                  }),
              ],
          });
}
