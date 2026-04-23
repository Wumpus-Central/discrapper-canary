a.d(t, { CustomThemesShareModalWrapper: () => V });
var s = a(627968),
    n = a(64700),
    l = a(353640),
    i = a(478437),
    r = a(17928),
    _ = a(320095),
    A = a(963852),
    o = a(363195),
    u = a(95701),
    c = a(954571),
    d = a(467135),
    h = a(335542),
    I = a(457417),
    E = a(189213),
    C = a(837381),
    L = a(475825),
    N = a(928039),
    b = a(61916);
function f(e) {
    let {
            rowData: t,
            message: a,
            originChannel: l,
            selectedDestinations: i,
            handleToggleDestination: r,
            disableSelection: _,
            rowClassName: A,
            ...o
        } = e,
        {
            sections: u,
            sectionHeight: c,
            renderRow: d,
            rowHeight: h,
        } = (0, b.s)({
            rowData: t,
            message: a,
            originChannel: l,
            selectedDestinations: i,
            handleToggleDestination: r,
            disableSelection: _,
            rowClassName: A,
        }),
        I = n.useRef(null),
        E = (0, N.A)("forward-modal", I);
    return (0, s.jsx)(C.hD, {
        navigator: E,
        children: (0, s.jsx)(C.PR, {
            children: (e) => {
                let { ref: t, ...a } = e;
                return (0, s.jsx)(L.OZ, {
                    ref: (e) => {
                        (I.current = e), (t.current = e?.getScrollerNode() ?? null);
                    },
                    ...a,
                    ...o,
                    sections: u,
                    sectionHeight: c,
                    renderRow: d,
                    rowHeight: h,
                });
            },
        }),
    });
}
var g = a(151054),
    P = a(305604);
let p = () => {
    let {
            selectedDestinations: e,
            maxDestinations: t,
            searchText: a,
            message: l,
            channel: i,
            updateSelectShareDestinations: r,
        } = (0, I.Vw)(),
        { results: _, updateSearchText: A } = (0, g.R)({ selectedDestinations: e, includeMissingDMs: !0 });
    (0, n.useEffect)(() => {
        A(a);
    }, [A, a]);
    let o = (0, n.useCallback)(
            (t) => {
                let a = e.findIndex((e) => {
                    let { type: a, id: s } = e;
                    return a === t.type && s === t.id;
                });
                if (-1 !== a) {
                    let t = [...e];
                    t.splice(a, 1), r(t);
                    return;
                }
                r([...e, t]);
            },
            [e, r],
        ),
        u = e.length >= t;
    return (0, s.jsx)(f, {
        paddingBottom: 16,
        paddingTop: 16,
        rowData: _,
        message: l,
        originChannel: i,
        handleToggleDestination: o,
        selectedDestinations: e,
        disableSelection: u,
        rowClassName: P.q,
    });
};
var G = a(892547),
    D = a(985018);
let O = () => {
    let { searchText: e, updateSearchText: t } = (0, I.Vw)(),
        a = n.useRef(null);
    return (
        (0, n.useEffect)(() => {
            null !== a.current && "" === e && a.current.focus();
        }, [e, a]),
        (0, s.jsx)(G.I, {
            ref: a,
            query: e,
            onChange: (e) => {
                t(e);
            },
            onClear: () => {
                t("");
            },
            placeholder: D.intl.string(D.t["5h0QOP"]),
            "aria-label": D.intl.string(D.t["5h0QOP"]),
            autoFocus: !0,
        })
    );
};
var S = a(465532),
    m = a(355622),
    T = a(408018),
    F = a(201349),
    W = a(31717),
    y = a(785479);
