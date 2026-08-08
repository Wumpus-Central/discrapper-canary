l.d(t, { default: () => M });
var r = l(477900),
    n = l(582128),
    a = l(189213),
    i = l(691540),
    s = l(857250),
    u = l(97483),
    c = l(892547),
    o = l(821609),
    d = l(834730),
    h = l(115718),
    g = l(61916),
    p = l(223863),
    f = l(151054),
    C = l(403362),
    D = l(422258),
    E = l(174459),
    m = l(652215),
    x = l(17928),
    A = l(734057),
    b = l(576705),
    k = l(181079),
    I = l(93055),
    R = l(5180),
    _ = l(449817),
    S = l(375708),
    N = l(606660),
    w = l(349828),
    L = l(221313);
function M(e) {
    let { transitionState: t, onClose: l, parentId: d, source: M } = e;
    n.useEffect(() => {
        E.default.track(m.HAw.FAVORITES_GUILD_ADD_MODAL_OPENED, { source: M });
    }, [M]);
    let [j, F] = n.useState(""),
        [H, O] = n.useState([]),
        [v, U] = n.useState(!1),
        y = (function () {
            let { hasHigherPrivileges: e } = (0, I.TW)(),
                t = (0, x.bG)([k.A], () => k.A.getFavoriteChannels());
            return n.useCallback(
                (l, r) => {
                    switch (l.type) {
                        case h.rD.USER: {
                            let e = A.A.getDMChannelFromUserId(l.record.id);
                            if (!r && null == e) return !1;
                            return null == e || null == t[e.id];
                        }
                        case h.rD.GROUP_DM:
                            return null == t[l.record.id];
                        case h.rD.TEXT_CHANNEL:
                        case h.rD.VOICE_CHANNEL:
                            return (
                                b.A.can(m.xBc.VIEW_CHANNEL, l.record) &&
                                (0, R.IF)(l.record, e) &&
                                null == t[l.record.id]
                            );
                        default:
                            return (0, C.xb)(l);
                    }
                },
                [t, e],
            );
        })(),
        { results: T, updateSearchText: V } = (0, f.R)({
            includeMissingDMs: !0,
            channelFilter: y,
            selectedDestinations: H,
        }),
        G = H.length,
        Q = G >= w.dh,
        W = n.useCallback(
            (e) => {
                F(e), V(e);
            },
            [V],
        ),
        X = n.useCallback((e) => {
            O((t) => {
                let l = (0, p.I)(e),
                    r = t.filter((e) => (0, p.I)(e) !== l);
                return r.length < t.length ? r : t.length >= w.dh ? t : [...t, e];
            });
        }, []),
        q = n.useCallback(async () => {
            U(!0);
            let e = (await Promise.all(H.map(p.pk))).filter(C.Vq);
            if (0 === e.length) {
                (0, i.P0)((0, s.o)(S.intl.string(S.t.R0RpRX), u.Ck.FAILURE)), U(!1);
                return;
            }
            (0, N.A)(), (0, D.S_)({ channelIds: e, parentId: d ?? null, source: "modal" }), l();
        }, [l, d, H]),
        B = n.useMemo(() => T.filter((e) => e.type !== h.rD.HEADER), [T]),
        z = (0, g.s)({ rowData: B, selectedDestinations: H, handleToggleDestination: X, disableSelection: Q }),
        K = n.useMemo(
            () => ({ sections: [1], sectionHeight: 0, rowHeight: 72, renderRow: () => (0, r.jsx)(P, {}) }),
            [],
        );
    return (0, r.jsx)(a.Modal, {
        title: S.intl.string(_.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, r.jsx)(c.I, {
            query: j,
            onChange: W,
            onClear: () => W(""),
            placeholder: S.intl.string(S.t["5h0QOP"]),
            "aria-label": S.intl.string(S.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, r.jsx)("div", {
            className: L.c,
            children: (0, r.jsx)(o.$, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text:
                    G >= 2
                        ? S.intl.formatToPlainString(_.default.LbCa8x, { count: G })
                        : S.intl.string(_.default.xKXcSu),
                onClick: q,
                disabled: 0 === G,
                loading: v,
            }),
        }),
        listProps: 0 === B.length ? K : z,
    });
}
function P() {
    return (0, r.jsx)("div", {
        className: L.p,
        children: (0, r.jsx)(d.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: S.intl.string(_.default.kQL9be),
        }),
    });
}
