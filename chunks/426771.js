n.d(t, { Z: () => x }), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    i = n(442837),
    l = n(481060),
    s = n(607070),
    a = n(973772),
    c = n(838968),
    u = n(857666),
    d = n(279475),
    p = n(535396),
    f = n(93841),
    m = n(388032),
    g = n(475338);
function x(e) {
    var t, n, x;
    let _,
        { guildId: v, group: b, powerups: j } = e,
        [h, E] = o.useState(!1),
        C = (0, a.Gv)(v, j),
        I = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        O = (0, u.Z)(b, v);
    if (void 0 === O || j.length <= 0) return null;
    let y = C.some((e) => e.type !== p.A3.INACTIVE),
        P = (0, d.d)(y),
        w = C.reduce(
            (e, t) => {
                let { sourceEntitlement: n } = t,
                    r = null == n ? void 0 : n.ends_at;
                return null == r ? e : null == e || r < e ? r : e;
            },
            void 0,
        );
    void 0 !== w
        ? (_ = {
              type: "expiring",
              expiringAt: w,
          })
        : y &&
          (_ = {
              type: "active",
              statusText: m.intl.string(f.default.FFLkm5),
          });
    let N = C.reduce((e, t) => {
            let { type: n, powerup: r } = t;
            return n === p.A3.POWERUP_ACTIVATED ? e + r.cost : e;
        }, 0),
        Z = C.reduce(
            (e, t) => {
                var n, r;
                let { powerup: o } = t;
                return e < (null != (n = null == o ? void 0 : o.cost) ? n : 0)
                    ? e
                    : null != (r = null == o ? void 0 : o.cost)
                      ? r
                      : 0;
            },
            null != (x = null == (n = C[0]) || null == (t = n.powerup) ? void 0 : t.cost) ? x : 0,
        ),
        S = C.reduce((e, t) => {
            var n;
            let { powerup: r } = t;
            return e + (null != (n = null == r ? void 0 : r.cost) ? n : 0);
        }, 0),
        T = y ? N : Z,
        A = !y && S > T ? "+" : void 0,
        R = !I && h ? O.image.animatedUrl : O.image.staticUrl,
        k = null != O.viewCta && "" !== O.viewCta ? O.viewCta : m.intl.string(f.default["27GkOj"]);
    return (0, r.jsxs)(c.aB, {
        label: O.title,
        isActive: y,
        badge: O.badge,
        onClick: () => O.openModal(j),
        onMouseOver: () => E(!0),
        onMouseLeave: () => E(!1),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: R,
                className: g.image,
            }),
            (0, r.jsx)(c.Q9, {
                title: O.title,
                textColor: P,
                footer: (0, r.jsx)(c.uf, {
                    status: _,
                    cost: T,
                    costDecorator: A,
                }),
                children: (0, r.jsx)(l.Text, {
                    className: g.description,
                    color: P,
                    variant: "text-sm/medium",
                    children: O.description,
                }),
            }),
            (0, r.jsx)(c.N4, {
                children: (0, r.jsx)(l.zxk, {
                    text: k,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
