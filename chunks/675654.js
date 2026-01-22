n.d(t, { E: () => v }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(280513),
    s = n(158954),
    a = n(311907),
    c = n(397927),
    o = n(974544),
    d = n(416052),
    u = n(837011),
    f = n(90084),
    g = n(351906),
    b = n(794967),
    m = n(555337),
    p = n(875331),
    x = n(545055),
    h = n(966394),
    j = n(985018),
    O = n(93100);
function y(e) {
    let { guildId: t } = e,
        { guildProfile: o, fetchGuildProfile: g, fetchStatus: y } = (0, f.u)(t),
        v = y !== u.X.FETCHED,
        {
            fetchedEmbed: A,
            embedEnabled: E,
            embedChannelId: N,
        } = (0, a.cf)([m.A], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = m.A.getProps();
            return {
                fetchedEmbed: e,
                embedEnabled: t,
                embedChannelId: n,
            };
        }),
        _ = i.useMemo(() => (0, x.k)(t), [t]),
        S = i.useMemo(() => (0, x.Z)(t), [t]),
        [T, I] = i.useState(!1),
        C = null != o && l.i.VISIBLE.has(o.visibility),
        P = !v && !C && !E;
    i.useEffect(() => {
        A || (0, b.D)(t);
    }, [A, t]),
        i.useEffect(() => {
            g();
        }, [t, g]);
    let w = i.useCallback(
        async (e) => {
            I(!0), await (0, p.E)(t, e, N), I(!1);
        },
        [N, t],
    );
    return A
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.dOG, {
                      label: j.intl.string(j.t.NR6huS),
                      checked: E,
                      onChange: w,
                      disabled: T,
                  }),
                  P
                      ? (0, r.jsx)(s.EYj, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: O.W$,
                            children: j.intl.string(j.t["zCGuJ+"]),
                        })
                      : null,
                  E
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.s, {
                                    label: j.intl.string(j.t.LUo0Q8),
                                    description: j.intl.string(j.t.LxVR9A),
                                    guildId: t,
                                    widgetEnabled: E,
                                    widgetChannelId: N,
                                    enableLocalUpdate: !0,
                                }),
                                (0, r.jsxs)("div", {
                                    className: O.cL,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: O.fi,
                                            children: (0, r.jsx)(s.D0$, {
                                                label: j.intl.string(j.t.TRyLUh),
                                                children: (0, r.jsx)(d.A, { value: t }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: O.fi,
                                            children: (0, r.jsx)(s.D0$, {
                                                label: j.intl.string(j.t.VECJcK),
                                                children: (0, r.jsx)(d.A, { value: _ }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: O.yF }),
                                (0, r.jsxs)("div", {
                                    className: O.cL,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: O.fi,
                                            children: (0, r.jsx)(s.D0$, {
                                                label: j.intl.string(j.t.XVGbn1),
                                                description: j.intl.string(j.t["+baN11"]),
                                                children: (0, r.jsx)(d.A, { value: S }),
                                            }),
                                        }),
                                        (0, r.jsx)("img", {
                                            className: O.fi,
                                            "data-accessibility": "desaturate",
                                            alt: "",
                                            src: n(224932),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, r.jsx)(c.y$y, {});
}
function v(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([g.A], () => g.A.enabled);
    return (0, r.jsx)(c.nVY, {
        label: j.intl.string(j.t["qlhNb+"]),
        description: j.intl.string(j.t["dNn/1i"]),
        children: n ? (0, r.jsx)(o.A, {}) : (0, r.jsx)(y, { guildId: t }),
    });
}
