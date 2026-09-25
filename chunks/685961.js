(l.d(t, { default: () => lu }), l(321073));
var n = l(477900),
    i = l(582128),
    a = l(731738),
    s = l(935462),
    r = l(430690),
    d = l(964486),
    u = l(95561),
    o = l(915089),
    c = l(807393),
    m = l(923531),
    x = l(17372),
    h = l(369053),
    g = l(2110),
    p = l(297264),
    v = l(815021),
    _ = l(683071),
    j = l(235986),
    b = l(834981),
    A = l(840387),
    f = l(403362),
    N = l(478437),
    S = l(873298),
    E = l(885386),
    T = l(375708);
let y = {
    getTitle: () => T.intl.string(T.t.vJOqMB),
    getDisabledTitle: () => T.intl.string(T.t["B5ZvY+"]),
    getDescription: () => T.intl.string(T.t["43UEUh"]),
    eligibleReportSubtypes: [x.TS.SUB_SPAM],
    eligibleChannelTypes: [N.r.DM, N.r.GROUP_DM],
    onApply: () => E.he.updateSetting(S.he.NON_FRIENDS),
    predicate: () => E.he.getSetting() === S.he.DISABLED,
};
var C = l(444802);
let I = {
    getTitle: () => T.intl.string(T.t.RVX1zT),
    getDisabledTitle: () => T.intl.string(T.t.SYkEBi),
    getDescription: () => T.intl.string(T.t.aqlmp8),
    eligibleReportSubtypes: [x.TS.SUB_GORE, x.TS.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, C.qY)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: l } = (0, C.T4)(),
                    n = {};
                return (
                    e === S.TO.SHOW && (n.goreContentGuilds = S.TO.BLUR),
                    t === S.TO.SHOW && (n.goreContentFriendDm = S.TO.BLUR),
                    l === S.TO.SHOW && (n.goreContentNonFriendDm = S.TO.BLUR),
                    n
                );
            })(),
        ),
    predicate: () => {
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: l } = (0, C.T4)();
        return e === S.TO.SHOW || t === S.TO.SHOW || l === S.TO.SHOW;
    },
};
var k = l(632119);
let M = {
        getTitle: () => T.intl.string(T.t["Gtck/t"]),
        getDisabledTitle: () => T.intl.string(T.t.E6UmXa),
        getDescription: () => T.intl.string(T.t.jcRSp6),
        eligibleReportSubtypes: [
            x.TS.SUB_CSAM,
            x.TS.SUB_LOLI,
            x.TS.SUB_NCP,
            x.TS.SUB_SEXUALLY_DEGRADING_CONTENT,
            x.TS.SUB_UNSOLICITED_PORN,
        ],
        onApply: () =>
            (0, k.Jz)(
                (function () {
                    let {
                            explicitContentGuilds: e,
                            explicitContentFriendDm: t,
                            explicitContentNonFriendDm: l,
                        } = (0, k.C$)(),
                        n = {};
                    return (
                        e === S.TO.SHOW && (n.explicitContentGuilds = S.TO.BLUR),
                        t === S.TO.SHOW && (n.explicitContentFriendDm = S.TO.BLUR),
                        l === S.TO.SHOW && (n.explicitContentNonFriendDm = S.TO.BLUR),
                        n
                    );
                })(),
            ),
        predicate: () => {
            let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: l } = (0, k.C$)();
            return e === S.TO.SHOW || t === S.TO.SHOW || l === S.TO.SHOW;
        },
    },
    D = {
        [x.Wb.SAFETY_DM_SPAM_FILTER]: y,
        [x.Wb.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: M,
        [x.Wb.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: I,
    };
var R = l(825484),
    O = l(821609),
    w = l(39470);
let G = (e) => {
    let t,
        {
            button: l,
            submitting: a,
            disableNext: r,
            onClick: d,
            canNavigateBack: u,
            onBackClicked: o,
            isModeratorReport: c,
            className: m,
        } = e,
        x = i.useRef(null),
        h = null != l && "cancel" !== l.type,
        g = u && l?.type !== "done",
        p = h || g;
    if (
        (i.useEffect(() => {
            (l?.type === "submit" || l?.type === "done") && x.current?.focus();
        }, [l?.type]),
        !p)
    )
        return null;
    let v = T.intl.string(T.t.i4jeWR);
    return (
        l?.type === "submit"
            ? ((t = "critical-primary"), (v = c ? T.intl.string(w.default.ZUyreS) : T.intl.string(T.t["G+vU89"])))
            : l?.type === "next"
              ? (v = T.intl.string(T.t.PDTjLN))
              : l?.type === "cancel" && ((v = T.intl.string(T.t["ETE/oC"])), (t = "secondary")),
        (0, n.jsx)(s.jl, {
            "data-migration-pending": !0,
            direction: j.A.Direction.HORIZONTAL,
            className: m,
            children: (0, n.jsxs)(R.e, {
                fullWidth: !0,
                children: [
                    g &&
                        (0, n.jsx)(O.$, {
                            onClick: o,
                            variant: "secondary",
                            disabled: a,
                            text: T.intl.string(T.t["13/7kX"]),
                        }),
                    h &&
                        (0, n.jsx)(O.$, {
                            onClick: function () {
                                null != l && d(l);
                            },
                            variant: t,
                            disabled: a || r,
                            buttonRef: x,
                            text: v,
                        }),
                ],
            }),
        })
    );
};
var L = l(17928),
    P = l(834730),
    U = l(692617),
    B = l(573435),
    V = l(37537),
    H = l(973172),
    W = l(712440),
    F = l(733110),
    z = l(186272),
    $ = l(935208),
    K = l(948492),
    Q = l(532406);
let Y = (e) => {
    let { entry: t } = e,
        l = (0, V.c)("ApplicationPreviewElement"),
        { name: a } = t,
        s = (0, L.bG)([F.default], () => F.default.getNewestTokenForApplication(t.id)),
        r = t.getIconURL(40) ?? Q,
        d = (0, H.A)({ application: t }),
        u = i.useRef(!1);
    i.useEffect(() => {
        u.current || (W.A.fetch(), (u.current = !0));
    }, []);
    let o = null != s ? $.default.extractTimestamp(s.id) : void 0;
    return (0, n.jsxs)("div", {
        className: K.kL,
        children: [
            (0, n.jsx)(p.D, {
                className: K.wx,
                variant: l ? "heading-sm/medium" : "heading-sm/semibold",
                children: T.intl.string(T.t["aYfK/w"]),
            }),
            (0, n.jsx)("div", {
                className: K.vU,
                children: (0, n.jsxs)("div", {
                    className: K.qi,
                    children: [
                        (0, n.jsx)(B.Ay, {
                            mask: B.Ay.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: K.VE,
                            children: (0, n.jsx)("img", { src: r, alt: "", className: K.Z2 }),
                        }),
                        (0, n.jsxs)("div", {
                            className: K.FS,
                            children: [
                                (0, n.jsx)(P.E, { color: "text-strong", variant: "text-md/medium", children: a }),
                                d.length > 0
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(P.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, z.A)(d.length),
                                              }),
                                              (0, n.jsx)(U.A, { className: K.uM, guilds: d, maxGuilds: 6 }),
                                          ],
                                      })
                                    : (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(P.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: t.bot?.tag,
                                              }),
                                              null != o &&
                                                  (0, n.jsx)(P.E, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: T.intl.formatToPlainString(T.t.C9rUO8, {
                                                          authorizedAt: o,
                                                      }),
                                                  }),
                                          ],
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
};
var q = l(717398),
    J = l(381689),
    Z = l(632738),
    X = l(734057),
    ee = l(994500),
    et = l(562153),
    el = l(652215);
let en = (e) => {
    let { user: t, channelId: l, reportId: a, reportType: s } = e,
        r = (0, L.bG)([ee.A], () => ee.A.isBlocked(t.id), [t.id]),
        d = (0, L.bG)([X.A], () => X.A.getChannel(l), [l]),
        o = i.useMemo(() => et.Ay.getName(d?.guild_id, d?.id, t), [d, t]),
        c = i.useCallback(() => {
            (u.Ay.trackWithMetadata(el.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: a }),
                q.A.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    J.A.showBlockSuccessToast(t.id, l);
                }));
        }, [t, a, l]);
    return (0, n.jsx)(Z.PQ, {
        title: T.intl.formatToPlainString(T.t["Q1o/f3"], { username: o }),
        description: T.intl.string(T.t.G08MKu),
        buttonText: r ? T.intl.string(T.t.ot2tSp) : T.intl.string(T.t["l+7PZY"]),
        buttonDisabled: r,
        onButtonPress: c,
        buttonVariant: "application" === s.name && r ? "secondary" : "critical-primary",
    });
};
var ei = l(435558),
    ea = l(4498);
let es = (e) => {
    let t = (0, ei.flatMap)(e.history, (e) => {
        let {
                destination: [t],
                multiSelect: l,
            } = e,
            n = [null, null],
            i = Object.values(l?.state ?? {});
        return (i.length > 0 && (n[0] = i.join(", ")), "" !== t && (n[1] = t), n);
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, n.jsxs)("div", {
              className: ea.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      className: ea.MR,
                      color: "text-default",
                      variant: "heading-sm/semibold",
                      children: e.isModeratorReport ? T.intl.string(w.default["6mx/DP"]) : T.intl.string(T.t["+3V9Tp"]),
                  }),
                  t.map((e, t) =>
                      (0, n.jsxs)(
                          "div",
                          {
                              className: ea.P,
                              children: [
                                  (0, n.jsx)("div", { className: ea.RL }),
                                  (0, n.jsx)(P.E, { variant: "text-md/normal", className: ea.b, children: e }),
                              ],
                          },
                          `${e}+${t}`,
                      ),
                  ),
              ],
          });
};
var er = l(503698),
    ed = l.n(er),
    eu = l(939249),
    eo = l(865116),
    ec = l(147925),
    em = l(152673),
    ex = l(169535);
let eh = (e) => {
        let { child: t, onClick: l, nodeMap: i } = e,
            [a, s] = t,
            r = (0, L.bG)([eo.Ay], () => eo.Ay.get("iar_show_report_sub_type_labels")),
            d = i[s],
            u = d?.report_type;
        return (0, n.jsxs)(eu.D, {
            className: ed()(ex.Zm, em.lD),
            onClick: () => l(t),
            children: [
                (0, n.jsxs)("div", {
                    className: ex.OH,
                    children: [
                        (0, n.jsx)(P.E, { className: ex.ix, variant: "text-md/normal", children: a }),
                        r &&
                            null != u &&
                            (0, n.jsx)(P.E, {
                                className: ex.Z$,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: u,
                            }),
                    ],
                }),
                (0, n.jsx)(ec.A, { className: ex._2, direction: ec.A.Directions.RIGHT }),
            ],
        });
    },
    eg = (e) => {
        let {
            node: { children: t },
            onSelectChild: l,
            nodeMap: i,
        } = e;
        if (null == t || 0 === t.length) return null;
        let a = t.map((e) => {
            let [t, a] = e;
            return (0, n.jsx)(eh, { child: e, onClick: l, nodeMap: i }, `${t}+${a}`);
        });
        return (0, n.jsx)("div", { className: em.E8, children: a });
    };
(l(323874), l(14289), l(35956));
var ep = l(331322),
    ev = l(95477),
    e_ = l(46054),
    ej = l(478676),
    eb = l.n(ej),
    eA = l(28863);
let ef = {
    ...eb().defaultRules.link,
    react: function (e, t, l) {
        return (0, n.jsx)(eA.Anchor, { href: e.target, target: "_blank", children: t(e.content, l) });
    },
};
var eN = l(210153),
    eS = l(221851);
let eE = ["cdn.discordapp.com", "media.discordapp.net"],
    eT = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    ey = (0, f.m6)()
        ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/
        : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;
function eC(e) {
    try {
        return (new URL(e), !0);
    } catch {
        return !1;
    }
}
function eI(e) {
    return (
        "" !== e &&
        !!eC(e) &&
        !(function (e) {
            try {
                let t = new URL(e);
                if (eE.some((e) => t.hostname === e) || ((0, f.m6)() && eT.test(t.hostname))) return !0;
                return !1;
            } catch {
                return !1;
            }
        })(e)
    );
}
let ek = (e) => {
        let {
                data: { title: t, subtitle: l, placeholder: a, message_link_title: s, message_link_placeholder: r },
                onChange: d,
                initialContentUrl: u,
                initialMessageUrl: o,
                isRequired: c,
            } = e,
            m = i.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: ef }), []),
            [x, h] = i.useState(""),
            [g, p] = i.useState(""),
            [v, _] = i.useState(null),
            [j, b] = i.useState(null),
            [A, f] = i.useState(!1);
        i.useEffect(() => {
            (h(u?.value ?? ""), p(o?.value ?? ""), u?.value != null && "" !== u.value && f(eI(u.value)));
        }, [u, o]);
        let N = i.useCallback(
                (e) => {
                    if ((h(e), "" === e)) {
                        (_(null), f(!1), p(""), b(null), d({ value: e, isValid: !1 }));
                        return;
                    }
                    if (!eC(e)) {
                        (_(T.intl.string(T.t["24xrGb"])), f(!1), p(""), b(null), d({ value: e, isValid: !1 }));
                        return;
                    }
                    let t = eI(e);
                    (f(t),
                        _(null),
                        t
                            ? "" === g
                                ? d({ value: e, isValid: !1 })
                                : ey.test(g)
                                  ? d({ value: e, isValid: !0 }, { value: g, isValid: !0 })
                                  : d({ value: e, isValid: !1 }, { value: g, isValid: !1 })
                            : (p(""), b(null), d({ value: e, isValid: !0 })));
                },
                [d, g],
            ),
            S = i.useCallback(
                (e) => {
                    if ((p(e), "" === e || !ey.test(e))) {
                        (b(T.intl.string(T.t["24xrGb"])), d({ value: x, isValid: !1 }, { value: e, isValid: !1 }));
                        return;
                    }
                    (b(null), d({ value: x, isValid: !0 }, { value: e, isValid: !0 }));
                },
                [d, x],
            );
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsxs)(ep.B, {
                    gap: 16,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eS.QB,
                            children: [
                                null != t &&
                                    (0, n.jsx)("div", {
                                        className: eS.QB,
                                        children: (0, n.jsxs)(P.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [t, c && (0, n.jsx)("span", { className: eN.m, children: "*" })],
                                        }),
                                    }),
                                (0, n.jsx)(ev.k, { onChange: N, value: x, error: v, placeholder: a, autoFocus: !0 }),
                            ],
                        }),
                        A &&
                            null != s &&
                            (0, n.jsxs)("div", {
                                className: eS.QB,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: eS.QB,
                                        children: (0, n.jsxs)(P.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [s, c && (0, n.jsx)("span", { className: eN.m, children: "*" })],
                                        }),
                                    }),
                                    (0, n.jsx)(ev.k, { onChange: S, value: g, error: j, placeholder: r }),
                                ],
                            }),
                    ],
                }),
                null != l && (0, n.jsx)(P.E, { variant: "text-xs/normal", children: m(l) }),
            ],
        });
    },
    eM = (e) => {
        let { element: t, onChange: l, state: a } = e,
            s = t.name,
            r = `${t.name}_message_link`,
            d = i.useCallback(
                (e, t) => {
                    null != t ? l(s, e.value, e.isValid && t.isValid, r, t.value) : l(s, e.value, e.isValid, r, void 0);
                },
                [l, s, r],
            );
        return (0, n.jsx)(ek, {
            data: t.data,
            onChange: d,
            initialContentUrl: a?.[s],
            initialMessageUrl: a?.[r],
            isRequired: t.should_submit_data,
        });
    };
