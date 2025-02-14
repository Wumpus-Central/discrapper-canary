n.d(t, { Z: () => g });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(115849),
    s = n(540059),
    o = n(645792),
    d = n(787642),
    c = n(437314),
    u = n(981631),
    h = n(388032),
    m = n(86511);
function p() {
    let e = (0, s.Q3)('AddFriendHeader');
    return (0, i.jsxs)('header', {
        className: m.header,
        children: [
            (0, i.jsx)(r.vwX, {
                tag: e ? 'h1' : 'h2',
                className: m.title,
                children: h.intl.string(h.t.w5uwoK)
            }),
            (0, i.jsx)(a.Z, {})
        ]
    });
}
let g = function () {
    let e = (0, s.Q3)('AddFriend');
    return (0, i.jsxs)(l.Fragment, {
        children: [
            (0, i.jsx)(p, {}),
            (0, o.b)() && (0, i.jsx)(d.Z, {}),
            e
                ? null
                : (0, i.jsx)('div', {
                      className: m.emptyState,
                      children: (0, i.jsx)(c.Z, { type: u.pJs.ADD_FRIEND })
                  })
        ]
    });
};
