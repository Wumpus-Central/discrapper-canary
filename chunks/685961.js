(l.d(t, { default: () => ls }), l(321073));
var n = l(477900),
    a = l(582128),
    i = l(731738),
    s = l(935462),
    r = l(430690),
    d = l(964486),
    u = l(666860),
    o = l(915089),
    c = l(807393),
    m = l(923531),
    x = l(17372),
    h = l(369053),
    g = l(2110),
    p = l(534514),
    _ = l(815021),
    v = l(683071),
    j = l(235986),
    b = l(834981),
    A = l(840387),
    f = l(403362),
    N = l(478437),
    S = l(873298),
    E = l(253932),
    T = l(105292);
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
    w = l(291185);
let G = (e) => {
    let t,
        {
            button: l,
            submitting: i,
            disableNext: r,
            onClick: d,
            canNavigateBack: u,
            onBackClicked: o,
            isModeratorReport: c,
            className: m,
        } = e,
        x = a.useRef(null),
        h = null != l && "cancel" !== l.type,
        g = u && l?.type !== "done",
        p = h || g;
    if (
        (a.useEffect(() => {
            (l?.type === "submit" || l?.type === "done") && x.current?.focus();
        }, [l?.type]),
        !p)
    )
        return null;
    let _ = T.intl.string(T.t.i4jeWR);
    return (
        l?.type === "submit"
            ? ((t = "critical-primary"), (_ = c ? T.intl.string(w.default.ZUyreS) : T.intl.string(T.t["G+vU89"])))
            : l?.type === "next"
              ? (_ = T.intl.string(T.t.PDTjLN))
              : l?.type === "cancel" && ((_ = T.intl.string(T.t["ETE/oC"])), (t = "secondary")),
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
                            disabled: i,
                            text: T.intl.string(T.t["13/7kX"]),
                        }),
                    h &&
                        (0, n.jsx)(O.$, {
                            onClick: function () {
                                null != l && d(l);
                            },
                            variant: t,
                            disabled: i || r,
                            buttonRef: x,
                            text: _,
                        }),
                ],
            }),
        })
    );
};
var L = l(17928),
    U = l(834730),
    P = l(692617),
    B = l(573435),
    V = l(973172),
    H = l(712440),
    W = l(733110),
    F = l(186272),
    z = l(935208),
    $ = l(948492),
    K = l(532406);
let Q = (e) => {
    let { entry: t } = e,
        { name: l } = t,
        i = (0, L.bG)([W.default], () => W.default.getNewestTokenForApplication(t.id)),
        s = t.getIconURL(40) ?? K,
        r = (0, V.A)({ application: t }),
        d = a.useRef(!1);
    a.useEffect(() => {
        d.current || (H.A.fetch(), (d.current = !0));
    }, []);
    let u = null != i ? z.default.extractTimestamp(i.id) : void 0;
    return (0, n.jsxs)("div", {
        className: $.kL,
        children: [
            (0, n.jsx)(p.D, { className: $.wx, variant: "heading-sm/medium", children: T.intl.string(T.t["aYfK/w"]) }),
            (0, n.jsx)("div", {
                className: $.vU,
                children: (0, n.jsxs)("div", {
                    className: $.qi,
                    children: [
                        (0, n.jsx)(B.Ay, {
                            mask: B.Ay.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: $.VE,
                            children: (0, n.jsx)("img", { src: s, alt: "", className: $.Z2 }),
                        }),
                        (0, n.jsxs)("div", {
                            className: $.FS,
                            children: [
                                (0, n.jsx)(U.E, { color: "text-strong", variant: "text-md/medium", children: l }),
                                r.length > 0
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(U.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, F.A)(r.length),
                                              }),
                                              (0, n.jsx)(P.A, { className: $.uM, guilds: r, maxGuilds: 6 }),
                                          ],
                                      })
                                    : (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(U.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: t.bot?.tag,
                                              }),
                                              null != u &&
                                                  (0, n.jsx)(U.E, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: T.intl.formatToPlainString(T.t.C9rUO8, {
                                                          authorizedAt: u,
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
var Y = l(49229),
    q = l(662502),
    J = l(632738),
    Z = l(734057),
    X = l(994500),
    ee = l(562153),
    et = l(652215);
let el = (e) => {
    let { user: t, channelId: l, reportId: i, reportType: s } = e,
        r = (0, L.bG)([X.A], () => X.A.isBlocked(t.id), [t.id]),
        d = (0, L.bG)([Z.A], () => Z.A.getChannel(l), [l]),
        o = a.useMemo(() => ee.Ay.getName(d?.guild_id, d?.id, t), [d, t]),
        c = a.useCallback(() => {
            (u.Ay.trackWithMetadata(et.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                Y.A.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }, l).then(() => {
                    q.A.showBlockSuccessToast(t.id, l);
                }));
        }, [t, i, l]);
    return (0, n.jsx)(J.PQ, {
        title: T.intl.formatToPlainString(T.t["Q1o/f3"], { username: o }),
        description: T.intl.string(T.t.G08MKu),
        buttonText: r ? T.intl.string(T.t.ot2tSp) : T.intl.string(T.t["l+7PZY"]),
        buttonDisabled: r,
        onButtonPress: c,
        buttonVariant: "application" === s.name && r ? "secondary" : "critical-primary",
    });
};
var en = l(435558),
    ea = l(4498);
let ei = (e) => {
    let t = (0, en.flatMap)(e.history, (e) => {
        let {
                destination: [t],
                multiSelect: l,
            } = e,
            n = [null, null],
            a = Object.values(l?.state ?? {});
        return (a.length > 0 && (n[0] = a.join(", ")), "" !== t && (n[1] = t), n);
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
                                  (0, n.jsx)(U.E, { variant: "text-md/normal", className: ea.b, children: e }),
                              ],
                          },
                          `${e}+${t}`,
                      ),
                  ),
              ],
          });
};
var es = l(503698),
    er = l.n(es),
    ed = l(939249),
    eu = l(865116),
    eo = l(147925),
    ec = l(152673),
    em = l(169535);
let ex = (e) => {
        let { child: t, onClick: l, nodeMap: a } = e,
            [i, s] = t,
            r = (0, L.bG)([eu.Ay], () => eu.Ay.get("iar_show_report_sub_type_labels")),
            d = a[s],
            u = d?.report_type;
        return (0, n.jsxs)(ed.D, {
            className: er()(em.Zm, ec.lD),
            onClick: () => l(t),
            children: [
                (0, n.jsxs)("div", {
                    className: em.OH,
                    children: [
                        (0, n.jsx)(U.E, { className: em.ix, variant: "text-md/normal", children: i }),
                        r &&
                            null != u &&
                            (0, n.jsx)(U.E, {
                                className: em.Z$,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: u,
                            }),
                    ],
                }),
                (0, n.jsx)(eo.A, { className: em._2, direction: eo.A.Directions.RIGHT }),
            ],
        });
    },
    eh = (e) => {
        let {
            node: { children: t },
            onSelectChild: l,
            nodeMap: a,
        } = e;
        if (null == t || 0 === t.length) return null;
        let i = t.map((e) => {
            let [t, i] = e;
            return (0, n.jsx)(ex, { child: e, onClick: l, nodeMap: a }, `${t}+${i}`);
        });
        return (0, n.jsx)("div", { className: ec.E8, children: i });
    };
(l(323874), l(14289), l(35956));
var eg = l(331322),
    ep = l(95477),
    e_ = l(46054),
    ev = l(478676),
    ej = l.n(ev),
    eb = l(28863);
let eA = {
    ...ej().defaultRules.link,
    react: function (e, t, l) {
        return (0, n.jsx)(eb.Anchor, { href: e.target, target: "_blank", children: t(e.content, l) });
    },
};
var ef = l(210153),
    eN = l(221851);
let eS = ["cdn.discordapp.com", "media.discordapp.net"],
    eE = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    eT = (0, f.m6)()
        ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/
        : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;
function ey(e) {
    try {
        return (new URL(e), !0);
    } catch {
        return !1;
    }
}
function eC(e) {
    return (
        "" !== e &&
        !!ey(e) &&
        !(function (e) {
            try {
                let t = new URL(e);
                if (eS.some((e) => t.hostname === e) || ((0, f.m6)() && eE.test(t.hostname))) return !0;
                return !1;
            } catch {
                return !1;
            }
        })(e)
    );
}
let eI = (e) => {
        let {
                data: { title: t, subtitle: l, placeholder: i, message_link_title: s, message_link_placeholder: r },
                onChange: d,
                initialContentUrl: u,
                initialMessageUrl: o,
                isRequired: c,
            } = e,
            m = a.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: eA }), []),
            [x, h] = a.useState(""),
            [g, p] = a.useState(""),
            [_, v] = a.useState(null),
            [j, b] = a.useState(null),
            [A, f] = a.useState(!1);
        a.useEffect(() => {
            (h(u?.value ?? ""), p(o?.value ?? ""), u?.value != null && "" !== u.value && f(eC(u.value)));
        }, [u, o]);
        let N = a.useCallback(
                (e) => {
                    if ((h(e), "" === e)) {
                        (v(null), f(!1), p(""), b(null), d({ value: e, isValid: !1 }));
                        return;
                    }
                    if (!ey(e)) {
                        (v(T.intl.string(T.t["24xrGb"])), f(!1), p(""), b(null), d({ value: e, isValid: !1 }));
                        return;
                    }
                    let t = eC(e);
                    (f(t),
                        v(null),
                        t
                            ? "" === g
                                ? d({ value: e, isValid: !1 })
                                : eT.test(g)
                                  ? d({ value: e, isValid: !0 }, { value: g, isValid: !0 })
                                  : d({ value: e, isValid: !1 }, { value: g, isValid: !1 })
                            : (p(""), b(null), d({ value: e, isValid: !0 })));
                },
                [d, g],
            ),
            S = a.useCallback(
                (e) => {
                    if ((p(e), "" === e || !eT.test(e))) {
                        (b(T.intl.string(T.t["24xrGb"])), d({ value: x, isValid: !1 }, { value: e, isValid: !1 }));
                        return;
                    }
                    (b(null), d({ value: x, isValid: !0 }, { value: e, isValid: !0 }));
                },
                [d, x],
            );
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsxs)(eg.B, {
                    gap: 16,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eN.QB,
                            children: [
                                null != t &&
                                    (0, n.jsx)("div", {
                                        className: eN.QB,
                                        children: (0, n.jsxs)(U.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [t, c && (0, n.jsx)("span", { className: ef.m, children: "*" })],
                                        }),
                                    }),
                                (0, n.jsx)(ep.k, { onChange: N, value: x, error: _, placeholder: i, autoFocus: !0 }),
                            ],
                        }),
                        A &&
                            null != s &&
                            (0, n.jsxs)("div", {
                                className: eN.QB,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: eN.QB,
                                        children: (0, n.jsxs)(U.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [s, c && (0, n.jsx)("span", { className: ef.m, children: "*" })],
                                        }),
                                    }),
                                    (0, n.jsx)(ep.k, { onChange: S, value: g, error: j, placeholder: r }),
                                ],
                            }),
                    ],
                }),
                null != l && (0, n.jsx)(U.E, { variant: "text-xs/normal", children: m(l) }),
            ],
        });
    },
    ek = (e) => {
        let { element: t, onChange: l, state: i } = e,
            s = t.name,
            r = `${t.name}_message_link`,
            d = a.useCallback(
                (e, t) => {
                    null != t ? l(s, e.value, e.isValid && t.isValid, r, t.value) : l(s, e.value, e.isValid, r, void 0);
                },
                [l, s, r],
            );
        return (0, n.jsx)(eI, {
            data: t.data,
            onChange: d,
            initialContentUrl: i?.[s],
            initialMessageUrl: i?.[r],
            isRequired: t.should_submit_data,
        });
    };
