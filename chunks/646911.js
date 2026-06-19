n.d(l, { A: () => I });
var i = n(627968),
    t = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(17928),
    d = n(477782),
    c = n(559647),
    o = n(583650),
    u = n(323384),
    h = n(842209),
    m = n(210978),
    p = n(545152),
    x = n(664929),
    g = n(700210),
    j = n(863610),
    b = n(20447);
let f = () => (0, i.jsx)("div", { className: b._, children: (0, i.jsx)(j.n, { dotRadius: 4, themed: !0 }) });
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
        M = (0, g.A)({ user: R, guildId: F?.id, context: N }),
        D = t.useMemo(() => ({ channel: j, type: "channel" }), [j]),
        [X, _] = t.useState(""),
        P = "" !== X,
        {
            commands: T,
            commandsByActiveSection: L,
            sectionDescriptors: V,
            loading: Y,
        } = h.cu({
            context: D,
            filters: { text: P ? X : void 0, commandTypes: [n] },
            options: { limit: k.YC, includeFrecency: !P, scoreMethod: P ? m.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: G } = t.useMemo(() => {
            let e = {};
            return (
                V.forEach((l) => {
                    e[l.id] = l;
                }),
                { sections: e }
            );
        }, [V]),
        O = t.useRef(Y);
    t.useEffect(() => {
        Y !== O.current && ((O.current = Y), I?.());
    }, [Y, I]);
    let U = t.useCallback(
            (e, l) => {
                let { showAppIcon: n } = l;
                a()(null != j, "menu item should not show if channel is null");
                let t = G[e.applicationId],
                    r = n && null != t ? (0, x.Rg)(t) : void 0,
                    o =
                        null != r && null != t
                            ? (e) => {
                                  let { className: l } = e;
                                  return (0, i.jsx)("span", {
                                      className: l,
                                      children: (0, i.jsx)(r, {
                                          channel: j,
                                          section: t,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, i.jsx)(
                    d.Dr,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft: o,
                        leadingAccessory: null != o ? { type: "icon", icon: o } : void 0,
                        trailingIndicator: { type: "icon", icon: c.l },
                        icon: c.l,
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
        H = t.useCallback(
            (e) => {
                let { section: l, data: n } = e;
                return (0, i.jsx)(
                    d.rX,
                    { label: v.intl.string(v.t.V0w2ap), children: n.map((e) => U(e, { showAppIcon: !0 })) },
                    l.id,
                );
            },
            [U],
        ),
        S = t.useCallback(
            (e) => {
                let { section: l, data: n } = e,
                    t = (0, x.Rg)(l),
                    s =
                        null != t
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, i.jsx)("span", {
                                      className: n,
                                      children: (0, i.jsx)(t, {
                                          channel: j,
                                          section: l,
                                          selectable: !1,
                                          width: 20,
                                          height: 20,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, i.jsx)(
                    d.Dr,
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
        q = (0, i.jsx)(
            d.aK,
            {
                id: "command-search",
                control: (e, l) =>
                    (0, i.jsx)(o.V, { ...e, query: X, onChange: _, placeholder: v.intl.string(v.t.m1UwbP), ref: l }),
            },
            "command-search",
        );
    if (Y)
        l = (0, i.jsx)(
            d.Dr,
            { id: "menu-commands-placeholder", render: () => (0, i.jsx)(f, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === T.length)
            l = (0, i.jsxs)(i.Fragment, {
                children: [
                    P && (0, i.jsxs)(i.Fragment, { children: [q, (0, i.jsx)(d.bX, {})] }),
                    (0, i.jsx)(
                        d.Dr,
                        { id: "menu-commands-empty", label: v.intl.string(v.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (P)
            l = (0, i.jsxs)(i.Fragment, {
                children: [q, (0, i.jsx)(d.bX, {}), T.map((e) => U(e, { showAppIcon: !0 }))],
            });
        else {
            let e = L.find((e) => {
                    let { section: l } = e;
                    return l.id === k.Ik.FRECENCY;
                }),
                n = L.filter((e) => {
                    let { section: l } = e;
                    return l.id !== k.Ik.FRECENCY;
                });
            l = (0, i.jsxs)(i.Fragment, {
                children: [
                    q,
                    null != e && H(e),
                    (0, i.jsx)(d.rX, { label: v.intl.string(v.t.PHjkRE), children: n.map((e) => S(e)) }),
                ],
            });
        }
        null != M &&
            M.length > 0 &&
            (l = (0, i.jsxs)(i.Fragment, { children: [l, (0, i.jsx)(d.bX, {}, "separator"), M] }));
    }
    if (!C.kvI.TEXTUAL.has(j.type))
        if (null == M || !(M.length > 0)) return null;
        else l = M;
    return j.isMediaThread()
        ? null
        : (0, i.jsx)(d.Dr, {
              id: "apps",
              label: v.intl.string(v.t.PHjkRE),
              leadingAccessory: E ? { type: "icon", icon: u.k } : void 0,
              listClassName: w.p,
              children: l,
          });
};
