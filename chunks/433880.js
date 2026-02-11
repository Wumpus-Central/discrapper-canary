"use strict";
n.d(t, { A: () => g }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(429913),
    l = n(769015),
    u = n(994500),
    c = n(287809),
    d = n(652215),
    _ = n(11356);
let f = [];
function h(e, t) {
    let n = (0, o.A)(e, t);
    return i.useMemo(() => {
        let e = new Map();
        return (
            n.forEach((t) => {
                null != t && e.set(t.id, t);
            }),
            e
        );
    }, [n]);
}
function p(e) {
    let { application: t } = e;
    return (0, r.jsxs)("div", {
        className: _.W,
        children: [(0, r.jsx)(l.A, { game: t, size: l.M.XXSMALL }), (0, r.jsx)("span", { children: t.name })],
    });
}
function g(e) {
    let { menuItemId: t, user: n, label: o, gameRelationships: _, onClick: g, color: E } = e,
        { id: A, bot: I } = n,
        T = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.id === A) || I,
        y = T ? f : _,
        [S, v] = i.useState(!1),
        C = i.useCallback(() => v(!0), []),
        b = i.useMemo(
            () =>
                y.map((e) => {
                    let { applicationId: t } = e;
                    return t;
                }),
            [y],
        ),
        N = (0, a.bG)([u.A], () => u.A.getRelationshipType(A), [A]),
        R = h(b, S || 1 === y.length);
    if (T || 0 === y.length || N === d.eA$.FRIEND) return null;
    if (1 === y.length) {
        let { applicationId: e } = y[0],
            n = R.get(e);
        return null == n
            ? null
            : (0, r.jsx)(s.Drp, {
                  color: E,
                  id: t,
                  label: o,
                  subtext: (0, r.jsx)(p, { application: n }),
                  onFocus: C,
                  action: () => g(n),
              });
    }
    let O = [];
    return (y.forEach((e) => {
        let { applicationId: t } = e,
            n = R.get(t);
        if (null != n) {
            let e = n.getIconURL(16);
            O.push(
                (0, r.jsx)(
                    s.Drp,
                    {
                        id: t,
                        label: n.name,
                        icon: (0, r.jsx)(l.A, { game: n, size: l.M.XXSMALL }),
                        leadingAccessory: null != e ? { type: "image", src: e } : void 0,
                        action: () => g(n),
                    },
                    t,
                ),
            );
        }
    }),
    0 === O.length)
        ? null
        : (0, r.jsx)(s.Drp, { color: E, id: t, label: o, onFocus: C, children: O });
}
