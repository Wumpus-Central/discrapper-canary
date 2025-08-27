n.d(t, { Z: () => v }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    o = n(442837),
    l = n(28664),
    a = n(481060),
    s = n(607070),
    u = n(973772),
    c = n(838968),
    d = n(857666),
    p = n(279475),
    f = n(535396),
    m = n(989308),
    _ = n(388032),
    g = n(639560);
function v(e) {
    var t, n, v;
    let x,
        { guildId: b, group: h, powerups: C } = e,
        [j, I] = i.useState(!1),
        E = (0, u.Gv)(b, C),
        w = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        Z = (0, d.Z)(h, b);
    if (void 0 === Z || C.length <= 0) return null;
    let N = E.some((e) => e.type !== f.A3.INACTIVE),
        P = (0, p.d)(N),
        y = E.reduce(
            (e, t) => {
                let { sourceEntitlement: n } = t,
                    r = null == n ? void 0 : n.ends_at;
                return null == r ? e : null == e || r < e ? r : e;
            },
            void 0,
        );
    void 0 !== y
        ? (x = {
              type: "expiring",
              expiringAt: y,
          })
        : N &&
          (x = {
              type: "active",
              statusText: _.intl.string(m.default.FFLkm5),
          });
    let T = E.reduce((e, t) => {
            let { type: n, powerup: r } = t;
            return n === f.A3.POWERUP_ACTIVATED ? e + r.cost : e;
        }, 0),
        S = E.reduce(
            (e, t) => {
                var n, r;
                let { powerup: i } = t;
                return e < (null != (n = null == i ? void 0 : i.cost) ? n : 0)
                    ? e
                    : null != (r = null == i ? void 0 : i.cost)
                      ? r
                      : 0;
            },
            null != (v = null == (n = E[0]) || null == (t = n.powerup) ? void 0 : t.cost) ? v : 0,
        ),
        A = E.reduce((e, t) => {
            var n;
            let { powerup: r } = t;
            return e + (null != (n = null == r ? void 0 : r.cost) ? n : 0);
        }, 0),
        O = N ? T : S,
        k = !N && A > O ? "+" : void 0,
        R = !w && j ? Z.image.animatedUrl : Z.image.staticUrl,
        L = null != Z.viewCta && "" !== Z.viewCta ? Z.viewCta : _.intl.string(m.default["27GkOj"]),
        U = null != Z.viewCtaTooltip && "" !== Z.viewCtaTooltip ? Z.viewCtaTooltip : void 0;
    return (0, r.jsxs)(c.aB, {
        label: Z.title,
        isActive: N,
        badge: Z.badge,
        onClick: () => Z.openModal(C),
        onMouseOver: () => I(!0),
        onMouseLeave: () => I(!1),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: R,
                className: g.image,
            }),
            (0, r.jsx)(c.Q9, {
                title: Z.title,
                textColor: P,
                footer: (0, r.jsx)(c.uf, {
                    status: x,
                    cost: O,
                    costDecorator: k,
                }),
                children: (0, r.jsx)(a.Text, {
                    className: g.description,
                    color: P,
                    variant: "text-sm/medium",
                    children: Z.description,
                }),
            }),
            (0, r.jsx)(c.N4, {
                children:
                    null != U
                        ? (0, r.jsx)(l.u, {
                              asContainer: !0,
                              text: U,
                              delay: 100,
                              children: (0, r.jsx)(a.zxk, {
                                  text: L,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)(a.zxk, {
                              text: L,
                              fullWidth: !0,
                          }),
            }),
        ],
    });
}