var eD = l(890497),
    eR = l(423764);
let eO = (e) => {
    let { element: t, onChange: l, state: a } = e,
        s = t.name,
        { title: r, options: d } = t.data,
        u = a?.[s]?.value ?? void 0,
        [o, c] = i.useState(u);
    i.useEffect(() => {
        c(u);
    }, [u]);
    let m = i.useMemo(
            () =>
                d
                    .map((e) => {
                        let t = e.label;
                        try {
                            t = (0, eR.Gw)(e.value);
                        } catch {}
                        return { id: e.id ?? e.value, value: e.value, label: t };
                    })
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [d],
        ),
        x = i.useCallback(
            (e) => {
                null != e && (c(e), l(s, e));
            },
            [l, s],
        );
    return (0, n.jsx)("div", {
        className: eS.QB,
        children: (0, n.jsx)(eD.Z, {
            label: r,
            value: o,
            required: t.should_submit_data,
            onSelectionChange: x,
            options: m,
            selectionMode: "single",
            maxOptionsVisible: 4,
            fullWidth: !0,
        }),
    });
};
var ew = l(933958),
    eG = l(869003);
let eL = (e) => {
    let { application: t, reportId: l } = e,
        [a, s] = i.useState(!1),
        r = (0, L.bG)([F.default], () => F.default.getNewestTokenForApplication(t.id));
    i.useEffect(() => {
        null != r && s(!0);
    }, [r]);
    let d = i.useRef(!1);
    i.useEffect(() => {
        d.current || (W.A.fetch(), (d.current = !0));
    }, []);
    let o = (0, L.bG)([ew.Ay], () => ew.Ay.getSelfEmbeddedActivities()),
        c = i.useCallback(() => {
            if (
                (s(!1),
                u.Ay.trackWithMetadata(el.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: l,
                }),
                null == r)
            )
                return;
            W.A.delete(r.id);
            let e = o.get(t.id);
            null != e && eG.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
        }, [t.id, r, o, l]);
    return null == t
        ? null
        : (0, n.jsx)(Z.PQ, {
              title: T.intl.string(T.t.ygG62M),
              description: T.intl.string(T.t.S51EKg),
              buttonText: a ? T.intl.string(T.t.xXpoGV) : T.intl.string(T.t.JsiUnL),
              buttonDisabled: !a,
              onButtonPress: c,
              buttonVariant: a ? "critical-primary" : "secondary",
          });
};
var eP = l(148494),
    eU = l(576705);