var eM = l(890497),
    eD = l(423764);
let eR = (e) => {
    let { element: t, onChange: l, state: i } = e,
        s = t.name,
        { title: r, options: d } = t.data,
        u = i?.[s]?.value ?? void 0,
        [o, c] = a.useState(u);
    a.useEffect(() => {
        c(u);
    }, [u]);
    let m = a.useMemo(
            () =>
                d
                    .map((e) => {
                        let t = e.label;
                        try {
                            t = (0, eD.Gw)(e.value);
                        } catch {}
                        return { id: e.id ?? e.value, value: e.value, label: t };
                    })
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [d],
        ),
        x = a.useCallback(
            (e) => {
                null != e && (c(e), l(s, e));
            },
            [l, s],
        );
    return (0, n.jsx)("div", {
        className: eN.QB,
        children: (0, n.jsx)(eM.Z, {
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
var eO = l(933958),
    ew = l(988534);
let eG = (e) => {
    let { application: t, reportId: l } = e,
        [i, s] = a.useState(!1),
        r = (0, L.bG)([W.default], () => W.default.getNewestTokenForApplication(t.id));
    a.useEffect(() => {
        null != r && s(!0);
    }, [r]);
    let d = a.useRef(!1);
    a.useEffect(() => {
        d.current || (H.A.fetch(), (d.current = !0));
    }, []);
    let o = (0, L.bG)([eO.Ay], () => eO.Ay.getSelfEmbeddedActivities()),
        c = a.useCallback(() => {
            if (
                (s(!1),
                u.Ay.trackWithMetadata(et.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: l,
                }),
                null == r)
            )
                return;
            H.A.delete(r.id);
            let e = o.get(t.id);
            null != e && (0, ew.d)({ location: e.location, applicationId: t.id, showFeedback: !1 });
        }, [t.id, r, o, l]);
    return null == t
        ? null
        : (0, n.jsx)(J.PQ, {
              title: T.intl.string(T.t.ygG62M),
              description: T.intl.string(T.t.S51EKg),
              buttonText: i ? T.intl.string(T.t.xXpoGV) : T.intl.string(T.t.JsiUnL),
              buttonDisabled: !i,
              onButtonPress: c,
              buttonVariant: i ? "critical-primary" : "secondary",
          });
};
var eL = l(148494),
    eU = l(232835),
    eP = l(576705);
let eB = (e) => {
    let { message: t, reportId: l } = e,
        [i, s] = a.useState(!1),
        r = (0, L.bG)([eU.A], () => null != eU.A.getMessage(t.getChannelId(), t.id), [t]),
        [d] = a.useState(r),
        o = i || (d && !r),
        c = a.useCallback(() => {
            (s(!0),
                u.Ay.trackWithMetadata(et.HAw.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: l }),
                eL.A.deleteMessage(t.getChannelId(), t.id));
        }, [t, l]),
        m = a.useMemo(() => {
            let e = Z.A.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== et.rbe.DM &&
                e.type !== et.rbe.GROUP_DM &&
                eP.A.canWithPartialContext(et.xBc.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && m
        ? (0, n.jsx)(J.PQ, {
              title: T.intl.string(T.t.c9BHL9),
              description: T.intl.string(T.t.dK8S0w),
              buttonText: o ? T.intl.string(T.t.f3pnLL) : T.intl.string(T.t.ch2xbt),
              buttonDisabled: o,
              buttonVariant: "critical-primary",
              onButtonPress: c,
          })
        : null;
};
var eV = l(691885);
let eH = (e) => {
        let { element: t, onChange: l, initialOption: i } = e,
            [s, r] = a.useState("");
        a.useEffect(() => {
            r(i ?? "");
        }, [i]);
        let d = t.name,
            { title: u, options: o } = t.data,
            c = a.useMemo(() => o.map((e) => ({ ...e, id: e.id ?? e.value })), [o]),
            m = a.useCallback(
                (e) => {
                    null != e && (r(e), l(e));
                },
                [l],
            );
        return (0, n.jsx)(
            "div",
            {
                className: eN.QB,
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
        let { elements: t, onChange: l, state: a } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, n.jsx)(
                    eH,
                    { element: e, initialOption: a?.[t]?.value ?? void 0, onChange: (e) => l(t, e) },
                    t,
                );
            });
        return (0, n.jsx)("div", { children: i });
    };
var eF = l(509434),
    ez = l(975807),
    e$ = l(601576);
let eK = (e) => {
    let {
        data: { url: t, link_text: l, link_description: a, is_localized: i },
    } = e;
    return i
        ? (0, n.jsxs)(ed.D, {
              role: "link",
              className: er()(e$.$J, ec.lD),
              onClick: function () {
                  (0, ez.A)(t);
              },
              children: [
                  (0, n.jsxs)("div", {
                      className: e$.xU,
                      children: [
                          (0, n.jsx)(U.E, { className: e$.__invalid_linkText, variant: "text-md/normal", children: l }),
                          null != a &&
                              "" !== a &&
                              (0, n.jsx)(U.E, { variant: "text-md/normal", color: "text-muted", children: a }),
                      ],
                  }),
                  (0, n.jsx)(eF.I, { size: "sm", color: "currentColor", className: e$.wP }),
              ],
          })
        : null;
};
function eQ(e) {
    let { elements: t } = e;
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
    let l = t.map((e, t) => {
            let { data: l } = e;
            return (0, n.jsx)(eK, { data: l }, `external-link+${t}`);
        }),
        a = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, n.jsxs)("div", {
        className: er()(e$.nV, ec.E8),
        children: [
            !a &&
                (0, n.jsx)(p.D, {
                    variant: "heading-sm/medium",
                    color: "text-default",
                    className: e$.wx,
                    children: T.intl.string(T.t.hvVgAZ),
                }),
            l,
        ],
    });
}
var eY = l(103557);
let eq = (e) => {
        let {
                data: {
                    title: t,
                    subtitle: l,
                    description: i,
                    placeholder: s,
                    rows: r,
                    character_limit: d,
                    pattern: u,
                },
                onChange: o,
                initialText: c,
                isRequired: m,
            } = e,
            x = a.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: eA }), []),
            [h, g] = a.useState(""),
            [p, _] = a.useState(null);
        a.useEffect(() => {
            g(c?.value ?? "");
        }, [c]);
        let v = a.useCallback(
            (e) => {
                let t = null != u ? new RegExp(u) : null;
                null == t || t.test(e)
                    ? null != e && (_(null), g(e), o({ value: e, isValid: !0 }))
                    : (_(T.intl.string(T.t["24xrGb"])), o({ value: e, isValid: !1 }));
            },
            [o, u],
        );
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsxs)("div", {
                    className: eN.QB,
                    children: [
                        null != t &&
                            (0, n.jsxs)(U.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: [t, m && (0, n.jsx)("span", { className: ef.m, children: "*" })],
                            }),
                        null != i &&
                            (0, n.jsx)("div", {
                                className: eN.a5,
                                children: (0, n.jsx)(U.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: i,
                                }),
                            }),
                    ],
                }),
                1 === r
                    ? (0, n.jsx)(ep.k, { maxLength: d, onChange: v, value: h, error: p, placeholder: s })
                    : (0, n.jsx)(eY.f, { maxLength: d, onChange: v, value: h, error: p, rows: r, placeholder: s }),
                null != l &&
                    (0, n.jsx)("div", {
                        className: eN.a5,
                        children: (0, n.jsx)(U.E, { variant: "text-xs/normal", color: "text-muted", children: x(l) }),
                    }),
            ],
        });
    },
    eJ = (e) => {
        let { elements: t, onChange: l, state: a } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, n.jsx)(
                    eq,
                    {
                        data: e.data,
                        onChange: (e) => l(t, e.value, e.isValid),
                        initialText: a?.[t] ?? void 0,
                        isRequired: e.should_submit_data,
                    },
                    t,
                );
            });
        return (0, n.jsx)("div", { className: ef.k, children: i });
    };
