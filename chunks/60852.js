i.d(t, { default: () => u });
var n = i(627968),
    l = i(64700),
    c = i(732955),
    s = i(369162),
    d = i(427562),
    a = i(652215),
    r = i(985018),
    o = i(390790);
function u(e) {
    let { guildId: t, transitionState: i, onClose: u, onConfirm: _ } = e,
        { rules: h, rulesAccepted: k } = (0, s.P)(),
        C = l.useCallback(() => {
            u(), _();
        }, [u, _]);
    return (0, n.jsx)(c.aFV, {
        title: r.intl.string(r.t["Q8OFN+"]),
        subtitle: r.intl.format(r.t.JLUVfo, {
            onCommunityGuidelinesClick: () =>
                (0, d.p3)({ articleId: a.MVz.PUBLIC_GUILD_GUILDLINES, guildId: t, modalStep: d.iv.AGREE_TO_RULES }),
            onDiscoveryGuidelinesClick: () =>
                (0, d.p3)({ articleId: a.MVz.SERVER_DISCOVERY_GUIDELINES, guildId: t, modalStep: d.iv.AGREE_TO_RULES }),
        }),
        actions: [{ disabled: !k, text: r.intl.string(r.t["qjtt/p"]), onClick: C }],
        transitionState: i,
        onClose: u,
        children: (0, n.jsx)("div", {
            className: o.H,
            children: h.map((e) =>
                (0, n.jsx)(
                    "div",
                    {
                        className: o.k,
                        children: (0, n.jsx)(c.Sc0, {
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
