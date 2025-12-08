n.d(t, { ApplicationCommandShareModal: () => P }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(793030),
    a = n(481060),
    s = n(911969),
    o = n(835473),
    u = n(987509),
    c = n(72214),
    d = n(592125),
    b = n(430824),
    f = n(823379),
    m = n(213459),
    p = n(667204),
    h = n(739980),
    g = n(617266),
    v = n(333861),
    x = n(388032),
    y = n(963354),
    j = n(621054);
let S = [s.yU.CHAT],
    O = () => {
        (0, a.Mr3)(v.s);
    };
function P(e) {
    var t,
        {
            applicationId: n,
            channel: s,
            command: v,
            onClose: P,
            requireLaunchChannel: _,
            onShareResult: w,
            previewMessage: C,
        } = e,
        Z = (function (e, t) {
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
    let L = r.useMemo(() => (null == s ? null : (0, u.dL)(s.id)), [s]),
        [E, N] = r.useState(!1),
        { commands: T, loading: k } =
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
            (0, m.v1)(
                t,
                { commandTypes: S },
                {
                    applicationId: n,
                    allowFetch: !0,
                    allowApplicationState: !0,
                },
            )),
        M = r.useRef(0),
        [F, A] = r.useState(_ && null != L ? [L] : []),
        I = F.length,
        D = I >= 5,
        [q, R] = r.useState(""),
        { results: z, updateSearchText: U } = (0, c.s)({
            selectedDestinations: F,
            originDestination: null != L ? L : void 0,
            includeMissingDMs: !0,
        }),
        W = r.useCallback(
            (e) => {
                R(e), U(e);
            },
            [U],
        ),
        H = r.useCallback(() => (w(!1), P()), [w, P]),
        [G] = (0, o.Z)([n]),
        V = r.useCallback(() => {
            R("");
        }, [R]),
        X = r.useRef(null);
    r.useEffect(() => {
        if ("" === q) {
            var e;
            null == (e = X.current) || e.focus();
        }
    }, [q]);
    let B = r.useCallback(
            (e) => {
                A((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return D ? t : (R(""), U(""), (M.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (M.current += 1), l;
                });
            },
            [D, U],
        ),
        [Q, Y] = r.useMemo(() => {
            if (k) return [null, !1];
            let e = T.find((e) => e.untranslatedName === v.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [v, T, k]),
        J = r.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === Q) return;
                N(!0);
                let n = (await Promise.all(e.map(u.qx))).filter(f.lm);
                t && (w(!0), O()),
                    n.forEach(async (e) => {
                        var t, n;
                        let l = d.Z.getChannel(e);
                        if (null == l) return;
                        let r =
                                null !=
                                (n =
                                    null == (t = v.options)
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
                            i = b.Z.getGuild(null == l ? void 0 : l.guild_id);
                        null !=
                            (await (0, p.Z)({
                                command: Q,
                                optionValues: r,
                                context: {
                                    channel: l,
                                    guild: i,
                                },
                            })) &&
                            (0, a.showToast)((0, a.createToast)(x.intl.string(x.t["5WjJcl"]), a.ToastType.MESSAGE));
                    }),
                    w(!0),
                    O();
            },
            [w, Q, v.options],
        ),
        K = r.useCallback(() => {
            J(F, { closeAfterSend: !0 });
        }, [J, F]);
    if (k)
        return (0, l.jsx)(i.Modal, {
            title: x.intl.string(x.t.fuFvwx),
            "aria-label": x.intl.string(x.t.fuFvwx),
            transitionState: Z.transitionState,
            onClose: P,
            actions: [],
            children: (0, l.jsx)(a.$jN, { className: y.spinnerContainer }),
        });
    if (Y)
        return (0, l.jsx)(i.Modal, {
            title: x.intl.string(x.t.fuFvwx),
            "aria-label": x.intl.string(x.t.fuFvwx),
            transitionState: Z.transitionState,
            onClose: P,
            actions: [
                {
                    text: x.intl.string(x.t.cpT0Cq),
                    onClick: P,
                    variant: "primary",
                },
            ],
            children: x.intl.string(x.t.yAk8ZT),
        });
    let $ =
            z.length > 0
                ? (0, l.jsx)(g.F, {
                      rowData: z,
                      handleToggleDestination: B,
                      selectedDestinations: F,
                      disableSelection: D,
                      originDestination: L,
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", {
                              className: y.noResultsImg,
                              src: j,
                              alt: "",
                          }),
                          (0, l.jsx)(a.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: x.intl.string(x.t.V6nAfF),
                          }),
                      ],
                  }),
        ee = x.intl.format(x.t.hajTkz, { appName: null == G ? void 0 : G.name });
    null == G && (ee = x.intl.string(x.t.fuFvwx));
    let et = x.intl.format(x.t["DF+q2l"], { appName: null == G ? void 0 : G.name });
    return (
        D && (et = x.intl.format(x.t["/KhyPe"], { count: 5 })),
        (0, l.jsx)(i.Modal, {
            title: ee.toString(),
            subtitle: et,
            "aria-label": ee.toString(),
            transitionState: Z.transitionState,
            onClose: H,
            size: "md",
            actions: [
                {
                    text: x.intl.string(x.t.cpT0Cq),
                    onClick: H,
                    variant: "secondary",
                },
                {
                    text: x.intl.string(x.t.TXNS7S),
                    onClick: K,
                    disabled: 0 === I || E,
                    variant: "primary",
                },
            ],
            preview: void 0 !== C ? (0, l.jsx)(h.z, { previewMessage: C }) : null,
            input: (0, l.jsx)(a.E1j, {
                ref: X,
                query: q,
                onChange: W,
                onClear: V,
                placeholder: x.intl.string(x.t["5h0QOP"]),
                "aria-label": x.intl.string(x.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: $,
        })
    );
}
