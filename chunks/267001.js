n.d(t, { A: () => x }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(834730),
    a = n(282956),
    r = n(47167),
    o = n(994500),
    d = n(287809),
    c = n(624507),
    u = n(784309),
    m = n(652215),
    g = n(985018),
    h = n(400698);
function x(e) {
    let {
            webhooks: t,
            selectableWebhookChannels: n,
            lastCreatedWebhookId: x,
            editedWebhook: p,
            errors: A,
            canNavigate: b,
        } = e,
        f = l.useMemo(
            () => Object.values(n).map((e) => ({ id: e.id, value: e.id, label: (0, r.m1)(e, d.default, o.A, !0) })),
            [n],
        ),
        _ = l.useMemo(() => {
            let e = {};
            for (let i of t)
                if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
                else {
                    let t = n[i.channel_id];
                    null != t && (e[i.channel_id] = { channel: t, webhooks: [i] });
                }
            return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name));
        }, [n, t]),
        j = l.useCallback(
            (e) => {
                b() && (e === p?.id ? a.A.stopEditingWebhook() : a.A.startEditingWebhook(e));
            },
            [b, p],
        );
    return (0, i.jsx)("div", {
        className: h.__invalid_list,
        children: _.map((e) => {
            let { channel: t, webhooks: n } = e;
            return (function (e) {
                let {
                    channel: t,
                    webhooks: n,
                    channelOptions: l,
                    lastCreatedWebhookId: a,
                    editedWebhook: x,
                    errors: p,
                    toggleWebhookExpand: A,
                } = e;
                return (0, i.jsxs)(
                    "div",
                    {
                        children: [
                            (0, i.jsx)(s.E, {
                                variant: "text-md/medium",
                                className: h.x,
                                children: g.intl.format(g.t.TKDIZg, {
                                    channelHook: () =>
                                        (0, i.jsx)(
                                            "span",
                                            { className: h.H, children: (0, r.m1)(t, d.default, o.A, !0) },
                                            t.id,
                                        ),
                                }),
                            }),
                            n.map((e) => {
                                var t;
                                return e.type === m.NH1.CHANNEL_FOLLOWER
                                    ? (0, i.jsx)(
                                          c.A,
                                          {
                                              webhook: e,
                                              editedWebhook: x,
                                              channelOptions: l,
                                              isExpanded: x?.id === e.id,
                                              onToggleExpand: () => A(e.id),
                                              errors: p,
                                          },
                                          e.id,
                                      )
                                    : (0, i.jsx)(
                                          u.A,
                                          {
                                              id: ((t = e.id), `settings-integrations-webhook-${t}`),
                                              webhook: e,
                                              editedWebhook: x,
                                              channelOptions: l,
                                              isExpanded: x?.id === e.id,
                                              isNew: a === e.id,
                                              onToggleExpand: () => A(e.id),
                                              errors: p,
                                          },
                                          e.id,
                                      );
                            }),
                        ],
                    },
                    t.id,
                );
            })({
                channel: t,
                webhooks: n,
                channelOptions: f,
                lastCreatedWebhookId: x,
                editedWebhook: p,
                errors: A,
                toggleWebhookExpand: j,
            });
        }),
    });
}
