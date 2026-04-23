i.d(t, { default: () => _ });
var n = i(627968),
    l = i(64700),
    c = i(189213),
    s = i(150934),
    d = i(369162),
    a = i(427562),
    o = i(652215),
    r = i(985018),
    u = i(710825);
function _(e) {
    let { guildId: t, transitionState: i, onClose: _, onConfirm: h } = e,
        { rules: k, rulesAccepted: C } = (0, d.P)(),
        E = l.useCallback(() => {
            _(), h();
        }, [_, h]);
    return (0, n.jsx)(c.Modal, {
        title: r.intl.string(r.t["Q8OFN+"]),
        subtitle: r.intl.format(r.t.JLUVfo, {
            onCommunityGuidelinesClick: () =>
                (0, a.p3)({ articleId: o.MVz.PUBLIC_GUILD_GUILDLINES, guildId: t, modalStep: a.iv.AGREE_TO_RULES }),
            onDiscoveryGuidelinesClick: () =>
                (0, a.p3)({ articleId: o.MVz.SERVER_DISCOVERY_GUIDELINES, guildId: t, modalStep: a.iv.AGREE_TO_RULES }),
        }),
        actions: [{ disabled: !C, text: r.intl.string(r.t["qjtt/p"]), onClick: E }],
        transitionState: i,
        onClose: _,
        children: (0, n.jsx)("div", {
            className: u.H,
            children: k.map((e) =>
                (0, n.jsx)(
                    "div",
                    {
                        className: u.k,
                        children: (0, n.jsx)(s.S, {
                            checked: e.checked,
                            onChange: e.onCheck,
                            label: e.title,
                            description: e.body,
                        }),
                    },
                    e.key,
                ),
            ),
        }),
    });
}
