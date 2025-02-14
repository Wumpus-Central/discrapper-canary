n.d(t, { Z: () => g }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(139387),
    s = n(933557),
    o = n(699516),
    d = n(594174),
    c = n(491302),
    u = n(936726),
    m = n(981631),
    h = n(388032),
    x = n(314380);
function g(e) {
    let { webhooks: t, selectableWebhookChannels: n, lastCreatedWebhookId: g, editedWebhook: p, errors: f, canNavigate: b } = e,
        v = l.useMemo(
            () =>
                Object.values(n).map((e) => ({
                    value: e.id,
                    label: (0, s.F6)(e, d.default, o.Z, !0)
                })),
            [n]
        ),
        _ = l.useMemo(() => {
            let e = {};
            for (let i of t)
                if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
                else {
                    let t = n[i.channel_id];
                    null != t &&
                        (e[i.channel_id] = {
                            channel: t,
                            webhooks: [i]
                        });
                }
            return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name));
        }, [n, t]),
        N = l.useCallback(
            (e) => {
                b() && (e === (null == p ? void 0 : p.id) ? r.Z.stopEditingWebhook() : r.Z.startEditingWebhook(e));
            },
            [b, p]
        );
    return (0, i.jsx)('div', {
        className: x.__invalid_list,
        children: _.map((e) => {
            let { channel: t, webhooks: n } = e;
            return (function (e) {
                let { channel: t, webhooks: n, channelOptions: l, lastCreatedWebhookId: r, editedWebhook: g, errors: p, toggleWebhookExpand: f } = e;
                return (0, i.jsxs)(
                    'div',
                    {
                        children: [
                            (0, i.jsx)(a.vwX, {
                                className: x.groupHeader,
                                children: h.intl.format(h.t.TKDIZm, {
                                    channelHook: () =>
                                        (0, i.jsx)(
                                            'span',
                                            {
                                                className: x.channelName,
                                                children: (0, s.F6)(t, d.default, o.Z, !0)
                                            },
                                            t.id
                                        )
                                })
                            }),
                            n.map((e) => {
                                var t;
                                return e.type === m.ylB.CHANNEL_FOLLOWER
                                    ? (0, i.jsx)(
                                          c.Z,
                                          {
                                              webhook: e,
                                              editedWebhook: g,
                                              channelOptions: l,
                                              isExpanded: (null == g ? void 0 : g.id) === e.id,
                                              onToggleExpand: () => f(e.id),
                                              errors: p
                                          },
                                          e.id
                                      )
                                    : (0, i.jsx)(
                                          u.Z,
                                          {
                                              id: ((t = e.id), 'settings-integrations-webhook-'.concat(t)),
                                              webhook: e,
                                              editedWebhook: g,
                                              channelOptions: l,
                                              isExpanded: (null == g ? void 0 : g.id) === e.id,
                                              isNew: r === e.id,
                                              onToggleExpand: () => f(e.id),
                                              errors: p
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
                channelOptions: v,
                lastCreatedWebhookId: g,
                editedWebhook: p,
                errors: f,
                toggleWebhookExpand: N
            });
        })
    });
}
