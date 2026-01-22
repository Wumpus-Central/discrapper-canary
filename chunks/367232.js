n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(297413),
    o = n(376304),
    l = n(201275),
    c = n(386784),
    u = n(657048),
    d = n(734057),
    f = n(317525),
    p = n(71393),
    _ = n(290863),
    h = n(287809),
    m = n(207963),
    g = n(489414),
    E = n(289770),
    b = n(247818),
    y = n(652215),
    O = n(794998);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function S(e) {
    let t = (0, m.jc)(),
        n = null == t ? void 0 : t.channelId,
        A = d.A.getChannel(n),
        S = p.A.getGuild(null == A ? void 0 : A.getGuildId()),
        I = (0, c.A)(null == S ? void 0 : S.id, E.S$),
        T = (t) => (0, E.YV)(e.type, t, n),
        C = (e, t) => {
            let n = t === b.p6.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === g.iw.USER) {
                let i = h.default.getUser(e.value);
                if (null == i) return;
                return (0, r.jsx)(a.euF, {
                    size: n ? a._3J.SIZE_16 : a._3J.SIZE_24,
                    src: i.getAvatarURL(null == S ? void 0 : S.id, t),
                    status: n ? null : _.A.getStatus(i.id),
                    "aria-hidden": !0,
                });
            }
            if ((null == e ? void 0 : e.type) === g.iw.ROLE) {
                var i;
                let n = null != S ? f.A.getRole(S.id, e.value) : void 0;
                if (null == n || null == S) return;
                let s = (0, o.fm)(S, n) ? (0, l.ox)(n, t) : null;
                return null != s
                    ? (0, r.jsx)(u.A, v({}, s))
                    : (0, r.jsx)(a.iTF, {
                          size: "custom",
                          color: null != (i = n.colorString) ? i : y.TpD,
                          height: t,
                          width: t,
                      });
            }
        },
        N = (e) => {
            let t = null;
            if (e.type === g.iw.USER) {
                let n = h.default.getUser(e.value);
                null != n &&
                    (t = (0, r.jsx)(s.A, {
                        className: O.Tc,
                        usernameClass: O.Xh,
                        discriminatorClass: O.D2,
                        botClass: O.Od,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === g.iw.ROLE) {
                let n = null != S ? f.A.getRole(S.id, e.value) : void 0,
                    i = null == n ? null : null == I ? void 0 : I[n.id];
                null != i &&
                    (t = (0, r.jsxs)("div", {
                        className: O.Ly,
                        children: [
                            (0, r.jsx)(a.nys, {
                                size: "sm",
                                color: "currentColor",
                                className: O.jh,
                            }),
                            (0, r.jsx)("span", {
                                className: O.NT,
                                children: i,
                            }),
                        ],
                    }));
            }
            return (0, r.jsxs)("span", {
                className: O.Pf,
                children: [
                    (0, r.jsx)("span", {
                        className: O.QK,
                        children: e.label,
                    }),
                    t,
                ],
            });
        },
        R = i.useMemo(() => (0, E.iA)(e.defaultValues, null == S ? void 0 : S.id), [e.defaultValues, S]);
    return (0, r.jsx)(b.Ay, {
        selectActionComponent: e,
        queryOptions: T,
        renderIcon: C,
        renderOptionLabel: N,
        defaultValues: R,
    });
}
