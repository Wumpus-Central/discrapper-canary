n.d(t, {
    A: () => E,
    default: () => I,
}),
    n(388685),
    n(953529);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    s = n(442837),
    a = n(481060),
    o = n(741361),
    c = n(881052),
    u = n(911969),
    d = n(974339),
    h = n(215157),
    p = n(592125),
    g = n(430824),
    m = n(700785),
    C = n(146085),
    f = n(71080),
    O = n(388032),
    b = n(878713);
function E(e, t) {
    return {
        id: e,
        type: t,
        deny: m.Hn,
        allow: C.yP,
    };
}
function I(e) {
    var t,
        n,
        { channelId: m, onClose: I } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["channelId", "onClose"]);
    let y = (0, s.e7)([p.Z], () => p.Z.getChannel(m)),
        N = (0, s.e7)([g.Z], () => g.Z.getGuild(null == y ? void 0 : y.getGuildId())),
        [S, j] = r.useState(""),
        [x, P] = r.useState({}),
        [T, A] = r.useState(!1),
        [_, G] = r.useState(null),
        U = r.useRef(null),
        { roles: w, members: L, getRichTag: D } = (0, h.Q)(N, y, C.yP, S),
        Z = d.Z.useSections({
            roles: w,
            members: L,
        });
    if (null == y || null == N) return null;
    let R = async () => {
        A(!0);
        try {
            await (function (e, t) {
                let n = Object.values(t)
                    .filter((e) => {
                        let { row: t } = e;
                        return null != t.id;
                    })
                    .map((e) => {
                        let { row: t } = e;
                        return t.rowType === f.aC.ROLE ? E(t.id, u.BN.ROLE) : E(t.id, u.BN.MEMBER);
                    });
                return (0, o.hw)(e.id, n, !0);
            })(y, x),
                I();
        } catch (t) {
            let e = new c.Hx(t);
            A(!1), G(e);
        }
    };
    return (0, i.jsx)(d.Z.Provider, {
        listRef: U,
        query: S,
        setQuery: j,
        pendingAdditions: x,
        setPendingAdditions: P,
        roles: w,
        members: L,
        getRichTag: D,
        children: (0, i.jsx)(
            l.Modal,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, v)),
            (n = n =
                {
                    title: O.intl.string(O.t.dMJ3Y6),
                    onClose: I,
                    input: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(a.Text, {
                                className: b.channelName,
                                variant: "text-lg/normal",
                                color: "header-secondary",
                                children: [
                                    (0, i.jsx)(a.ewx, {
                                        className: b.channelIcon,
                                        size: "sm",
                                        color: "currentColor",
                                    }),
                                    y.name,
                                ],
                            }),
                            y.isGuildStageVoice() &&
                                (0, i.jsx)(a.Text, {
                                    color: "header-secondary",
                                    className: b.description,
                                    variant: "text-sm/normal",
                                    children: O.intl.string(O.t.f7VbhF),
                                }),
                            (0, i.jsx)(d.Z.SearchBox, { placeholderText: O.intl.string(O.t.iezLLn) }),
                            (0, i.jsx)(a.Text, {
                                className: b.subtext,
                                variant: "text-xs/normal",
                                children: O.intl.string(O.t.rwFx85),
                            }),
                            null != _
                                ? (0, i.jsx)(a.Text, {
                                      className: b.subtext,
                                      variant: "text-xs/normal",
                                      color: "text-danger",
                                      children: _.getAnyErrorMessage(),
                                  })
                                : null,
                        ],
                    }),
                    listProps: {
                        ref: U,
                        sectionHeight: d.Z.SECTION_HEIGHT,
                        renderSection: d.Z.renderSection,
                        rowHeight: d.Z.ROW_HEIGHT,
                        renderRow: d.Z.renderRow,
                        sections: Z,
                    },
                    actions: [
                        {
                            variant: "secondary",
                            text: O.intl.string(O.t["ETE/oC"]),
                            onClick: I,
                        },
                        {
                            variant: "primary",
                            text: O.intl.string(O.t.OYkgVk),
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
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
    });
}
