n.d(t, { ApplicationCommandShareModal: () => _ }), n(388685), n(35282);
var l = n(255367),
    r = n(73800),
    i = n(82659),
    a = n(481060),
    s = n(911969),
    o = n(835473),
    u = n(987509),
    c = n(72214),
    d = n(592125),
    f = n(430824),
    p = n(823379),
    b = n(213459),
    h = n(667204),
    m = n(739980),
    g = n(617266),
    y = n(333861),
    v = n(388032),
    x = n(226792),
    j = n(621054);
let S = [s.yU.CHAT],
    C = () => {
        (0, a.Mr3)(y.s);
    };
function _(e) {
    var t,
        {
            applicationId: n,
            channel: s,
            command: y,
            onClose: _,
            requireLaunchChannel: O,
            onShareResult: E,
            previewMessage: P,
        } = e,
        w = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++)
                    (n = i[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, [
            "applicationId",
            "channel",
            "command",
            "onClose",
            "requireLaunchChannel",
            "onShareResult",
            "previewMessage",
        ]);
    let Z = r.useMemo(() => (null == s ? null : (0, u.dL)(s.id)), [s]),
        [L, N] = r.useState(!1),
        { commands: T, loading: D } =
            ((t = r.useMemo(
                () =>
                    null == s
                        ? { type: "contextless" }
                        : {
                              type: "channel",
                              channel: s,
                          },
                [s],
            )),
            (0, b.v1)(
                t,
                { commandTypes: S },
                {
                    applicationId: n,
                    allowFetch: !0,
                    allowApplicationState: !0,
                },
            )),
        M = r.useRef(0),
        [A, k] = r.useState(O && null != Z ? [Z] : []),
        I = A.length,
        R = I >= 5,
        [F, U] = r.useState(""),
        { results: q, updateSearchText: H } = (0, c.s)({
            selectedDestinations: A,
            originDestination: null != Z ? Z : void 0,
            includeMissingDMs: !0,
        }),
        z = r.useCallback(
            (e) => {
                U(e), H(e);
            },
            [H],
        ),
        G = r.useCallback(() => (E(!1), _()), [E, _]),
        [W] = (0, o.Z)([n]),
        V = r.useCallback(() => {
            U("");
        }, [U]),
        X = r.useRef(null);
    r.useEffect(() => {
        if ("" === F) {
            var e;
            null == (e = X.current) || e.focus();
        }
    }, [F]);
    let J = r.useCallback(
            (e) => {
                k((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return R ? t : (U(""), H(""), (M.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (M.current += 1), l;
                });
            },
            [R, H],
        ),
        [Y, B] = r.useMemo(() => {
            if (D) return [null, !1];
            let e = T.find((e) => e.untranslatedName === y.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [y, T, D]),
        Q = r.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === Y) return;
                N(!0);
                let n = (await Promise.all(e.map(u.qx))).filter(p.lm);
                t && (E(!0), C()),
                    n.forEach(async (e) => {
                        var t, n;
                        let l = d.Z.getChannel(e);
                        if (null == l) return;
                        let r =
                                null !=
                                (n =
                                    null == (t = y.options)
                                        ? void 0
                                        : t.reduce(
                                              (e, t) => (
                                                  (e[t.name] = [
                                                      {
                                                          type: "text",
                                                          text: t.value,
                                                      },
                                                  ]),
                                                  e
                                              ),
                                              {},
                                          ))
                                    ? n
                                    : {},
                            i = f.Z.getGuild(null == l ? void 0 : l.guild_id);
                        null !=
                            (await (0, h.Z)({
                                command: Y,
                                optionValues: r,
                                context: {
                                    channel: l,
                                    guild: i,
                                },
                            })) &&
                            (0, a.showToast)((0, a.createToast)(v.intl.string(v.t["5WjJcn"]), a.ToastType.MESSAGE));
                    }),
                    E(!0),
                    C();
            },
            [E, Y, y.options],
        ),
        K = r.useCallback(() => {
            Q(A, { closeAfterSend: !0 });
        }, [Q, A]);
    if (D)
        return (0, l.jsx)(i.Modal, {
            title: v.intl.string(v.t.fuFvw8),
            "aria-label": v.intl.string(v.t.fuFvw8),
            transitionState: w.transitionState,
            onClose: _,
            actions: [],
            children: (0, l.jsx)(a.$jN, { className: x.spinnerContainer }),
        });
    if (B)
        return (0, l.jsx)(i.Modal, {
            title: v.intl.string(v.t.fuFvw8),
            "aria-label": v.intl.string(v.t.fuFvw8),
            transitionState: w.transitionState,
            onClose: _,
            actions: [
                {
                    text: v.intl.string(v.t.cpT0Cg),
                    onClick: _,
                    variant: "primary",
                },
            ],
            children: v.intl.string(v.t.yAk8ZW),
        });
    let $ =
            q.length > 0
                ? (0, l.jsx)(g.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: q,
                      handleToggleDestination: J,
                      selectedDestinations: A,
                      disableSelection: R,
                      originDestination: Z,
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", {
                              className: x.noResultsImg,
                              src: j,
                              alt: "",
                          }),
                          (0, l.jsx)(a.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: v.intl.string(v.t.V6nAfH),
                          }),
                      ],
                  }),
        ee = v.intl.format(v.t.hajTk5, { appName: null == W ? void 0 : W.name });
    null == W && (ee = v.intl.string(v.t.fuFvw8));
    let et = v.intl.format(v.t["DF+q2t"], { appName: null == W ? void 0 : W.name });
    return (
        R && (et = v.intl.format(v.t["/KhyPT"], { count: 5 })),
        (0, l.jsx)(i.Modal, {
            title: ee.toString(),
            subtitle: et,
            "aria-label": ee.toString(),
            transitionState: w.transitionState,
            onClose: G,
            size: "md",
            actions: [
                {
                    text: v.intl.string(v.t.cpT0Cg),
                    onClick: G,
                    variant: "secondary",
                },
                {
                    text: v.intl.string(v.t.TXNS7e),
                    onClick: K,
                    disabled: 0 === I || L,
                    variant: "primary",
                },
            ],
            preview: void 0 !== P ? (0, l.jsx)(m.z, { previewMessage: P }) : null,
            input: (0, l.jsx)(a.E1j, {
                className: x.search,
                ref: X,
                query: F,
                onChange: z,
                onClear: V,
                placeholder: v.intl.string(v.t["5h0QOD"]),
                "aria-label": v.intl.string(v.t["5h0QOD"]),
                autoFocus: !0,
            }),
            children: $,
        })
    );
}
