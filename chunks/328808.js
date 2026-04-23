n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(265872),
    d = n(365199),
    c = n(861672),
    u = n(477782),
    h = n(182061),
    A = n(886393),
    _ = n(307623),
    m = n(660273),
    g = n(40389),
    p = n(707792),
    f = n(41402),
    E = n(271456),
    x = n(200273),
    I = n(565846),
    C = n(707653),
    b = n(50268),
    N = n(58736),
    S = n(253932),
    v = n(977997),
    T = n(747926),
    y = n(985018);
function j(e) {
    let { channel: t } = e,
        [n, s] = l.useState(!1),
        a = l.useRef(null);
    function r() {
        s((e) => !e);
    }
    let c = y.intl.string(y.t["UKOtz+"]);
    return (0, i.jsx)(o.Y, {
        targetElementRef: a,
        shouldShow: n,
        animation: o.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => s(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(R, { ...e, channel: t });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(N.Ay.Icon, {
                ...e,
                ref: a,
                onClick: r,
                tooltip: n ? null : c,
                icon: d.j,
                "aria-label": c,
                selected: n,
            });
        },
    });
}
function R(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        s = (0, h.A)(t),
        o = (0, p.A)(t),
        d = (0, I.A)(t.id),
        N = (0, x.A)(t),
        j = (0, b.A)({ id: t.id, label: y.intl.string(y.t.DQ797g) }),
        R = (0, A.A)(t),
        L = (0, _.A)(t),
        O = (0, m.A)(t, "Toolbar Overflow"),
        G = (0, f.A)(t),
        M = (0, g.A)(t),
        D = (0, C.A)(t),
        U = (0, E.A)(t),
        P = S.SY.useSetting(),
        w = (0, r.bG)([v.A], () => !a().isEmpty(v.A.getVoiceStatesForChannel(t.id)));
    return (0, i.jsxs)(c.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": y.intl.string(y.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, i.jsxs)(u.rX, { children: [O, M] }),
            (0, i.jsxs)(u.rX, {
                children: [
                    N,
                    G,
                    d,
                    P && !w
                        ? (0, i.jsx)(u.Dr, {
                              id: "open",
                              label: y.intl.string(y.t.bX7EaG),
                              action: function () {
                                  (0, T.JA)(t);
                              },
                          })
                        : null,
                    U,
                ],
            }),
            (0, i.jsxs)(u.rX, { children: [D, s, o, L] }),
            (0, i.jsxs)(u.rX, { children: [R, j] }),
        ],
    });
}
