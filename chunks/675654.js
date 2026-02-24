"use strict";
n.d(t, { E: () => E });
var i = n(627968),
    s = n(64700),
    l = n(280513),
    r = n(158954),
    a = n(311907),
    o = n(397927),
    d = n(974544),
    c = n(416052),
    u = n(837011),
    m = n(90084),
    g = n(351906),
    x = n(794967),
    h = n(555337),
    _ = n(875331),
    A = n(545055),
    p = n(966394),
    f = n(985018),
    j = n(603478);
function N(e) {
    let { guildId: t } = e,
        { guildProfile: d, fetchGuildProfile: g, fetchStatus: N } = (0, m.u)(t),
        E = N !== u.X.FETCHED,
        {
            fetchedEmbed: b,
            embedEnabled: T,
            embedChannelId: C,
        } = (0, a.cf)([h.A], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = h.A.getProps();
            return { fetchedEmbed: e, embedEnabled: t, embedChannelId: n };
        }),
        I = s.useMemo(() => (0, A.k)(t), [t]),
        v = s.useMemo(() => (0, A.Z)(t), [t]),
        [S, y] = s.useState(!1),
        R = null != d && l.i.VISIBLE.has(d.visibility),
        O = !E && !R && !T;
    s.useEffect(() => {
        b || (0, x.D)(t);
    }, [b, t]),
        s.useEffect(() => {
            g();
        }, [t, g]);
    let G = s.useCallback(
        async (e) => {
            y(!0), await (0, _.E)(t, e, C), y(!1);
        },
        [C, t],
    );
    return b
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.dOG, { label: f.intl.string(f.t.NR6huS), checked: T, onChange: G, disabled: S }),
                  O
                      ? (0, i.jsx)(r.EYj, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: j.W$,
                            children: f.intl.string(f.t["zCGuJ+"]),
                        })
                      : null,
                  T
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.s, {
                                    label: f.intl.string(f.t.LUo0Q8),
                                    description: f.intl.string(f.t.LxVR9A),
                                    guildId: t,
                                    widgetEnabled: T,
                                    widgetChannelId: C,
                                    enableLocalUpdate: !0,
                                }),
                                (0, i.jsxs)("div", {
                                    className: j.cL,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: j.fi,
                                            children: (0, i.jsx)(r.D0$, {
                                                label: f.intl.string(f.t.TRyLUh),
                                                children: (0, i.jsx)(c.A, { value: t }),
                                            }),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: j.fi,
                                            children: (0, i.jsx)(r.D0$, {
                                                label: f.intl.string(f.t.VECJcK),
                                                children: (0, i.jsx)(c.A, { value: I }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: j.yF }),
                                (0, i.jsxs)("div", {
                                    className: j.cL,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: j.fi,
                                            children: (0, i.jsx)(r.D0$, {
                                                label: f.intl.string(f.t.XVGbn1),
                                                description: f.intl.string(f.t["+baN11"]),
                                                children: (0, i.jsx)(c.A, { value: v }),
                                            }),
                                        }),
                                        (0, i.jsx)("img", {
                                            className: j.fi,
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
        : (0, i.jsx)(o.y$y, {});
}
function E(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([g.A], () => g.A.enabled);
    return (0, i.jsx)(o.nVY, {
        label: f.intl.string(f.t["qlhNb+"]),
        description: f.intl.string(f.t["dNn/1i"]),
        children: n ? (0, i.jsx)(d.A, {}) : (0, i.jsx)(N, { guildId: t }),
    });
}