let x = () => {
    let { message: e, channel: t, updateMessageText: a } = (0, I.Vw)(),
        l = (0, r.bG)([W.A], () => W.A.getDraft(e.channel_id, W.C.ChannelMessage)),
        [i, _] = n.useState(() => (0, T.ur)(l)),
        { textValue: A, richValue: o } = i;
    (0, n.useEffect)(() => {
        a(A);
    }, [a, A]);
    let u = n.useCallback(
            (t, a, s) => {
                _({ textValue: a, richValue: s }), S.A.saveDraft(e.channel_id, a, W.C.ChannelMessage);
            },
            [e],
        ),
        [c, d] = n.useState(!1),
        h = n.useCallback(() => d(!0), []),
        E = n.useCallback(() => d(!1), []);
    (0, n.useEffect)(
        () => () => {
            S.A.clearDraft(e.channel_id, W.C.ChannelMessage);
        },
        [e],
    );
    let C = async () => ({ shouldClear: !0, shouldRefocus: !1 });
    return (0, s.jsx)(F.Ay, {
        innerClassName: y.O,
        onChange: u,
        placeholder: D.intl.string(D.t.ZroO3G),
        channel: t,
        textValue: A,
        richValue: o,
        type: m.oU.SHARE_CUSTOM_CLIENT_THEME_INPUT,
        onBlur: E,
        onFocus: h,
        focused: c,
        onSubmit: C,
        parentModalKey: I.dJ,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
};
var k = a(693227);
let v = (e) => {
    let { transitionState: t, onClose: a } = e,
        { send: n, sending: l, canSend: i } = (0, I.Vw)();
    return (0, s.jsx)(E.Modal, {
        title: D.intl.string(k.default.zgFs8C),
        actions: [{ variant: "primary", text: D.intl.string(D.t.TXNS7S), onClick: n, loading: l, disabled: !i() }],
        transitionState: t,
        onClose: a,
        input: (0, s.jsx)(O, {}),
        actionBarInput: (0, s.jsx)(x, {}),
        children: (0, s.jsx)(p, {}),
    });
};
var j = a(975975),
    w = a.n(j),
    M = a(720149),
    R = a(451909),
    U = a(223863),
    B = a(734057),
    K = a(403362),
    Z = a(381941);
let z = async (e, t, a) => {
        let s = B.A.getChannel(a);
        if (null == s) throw Error("Unable to find destination channel for message");
        let n = R.Ay.parse(s, t);
        return M.A.sendMessage(s.id, n, !1, {
            location: Z.Hx.SHARE_CUSTOM_THEME,
            eagerDispatch: !1,
            sharedCustomTheme: e,
        });
    },
    H = async (e, t, a) => {
        let s = (await Promise.all(e.map(U.pk))).filter(K.Vq);
        return w()(s.map(async (e) => z(t, a, e)));
    };
var Y = a(652215);
let V = (e) => {
    let { transitionState: t, onClose: a } = e,
        E = (0, n.useRef)((0, I.E3)()).current,
        {
            selectedDestinations: C,
            messageText: L,
            canSend: N,
            setSend: b,
            updateMessage: f,
            updateChannel: g,
        } = (0, l.P)(E),
        [P, p] = n.useState(!1),
        { colors: G, chassisMixAmount: D, gradientAngle: O } = (0, d.ko)(),
        S = (0, r.bG)([o.A], () => o.A.theme),
        m = (0, n.useMemo)(
            () => ({
                colors: G.map((e) => e.replace("#", "")),
                gradient_angle: O,
                base_mix: D,
                base_theme: (0, h.O)(S),
            }),
            [G, O, D, S],
        ),
        T = n.useMemo(() => (0, u.createChannelRecord)({ id: "1", type: i.r.DM }), []),
        F = n.useMemo(() => (0, _.rh)({ ...(0, A.Ay)({ channelId: T.id, content: "" }) }), [T]);
    (0, n.useEffect)(() => {
        f(F), g(T), p(!0);
    }, [F, T, f, g]);
    let W = n.useCallback(async () => {
        if (!N()) return Promise.reject();
        await H(C, m, L), c.default.track(Y.HAw.CUSTOM_THEME_SHARED, { num_destinations: C.length }), await a();
    }, [m, C, L, N, a]);
    return ((0, n.useEffect)(() => {
        b(W);
    }, [W, b]),
    P)
        ? (0, s.jsx)(I.KH.Provider, { value: E, children: (0, s.jsx)(v, { transitionState: t, onClose: a }) })
        : null;
};
