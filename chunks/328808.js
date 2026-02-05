n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(182061),
    c = n(886393),
    u = n(307623),
    h = n(660273),
    A = n(40389),
    g = n(707792),
    m = n(41402),
    p = n(271456),
    _ = n(200273),
    x = n(565846),
    f = n(707653),
    E = n(50268),
    C = n(58736),
    I = n(253932),
    S = n(977997),
    b = n(747926),
    N = n(985018);
function T(e) {
    let { channel: t } = e,
        [n, s] = l.useState(!1),
        a = l.useRef(null);
    function r() {
        s((e) => !e);
    }
    let d = N.intl.string(N.t["UKOtz+"]);
    return (0, i.jsx)(o.YNO, {
        targetElementRef: a,
        shouldShow: n,
        animation: o.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => s(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(j, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(C.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: n ? null : d,
                icon: o.jNK,
                "aria-label": d,
                selected: n,
            });
        },
    });
}
function j(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        s = (0, d.A)(t),
        C = (0, g.A)(t),
        T = (0, x.A)(t.id),
        j = (0, _.A)(t),
        v = (0, E.A)({ id: t.id, label: N.intl.string(N.t.DQ797g) }),
        y = (0, c.A)(t),
        R = (0, u.A)(t),
        O = (0, h.A)(t, "Toolbar Overflow"),
        L = (0, m.A)(t),
        D = (0, A.A)(t),
        M = (0, f.A)(t),
        G = (0, p.A)(t),
        U = I.SY.useSetting(),
        P = (0, r.bG)([S.A], () => !a().isEmpty(S.A.getVoiceStatesForChannel(t.id)));
    return (0, i.jsxs)(o.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": N.intl.string(N.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(o.rXV, { children: [O, D] }),
            (0, i.jsxs)(o.rXV, {
                children: [
                    j,
                    L,
                    T,
                    U && !P
                        ? (0, i.jsx)(o.Drp, {
                              id: "open",
                              label: N.intl.string(N.t.bX7EaG),
                              action: function () {
                                  (0, b.JA)(t);
                              },
                          })
                        : null,
                    G,
                ],
            }),
            (0, i.jsxs)(o.rXV, { children: [M, s, C, R] }),
            (0, i.jsxs)(o.rXV, { children: [y, v] }),
        ],
    });
}
