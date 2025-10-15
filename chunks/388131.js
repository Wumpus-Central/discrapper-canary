n.d(t, {
    A: () => x,
    default: () => O,
}),
    n(388685),
    n(953529);
var r = n(951288),
    i = n(647438),
    s = n(793030),
    l = n(442837),
    a = n(481060),
    o = n(741361),
    c = n(881052),
    d = n(911969),
    h = n(974339),
    u = n(215157),
    p = n(592125),
    g = n(430824),
    m = n(700785),
    C = n(146085),
    b = n(71080),
    N = n(388032),
    f = n(878713);
function x(e, t) {
    return {
        id: e,
        type: t,
        deny: m.Hn,
        allow: C.yP,
    };
}
function O(e) {
    var t,
        n,
        { channelId: m, onClose: O } = e,
        E = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    (n = s[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["channelId", "onClose"]);
    let j = (0, l.e7)([p.Z], () => p.Z.getChannel(m)),
        I = (0, l.e7)([g.Z], () => g.Z.getGuild(null == j ? void 0 : j.getGuildId())),
        [v, y] = i.useState(""),
        [S, A] = i.useState({}),
        [T, _] = i.useState(!1),
        [P, L] = i.useState(null),
        D = i.useRef(null),
        { roles: G, members: U, getRichTag: w } = (0, u.Q)(I, j, C.yP, v),
        M = h.Z.useSections({
            roles: G,
            members: U,
        });
    if (null == j || null == I) return null;
    let R = async () => {
        _(!0);
        try {
            await (function (e, t) {
                let n = Object.values(t)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === b.aC.ROLE ? x(t.id, d.BN.ROLE) : x(t.id, d.BN.MEMBER);
                    });
                return (0, o.hw)(e.id, n, !0);
            })(j, S),
                O();
        } catch (t) {
            let e = new c.Hx(t);
            _(!1), L(e);
        }
    };
    return (0, r.jsx)(h.Z.Provider, {
        listRef: D,
        query: v,
        setQuery: y,
        pendingAdditions: S,
        setPendingAdditions: A,
        roles: G,
        members: U,
        getRichTag: w,
        children: (0, r.jsx)(
            s.Modal,
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
            })({}, E)),
            (n = n =
                {
                    title: N.intl.string(N.t.dMJ3Y6),
                    onClose: O,
                    input: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(a.Text, {
                                className: f.channelName,
                                variant: "text-lg/normal",
                                color: "header-secondary",
                                children: [
                                    (0, r.jsx)(a.ewx, {
                                        className: f.channelIcon,
                                        size: "sm",
                                        color: "currentColor",
                                    }),
                                    j.name,
                                ],
                            }),
                            j.isGuildStageVoice() &&
                                (0, r.jsx)(a.Text, {
                                    color: "header-secondary",
                                    className: f.description,
                                    variant: "text-sm/normal",
                                    children: N.intl.string(N.t.f7VbhF),
                                }),
                            (0, r.jsx)(h.Z.SearchBox, { placeholderText: N.intl.string(N.t.iezLLn) }),
                            (0, r.jsx)(a.Text, {
                                className: f.subtext,
                                variant: "text-xs/normal",
                                children: N.intl.string(N.t.rwFx85),
                            }),
                            null != P
                                ? (0, r.jsx)(a.Text, {
                                      className: f.subtext,
                                      variant: "text-xs/normal",
                                      color: "text-danger",
                                      children: P.getAnyErrorMessage(),
                                  })
                                : null,
                        ],
                    }),
                    listProps: {
                        ref: D,
                        sectionHeight: h.Z.SECTION_HEIGHT,
                        renderSection: h.Z.renderSection,
                        rowHeight: h.Z.ROW_HEIGHT,
                        renderRow: h.Z.renderRow,
                        sections: M,
                    },
                    actions: [
                        {
                            variant: "secondary",
                            text: N.intl.string(N.t["ETE/oC"]),
                            onClick: O,
                        },
                        {
                            variant: "primary",
                            text: N.intl.string(N.t.OYkgVk),
                            onClick: R,
                            loading: T,
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
