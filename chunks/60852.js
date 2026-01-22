i.d(t, {
    default: () => u,
});
var n = i(627968),
    l = i(64700),
    r = i(732955),
    c = i(369162),
    s = i(427562),
    a = i(652215),
    o = i(985018),
    d = i(390790);

function u(e) {
    let { guildId: t, transitionState: i, onClose: u, onConfirm: p } = e,
        { rules: h, rulesAccepted: _ } = (0, c.P)(),
        b = l.useCallback(() => {
            u(), p();
        }, [u, p]);
    return (0, n.jsx)(r.aFV, {
        title: o.intl.string(o.t["Q8OFN+"]),
        subtitle: o.intl.format(o.t.JLUVfo, {
            onCommunityGuidelinesClick: () =>
                (0, s.p3)({
                    articleId: a.MVz.PUBLIC_GUILD_GUILDLINES,
                    guildId: t,
                    modalStep: s.iv.AGREE_TO_RULES,
                }),
            onDiscoveryGuidelinesClick: () =>
                (0, s.p3)({
                    articleId: a.MVz.SERVER_DISCOVERY_GUIDELINES,
                    guildId: t,
                    modalStep: s.iv.AGREE_TO_RULES,
                }),
        }),
        actions: [
            {
                disabled: !_,
                text: o.intl.string(o.t["qjtt/p"]),
                onClick: b,
            },
        ],
        transitionState: i,
        onClose: u,
        children: (0, n.jsx)("div", {
            className: d.H,
            children: h.map((e) =>
                (0, n.jsx)(
                    "div",
                    {
                        className: d.k,
                        children: (0, n.jsx)(r.Sc0, {
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
