n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(139387),
    o = n(933557),
    s = n(699516),
    c = n(594174),
    d = n(491302),
    u = n(936726),
    m = n(981631),
    h = n(388032),
    p = n(669379);
function g(e) {
    let { webhooks: t, selectableWebhookChannels: n, lastCreatedWebhookId: g, editedWebhook: x, errors: f, canNavigate: b } = e,
        v = l.useMemo(
            () =>
                Object.values(n).map((e) => ({
                    value: e.id,
                    label: (0, o.F6)(e, c.default, s.Z, !0)
                })),
            [n]
        ),
        C = l.useMemo(() => {
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
        I = l.useCallback(
            (e) => {
                b() && (e === (null == x ? void 0 : x.id) ? a.Z.stopEditingWebhook() : a.Z.startEditingWebhook(e));
            },
            [b, x]
        );
    return (0, i.jsx)('div', {
        className: p.__invalid_list,
        children: C.map((e) => {
            let { channel: t, webhooks: n } = e;
            return (function (e) {
                let { channel: t, webhooks: n, channelOptions: l, lastCreatedWebhookId: a, editedWebhook: g, errors: x, toggleWebhookExpand: f } = e;
                return (0, i.jsxs)(
                    'div',
                    {
                        children: [
                            (0, i.jsx)(r.FormTitle, {
                                className: p.groupHeader,
                                children: h.intl.format(h.t.TKDIZm, {
                                    channelHook: () =>
                                        (0, i.jsx)(
                                            'span',
                                            {
                                                className: p.channelName,
                                                children: (0, o.F6)(t, c.default, s.Z, !0)
                                            },
                                            t.id
                                        )
                                })
                            }),
                            n.map((e) => {
                                var t;
                                if (e.type === m.ylB.CHANNEL_FOLLOWER)
                                    return (0, i.jsx)(
                                        d.Z,
                                        {
                                            webhook: e,
                                            editedWebhook: g,
                                            channelOptions: l,
                                            isExpanded: (null == g ? void 0 : g.id) === e.id,
                                            onToggleExpand: () => f(e.id),
                                            errors: x
                                        },
                                        e.id
                                    );
                                return (0, i.jsx)(
                                    u.Z,
                                    {
                                        id: ((t = e.id), 'settings-integrations-webhook-'.concat(t)),
                                        webhook: e,
                                        editedWebhook: g,
                                        channelOptions: l,
                                        isExpanded: (null == g ? void 0 : g.id) === e.id,
                                        isNew: a === e.id,
                                        onToggleExpand: () => f(e.id),
                                        errors: x
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
                editedWebhook: x,
                errors: f,
                toggleWebhookExpand: I
            });
        })
    });
}
