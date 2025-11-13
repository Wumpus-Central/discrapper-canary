n.d(t, { ApplicationCommandShareModal: () => _ }), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(793030),
    a = n(481060),
    s = n(911969),
    u = n(835473),
    o = n(987509),
    c = n(72214),
    d = n(592125),
    f = n(430824),
    b = n(823379),
    p = n(213459),
    h = n(667204),
    m = n(739980),
    g = n(617266),
    y = n(333861),
    v = n(388032),
    x = n(963354),
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
            onShareResult: P,
            previewMessage: E,
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
    let Z = r.useMemo(() => (null == s ? null : (0, o.dL)(s.id)), [s]),
        [L, N] = r.useState(!1),
        { commands: M, loading: T } =
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
            (0, p.v1)(
                t,
                { commandTypes: S },
                {
                    applicationId: n,
                    allowFetch: !0,
                    allowApplicationState: !0,
                },
            )),
        D = r.useRef(0),
        [A, k] = r.useState(O && null != Z ? [Z] : []),
        I = A.length,
        F = I >= 5,
        [R, q] = r.useState(""),
        { results: U, updateSearchText: z } = (0, c.s)({
            selectedDestinations: A,
            originDestination: null != Z ? Z : void 0,
            includeMissingDMs: !0,
        }),
        H = r.useCallback(
            (e) => {
                q(e), z(e);
            },
            [z],
        ),
        G = r.useCallback(() => (P(!1), _()), [P, _]),
        [W] = (0, u.Z)([n]),
        V = r.useCallback(() => {
            q("");
        }, [q]),
        X = r.useRef(null);
    r.useEffect(() => {
        if ("" === R) {
            var e;
            null == (e = X.current) || e.focus();
        }
    }, [R]);
    let Y = r.useCallback(
            (e) => {
                k((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return F ? t : (q(""), z(""), (D.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (D.current += 1), l;
                });
            },
            [F, z],
        ),
        [Q, B] = r.useMemo(() => {
            if (T) return [null, !1];
            let e = M.find((e) => e.untranslatedName === y.name);
            return void 0 !== e ? [e, !1] : [null, !0];
        }, [y, M, T]),
        J = r.useCallback(
            async function (e) {
                let { closeAfterSend: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null === Q) return;
                N(!0);
                let n = (await Promise.all(e.map(o.qx))).filter(b.lm);
                t && (P(!0), C()),
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
                                command: Q,
                                optionValues: r,
                                context: {
                                    channel: l,
                                    guild: i,
                                },
                            })) &&
                            (0, a.showToast)((0, a.createToast)(v.intl.string(v.t["5WjJcl"]), a.ToastType.MESSAGE));
                    }),
                    P(!0),
                    C();
            },
            [P, Q, y.options],
        ),
        K = r.useCallback(() => {
            J(A, { closeAfterSend: !0 });
        }, [J, A]);
    if (T)
        return (0, l.jsx)(i.Modal, {
            title: v.intl.string(v.t.fuFvwx),
            "aria-label": v.intl.string(v.t.fuFvwx),
            transitionState: w.transitionState,
            onClose: _,
            actions: [],
            children: (0, l.jsx)(a.$jN, { className: x.spinnerContainer }),
        });
    if (B)
        return (0, l.jsx)(i.Modal, {
            title: v.intl.string(v.t.fuFvwx),
            "aria-label": v.intl.string(v.t.fuFvwx),
            transitionState: w.transitionState,
            onClose: _,
            actions: [
                {
                    text: v.intl.string(v.t.cpT0Cq),
                    onClick: _,
                    variant: "primary",
                },
            ],
            children: v.intl.string(v.t.yAk8ZT),
        });
    let $ =
            U.length > 0
                ? (0, l.jsx)(g.F, {
                      rowData: U,
                      handleToggleDestination: Y,
                      selectedDestinations: A,
                      disableSelection: F,
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
                              children: v.intl.string(v.t.V6nAfF),
                          }),
                      ],
                  }),
        ee = v.intl.format(v.t.hajTkz, { appName: null == W ? void 0 : W.name });
    null == W && (ee = v.intl.string(v.t.fuFvwx));
    let et = v.intl.format(v.t["DF+q2l"], { appName: null == W ? void 0 : W.name });
    return (
        F && (et = v.intl.format(v.t["/KhyPe"], { count: 5 })),
        (0, l.jsx)(i.Modal, {
            title: ee.toString(),
            subtitle: et,
            "aria-label": ee.toString(),
            transitionState: w.transitionState,
            onClose: G,
            size: "md",
            actions: [
                {
                    text: v.intl.string(v.t.cpT0Cq),
                    onClick: G,
                    variant: "secondary",
                },
                {
                    text: v.intl.string(v.t.TXNS7S),
                    onClick: K,
                    disabled: 0 === I || L,
                    variant: "primary",
                },
            ],
            preview: void 0 !== E ? (0, l.jsx)(m.z, { previewMessage: E }) : null,
            input: (0, l.jsx)(a.E1j, {
                ref: X,
                query: R,
                onChange: H,
                onClear: V,
                placeholder: v.intl.string(v.t["5h0QOP"]),
                "aria-label": v.intl.string(v.t["5h0QOP"]),
                autoFocus: !0,
            }),
            children: $,
        })
    );
}
