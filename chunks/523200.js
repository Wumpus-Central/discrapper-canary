l.d(t, { default: () => R }), l(321073);
var n = l(627968),
    r = l(64700),
    i = l(189213),
    s = l(17928),
    u = l(892547),
    a = l(821609),
    d = l(834730),
    c = l(778712),
    o = l(966327),
    h = l(115718),
    g = l(47167),
    p = l(359378),
    C = l(598104),
    f = l(255266),
    x = l(223863),
    A = l(151054),
    E = l(734057),
    _ = l(71393),
    b = l(287809),
    D = l(422258),
    m = l(668267),
    S = l(281980),
    j = l(576705),
    M = l(403362),
    N = l(181079),
    I = l(5180),
    k = l(652215),
    y = l(335993),
    H = l(375708),
    w = l(349828),
    L = l(168277);
function R(e) {
    let { transitionState: t, onClose: l, parentId: d, source: c } = e;
    r.useEffect(() => {
        null != c && (0, m.tC)(c);
    }, [c]);
    let [o, g] = r.useState(""),
        [p, C] = r.useState(() => new Set()),
        { notifyFavoriteAdded: f } = (0, S.CJ)(),
        x = (function () {
            let { hasHigherPrivileges: e } = (0, S.TW)(),
                t = (0, s.bG)([N.A], () => N.A.getFavoriteChannels());
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
                                j.A.can(k.xBc.VIEW_CHANNEL, l.record) &&
                                (0, I.IF)(l.record, e) &&
                                null == t[l.record.id]
                            );
                        default:
                            return (0, M.xb)(l);
                    }
                },
                [t, e],
            );
        })(),
        { results: _, updateSearchText: b } = (0, A.R)({ includeMissingDMs: !0, channelFilter: x }),
        R = p.size,
        T = R >= w.dh,
        U = r.useCallback(
            (e) => {
                g(e), b(e);
            },
            [b],
        ),
        v = r.useCallback((e) => {
            C((t) => {
                let l = new Set(t);
                return l.delete(e) ? l : t.size >= w.dh ? t : l.add(e);
            });
        }, []),
        O = r.useCallback(() => {
            p.size > 0 && (f(), (0, D.S_)([...p], d ?? null, "modal")), l();
        }, [f, l, d, p]),
        F = r.useMemo(() => {
            let e = [];
            for (let t of _) t.type !== h.rD.HEADER && null != G(t) && e.push(t);
            return e;
        }, [_]),
        Q = r.useMemo(
            () =>
                0 === F.length
                    ? { sections: [1], sectionHeight: 0, renderRow: () => (0, n.jsx)(z, {}), rowHeight: 72 }
                    : {
                          sections: [F.length],
                          sectionHeight: 0,
                          rowHeight: 48,
                          renderRow: (e) => {
                              let { section: t, row: l } = e;
                              if (t > 0) return null;
                              let r = F[l];
                              if (null == r) return null;
                              let i = G(r);
                              return null == i
                                  ? null
                                  : (0, n.jsx)(
                                        P,
                                        {
                                            channel: i,
                                            selected: p.has(i.id),
                                            disabled: T && !p.has(i.id),
                                            onToggleChannel: v,
                                        },
                                        i.id,
                                    );
                          },
                      },
            [F, v, p, T],
        );
    return (0, n.jsx)(i.Modal, {
        title: H.intl.string(y.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, n.jsx)(u.I, {
            query: o,
            onChange: U,
            onClear: () => U(""),
            placeholder: H.intl.string(H.t["5h0QOP"]),
            "aria-label": H.intl.string(H.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, n.jsx)("div", {
            className: L.c,
            children: (0, n.jsx)(a.$, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text:
                    R >= 2
                        ? H.intl.formatToPlainString(y.default.LbCa8x, { count: R })
                        : H.intl.string(y.default.xKXcSu),
                onClick: O,
                disabled: 0 === R,
            }),
        }),
        listProps: Q,
    });
}
function z() {
    return (0, n.jsx)("div", {
        className: L.p,
        children: (0, n.jsx)(d.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: H.intl.string(y.default.kQL9be),
        }),
    });
}
function G(e) {
    if (e.type === h.rD.USER) {
        let t = (0, x._g)({ type: "user", id: e.record.id });
        return null != t ? (E.A.getChannel(t) ?? null) : null;
    }
    return e.type === h.rD.TEXT_CHANNEL || e.type === h.rD.VOICE_CHANNEL || e.type === h.rD.GROUP_DM ? e.record : null;
}
function P(e) {
    let { channel: t, selected: l, disabled: r, onToggleChannel: i } = e,
        u = (0, s.bG)([_.A], () => _.A.getGuild(t.guild_id), [t.guild_id]),
        a = (0, g.Ay)(t),
        d = (0, s.bG)([b.default], () => (t.isDM() ? b.default.getUser(t.recipients?.[0]) : null), [t]);
    return (0, n.jsx)(p.A, {
        listItemId: t.id,
        icon:
            t.isDM() && null != d
                ? (0, n.jsx)(o.A, { "aria-hidden": !0, size: c._3.SIZE_32, user: d })
                : t.isGroupDM()
                  ? (0, n.jsx)(C.A, { "aria-hidden": !0, size: c._3.SIZE_32, channel: t })
                  : (0, n.jsx)(f.A, { size: f.q.SMALL_32, guild: u, channel: t }),
        label: a,
        selected: l,
        disabled: r,
        onPress: () => i(t.id),
    });
}
