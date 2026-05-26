n.d(l, { A: () => I });
var t = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(17928),
    c = n(477782),
    d = n(559647),
    o = n(583650),
    u = n(323384),
    h = n(842209),
    m = n(210978),
    p = n(545152),
    x = n(649671),
    g = n(700210),
    j = n(863610),
    b = n(20447);
let f = () => (0, t.jsx)("div", { className: b._, children: (0, t.jsx)(j.n, { dotRadius: 4, themed: !0 }) });
var y = n(71393),
    A = n(287809),
    C = n(652215),
    k = n(73510),
    v = n(375708),
    w = n(404111);
let I = (e) => {
    let l,
        {
            commandType: n,
            commandTargetId: s,
            channel: j,
            guildId: b,
            onHeightUpdate: I,
            context: N,
            showIcon: E = !1,
        } = e,
        F = (0, r.bG)([y.A], () => y.A.getGuild(b ?? j.guild_id)),
        R = (0, r.bG)([A.default], () => A.default.getUser(s)),
        D = (0, g.A)({ user: R, guildId: F?.id, context: N }),
        M = i.useMemo(() => ({ channel: j, type: "channel" }), [j]),
        [X, _] = i.useState(""),
        P = "" !== X,
        {
            commands: L,
            commandsByActiveSection: T,
            sectionDescriptors: V,
            loading: Y,
        } = h.cu({
            context: M,
            filters: { text: P ? X : void 0, commandTypes: [n] },
            options: { limit: k.YC, includeFrecency: !P, scoreMethod: P ? m.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: G } = i.useMemo(() => {
            let e = {};
            return (
                V.forEach((l) => {
                    e[l.id] = l;
                }),
                { sections: e }
            );
        }, [V]),
        O = i.useRef(Y);
    i.useEffect(() => {
        Y !== O.current && ((O.current = Y), I?.());
    }, [Y, I]);
    let U = i.useCallback(
            (e, l) => {
                let { showAppIcon: n } = l;
                a()(null != j, "menu item should not show if channel is null");
                let i = G[e.applicationId],
                    r = n && null != i ? (0, x.Rg)(i) : void 0,
                    o =
                        null != r && null != i
                            ? (e) => {
                                  let { className: l } = e;
                                  return (0, t.jsx)("span", {
                                      className: l,
                                      children: (0, t.jsx)(r, {
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
                    c.Dr,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft: o,
                        leadingAccessory: null != o ? { type: "icon", icon: o } : void 0,
                        trailingIndicator: { type: "icon", icon: d.l },
                        icon: d.l,
                        action: () => {
                            (0, p.A)({
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
        H = i.useCallback(
            (e) => {
                let { section: l, data: n } = e;
                return (0, t.jsx)(
                    c.rX,
                    { label: v.intl.string(v.t.V0w2ap), children: n.map((e) => U(e, { showAppIcon: !0 })) },
                    l.id,
                );
            },
            [U],
        ),
        S = i.useCallback(
            (e) => {
                let { section: l, data: n } = e,
                    i = (0, x.Rg)(l),
                    s =
                        null != i
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, t.jsx)("span", {
                                      className: n,
                                      children: (0, t.jsx)(i, {
                                          channel: j,
                                          section: l,
                                          selectable: !1,
                                          width: 20,
                                          height: 20,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, t.jsx)(
                    c.Dr,
                    {
                        id: l.id,
                        label: l.name,
                        iconLeft: s,
                        leadingAccessory: null != s ? { type: "icon", icon: s } : void 0,
                        children: n.map((e) => U(e, { showAppIcon: !1 })),
                    },
                    l.id,
                );
            },
            [j, U],
        ),
        q = (0, t.jsx)(
            c.aK,
            {
                id: "command-search",
                control: (e, l) =>
                    (0, t.jsx)(o.V, { ...e, query: X, onChange: _, placeholder: v.intl.string(v.t.m1UwbP), ref: l }),
            },
            "command-search",
        );
    if (Y)
        l = (0, t.jsx)(
            c.Dr,
            { id: "menu-commands-placeholder", render: () => (0, t.jsx)(f, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === L.length)
            l = (0, t.jsxs)(t.Fragment, {
                children: [
                    P && (0, t.jsxs)(t.Fragment, { children: [q, (0, t.jsx)(c.bX, {})] }),
                    (0, t.jsx)(
                        c.Dr,
                        { id: "menu-commands-empty", label: v.intl.string(v.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (P)
            l = (0, t.jsxs)(t.Fragment, {
                children: [q, (0, t.jsx)(c.bX, {}), L.map((e) => U(e, { showAppIcon: !0 }))],
            });
        else {
            let e = T.find((e) => {
                    let { section: l } = e;
                    return l.id === k.Ik.FRECENCY;
                }),
                n = T.filter((e) => {
                    let { section: l } = e;
                    return l.id !== k.Ik.FRECENCY;
                });
            l = (0, t.jsxs)(t.Fragment, {
                children: [
                    q,
                    null != e && H(e),
                    (0, t.jsx)(c.rX, { label: v.intl.string(v.t.PHjkRE), children: n.map((e) => S(e)) }),
                ],
            });
        }
        null != D &&
            D.length > 0 &&
            (l = (0, t.jsxs)(t.Fragment, { children: [l, (0, t.jsx)(c.bX, {}, "separator"), D] }));
    }
    if (!C.kvI.TEXTUAL.has(j.type))
        if (null == D || !(D.length > 0)) return null;
        else l = D;
    return (0, t.jsx)(c.Dr, {
        id: "apps",
        label: v.intl.string(v.t.PHjkRE),
        leadingAccessory: E ? { type: "icon", icon: u.k } : void 0,
        listClassName: w.p,
        children: l,
    });
};
