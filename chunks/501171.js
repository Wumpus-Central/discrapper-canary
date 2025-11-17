n.d(t, { default: () => v }), n(388685), n(642613);
var r = n(54381),
    l = n(473749),
    o = n(442837),
    s = n(333200),
    i = n(159691),
    u = n(481060),
    a = n(276264),
    c = n(130341),
    d = n(456077),
    m = n(345162),
    f = n(485386),
    g = n(430824),
    b = n(158776),
    p = n(981631),
    S = n(388032),
    I = n(622349);
let h = l.memo(function (e) {
    let { member: t, status: n, guildId: o, channelId: s, onRoleClick: i } = e,
        u = l.useRef(null),
        [c, m] = l.useState(!1),
        f = l.useCallback(
            (e) => {
                i(e), m(!1);
            },
            [i],
        );
    return (0, r.jsx)(d.Z, {
        targetElementRef: u,
        user: t.user,
        guildId: o,
        channelId: s,
        position: "left",
        spacing: 16,
        shouldShow: c,
        onRequestClose: () => {
            m(!1);
        },
        onRoleClick: f,
        children: (e) => {
            let { onClick: l, onMouseDown: s } = e,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                l = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++)
                            (n = o[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (l[n] = e[n]);
                    }
                    return l;
                })(e, ["onClick", "onMouseDown"]);
            return (0, r.jsx)(
                a.Z,
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
                })(
                    {
                        ref: u,
                        user: t.user,
                        guildId: o,
                        nick: t.name !== t.user.username ? t.name : null,
                        colorString: null,
                        status: n,
                        activities: [],
                        applicationStream: null,
                        isMobile: !1,
                        selected: c,
                        onClick: () => {
                            m((e) => !e);
                        },
                        className: I.memberListItem,
                        onMouseDown: (e) => {
                            c ? e.stopPropagation() : null == s || s(e);
                        },
                    },
                    i,
                ),
                t.id,
            );
        },
    });
});
function v(e) {
    var t;
    let { guildId: n, roleId: a, channelId: d, onClose: v, transitionState: y } = e,
        [C, O] = l.useState(a),
        k = l.useCallback((e) => {
            O(e);
        }, []),
        R = (0, o.e7)([g.Z], () => g.Z.getGuild(n)),
        j = (0, o.e7)([f.Z], () => f.Z.getSortedRoles(n)),
        x = (0, c.e)(n, C),
        _ = l.useMemo(() => j.filter((e) => !(0, m.fI)(e)).sort((e, t) => Number(t.hoist) - Number(e.hoist)), [j]),
        w = (0, o.e7)([b.Z], () => {
            let e = x.map((e) => ({
                member: e,
                status: b.Z.getStatus(e.id),
            }));
            return e.sort((e, t) => e.member.name.localeCompare(t.member.name, void 0, { sensitivity: "base" })), e;
        }, [x]),
        E = w.length,
        M = null != (t = null == R ? void 0 : R.name) ? t : S.intl.string(S.t.dtwqPR);
    return (0, r.jsx)(i.u_l, {
        transitionState: y,
        onClose: v,
        title: S.intl.formatToPlainString(S.t.khwGwN, { guild: M }),
        preview: (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: S.intl.format(S.t.AWmdd9, { count: E }),
        }),
        input: (0, r.jsx)(s.V, {
            selectionMode: "single",
            value: C,
            onSelectionChange: (e) => {
                null != e && O(e);
            },
            closeOnSelect: !0,
            options: _,
            formatOption: (e) => {
                var t;
                let n = null != (t = e.colorString) ? t : p.Pbq;
                return {
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, r.jsx)(u.xko, {
                        color: n,
                        colors: e.colorStrings,
                    }),
                };
            },
            label: S.intl.string(S.t.ZveC7e),
            hideLabel: !0,
            placeholder: S.intl.string(S.t.ZveC7e),
        }),
        actions: [],
        children: (0, r.jsx)(u.Kqy, {
            gap: 16,
            children:
                0 === w.length
                    ? (0, r.jsx)("div", {
                          className: I.empty,
                          children: (0, r.jsx)(u.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t.tuL9TW),
                          }),
                      })
                    : (0, r.jsx)("div", {
                          className: I.memberList,
                          children: w.map((e) => {
                              let { member: t, status: l } = e;
                              return (0, r.jsx)(
                                  h,
                                  {
                                      member: t,
                                      status: l,
                                      guildId: n,
                                      channelId: d,
                                      onRoleClick: k,
                                  },
                                  t.id,
                              );
                          }),
                      }),
        }),
    });
}
