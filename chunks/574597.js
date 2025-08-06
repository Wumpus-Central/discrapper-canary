n.d(t, { Z: () => T });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(129861),
    s = n(91218),
    l = n(829883),
    c = n(518738),
    u = n(14263),
    d = n(592125),
    f = n(485386),
    _ = n(430824),
    p = n(158776),
    h = n(594174),
    m = n(970184),
    g = n(280501),
    E = n(811654),
    b = n(344991),
    y = n(981631),
    O = n(922127);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e) {
    var t;
    let n = (0, m.CJ)(),
        v = null == n || null == (t = n.message) ? void 0 : t.getChannelId(),
        T = d.Z.getChannel(v),
        S = _.Z.getGuild(null == T ? void 0 : T.getGuildId()),
        A = (0, u.Z)(null == S ? void 0 : S.id, E.HI),
        N = (t) => (0, E._H)(e.type, t, v),
        C = (e, t) => {
            let n = t === b.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === g.tM.USER) {
                let i = h.default.getUser(e.value);
                if (null == i) return;
                return (0, r.jsx)(o.qEK, {
                    size: n ? o.EFr.SIZE_16 : o.EFr.SIZE_24,
                    src: i.getAvatarURL(null == S ? void 0 : S.id, t),
                    status: n ? null : p.Z.getStatus(i.id),
                    "aria-hidden": !0,
                });
            }
            if ((null == e ? void 0 : e.type) === g.tM.ROLE) {
                var i;
                let n = null != S ? f.Z.getRole(S.id, e.value) : void 0;
                if (null == n || null == S) return;
                let a = (0, l._b)(S, n) ? (0, c.Kz)(n, t) : null;
                return null != a
                    ? (0, r.jsx)(s.Z, I({}, a))
                    : (0, r.jsx)(o.lZ8, {
                          size: "custom",
                          color: null != (i = n.colorString) ? i : y.Pbq,
                          height: t,
                          width: t,
                      });
            }
        },
        R = (e) => {
            let t = null;
            if (e.type === g.tM.USER) {
                let n = h.default.getUser(e.value);
                null != n &&
                    (t = (0, r.jsx)(a.Z, {
                        className: O.tag,
                        usernameClass: O.username,
                        discriminatorClass: O.discriminator,
                        botClass: O.bot,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === g.tM.ROLE) {
                let n = null != S ? f.Z.getRole(S.id, e.value) : void 0,
                    i = null == n ? null : null == A ? void 0 : A[n.id];
                null != i &&
                    (t = (0, r.jsxs)("div", {
                        className: O.roleCountContainer,
                        children: [
                            (0, r.jsx)(o.tBG, {
                                size: "sm",
                                color: "currentColor",
                                className: O.roleCountIcon,
                            }),
                            (0, r.jsx)("span", {
                                className: O.roleCountText,
                                children: i,
                            }),
                        ],
                    }));
            }
            return (0, r.jsxs)("span", {
                className: O.label,
                children: [
                    (0, r.jsx)("span", {
                        className: O.labelText,
                        children: e.label,
                    }),
                    t,
                ],
            });
        },
        P = i.useMemo(() => (0, E.tx)(e.defaultValues, null == S ? void 0 : S.id), [e.defaultValues, S]);
    return (0, r.jsx)(b.ZP, {
        selectActionComponent: e,
        queryOptions: N,
        renderIcon: C,
        renderOptionLabel: R,
        defaultValues: P,
    });
}
