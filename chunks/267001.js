n.d(t, {
    A: () => m,
}),
    n(321073),
    n(896048),
    n(638769);
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(282956),
    s = n(47167),
    o = n(994500),
    c = n(287809),
    d = n(624507),
    u = n(784309),
    b = n(652215),
    f = n(985018),
    p = n(587625);

function m(e) {
    let {
            webhooks: t,
            selectableWebhookChannels: n,
            lastCreatedWebhookId: m,
            editedWebhook: g,
            errors: h,
            canNavigate: x,
        } = e,
        j = r.useMemo(
            () =>
                Object.values(n).map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: (0, s.m1)(e, c.default, o.A, !0),
                })),
            [n],
        ),
        O = r.useMemo(() => {
            let e = {};
            for (let i of t)
                if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
                else {
                    let t = n[i.channel_id];
                    null != t &&
                        (e[i.channel_id] = {
                            channel: t,
                            webhooks: [i],
                        });
                }
            return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name));
        }, [n, t]),
        y = r.useCallback(
            (e) => {
                x() && (e === (null == g ? void 0 : g.id) ? a.A.stopEditingWebhook() : a.A.startEditingWebhook(e));
            },
            [x, g],
        );
    return (0, i.jsx)("div", {
        className: p.__invalid_list,
        children: O.map((e) => {
            let { channel: t, webhooks: n } = e;
            return (function (e) {
                let {
                    channel: t,
                    webhooks: n,
                    channelOptions: r,
                    lastCreatedWebhookId: a,
                    editedWebhook: m,
                    errors: g,
                    toggleWebhookExpand: h,
                } = e;
                return (0, i.jsxs)(
                    "div",
                    {
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                className: p.x,
                                children: f.intl.format(f.t.TKDIZg, {
                                    channelHook: () =>
                                        (0, i.jsx)(
                                            "span",
                                            {
                                                className: p.H,
                                                children: (0, s.m1)(t, c.default, o.A, !0),
                                            },
                                            t.id,
                                        ),
                                }),
                            }),
                            n.map((e) => {
                                var t;
                                return e.type === b.NH1.CHANNEL_FOLLOWER
                                    ? (0, i.jsx)(
                                          d.A,
                                          {
                                              webhook: e,
                                              editedWebhook: m,
                                              channelOptions: r,
                                              isExpanded: (null == m ? void 0 : m.id) === e.id,
                                              onToggleExpand: () => h(e.id),
                                              errors: g,
                                          },
                                          e.id,
                                      )
                                    : (0, i.jsx)(
                                          u.A,
                                          {
                                              id: ((t = e.id), "settings-integrations-webhook-".concat(t)),
                                              webhook: e,
                                              editedWebhook: m,
                                              channelOptions: r,
                                              isExpanded: (null == m ? void 0 : m.id) === e.id,
                                              isNew: a === e.id,
                                              onToggleExpand: () => h(e.id),
                                              errors: g,
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
                channelOptions: j,
                lastCreatedWebhookId: m,
                editedWebhook: g,
                errors: h,
                toggleWebhookExpand: y,
            });
        }),
    });
}
