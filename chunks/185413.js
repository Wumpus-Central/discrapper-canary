n.d(t, { default: () => O }), n(388685), n(953529), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(82659),
    o = n(481060),
    s = n(741361),
    c = n(881052),
    u = n(131704),
    d = n(592125),
    p = n(430824),
    h = n(626135),
    f = n(934415),
    m = n(974339),
    g = n(215157),
    b = n(71080),
    y = n(981631),
    _ = n(388032),
    C = n(257803);
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
}
function x(e, t) {
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
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e) {
    var { channelId: t } = e,
        n = x(e, ["channelId"]);
    let a = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        o = (0, l.e7)([p.Z], () => p.Z.getGuild(null == a ? void 0 : a.getGuildId()));
    return (i.useEffect(() => {
        h.default.track(y.rMx.OPEN_MODAL, { type: "Grant Channel Access" });
    }, []),
    null == a || null == o)
        ? null
        : (0, r.jsx)(
              j,
              v(
                  {
                      guild: o,
                      channel: a,
                  },
                  n,
              ),
          );
}
function j(e) {
    var t,
        n,
        { guild: l, channel: d, onClose: p, newChannel: h, inSettings: y } = e,
        O = x(e, ["guild", "channel", "onClose", "newChannel", "inSettings"]);
    let [j, E] = i.useState(""),
        [S, I] = i.useState({}),
        [P, Z] = i.useState(!1),
        [T, N] = i.useState(null),
        A = i.useRef(null),
        { roles: w, members: R, getRichTag: M } = (0, g.Q)(l, d, d.accessPermissions, j),
        D = m.Z.useSections({
            roles: w,
            members: R,
        }),
        L = h && 0 === Object.keys(S).length;
    async function k() {
        if (null == d || 0 === Object.keys(S).length) return void p();
        Z(!0);
        try {
            await (function (e, t, n) {
                let r = [];
                return (
                    Object.values(t).forEach((t) => {
                        let { row: n } = t;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === b.aC.ROLE
                                ? r.push((0, f.rX)(n.id, e.type))
                                : n.rowType === b.aC.MEMBER && r.push((0, f.jZ)(n.id, e.type)));
                    }),
                    (0, s.hw)(e.id, r, n)
                );
            })(d, S, y),
                p(),
                Z(!1);
        } catch (t) {
            let e = new c.Hx(t);
            Z(!1), N(e);
        }
    }
    let U = (0, u.zi)(d.type) ? o.W4G : o.gjC;
    return (0, r.jsx)(m.Z.Provider, {
        listRef: A,
        query: j,
        setQuery: E,
        pendingAdditions: S,
        setPendingAdditions: I,
        roles: w,
        members: R,
        getRichTag: M,
        children: (0, r.jsx)(
            a.Modal,
            ((t = v({}, O)),
            (n = n =
                {
                    title: _.intl.string(_.t.dMJ3Y2),
                    onClose: p,
                    input: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(o.Text, {
                                className: C.channelName,
                                variant: "text-lg/normal",
                                color: "header-secondary",
                                children: [
                                    (0, r.jsx)(U, {
                                        className: C.channelIcon,
                                        size: "sm",
                                        color: "currentColor",
                                    }),
                                    d.name,
                                ],
                            }),
                            d.isGuildStageVoice() &&
                                (0, r.jsx)(o.Text, {
                                    color: "header-secondary",
                                    className: C.description,
                                    variant: "text-sm/normal",
                                    children: _.intl.string(_.t.f7VbhI),
                                }),
                            (0, r.jsx)(m.Z.SearchBox, { placeholderText: _.intl.string(_.t.iezLLi) }),
                            (0, r.jsx)(o.Text, {
                                className: C.subtext,
                                variant: "text-xs/normal",
                                children: _.intl.string(_.t["rwFx8/"]),
                            }),
                            null != T
                                ? (0, r.jsx)(o.Text, {
                                      className: C.subtext,
                                      variant: "text-xs/normal",
                                      color: "text-danger",
                                      children: T.getAnyErrorMessage(),
                                  })
                                : null,
                        ],
                    }),
                    listProps: {
                        ref: A,
                        sectionHeight: m.Z.SECTION_HEIGHT,
                        renderSection: m.Z.renderSection,
                        rowHeight: m.Z.ROW_HEIGHT,
                        renderRow: m.Z.renderRow,
                        sections: D,
                    },
                    actions: L
                        ? [
                              {
                                  variant: "secondary",
                                  text: _.intl.string(_.t.u46sxc),
                                  onClick: p,
                              },
                          ]
                        : [
                              {
                                  variant: "secondary",
                                  text: _.intl.string(_.t["ETE/oK"]),
                                  onClick: p,
                              },
                              {
                                  variant: "primary",
                                  text: _.intl.string(_.t.i4jeWV),
                                  onClick: k,
                                  loading: P,
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
