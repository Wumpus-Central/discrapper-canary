n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(17928),
    o = n(477782),
    c = n(559647),
    d = n(583650),
    u = n(323384),
    _ = n(842209),
    h = n(210978),
    g = n(545152),
    m = n(649671),
    p = n(700210),
    A = n(863610),
    f = n(20447);
let b = () => (0, i.jsx)("div", { className: f._, children: (0, i.jsx)(A.n, { dotRadius: 4, themed: !0 }) });
var x = n(71393),
    E = n(287809),
    I = n(652215),
    C = n(73510),
    N = n(985018),
    T = n(404111);
let S = (e) => {
    let t,
        {
            commandType: n,
            commandTargetId: a,
            channel: A,
            guildId: f,
            onHeightUpdate: S,
            context: v,
            showIcon: M = !1,
        } = e,
        y = (0, s.bG)([x.A], () => x.A.getGuild(f ?? A.guild_id)),
        P = (0, s.bG)([E.default], () => E.default.getUser(a)),
        j = (0, p.A)({ user: P, guildId: y?.id, context: v }),
        R = l.useMemo(() => ({ channel: A, type: "channel" }), [A]),
        [D, w] = l.useState(""),
        k = "" !== D,
        {
            commands: O,
            commandsByActiveSection: L,
            sectionDescriptors: G,
            loading: U,
        } = _.cu({
            context: R,
            filters: { text: k ? D : void 0, commandTypes: [n] },
            options: { limit: C.YC, includeFrecency: !k, scoreMethod: k ? h.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: F } = l.useMemo(() => {
            let e = {};
            return (
                G.forEach((t) => {
                    e[t.id] = t;
                }),
                { sections: e }
            );
        }, [G]),
        B = l.useRef(U);
    l.useEffect(() => {
        U !== B.current && ((B.current = U), S?.());
    }, [U, S]);
    let H = l.useCallback(
            (e, t) => {
                let { showAppIcon: n } = t;
                r()(null != A, "menu item should not show if channel is null");
                let l = F[e.applicationId],
                    s = n && null != l ? (0, m.Rg)(l) : void 0,
                    d =
                        null != s && null != l
                            ? (e) => {
                                  let { className: t } = e;
                                  return (0, i.jsx)("span", {
                                      className: t,
                                      children: (0, i.jsx)(s, {
                                          channel: A,
                                          section: l,
                                          width: 20,
                                          height: 20,
                                          selectable: !1,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, i.jsx)(
                    o.Dr,
                    {
                        id: e.id,
                        label: e.displayName,
                        iconLeft: d,
                        leadingAccessory: null != d ? { type: "icon", icon: d } : void 0,
                        trailingIndicator: { type: "icon", icon: c.l },
                        icon: c.l,
                        action: () => {
                            (0, g.A)({
                                command: e,
                                optionValues: {},
                                context: { channel: A, guild: y },
                                commandTargetId: a,
                            });
                        },
                    },
                    e.id,
                );
            },
            [A, F, y, a],
        ),
        V = l.useCallback(
            (e) => {
                let { section: t, data: n } = e;
                return (0, i.jsx)(
                    o.rX,
                    { label: N.intl.string(N.t.V0w2ap), children: n.map((e) => H(e, { showAppIcon: !0 })) },
                    t.id,
                );
            },
            [H],
        ),
        K = l.useCallback(
            (e) => {
                let { section: t, data: n } = e,
                    l = (0, m.Rg)(t),
                    a =
                        null != l
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, i.jsx)("span", {
                                      className: n,
                                      children: (0, i.jsx)(l, {
                                          channel: A,
                                          section: t,
                                          selectable: !1,
                                          width: 20,
                                          height: 20,
                                      }),
                                  });
                              }
                            : void 0;
                return (0, i.jsx)(
                    o.Dr,
                    {
                        id: t.id,
                        label: t.name,
                        iconLeft: a,
                        leadingAccessory: null != a ? { type: "icon", icon: a } : void 0,
                        children: n.map((e) => H(e, { showAppIcon: !1 })),
                    },
                    t.id,
                );
            },
            [A, H],
        ),
        Y = (0, i.jsx)(
            o.aK,
            {
                id: "command-search",
                control: (e, t) =>
                    (0, i.jsx)(d.V, { ...e, query: D, onChange: w, placeholder: N.intl.string(N.t.m1UwbP), ref: t }),
            },
            "command-search",
        );
    if (U)
        t = (0, i.jsx)(
            o.Dr,
            { id: "menu-commands-placeholder", render: () => (0, i.jsx)(b, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === O.length)
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    k && (0, i.jsxs)(i.Fragment, { children: [Y, (0, i.jsx)(o.bX, {})] }),
                    (0, i.jsx)(
                        o.Dr,
                        { id: "menu-commands-empty", label: N.intl.string(N.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (k)
            t = (0, i.jsxs)(i.Fragment, {
                children: [Y, (0, i.jsx)(o.bX, {}), O.map((e) => H(e, { showAppIcon: !0 }))],
            });
        else {
            let e = L.find((e) => {
                    let { section: t } = e;
                    return t.id === C.Ik.FRECENCY;
                }),
                n = L.filter((e) => {
                    let { section: t } = e;
                    return t.id !== C.Ik.FRECENCY;
                });
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    Y,
                    null != e && V(e),
                    (0, i.jsx)(o.rX, { label: N.intl.string(N.t.PHjkRE), children: n.map((e) => K(e)) }),
                ],
            });
        }
        null != j &&
            j.length > 0 &&
            (t = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(o.bX, {}, "separator"), j] }));
    }
    if (!I.kvI.TEXTUAL.has(A.type))
        if (null == j) return null;
        else t = j;
    return (0, i.jsx)(o.Dr, {
        id: "apps",
        label: N.intl.string(N.t.PHjkRE),
        leadingAccessory: M ? { type: "icon", icon: u.k } : void 0,
        listClassName: T.p,
        children: t,
    });
};
