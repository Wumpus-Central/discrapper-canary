r.d(t, { default: () => m });
var n = r(627968);
r(64700);
var l = r(503698),
    a = r.n(l),
    i = r(311907),
    c = r(990078),
    d = r(397927),
    o = r(29086),
    s = r(581781),
    f = r(71393),
    b = r(287809),
    u = r(685073),
    p = r(514661),
    g = r(985018),
    y = r(583970),
    j = r(581298);
function m(e) {
    var t, r, l, m;
    let { guildId: O } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        a = Object.getOwnPropertyNames(e);
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a;
        })(e, ["guildId"]),
        v = (0, i.bG)([f.A], () => f.A.getGuild(O)),
        x = (0, i.bG)([b.default], () => {
            var e;
            let t = null == (e = b.default.getCurrentUser()) ? void 0 : e.primaryGuild;
            return (null == t ? void 0 : t.identityGuildId) === O && (null == t ? void 0 : t.identityEnabled) === !0;
        }, [O]),
        { isAdopting: w, onAdoptTag: _, onEditProfile: N } = (0, p.A)(O, h.onClose);
    if (null != v && (0, u.Rg)(v) && (0, u.q0)(v))
        return (0, n.jsxs)(
            d.EOs,
            ((l = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })(
                {
                    "data-migration-pending": !0,
                    className: j.yl,
                    size: d.rIJ.DYNAMIC,
                },
                h,
            )),
            (m = m =
                {
                    parentComponent: "GuildTagAdoptModal",
                    children: [
                        (0, n.jsxs)(d.$mQ, {
                            "data-migration-pending": !0,
                            className: j.jE,
                            scrollbarType: "none",
                            children: [
                                (0, n.jsx)("div", {
                                    className: j.X6,
                                    children: (0, n.jsxs)("div", {
                                        className: j.kb,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: j.N1,
                                                children: [
                                                    (0, n.jsx)(d.Heading, {
                                                        variant: "heading-lg/bold",
                                                        children: g.intl.string(y.default.OvKPi0),
                                                    }),
                                                    (0, n.jsx)(d.Text, {
                                                        variant: "text-md/normal",
                                                        children: g.intl.string(y.default.kHxfDw),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)(s.A, {
                                                className: j._S,
                                                guildId: v.id,
                                                guildName: v.name,
                                                guildIcon: v.icon,
                                                guildIconSize: 32,
                                                guildTag: v.profile.tag,
                                                guildBadge: null != (t = v.profile.badge) ? t : "",
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: j.UD,
                                                children: [
                                                    (0, n.jsx)(c.m, {
                                                        text: g.intl.string(y.default.WlENZt),
                                                        shouldShow: x,
                                                        children: (0, n.jsx)(d.Button, {
                                                            variant: "primary",
                                                            text: g.intl.string(g.t.jwEaiX),
                                                            fullWidth: !0,
                                                            onClick: _,
                                                            loading: w,
                                                            disabled: x,
                                                        }),
                                                    }),
                                                    (0, n.jsx)(d.Button, {
                                                        variant: "secondary",
                                                        text: g.intl.string(g.t.s5vZlQ),
                                                        fullWidth: !0,
                                                        onClick: N,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: a()(j.X6, j.pG),
                                    children: (0, n.jsx)(o.A, {
                                        className: j.uJ,
                                        guildId: v.id,
                                        tag: v.profile.tag,
                                        badge: null != (r = v.profile.badge) ? r : "",
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(d.s_y, {
                            "data-migration-pending": !0,
                            className: j.VN,
                            onClick: h.onClose,
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(m))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(m)).forEach(function (e) {
                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(m, e));
                  }),
            l),
        );
}