let eB = (e) => {
    let { message: t, reportId: l } = e,
        [a, s] = i.useState(!1),
        r = i.useCallback(() => {
            (s(!0),
                u.Ay.trackWithMetadata(el.HAw.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: l }),
                eP.A.deleteMessage(t.getChannelId(), t.id));
        }, [t, l]),
        d = i.useMemo(() => {
            let e = X.A.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== el.rbe.DM &&
                e.type !== el.rbe.GROUP_DM &&
                eU.A.canWithPartialContext(el.xBc.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && d
        ? (0, n.jsx)(Z.PQ, {
              title: T.intl.string(T.t.c9BHL9),
              description: T.intl.string(T.t.dK8S0w),
              buttonText: a ? T.intl.string(T.t.f3pnLL) : T.intl.string(T.t.ch2xbt),
              buttonDisabled: a,
              buttonVariant: "critical-primary",
              onButtonPress: r,
          })
        : null;
};
var eV = l(691885);
let eH = (e) => {
        let { element: t, onChange: l, initialOption: a } = e,
            [s, r] = i.useState("");
        i.useEffect(() => {
            r(a ?? "");
        }, [a]);
        let d = t.name,
            { title: u, options: o } = t.data,
            c = i.useMemo(() => o.map((e) => ({ ...e, id: e.id ?? e.value })), [o]),
            m = i.useCallback(
                (e) => {
                    null != e && (r(e), l(e));
                },
                [l],
            );
        return (0, n.jsx)(
            "div",
            {
                className: eS.QB,
                children: (0, n.jsx)(eV.l, {
                    label: u,
                    value: s,
                    required: t.should_submit_data,
                    onSelectionChange: m,
                    options: c,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            },
            d,
        );
    },
    eW = (e) => {
        let { elements: t, onChange: l, state: i } = e,
            a = t.map((e) => {
                let t = e.name;
                return (0, n.jsx)(
                    eH,
                    { element: e, initialOption: i?.[t]?.value ?? void 0, onChange: (e) => l(t, e) },
                    t,
                );
            });
        return (0, n.jsx)("div", { children: a });
    };
var eF = l(509434),
    ez = l(975807),
    e$ = l(601576);
let eK = (e) => {
    let {
        data: { url: t, link_text: l, link_description: i, is_localized: a },
    } = e;
    return a
        ? (0, n.jsxs)(eu.D, {
              role: "link",
              className: ed()(e$.$J, em.lD),
              onClick: function () {
                  (0, ez.A)(t);
              },
              children: [
                  (0, n.jsxs)("div", {
                      className: e$.xU,
                      children: [
                          (0, n.jsx)(P.E, { className: e$.__invalid_linkText, variant: "text-md/normal", children: l }),
                          null != i &&
                              "" !== i &&
                              (0, n.jsx)(P.E, { variant: "text-md/normal", color: "text-muted", children: i }),
                      ],
                  }),
                  (0, n.jsx)(eF.I, { size: "sm", color: "currentColor", className: e$.wP }),
              ],
          })
        : null;
};
function eQ(e) {
    let { elements: t } = e,
        l = (0, V.c)("ExternalLinksElement");
    if (
        null == t ||
        0 === t.length ||
        null ==
            t.find((e) => {
                let { data: t } = e;
                return t.is_localized;
            })
    )
        return null;
    let i = t.map((e, t) => {
            let { data: l } = e;
            return (0, n.jsx)(eK, { data: l }, `external-link+${t}`);
        }),
        a = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, n.jsxs)("div", {
        className: ed()(e$.nV, em.E8),
        children: [
            !a &&
                (0, n.jsx)(p.D, {
                    variant: l ? "heading-sm/medium" : "heading-sm/semibold",
                    color: "text-default",
                    className: e$.wx,
                    children: T.intl.string(T.t.hvVgAZ),
                }),
            i,
        ],
    });
}
var eY = l(103557);
let eq = (e) => {
        let {
                data: {
                    title: t,
                    subtitle: l,
                    description: a,
                    placeholder: s,
                    rows: r,
                    character_limit: d,
                    pattern: u,
                },
                onChange: o,
                initialText: c,
                isRequired: m,
            } = e,
            x = i.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: ef }), []),
            [h, g] = i.useState(""),
            [p, v] = i.useState(null);
        i.useEffect(() => {
            g(c?.value ?? "");
        }, [c]);
        let _ = i.useCallback(
            (e) => {
                let t = null != u ? new RegExp(u) : null;
                null == t || t.test(e)
                    ? null != e && (v(null), g(e), o({ value: e, isValid: !0 }))
                    : (v(T.intl.string(T.t["24xrGb"])), o({ value: e, isValid: !1 }));
            },
            [o, u],
        );
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsxs)("div", {
                    className: eS.QB,
                    children: [
                        null != t &&
                            (0, n.jsxs)(P.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: [t, m && (0, n.jsx)("span", { className: eN.m, children: "*" })],
                            }),
                        null != a &&
                            (0, n.jsx)("div", {
                                className: eS.a5,
                                children: (0, n.jsx)(P.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: a,
                                }),
                            }),
                    ],
                }),
                1 === r
                    ? (0, n.jsx)(ev.k, { maxLength: d, onChange: _, value: h, error: p, placeholder: s })
                    : (0, n.jsx)(eY.f, { maxLength: d, onChange: _, value: h, error: p, rows: r, placeholder: s }),
                null != l &&
                    (0, n.jsx)("div", {
                        className: eS.a5,
                        children: (0, n.jsx)(P.E, { variant: "text-xs/normal", color: "text-muted", children: x(l) }),
                    }),
            ],
        });
    },
    eJ = (e) => {
        let { elements: t, onChange: l, state: i } = e,
            a = t.map((e) => {
                let t = e.name;
                return (0, n.jsx)(
                    eq,
                    {
                        data: e.data,
                        onChange: (e) => l(t, e.value, e.isValid),
                        initialText: i?.[t] ?? void 0,
                        isRequired: e.should_submit_data,
                    },
                    t,
                );
            });
        return (0, n.jsx)("div", { className: eN.k, children: a });
    };
var eZ = l(548118),
    eX = l(71393),
    e0 = l(458068);
