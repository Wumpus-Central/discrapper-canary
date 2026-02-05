n.d(t, { A: () => h }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(282956),
    r = n(47167),
    o = n(994500),
    d = n(287809),
    c = n(624507),
    u = n(784309),
    m = n(652215),
    g = n(985018),
    x = n(587625);
function h(e) {
    let {
            webhooks: t,
            selectableWebhookChannels: n,
            lastCreatedWebhookId: h,
            editedWebhook: p,
            errors: A,
            canNavigate: b,
        } = e,
        _ = l.useMemo(
            () => Object.values(n).map((e) => ({ id: e.id, value: e.id, label: (0, r.m1)(e, d.default, o.A, !0) })),
            [n],
        ),
        f = l.useMemo(() => {
            let e = {};
            for (let i of t)
                if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
                else {
                    let t = n[i.channel_id];
                    null != t && (e[i.channel_id] = { channel: t, webhooks: [i] });
                }
            return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name));
        }, [n, t]),
        N = l.useCallback(
            (e) => {
                b() && (e === p?.id ? a.A.stopEditingWebhook() : a.A.startEditingWebhook(e));
            },
            [b, p],
        );
    return (0, i.jsx)("div", {
        className: x.__invalid_list,
        children: f.map((e) => {
            let { channel: t, webhooks: n } = e;
            return (function (e) {
                let {
                    channel: t,
                    webhooks: n,
                    channelOptions: l,
                    lastCreatedWebhookId: a,
                    editedWebhook: h,
                    errors: p,
                    toggleWebhookExpand: A,
                } = e;
                return (0, i.jsxs)(
                    "div",
                    {
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: "text-md/medium",
                                className: x.x,
                                children: g.intl.format(g.t.TKDIZg, {
                                    channelHook: () =>
                                        (0, i.jsx)(
                                            "span",
                                            { className: x.H, children: (0, r.m1)(t, d.default, o.A, !0) },
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
                                              editedWebhook: h,
                                              channelOptions: l,
                                              isExpanded: h?.id === e.id,
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
                                              editedWebhook: h,
                                              channelOptions: l,
                                              isExpanded: h?.id === e.id,
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
                channelOptions: _,
                lastCreatedWebhookId: h,
                editedWebhook: p,
                errors: A,
                toggleWebhookExpand: N,
            });
        }),
    });
}
