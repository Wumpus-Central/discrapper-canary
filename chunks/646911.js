l.d(n, { A: () => w });
var t = l(477900),
    i = l(582128),
    s = l(284009),
    a = l.n(s),
    r = l(17928),
    c = l(477782),
    d = l(559647),
    o = l(583650),
    u = l(323384),
    h = l(842209),
    m = l(210978),
    p = l(545152),
    g = l(664929),
    x = l(700210),
    j = l(863610),
    b = l(413692);
let f = function () {
    return (0, t.jsx)("div", { className: b._, children: (0, t.jsx)(j.n, { dotRadius: 4, themed: !0 }) });
};
var y = l(71393),
    A = l(287809),
    C = l(652215),
    k = l(73510),
    I = l(375708),
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
        F = (0, r.bG)([y.A], () => y.A.getGuild(b ?? j.guild_id)),
        M = (0, r.bG)([A.default], () => A.default.getUser(s)),
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
            options: { limit: k.YC, includeFrecency: !P, scoreMethod: P ? m.M.COMMAND_OR_APPLICATION : void 0 },
            allowFetch: !0,
        }),
        { sections: Y } = i.useMemo(() => {
            let e = {};
            return (
                S.forEach((n) => {
                    e[n.id] = n;
                }),
                { sections: e }
            );
        }, [S]),
        G = i.useRef(V);
    i.useEffect(() => {
        V !== G.current && ((G.current = V), w?.());
    }, [V, w]);
    let O = i.useCallback(
            (e, n) => {
                let { showAppIcon: l } = n;
                a()(null != j, "menu item should not show if channel is null");
                let i = Y[e.applicationId],
                    r = l && null != i ? (0, g.Rg)(i) : void 0,
                    o =
                        null != r && null != i
                            ? (e) => {
                                  let { className: n } = e;
                                  return (0, t.jsx)("span", {
                                      className: n,
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
                        trailingIndicator: { type: "icon", icon: d.SendMessageIcon },
                        icon: d.SendMessageIcon,
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
            [j, Y, F, s],
        ),
        U = i.useCallback(
            (e) => {
                let { section: n, data: l } = e;
                return (0, t.jsx)(
                    c.rX,
                    { label: I.intl.string(I.t.V0w2ap), children: l.map((e) => O(e, { showAppIcon: !0 })) },
                    n.id,
                );
            },
            [O],
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
                    c.Dr,
                    {
                        id: n.id,
                        label: n.name,
                        iconLeft: s,
                        leadingAccessory: null != s ? { type: "icon", icon: s } : void 0,
                        children: l.map((e) => O(e, { showAppIcon: !1 })),
                    },
                    n.id,
                );
            },
            [j, O],
        ),
        q = (0, t.jsx)(
            c.aK,
            {
                id: "command-search",
                control: (e, n) =>
                    (0, t.jsx)(o.V, { ...e, query: X, onChange: _, placeholder: I.intl.string(I.t.m1UwbP), ref: n }),
            },
            "command-search",
        );
    if (V)
        n = (0, t.jsx)(
            c.Dr,
            { id: "menu-commands-placeholder", render: () => (0, t.jsx)(f, {}), disabled: !0 },
            "menu-commands-placeholder",
        );
    else {
        if (0 === T.length)
            n = (0, t.jsxs)(t.Fragment, {
                children: [
                    P && (0, t.jsxs)(t.Fragment, { children: [q, (0, t.jsx)(c.bX, {})] }),
                    (0, t.jsx)(
                        c.Dr,
                        { id: "menu-commands-empty", label: I.intl.string(I.t.YSNlV2), disabled: !0 },
                        "menu-commands-empty",
                    ),
                ],
            });
        else if (P)
            n = (0, t.jsxs)(t.Fragment, {
                children: [q, (0, t.jsx)(c.bX, {}), T.map((e) => O(e, { showAppIcon: !0 }))],
            });
        else {
            let e = L.find((e) => {
                    let { section: n } = e;
                    return n.id === k.Ik.FRECENCY;
                }),
                l = L.filter((e) => {
                    let { section: n } = e;
                    return n.id !== k.Ik.FRECENCY;
                });
            n = (0, t.jsxs)(t.Fragment, {
                children: [
                    q,
                    null != e && U(e),
                    (0, t.jsx)(c.rX, { label: I.intl.string(I.t.PHjkRE), children: l.map((e) => H(e)) }),
                ],
            });
        }
        null != R &&
            R.length > 0 &&
            (n = (0, t.jsxs)(t.Fragment, { children: [n, (0, t.jsx)(c.bX, {}, "separator"), R] }));
    }
    if (!C.kvI.TEXTUAL.has(j.type))
        if (null == R || !(R.length > 0)) return null;
        else n = R;
    return j.isMediaThread()
        ? null
        : (0, t.jsx)(c.Dr, {
              id: "apps",
              label: I.intl.string(I.t.PHjkRE),
              leadingAccessory: E ? { type: "icon", icon: u.k } : void 0,
              listClassName: v.p,
              children: n,
          });
};
