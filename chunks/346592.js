n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var l = n(120356),
    s = n.n(l),
    i = n(481060),
    a = n(373370),
    o = n(644646),
    u = n(776665);
let c = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: l,
            questContent: c,
            taskDetails: d,
            location: m,
            sourceQuestContent: f,
        } = e,
        E = (0, a.DD)({
            quest: l,
            taskDetails: d,
            location: m,
            questContent: c,
            sourceQuestContent: f,
        });
    return (0, r.jsxs)("div", {
        className: s()(u.wrapper, t),
        children: [
            (0, r.jsx)(o.Z, {
                autoplay: n,
                className: u.rewardTile,
                quest: l,
                questContent: c,
                location: m,
                sourceQuestContent: f,
            }),
            (0, r.jsx)("div", {
                className: u.copy,
                children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: E,
                }),
            }),
        ],
    });
};
