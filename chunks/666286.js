n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(115849),
    o = n(540059),
    s = n(645792),
    c = n(787642),
    u = n(437314),
    d = n(981631),
    p = n(388032),
    h = n(383903);
function f() {
    let e = (0, o.Q3)('AddFriendHeader');
    return (0, r.jsxs)('header', {
        className: h.header,
        children: [
            (0, r.jsx)(l.vwX, {
                tag: e ? 'h1' : 'h2',
                className: h.title,
                children: p.NW.string(p.t.w5uwoK)
            }),
            (0, r.jsx)(a.Z, {})
        ]
    });
}
let g = function () {
    let e = (0, o.Q3)('AddFriend');
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(f, {}),
            (0, s.b)() && (0, r.jsx)(c.Z, {}),
            e
                ? null
                : (0, r.jsx)('div', {
                      className: h.emptyState,
                      children: (0, r.jsx)(u.Z, { type: d.pJs.ADD_FRIEND })
                  })
        ]
    });
};
