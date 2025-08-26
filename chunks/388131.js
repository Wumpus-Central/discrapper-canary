r.d(t, {
    A: () => w,
    default: () => j,
}),
    r(388685),
    r(953529);
var n = r(951288),
    l = r(647438),
    o = r(442837),
    i = r(82659),
    s = r(481060),
    a = r(741361),
    c = r(881052),
    u = r(911969),
    d = r(974339),
    m = r(215157),
    x = r(592125),
    b = r(430824),
    h = r(700785),
    f = r(146085),
    y = r(71080),
    g = r(388032),
    p = r(878713);
function w(e, t) {
    return {
        id: e,
        type: t,
        deny: h.Hn,
        allow: f.yP,
    };
}
function j(e) {
    var t,
        r,
        { channelId: h, onClose: j } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ["channelId", "onClose"]);
    let v = (0, o.e7)([x.Z], () => x.Z.getChannel(h)),
        S = (0, o.e7)([b.Z], () => b.Z.getGuild(null == v ? void 0 : v.getGuildId())),
        [E, R] = l.useState(""),
        [T, P] = l.useState({}),
        [C, k] = l.useState(!1),
        [I, L] = l.useState(null),
        M = l.useRef(null),
        { roles: Z, members: N, getRichTag: B } = (0, m.Q)(S, v, f.yP, E),
        A = d.Z.useSections({
            roles: Z,
            members: N,
        });
    if (null == v || null == S) return null;
    let D = async () => {
        k(!0);
        try {
            await (function (e, t) {
                let r = Object.values(t)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === y.aC.ROLE ? w(t.id, u.BN.ROLE) : w(t.id, u.BN.MEMBER);
                    });
                return (0, a.hw)(e.id, r, !0);
            })(v, T),
                j();
        } catch (t) {
            let e = new c.Hx(t);
            k(!1), L(e);
        }
    };
    return (0, n.jsx)(d.Z.Provider, {
        listRef: M,
        query: E,
        setQuery: R,
        pendingAdditions: T,
        setPendingAdditions: P,
        roles: Z,
        members: N,
        getRichTag: B,
        children: (0, n.jsx)(
            i.Modal,
            ((t = (function (e) {
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
            })({}, O)),
            (r = r =
                {
                    title: g.intl.string(g.t.dMJ3Y2),
                    onClose: j,
                    input: (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsxs)(s.Text, {
                                className: p.channelName,
                                variant: "text-lg/normal",
                                color: "header-secondary",
                                children: [
                                    (0, n.jsx)(s.ewx, {
                                        className: p.channelIcon,
                                        size: "sm",
                                        color: "currentColor",
                                    }),
                                    v.name,
                                ],
                            }),
                            v.isGuildStageVoice() &&
                                (0, n.jsx)(s.Text, {
                                    color: "header-secondary",
                                    className: p.description,
                                    variant: "text-sm/normal",
                                    children: g.intl.string(g.t.f7VbhI),
                                }),
                            (0, n.jsx)(d.Z.SearchBox, { placeholderText: g.intl.string(g.t.iezLLi) }),
                            (0, n.jsx)(s.Text, {
                                className: p.subtext,
                                variant: "text-xs/normal",
                                children: g.intl.string(g.t["rwFx8/"]),
                            }),
                            null != I
                                ? (0, n.jsx)(s.Text, {
                                      className: p.subtext,
                                      variant: "text-xs/normal",
                                      color: "text-danger",
                                      children: I.getAnyErrorMessage(),
                                  })
                                : null,
                        ],
                    }),
                    listProps: {
                        ref: M,
                        sectionHeight: d.Z.SECTION_HEIGHT,
                        renderSection: d.Z.renderSection,
                        rowHeight: d.Z.ROW_HEIGHT,
                        renderRow: d.Z.renderRow,
                        sections: A,
                    },
                    actions: [
                        {
                            variant: "secondary",
                            text: g.intl.string(g.t["ETE/oK"]),
                            onClick: j,
                        },
                        {
                            variant: "primary",
                            text: g.intl.string(g.t.OYkgVl),
                            onClick: D,
                            loading: C,
                        },
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        ),
    });
}
