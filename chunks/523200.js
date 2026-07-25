l.d(t, { default: () => M });
var n = l(627968),
    r = l(64700),
    a = l(189213),
    i = l(691540),
    s = l(857250),
    u = l(97483),
    c = l(892547),
    o = l(821609),
    d = l(834730),
    h = l(115718),
    g = l(191248),
    C = l(223863),
    p = l(151054),
    f = l(403362),
    m = l(422258),
    x = l(668267),
    b = l(281980),
    k = l(17928),
    E = l(734057),
    D = l(576705),
    R = l(181079),
    A = l(5180),
    I = l(652215),
    S = l(335993),
    N = l(375708),
    j = l(349828),
    w = l(168277);
function M(e) {
    let { transitionState: t, onClose: l, parentId: d, source: M } = e;
    r.useEffect(() => {
        null != M && (0, x.tC)(M);
    }, [M]);
    let [_, v] = r.useState(""),
        [F, H] = r.useState([]),
        [L, y] = r.useState(!1),
        { notifyFavoriteAdded: U } = (0, b.CJ)(),
        O = (function () {
            let { hasHigherPrivileges: e } = (0, b.TW)(),
                t = (0, k.bG)([R.A], () => R.A.getFavoriteChannels());
            return r.useCallback(
                (l, n) => {
                    switch (l.type) {
                        case h.rD.USER: {
                            let e = E.A.getDMChannelFromUserId(l.record.id);
                            if (!n && null == e) return !1;
                            return null == e || null == t[e.id];
                        }
                        case h.rD.GROUP_DM:
                            return null == t[l.record.id];
                        case h.rD.TEXT_CHANNEL:
                        case h.rD.VOICE_CHANNEL:
                            return (
                                D.A.can(I.xBc.VIEW_CHANNEL, l.record) &&
                                (0, A.IF)(l.record, e) &&
                                null == t[l.record.id]
                            );
                        default:
                            return (0, f.xb)(l);
                    }
                },
                [t, e],
            );
        })(),
        { results: T, updateSearchText: Q } = (0, p.R)({
            includeMissingDMs: !0,
            channelFilter: O,
            selectedDestinations: F,
        }),
        V = F.length,
        W = V >= j.dh,
        X = r.useCallback(
            (e) => {
                v(e), Q(e);
            },
            [Q],
        ),
        q = r.useCallback((e) => {
            H((t) => {
                let l = (0, C.I)(e),
                    n = t.filter((e) => (0, C.I)(e) !== l);
                return n.length < t.length ? n : t.length >= j.dh ? t : [...t, e];
            });
        }, []),
        B = r.useCallback(async () => {
            y(!0);
            let e = (await Promise.all(F.map(C.pk))).filter(f.Vq);
            if (0 === e.length) {
                (0, i.P0)((0, s.o)(N.intl.string(N.t.R0RpRX), u.Ck.FAILURE)), y(!1);
                return;
            }
            U(), (0, m.S_)(e, d ?? null, "modal"), l();
        }, [U, l, d, F]),
        G = r.useMemo(() => T.filter((e) => e.type !== h.rD.HEADER), [T]),
        z = (0, g.s)({ rowData: G, selectedDestinations: F, handleToggleDestination: q, disableSelection: W }),
        J = r.useMemo(
            () => ({ sections: [1], sectionHeight: 0, rowHeight: 72, renderRow: () => (0, n.jsx)(P, {}) }),
            [],
        );
    return (0, n.jsx)(a.Modal, {
        title: N.intl.string(S.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, n.jsx)(c.I, {
            query: _,
            onChange: X,
            onClear: () => X(""),
            placeholder: N.intl.string(N.t["5h0QOP"]),
            "aria-label": N.intl.string(N.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, n.jsx)("div", {
            className: w.c,
            children: (0, n.jsx)(o.$, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text:
                    V >= 2
                        ? N.intl.formatToPlainString(S.default.LbCa8x, { count: V })
                        : N.intl.string(S.default.xKXcSu),
                onClick: B,
                disabled: 0 === V,
                loading: L,
            }),
        }),
        listProps: 0 === G.length ? J : z,
    });
}
function P() {
    return (0, n.jsx)("div", {
        className: w.p,
        children: (0, n.jsx)(d.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: N.intl.string(S.default.kQL9be),
        }),
    });
}
