n.d(t, { default: () => j }), n(388685), n(953529), n(539854);
var i = n(951288),
    r = n(647438),
    l = n(793030),
    a = n(442837),
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
    C = n(388032),
    v = n(257803);
function _(e) {
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
}
function x(e, t) {
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
            (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function j(e) {
    var { channelId: t } = e,
        n = x(e, ["channelId"]);
    let l = (0, a.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        o = (0, a.e7)([p.Z], () => p.Z.getGuild(null == l ? void 0 : l.getGuildId()));
    return (r.useEffect(() => {
        h.default.track(y.rMx.OPEN_MODAL, { type: "Grant Channel Access" });
    }, []),
    null == l || null == o)
        ? null
        : (0, i.jsx)(
              O,
              _(
                  {
                      guild: o,
                      channel: l,
                  },
                  n,
              ),
          );
}
function O(e) {
    var t,
        n,
        { guild: a, channel: d, onClose: p, newChannel: h, inSettings: y } = e,
        j = x(e, ["guild", "channel", "onClose", "newChannel", "inSettings"]);
    let [O, E] = r.useState(""),
        [S, P] = r.useState({}),
        [I, Z] = r.useState(!1),
        [T, N] = r.useState(null),
        A = r.useRef(null),
        { roles: w, members: M, getRichTag: R } = (0, g.Q)(a, d, d.accessPermissions, O),
        L = m.Z.useSections({
            roles: w,
            members: M,
        }),
        D = h && 0 === Object.keys(S).length;
    async function k() {
        if (null == d || 0 === Object.keys(S).length) return void p();
        Z(!0);
        try {
            await (function (e, t, n) {
                let i = [];
                return (
                    Object.values(t).forEach((t) => {
                        let { row: n } = t;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === b.aC.ROLE
                                ? i.push((0, f.rX)(n.id, e.type))
                                : n.rowType === b.aC.MEMBER && i.push((0, f.jZ)(n.id, e.type)));
                    }),
                    (0, s.hw)(e.id, i, n)
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
    return (0, i.jsx)(m.Z.Provider, {
        listRef: A,
        query: O,
        setQuery: E,
        pendingAdditions: S,
        setPendingAdditions: P,
        roles: w,
        members: M,
        getRichTag: R,
        children: (0, i.jsx)(
            l.Modal,
            ((t = _({}, j)),
            (n = n =
                {
                    title: C.intl.string(C.t.dMJ3Y6),
                    onClose: p,
                    input: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(o.Text, {
                                className: v.channelName,
                                variant: "text-lg/normal",
                                color: "header-secondary",
                                children: [
                                    (0, i.jsx)(U, {
                                        className: v.channelIcon,
                                        size: "sm",
                                        color: "currentColor",
                                    }),
                                    d.name,
                                ],
                            }),
                            d.isGuildStageVoice() &&
                                (0, i.jsx)(o.Text, {
                                    color: "header-secondary",
                                    className: v.description,
                                    variant: "text-sm/normal",
                                    children: C.intl.string(C.t.f7VbhF),
                                }),
                            (0, i.jsx)(m.Z.SearchBox, { placeholderText: C.intl.string(C.t.iezLLn) }),
                            (0, i.jsx)(o.Text, {
                                className: v.subtext,
                                variant: "text-xs/normal",
                                children: C.intl.string(C.t.rwFx85),
                            }),
                            null != T
                                ? (0, i.jsx)(o.Text, {
                                      className: v.subtext,
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
                        sections: L,
                    },
                    actions: D
                        ? [
                              {
                                  variant: "secondary",
                                  text: C.intl.string(C.t.u46sxe),
                                  onClick: p,
                              },
                          ]
                        : [
                              {
                                  variant: "secondary",
                                  text: C.intl.string(C.t["ETE/oC"]),
                                  onClick: p,
                              },
                              {
                                  variant: "primary",
                                  text: C.intl.string(C.t.i4jeWR),
                                  onClick: k,
                                  loading: I,
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
