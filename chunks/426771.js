n.d(t, { Z: () => x }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    o = n(442837),
    l = n(28664),
    a = n(481060),
    s = n(607070),
    c = n(973772),
    u = n(838968),
    d = n(707541),
    p = n(857666),
    f = n(535396),
    m = n(130231),
    g = n(388032),
    v = n(639560);
function x(e) {
    var t, n, x;
    let _,
        { guildId: b, group: h, powerups: j } = e,
        [C, w] = i.useState(!1),
        Z = (0, c.Gv)(b, j),
        I = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        E = (0, p.Z)(h, b),
        P = Z.some((e) => e.type !== f.A3.INACTIVE),
        { textColor: T } = (0, d.Z)(P);
    if (void 0 === E || j.length <= 0) return null;
    let y = Z.reduce(
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
    let N = Z.reduce((e, t) => {
            let { type: n, powerup: r } = t;
            return n === f.A3.POWERUP_ACTIVATED ? e + r.cost : e;
        }, 0),
        O = Z.reduce(
            (e, t) => {
                var n, r;
                let { powerup: i } = t;
                return e < (null != (n = null == i ? void 0 : i.cost) ? n : 0)
                    ? e
                    : null != (r = null == i ? void 0 : i.cost)
                      ? r
                      : 0;
            },
            null != (x = null == (n = Z[0]) || null == (t = n.powerup) ? void 0 : t.cost) ? x : 0,
        ),
        S = Z.reduce((e, t) => {
            var n;
            let { powerup: r } = t;
            return e + (null != (n = null == r ? void 0 : r.cost) ? n : 0);
        }, 0),
        A = P ? N : O,
        k = !I && C ? E.image.animatedUrl : E.image.staticUrl,
        R = null != E.viewCta && "" !== E.viewCta ? E.viewCta : g.intl.string(m.default["27GkOu"]),
        L = null != E.viewCtaTooltip && "" !== E.viewCtaTooltip ? E.viewCtaTooltip : void 0;
    return (0, r.jsxs)(u.aB, {
        label: E.title,
        isActive: (null == _ ? void 0 : _.type) === "active",
        isWarning: (null == _ ? void 0 : _.type) === "expiring",
        badge: E.badge,
        onClick: () => E.openModal(j),
        onMouseOver: () => w(!0),
        onMouseLeave: () => w(!1),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: k,
                className: v.image,
            }),
            (0, r.jsx)(u.Q9, {
                title: E.title,
                textColor: T,
                footer: (0, r.jsx)(u.uf, {
                    status: _,
                    cost: A,
                    costDecorator: !P && S > A ? "+" : void 0,
                }),
                children: (0, r.jsx)(a.Text, {
                    className: v.description,
                    color: T,
                    variant: "text-sm/medium",
                    children: E.description,
                }),
            }),
            (0, r.jsx)(u.N4, {
                children:
                    null != L
                        ? (0, r.jsx)(l.u, {
                              asContainer: !0,
                              text: L,
                              delay: 100,
                              children: (0, r.jsx)(a.Button, {
                                  text: R,
                                  fullWidth: !0,
                              }),
                          })
                        : (0, r.jsx)(a.Button, {
                              text: R,
                              fullWidth: !0,
                          }),
            }),
        ],
    });
}
