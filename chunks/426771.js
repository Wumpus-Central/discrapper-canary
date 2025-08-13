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
    m = n(93841),
    f = n(388032),
    _ = n(574524);
function x(e) {
    var t, n, x;
    let g,
        { guildId: v, group: b, powerups: h } = e,
        [j, C] = o.useState(!1),
        E = (0, a.Gv)(v, h),
        I = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        N = (0, u.Z)(b, v);
    if (void 0 === N || h.length <= 0) return null;
    let w = E.some((e) => e.type !== p.A3.INACTIVE),
        Z = (0, d.d)(w),
        P = E.reduce(
            (e, t) => {
                let { sourceEntitlement: n } = t,
                    r = null == n ? void 0 : n.ends_at;
                return null == r ? e : null == e || r < e ? r : e;
            },
            void 0,
        );
    void 0 !== P
        ? (g = {
              type: "expiring",
              expiringAt: P,
          })
        : w &&
          (g = {
              type: "active",
              statusText: f.intl.string(m.default.FFLkm5),
          });
    let S = E.reduce((e, t) => {
            let { type: n, powerup: r } = t;
            return n === p.A3.POWERUP_ACTIVATED ? e + r.cost : e;
        }, 0),
        y = E.reduce(
            (e, t) => {
                var n, r;
                let { powerup: o } = t;
                return e < (null != (n = null == o ? void 0 : o.cost) ? n : 0)
                    ? e
                    : null != (r = null == o ? void 0 : o.cost)
                      ? r
                      : 0;
            },
            null != (x = null == (n = E[0]) || null == (t = n.powerup) ? void 0 : t.cost) ? x : 0,
        ),
        T = E.reduce((e, t) => {
            var n;
            let { powerup: r } = t;
            return e + (null != (n = null == r ? void 0 : r.cost) ? n : 0);
        }, 0),
        O = w ? S : y,
        A = !w && T > O ? "+" : void 0,
        R = !I && j ? N.image.animatedUrl : N.image.staticUrl,
        L = null != N.viewCta && "" !== N.viewCta ? N.viewCta : f.intl.string(m.default["27GkOj"]),
        k = null != N.viewCtaTooltip && "" !== N.viewCtaTooltip ? N.viewCtaTooltip : void 0;
    return (0, r.jsxs)(c.aB, {
        label: N.title,
        isActive: w,
        badge: N.badge,
        onClick: () => N.openModal(h),
        onMouseOver: () => C(!0),
        onMouseLeave: () => C(!1),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: R,
                className: _.image,
            }),
            (0, r.jsx)(c.Q9, {
                title: N.title,
                textColor: Z,
                footer: (0, r.jsx)(c.uf, {
                    status: g,
                    cost: O,
                    costDecorator: A,
                }),
                children: (0, r.jsx)(l.Text, {
                    className: _.description,
                    color: Z,
                    variant: "text-sm/medium",
                    children: N.description,
                }),
            }),
            (0, r.jsx)(c.N4, {
                children:
                    null != k
                        ? (0, r.jsx)(l.DY3, {
                              text: k,
                              delay: 100,
                              children: (0, r.jsx)(l.zxk, {
                                  text: L,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)(l.zxk, {
                              text: L,
                              fullWidth: !0,
                          }),
            }),
        ],
    });
}
