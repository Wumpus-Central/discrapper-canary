n.d(t, { Z: () => g }), n(653041), n(47120), n(230036);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(139387),
    a = n(933557),
    s = n(699516),
    c = n(594174),
    d = n(491302),
    u = n(936726),
    p = n(981631),
    m = n(388032),
    b = n(274008);
function g(e) {
    let { webhooks: t, selectableWebhookChannels: n, lastCreatedWebhookId: g, editedWebhook: f, errors: h, canNavigate: x } = e,
        j = i.useMemo(
            () =>
                Object.values(n).map((e) => ({
                    value: e.id,
                    label: (0, a.F6)(e, c.default, s.Z, !0)
                })),
            [n]
        ),
        N = i.useMemo(() => {
            let e = {};
            for (let r of t)
                if (r.channel_id in e) e[r.channel_id].webhooks.push(r);
                else {
                    let t = n[r.channel_id];
                    null != t &&
                        (e[r.channel_id] = {
                            channel: t,
                            webhooks: [r]
                        });
                }
            return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name));
        }, [n, t]),
        O = i.useCallback(
            (e) => {
                x() && (e === (null == f ? void 0 : f.id) ? o.Z.stopEditingWebhook() : o.Z.startEditingWebhook(e));
            },
            [x, f]
        );
    return (0, r.jsx)('div', {
        className: b.__invalid_list,
        children: N.map((e) => {
            let { channel: t, webhooks: n } = e;
            return (function (e) {
                let { channel: t, webhooks: n, channelOptions: i, lastCreatedWebhookId: o, editedWebhook: g, errors: f, toggleWebhookExpand: h } = e;
                return (0, r.jsxs)(
                    'div',
                    {
                        children: [
                            (0, r.jsx)(l.vwX, {
                                className: b.groupHeader,
                                children: m.NW.format(m.t.TKDIZm, {
                                    channelHook: () =>
                                        (0, r.jsx)(
                                            'span',
                                            {
                                                className: b.channelName,
                                                children: (0, a.F6)(t, c.default, s.Z, !0)
                                            },
                                            t.id
                                        )
                                })
                            }),
                            n.map((e) => {
                                var t;
                                return e.type === p.ylB.CHANNEL_FOLLOWER
                                    ? (0, r.jsx)(
                                          d.Z,
                                          {
                                              webhook: e,
                                              editedWebhook: g,
                                              channelOptions: i,
                                              isExpanded: (null == g ? void 0 : g.id) === e.id,
                                              onToggleExpand: () => h(e.id),
                                              errors: f
                                          },
                                          e.id
                                      )
                                    : (0, r.jsx)(
                                          u.Z,
                                          {
                                              id: ((t = e.id), 'settings-integrations-webhook-'.concat(t)),
                                              webhook: e,
                                              editedWebhook: g,
                                              channelOptions: i,
                                              isExpanded: (null == g ? void 0 : g.id) === e.id,
                                              isNew: o === e.id,
                                              onToggleExpand: () => h(e.id),
                                              errors: f
                                          },
                                          e.id
                                      );
                            })
                        ]
                    },
                    t.id
                );
            })({
                channel: t,
                webhooks: n,
                channelOptions: j,
                lastCreatedWebhookId: g,
                editedWebhook: f,
                errors: h,
                toggleWebhookExpand: O
            });
        })
    });
}