var eZ = l(548118),
    eX = l(71393),
    e0 = l(458068);
let e1 = (e) => {
    let { entry: t } = e,
        l = Z.A.getChannel(t.channelId);
    if (null == l) return null;
    let a = eX.A.getGuild(l.guild_id);
    return null == a
        ? null
        : (0, n.jsxs)("div", {
              className: e0.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      className: e0.wx,
                      variant: "heading-sm/medium",
                      children: T.intl.string(T.t.nTe4HC),
                  }),
                  (0, n.jsxs)("div", {
                      className: e0.bo,
                      children: [
                          (0, n.jsxs)("div", {
                              className: e0.mo,
                              children: [
                                  (0, n.jsx)(eZ.Ay, { guild: a, size: eZ.Ay.Sizes.MINI, className: e0.xG }),
                                  (0, n.jsx)(U.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: a.name,
                                  }),
                              ],
                          }),
                          (0, n.jsx)(U.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
var e3 = l(486020),
    e4 = l(695451);
let e2 = (e) => {
    let { entry: t } = e,
        { id: l, icon: a, name: i } = t,
        s = e3.Ay.getGuildIconURL({ id: l, icon: a, size: 32 }) ?? void 0;
    return (0, n.jsxs)("div", {
        className: e4.kL,
        children: [
            (0, n.jsx)(p.D, { className: e4.wx, variant: "heading-sm/medium", children: T.intl.string(T.t.nTe4HC) }),
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
                            children: (0, n.jsx)("img", { src: s, alt: "", className: e4.$f }),
                        }),
                        (0, n.jsx)(U.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                    ],
                }),
            }),
        ],
    });
};
var e8 = l(120337);
let e5 = (e) => {
    let { guild: t } = e;
    return (0, n.jsxs)("div", {
        className: e8.kL,
        children: [
            (0, n.jsx)(p.D, { className: e8.wx, variant: "heading-sm/medium", children: T.intl.string(T.t["0ox7Hq"]) }),
            (0, n.jsx)("div", {
                className: e8.bo,
                children: (0, n.jsxs)("div", {
                    className: e8.OA,
                    children: [
                        (0, n.jsx)("div", {
                            className: e8.$f,
                            children: (0, n.jsx)(eZ.Ay, { guild: t, size: eZ.Ay.Sizes.LARGE }),
                        }),
                        (0, n.jsx)("div", {
                            children: (0, n.jsx)(U.E, {
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
var e9 = l(285496);
let e6 = (e) => {
    let { event: t } = e,
        l = (0, L.bG)([eX.A], () => eX.A.getGuild(t.guild_id));
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: e9.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      className: e9.wx,
                      variant: "heading-sm/medium",
                      children: T.intl.string(T.t.SDTOL7),
                  }),
                  (0, n.jsxs)("div", {
                      className: e9.bo,
                      children: [
                          (0, n.jsxs)("div", {
                              className: e9.OA,
                              children: [
                                  (0, n.jsx)(eZ.Ay, { guild: l, size: eZ.Ay.Sizes.MINI, className: e9.$f }),
                                  (0, n.jsx)(U.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: l.name,
                                  }),
                              ],
                          }),
                          (0, n.jsx)(U.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
var e7 = l(101405);
let te = (e) => {
        let {
                node: { header: t, subheader: l, button: i },
                isModeratorReport: s,
                isTidaReport: r = !1,
                hideTitle: d = !1,
            } = e,
            u = i?.type === "submit",
            o = a.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: eA }), []);
        return (0, n.jsxs)("div", {
            className: e7.N,
            children: [
                d || null == t || "" === t
                    ? null
                    : (0, n.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                null != l && "" !== t
                    ? (0, n.jsx)(U.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: e7.m,
                          children: o(l),
                      })
                    : null,
                u &&
                    !s &&
                    !r &&
                    (0, n.jsx)(U.E, { variant: "text-sm/normal", children: T.intl.format(T.t.Q0tSKT, {}) }),
            ],
        });
    },
    tt = (e) => {
        let { user: t, channelId: l, reportId: i } = e,
            { isIgnored: s, isBlocked: r } = (0, L.cf)(
                [X.A],
                () => ({ isIgnored: X.A.isIgnored(t.id), isBlocked: X.A.isBlocked(t.id) }),
                [t],
            ),
            d = (0, L.bG)([Z.A], () => Z.A.getChannel(l), [l]),
            o = a.useMemo(() => ee.Ay.getName(d?.guild_id, d?.id, t), [d, t]),
            c = a.useCallback(() => {
                (u.Ay.trackWithMetadata(et.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                    Y.A.ignoreUser(t.id, "web_iar_ignore_user_element", l));
            }, [t, i, l]),
            m = a.useMemo(() => s || r, [s, r]);
        return (0, n.jsx)(J.PQ, {
            title: T.intl.formatToPlainString(T.t.U3yyFs, { username: o }),
            description: T.intl.string(T.t.naWE6W),
            buttonText: m ? T.intl.string(T.t.nDdxOG) : T.intl.string(T.t.ICYEfY),
            buttonDisabled: m,
            onButtonPress: c,
        });
    };
var tl = l(672874);
let tn = (e) => {
        let {
                node: { info: t },
            } = e,
            l = a.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: eA }), []),
            i = null != t ? l(t) : null;
        return null == i
            ? null
            : (0, n.jsx)("div", {
                  className: tl.e,
                  children: (0, n.jsx)(v.w, { type: "info", message: i, role: "none" }),
              });
    },
    ta = e_.A.reactParserFor({ ...e_.A.defaultRules, link: eA }),
    ti = (e) => {
        let { element: t } = e,
            { body: l, notice_type: a, visible_when: i } = t.data,
            s = ta(l);
        return null == s ? null : (0, n.jsx)(v.w, { type: a, message: s, role: null != i ? "status" : "none" });
    };
var ts = l(314116),
    tr = l(468689);
let td = (e) => {
    let { guildId: t, reportId: l } = e,
        [i, s] = a.useState(!1),
        r = eX.A.getGuild(t),
        d = null != r;
    a.useEffect(() => {
        s(!d);
    }, [d]);
    let o = a.useCallback(() => {
        (s(!0),
            u.Ay.trackWithMetadata(et.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, { guild_id: t, report_id: l }),
            tr.A.leaveGuild(t));
    }, [t, l]);
    return null == r
        ? null
        : (0, n.jsx)(J.PQ, {
              title: T.intl.string(T.t.cU96ip),
              description: T.intl.formatToPlainString(T.t["26mR6/"], { guildName: r?.name }),
              buttonText: i ? T.intl.string(T.t["9Ak99h"]) : T.intl.string(T.t.F3qExp),
              buttonDisabled: i,
              buttonVariant: "critical-primary",
              onButtonPress: function () {
                  null != r &&
                      (0, ts.A)({
                          title: T.intl.formatToPlainString(T.t["1GX6P/"], { name: r.name }),
                          subtitle: T.intl.format(T.t.ZEXC0r, { name: r.name }),
                          confirmText: T.intl.string(T.t.J2TBi3),
                          onConfirm: o,
                      });
              },
          });
};
var tu = l(364522),
    to = l(387408),
    tc = l(763754),
    tm = l(491182),
    tx = l(438729),
    th = l(895597),
    tg = l(448368),
    tp = l(941308),
    t_ = l(838541),
    tv = l(660845);
let tj = (e) => {
    let { message: t } = e,
        l = (0, tc.Ay)(t),
        i = (0, L.bG)([Z.A], () => Z.A.getChannel(t.channel_id)),
        s = a.useMemo(() => (0, to.A)(t), [t]),
        { content: r } = (0, tp.A)(s, { hideSimpleEmbedContent: !1 }),
        d = E.hH.useSetting(),
        u = a.useCallback(() => {
            let { leadingIcon: e, trailingIcon: l } = (0, tg.o)(t, r, !1, !1, "", {
                leadingIconClass: tv.$r,
                trailingIconClass: tv.$r,
                iconSize: t_.eJ,
            });
            return (0, n.jsxs)("div", {
                className: tv.hQ,
                children: [e, (0, n.jsx)(tx.Ay, { message: t, content: r, compact: d }), l],
            });
        }, [t, r, d]);
    return null == i
        ? null
        : (0, n.jsxs)("div", {
              className: tv.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      className: tv.wx,
                      variant: "heading-sm/medium",
                      children: T.intl.string(T.t.iouM3a),
                  }),
                  (0, n.jsx)(tu.Ip, {
                      className: tv.PI,
                      children: (0, n.jsx)(tm.A, {
                          childrenMessageContent: u(),
                          childrenHeader: (0, n.jsx)(th.Ay, {
                              message: t,
                              channel: i,
                              author: l,
                              guildId: i.guild_id,
                              disableGuildTagProfile: !0,
                          }),
                          disableInteraction: !0,
                          author: l,
                      }),
                  }),
              ],
          });
};
var tb = l(150934),
    tA = l(427831);
let tf = (e) => {
        let { onChange: t, label: l, subtitle: a, selected: i } = e;
        return (0, n.jsx)("div", {
            className: tA.yc,
            children: (0, n.jsx)(tb.S, { checked: i, onChange: t, label: l, description: a }),
        });
    },
    tN = (e) => {
        let { element: t, title: l, state: a, onChange: i } = e;
        if (t?.type !== "checkbox") return null;
        let { data: s } = t;
        return (0, n.jsxs)("div", {
            children: [
                null != l &&
                    (0, n.jsxs)(U.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: tA.DD,
                        children: [l, t.should_submit_data && (0, n.jsx)("span", { className: tA.mw, children: "*" })],
                    }),
                s.map((e, t) => {
                    let [l, s, r] = e;
                    return (0, n.jsx)(
                        tf,
                        { onChange: () => i(l, s), selected: l in a, label: s, subtitle: r },
                        `${t}+button`,
                    );
                }),
            ],
        });
    };
var tS = l(832712),
    tE = l(543465),
    tT = l(477427);
let ty = (e) => {
    let { user: t, channelId: l, reportId: i } = e,
        s = Z.A.getDMFromUserId(t.id),
        r = (0, L.bG)([Z.A], () => Z.A.getChannel(l), [l]),
        d = a.useMemo(() => ee.Ay.getName(r?.guild_id, r?.id, t), [r, t]),
        o = (0, L.bG)([tE.Ay], () => (null == s ? null : tE.Ay.isChannelMuted(null, s))),
        [c, m] = a.useState(o ?? !1),
        x = a.useCallback(() => {
            null != s &&
                (m(!0),
                u.Ay.trackWithMetadata(et.HAw.IAR_MUTE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                tS.A.updateChannelOverrideSettings({
                    guildId: null,
                    channelId: s,
                    settings: { muted: !0 },
                    label: tT.fd.Muted,
                }),
                q.A.showMuteSuccessToast(t.id, l));
        }, [s, l, t, i]);
    return (0, n.jsx)(J.PQ, {
        title: T.intl.formatToPlainString(T.t.TRp5wR, { username: d }),
        description: T.intl.string(T.t["yM/+AJ"]),
        buttonText: c ? T.intl.string(T.t.E8x4Nj) : T.intl.string(T.t.HITUcR),
        buttonDisabled: c,
        onButtonPress: x,
    });
};
var tC = l(144228),
    tI = l(580652);
let tk = (e) => {
    let { element: t, onChange: l, state: i } = e,
        s = t.name,
        { title: r, options: d } = t.data,
        u = i?.[s]?.value ?? void 0,
        [o, c] = a.useState(u);
    a.useEffect(() => {
        c(u);
    }, [u]);
    let m = a.useMemo(() => d.map((e) => ({ name: e.label, value: e.value })), [d]),
        x = a.useCallback(
            (e) => {
                null != e && (c(e), l(s, e));
            },
            [l, s],
        );
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsxs)(U.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: tI.P,
                children: [r, t.should_submit_data && (0, n.jsx)("span", { className: tI.m, children: "*" })],
            }),
            (0, n.jsx)(tC.z, { value: o, onChange: x, options: m }),
        ],
    });
};
var tM = l(692612);
function tD(e) {
    let { children: t, title: l } = e;
    return (0, n.jsxs)("div", {
        className: tM.kL,
        children: [
            (0, n.jsx)(p.D, {
                className: tM.wx,
                variant: "text-sm/semibold",
                children: l ?? T.intl.string(T.t["k+QA9N"]),
            }),
            (0, n.jsx)("div", { className: tM.uk, children: t }),
        ],
    });
}
var tR = l(157559),
    tO = l(794967),
    tw = l(309010);
let tG = (e) => {
    let { application: t, reportId: l } = e,
        [i, s] = a.useState(!1),
        [r, d] = a.useState(!1),
        o = (0, L.bG)([tw.Ay, Z.A], () => Z.A.getChannel(tw.Ay.getChannelId())?.guild_id),
        [c, m] = a.useState(null);
    (a.useEffect(() => {
        null != c && (s(!0), d(!0));
    }, [c]),
        a.useEffect(() => {
            if (null == o) return;
            let e = !1;
            return (
                (async () => {
                    let l = null;
                    try {
                        l = await (0, tO.c)(o);
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
    let x = a.useCallback(() => {
            (d(!1),
                u.Ay.trackWithMetadata(et.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: o,
                    application_id: t.id,
                    report_id: l,
                }),
                null != o &&
                    null != c &&
                    tr.A.disableIntegration(o, c.id).catch(() => {
                        tR.A.show({ title: T.intl.string(T.t.wYqMmI), body: T.intl.string(T.t.A4Mnst) });
                    }));
        }, [t.id, o, c, l]),
        h = (0, L.bG)([eP.A, eX.A], () => {
            let e = eX.A.getGuild(o);
            if (null == e) return !1;
            let l = eP.A.can(et.xBc.MANAGE_GUILD, e),
                n = null == t.bot || eP.A.canManageUser(et.xBc.MANAGE_GUILD, t.bot.id, e);
            return l && n;
        });
    return null != t && null != o && i && h
        ? (0, n.jsx)(J.PQ, {
              title: T.intl.string(T.t["WV/CsH"]),
              description: T.intl.string(T.t["FlcC+3"]),
              buttonText: r ? T.intl.string(T.t.aCJlq4) : T.intl.string(T.t["6I1F3i"]),
              buttonDisabled: !r,
              onButtonPress: x,
              buttonVariant: r ? "critical-primary" : "secondary",
          })
        : null;
};
var tL = l(123292),
    tU = l(780964),
    tP = l(766075),
    tB = l(633423);
function tV(e) {
    let { title: t, description: l, onButtonClick: i, trackSettingsUpsellsAction: s } = e,
        [r, u] = a.useState(!1);
    return (
        (0, d.Ay)(() => {
            s(h.lJ.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, n.jsx)(J.PQ, {
            title: t,
            description: l,
            buttonText: r ? T.intl.string(T.t["h+WsPb"]) : T.intl.string(T.t.A8t4Nf),
            buttonDisabled: r,
            onButtonPress: () => {
                (i(), u(!0), s(h.lJ.SETTINGS_UPSELLS_APPLY_CLICKED));
            },
        })
    );
}
function tH(e) {
    var t;
    let { settingsUpsells: l, channelId: i, onModalClose: s, reportId: r, reportType: d, reportSubType: o } = e,
        c = (0, L.bG)([Z.A], () => Z.A.getChannel(i)),
        m =
            ((t = c?.type),
            a.useMemo(
                () =>
                    l
                        .map((e) => {
                            var l, n;
                            let a;
                            return (
                                (l = e),
                                (n = t),
                                !(function (e, t) {
                                    let { predicate: l, eligibleChannelTypes: n } = e,
                                        a = null == l || l?.() === !0,
                                        i = null == t || null == n || n.includes(t);
                                    return a && i;
                                })((a = D[l]), n)
                                    ? null
                                    : a
                            );
                        })
                        .filter(f.Vq),
                [l, t],
            )),
        x = (0, h.Mw)(d, o, r);
    return 0 === m.length
        ? null
        : (0, n.jsxs)("div", {
              className: tB.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      variant: "text-sm/semibold",
                      className: tB.wx,
                      children: T.intl.string(T.t["1yxTIJ"]),
                  }),
                  (0, n.jsx)("div", {
                      className: tB.uk,
                      children: m.map((e, t) => {
                          let { getTitle: a, getDescription: i, onApply: s } = e;
                          return (0, n.jsx)(
                              tV,
                              { title: a(), description: i(), onButtonClick: s, trackSettingsUpsellsAction: x(l[t]) },
                              t,
                          );
                      }),
                  }),
                  (0, n.jsx)(tL.Q, {
                      text: T.intl.string(T.t.olebGx),
                      onClick: () => {
                          ((0, tP.openUserSettings)(tU.X.MESSAGING_PERMISSIONS_PANEL),
                              s(),
                              u.Ay.trackWithMetadata(et.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
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
var tW = l(858899),
    tF = l(899847);
let tz = (e) => {
    let { parents: t } = e,
        [l, i] = a.useState(!1),
        s = a.useCallback(() => {
            (0, tF.Xz)()
                .then(() => {
                    ((0, tW.P0)({
                        text: T.intl.formatToPlainString(T.t.wr4IT5, {
                            count: t.length,
                            parent1: t[0].username,
                            parent2: t[1]?.username,
                            parent3: t[2]?.username,
                        }),
                        variant: "success",
                    }),
                        i(!0));
                })
                .catch(() => {
                    q.A.showFailedToast();
                });
        }, [t]);
    if (0 === t.length) return null;
    let r = T.intl.formatToPlainString(T.t.HqyWeO, {
        count: t.length,
        parent1: t[0].username,
        parent2: t[1]?.username,
        parent3: t[2]?.username,
    });
    return (0, n.jsx)(J.PQ, {
        title: r,
        description: T.intl.string(T.t["5l/hlt"]),
        buttonText: l ? T.intl.string(T.t.ntuuk7) : T.intl.string(T.t["sYdX/H"]),
        buttonDisabled: l,
        onButtonPress: s,
    });
};
var t$ = l(737973);
let tK = (e) => {
    let { stageInstance: t } = e,
        l = eX.A.getGuild(t.guild_id);
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: t$.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      className: t$.wx,
                      variant: "heading-sm/medium",
                      children: T.intl.string(T.t.InbJ8x),
                  }),
                  (0, n.jsxs)("div", {
                      className: t$.bo,
                      children: [
                          (0, n.jsxs)("div", {
                              className: t$.OA,
                              children: [
                                  (0, n.jsx)(eZ.Ay, { guild: l, size: eZ.Ay.Sizes.MINI, className: t$.$f }),
                                  (0, n.jsx)(U.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: l.name,
                                  }),
                              ],
                          }),
                          (0, n.jsx)(U.E, { variant: "text-md/semibold", color: "text-strong", children: t.topic }),
                      ],
                  }),
              ],
          });
};
var tQ = l(810685),
    tY = l(336621);
let tq = (e) => {
    let { element: t } = e;
    return t?.type !== "success"
        ? null
        : (0, n.jsx)("div", {
              className: tY.t,
              children: (0, n.jsx)(tQ.M, { alt: "", ariaHidden: !0, role: "presentation" }),
          });
};
var tJ = l(709531);
function tZ(e) {
    let {
            element: {
                data: { header: t, body: l, is_localized: i },
            },
        } = e,
        s = a.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: eA }), []);
    return i && (null != t || null != l)
        ? (0, n.jsxs)("div", {
              children: [
                  null != t &&
                      (0, n.jsx)(p.D, {
                          variant: "heading-sm/semibold",
                          color: "text-default",
                          className: tJ.w,
                          children: t,
                      }),
                  null != l &&
                      (0, n.jsx)(U.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: tJ.r,
                          children: s(l),
                      }),
              ],
          })
        : null;
}
var tX = l(957565),
    t0 = l(65489);
function t1(e) {
    let {
            element: {
                data: { title: t, body: l, sms: i, is_localized: s },
            },
        } = e,
        [r, d] = a.useState(!1),
        u = a.useRef(e_.A.reactParserFor(e_.A.defaultRules));
    return s
        ? (0, n.jsxs)("div", {
              className: t0.kL,
              children: [
                  (0, n.jsx)(p.D, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: t0.wx,
                      children: t,
                  }),
                  (0, n.jsx)(U.E, { variant: "text-sm/normal", className: t0.G3, children: u.current(l) }),
                  (0, n.jsx)("div", {
                      children: (0, n.jsxs)("div", {
                          className: er()(t0.GH, { [t0.pG]: r }),
                          children: [
                              (0, n.jsx)(U.E, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: t0.Kk,
                                  children: i,
                              }),
                              (0, n.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: t0.__invalid_trailingButton,
                                  children: (0, n.jsx)(O.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: r ? T.intl.string(T.t.t5VZ88) : T.intl.string(T.t.OpuAlK),
                                      onClick: function () {
                                          (0, tX.C)(i, () => d(!0));
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
var t3 = l(778712),
    t4 = l(730134),
    t2 = l(243899);
let t8 = (e) => {
    let { user: t } = e;
    return (0, n.jsxs)("div", {
        className: t2.kL,
        children: [
            (0, n.jsx)(p.D, { className: t2.wx, variant: "heading-sm/medium", children: T.intl.string(T.t.Rsth7z) }),
            (0, n.jsx)("div", {
                className: t2.f1,
                children: (0, n.jsxs)("div", {
                    className: t2.eF,
                    children: [
                        (0, n.jsx)(t4.A, { className: t2.Hk, user: t, size: t3._3.SIZE_40 }),
                        (0, n.jsxs)("div", {
                            children: [
                                null != t.globalName &&
                                    (0, n.jsx)(U.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: t.globalName,
                                    }),
                                (0, n.jsx)(U.E, {
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
var t5 = l(95077),
    t9 = l(287809),
    t6 = l(818972);
let t7 = (e) => {
        let { widget: t, userId: l } = e,
            a = (0, L.bG)([t9.default], () => t9.default.getUser(l));
        return null == a
            ? null
            : (0, n.jsxs)("div", {
                  className: t6.k,
                  children: [
                      (0, n.jsx)(p.D, {
                          className: t6.w,
                          variant: "heading-sm/medium",
                          children: T.intl.string(T.t.SpsnDY),
                      }),
                      (0, n.jsx)(t5.u, { widget: t, user: a, allowEditing: !1, disableInteraction: !0 }),
                  ],
              });
    },
    le = ["ignore_users", "block_users", "leave_guild", "delete_message", "deauthorize_app", "share_with_parents"],
    lt = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function ll(e, t) {
    let { elements: l } = e;
    return l.find((e) => {
        let { type: l } = e;
        return l === t;
    });
}
function ln(e, t) {
    let { elements: l } = e;
    return l.filter((e) => {
        let { type: l } = e;
        return l === t;
    });
}
let la = (e) => {
    let {
            node: t,
            reportType: l,
            reportSubType: i,
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
        E = ll(t, "checkbox"),
        y = ll(t, "text_line_resource"),
        C = ln(t, "external_link"),
        I = ln(t, "free_text"),
        k = ln(t, "dropdown"),
        M = ll(t, "country_select"),
        R = ll(t, "inline_notice"),
        O = ln(t, "radio_group"),
        L = ll(t, "text"),
        U = ll(t, "content_url_input"),
        P = g.x.REPORT_TO_MOD.has(l.name),
        B = l.name === x.tY.MEDIA_TAKEDOWN,
        [V, H] = a.useState(!1),
        [W, F] = a.useState(!1),
        [z, $] = a.useState(S ?? ""),
        [K, Y] = a.useState(() => ({})),
        [q, J] = a.useState(() => ({})),
        Z = a.useRef(null),
        X = a.useMemo(() => ("message" === l.name ? l.record.channel_id : void 0), [l]),
        ee = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != I || null != k || null != M || O.length > 0 || null != U ? q : void 0,
                multiSelect: null != E ? { name: E.name, state: K } : void 0,
            }),
            [t, I, k, M, O, U, E, K, q],
        ),
        en = a.useMemo(
            () =>
                (0, h.ks)(
                    {
                        freeTextElements: I,
                        dropdownElements: k,
                        countrySelectElement: M,
                        radioGroupElements: O,
                        multiSelectElement: E,
                        contentUrlInputElement: U,
                    },
                    { textInput: q, multiSelect: K },
                ),
            [I, k, M, O, E, U, q, K],
        ),
        ea = a.useCallback(
            (e, t) => {
                let l = { ...K };
                (e in K ? delete l[e] : (l[e] = t), Y(l));
            },
            [K],
        ),
        es = a.useCallback(
            function (e, t) {
                let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    i = { ...q };
                ((i[e] = { value: t, isValid: l }),
                    null != n && (null != a && "" !== a ? (i[n] = { value: a, isValid: l }) : delete i[n]),
                    J(i));
            },
            [q],
        ),
        er = a.useCallback(
            (e) => {
                d(ee(e));
            },
            [d, ee],
        );
    (a.useEffect(() => {
        (null != m && Y(m), null != N && J(N));
    }, [m, N]),
        a.useEffect(() => {
            null != S && $(S);
        }, [S]),
        a.useEffect(() => {
            if ("" !== z) {
                let e = setTimeout(() => {
                    let e = Z.current?.parentElement;
                    null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
                }, 50);
                return () => clearTimeout(e);
            }
        }, [z]),
        a.useEffect(() => {
            if (null != E) {
                let e = E.data;
                if (null != e) for (let [t, l, n, a] of e) a && Y((e) => ({ ...e, [t]: l }));
            }
        }, [E]));
    let ed = a.useCallback(
            (e) => {
                switch (e) {
                    case et.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = T.intl.string(T.t["2EPoxE"]);
                        ($(e), c?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e));
                        break;
                    }
                    case et.t02.INVALID_SIGNATURE_MISMATCH:
                        $(T.intl.string(T.t.kXrnQM));
                        break;
                    case et.t02.INVALID_FORM_BODY:
                        $(T.intl.string(T.t.VjAAuP));
                        break;
                    default:
                        P ? $(T.intl.string(w.default.psKFdJ)) : $(T.intl.string(T.t.h6D8Vy));
                }
            },
            [P, c],
        ),
        eu = a.useCallback(() => {
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
        eo = a.useCallback(
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
        em = a.useCallback(
            (e) => {
                if ("Enter" === e.key && !en && !V && null != t.button) {
                    let l = e.target;
                    "BUTTON" !== l.tagName &&
                        "A" !== l.tagName &&
                        "button" !== l.getAttribute("role") &&
                        "link" !== l.getAttribute("role") &&
                        (e.preventDefault(), eo(t.button));
                }
            },
            [en, V, t.button, eo],
        );
    a.useEffect(() => {
        t.is_auto_submit && !W && (F(!0), o(ee(["", t.id])));
    }, [t.is_auto_submit, W, o, ee, t.id]);
    let ex = a.useMemo(() => {
            var e;
            let t;
            return null != i
                ? ((e = i),
                  (t = []),
                  Object.entries(D).forEach((l) => {
                      let [n, a] = l;
                      (null == a.eligibleReportSubtypes || a.eligibleReportSubtypes.includes(e)) && t.push(n);
                  }),
                  0 === t.length ? null : t)
                : null;
        }, [i]),
        eg = null != ll(t, "ignore_users") && ("message" === l.name || "first_dm" === l.name || "user" === l.name),
        ep = (0, A.Z)(),
        e_ = (0, b.GR)(),
        ev = ep && e_.length > 0 && null != ll(t, "share_with_parents");
    return (0, n.jsxs)("div", {
        className: ec.kL,
        onKeyDown: em,
        children: [
            (0, n.jsx)("div", {
                className: ec.U1,
                children:
                    null != t.header && "" !== t.header
                        ? (0, n.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: t.header })
                        : null,
            }),
            (0, n.jsx)("div", { className: ec.b, children: (0, n.jsx)(_.J, { onClick: u }) }),
            (0, n.jsxs)(s.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                direction: j.A.Direction.VERTICAL,
                className: ec.wx,
                children: [
                    (0, n.jsx)(tq, { element: ll(t, "success") }),
                    (0, n.jsx)(te, { node: t, isModeratorReport: P, isTidaReport: B, hideTitle: !0 }),
                    (0, n.jsx)(tn, { node: t }),
                ],
            }),
            (0, n.jsxs)(s.$m, {
                "data-migration-pending": !0,
                className: ec.rf,
                children: [
                    null != y && (0, n.jsx)(t1, { element: y }),
                    null != L && (0, n.jsx)(tZ, { element: L }),
                    null != ll(t, "message_preview") &&
                        ("message" === l.name || "first_dm" === l.name || "report_to_mod_message" === l.name) &&
                        (0, n.jsx)(tj, { message: l.record }),
                    null != ll(t, "user_preview") && "user" === l.name ? (0, n.jsx)(t8, { user: l.record }) : null,
                    null != ll(t, "widget_preview") && "widget" === l.name
                        ? (0, n.jsx)(t7, { widget: l.widget, userId: l.user_id })
                        : null,
                    null != ll(t, "guild_preview") && "guild" === l.name ? (0, n.jsx)(e5, { guild: l.record }) : null,
                    null != ll(t, "breadcrumbs") && (0, n.jsx)(ei, { isModeratorReport: P, history: r }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return le.includes(t);
                        });
                    })(t) &&
                        (0, n.jsxs)(tD, {
                            children: [
                                eg &&
                                    (0, n.jsx)(tt, {
                                        user: "user" === l.name ? l.record : l.record.author,
                                        channelId: X,
                                        reportId: f,
                                    }),
                                ev && (0, n.jsx)(tz, { parents: e_ }),
                                null != ll(t, "block_users") &&
                                    ("message" === l.name ||
                                        "first_dm" === l.name ||
                                        "user" === l.name ||
                                        "report_to_mod_message" === l.name ||
                                        ("application" === l.name && null != l.record.bot)) &&
                                    (0, n.jsx)(el, {
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
                                !eg &&
                                    null != ll(t, "mute_users") &&
                                    ("message" === l.name ||
                                        "first_dm" === l.name ||
                                        "user" === l.name ||
                                        "report_to_mod_message" === l.name) &&
                                    (0, n.jsx)(ty, {
                                        user: "user" === l.name ? l.record : l.record.author,
                                        channelId: X,
                                        reportId: f,
                                    }),
                                null != ll(t, "delete_message") &&
                                    ("message" === l.name || "report_to_mod_message" === l.name) &&
                                    (0, n.jsx)(eB, { message: l.record, reportId: f }),
                                null != ll(t, "leave_guild") &&
                                    "guild" === l.name &&
                                    (0, n.jsx)(td, { guildId: l.record.id, reportId: f }),
                                null != ll(t, "deauthorize_app") &&
                                    "application" === l.name &&
                                    (0, n.jsx)(eG, { application: l.record, reportId: f }),
                                null != ll(t, "deauthorize_app") &&
                                    "application" === l.name &&
                                    (0, n.jsx)(tG, { application: l.record, reportId: f }),
                            ],
                        }),
                    null != ll(t, "settings_upsells") &&
                        ("message" === l.name || "report_to_mod_message" === l.name) &&
                        null != ex &&
                        (0, n.jsx)(tH, {
                            settingsUpsells: ex,
                            channelId: l.record.channel_id,
                            onModalClose: u,
                            reportId: f,
                            reportType: l,
                            reportSubType: i,
                        }),
                    null != ll(t, "channel_preview") &&
                        "stage_channel" === l.name &&
                        (0, n.jsx)(tK, { stageInstance: l.record }),
                    null != ll(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === l.name &&
                        (0, n.jsx)(e6, { event: l.record }),
                    null != ll(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === l.name &&
                        (0, n.jsx)(e1, { entry: l.record }),
                    null != ll(t, "guild_discovery_preview") &&
                        "guild_discovery" === l.name &&
                        (0, n.jsx)(e2, { entry: l.record }),
                    null != ll(t, "app_preview") && "application" === l.name && (0, n.jsx)(Q, { entry: l.record }),
                    null != E && (0, n.jsx)(tN, { element: E, onChange: ea, state: K }),
                    lt.includes(l.name) && null != U && (0, n.jsx)(ek, { element: U, onChange: es, state: q }),
                    lt.includes(l.name) &&
                        null != k &&
                        k.length > 0 &&
                        (0, n.jsx)("div", { children: (0, n.jsx)(eW, { elements: k, onChange: es, state: q }) }),
                    O.map((e) => (0, n.jsx)(tk, { element: e, onChange: es, state: q }, e.name)),
                    null != R &&
                        (function (e, t, l) {
                            let { visible_when: n } = e.data;
                            if (null == n) return !0;
                            let a =
                                null != n.element_name
                                    ? t.elements.find((e) => {
                                          let { name: t } = e;
                                          return t === n.element_name;
                                      })
                                    : ll(t, n.element_type);
                            return null != a && l?.[a.name]?.value === n.value;
                        })(R, t, q) &&
                        (0, n.jsx)(ti, { element: R }),
                    null != M && (0, n.jsx)(eR, { element: M, onChange: es, state: q }),
                    lt.includes(l.name) &&
                        null != I &&
                        I.length > 0 &&
                        (0, n.jsx)(eJ, { elements: I, onChange: es, state: q }),
                    ((null != t.children && t.children.length > 0) || (null != C && C.length > 0)) &&
                        (0, n.jsxs)("div", {
                            className: ec.qI,
                            children: [
                                (0, n.jsx)(eh, { node: t, onSelectChild: er, nodeMap: e.nodeMap }),
                                null != C && C.length > 0 ? (0, n.jsx)(eQ, { elements: C }) : null,
                            ],
                        }),
                    "" !== z
                        ? (0, n.jsx)("div", {
                              ref: Z,
                              children: (0, n.jsx)(v.w, { type: "critical", message: z, role: "alert" }),
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(G, {
                button: t.button,
                submitting: V,
                disableNext: en,
                isModeratorReport: P,
                onClick: eo,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: r.length > 0,
                className: ec.qr,
            }),
        ],
    });
};
var li = l(543829);
let ls = (e) => {
    let {
            reportType: t,
            menu: l,
            modalProps: g,
            onSubmit: p,
            onNavigate: _,
            emailToken: v,
            isAuthenticated: j = !0,
        } = e,
        b = (0, o.GV)(),
        { nodes: A, root_node_id: f, success_node_id: N, fail_node_id: S } = l,
        [E, T] = a.useState(f),
        [y, C] = a.useState(void 0),
        [I, k] = a.useState(void 0),
        [M, D] = a.useState([]),
        [R, O] = a.useState(void 0),
        [w, G] = a.useState(void 0),
        [L, U] = a.useState(void 0);
    (0, d.Ay)(() => {
        (0, m.VE)();
    });
    let P = (e) => {
        let { destination: l } = e,
            [, n] = l,
            a = A[n];
        if (void 0 === a) return void c.A.increment({ name: i.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
        if (a.elements.some((e) => "skip" === e.type) && a.button?.type === "next")
            return P({ ...e, destination: ["", a.button.target] });
        if (
            (D([...M, e]),
            null != a.key && _?.(a.key),
            C(void 0),
            k(void 0),
            t.name === x.t0.MESSAGE || t.name === x.t0.FIRST_DM)
        ) {
            let e = t.record.id;
            u.Ay.trackWithMetadata(et.HAw.IAR_NAVIGATE, {
                message_id: e,
                content_type: t.name,
                report_sub_type: a.report_type,
                current_node: A[E].id,
                next_node: a.id,
            });
        }
        T(n);
    };
    async function B(e) {
        let n = j ? await (0, h.zC)(l, t, [...M, e]) : await (0, h.bo)(l, t, [...M, e], v),
            a = n?.body?.report_id;
        (null != a && O(a), G(A[e.nodeRef].report_type), p?.(a));
    }
    function V() {
        if (M.length < 1) return;
        let e = [...M],
            l = e.pop(),
            n = l?.nodeRef ?? f;
        if (t.name === x.t0.MESSAGE || t.name === x.t0.FIRST_DM) {
            let e = t.record.id;
            u.Ay.trackWithMetadata(et.HAw.IAR_NAVIGATE, {
                message_id: e,
                content_type: t.name,
                report_sub_type: A[n].report_type,
                current_node: A[E].id,
                next_node: A[n].id,
            });
        }
        (C(l?.multiSelect?.state), k(l?.textInput), T(n), D(e), _?.(".."));
    }
    let H = a.useCallback(
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
            (U(t), T(l.id));
        },
        [A, M],
    );
    a.useEffect(() => {
        null != L && U(void 0);
    }, [L]);
    let W = a.useMemo(() => {
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
                            className: li.B,
                            children: (0, n.jsx)(la, {
                                node: e,
                                reportType: t,
                                reportSubType: w,
                                history: M,
                                onModalClose: g.onClose,
                                onSelectChild: P,
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
