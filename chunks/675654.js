n.d(t, { E: () => b });
var i = n(627968),
    l = n(64700),
    s = n(280513),
    r = n(834730),
    a = n(452027),
    o = n(311907),
    d = n(289873),
    c = n(243721),
    u = n(270003),
    m = n(974544),
    g = n(416052),
    h = n(837011),
    x = n(90084),
    _ = n(351906),
    p = n(794967),
    A = n(555337),
    E = n(875331),
    f = n(545055),
    j = n(966394),
    N = n(985018),
    I = n(294229);
function C(e) {
    let { guildId: t } = e,
        { guildProfile: u, fetchGuildProfile: m, fetchStatus: _ } = (0, x.u)(t),
        C = _ !== h.X.FETCHED,
        {
            fetchedEmbed: b,
            embedEnabled: v,
            embedChannelId: S,
        } = (0, o.cf)([A.A], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = A.A.getProps();
            return { fetchedEmbed: e, embedEnabled: t, embedChannelId: n };
        }),
        T = l.useMemo(() => (0, f.k)(t), [t]),
        y = l.useMemo(() => (0, f.Z)(t), [t]),
        [R, L] = l.useState(!1),
        D = null != u && s.i.VISIBLE.has(u.visibility),
        O = !C && !D && !v;
    l.useEffect(() => {
        b || (0, p.D)(t);
    }, [b, t]),
        l.useEffect(() => {
            m();
        }, [t, m]);
    let G = l.useCallback(
        async (e) => {
            L(!0), await (0, E.E)(t, e, S), L(!1);
        },
        [S, t],
    );
    return b
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.d, { label: N.intl.string(N.t.NR6huS), checked: v, onChange: G, disabled: R }),
                  O
                      ? (0, i.jsx)(r.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: I.W$,
                            children: N.intl.string(N.t["zCGuJ+"]),
                        })
                      : null,
                  v
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(j.s, {
                                    label: N.intl.string(N.t.LUo0Q8),
                                    description: N.intl.string(N.t.LxVR9A),
                                    guildId: t,
                                    widgetEnabled: v,
                                    widgetChannelId: S,
                                    enableLocalUpdate: !0,
                                }),
                                (0, i.jsxs)("div", {
                                    className: I.cL,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: I.fi,
                                            children: (0, i.jsx)(a.D, {
                                                label: N.intl.string(N.t.TRyLUh),
                                                children: (0, i.jsx)(g.A, { value: t }),
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: I.fi,
                                            children: (0, i.jsx)(a.D, {
                                                label: N.intl.string(N.t.VECJcK),
                                                children: (0, i.jsx)(g.A, { value: T }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: I.yF }),
                                (0, i.jsxs)("div", {
                                    className: I.cL,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: I.fi,
                                            children: (0, i.jsx)(a.D, {
                                                label: N.intl.string(N.t.XVGbn1),
                                                description: N.intl.string(N.t["+baN11"]),
                                                children: (0, i.jsx)(g.A, { value: y }),
                                            }),
                                        }),
                                        (0, i.jsx)("img", {
                                            className: I.fi,
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
        : (0, i.jsx)(d.y, {});
}
function b(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([_.A], () => _.A.enabled);
    return (0, i.jsx)(u.n, {
        label: N.intl.string(N.t["qlhNb+"]),
        description: N.intl.string(N.t["dNn/1i"]),
        children: n ? (0, i.jsx)(m.A, {}) : (0, i.jsx)(C, { guildId: t }),
    });
}
