n.d(t, { default: () => x }), n(896048), n(228524), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(158954),
    a = n(311907),
    s = n(397927),
    o = n(702805),
    c = n(198982),
    u = n(95701),
    d = n(734057),
    f = n(71393),
    p = n(954571),
    h = n(147036),
    b = n(845202),
    g = n(86944),
    m = n(737045),
    A = n(652215),
    y = n(985018),
    O = n(695244);
function j(e) {
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
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}
function x(e) {
    let { channelId: t } = e,
        n = v(e, ["channelId"]),
        i = (0, a.bG)([d.A], () => d.A.getChannel(t), [t]),
        s = (0, a.bG)([f.A], () => f.A.getGuild(null == i ? void 0 : i.getGuildId()));
    return (l.useEffect(() => {
        p.default.track(A.HAw.OPEN_MODAL, { type: "Grant Channel Access" });
    }, []),
    null == i || null == s)
        ? null
        : (0, r.jsx)(
              E,
              j(
                  {
                      guild: s,
                      channel: i,
                  },
                  n,
              ),
          );
}
function E(e) {
    var t, n;
    let { guild: a, channel: d, onClose: f, newChannel: p, inSettings: A } = e,
        x = v(e, ["guild", "channel", "onClose", "newChannel", "inSettings"]),
        [E, _] = l.useState(""),
        [C, S] = l.useState({}),
        [I, N] = l.useState(!1),
        [T, P] = l.useState(null),
        w = l.useRef(null),
        { roles: R, members: D, getRichTag: M } = (0, g.K)(a, d, d.accessPermissions, E),
        L = b.A.useSections({
            roles: R,
            members: D,
        }),
        G = p && 0 === Object.keys(C).length;
    async function k() {
        if (null == d || 0 === Object.keys(C).length) return void f();
        N(!0);
        try {
            var e, t, n;
            let r;
            await ((e = d),
            (t = C),
            (n = A),
            (r = []),
            Object.values(t).forEach((t) => {
                let { row: n } = t;
                null != n.id &&
                    "" !== n.id &&
                    (n.rowType === m.T6.ROLE
                        ? r.push((0, h.we)(n.id, e.type))
                        : n.rowType === m.T6.MEMBER && r.push((0, h.n3)(n.id, e.type)));
            }),
            (0, o.R$)(e.id, r, n)),
                f(),
                N(!1);
        } catch (t) {
            let e = new c.LG(t);
            N(!1), P(e);
        }
    }
    let U = (0, u.ke)(d.type) ? s.I$d : s.trU;
    return (0, r.jsx)(b.A.Provider, {
        listRef: w,
        query: E,
        setQuery: _,
        pendingAdditions: C,
        setPendingAdditions: S,
        roles: R,
        members: D,
        getRichTag: M,
        children: (0, r.jsx)(
            i.Modal,
            ((t = j({}, x)),
            (n = n =
                {
                    title: y.intl.string(y.t.dMJ3Y6),
                    onClose: f,
                    input: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(s.Text, {
                                className: O.HA,
                                variant: "text-lg/normal",
                                color: "text-default",
                                children: [
                                    (0, r.jsx)(U, {
                                        className: O.p,
                                        size: "sm",
                                        color: "currentColor",
                                    }),
                                    d.name,
                                ],
                            }),
                            d.isGuildStageVoice() &&
                                (0, r.jsx)(s.Text, {
                                    color: "text-default",
                                    className: O.h_,
                                    variant: "text-sm/normal",
                                    children: y.intl.string(y.t.f7VbhF),
                                }),
                            (0, r.jsx)(b.A.SearchBox, { placeholderText: y.intl.string(y.t.iezLLn) }),
                            (0, r.jsx)(s.Text, {
                                className: O.W$,
                                variant: "text-xs/normal",
                                children: y.intl.string(y.t.rwFx85),
                            }),
                            null != T
                                ? (0, r.jsx)(s.Text, {
                                      className: O.W$,
                                      variant: "text-xs/normal",
                                      color: "text-feedback-critical",
                                      children: T.getAnyErrorMessage(),
                                  })
                                : null,
                        ],
                    }),
                    listProps: {
                        ref: w,
                        sectionHeight: b.A.SECTION_HEIGHT,
                        renderSection: b.A.renderSection,
                        rowHeight: b.A.ROW_HEIGHT,
                        renderRow: b.A.renderRow,
                        sections: L,
                    },
                    actions: G
                        ? [
                              {
                                  variant: "secondary",
                                  text: y.intl.string(y.t.u46sxe),
                                  onClick: f,
                              },
                          ]
                        : [
                              {
                                  variant: "secondary",
                                  text: y.intl.string(y.t["ETE/oC"]),
                                  onClick: f,
                              },
                              {
                                  variant: "primary",
                                  text: y.intl.string(y.t.i4jeWR),
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
