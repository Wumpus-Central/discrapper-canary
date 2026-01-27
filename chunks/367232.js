n.d(t, {
    A: () => C,
});
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(297413),
    s = n(376304),
    o = n(201275),
    c = n(386784),
    u = n(657048),
    d = n(734057),
    m = n(317525),
    f = n(71393),
    p = n(290863),
    h = n(287809),
    b = n(207963),
    g = n(489414),
    x = n(289770),
    y = n(247818),
    v = n(652215),
    j = n(794998);

function C(e) {
    let t = (0, b.jc)(),
        n = null == t ? void 0 : t.channelId,
        C = d.A.getChannel(n),
        _ = f.A.getGuild(null == C ? void 0 : C.getGuildId()),
        A = (0, c.A)(null == _ ? void 0 : _.id, x.S$),
        O = l.useMemo(() => (0, x.iA)(e.defaultValues, null == _ ? void 0 : _.id), [e.defaultValues, _]);
    return (0, r.jsx)(y.Ay, {
        selectActionComponent: e,
        queryOptions: (t) => (0, x.YV)(e.type, t, n),
        renderIcon: (e, t) => {
            let n = t === y.p6.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === g.iw.USER) {
                let l = h.default.getUser(e.value);
                if (null == l) return;
                return (0, r.jsx)(a.euF, {
                    size: n ? a._3J.SIZE_16 : a._3J.SIZE_24,
                    src: l.getAvatarURL(null == _ ? void 0 : _.id, t),
                    status: n ? null : p.A.getStatus(l.id),
                    "aria-hidden": !0,
                });
            }
            if ((null == e ? void 0 : e.type) === g.iw.ROLE) {
                var l;
                let n = null != _ ? m.A.getRole(_.id, e.value) : void 0;
                if (null == n || null == _) return;
                let i = (0, s.fm)(_, n) ? (0, o.ox)(n, t) : null;
                return null != i
                    ? (0, r.jsx)(
                          u.A,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({}, i),
                      )
                    : (0, r.jsx)(a.iTF, {
                          size: "custom",
                          color: null != (l = n.colorString) ? l : v.TpD,
                          height: t,
                          width: t,
                      });
            }
        },
        renderOptionLabel: (e) => {
            let t = null;
            if (e.type === g.iw.USER) {
                let n = h.default.getUser(e.value);
                null != n &&
                    (t = (0, r.jsx)(i.A, {
                        className: j.Tc,
                        usernameClass: j.Xh,
                        discriminatorClass: j.D2,
                        botClass: j.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === g.iw.ROLE) {
                let n = null != _ ? m.A.getRole(_.id, e.value) : void 0,
                    l = null == n ? null : null == A ? void 0 : A[n.id];
                null != l &&
                    (t = (0, r.jsxs)("div", {
                        className: j.Ly,
                        children: [
                            (0, r.jsx)(a.nys, {
                                size: "sm",
                                color: "currentColor",
                                className: j.jh,
                            }),
                            (0, r.jsx)("span", {
                                className: j.NT,
                                children: l,
                            }),
                        ],
                    }));
            }
            return (0, r.jsxs)("span", {
                className: j.Pf,
                children: [
                    (0, r.jsx)("span", {
                        className: j.QK,
                        children: e.label,
                    }),
                    t,
                ],
            });
        },
        defaultValues: O,
    });
}
