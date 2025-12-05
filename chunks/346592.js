n.d(t, { Z: () => c });
var l = n(54381);
n(473749);
var r = n(120356),
    s = n.n(r),
    i = n(481060),
    o = n(373370),
    a = n(644646),
    u = n(673655);
let c = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: r,
            questContent: c,
            taskDetails: d,
            location: E,
            sourceQuestContent: m,
        } = e,
        p = (0, o.DD)({
            quest: r,
            taskDetails: d,
            location: E,
            questContent: c,
            sourceQuestContent: m,
        });
    return (0, l.jsxs)("div", {
        className: s()(u.wrapper, t),
        children: [
            (0, l.jsx)(a.Z, {
                autoplay: n,
                className: u.rewardTile,
                quest: r,
                questContent: c,
                location: E,
                sourceQuestContent: m,
            }),
            (0, l.jsx)("div", {
                className: u.copy,
                children: (0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: p,
                }),
            }),
        ],
    });
};