let e1 = (e) => {
    let { entry: t } = e,
        l = (0, V.c)("GuildDirectoryEntryPreviewElement"),
        i = X.A.getChannel(t.channelId);
    if (null == i) return null;
    let a = eX.A.getGuild(i.guild_id);
    return null == a
        ? null
        : (0, n.jsxs)("div", {
              className: e0.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      className: e0.wx,
                      variant: l ? "heading-sm/medium" : "heading-sm/semibold",
                      children: T.intl.string(T.t.nTe4HC),
                  }),
                  (0, n.jsxs)("div", {
                      className: e0.bo,
                      children: [
                          (0, n.jsxs)("div", {
                              className: e0.mo,
                              children: [
                                  (0, n.jsx)(eZ.Ay, { guild: a, size: eZ.Ay.Sizes.MINI, className: e0.xG }),
                                  (0, n.jsx)(P.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: a.name,
                                  }),
                              ],
                          }),
                          (0, n.jsx)(P.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
var e3 = l(486020),
    e4 = l(695451);
let e8 = (e) => {
    let { entry: t } = e,
        l = (0, V.c)("GuildDiscoveryPreviewElement"),
        { id: i, icon: a, name: s } = t,
        r = e3.Ay.getGuildIconURL({ id: i, icon: a, size: 32 }) ?? void 0;
    return (0, n.jsxs)("div", {
        className: e4.kL,
        children: [
            (0, n.jsx)(p.D, {
                className: e4.wx,
                variant: l ? "heading-sm/medium" : "heading-sm/semibold",
                children: T.intl.string(T.t.nTe4HC),
            }),
            (0, n.jsx)("div", {
                className: e4.bo,
                children: (0, n.jsxs)("div", {
                    className: e4.OA,
                    children: [
                        (0, n.jsx)(B.Ay, {
                            mask: B.Ay.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: e4.$d,
                            children: (0, n.jsx)("img", { src: r, alt: "", className: e4.$f }),
                        }),
                        (0, n.jsx)(P.E, { color: "text-default", variant: "text-sm/normal", children: s }),
                    ],
                }),
            }),
        ],
    });
};
var e2 = l(120337);
let e7 = (e) => {
    let { guild: t } = e,
        l = (0, V.c)("GuildPreviewElement");
    return (0, n.jsxs)("div", {
        className: e2.kL,
        children: [
            (0, n.jsx)(p.D, {
                className: e2.wx,
                variant: l ? "heading-sm/medium" : "heading-sm/semibold",
                children: T.intl.string(T.t["0ox7Hq"]),
            }),
            (0, n.jsx)("div", {
                className: e2.bo,
                children: (0, n.jsxs)("div", {
                    className: e2.OA,
                    children: [
                        (0, n.jsx)("div", {
                            className: e2.$f,
                            children: (0, n.jsx)(eZ.Ay, { guild: t, size: eZ.Ay.Sizes.LARGE }),
                        }),
                        (0, n.jsx)("div", {
                            children: (0, n.jsx)(P.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: t.name,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
};
var e5 = l(285496);
let e6 = (e) => {
    let { event: t } = e,
        l = (0, V.c)("GuildScheduledEventPreviewElement"),
        i = (0, L.bG)([eX.A], () => eX.A.getGuild(t.guild_id));
    return null == i
        ? null
        : (0, n.jsxs)("div", {
              className: e5.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      className: e5.wx,
                      variant: l ? "heading-sm/medium" : "heading-sm/semibold",
                      children: T.intl.string(T.t.SDTOL7),
                  }),
                  (0, n.jsxs)("div", {
                      className: e5.bo,
                      children: [
                          (0, n.jsxs)("div", {
                              className: e5.OA,
                              children: [
                                  (0, n.jsx)(eZ.Ay, { guild: i, size: eZ.Ay.Sizes.MINI, className: e5.$f }),
                                  (0, n.jsx)(P.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: i.name,
                                  }),
                              ],
                          }),
                          (0, n.jsx)(P.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
var e9 = l(101405);
let te = (e) => {
        let {
                node: { header: t, subheader: l, button: a },
                isModeratorReport: s,
                isTidaReport: r = !1,
                hideTitle: d = !1,
            } = e,
            u = a?.type === "submit",
            o = i.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: ef }), []);
        return (0, n.jsxs)("div", {
            className: e9.N,
            children: [
                d || null == t || "" === t
                    ? null
                    : (0, n.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                null != l && "" !== t
                    ? (0, n.jsx)(P.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: e9.m,
                          children: o(l),
                      })
                    : null,
                u &&
                    !s &&
                    !r &&
                    (0, n.jsx)(P.E, { variant: "text-sm/normal", children: T.intl.format(T.t.Q0tSKT, {}) }),
            ],
        });
    },
    tt = (e) => {
        let { user: t, channelId: l, reportId: a } = e,
            { isIgnored: s, isBlocked: r } = (0, L.cf)(
                [ee.A],
                () => ({ isIgnored: ee.A.isIgnored(t.id), isBlocked: ee.A.isBlocked(t.id) }),
                [t],
            ),
            d = (0, L.bG)([X.A], () => X.A.getChannel(l), [l]),
            o = i.useMemo(() => et.Ay.getName(d?.guild_id, d?.id, t), [d, t]),
            c = i.useCallback(() => {
                (u.Ay.trackWithMetadata(el.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: a }),
                    q.A.ignoreUser(t.id, "web_iar_ignore_user_element", l));
            }, [t, a, l]),
            m = i.useMemo(() => s || r, [s, r]);
        return (0, n.jsx)(Z.PQ, {
            title: T.intl.formatToPlainString(T.t.U3yyFs, { username: o }),
            description: T.intl.string(T.t.naWE6W),
            buttonText: m ? T.intl.string(T.t.nDdxOG) : T.intl.string(T.t.ICYEfY),
            buttonDisabled: m,
            onButtonPress: c,
        });
    };
var tl = l(512950),
    tn = l(672874);
let ti = (e) => {
        let {
                node: { info: t },
            } = e,
            l = i.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: ef }), []);
        return null == t ? null : (0, n.jsx)(tl.p, { className: tn.e, messageType: tl.Y.INFO, children: l(t) });
    },
    ta = e_.A.reactParserFor({ ...e_.A.defaultRules, link: ef }),
    ts = (e) => {
        let { element: t } = e,
            { body: l, notice_type: i } = t.data;
        return (0, n.jsx)(_.w, { type: i, children: ta(l) });
    };
var tr = l(314116),
    td = l(468689);
let tu = (e) => {
    let { guildId: t, reportId: l } = e,
        [a, s] = i.useState(!1),
        r = eX.A.getGuild(t),
        d = null != r;
    i.useEffect(() => {
        s(!d);
    }, [d]);
    let o = i.useCallback(() => {
        (s(!0),
            u.Ay.trackWithMetadata(el.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, { guild_id: t, report_id: l }),
            td.A.leaveGuild(t));
    }, [t, l]);
    return null == r
        ? null
        : (0, n.jsx)(Z.PQ, {
              title: T.intl.string(T.t.cU96ip),
              description: T.intl.formatToPlainString(T.t["26mR6/"], { guildName: r?.name }),
              buttonText: a ? T.intl.string(T.t["9Ak99h"]) : T.intl.string(T.t.F3qExp),
              buttonDisabled: a,
              buttonVariant: "critical-primary",
              onButtonPress: function () {
                  null != r &&
                      (0, tr.A)({
                          title: T.intl.formatToPlainString(T.t["1GX6P/"], { name: r.name }),
                          subtitle: T.intl.format(T.t.ZEXC0r, { name: r.name }),
                          confirmText: T.intl.string(T.t.J2TBi3),
                          onConfirm: o,
                      });
              },
          });
};
var to = l(364522),
    tc = l(387408),
    tm = l(763754),
    tx = l(491182),
    th = l(438729),
    tg = l(622868),
    tp = l(448368),
    tv = l(439762),
    t_ = l(838541),
    tj = l(660845);
let tb = (e) => {
    let { message: t } = e,
        l = (0, V.c)("MessagePreviewElement"),
        a = (0, tm.Ay)(t),
        s = (0, L.bG)([X.A], () => X.A.getChannel(t.channel_id)),
        r = i.useMemo(() => (0, tc.A)(t), [t]),
        { content: d } = (0, tv.A)(r, { hideSimpleEmbedContent: !1 }),
        u = E.hH.useSetting(),
        o = i.useCallback(() => {
            let { leadingIcon: e, trailingIcon: l } = (0, tp.o)(t, d, !1, !1, "", {
                leadingIconClass: tj.$r,
                trailingIconClass: tj.$r,
                iconSize: t_.eJ,
            });
            return (0, n.jsxs)("div", {
                className: tj.hQ,
                children: [e, (0, n.jsx)(th.Ay, { message: t, content: d, compact: u }), l],
            });
        }, [t, d, u]);
    return null == s
        ? null
        : (0, n.jsxs)("div", {
              className: tj.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      className: tj.wx,
                      variant: l ? "heading-sm/medium" : "heading-sm/semibold",
                      children: T.intl.string(T.t.iouM3a),
                  }),
                  (0, n.jsx)(to.Ip, {
                      className: tj.PI,
                      children: (0, n.jsx)(tx.A, {
                          childrenMessageContent: o(),
                          childrenHeader: (0, n.jsx)(tg.Ay, {
                              message: t,
                              channel: s,
                              author: a,
                              guildId: s.guild_id,
                              disableGuildTagProfile: !0,
                          }),
                          disableInteraction: !0,
                          author: a,
                      }),
                  }),
              ],
          });
};
var tA = l(150934),
    tf = l(427831);
let tN = (e) => {
        let { onChange: t, label: l, subtitle: i, selected: a } = e;
        return (0, n.jsx)("div", {
            className: tf.yc,
            children: (0, n.jsx)(tA.S, { checked: a, onChange: t, label: l, description: i }),
        });
    },
    tS = (e) => {
        let { element: t, title: l, state: i, onChange: a } = e;
        if (t?.type !== "checkbox") return null;
        let { data: s } = t;
        return (0, n.jsxs)("div", {
            children: [
                null != l &&
                    (0, n.jsxs)(P.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: tf.DD,
                        children: [l, t.should_submit_data && (0, n.jsx)("span", { className: tf.mw, children: "*" })],
                    }),
                s.map((e, t) => {
                    let [l, s, r] = e;
                    return (0, n.jsx)(
                        tN,
                        { onChange: () => a(l, s), selected: l in i, label: s, subtitle: r },
                        `${t}+button`,
                    );
                }),
            ],
        });
    };
var tE = l(832712),
    tT = l(543465),
    ty = l(477427);
let tC = (e) => {
    let { user: t, channelId: l, reportId: a } = e,
        s = X.A.getDMFromUserId(t.id),
        r = (0, L.bG)([X.A], () => X.A.getChannel(l), [l]),
        d = i.useMemo(() => et.Ay.getName(r?.guild_id, r?.id, t), [r, t]),
        o = (0, L.bG)([tT.Ay], () => (null == s ? null : tT.Ay.isChannelMuted(null, s))),
        [c, m] = i.useState(o ?? !1),
        x = i.useCallback(() => {
            null != s &&
                (m(!0),
                u.Ay.trackWithMetadata(el.HAw.IAR_MUTE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: a }),
                tE.A.updateChannelOverrideSettings({
                    guildId: null,
                    channelId: s,
                    settings: { muted: !0 },
                    label: ty.fd.Muted,
                }),
                J.A.showMuteSuccessToast(t.id, l));
        }, [s, l, t, a]);
    return (0, n.jsx)(Z.PQ, {
        title: T.intl.formatToPlainString(T.t.TRp5wR, { username: d }),
        description: T.intl.string(T.t["yM/+AJ"]),
        buttonText: c ? T.intl.string(T.t.E8x4Nj) : T.intl.string(T.t.HITUcR),
        buttonDisabled: c,
        onButtonPress: x,
    });
};
var tI = l(144228),
    tk = l(580652);
let tM = (e) => {
    let { element: t, onChange: l, state: a } = e,
        s = t.name,
        { title: r, options: d } = t.data,
        u = a?.[s]?.value ?? void 0,
        [o, c] = i.useState(u);
    i.useEffect(() => {
        c(u);
    }, [u]);
    let m = i.useMemo(() => d.map((e) => ({ name: e.label, value: e.value })), [d]),
        x = i.useCallback(
            (e) => {
                null != e && (c(e), l(s, e));
            },
            [l, s],
        );
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsxs)(P.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: tk.P,
                children: [r, t.should_submit_data && (0, n.jsx)("span", { className: tk.m, children: "*" })],
            }),
            (0, n.jsx)(tI.z, { value: o, onChange: x, options: m }),
        ],
    });
};
var tD = l(692612);
function tR(e) {
    let { children: t, title: l } = e;
    return (0, n.jsxs)("div", {
        className: tD.kL,
        children: [
            (0, n.jsx)(p.D, {
                className: tD.wx,
                variant: "text-sm/semibold",
                children: l ?? T.intl.string(T.t["k+QA9N"]),
            }),
            (0, n.jsx)("div", { className: tD.uk, children: t }),
        ],
    });
}
var tO = l(157559),
    tw = l(794967),
    tG = l(309010);
let tL = (e) => {
    let { application: t, reportId: l } = e,
        [a, s] = i.useState(!1),
        [r, d] = i.useState(!1),
        o = (0, L.bG)([tG.Ay, X.A], () => X.A.getChannel(tG.Ay.getChannelId())?.guild_id),
        [c, m] = i.useState(null);
    (i.useEffect(() => {
        null != c && (s(!0), d(!0));
    }, [c]),
        i.useEffect(() => {
            if (null == o) return;
            let e = !1;
            return (
                (async () => {
                    let l = null;
                    try {
                        l = await (0, tw.c)(o);
                    } catch {}
                    if (e || null == l) return;
                    let n = l.find((e) => e.application?.id === t.id);
                    null != n && m(n);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [o, t.id]));
    let x = i.useCallback(() => {
            (d(!1),
                u.Ay.trackWithMetadata(el.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: o,
                    application_id: t.id,
                    report_id: l,
                }),
                null != o &&
                    null != c &&
                    td.A.disableIntegration(o, c.id).catch(() => {
                        tO.A.show({ title: T.intl.string(T.t.wYqMmI), body: T.intl.string(T.t.A4Mnst) });
                    }));
        }, [t.id, o, c, l]),
        h = (0, L.bG)([eU.A, eX.A], () => {
            let e = eX.A.getGuild(o);
            if (null == e) return !1;
            let l = eU.A.can(el.xBc.MANAGE_GUILD, e),
                n = null == t.bot || eU.A.canManageUser(el.xBc.MANAGE_GUILD, t.bot.id, e);
            return l && n;
        });
    return null != t && null != o && a && h
        ? (0, n.jsx)(Z.PQ, {
              title: T.intl.string(T.t["WV/CsH"]),
              description: T.intl.string(T.t["FlcC+3"]),
              buttonText: r ? T.intl.string(T.t.aCJlq4) : T.intl.string(T.t["6I1F3i"]),
              buttonDisabled: !r,
              onButtonPress: x,
              buttonVariant: r ? "critical-primary" : "secondary",
          })
        : null;
};
var tP = l(123292),
    tU = l(780964),
    tB = l(766075),
    tV = l(633423);
function tH(e) {
    let { title: t, description: l, onButtonClick: a, trackSettingsUpsellsAction: s } = e,
        [r, u] = i.useState(!1);
    return (
        (0, d.Ay)(() => {
            s(h.lJ.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, n.jsx)(Z.PQ, {
            title: t,
            description: l,
            buttonText: r ? T.intl.string(T.t["h+WsPb"]) : T.intl.string(T.t.A8t4Nf),
            buttonDisabled: r,
            onButtonPress: () => {
                (a(), u(!0), s(h.lJ.SETTINGS_UPSELLS_APPLY_CLICKED));
            },
        })
    );
}
function tW(e) {
    var t;
    let { settingsUpsells: l, channelId: a, onModalClose: s, reportId: r, reportType: d, reportSubType: o } = e,
        c = (0, L.bG)([X.A], () => X.A.getChannel(a)),
        m =
            ((t = c?.type),
            i.useMemo(
                () =>
                    l
                        .map((e) => {
                            var l, n;
                            let i;
                            return (
                                (l = e),
                                (n = t),
                                !(function (e, t) {
                                    let { predicate: l, eligibleChannelTypes: n } = e,
                                        i = null == l || l?.() === !0,
                                        a = null == t || null == n || n.includes(t);
                                    return i && a;
                                })((i = D[l]), n)
                                    ? null
                                    : i
                            );
                        })
                        .filter(f.Vq),
                [l, t],
            )),
        x = (0, h.Mw)(d, o, r);
    return 0 === m.length
        ? null
        : (0, n.jsxs)("div", {
              className: tV.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      variant: "text-sm/semibold",
                      className: tV.wx,
                      children: T.intl.string(T.t["1yxTIJ"]),
                  }),
                  (0, n.jsx)("div", {
                      className: tV.uk,
                      children: m.map((e, t) => {
                          let { getTitle: i, getDescription: a, onApply: s } = e;
                          return (0, n.jsx)(
                              tH,
                              { title: i(), description: a(), onButtonClick: s, trackSettingsUpsellsAction: x(l[t]) },
                              t,
                          );
                      }),
                  }),
                  (0, n.jsx)(tP.Q, {
                      text: T.intl.string(T.t.olebGx),
                      onClick: () => {
                          ((0, tB.openUserSettings)(tU.X.MESSAGING_PERMISSIONS_PANEL),
                              s(),
                              u.Ay.trackWithMetadata(el.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: r,
                                  report_type: d.name,
                                  report_subtype: o,
                                  action: h.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              }));
                      },
                  }),
              ],
          });
}
var tF = l(691540),
    tz = l(857250),
    t$ = l(97483),
    tK = l(899847);
let tQ = (e) => {
    let { parents: t } = e,
        [l, a] = i.useState(!1),
        s = i.useCallback(() => {
            (0, tK.Xz)()
                .then(() => {
                    ((0, tF.P0)(
                        (0, tz.o)(
                            T.intl.formatToPlainString(T.t.wr4IT5, {
                                count: t.length,
                                parent1: t[0].username,
                                parent2: t[1]?.username,
                                parent3: t[2]?.username,
                            }),
                            t$.Ck.SUCCESS,
                        ),
                    ),
                        a(!0));
                })
                .catch(() => {
                    J.A.showFailedToast();
                });
        }, [t]);
    if (0 === t.length) return null;
    let r = T.intl.formatToPlainString(T.t.HqyWeO, {
        count: t.length,
        parent1: t[0].username,
        parent2: t[1]?.username,
        parent3: t[2]?.username,
    });
    return (0, n.jsx)(Z.PQ, {
        title: r,
        description: T.intl.string(T.t["5l/hlt"]),
        buttonText: l ? T.intl.string(T.t.ntuuk7) : T.intl.string(T.t["sYdX/H"]),
        buttonDisabled: l,
        onButtonPress: s,
    });
};
var tY = l(737973);
let tq = (e) => {
    let { stageInstance: t } = e,
        l = (0, V.c)("StageChannelPreviewElement"),
        i = eX.A.getGuild(t.guild_id);
    return null == i
        ? null
        : (0, n.jsxs)("div", {
              className: tY.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      className: tY.wx,
                      variant: l ? "heading-sm/medium" : "heading-sm/semibold",
                      children: T.intl.string(T.t.InbJ8x),
                  }),
                  (0, n.jsxs)("div", {
                      className: tY.bo,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tY.OA,
                              children: [
                                  (0, n.jsx)(eZ.Ay, { guild: i, size: eZ.Ay.Sizes.MINI, className: tY.$f }),
                                  (0, n.jsx)(P.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: i.name,
                                  }),
                              ],
                          }),
                          (0, n.jsx)(P.E, { variant: "text-md/semibold", color: "text-strong", children: t.topic }),
                      ],
                  }),
              ],
          });
};
var tJ = l(810685),
    tZ = l(336621);
