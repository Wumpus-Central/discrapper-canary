n.d(t, { CustomThemesShareModalWrapper: () => K });
var a = n(477900),
    l = n(582128),
    r = n(196765),
    s = n(478437),
    i = n(855986),
    o = n(432005),
    u = n(963852),
    c = n(413599),
    d = n(95701),
    h = n(129230),
    f = n(467135),
    g = n(195255),
    C = n(457417),
    p = n(189213),
    m = n(837381),
    b = n(475825),
    M = n(928039),
    S = n(61916);
function E(e) {
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
            rowHeight: g,
        } = (0, S.s)({
            rowData: t,
            message: n,
            originChannel: r,
            selectedDestinations: s,
            handleToggleDestination: i,
            disableSelection: o,
            rowClassName: u,
        }),
        C = l.useRef(null),
        p = (0, M.A)("forward-modal", C);
    return (0, a.jsx)(m.hD, {
        navigator: p,
        children: (0, a.jsx)(m.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, a.jsx)(b.OZ, {
                    ref: (e) => {
                        ((C.current = e), (t.current = e?.getScrollerNode() ?? null));
                    },
                    ...n,
                    ...c,
                    sections: d,
                    sectionHeight: h,
                    renderRow: f,
                    rowHeight: g,
                });
            },
        }),
    });
}
var x = n(151054),
    _ = n(432551);
function k() {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: n,
            message: r,
            channel: s,
            updateSelectShareDestinations: i,
        } = (0, C.Vw)(),
        { results: o, updateSearchText: u } = (0, x.R)({ selectedDestinations: e, includeMissingDMs: !0 });
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
                    (t.splice(n, 1), i(t));
                    return;
                }
                i([...e, t]);
            },
            [e, i],
        ),
        d = e.length >= t;
    return (0, a.jsx)(E, {
        disableFocusRingScope: !0,
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
}
var w = n(683438),
    A = n(792996);
function j() {
    let { searchText: e, updateSearchText: t } = (0, C.Vw)(),
        n = l.useRef(null);
    return (
        (0, l.useEffect)(() => {
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
    R = n(408018),
    v = n(989161),
    D = n(31717),
    H = n(115412);
let O = () => {
    let { message: e, channel: t, updateMessageText: n } = (0, C.Vw)(),
        r = (0, i.bG)([D.A], () => D.A.getDraft(e.channel_id, D.C.ChannelMessage)),
        [s, o] = l.useState(() => (0, R.ur)(r)),
        { textValue: u, richValue: c } = s;
    (0, l.useEffect)(() => {
        n(u);
    }, [n, u]);
    let d = l.useCallback(
            (t, n, a) => {
                (o({ textValue: n, richValue: a }), y.A.saveDraft(e.channel_id, n, D.C.ChannelMessage));
            },
            [e],
        ),
        [h, f] = l.useState(!1),
        g = l.useCallback(() => f(!0), []),
        p = l.useCallback(() => f(!1), []);
    return (
        (0, l.useEffect)(
            () => () => {
                y.A.clearDraft(e.channel_id, D.C.ChannelMessage);
            },
            [e],
        ),
        (0, a.jsx)(v.Ay, {
            innerClassName: H.O,
            onChange: d,
            placeholder: A.intl.string(A.t.ZroO3G),
            channel: t,
            textValue: u,
            richValue: c,
            type: T.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
            onBlur: p,
            onFocus: g,
            focused: h,
            onSubmit: async () => ({ shouldClear: !0, shouldRefocus: !1 }),
            parentModalKey: C.dJ,
            autoCompletePosition: "bottom",
            emojiPickerCloseOnModalOuterClick: !0,
            disableThemedBackground: !0,
        })
    );
};
var P = n(958904);
function V(e) {
    let { transitionState: t, onClose: n } = e,
        { send: l, sending: r, canSend: s } = (0, C.Vw)();
    return (0, a.jsx)(p.a, {
        title: A.intl.string(P.default.zgFs8C),
        actions: [{ variant: "primary", text: A.intl.string(A.t.TXNS7S), onClick: l, loading: r, disabled: !s() }],
        transitionState: t,
        onClose: n,
        input: (0, a.jsx)(j, {}),
        actionBarInput: (0, a.jsx)(O, {}),
        children: (0, a.jsx)(k, {}),
    });
}
var I = n(138399),
    N = n(451909),
    U = n(223863),
    B = n(734057),
    F = n(403362),
    q = n(381941),
    G = n(652215);
let K = (e) => {
    let { transitionState: t, onClose: n } = e,
        p = (0, l.useRef)((0, C.E3)()).current,
        {
            selectedDestinations: m,
            messageText: b,
            canSend: M,
            setSend: S,
            updateMessage: E,
            updateChannel: x,
        } = (0, r.P)(p),
        [_, k] = l.useState(!1),
        { colors: w, chassisMixAmount: A, gradientAngle: j } = (0, f.k)(),
        y = (0, i.bG)([c.A], () => c.A.theme),
        T = (0, l.useMemo)(
            () => ({
                colors: w.map((e) => e.replace("#", "")),
                gradient_angle: j,
                base_mix: A,
                base_theme: (0, g.O)(y),
            }),
            [w, j, A, y],
        ),
        R = l.useMemo(() => (0, d.createChannelRecord)({ id: "1", type: s.r.DM }), []),
        v = l.useMemo(() => (0, o.rh)({ ...(0, u.Ay)({ channelId: R.id, content: "" }) }), [R]);
    (0, l.useEffect)(() => {
        (E(v), x(R), k(!0));
    }, [v, R, E, x]);
    let D = l.useCallback(async () => {
        if (!M()) return Promise.reject();
        (await (async (e, t, n) =>
            Promise.allSettled(
                (await Promise.all(e.map(U.pk))).filter(F.Vq).map(async (e) =>
                    (async (e, t, n) => {
                        let a = B.A.getChannel(n);
                        if (null == a) throw Error("Unable to find destination channel for message");
                        let l = N.Ay.parse(a, t);
                        return I.A.sendMessage(a.id, l, !1, {
                            location: q.Hx.SHARE_CUSTOM_THEME,
                            eagerDispatch: !1,
                            sharedCustomTheme: e,
                        });
                    })(t, n, e),
                ),
            ))(m, T, b),
            h.default.track(G.HAw.CUSTOM_THEME_SHARED, { num_destinations: m.length }),
            await n());
    }, [T, m, b, M, n]);
    return ((0, l.useEffect)(() => {
        S(D);
    }, [D, S]),
    _)
        ? (0, a.jsx)(C.KH.Provider, { value: p, children: (0, a.jsx)(V, { transitionState: t, onClose: n }) })
        : null;
};
