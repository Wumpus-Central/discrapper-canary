l.d(t, { default: () => P });
var n = l(477900),
    r = l(582128),
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
    C = l(151054),
    f = l(403362),
    m = l(422258),
    x = l(668267),
    b = l(17928),
    k = l(734057),
    E = l(576705),
    A = l(181079),
    D = l(93055),
    R = l(5180),
    I = l(652215),
    S = l(449817),
    N = l(375708),
    j = l(606660),
    w = l(349828),
    M = l(168277);
function P(e) {
    let { transitionState: t, onClose: l, parentId: d, source: P } = e;
    r.useEffect(() => {
        null != P && (0, x.tC)(P);
    }, [P]);
    let [v, F] = r.useState(""),
        [H, L] = r.useState([]),
        [y, U] = r.useState(!1),
        O = (function () {
            let { hasHigherPrivileges: e } = (0, D.TW)(),
                t = (0, b.bG)([A.A], () => A.A.getFavoriteChannels());
            return r.useCallback(
                (l, n) => {
                    switch (l.type) {
                        case h.rD.USER: {
                            let e = k.A.getDMChannelFromUserId(l.record.id);
                            if (!n && null == e) return !1;
                            return null == e || null == t[e.id];
                        }
                        case h.rD.GROUP_DM:
                            return null == t[l.record.id];
                        case h.rD.TEXT_CHANNEL:
                        case h.rD.VOICE_CHANNEL:
                            return (
                                E.A.can(I.xBc.VIEW_CHANNEL, l.record) &&
                                (0, R.IF)(l.record, e) &&
                                null == t[l.record.id]
                            );
                        default:
                            return (0, f.xb)(l);
                    }
                },
                [t, e],
            );
        })(),
        { results: T, updateSearchText: Q } = (0, C.R)({
            includeMissingDMs: !0,
            channelFilter: O,
            selectedDestinations: H,
        }),
        V = H.length,
        W = V >= w.dh,
        X = r.useCallback(
            (e) => {
                F(e), Q(e);
            },
            [Q],
        ),
        q = r.useCallback((e) => {
            L((t) => {
                let l = (0, p.I)(e),
                    n = t.filter((e) => (0, p.I)(e) !== l);
                return n.length < t.length ? n : t.length >= w.dh ? t : [...t, e];
            });
        }, []),
        B = r.useCallback(async () => {
            U(!0);
            let e = (await Promise.all(H.map(p.pk))).filter(f.Vq);
            if (0 === e.length) {
                (0, i.P0)((0, s.o)(N.intl.string(N.t.R0RpRX), u.Ck.FAILURE)), U(!1);
                return;
            }
            (0, j.A)(), (0, m.S_)(e, d ?? null, "modal"), l();
        }, [l, d, H]),
        G = r.useMemo(() => T.filter((e) => e.type !== h.rD.HEADER), [T]),
        z = (0, g.s)({ rowData: G, selectedDestinations: H, handleToggleDestination: q, disableSelection: W }),
        K = r.useMemo(
            () => ({ sections: [1], sectionHeight: 0, rowHeight: 72, renderRow: () => (0, n.jsx)(_, {}) }),
            [],
        );
    return (0, n.jsx)(a.Modal, {
        title: N.intl.string(S.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, n.jsx)(c.I, {
            query: v,
            onChange: X,
            onClear: () => X(""),
            placeholder: N.intl.string(N.t["5h0QOP"]),
            "aria-label": N.intl.string(N.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, n.jsx)("div", {
            className: M.c,
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
                loading: y,
            }),
        }),
        listProps: 0 === G.length ? K : z,
    });
}
function _() {
    return (0, n.jsx)("div", {
        className: M.p,
        children: (0, n.jsx)(d.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: N.intl.string(S.default.kQL9be),
        }),
    });
}
