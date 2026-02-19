"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(182061),
    d = n(886393),
    u = n(307623),
    h = n(660273),
    A = n(40389),
    p = n(707792),
    g = n(41402),
    m = n(271456),
    _ = n(200273),
    f = n(565846),
    x = n(707653),
    C = n(50268),
    E = n(58736),
    I = n(253932),
    b = n(977997),
    N = n(747926),
    S = n(985018);
function T(e) {
    let { channel: t } = e,
        [n, l] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        l((e) => !e);
    }
    let c = S.intl.string(S.t["UKOtz+"]);
    return (0, i.jsx)(o.YNO, {
        targetElementRef: r,
        shouldShow: n,
        animation: o.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(v, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(E.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: n ? null : c,
                icon: o.jNK,
                "aria-label": c,
                selected: n,
            });
        },
    });
}
function v(e) {
    let { channel: t, closePopout: n, onSelect: s } = e,
        l = (0, c.A)(t),
        E = (0, p.A)(t),
        T = (0, f.A)(t.id),
        v = (0, _.A)(t),
        y = (0, C.A)({ id: t.id, label: S.intl.string(S.t.DQ797g) }),
        j = (0, d.A)(t),
        R = (0, u.A)(t),
        O = (0, h.A)(t, "Toolbar Overflow"),
        L = (0, g.A)(t),
        M = (0, A.A)(t),
        D = (0, x.A)(t),
        G = (0, m.A)(t),
        U = I.SY.useSetting(),
        P = (0, a.bG)([b.A], () => !r().isEmpty(b.A.getVoiceStatesForChannel(t.id)));
    return (0, i.jsxs)(o.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": S.intl.string(S.t["1NBjqb"]),
        onSelect: s,
        children: [
            (0, i.jsxs)(o.rXV, { children: [O, M] }),
            (0, i.jsxs)(o.rXV, {
                children: [
                    v,
                    L,
                    T,
                    U && !P
                        ? (0, i.jsx)(o.Drp, {
                              id: "open",
                              label: S.intl.string(S.t.bX7EaG),
                              action: function () {
                                  (0, N.JA)(t);
                              },
                          })
                        : null,
                    G,
                ],
            }),
            (0, i.jsxs)(o.rXV, { children: [D, l, E, R] }),
            (0, i.jsxs)(o.rXV, { children: [j, y] }),
        ],
    });
}
