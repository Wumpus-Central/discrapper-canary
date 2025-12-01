n.d(t, {
    Z: () => m,
    x: () => y,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(436774),
    s = n(2818),
    c = n(324701),
    u = n(575016),
    d = n(768943),
    f = n(175006),
    g = n(898150),
    b = n(70956),
    p = n(388032);
function m(e) {
    let { enabled: t } = s.Z.useExperiment({ location: "LongPressMessageActionSheet" }),
        n = (0, l.e7)([d.Z], () => d.Z.getSavedMessage(e.channel_id, e.id)),
        i = y({
            message: e,
            savedMessage: n,
        });
    return t
        ? null != n || (0, f.Z)()
            ? (0, r.jsxs)(a.sNh, {
                  id: "save-for-later",
                  label: p.intl.string(p.t.tpxJto),
                  action: () =>
                      null == n
                          ? (0, c.z)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                displayToast: !0,
                            })
                          : (0, c.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: n.saveData.dueAt,
                                displayToast: !0,
                            }),
                  children: [
                      null != n
                          ? (0, r.jsx)(a.sNh, {
                                id: "remove-from-for-later",
                                label: p.intl.string(p.t.SvXS1Z),
                                icon: a.plf,
                                action: () =>
                                    (0, c.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: n.saveData.dueAt,
                                        displayToast: !0,
                                    }),
                            })
                          : (0, r.jsx)(a.sNh, {
                                id: "create-bookmark",
                                label: p.intl.string(p.t["9p3D9p"]),
                                icon: a.gt9,
                                action: () =>
                                    (0, c.z)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0,
                                    }),
                            }),
                      (0, r.jsx)(a.Clw, {}),
                      i,
                  ],
              })
            : (0, r.jsx)(a.sNh, {
                  id: "save-for-later-upsell",
                  label: p.intl.string(p.t.tpxJto),
                  icon: a.SrA,
                  iconProps: { color: o.JX.PREMIUM_TIER_2 },
                  action: () =>
                      (0, c.z)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          displayToast: !0,
                      }),
              })
        : null;
}
function y(e) {
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
                    displayToast: !0,
                }),
            [t.channel_id, t.id],
        ),
        d = (0, g.r)({ createReminder: s }),
        { dueInText: f } = (0, u.AT)({
            dueAt: null == n ? void 0 : n.saveData.dueAt,
            now: l,
            type: u.hQ.LONG,
        });
    return (null == n ? void 0 : n.saveData.dueAt) == null
        ? (0, r.jsx)(a.kSQ, {
              label: p.intl.string(p.t.roMu1H),
              children: d,
          })
        : (0, r.jsxs)(a.kSQ, {
              label: f,
              children: [
                  (0, r.jsx)(a.sNh, {
                      id: "mark-complete",
                      label: p.intl.string(p.t.yjGtdJ),
                      icon: a.kmB,
                      action: () =>
                          (0, c.z)({
                              channelId: t.channel_id,
                              messageId: t.id,
                              dueAt: void 0,
                          }),
                  }),
                  (0, r.jsx)(a.sNh, {
                      id: "edit-reminder",
                      label: p.intl.string(p.t.vrbqs1),
                      children: d,
                  }),
              ],
          });
}
