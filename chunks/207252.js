n.d(t, { default: () => d });
var i = n(54381),
    c = n(473749),
    l = n(159691),
    r = n(246295),
    o = n(905693),
    a = n(981631),
    s = n(388032),
    u = n(371875);
function d(e) {
    let { guildId: t, transitionState: n, onClose: d, onConfirm: b } = e,
        { rules: h, rulesAccepted: k } = (0, r.V)(),
        _ = c.useCallback(() => {
            d(), b();
        }, [d, b]);
    return (0, i.jsx)(l.u_l, {
        title: s.intl.string(s.t["Q8OFN+"]),
        subtitle: s.intl.format(s.t.JLUVfo, {
            onCommunityGuidelinesClick: () =>
                (0, o.lW)({
                    articleId: a.BhN.PUBLIC_GUILD_GUILDLINES,
                    guildId: t,
                    modalStep: o.tK.AGREE_TO_RULES,
                }),
            onDiscoveryGuidelinesClick: () =>
                (0, o.lW)({
                    articleId: a.BhN.SERVER_DISCOVERY_GUIDELINES,
                    guildId: t,
                    modalStep: o.tK.AGREE_TO_RULES,
                }),
        }),
        actions: [
            {
                disabled: !k,
                text: s.intl.string(s.t["qjtt/p"]),
                onClick: _,
            },
        ],
        transitionState: n,
        onClose: d,
        children: (0, i.jsx)("div", {
            className: u.checkboxContainer,
            children: h.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        className: u.checkbox,
                        children: (0, i.jsx)(l.XZJ, {
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
