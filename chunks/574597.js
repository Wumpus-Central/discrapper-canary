n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(129861),
    s = n(829883),
    l = n(518738),
    c = n(14263),
    u = n(48950),
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
    O = n(904426);
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
    let t = (0, m.CJ)(),
        n = null == t ? void 0 : t.channelId,
        v = d.Z.getChannel(n),
        T = _.Z.getGuild(null == v ? void 0 : v.getGuildId()),
        S = (0, c.Z)(null == T ? void 0 : T.id, E.HI),
        A = (t) => (0, E._H)(e.type, t, n),
        C = (e, t) => {
            let n = t === b.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === g.tM.USER) {
                let i = h.default.getUser(e.value);
                if (null == i) return;
                return (0, r.jsx)(a.qEK, {
                    size: n ? a.EFr.SIZE_16 : a.EFr.SIZE_24,
                    src: i.getAvatarURL(null == T ? void 0 : T.id, t),
                    status: n ? null : p.Z.getStatus(i.id),
                    "aria-hidden": !0,
                });
            }
            if ((null == e ? void 0 : e.type) === g.tM.ROLE) {
                var i;
                let n = null != T ? f.Z.getRole(T.id, e.value) : void 0;
                if (null == n || null == T) return;
                let o = (0, s._b)(T, n) ? (0, l.Kz)(n, t) : null;
                return null != o
                    ? (0, r.jsx)(u.Z, I({}, o))
                    : (0, r.jsx)(a.lZ8, {
                          size: "custom",
                          color: null != (i = n.colorString) ? i : y.Pbq,
                          height: t,
                          width: t,
                      });
            }
        },
        N = (e) => {
            let t = null;
            if (e.type === g.tM.USER) {
                let n = h.default.getUser(e.value);
                null != n &&
                    (t = (0, r.jsx)(o.Z, {
                        className: O.tag,
                        usernameClass: O.username,
                        discriminatorClass: O.discriminator,
                        botClass: O.bot,
                        user: n,
                        forceUsername: !0,
                    }));
            } else if (e.type === g.tM.ROLE) {
                let n = null != T ? f.Z.getRole(T.id, e.value) : void 0,
                    i = null == n ? null : null == S ? void 0 : S[n.id];
                null != i &&
                    (t = (0, r.jsxs)("div", {
                        className: O.roleCountContainer,
                        children: [
                            (0, r.jsx)(a.tBG, {
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
        R = i.useMemo(() => (0, E.tx)(e.defaultValues, null == T ? void 0 : T.id), [e.defaultValues, T]);
    return (0, r.jsx)(b.ZP, {
        selectActionComponent: e,
        queryOptions: A,
        renderIcon: C,
        renderOptionLabel: N,
        defaultValues: R,
    });
}
