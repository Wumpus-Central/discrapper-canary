l.d(n, { A: () => w });
var t = l(477900),
    i = l(582128),
    s = l(284009),
    a = l.n(s),
    c = l(855986),
    r = l(477782),
    d = l(559647),
    o = l(583650),
    u = l(323384),
    h = l(842209),
    p = l(210978),
    m = l(545152),
    g = l(664929),
    x = l(700210),
    j = l(863610),
    b = l(413692);
let f = function () {
    return (0, t.jsx)("div", { className: b._, children: (0, t.jsx)(j.n, { dotRadius: 4, themed: !0 }) });
};
var A = l(71393),
    y = l(287809),
    I = l(652215),
    C = l(73510),
    k = l(792996),
    v = l(517682);
let w = function (e) {
    let n,
        {
            commandType: l,
            commandTargetId: s,
            channel: j,
            guildId: b,
            onHeightUpdate: w,
            context: N,
            showIcon: E = !1,
        } = e,
        F = (0, c.bG)([A.A], () => A.A.getGuild(b ?? j.guild_id)),
        M = (0, c.bG)([y.default], () => y.default.getUser(s)),
        R = (0, x.A)({ user: M, guildId: F?.id, context: N }),
        D = i.useMemo(() => ({ channel: j, type: "channel" }), [j]),
        [X, _] = i.useState(""),
        P = "" !== X,
        {
            commands: T,
            commandsByActiveSection: L,
            sectionDescriptors: S,
            loading: V,
        } = h.cu({
            context: D,
            filters: { text: P ? X : void 0, commandTypes: [l] },
            options: { limit: 10, includeFrecency: !P, scoreMethod: P ? p.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: G } = i.useMemo(() => {
            let e = {};
            return (
                S.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [S]),
        O = i.useRef(V);
    i.useEffect(() => {
        V !== O.current && ((O.current = V), w?.());
    }, [V, w]);
    let U = i.useCallback(
            (e, n) => {
                let { showAppIcon: l } = n;
                a()(null != j, "menu item should not show if channel is null");
                let i = G[e.applicationId],
                    c = l && null != i ? (0, g.Rg)(i) : void 0,
                    o =
                        null != c && null != i
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, t.jsx)("span", {
                                      className: n,
                                      children: (0, t.jsx)(c, {
                                          channel: j,
                                          section: i,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, t.jsx)(
                    r.Dr,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft: o,
                        leadingAccessory: null != o ? { type: "icon", icon: o } : void 0,
                        trailingIndicator: { type: "icon", icon: d.SendMessageIcon },
                        icon: d.SendMessageIcon,
                        action: () => {
                            (0, m.A)({
                                command: e,
                                optionValues: {},
                                context: { channel: j, guild: F },
                                commandTargetId: s,
                            });
                        },
                    },
                    e.id,
                );
            },
            [j, G, F, s],
        ),
        Y = i.useCallback(
            (e) => {
                let { section: n, data: l } = e;
                return (0, t.jsx)(
                    r.rX,
                    { label: k.intl.string(k.t.V0w2ap), children: l.map((e) => U(e, { showAppIcon: !0 })) },
                    n.id,
                );
            },
            [U],
        ),
        H = i.useCallback(
            (e) => {
                let { section: n, data: l } = e,
                    i = (0, g.Rg)(n),
                    s =
                        null != i
                            ? (e) => {
                                  let { className: l } = e;
                                  return (0, t.jsx)("span", {
                                      className: l,
                                      children: (0, t.jsx)(i, {
                                          channel: j,
                                          section: n,
                                          selectable: !1,
                                          width: 20,
                                          height: 20,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, t.jsx)(
                    r.Dr,
                    {
                        id: n.id,
                        label: n.name,
                        iconLeft: s,
                        leadingAccessory: null != s ? { type: "icon", icon: s } : void 0,
                        children: l.map((e) => U(e, { showAppIcon: !1 })),
                    },
                    n.id,
                );
            },
            [j, U],
        ),
        q = (0, t.jsx)(
            r.aK,
            {
                id: "command-search",
                control: (e, n) =>
                    (0, t.jsx)(o.V, { ...e, query: X, onChange: _, placeholder: k.intl.string(k.t.m1UwbP), ref: n }),
            },
            "command-search",
        );
    if (V)
        n = (0, t.jsx)(
            r.Dr,
            { id: "menu-commands-placeholder", render: () => (0, t.jsx)(f, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === T.length)
            n = (0, t.jsxs)(t.Fragment, {
                children: [
                    P && (0, t.jsxs)(t.Fragment, { children: [q, (0, t.jsx)(r.bX, {})] }),
                    (0, t.jsx)(
                        r.Dr,
                        { id: "menu-commands-empty", label: k.intl.string(k.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (P)
            n = (0, t.jsxs)(t.Fragment, {
                children: [q, (0, t.jsx)(r.bX, {}), T.map((e) => U(e, { showAppIcon: !0 }))],
            });
        else {
            let e = L.find((e) => {
                    let { section: n } = e;
                    return n.id === C.Ik.FRECENCY;
                }),
                l = L.filter((e) => {
                    let { section: n } = e;
                    return n.id !== C.Ik.FRECENCY;
                });
            n = (0, t.jsxs)(t.Fragment, {
                children: [
                    q,
                    null != e && Y(e),
                    (0, t.jsx)(r.rX, { label: k.intl.string(k.t.PHjkRE), children: l.map((e) => H(e)) }),
                ],
            });
        }
        null != R &&
            R.length > 0 &&
            (n = (0, t.jsxs)(t.Fragment, { children: [n, (0, t.jsx)(r.bX, {}, "separator"), R] }));
    }
    if (!I.kvI.TEXTUAL.has(j.type))
        if (null == R || !(R.length > 0)) return null;
        else n = R;
    return j.isMediaThread()
        ? null
        : (0, t.jsx)(r.Dr, {
              id: "apps",
              label: k.intl.string(k.t.PHjkRE),
              leadingAccessory: E ? { type: "icon", icon: u.AppsIcon } : void 0,
              listClassName: v.p,
              children: n,
          });
};
