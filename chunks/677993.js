l.d(e, { default: () => P });
var a = l(477900),
    n = l(582128),
    i = l(837381),
    r = l(189213),
    s = l(765178),
    u = l(858899),
    o = l(683438),
    c = l(821609),
    d = l(834730),
    f = l(928039),
    h = l(662090),
    p = l(61916),
    g = l(223863),
    m = l(151054),
    x = l(403362),
    k = l(146092),
    S = l(129230),
    b = l(652215),
    C = l(462617),
    j = l(708526),
    v = l(792996);
l(349828);
var D = l(548654);
function P(t) {
    let { transitionState: e, onClose: l, parentId: d, source: P } = t;
    n.useEffect(() => {
        S.default.track(b.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: P });
    }, [P]);
    let [I, w] = n.useState(""),
        [A, E] = n.useState([]),
        [_, O] = n.useState(!1),
        y = (0, C.A)(),
        { results: M, updateSearchText: N } = (0, m.R)({
            includeMissingDMs: !0,
            channelFilter: y,
            selectedDestinations: A,
        }),
        H = A.length,
        L = H >= 20,
        F = n.useCallback(
            (t) => {
                (w(t), N(t));
            },
            [N],
        ),
        Q = n.useCallback(
            (t, e) => {
                let l = (0, g.I)(t),
                    a = !A.some((t) => (0, g.I)(t) === l);
                (a && L) ||
                    (null != e &&
                        s.O.announce(
                            v.intl.formatToPlainString(a ? j.default.mvPjcC : j.default.SgkNaU, {
                                name: e,
                                count: a ? H + 1 : H - 1,
                            }),
                            "polite",
                        ),
                    E(a ? [...A, t] : A.filter((t) => (0, g.I)(t) !== l)));
            },
            [H, A, L],
        ),
        T = n.useCallback(async () => {
            O(!0);
            let t = (await Promise.all(A.map(g.pk))).filter(x.Vq);
            if (0 === t.length) {
                ((0, u.P0)({ text: v.intl.string(v.t.R0RpRX), variant: "critical" }), O(!1));
                return;
            }
            ((0, k.S_)({ channelIds: t, parentId: d ?? null, source: "modal" }), l());
        }, [l, d, A]),
        U = n.useMemo(() => M.filter((t) => t.type !== h.rD.HEADER), [M]),
        q = (0, p.s)({ rowData: U, selectedDestinations: A, handleToggleDestination: Q, disableSelection: L }),
        V = n.useRef(null),
        X = (0, f.A)("favorites-add-channel-modal", V),
        z = n.useMemo(
            () => ({ sections: [1], sectionHeight: 0, rowHeight: 72, renderRow: () => (0, a.jsx)(R, {}) }),
            [],
        );
    return (0, a.jsx)(i.hD, {
        navigator: X,
        children: (0, a.jsx)(i.PR, {
            children: (t) => {
                let { ref: n, ...i } = t;
                return (0, a.jsx)(r.a, {
                    title: v.intl.string(j.default.Rp35U1),
                    actions: [],
                    transitionState: e,
                    onClose: l,
                    input: (0, a.jsx)(o.I, {
                        query: I,
                        onChange: F,
                        onClear: () => F(""),
                        placeholder: v.intl.string(v.t["5h0QOP"]),
                        "aria-label": v.intl.string(v.t["5h0QOP"]),
                        autoFocus: !0,
                    }),
                    actionBarInput: (0, a.jsx)("div", {
                        className: D.c,
                        children: (0, a.jsx)(c.$, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text:
                                H >= 2
                                    ? v.intl.formatToPlainString(j.default.LbCa8x, { count: H })
                                    : v.intl.string(j.default.xKXcSu),
                            onClick: T,
                            disabled: 0 === H,
                            loading: _,
                        }),
                    }),
                    listProps: {
                        ...(0 === U.length ? z : q),
                        ...i,
                        ref: (t) => {
                            ((V.current = t), (n.current = t?.getScrollerNode() ?? null));
                        },
                    },
                });
            },
        }),
    });
}
function R() {
    return (0, a.jsx)("div", {
        className: D.p,
        children: (0, a.jsx)(d.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: v.intl.string(j.default.kQL9be),
        }),
    });
}
