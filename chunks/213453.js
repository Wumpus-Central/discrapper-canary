n.d(t, { CustomThemesShareModalWrapper: () => Z });
var a = n(477900),
    r = n(582128),
    l = n(196765),
    s = n(478437),
    i = n(855986),
    o = n(432005),
    u = n(963852),
    c = n(413599),
    d = n(95701),
    h = n(129230),
    f = n(467135),
    C = n(195255),
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
            originChannel: l,
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
            originChannel: l,
            selectedDestinations: s,
            handleToggleDestination: i,
            disableSelection: o,
            rowClassName: u,
        }),
        g = r.useRef(null),
        p = (0, b.A)("forward-modal", g);
    return (0, a.jsx)(m.hD, {
        navigator: p,
        children: (0, a.jsx)(m.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsx)(M.OZ, {
                    ref: (e) => {
                        ((g.current = e), (t.current = e?.getScrollerNode() ?? null));
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
    _ = n(432551);
function k() {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: n,
            message: l,
            channel: s,
            updateSelectShareDestinations: i,
        } = (0, g.Vw)(),
        { results: o, updateSearchText: u } = (0, S.R)({ selectedDestinations: e, includeMissingDMs: !0 });
    (0, r.useEffect)(() => {
        u(n);
    }, [u, n]);
    let c = (0, r.useCallback)(
            (t) => {
                let n = e.findIndex((e) => {
                    let { type: n, id: a } = e;
                    return n === t.type && a === t.id;
                });
                if (-1 !== n) {
                    let t = [...e];
                    (t.splice(n, 1), i(t));
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
        message: l,
        originChannel: s,
        handleToggleDestination: c,
        selectedDestinations: e,
        disableSelection: d,
        rowClassName: _.q,
    });
}
var w = n(683438),
    A = n(792996);
function j() {
    let { searchText: e, updateSearchText: t } = (0, g.Vw)(),
        n = r.useRef(null);
    return (
        (0, r.useEffect)(() => {
            null !== n.current && "" === e && n.current.focus();
        }, [e, n]),
        (0, a.jsx)(w.I, {
            ref: n,
            query: e,
            onChange: function (e) {
                t(e);
            },
            onClear: function () {
                t("");
            },
            placeholder: A.intl.string(A.t["5h0QOP"]),
            "aria-label": A.intl.string(A.t["5h0QOP"]),
            autoFocus: !0,
        })
    );
}
var y = n(465532),
    T = n(355622),
    v = n(408018),
    D = n(989161),
    H = n(31717),
    O = n(115412);
let R = () => {
    let { message: e, channel: t, updateMessageText: n } = (0, g.Vw)(),
        l = (0, i.bG)([H.A], () => H.A.getDraft(e.channel_id, H.C.ChannelMessage)),
        [s, o] = r.useState(() => (0, v.ur)(l)),
        { textValue: u, richValue: c } = s;
    (0, r.useEffect)(() => {
        n(u);
    }, [n, u]);
    let d = r.useCallback(
            (t, n, a) => {
                (o({ textValue: n, richValue: a }), y.A.saveDraft(e.channel_id, n, H.C.ChannelMessage));
            },
            [e],
        ),
        [h, f] = r.useState(!1),
        C = r.useCallback(() => f(!0), []),
        p = r.useCallback(() => f(!1), []);
    return (
        (0, r.useEffect)(
            () => () => {
                y.A.clearDraft(e.channel_id, H.C.ChannelMessage);
            },
            [e],
        ),
        (0, a.jsx)(D.Ay, {
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
            onSubmit: async () => ({ shouldClear: !0, shouldRefocus: !1 }),
            parentModalKey: g.dJ,
            autoCompletePosition: "bottom",
            emojiPickerCloseOnModalOuterClick: !0,
            disableThemedBackground: !0,
        })
    );
};
var P = n(958904);
function V(e) {
    let { transitionState: t, onClose: n } = e,
        { send: r, sending: l, canSend: s } = (0, g.Vw)();
    return (0, a.jsx)(p.a, {
        title: A.intl.string(P.default.zgFs8C),
        actions: [{ variant: "primary", text: A.intl.string(A.t.TXNS7S), onClick: r, loading: l, disabled: !s() }],
        transitionState: t,
        onClose: n,
        input: (0, a.jsx)(j, {}),
        actionBarInput: (0, a.jsx)(R, {}),
        children: (0, a.jsx)(k, {}),
    });
}
var I = n(975975),
    N = n.n(I),
    U = n(138399),
    B = n(451909),
    q = n(223863),
    F = n(734057),
    G = n(403362),
    K = n(381941),
    Q = n(652215);
let Z = (e) => {
    let { transitionState: t, onClose: n } = e,
        p = (0, r.useRef)((0, g.E3)()).current,
        {
            selectedDestinations: m,
            messageText: M,
            canSend: b,
            setSend: E,
            updateMessage: x,
            updateChannel: S,
        } = (0, l.P)(p),
        [_, k] = r.useState(!1),
        { colors: w, chassisMixAmount: A, gradientAngle: j } = (0, f.k)(),
        y = (0, i.bG)([c.A], () => c.A.theme),
        T = (0, r.useMemo)(
            () => ({
                colors: w.map((e) => e.replace("#", "")),
                gradient_angle: j,
                base_mix: A,
                base_theme: (0, C.O)(y),
            }),
            [w, j, A, y],
        ),
        v = r.useMemo(() => (0, d.createChannelRecord)({ id: "1", type: s.r.DM }), []),
        D = r.useMemo(() => (0, o.rh)({ ...(0, u.Ay)({ channelId: v.id, content: "" }) }), [v]);
    (0, r.useEffect)(() => {
        (x(D), S(v), k(!0));
    }, [D, v, x, S]);
    let H = r.useCallback(async () => {
        if (!b()) return Promise.reject();
        (await (async (e, t, n) => {
            let a = (await Promise.all(e.map(q.pk))).filter(G.Vq);
            return N()(
                a.map(async (e) =>
                    (async (e, t, n) => {
                        let a = F.A.getChannel(n);
                        if (null == a) throw Error("Unable to find destination channel for message");
                        let r = B.Ay.parse(a, t);
                        return U.A.sendMessage(a.id, r, !1, {
                            location: K.Hx.SHARE_CUSTOM_THEME,
                            eagerDispatch: !1,
                            sharedCustomTheme: e,
                        });
                    })(t, n, e),
                ),
            );
        })(m, T, M),
            h.default.track(Q.HAw.CUSTOM_THEME_SHARED, { num_destinations: m.length }),
            await n());
    }, [T, m, M, b, n]);
    return ((0, r.useEffect)(() => {
        E(H);
    }, [H, E]),
    _)
        ? (0, a.jsx)(g.KH.Provider, { value: p, children: (0, a.jsx)(V, { transitionState: t, onClose: n }) })
        : null;
};
