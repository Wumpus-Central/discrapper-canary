n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(182061),
    d = n(886393),
    u = n(307623),
    h = n(660273),
    A = n(40389),
    _ = n(707792),
    m = n(41402),
    g = n(271456),
    p = n(200273),
    f = n(565846),
    x = n(707653),
    E = n(50268),
    I = n(58736),
    C = n(253932),
    N = n(977997),
    T = n(747926),
    S = n(985018);
function b(e) {
    let { channel: t } = e,
        [n, s] = l.useState(!1),
        a = l.useRef(null);
    function r() {
        s((e) => !e);
    }
    let c = S.intl.string(S.t["UKOtz+"]);
    return (0, i.jsx)(o.YNO, {
        targetElementRef: a,
        shouldShow: n,
        animation: o.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => s(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(y, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(I.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: n ? null : c,
                icon: o.jNK,
                "aria-label": c,
                selected: n,
            });
        },
    });
}
function y(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        s = (0, c.A)(t),
        I = (0, _.A)(t),
        b = (0, f.A)(t.id),
        y = (0, p.A)(t),
        v = (0, E.A)({ id: t.id, label: S.intl.string(S.t.DQ797g) }),
        j = (0, d.A)(t),
        R = (0, u.A)(t),
        O = (0, h.A)(t, "Toolbar Overflow"),
        L = (0, m.A)(t),
        M = (0, A.A)(t),
        D = (0, x.A)(t),
        U = (0, g.A)(t),
        G = C.SY.useSetting(),
        P = (0, r.bG)([N.A], () => !a().isEmpty(N.A.getVoiceStatesForChannel(t.id)));
    return (0, i.jsxs)(o.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": S.intl.string(S.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(o.rXV, { children: [O, M] }),
            (0, i.jsxs)(o.rXV, {
                children: [
                    y,
                    L,
                    b,
                    G && !P
                        ? (0, i.jsx)(o.Drp, {
                              id: "open",
                              label: S.intl.string(S.t.bX7EaG),
                              action: function () {
                                  (0, T.JA)(t);
                              },
                          })
                        : null,
                    U,
                ],
            }),
            (0, i.jsxs)(o.rXV, { children: [D, s, I, R] }),
            (0, i.jsxs)(o.rXV, { children: [j, v] }),
        ],
    });
}
