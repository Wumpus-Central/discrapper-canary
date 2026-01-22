n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(397927),
    a = n(714510),
    o = n(646764),
    u = n(510823);
let c = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: l,
            questContent: c,
            taskDetails: d,
            location: p,
            sourceQuestContent: m,
        } = e,
        f = (0, a.mU)({
            quest: l,
            taskDetails: d,
            location: p,
            questContent: c,
            sourceQuestContent: m,
        });
    return (0, r.jsxs)("div", {
        className: i()(u.iE, t),
        children: [
            (0, r.jsx)(o.A, {
                autoplay: n,
                className: u.Qq,
                quest: l,
                questContent: c,
                sourceQuestContent: m,
            }),
            (0, r.jsx)("div", {
                className: u.C,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: f,
                }),
            }),
        ],
    });
};
