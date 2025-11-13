n.d(t, { Z: () => x }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(28664),
    a = n(481060),
    s = n(607070),
    c = n(973772),
    u = n(838968),
    d = n(857666),
    p = n(279475),
    f = n(535396),
    m = n(18853),
    g = n(388032),
    v = n(639560);
function x(e) {
    var t, n, x;
    let _,
        { guildId: b, group: h, powerups: j } = e,
        [C, w] = i.useState(!1),
        I = (0, c.Gv)(b, j),
        E = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        Z = (0, d.Z)(h, b);
    if (void 0 === Z || j.length <= 0) return null;
    let P = I.some((e) => e.type !== f.A3.INACTIVE),
        T = (0, p.d)(P),
        y = I.reduce(
            (e, t) => {
                let { sourceEntitlement: n } = t,
                    r = null == n ? void 0 : n.ends_at;
                return null == r ? e : null == e || r < e ? r : e;
            },
            void 0,
        );
    null != y
        ? (_ = {
              type: "expiring",
              expiringAt: y,
          })
        : P &&
          (_ = {
              type: "active",
              statusText: g.intl.string(m.default.FFLkmx),
          });
    let N = I.reduce((e, t) => {
            let { type: n, powerup: r } = t;
            return n === f.A3.POWERUP_ACTIVATED ? e + r.cost : e;
        }, 0),
        O = I.reduce(
            (e, t) => {
                var n, r;
                let { powerup: i } = t;
                return e < (null != (n = null == i ? void 0 : i.cost) ? n : 0)
                    ? e
                    : null != (r = null == i ? void 0 : i.cost)
                      ? r
                      : 0;
            },
            null != (x = null == (n = I[0]) || null == (t = n.powerup) ? void 0 : t.cost) ? x : 0,
        ),
        S = I.reduce((e, t) => {
            var n;
            let { powerup: r } = t;
            return e + (null != (n = null == r ? void 0 : r.cost) ? n : 0);
        }, 0),
        A = P ? N : O,
        k = !P && S > A ? "+" : void 0,
        R = !E && C ? Z.image.animatedUrl : Z.image.staticUrl,
        L = null != Z.viewCta && "" !== Z.viewCta ? Z.viewCta : g.intl.string(m.default["27GkOu"]),
        U = null != Z.viewCtaTooltip && "" !== Z.viewCtaTooltip ? Z.viewCtaTooltip : void 0;
    return (0, r.jsxs)(u.aB, {
        label: Z.title,
        isActive: (null == _ ? void 0 : _.type) === "active",
        isWarning: (null == _ ? void 0 : _.type) === "expiring",
        badge: Z.badge,
        onClick: () => Z.openModal(j),
        onMouseOver: () => w(!0),
        onMouseLeave: () => w(!1),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: R,
                className: v.image,
            }),
            (0, r.jsx)(u.Q9, {
                title: Z.title,
                textColor: T,
                footer: (0, r.jsx)(u.uf, {
                    status: _,
                    cost: A,
                    costDecorator: k,
                }),
                children: (0, r.jsx)(a.Text, {
                    className: v.description,
                    color: T,
                    variant: "text-sm/medium",
                    children: Z.description,
                }),
            }),
            (0, r.jsx)(u.N4, {
                children:
                    null != U
                        ? (0, r.jsx)(o.u, {
                              asContainer: !0,
                              text: U,
                              delay: 100,
                              children: (0, r.jsx)(a.Button, {
                                  text: L,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)(a.Button, {
                              text: L,
                              fullWidth: !0,
                          }),
            }),
        ],
    });
}
