n.d(t, { Z: () => g }), n(539854), n(388685), n(642613);
var i = n(54381),
    r = n(473749),
    l = n(481060),
    a = n(139387),
    o = n(933557),
    s = n(699516),
    c = n(594174),
    d = n(491302),
    u = n(936726),
    m = n(981631),
    b = n(388032),
    p = n(434593);
function g(e) {
    let {
            webhooks: t,
            selectableWebhookChannels: n,
            lastCreatedWebhookId: g,
            editedWebhook: f,
            errors: h,
            canNavigate: x,
        } = e,
        j = r.useMemo(
            () =>
                Object.values(n).map((e) => ({
                    value: e.id,
                    label: (0, o.F6)(e, c.default, s.Z, !0),
                })),
            [n],
        ),
        v = r.useMemo(() => {
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
        O = r.useCallback(
            (e) => {
                x() && (e === (null == f ? void 0 : f.id) ? a.Z.stopEditingWebhook() : a.Z.startEditingWebhook(e));
            },
            [x, f],
        );
    return (0, i.jsx)("div", {
        className: p.__invalid_list,
        children: v.map((e) => {
            let { channel: t, webhooks: n } = e;
            return (function (e) {
                let {
                    channel: t,
                    webhooks: n,
                    channelOptions: r,
                    lastCreatedWebhookId: a,
                    editedWebhook: g,
                    errors: f,
                    toggleWebhookExpand: h,
                } = e;
                return (0, i.jsxs)(
                    "div",
                    {
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                className: p.groupHeader,
                                children: b.intl.format(b.t.TKDIZg, {
                                    channelHook: () =>
                                        (0, i.jsx)(
                                            "span",
                                            {
                                                className: p.channelName,
                                                children: (0, o.F6)(t, c.default, s.Z, !0),
                                            },
                                            t.id,
                                        ),
                                }),
                            }),
                            n.map((e) => {
                                var t;
                                return e.type === m.ylB.CHANNEL_FOLLOWER
                                    ? (0, i.jsx)(
                                          d.Z,
                                          {
                                              webhook: e,
                                              editedWebhook: g,
                                              channelOptions: r,
                                              isExpanded: (null == g ? void 0 : g.id) === e.id,
                                              onToggleExpand: () => h(e.id),
                                              errors: f,
                                          },
                                          e.id,
                                      )
                                    : (0, i.jsx)(
                                          u.Z,
                                          {
                                              id: ((t = e.id), "settings-integrations-webhook-".concat(t)),
                                              webhook: e,
                                              editedWebhook: g,
                                              channelOptions: r,
                                              isExpanded: (null == g ? void 0 : g.id) === e.id,
                                              isNew: a === e.id,
                                              onToggleExpand: () => h(e.id),
                                              errors: f,
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
                lastCreatedWebhookId: g,
                editedWebhook: f,
                errors: h,
                toggleWebhookExpand: O,
            });
        }),
    });
}
