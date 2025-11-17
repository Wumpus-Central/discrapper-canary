n.d(t, { default: () => d });
var i = n(54381),
    c = n(473749),
    l = n(159691),
    r = n(246295),
    o = n(905693),
    s = n(981631),
    a = n(388032),
    u = n(119902);
function d(e) {
    let { guildId: t, transitionState: n, onClose: d, onConfirm: h } = e,
        { rules: _, rulesAccepted: b } = (0, r.V)(),
        k = c.useCallback(() => {
            d(), h();
        }, [d, h]);
    return (0, i.jsx)(l.u_l, {
        title: a.intl.string(a.t["Q8OFN+"]),
        subtitle: a.intl.format(a.t.JLUVfo, {
            onCommunityGuidelinesClick: () =>
                (0, o.lW)({
                    articleId: s.BhN.PUBLIC_GUILD_GUILDLINES,
                    guildId: t,
                    modalStep: o.tK.AGREE_TO_RULES,
                }),
            onDiscoveryGuidelinesClick: () =>
                (0, o.lW)({
                    articleId: s.BhN.SERVER_DISCOVERY_GUIDELINES,
                    guildId: t,
                    modalStep: o.tK.AGREE_TO_RULES,
                }),
        }),
        actions: [
            {
                disabled: !b,
                text: a.intl.string(a.t["qjtt/p"]),
                onClick: k,
            },
        ],
        transitionState: n,
        onClose: d,
        children: (0, i.jsx)("div", {
            className: u.checkboxContainer,
            children: _.map((e) =>
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
