n.d(t, {
    A: () => j,
    default: () => m,
}),
    n(388685),
    n(953529);
var r = n(54381),
    i = n(473749),
    l = n(793030),
    o = n(442837),
    c = n(481060),
    s = n(741361),
    a = n(881052),
    u = n(911969),
    d = n(974339),
    p = n(215157),
    f = n(592125),
    b = n(430824),
    x = n(700785),
    y = n(146085),
    O = n(71080),
    g = n(388032),
    h = n(878713);
function j(e, t) {
    return {
        id: e,
        type: t,
        deny: x.Hn,
        allow: y.yP,
    };
}
function m(e) {
    var t,
        n,
        { channelId: x, onClose: m } = e,
        w = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["channelId", "onClose"]);
    let v = (0, o.e7)([f.Z], () => f.Z.getChannel(x)),
        P = (0, o.e7)([b.Z], () => b.Z.getGuild(null == v ? void 0 : v.getGuildId())),
        [S, E] = i.useState(""),
        [k, _] = i.useState({}),
        [C, N] = i.useState(!1),
        [T, Z] = i.useState(null),
        I = i.useRef(null),
        { roles: R, members: H, getRichTag: G } = (0, p.Q)(P, v, y.yP, S),
        M = d.Z.useSections({
            roles: R,
            members: H,
        });
    if (null == v || null == P) return null;
    let A = async () => {
        N(!0);
        try {
            await (function (e, t) {
                let n = Object.values(t)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === O.aC.ROLE ? j(t.id, u.BN.ROLE) : j(t.id, u.BN.MEMBER);
                    });
                return (0, s.hw)(e.id, n, !0);
            })(v, k),
                m();
        } catch (t) {
            let e = new a.Hx(t);
            N(!1), Z(e);
        }
    };
    return (0, r.jsx)(d.Z.Provider, {
        listRef: I,
        query: S,
        setQuery: E,
        pendingAdditions: k,
        setPendingAdditions: _,
        roles: R,
        members: H,
        getRichTag: G,
        children: (0, r.jsx)(
            l.Modal,
            ((t = (function (e) {
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
            })({}, w)),
            (n = n =
                {
                    title: g.intl.string(g.t.dMJ3Y6),
                    onClose: m,
                    input: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(c.Text, {
                                className: h.channelName,
                                variant: "text-lg/normal",
                                color: "text-default",
                                children: [
                                    (0, r.jsx)(c.ewx, {
                                        className: h.channelIcon,
                                        size: "sm",
                                        color: "currentColor",
                                    }),
                                    v.name,
                                ],
                            }),
                            v.isGuildStageVoice() &&
                                (0, r.jsx)(c.Text, {
                                    color: "text-default",
                                    className: h.description,
                                    variant: "text-sm/normal",
                                    children: g.intl.string(g.t.f7VbhF),
                                }),
                            (0, r.jsx)(d.Z.SearchBox, { placeholderText: g.intl.string(g.t.iezLLn) }),
                            (0, r.jsx)(c.Text, {
                                className: h.subtext,
                                variant: "text-xs/normal",
                                children: g.intl.string(g.t.rwFx85),
                            }),
                            null != T
                                ? (0, r.jsx)(c.Text, {
                                      className: h.subtext,
                                      variant: "text-xs/normal",
                                      color: "text-feedback-critical",
                                      children: T.getAnyErrorMessage(),
                                  })
                                : null,
                        ],
                    }),
                    listProps: {
                        ref: I,
                        sectionHeight: d.Z.SECTION_HEIGHT,
                        renderSection: d.Z.renderSection,
                        rowHeight: d.Z.ROW_HEIGHT,
                        renderRow: d.Z.renderRow,
                        sections: M,
                    },
                    actions: [
                        {
                            variant: "secondary",
                            text: g.intl.string(g.t["ETE/oC"]),
                            onClick: m,
                        },
                        {
                            variant: "primary",
                            text: g.intl.string(g.t.OYkgVk),
                            onClick: A,
                            loading: C,
                        },
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
    });
}
