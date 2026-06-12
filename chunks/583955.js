n.d(t, { CustomThemesShareModalWrapper: () => J });
var a = n(627968),
    l = n(64700),
    r = n(353640),
    s = n(478437),
    i = n(17928),
    o = n(320095),
    u = n(963852),
    c = n(363195),
    d = n(95701),
    h = n(174459),
    f = n(467135),
    C = n(335542),
    g = n(457417),
    p = n(189213),
    m = n(837381),
    M = n(475825),
    b = n(928039),
    E = n(61916);
function x(e) {
    let {
            rowData: t,
            message: n,
            originChannel: r,
            selectedDestinations: s,
            handleToggleDestination: i,
            disableSelection: o,
            rowClassName: u,
            ...c
        } = e,
        {
            sections: d,
            sectionHeight: h,
            renderRow: f,
            rowHeight: C,
        } = (0, E.s)({
            rowData: t,
            message: n,
            originChannel: r,
            selectedDestinations: s,
            handleToggleDestination: i,
            disableSelection: o,
            rowClassName: u,
        }),
        g = l.useRef(null),
        p = (0, b.A)("forward-modal", g);
    return (0, a.jsx)(m.hD, {
        navigator: p,
        children: (0, a.jsx)(m.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsx)(M.OZ, {
                    ref: (e) => {
                        (g.current = e), (t.current = e?.getScrollerNode() ?? null);
                    },
                    ...n,
                    ...c,
                    sections: d,
                    sectionHeight: h,
                    renderRow: f,
                    rowHeight: C,
                });
            },
        }),
    });
}
var S = n(151054),
    _ = n(305604);
let k = () => {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: n,
            message: r,
            channel: s,
            updateSelectShareDestinations: i,
        } = (0, g.Vw)(),
        { results: o, updateSearchText: u } = (0, S.R)({ selectedDestinations: e, includeMissingDMs: !0 });
    (0, l.useEffect)(() => {
        u(n);
    }, [u, n]);
    let c = (0, l.useCallback)(
            (t) => {
                let n = e.findIndex((e) => {
                    let { type: n, id: a } = e;
                    return n === t.type && a === t.id;
                });
                if (-1 !== n) {
                    let t = [...e];
                    t.splice(n, 1), i(t);
                    return;
                }
                i([...e, t]);
            },
            [e, i],
        ),
        d = e.length >= t;
    return (0, a.jsx)(x, {
        paddingBottom: 16,
        paddingTop: 16,
        rowData: o,
        message: r,
        originChannel: s,
        handleToggleDestination: c,
        selectedDestinations: e,
        disableSelection: d,
        rowClassName: _.q,
    });
};
var w = n(892547),
    A = n(375708);
let j = () => {
    let { searchText: e, updateSearchText: t } = (0, g.Vw)(),
        n = l.useRef(null);
    return (
        (0, l.useEffect)(() => {
            null !== n.current && "" === e && n.current.focus();
        }, [e, n]),
        (0, a.jsx)(w.I, {
            ref: n,
            query: e,
            onChange: (e) => {
                t(e);
            },
            onClear: () => {
                t("");
            },
            placeholder: A.intl.string(A.t["5h0QOP"]),
            "aria-label": A.intl.string(A.t["5h0QOP"]),
            autoFocus: !0,
        })
    );
};
var y = n(465532),
    T = n(355622),
    v = n(408018),
    D = n(138617),
    H = n(31717),
    O = n(785479);
