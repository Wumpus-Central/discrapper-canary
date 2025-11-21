n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var l = n(120356),
    s = n.n(l),
    i = n(481060),
    a = n(685138),
    o = n(373370),
    u = n(644646),
    c = n(673655);
let d = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: l,
            questContent: d,
            taskDetails: p,
            location: f,
            sourceQuestContent: m,
        } = e,
        b = (0, o.DD)({
            quest: l,
            taskDetails: p,
            location: f,
            questContent: d,
            sourceQuestContent: m,
        }),
        E = (0, a.n)({
            location: f,
            questConfig: l.config,
        }).enabled;
    return (0, r.jsxs)("div", {
        className: s()(c.wrapper, t),
        style: E ? void 0 : { color: l.config.colors.primary },
        children: [
            (0, r.jsx)(u.Z, {
                autoplay: n,
                className: c.rewardTile,
                quest: l,
                questContent: d,
                location: f,
                sourceQuestContent: m,
            }),
            (0, r.jsx)("div", {
                className: c.copy,
                children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: b,
                }),
            }),
        ],
    });
};
