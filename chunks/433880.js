"use strict";
n.d(t, { A: () => m }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(429913),
    l = n(769015),
    u = n(994500),
    c = n(287809),
    d = n(652215),
    _ = n(379066);
let f = [];
function p(e, t) {
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
function h(e) {
    let { application: t } = e;
    return (0, r.jsxs)("div", {
        className: _.W,
        children: [(0, r.jsx)(l.A, { game: t, size: l.M.XXSMALL }), (0, r.jsx)("span", { children: t.name })],
    });
}
function m(e) {
    let { menuItemId: t, user: n, label: o, gameRelationships: _, onClick: m, color: g } = e,
        { id: E, bot: A } = n,
        I = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.id === E) || A,
        T = I ? f : _,
        [y, S] = i.useState(!1),
        v = i.useCallback(() => S(!0), []),
        C = i.useMemo(
            () =>
                T.map((e) => {
                    let { applicationId: t } = e;
                    return t;
                }),
            [T],
        ),
        b = (0, a.bG)([u.A], () => u.A.getRelationshipType(E), [E]),
        N = p(C, y || 1 === T.length);
    if (I || 0 === T.length || b === d.eA$.FRIEND) return null;
    if (1 === T.length) {
        let { applicationId: e } = T[0],
            n = N.get(e);
        return null == n
            ? null
            : (0, r.jsx)(s.Drp, {
                  color: g,
                  id: t,
                  label: o,
                  subtext: (0, r.jsx)(h, { application: n }),
                  onFocus: v,
                  action: () => m(n),
              });
    }
    let R = [];
    return (T.forEach((e) => {
        let { applicationId: t } = e,
            n = N.get(t);
        if (null != n) {
            let e = n.getIconURL(16);
            R.push(
                (0, r.jsx)(
                    s.Drp,
                    {
                        id: t,
                        label: n.name,
                        icon: (0, r.jsx)(l.A, { game: n, size: l.M.XXSMALL }),
                        leadingAccessory: null != e ? { type: "image", src: e } : void 0,
                        action: () => m(n),
                    },
                    t,
                ),
            );
        }
    }),
    0 === R.length)
        ? null
        : (0, r.jsx)(s.Drp, { color: g, id: t, label: o, onFocus: v, children: R });
}