let tX = (e) => {
    let { element: t } = e;
    return t?.type !== "success"
        ? null
        : (0, n.jsx)("div", {
              className: tZ.t,
              children: (0, n.jsx)(tJ.M, { alt: "", ariaHidden: !0, role: "presentation" }),
          });
};
var t0 = l(709531);
function t1(e) {
    let {
            element: {
                data: { header: t, body: l, is_localized: a },
            },
        } = e,
        s = i.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: ef }), []);
    return a && (null != t || null != l)
        ? (0, n.jsxs)("div", {
              children: [
                  null != t &&
                      (0, n.jsx)(p.D, {
                          variant: "heading-sm/semibold",
                          color: "text-default",
                          className: t0.w,
                          children: t,
                      }),
                  null != l &&
                      (0, n.jsx)(P.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: t0.r,
                          children: s(l),
                      }),
              ],
          })
        : null;
}
var t3 = l(957565),
    t4 = l(65489);
function t8(e) {
    let {
            element: {
                data: { title: t, body: l, sms: a, is_localized: s },
            },
        } = e,
        [r, d] = i.useState(!1),
        u = i.useRef(e_.A.reactParserFor(e_.A.defaultRules));
    return s
        ? (0, n.jsxs)("div", {
              className: t4.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: t4.wx,
                      children: t,
                  }),
                  (0, n.jsx)(P.E, { variant: "text-sm/normal", className: t4.G3, children: u.current(l) }),
                  (0, n.jsx)("div", {
                      children: (0, n.jsxs)("div", {
                          className: ed()(t4.GH, { [t4.pG]: r }),
                          children: [
                              (0, n.jsx)(P.E, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: t4.Kk,
                                  children: a,
                              }),
                              (0, n.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: t4.__invalid_trailingButton,
                                  children: (0, n.jsx)(O.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: r ? T.intl.string(T.t.t5VZ88) : T.intl.string(T.t.OpuAlK),
                                      onClick: function () {
                                          (0, t3.C)(a, () => d(!0));
                                      },
                                  }),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
var t2 = l(778712),
    t7 = l(730134),
    t5 = l(243899);
let t6 = (e) => {
    let { user: t } = e,
        l = (0, V.c)("UserPreviewElement");
    return (0, n.jsxs)("div", {
        className: t5.kL,
        children: [
            (0, n.jsx)(p.D, {
                className: t5.wx,
                variant: l ? "heading-sm/medium" : "heading-sm/semibold",
                children: T.intl.string(T.t.Rsth7z),
            }),
            (0, n.jsx)("div", {
                className: t5.f1,
                children: (0, n.jsxs)("div", {
                    className: t5.eF,
                    children: [
                        (0, n.jsx)(t7.A, { className: t5.Hk, user: t, size: t2._3.SIZE_40 }),
                        (0, n.jsxs)("div", {
                            children: [
                                null != t.globalName &&
                                    (0, n.jsx)(P.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: t.globalName,
                                    }),
                                (0, n.jsx)(P.E, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    children: t.username,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
};
var t9 = l(763432),
    le = l(287809),
    lt = l(818972);
let ll = (e) => {
        let { widget: t, userId: l } = e,
            i = (0, V.c)("WidgetPreviewElement"),
            a = (0, L.bG)([le.default], () => le.default.getUser(l));
        return null == a
            ? null
            : (0, n.jsxs)("div", {
                  className: lt.k,
                  children: [
                      (0, n.jsx)(p.D, {
                          className: lt.w,
                          variant: i ? "heading-sm/medium" : "heading-sm/semibold",
                          children: T.intl.string(T.t.SpsnDY),
                      }),
                      (0, n.jsx)(t9.u, { widget: t, user: a, allowEditing: !1, disableInteraction: !0 }),
                  ],
              });
    },
    ln = ["ignore_users", "block_users", "leave_guild", "delete_message", "deauthorize_app", "share_with_parents"],
    li = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function la(e, t) {
    let { elements: l } = e;
    return l.find((e) => {
        let { type: l } = e;
        return l === t;
    });
}
function ls(e, t) {
    let { elements: l } = e;
    return l.filter((e) => {
        let { type: l } = e;
        return l === t;
    });
}
let lr = (e) => {
    let {
            node: t,
            reportType: l,
            reportSubType: a,
            history: r,
            onSelectChild: d,
            onModalClose: u,
            onSubmit: o,
            onNavigateToNode: c,
            multiSelect: m,
            reportId: f,
            textInput: N,
            initialErrorMessage: S,
        } = e,
        E = la(t, "checkbox"),
        y = la(t, "text_line_resource"),
        C = ls(t, "external_link"),
        I = ls(t, "free_text"),
        k = ls(t, "dropdown"),
        M = la(t, "country_select"),
        R = la(t, "inline_notice"),
        O = ls(t, "radio_group"),
        L = la(t, "text"),
        P = la(t, "content_url_input"),
        U = g.x.REPORT_TO_MOD.has(l.name),
        B = l.name === x.tY.MEDIA_TAKEDOWN,
        [V, H] = i.useState(!1),
        [W, F] = i.useState(!1),
        [z, $] = i.useState(S ?? ""),
        [K, Q] = i.useState(() => ({})),
        [q, J] = i.useState(() => ({})),
        Z = i.useRef(null),
        X = i.useMemo(() => ("message" === l.name ? l.record.channel_id : void 0), [l]),
        ee = i.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != I || null != k || null != M || O.length > 0 || null != P ? q : void 0,
                multiSelect: null != E ? { name: E.name, state: K } : void 0,
            }),
            [t, I, k, M, O, P, E, K, q],
        ),
        et = i.useMemo(
            () =>
                (0, h.ks)(
                    {
                        freeTextElements: I,
                        dropdownElements: k,
                        countrySelectElement: M,
                        radioGroupElements: O,
                        multiSelectElement: E,
                        contentUrlInputElement: P,
                    },
                    { textInput: q, multiSelect: K },
                ),
            [I, k, M, O, E, P, q, K],
        ),
        ei = i.useCallback(
            (e, t) => {
                let l = { ...K };
                (e in K ? delete l[e] : (l[e] = t), Q(l));
            },
            [K],
        ),
        ea = i.useCallback(
            function (e, t) {
                let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0,
                    a = { ...q };
                ((a[e] = { value: t, isValid: l }),
                    null != n && (null != i && "" !== i ? (a[n] = { value: i, isValid: l }) : delete a[n]),
                    J(a));
            },
            [q],
        ),
        er = i.useCallback(
            (e) => {
                d(ee(e));
            },
            [d, ee],
        );
    (i.useEffect(() => {
        (null != m && Q(m), null != N && J(N));
    }, [m, N]),
        i.useEffect(() => {
            null != S && $(S);
        }, [S]),
        i.useEffect(() => {
            if ("" !== z) {
                let e = setTimeout(() => {
                    let e = Z.current?.parentElement;
                    null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
                }, 50);
                return () => clearTimeout(e);
            }
        }, [z]),
        i.useEffect(() => {
            if (null != E) {
                let e = E.data;
                if (null != e) for (let [t, l, n, i] of e) i && Q((e) => ({ ...e, [t]: l }));
            }
        }, [E]));
    let ed = i.useCallback(
            (e) => {
                switch (e) {
                    case el.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = T.intl.string(T.t["2EPoxE"]);
                        ($(e), c?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e));
                        break;
                    }
                    case el.t02.INVALID_SIGNATURE_MISMATCH:
                        $(T.intl.string(T.t.kXrnQM));
                        break;
                    case el.t02.INVALID_FORM_BODY:
                        $(T.intl.string(T.t.VjAAuP));
                        break;
                    default:
                        U ? $(T.intl.string(w.default.psKFdJ)) : $(T.intl.string(T.t.h6D8Vy));
                }
            },
            [U, c],
        ),
        eu = i.useCallback(() => {
            let t = ["", e.successNodeId];
            o(ee(t))
                .then(() => {
                    ($(""), er(t));
                })
                .catch((e) => {
                    ed(e.body?.code);
                })
                .finally(() => {
                    H(!1);
                });
        }, [e.successNodeId, ee, o, er, ed]),
        eo = i.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        u();
                        break;
                    case "next":
                        er(["", e.target]);
                        break;
                    case "submit":
                        (H(!0), eu());
                }
            },
            [u, er, eu],
        ),
        ec = i.useCallback(
            (e) => {
                if ("Enter" === e.key && !et && !V && null != t.button) {
                    let l = e.target;
                    "BUTTON" !== l.tagName &&
                        "A" !== l.tagName &&
                        "button" !== l.getAttribute("role") &&
                        "link" !== l.getAttribute("role") &&
                        (e.preventDefault(), eo(t.button));
                }
            },
            [et, V, t.button, eo],
        );
    i.useEffect(() => {
        t.is_auto_submit && !W && (F(!0), o(ee(["", t.id])));
    }, [t.is_auto_submit, W, o, ee, t.id]);
    let ex = i.useMemo(() => {
            var e;
            let t;
            return null != a
                ? ((e = a),
                  (t = []),
                  Object.entries(D).forEach((l) => {
                      let [n, i] = l;
                      (null == i.eligibleReportSubtypes || i.eligibleReportSubtypes.includes(e)) && t.push(n);
                  }),
                  0 === t.length ? null : t)
                : null;
        }, [a]),
        eh = null != la(t, "ignore_users") && ("message" === l.name || "first_dm" === l.name || "user" === l.name),
        ep = (0, A.Z)(),
        ev = (0, b.GR)(),
        e_ = ep && ev.length > 0 && null != la(t, "share_with_parents");
    return (0, n.jsxs)("div", {
        className: em.kL,
        onKeyDown: ec,
        children: [
            (0, n.jsx)("div", {
                className: em.U1,
                children:
                    null != t.header && "" !== t.header
                        ? (0, n.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: t.header })
                        : null,
            }),
            (0, n.jsx)("div", { className: em.b, children: (0, n.jsx)(v.J, { onClick: u }) }),
            (0, n.jsxs)(s.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                direction: j.A.Direction.VERTICAL,
                className: em.wx,
                children: [
                    (0, n.jsx)(tX, { element: la(t, "success") }),
                    (0, n.jsx)(te, { node: t, isModeratorReport: U, isTidaReport: B, hideTitle: !0 }),
                    (0, n.jsx)(ti, { node: t }),
                ],
            }),
            (0, n.jsxs)(s.$m, {
                "data-migration-pending": !0,
                className: em.rf,
                children: [
                    null != y && (0, n.jsx)(t8, { element: y }),
                    null != L && (0, n.jsx)(t1, { element: L }),
                    null != la(t, "message_preview") &&
                        ("message" === l.name || "first_dm" === l.name || "report_to_mod_message" === l.name) &&
                        (0, n.jsx)(tb, { message: l.record }),
                    null != la(t, "user_preview") && "user" === l.name ? (0, n.jsx)(t6, { user: l.record }) : null,
                    null != la(t, "widget_preview") && "widget" === l.name
                        ? (0, n.jsx)(ll, { widget: l.widget, userId: l.user_id })
                        : null,
                    null != la(t, "guild_preview") && "guild" === l.name ? (0, n.jsx)(e7, { guild: l.record }) : null,
                    null != la(t, "breadcrumbs") && (0, n.jsx)(es, { isModeratorReport: U, history: r }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return ln.includes(t);
                        });
                    })(t) &&
                        (0, n.jsxs)(tR, {
                            children: [
                                eh &&
                                    (0, n.jsx)(tt, {
                                        user: "user" === l.name ? l.record : l.record.author,
                                        channelId: X,
                                        reportId: f,
                                    }),
                                e_ && (0, n.jsx)(tQ, { parents: ev }),
                                null != la(t, "block_users") &&
                                    ("message" === l.name ||
                                        "first_dm" === l.name ||
                                        "user" === l.name ||
                                        "report_to_mod_message" === l.name ||
                                        ("application" === l.name && null != l.record.bot)) &&
                                    (0, n.jsx)(en, {
                                        user:
                                            "application" === l.name
                                                ? l.record.bot
                                                : "user" === l.name
                                                  ? l.record
                                                  : l.record.author,
                                        channelId: X,
                                        reportId: f,
                                        reportType: l,
                                    }),
                                !eh &&
                                    null != la(t, "mute_users") &&
                                    ("message" === l.name ||
                                        "first_dm" === l.name ||
                                        "user" === l.name ||
                                        "report_to_mod_message" === l.name) &&
                                    (0, n.jsx)(tC, {
                                        user: "user" === l.name ? l.record : l.record.author,
                                        channelId: X,
                                        reportId: f,
                                    }),
                                null != la(t, "delete_message") &&
                                    ("message" === l.name || "report_to_mod_message" === l.name) &&
                                    (0, n.jsx)(eB, { message: l.record, reportId: f }),
                                null != la(t, "leave_guild") &&
                                    "guild" === l.name &&
                                    (0, n.jsx)(tu, { guildId: l.record.id, reportId: f }),
                                null != la(t, "deauthorize_app") &&
                                    "application" === l.name &&
                                    (0, n.jsx)(eL, { application: l.record, reportId: f }),
                                null != la(t, "deauthorize_app") &&
                                    "application" === l.name &&
                                    (0, n.jsx)(tL, { application: l.record, reportId: f }),
                            ],
                        }),
                    null != la(t, "settings_upsells") &&
                        ("message" === l.name || "report_to_mod_message" === l.name) &&
                        null != ex &&
                        (0, n.jsx)(tW, {
                            settingsUpsells: ex,
                            channelId: l.record.channel_id,
                            onModalClose: u,
                            reportId: f,
                            reportType: l,
                            reportSubType: a,
                        }),
                    null != la(t, "channel_preview") &&
                        "stage_channel" === l.name &&
                        (0, n.jsx)(tq, { stageInstance: l.record }),
                    null != la(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === l.name &&
                        (0, n.jsx)(e6, { event: l.record }),
                    null != la(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === l.name &&
                        (0, n.jsx)(e1, { entry: l.record }),
                    null != la(t, "guild_discovery_preview") &&
                        "guild_discovery" === l.name &&
                        (0, n.jsx)(e8, { entry: l.record }),
                    null != la(t, "app_preview") && "application" === l.name && (0, n.jsx)(Y, { entry: l.record }),
                    null != E && (0, n.jsx)(tS, { element: E, onChange: ei, state: K }),
                    li.includes(l.name) && null != P && (0, n.jsx)(eM, { element: P, onChange: ea, state: q }),
                    li.includes(l.name) &&
                        null != k &&
                        k.length > 0 &&
                        (0, n.jsx)("div", { children: (0, n.jsx)(eW, { elements: k, onChange: ea, state: q }) }),
                    O.map((e) => (0, n.jsx)(tM, { element: e, onChange: ea, state: q }, e.name)),
                    null != R &&
                        (function (e, t, l) {
                            let { visible_when: n } = e.data;
                            if (null == n) return !0;
                            let i =
                                null != n.element_name
                                    ? t.elements.find((e) => {
                                          let { name: t } = e;
                                          return t === n.element_name;
                                      })
                                    : la(t, n.element_type);
                            return null != i && l?.[i.name]?.value === n.value;
                        })(R, t, q) &&
                        (0, n.jsx)(ts, { element: R }),
                    null != M && (0, n.jsx)(eO, { element: M, onChange: ea, state: q }),
                    li.includes(l.name) &&
                        null != I &&
                        I.length > 0 &&
                        (0, n.jsx)(eJ, { elements: I, onChange: ea, state: q }),
                    ((null != t.children && t.children.length > 0) || (null != C && C.length > 0)) &&
                        (0, n.jsxs)("div", {
                            className: em.qI,
                            children: [
                                (0, n.jsx)(eg, { node: t, onSelectChild: er, nodeMap: e.nodeMap }),
                                null != C && C.length > 0 ? (0, n.jsx)(eQ, { elements: C }) : null,
                            ],
                        }),
                    "" !== z
                        ? (0, n.jsx)("div", { ref: Z, children: (0, n.jsx)(_.w, { type: "critical", children: z }) })
                        : null,
                ],
            }),
            (0, n.jsx)(G, {
                button: t.button,
                submitting: V,
                disableNext: et,
                isModeratorReport: U,
                onClick: eo,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: r.length > 0,
                className: em.qr,
            }),
        ],
    });
};
var ld = l(543829);
let lu = (e) => {
    let {
            reportType: t,
            menu: l,
            modalProps: g,
            onSubmit: p,
            onNavigate: v,
            emailToken: _,
            isAuthenticated: j = !0,
        } = e,
        b = (0, o.GV)(),
        { nodes: A, root_node_id: f, success_node_id: N, fail_node_id: S } = l,
        [E, T] = i.useState(f),
        [y, C] = i.useState(void 0),
        [I, k] = i.useState(void 0),
        [M, D] = i.useState([]),
        [R, O] = i.useState(void 0),
        [w, G] = i.useState(void 0),
        [L, P] = i.useState(void 0);
    (0, d.Ay)(() => {
        (0, m.VE)();
    });
    let U = (e) => {
        let { destination: l } = e,
            [, n] = l,
            i = A[n];
        if (void 0 === i) return void c.A.increment({ name: a.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
        if (i.elements.some((e) => "skip" === e.type) && i.button?.type === "next")
            return U({ ...e, destination: ["", i.button.target] });
        if (
            (D([...M, e]),
            null != i.key && v?.(i.key),
            C(void 0),
            k(void 0),
            t.name === x.t0.MESSAGE || t.name === x.t0.FIRST_DM)
        ) {
            let e = t.record.id;
            u.Ay.trackWithMetadata(el.HAw.IAR_NAVIGATE, {
                message_id: e,
                content_type: t.name,
                report_sub_type: i.report_type,
                current_node: A[E].id,
                next_node: i.id,
            });
        }
        T(n);
    };
    async function B(e) {
        let n = j ? await (0, h.zC)(l, t, [...M, e]) : await (0, h.bo)(l, t, [...M, e], _),
            i = n?.body?.report_id;
        (null != i && O(i), G(A[e.nodeRef].report_type), p?.(i));
    }
    function V() {
        if (M.length < 1) return;
        let e = [...M],
            l = e.pop(),
            n = l?.nodeRef ?? f;
        if (t.name === x.t0.MESSAGE || t.name === x.t0.FIRST_DM) {
            let e = t.record.id;
            u.Ay.trackWithMetadata(el.HAw.IAR_NAVIGATE, {
                message_id: e,
                content_type: t.name,
                report_sub_type: A[n].report_type,
                current_node: A[E].id,
                next_node: A[n].id,
            });
        }
        (C(l?.multiSelect?.state), k(l?.textInput), T(n), D(e), v?.(".."));
    }
    let H = i.useCallback(
        (e, t) => {
            let l;
            for (let t in A) {
                let n = A[t];
                if (n.key === e) {
                    l = n;
                    break;
                }
            }
            if (null == l) return;
            let n = M.findIndex((e) => e.nodeRef === l.id);
            if (n >= 0) {
                let e = M.slice(0, n),
                    t = M[n];
                (k(t?.textInput), C(t?.multiSelect?.state), D(e));
            } else (D([]), k(void 0), C(void 0));
            (P(t), T(l.id));
        },
        [A, M],
    );
    i.useEffect(() => {
        null != L && P(void 0);
    }, [L]);
    let W = i.useMemo(() => {
        let e = [],
            t = [];
        for (let l in A) {
            let n = A[l];
            if (n.id !== N && n.id !== S && n.id !== f) {
                if (n.key.endsWith("_SUBMIT") || n.button?.type === "submit") {
                    t.push(n);
                    continue;
                }
                if ((e.push(n), n.button?.type === "next")) {
                    let t = n.button?.target,
                        l = e.indexOf(A[t]);
                    -1 !== l && (e.splice(l, 1), e.push(A[t]));
                }
            }
        }
        return [A[f], ...e, ...t, A[N], A[S]];
    }, [A, f, S, N]);
    return (0, n.jsx)(s.EO, {
        "data-migration-pending": !0,
        transitionState: g.transitionState,
        "aria-labelledby": b,
        parentComponent: "InAppReportModal",
        children: (0, n.jsx)(r.t, {
            width: 440,
            activeSlide: E,
            centered: !1,
            children: W.map((e) =>
                (0, n.jsx)(
                    r.q,
                    {
                        id: e.id,
                        children: (0, n.jsx)("div", {
                            className: ld.B,
                            children: (0, n.jsx)(lr, {
                                node: e,
                                reportType: t,
                                reportSubType: w,
                                history: M,
                                onModalClose: g.onClose,
                                onSelectChild: U,
                                onNavigateBack: V,
                                onNavigateToNode: H,
                                multiSelect: y,
                                textInput: I,
                                successNodeId: N,
                                failNodeId: S,
                                onSubmit: B,
                                reportId: R,
                                nodeMap: A,
                                initialErrorMessage: e.id === E ? L : void 0,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
