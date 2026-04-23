n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(167417),
    r = n(411335),
    a = n(985018);
function o(e) {
    let t = "",
        n = "";
    switch (e) {
        case r.vY.PROFANITY:
            (t = a.intl.string(a.t["I+BDrH"])), (n = a.intl.string(a.t.hISCms));
            break;
        case r.vY.SEXUAL_CONTENT:
            (t = a.intl.string(a.t.URSMet)), (n = a.intl.string(a.t.oRQDBs));
            break;
        case r.vY.SLURS:
            (t = a.intl.string(a.t["xjK2M/"])), (n = a.intl.string(a.t.oJYXBG));
            break;
        default:
            (t = "Error"), (n = "Unrecognized list");
    }
    return { headerText: t, subtitleText: n };
}
function d(e) {
    let { rule: t, onChangeRule: n } = e,
        [a, d] = l.useState(new Set(t?.triggerMetadata?.presets)),
        c = l.useMemo(
            () => (e) => {
                n({ ...t, triggerMetadata: { ...t.triggerMetadata, presets: e } });
            },
            [n, t],
        ),
        u = l.useCallback(
            (e) => {
                let t = e.map((e) => e);
                d(new Set(t)), c(t);
            },
            [c],
        ),
        m = l.useMemo(
            () => [
                {
                    label: o(r.vY.PROFANITY).headerText,
                    description: o(r.vY.PROFANITY).subtitleText,
                    value: String(r.vY.PROFANITY),
                },
                { label: o(r.vY.SLURS).headerText, description: o(r.vY.SLURS).subtitleText, value: String(r.vY.SLURS) },
                {
                    label: o(r.vY.SEXUAL_CONTENT).headerText,
                    description: o(r.vY.SEXUAL_CONTENT).subtitleText,
                    value: String(r.vY.SEXUAL_CONTENT),
                },
            ],
            [],
        );
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(s.$, { selectedValues: Array.from(a).map(String), onChange: u, options: m }),
    });
}