let R = () => {
    let { message: e, channel: t, updateMessageText: n } = (0, g.Vw)(),
        r = (0, i.bG)([H.A], () => H.A.getDraft(e.channel_id, H.C.ChannelMessage)),
        [s, o] = l.useState(() => (0, v.ur)(r)),
        { textValue: u, richValue: c } = s;
    (0, l.useEffect)(() => {
        n(u);
    }, [n, u]);
    let d = l.useCallback(
            (t, n, a) => {
                o({ textValue: n, richValue: a }), y.A.saveDraft(e.channel_id, n, H.C.ChannelMessage);
            },
            [e],
        ),
        [h, f] = l.useState(!1),
        C = l.useCallback(() => f(!0), []),
        p = l.useCallback(() => f(!1), []);
    (0, l.useEffect)(
        () => () => {
            y.A.clearDraft(e.channel_id, H.C.ChannelMessage);
        },
        [e],
    );
    let m = async () => ({ shouldClear: !0, shouldRefocus: !1 });
    return (0, a.jsx)(D.Ay, {
        innerClassName: O.O,
        onChange: d,
        placeholder: A.intl.string(A.t.ZroO3G),
        channel: t,
        textValue: u,
        richValue: c,
        type: T.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: p,
        onFocus: C,
        focused: h,
        onSubmit: m,
        parentModalKey: g.dJ,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
};
var P = n(693227);
let V = (e) => {
    let { transitionState: t, onClose: n } = e,
        { send: l, sending: r, canSend: s } = (0, g.Vw)();
    return (0, a.jsx)(p.Modal, {
        title: A.intl.string(P.default.zgFs8C),
        actions: [{ variant: "primary", text: A.intl.string(A.t.TXNS7S), onClick: l, loading: r, disabled: !s() }],
        transitionState: t,
        onClose: n,
        input: (0, a.jsx)(j, {}),
        actionBarInput: (0, a.jsx)(R, {}),
        children: (0, a.jsx)(k, {}),
    });
};
var I = n(975975),
    N = n.n(I),
    U = n(720149),
    B = n(451909),
    q = n(223863),
    F = n(734057),
    G = n(403362),
    K = n(381941);
let Q = async (e, t, n) => {
        let a = F.A.getChannel(n);
        if (null == a) throw Error("Unable to find destination channel for message");
        let l = B.Ay.parse(a, t);
        return U.A.sendMessage(a.id, l, !1, {
            location: K.Hx.SHARE_CUSTOM_THEME,
            eagerDispatch: !1,
            sharedCustomTheme: e,
        });
    },
    Z = async (e, t, n) => {
        let a = (await Promise.all(e.map(q.pk))).filter(G.Vq);
        return N()(a.map(async (e) => Q(t, n, e)));
    };
var z = n(652215);
let J = (e) => {
    let { transitionState: t, onClose: n } = e,
        p = (0, l.useRef)((0, g.E3)()).current,
        {
            selectedDestinations: m,
            messageText: M,
            canSend: b,
            setSend: E,
            updateMessage: x,
            updateChannel: S,
        } = (0, r.P)(p),
        [_, k] = l.useState(!1),
        { colors: w, chassisMixAmount: A, gradientAngle: j } = (0, f.ko)(),
        y = (0, i.bG)([c.A], () => c.A.theme),
        T = (0, l.useMemo)(
            () => ({
                colors: w.map((e) => e.replace("#", "")),
                gradient_angle: j,
                base_mix: A,
                base_theme: (0, C.O)(y),
            }),
            [w, j, A, y],
        ),
        v = l.useMemo(() => (0, d.createChannelRecord)({ id: "1", type: s.r.DM }), []),
        D = l.useMemo(() => (0, o.rh)({ ...(0, u.Ay)({ channelId: v.id, content: "" }) }), [v]);
    (0, l.useEffect)(() => {
        x(D), S(v), k(!0);
    }, [D, v, x, S]);
    let H = l.useCallback(async () => {
        if (!b()) return Promise.reject();
        await Z(m, T, M), h.default.track(z.HAw.CUSTOM_THEME_SHARED, { num_destinations: m.length }), await n();
    }, [T, m, M, b, n]);
    return ((0, l.useEffect)(() => {
        E(H);
    }, [H, E]),
    _)
        ? (0, a.jsx)(g.KH.Provider, { value: p, children: (0, a.jsx)(V, { transitionState: t, onClose: n }) })
        : null;
};
