l.d(t, { default: () => ld }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(731738),
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
    p = l(815021),
    _ = l(534514),
    v = l(683071),
    j = l(235986),
    b = l(834981),
    A = l(840387),
    N = l(403362),
    f = l(478437),
    S = l(873298),
    E = l(885386),
    T = l(375708);
let C = {
    getTitle: () => T.intl.string(T.t.vJOqMB),
    getDisabledTitle: () => T.intl.string(T.t["B5ZvY+"]),
    getDescription: () => T.intl.string(T.t["43UEUh"]),
    eligibleReportSubtypes: [x.TS.SUB_SPAM],
    eligibleChannelTypes: [f.r.DM, f.r.GROUP_DM],
    onApply: () => E.he.updateSetting(S.he.NON_FRIENDS),
    predicate: () => E.he.getSetting() === S.he.DISABLED,
};
var y = l(444802);
let I = {
    getTitle: () => T.intl.string(T.t.RVX1zT),
    getDisabledTitle: () => T.intl.string(T.t.SYkEBi),
    getDescription: () => T.intl.string(T.t.aqlmp8),
    eligibleReportSubtypes: [x.TS.SUB_GORE, x.TS.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, y.qY)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: l } = (0, y.T4)(),
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
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: l } = (0, y.T4)();
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
        [x.Wb.SAFETY_DM_SPAM_FILTER]: C,
        [x.Wb.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: M,
        [x.Wb.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: I,
    };
var R = l(825484),
    O = l(821609),
    w = l(221314);
let L = (e) => {
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
                            onClick: () => {
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
var G = l(17928),
    U = l(692617),
    P = l(834730),
    B = l(824552),
    V = l(573435),
    H = l(973172),
    W = l(186272),
    F = l(546183),
    z = l(935208),
    $ = l(80701),
    K = l(532406);
let Q = (e) => {
    let { entry: t } = e,
        { name: l } = t,
        i = (0, G.bG)([F.default], () => F.default.getNewestTokenForApplication(t.id)),
        s = t.getIconURL(40) ?? K,
        r = (0, H.A)({ application: t }),
        d = a.useRef(!1);
    a.useEffect(() => {
        d.current || (B.A.fetch(), (d.current = !0));
    }, []);
    let u = null != i ? z.default.extractTimestamp(i.id) : void 0;
    return (0, n.jsxs)("div", {
        className: $.kL,
        children: [
            (0, n.jsx)(_.D, {
                className: $.wx,
                variant: "heading-sm/semibold",
                children: T.intl.string(T.t["aYfK/w"]),
            }),
            (0, n.jsx)("div", {
                className: $.vU,
                children: (0, n.jsxs)("div", {
                    className: $.qi,
                    children: [
                        (0, n.jsx)(V.Ay, {
                            mask: V.Ay.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: $.VE,
                            children: (0, n.jsx)("img", { src: s, alt: "", className: $.Z2 }),
                        }),
                        (0, n.jsxs)("div", {
                            className: $.FS,
                            children: [
                                (0, n.jsx)(P.E, { color: "text-strong", variant: "text-md/medium", children: l }),
                                r.length > 0
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(P.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, W.A)(r.length),
                                              }),
                                              (0, n.jsx)(U.A, { className: $.uM, guilds: r, maxGuilds: 6 }),
                                          ],
                                      })
                                    : (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(P.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: t.bot?.tag,
                                              }),
                                              null != u &&
                                                  (0, n.jsx)(P.E, {
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
var Y = l(717398),
    q = l(381689),
    J = l(632738),
    Z = l(734057),
    X = l(994500),
    ee = l(562153),
    et = l(652215);
let el = (e) => {
    let { user: t, channelId: l, reportId: i, reportType: s } = e,
        r = (0, G.bG)([X.A], () => X.A.isBlocked(t.id), [t.id]),
        d = (0, G.bG)([Z.A], () => Z.A.getChannel(l), [l]),
        o = a.useMemo(() => ee.Ay.getName(d?.guild_id, d?.id, t), [d, t]),
        c = a.useCallback(() => {
            u.Ay.trackWithMetadata(et.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                Y.A.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    q.A.showBlockSuccessToast(t.id, l);
                });
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
var en = l(735438),
    ea = l(660261);
let ei = (e) => {
    let t = (0, en.flatMap)(e.history, (e) => {
        let {
                destination: [t],
                multiSelect: l,
            } = e,
            n = [null, null],
            a = Object.values(l?.state ?? {});
        return a.length > 0 && (n[0] = a.join(", ")), "" !== t && (n[1] = t), n;
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, n.jsxs)("div", {
              className: ea.kL,
              children: [
                  (0, n.jsx)(_.D, {
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
var es = l(503698),
    er = l.n(es),
    ed = l(939249),
    eu = l(865116),
    eo = l(147925),
    ec = l(777148),
    em = l(797982);
let ex = (e) => {
        let { child: t, onClick: l, nodeMap: a } = e,
            [i, s] = t,
            r = (0, G.bG)([eu.Ay], () => eu.Ay.get("iar_show_report_sub_type_labels")),
            d = a[s],
            u = d?.report_type;
        return (0, n.jsxs)(ed.D, {
            className: er()(em.Zm, ec.lD),
            onClick: () => l(t),
            children: [
                (0, n.jsxs)("div", {
                    className: em.OH,
                    children: [
                        (0, n.jsx)(P.E, { className: em.ix, variant: "text-md/normal", children: i }),
                        r &&
                            null != u &&
                            (0, n.jsx)(P.E, {
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
l(323874), l(14289), l(35956);
var eg = l(331322),
    ep = l(292666),
    e_ = l(46054),
    ev = l(791332),
    ej = l.n(ev),
    eb = l(349288);
let eA = {
    ...ej().defaultRules.link,
    react: function (e, t, l) {
        return (0, n.jsx)(eb.Anchor, { href: e.target, target: "_blank", children: t(e.content, l) });
    },
};
var eN = l(775923),
    ef = l(818050);
let eS = ["cdn.discordapp.com", "media.discordapp.net"],
    eE = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    eT = (0, N.m6)()
        ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/
        : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;
function eC(e) {
    try {
        return new URL(e), !0;
    } catch {
        return !1;
    }
}
function ey(e) {
    return (
        "" !== e &&
        !!eC(e) &&
        !(function (e) {
            try {
                let t = new URL(e);
                if (eS.some((e) => t.hostname === e) || ((0, N.m6)() && eE.test(t.hostname))) return !0;
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
            [A, N] = a.useState(!1);
        a.useEffect(() => {
            h(u?.value ?? ""), p(o?.value ?? ""), u?.value != null && "" !== u.value && N(ey(u.value));
        }, [u, o]);
        let f = a.useCallback(
                (e) => {
                    if ((h(e), "" === e)) {
                        v(null), N(!1), p(""), b(null), d({ value: e, isValid: !1 });
                        return;
                    }
                    if (!eC(e)) {
                        v(T.intl.string(T.t["24xrGb"])), N(!1), p(""), b(null), d({ value: e, isValid: !1 });
                        return;
                    }
                    let t = ey(e);
                    N(t),
                        v(null),
                        t
                            ? "" === g
                                ? d({ value: e, isValid: !1 })
                                : eT.test(g)
                                  ? d({ value: e, isValid: !0 }, { value: g, isValid: !0 })
                                  : d({ value: e, isValid: !1 }, { value: g, isValid: !1 })
                            : (p(""), b(null), d({ value: e, isValid: !0 }));
                },
                [d, g],
            ),
            S = a.useCallback(
                (e) => {
                    if ((p(e), "" === e || !eT.test(e))) {
                        b(T.intl.string(T.t["24xrGb"])), d({ value: x, isValid: !1 }, { value: e, isValid: !1 });
                        return;
                    }
                    b(null), d({ value: x, isValid: !0 }, { value: e, isValid: !0 });
                },
                [d, x],
            );
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsxs)(eg.B, {
                    gap: 16,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ef.QB,
                            children: [
                                null != t &&
                                    (0, n.jsx)("div", {
                                        className: ef.QB,
                                        children: (0, n.jsxs)(P.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [t, c && (0, n.jsx)("span", { className: eN.m, children: "*" })],
                                        }),
                                    }),
                                (0, n.jsx)(ep.k, { onChange: f, value: x, error: _, placeholder: i, autoFocus: !0 }),
                            ],
                        }),
                        A &&
                            null != s &&
                            (0, n.jsxs)("div", {
                                className: ef.QB,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: ef.QB,
                                        children: (0, n.jsxs)(P.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [s, c && (0, n.jsx)("span", { className: eN.m, children: "*" })],
                                        }),
                                    }),
                                    (0, n.jsx)(ep.k, { onChange: S, value: g, error: j, placeholder: r }),
                                ],
                            }),
                    ],
                }),
                null != l && (0, n.jsx)(P.E, { variant: "text-xs/normal", children: m(l) }),
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
var eM = l(783878),
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
        className: ef.QB,
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
    ew = l(869003);
let eL = (e) => {
    let { application: t, reportId: l } = e,
        [i, s] = a.useState(!1),
        r = (0, G.bG)([F.default], () => F.default.getNewestTokenForApplication(t.id));
    a.useEffect(() => {
        null != r && s(!0);
    }, [r]);
    let d = a.useRef(!1);
    a.useEffect(() => {
        d.current || (B.A.fetch(), (d.current = !0));
    }, []);
    let o = (0, G.bG)([eO.Ay], () => eO.Ay.getSelfEmbeddedActivities()),
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
            B.A.delete(r.id);
            let e = o.get(t.id);
            null != e && ew.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
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
var eG = l(720149),
    eU = l(576705);
let eP = (e) => {
    let { message: t, reportId: l } = e,
        [i, s] = a.useState(!1),
        r = a.useCallback(() => {
            s(!0),
                u.Ay.trackWithMetadata(et.HAw.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: l }),
                eG.A.deleteMessage(t.getChannelId(), t.id);
        }, [t, l]),
        d = a.useMemo(() => {
            let e = Z.A.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== et.rbe.DM &&
                e.type !== et.rbe.GROUP_DM &&
                eU.A.canWithPartialContext(et.xBc.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && d
        ? (0, n.jsx)(J.PQ, {
              title: T.intl.string(T.t.c9BHL9),
              description: T.intl.string(T.t.dK8S0w),
              buttonText: i ? T.intl.string(T.t.f3pnLL) : T.intl.string(T.t.ch2xbt),
              buttonDisabled: i,
              buttonVariant: "critical-primary",
              onButtonPress: r,
          })
        : null;
};
var eB = l(691885);
let eV = (e) => {
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
                className: ef.QB,
                children: (0, n.jsx)(eB.l, {
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
    eH = (e) => {
        let { elements: t, onChange: l, state: a } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, n.jsx)(
                    eV,
                    { element: e, initialOption: a?.[t]?.value ?? void 0, onChange: (e) => l(t, e) },
                    t,
                );
            });
        return (0, n.jsx)("div", { children: i });
    };
var eW = l(509434),
    eF = l(975807),
    ez = l(135363);
let e$ = (e) => {
    let {
        data: { url: t, link_text: l, link_description: a, is_localized: i },
    } = e;
    return i
        ? (0, n.jsxs)(ed.D, {
              role: "link",
              className: er()(ez.$J, ec.lD),
              onClick: () => {
                  (0, eF.A)(t);
              },
              children: [
                  (0, n.jsxs)("div", {
                      className: ez.xU,
                      children: [
                          (0, n.jsx)(P.E, { className: ez.__invalid_linkText, variant: "text-md/normal", children: l }),
                          null != a &&
                              "" !== a &&
                              (0, n.jsx)(P.E, { variant: "text-md/normal", color: "text-muted", children: a }),
                      ],
                  }),
                  (0, n.jsx)(eW.I, { size: "sm", color: "currentColor", className: ez.wP }),
              ],
          })
        : null;
};
function eK(e) {
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
            return (0, n.jsx)(e$, { data: l }, `external-link+${t}`);
        }),
        a = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, n.jsxs)("div", {
        className: er()(ez.nV, ec.E8),
        children: [
            !a &&
                (0, n.jsx)(_.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: ez.wx,
                    children: T.intl.string(T.t.hvVgAZ),
                }),
            l,
        ],
    });
}
var eQ = l(260598);
let eY = (e) => {
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
                    className: ef.QB,
                    children: [
                        null != t &&
                            (0, n.jsxs)(P.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: [t, m && (0, n.jsx)("span", { className: eN.m, children: "*" })],
                            }),
                        null != i &&
                            (0, n.jsx)("div", {
                                className: ef.a5,
                                children: (0, n.jsx)(P.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: i,
                                }),
                            }),
                    ],
                }),
                1 === r
                    ? (0, n.jsx)(ep.k, { maxLength: d, onChange: v, value: h, error: p, placeholder: s })
                    : (0, n.jsx)(eQ.f, { maxLength: d, onChange: v, value: h, error: p, rows: r, placeholder: s }),
                null != l &&
                    (0, n.jsx)("div", {
                        className: ef.a5,
                        children: (0, n.jsx)(P.E, { variant: "text-xs/normal", color: "text-muted", children: x(l) }),
                    }),
            ],
        });
    },
    eq = (e) => {
        let { elements: t, onChange: l, state: a } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, n.jsx)(
                    eY,
                    {
                        data: e.data,
                        onChange: (e) => l(t, e.value, e.isValid),
                        initialText: a?.[t] ?? void 0,
                        isRequired: e.should_submit_data,
                    },
                    t,
                );
            });
        return (0, n.jsx)("div", { className: eN.k, children: i });
    };
var eJ = l(548118),
    eZ = l(71393),
    eX = l(729985);
let e0 = (e) => {
    let { entry: t } = e,
        l = Z.A.getChannel(t.channelId);
    if (null == l) return null;
    let a = eZ.A.getGuild(l.guild_id);
    return null == a
        ? null
        : (0, n.jsxs)("div", {
              className: eX.kL,
              children: [
                  (0, n.jsx)(_.D, {
                      className: eX.wx,
                      variant: "heading-sm/semibold",
                      children: T.intl.string(T.t.nTe4HC),
                  }),
                  (0, n.jsxs)("div", {
                      className: eX.bo,
                      children: [
                          (0, n.jsxs)("div", {
                              className: eX.mo,
                              children: [
                                  (0, n.jsx)(eJ.Ay, { guild: a, size: eJ.Ay.Sizes.MINI, className: eX.xG }),
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
var e1 = l(486020),
    e3 = l(369640);
let e8 = (e) => {
    let { entry: t } = e,
        { id: l, icon: a, name: i } = t,
        s = e1.Ay.getGuildIconURL({ id: l, icon: a, size: 32 }) ?? void 0;
    return (0, n.jsxs)("div", {
        className: e3.kL,
        children: [
            (0, n.jsx)(_.D, { className: e3.wx, variant: "heading-sm/semibold", children: T.intl.string(T.t.nTe4HC) }),
            (0, n.jsx)("div", {
                className: e3.bo,
                children: (0, n.jsxs)("div", {
                    className: e3.OA,
                    children: [
                        (0, n.jsx)(V.Ay, {
                            mask: V.Ay.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: e3.$d,
                            children: (0, n.jsx)("img", { src: s, alt: "", className: e3.$f }),
                        }),
                        (0, n.jsx)(P.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                    ],
                }),
            }),
        ],
    });
};
var e2 = l(306032);
let e4 = (e) => {
    let { guild: t } = e;
    return (0, n.jsxs)("div", {
        className: e2.kL,
        children: [
            (0, n.jsx)(_.D, {
                className: e2.wx,
                variant: "heading-sm/semibold",
                children: T.intl.string(T.t["0ox7Hq"]),
            }),
            (0, n.jsx)("div", {
                className: e2.bo,
                children: (0, n.jsxs)("div", {
                    className: e2.OA,
                    children: [
                        (0, n.jsx)("div", {
                            className: e2.$f,
                            children: (0, n.jsx)(eJ.Ay, { guild: t, size: eJ.Ay.Sizes.LARGE }),
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
var e9 = l(891245);
let e7 = (e) => {
    let { event: t } = e,
        l = (0, G.bG)([eZ.A], () => eZ.A.getGuild(t.guild_id));
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: e9.kL,
              children: [
                  (0, n.jsx)(_.D, {
                      className: e9.wx,
                      variant: "heading-sm/semibold",
                      children: T.intl.string(T.t.SDTOL7),
                  }),
                  (0, n.jsxs)("div", {
                      className: e9.bo,
                      children: [
                          (0, n.jsxs)("div", {
                              className: e9.OA,
                              children: [
                                  (0, n.jsx)(eJ.Ay, { guild: l, size: eJ.Ay.Sizes.MINI, className: e9.$f }),
                                  (0, n.jsx)(P.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: l.name,
                                  }),
                              ],
                          }),
                          (0, n.jsx)(P.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
var e6 = l(900772);
let e5 = (e) => {
        let {
                node: { header: t, subheader: l, button: i },
                isModeratorReport: s,
                isTidaReport: r = !1,
                hideTitle: d = !1,
            } = e,
            u = i?.type === "submit",
            o = a.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: eA }), []);
        return (0, n.jsxs)("div", {
            className: e6.N,
            children: [
                d || null == t || "" === t
                    ? null
                    : (0, n.jsx)(_.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                null != l && "" !== t
                    ? (0, n.jsx)(P.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: e6.m,
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
    te = (e) => {
        let { user: t, channelId: l, reportId: i } = e,
            { isIgnored: s, isBlocked: r } = (0, G.cf)(
                [X.A],
                () => ({ isIgnored: X.A.isIgnored(t.id), isBlocked: X.A.isBlocked(t.id) }),
                [t],
            ),
            d = (0, G.bG)([Z.A], () => Z.A.getChannel(l), [l]),
            o = a.useMemo(() => ee.Ay.getName(d?.guild_id, d?.id, t), [d, t]),
            c = a.useCallback(() => {
                u.Ay.trackWithMetadata(et.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                    Y.A.ignoreUser(t.id, "web_iar_ignore_user_element", l);
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
var tt = l(512950),
    tl = l(21883);
let tn = (e) => {
        let {
                node: { info: t },
            } = e,
            l = a.useMemo(() => e_.A.reactParserFor({ ...e_.A.defaultRules, link: eA }), []);
        return null == t ? null : (0, n.jsx)(tt.p, { className: tl.e, messageType: tt.Y.INFO, children: l(t) });
    },
    ta = e_.A.reactParserFor({ ...e_.A.defaultRules, link: eA }),
    ti = (e) => {
        let { element: t } = e,
            { body: l, notice_type: a } = t.data;
        return (0, n.jsx)(v.w, { type: a, children: ta(l) });
    };
var ts = l(314116),
    tr = l(468689);
let td = (e) => {
    let { guildId: t, reportId: l } = e,
        [i, s] = a.useState(!1),
        r = eZ.A.getGuild(t),
        d = null != r;
    a.useEffect(() => {
        s(!d);
    }, [d]);
    let o = a.useCallback(() => {
        s(!0),
            u.Ay.trackWithMetadata(et.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, { guild_id: t, report_id: l }),
            tr.A.leaveGuild(t);
    }, [t, l]);
    return null == r
        ? null
        : (0, n.jsx)(J.PQ, {
              title: T.intl.string(T.t.cU96ip),
              description: T.intl.formatToPlainString(T.t["26mR6/"], { guildName: r?.name }),
              buttonText: i ? T.intl.string(T.t["9Ak99h"]) : T.intl.string(T.t.F3qExp),
              buttonDisabled: i,
              buttonVariant: "critical-primary",
              onButtonPress: () => {
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
    tx = l(291812),
    th = l(639288),
    tg = l(805964),
    tp = l(375199),
    t_ = l(838541),
    tv = l(121940);
let tj = (e) => {
    let { message: t } = e,
        l = (0, tc.Ay)(t),
        i = (0, G.bG)([Z.A], () => Z.A.getChannel(t.channel_id)),
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
                  (0, n.jsx)(_.D, {
                      className: tv.wx,
                      variant: "heading-sm/semibold",
                      children: T.intl.string(T.t.iouM3a),
                  }),
                  (0, n.jsx)(tu.Ip, {
                      className: tv.PI,
                      children: (0, n.jsx)(tm.A, {
                          childrenMessageContent: u(),
                          childrenHeader: (0, n.jsx)(th.Ay, { message: t, channel: i, author: l, guildId: i.guild_id }),
                          disableInteraction: !0,
                          author: l,
                      }),
                  }),
              ],
          });
};
var tb = l(150934),
    tA = l(986188);
let tN = (e) => {
        let { onChange: t, label: l, subtitle: a, selected: i } = e;
        return (0, n.jsx)("div", {
            className: tA.yc,
            children: (0, n.jsx)(tb.S, { checked: i, onChange: t, label: l, description: a }),
        });
    },
    tf = (e) => {
        let { element: t, title: l, state: a, onChange: i } = e;
        if (t?.type !== "checkbox") return null;
        let { data: s } = t;
        return (0, n.jsxs)("div", {
            children: [
                null != l &&
                    (0, n.jsxs)(P.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: tA.DD,
                        children: [l, t.should_submit_data && (0, n.jsx)("span", { className: tA.mw, children: "*" })],
                    }),
                s.map((e, t) => {
                    let [l, s, r] = e;
                    return (0, n.jsx)(
                        tN,
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
let tC = (e) => {
    let { user: t, channelId: l, reportId: i } = e,
        s = Z.A.getDMFromUserId(t.id),
        r = (0, G.bG)([Z.A], () => Z.A.getChannel(l), [l]),
        d = a.useMemo(() => ee.Ay.getName(r?.guild_id, r?.id, t), [r, t]),
        o = (0, G.bG)([tE.Ay], () => (null == s ? null : tE.Ay.isChannelMuted(null, s))),
        [c, m] = a.useState(o ?? !1),
        x = a.useCallback(() => {
            null != s &&
                (m(!0),
                u.Ay.trackWithMetadata(et.HAw.IAR_MUTE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                tS.A.updateChannelOverrideSettings(null, s, { muted: !0 }, tT.fd.Muted),
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
var ty = l(773812),
    tI = l(405977);
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
            (0, n.jsxs)(P.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: tI.P,
                children: [r, t.should_submit_data && (0, n.jsx)("span", { className: tI.m, children: "*" })],
            }),
            (0, n.jsx)(ty.z, { value: o, onChange: x, options: m }),
        ],
    });
};
var tM = l(146985);
function tD(e) {
    let { children: t, title: l } = e;
    return (0, n.jsxs)("div", {
        className: tM.kL,
        children: [
            (0, n.jsx)(_.D, {
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
let tL = (e) => {
    let { application: t, reportId: l } = e,
        [i, s] = a.useState(!1),
        [r, d] = a.useState(!1),
        o = (0, G.bG)([tw.A, Z.A], () => Z.A.getChannel(tw.A.getChannelId())?.guild_id),
        [c, m] = a.useState(null);
    a.useEffect(() => {
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
        }, [o, t.id]);
    let x = a.useCallback(() => {
            d(!1),
                u.Ay.trackWithMetadata(et.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: o,
                    application_id: t.id,
                    report_id: l,
                }),
                null != o &&
                    null != c &&
                    tr.A.disableIntegration(o, c.id).catch(() => {
                        tR.A.show({ title: T.intl.string(T.t.wYqMmI), body: T.intl.string(T.t.A4Mnst) });
                    });
        }, [t.id, o, c, l]),
        h = (0, G.bG)([eU.A, eZ.A], () => {
            let e = eZ.A.getGuild(o);
            if (null == e) return !1;
            let l = eU.A.can(et.xBc.MANAGE_GUILD, e),
                n = null == t.bot || eU.A.canManageUser(et.xBc.MANAGE_GUILD, t.bot.id, e);
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
var tG = l(123292),
    tU = l(780964),
    tP = l(766075),
    tB = l(998436);
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
                i(), u(!0), s(h.lJ.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function tH(e) {
    var t;
    let { settingsUpsells: l, channelId: i, onModalClose: s, reportId: r, reportType: d, reportSubType: o } = e,
        c = (0, G.bG)([Z.A], () => Z.A.getChannel(i)),
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
                        .filter(N.Vq),
                [l, t],
            )),
        x = (0, h.Mw)(d, o, r);
    return 0 === m.length
        ? null
        : (0, n.jsxs)("div", {
              className: tB.kL,
              children: [
                  (0, n.jsx)(_.D, {
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
                  (0, n.jsx)(tG.Q, {
                      text: T.intl.string(T.t.olebGx),
                      onClick: () => {
                          (0, tP.openUserSettings)(tU.X.CONTENT_AND_SOCIAL_PANEL),
                              s(),
                              u.Ay.trackWithMetadata(et.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: r,
                                  report_type: d.name,
                                  report_subtype: o,
                                  action: h.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
var tW = l(857250),
    tF = l(691540),
    tz = l(97483),
    t$ = l(899847);
let tK = (e) => {
    let { parents: t } = e,
        [l, i] = a.useState(!1),
        s = a.useCallback(() => {
            (0, t$.Xz)()
                .then(() => {
                    (0, tF.P0)(
                        (0, tW.o)(
                            T.intl.formatToPlainString(T.t.wr4IT5, {
                                count: t.length,
                                parent1: t[0].username,
                                parent2: t[1]?.username,
                                parent3: t[2]?.username,
                            }),
                            tz.Ck.SUCCESS,
                        ),
                    ),
                        i(!0);
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
var tQ = l(618282);
let tY = (e) => {
    let { stageInstance: t } = e,
        l = eZ.A.getGuild(t.guild_id);
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: tQ.kL,
              children: [
                  (0, n.jsx)(_.D, {
                      className: tQ.wx,
                      variant: "heading-sm/semibold",
                      children: T.intl.string(T.t.InbJ8x),
                  }),
                  (0, n.jsxs)("div", {
                      className: tQ.bo,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tQ.OA,
                              children: [
                                  (0, n.jsx)(eJ.Ay, { guild: l, size: eJ.Ay.Sizes.MINI, className: tQ.$f }),
                                  (0, n.jsx)(P.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: l.name,
                                  }),
                              ],
                          }),
                          (0, n.jsx)(P.E, { variant: "text-md/semibold", color: "text-strong", children: t.topic }),
                      ],
                  }),
              ],
          });
};
var tq = l(810685),
    tJ = l(540606);
let tZ = (e) => {
    let { element: t } = e;
    return t?.type !== "success"
        ? null
        : (0, n.jsx)("div", {
              className: tJ.t,
              children: (0, n.jsx)(tq.M, { alt: "", ariaHidden: !0, role: "presentation" }),
          });
};
var tX = l(704786);
function t0(e) {
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
                      (0, n.jsx)(_.D, {
                          variant: "heading-sm/semibold",
                          color: "text-default",
                          className: tX.w,
                          children: t,
                      }),
                  null != l &&
                      (0, n.jsx)(P.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: tX.r,
                          children: s(l),
                      }),
              ],
          })
        : null;
}
var t1 = l(957565),
    t3 = l(415924);
function t8(e) {
    let {
            element: {
                data: { title: t, body: l, sms: i, is_localized: s },
            },
        } = e,
        [r, d] = a.useState(!1),
        u = a.useRef(e_.A.reactParserFor(e_.A.defaultRules));
    return s
        ? (0, n.jsxs)("div", {
              className: t3.kL,
              children: [
                  (0, n.jsx)(_.D, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: t3.wx,
                      children: t,
                  }),
                  (0, n.jsx)(P.E, { variant: "text-sm/normal", className: t3.G3, children: u.current(l) }),
                  (0, n.jsx)("div", {
                      children: (0, n.jsxs)("div", {
                          className: er()(t3.GH, { [t3.pG]: r }),
                          children: [
                              (0, n.jsx)(P.E, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: t3.Kk,
                                  children: i,
                              }),
                              (0, n.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: t3.__invalid_trailingButton,
                                  children: (0, n.jsx)(O.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: r ? T.intl.string(T.t.t5VZ88) : T.intl.string(T.t.OpuAlK),
                                      onClick: () => {
                                          (0, t1.C)(i, () => d(!0));
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
    t4 = l(730134),
    t9 = l(896736);
let t7 = (e) => {
    let { user: t } = e;
    return (0, n.jsxs)("div", {
        className: t9.kL,
        children: [
            (0, n.jsx)(_.D, { className: t9.wx, variant: "heading-sm/semibold", children: T.intl.string(T.t.Rsth7z) }),
            (0, n.jsx)("div", {
                className: t9.f1,
                children: (0, n.jsxs)("div", {
                    className: t9.eF,
                    children: [
                        (0, n.jsx)(t4.A, { className: t9.Hk, user: t, size: t2._3.SIZE_40 }),
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
var t6 = l(941127),
    t5 = l(287809),
    le = l(858331);
let lt = (e) => {
        let { widget: t, userId: l } = e,
            a = (0, G.bG)([t5.default], () => t5.default.getUser(l));
        return null == a
            ? null
            : (0, n.jsxs)("div", {
                  className: le.k,
                  children: [
                      (0, n.jsx)(_.D, {
                          className: le.w,
                          variant: "heading-sm/semibold",
                          children: T.intl.string(T.t.SpsnDY),
                      }),
                      (0, n.jsx)(t6.u, { widget: t, user: a, disableInteraction: !0 }),
                  ],
              });
    },
    ll = ["ignore_users", "block_users", "leave_guild", "delete_message", "deauthorize_app", "share_with_parents"],
    ln = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function la(e, t) {
    let { elements: l } = e;
    return l.find((e) => {
        let { type: l } = e;
        return l === t;
    });
}
function li(e, t) {
    let { elements: l } = e;
    return l.filter((e) => {
        let { type: l } = e;
        return l === t;
    });
}
let ls = (e) => {
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
            reportId: N,
            textInput: f,
            initialErrorMessage: S,
        } = e,
        E = la(t, "checkbox"),
        C = la(t, "text_line_resource"),
        y = li(t, "external_link"),
        I = li(t, "free_text"),
        k = li(t, "dropdown"),
        M = la(t, "country_select"),
        R = la(t, "inline_notice"),
        O = li(t, "radio_group"),
        G = la(t, "text"),
        U = la(t, "content_url_input"),
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
                e in K ? delete l[e] : (l[e] = t), Y(l);
            },
            [K],
        ),
        es = a.useCallback(
            function (e, t) {
                let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    i = { ...q };
                (i[e] = { value: t, isValid: l }),
                    null != n && (null != a && "" !== a ? (i[n] = { value: a, isValid: l }) : delete i[n]),
                    J(i);
            },
            [q],
        ),
        er = a.useCallback(
            (e) => {
                d(ee(e));
            },
            [d, ee],
        );
    a.useEffect(() => {
        null != m && Y(m), null != f && J(f);
    }, [m, f]),
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
        }, [E]);
    let ed = a.useCallback(
            (e) => {
                switch (e) {
                    case et.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = T.intl.string(T.t["2EPoxE"]);
                        $(e), c?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
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
                    $(""), er(t);
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
                        H(!0), eu();
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
        eg = null != la(t, "ignore_users") && ("message" === l.name || "first_dm" === l.name || "user" === l.name),
        ep = (0, A.Z)(),
        e_ = (0, b.GR)(),
        ev = ep && e_.length > 0 && null != la(t, "share_with_parents");
    return (0, n.jsxs)("div", {
        className: ec.kL,
        onKeyDown: em,
        children: [
            (0, n.jsx)("div", {
                className: ec.U1,
                children:
                    null != t.header && "" !== t.header
                        ? (0, n.jsx)(_.D, { variant: "heading-lg/semibold", color: "text-strong", children: t.header })
                        : null,
            }),
            (0, n.jsx)("div", { className: ec.b, children: (0, n.jsx)(p.J, { onClick: u }) }),
            (0, n.jsxs)(s.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                direction: j.A.Direction.VERTICAL,
                className: ec.wx,
                children: [
                    (0, n.jsx)(tZ, { element: la(t, "success") }),
                    (0, n.jsx)(e5, { node: t, isModeratorReport: P, isTidaReport: B, hideTitle: !0 }),
                    (0, n.jsx)(tn, { node: t }),
                ],
            }),
            (0, n.jsxs)(s.$m, {
                "data-migration-pending": !0,
                className: ec.rf,
                children: [
                    null != C && (0, n.jsx)(t8, { element: C }),
                    null != G && (0, n.jsx)(t0, { element: G }),
                    null != la(t, "message_preview") &&
                        ("message" === l.name || "first_dm" === l.name || "report_to_mod_message" === l.name) &&
                        (0, n.jsx)(tj, { message: l.record }),
                    null != la(t, "user_preview") && "user" === l.name ? (0, n.jsx)(t7, { user: l.record }) : null,
                    null != la(t, "widget_preview") && "widget" === l.name
                        ? (0, n.jsx)(lt, { widget: l.widget, userId: l.user_id })
                        : null,
                    null != la(t, "guild_preview") && "guild" === l.name ? (0, n.jsx)(e4, { guild: l.record }) : null,
                    null != la(t, "breadcrumbs") && (0, n.jsx)(ei, { isModeratorReport: P, history: r }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return ll.includes(t);
                        });
                    })(t) &&
                        (0, n.jsxs)(tD, {
                            children: [
                                eg &&
                                    (0, n.jsx)(te, {
                                        user: "user" === l.name ? l.record : l.record.author,
                                        channelId: X,
                                        reportId: N,
                                    }),
                                ev && (0, n.jsx)(tK, { parents: e_ }),
                                null != la(t, "block_users") &&
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
                                        reportId: N,
                                        reportType: l,
                                    }),
                                !eg &&
                                    null != la(t, "mute_users") &&
                                    ("message" === l.name ||
                                        "first_dm" === l.name ||
                                        "user" === l.name ||
                                        "report_to_mod_message" === l.name) &&
                                    (0, n.jsx)(tC, {
                                        user: "user" === l.name ? l.record : l.record.author,
                                        channelId: X,
                                        reportId: N,
                                    }),
                                null != la(t, "delete_message") &&
                                    ("message" === l.name || "report_to_mod_message" === l.name) &&
                                    (0, n.jsx)(eP, { message: l.record, reportId: N }),
                                null != la(t, "leave_guild") &&
                                    "guild" === l.name &&
                                    (0, n.jsx)(td, { guildId: l.record.id, reportId: N }),
                                null != la(t, "deauthorize_app") &&
                                    "application" === l.name &&
                                    (0, n.jsx)(eL, { application: l.record, reportId: N }),
                                null != la(t, "deauthorize_app") &&
                                    "application" === l.name &&
                                    (0, n.jsx)(tL, { application: l.record, reportId: N }),
                            ],
                        }),
                    null != la(t, "settings_upsells") &&
                        ("message" === l.name || "report_to_mod_message" === l.name) &&
                        null != ex &&
                        (0, n.jsx)(tH, {
                            settingsUpsells: ex,
                            channelId: l.record.channel_id,
                            onModalClose: u,
                            reportId: N,
                            reportType: l,
                            reportSubType: i,
                        }),
                    null != la(t, "channel_preview") &&
                        "stage_channel" === l.name &&
                        (0, n.jsx)(tY, { stageInstance: l.record }),
                    null != la(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === l.name &&
                        (0, n.jsx)(e7, { event: l.record }),
                    null != la(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === l.name &&
                        (0, n.jsx)(e0, { entry: l.record }),
                    null != la(t, "guild_discovery_preview") &&
                        "guild_discovery" === l.name &&
                        (0, n.jsx)(e8, { entry: l.record }),
                    null != la(t, "app_preview") && "application" === l.name && (0, n.jsx)(Q, { entry: l.record }),
                    null != E && (0, n.jsx)(tf, { element: E, onChange: ea, state: K }),
                    ln.includes(l.name) && null != U && (0, n.jsx)(ek, { element: U, onChange: es, state: q }),
                    ln.includes(l.name) &&
                        null != k &&
                        k.length > 0 &&
                        (0, n.jsx)("div", { children: (0, n.jsx)(eH, { elements: k, onChange: es, state: q }) }),
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
                                    : la(t, n.element_type);
                            return null != a && l?.[a.name]?.value === n.value;
                        })(R, t, q) &&
                        (0, n.jsx)(ti, { element: R }),
                    null != M && (0, n.jsx)(eR, { element: M, onChange: es, state: q }),
                    ln.includes(l.name) &&
                        null != I &&
                        I.length > 0 &&
                        (0, n.jsx)(eq, { elements: I, onChange: es, state: q }),
                    ((null != t.children && t.children.length > 0) || (null != y && y.length > 0)) &&
                        (0, n.jsxs)("div", {
                            className: ec.qI,
                            children: [
                                (0, n.jsx)(eh, { node: t, onSelectChild: er, nodeMap: e.nodeMap }),
                                null != y && y.length > 0 ? (0, n.jsx)(eK, { elements: y }) : null,
                            ],
                        }),
                    "" !== z
                        ? (0, n.jsx)("div", { ref: Z, children: (0, n.jsx)(v.w, { type: "critical", children: z }) })
                        : null,
                ],
            }),
            (0, n.jsx)(L, {
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
var lr = l(85864);
let ld = (e) => {
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
        { nodes: A, root_node_id: N, success_node_id: f, fail_node_id: S } = l,
        [E, T] = a.useState(N),
        [C, y] = a.useState(void 0),
        [I, k] = a.useState(void 0),
        [M, D] = a.useState([]),
        [R, O] = a.useState(void 0),
        [w, L] = a.useState(void 0),
        [G, U] = a.useState(void 0);
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
                y(void 0),
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
        },
        B = async (e) => {
            let n = j ? await (0, h.zC)(l, t, [...M, e]) : await (0, h.bo)(l, t, [...M, e], v),
                a = n?.body?.report_id;
            null != a && O(a), L(A[e.nodeRef].report_type), p?.(a);
        },
        V = () => {
            if (M.length < 1) return;
            let e = [...M],
                l = e.pop(),
                n = l?.nodeRef ?? N;
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
            y(l?.multiSelect?.state), k(l?.textInput), T(n), D(e), _?.("..");
        },
        H = a.useCallback(
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
                    k(t?.textInput), y(t?.multiSelect?.state), D(e);
                } else D([]), k(void 0), y(void 0);
                U(t), T(l.id);
            },
            [A, M],
        );
    a.useEffect(() => {
        null != G && U(void 0);
    }, [G]);
    let W = a.useMemo(() => {
        let e = [],
            t = [];
        for (let l in A) {
            let n = A[l];
            if (n.id !== f && n.id !== S && n.id !== N) {
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
        return [A[N], ...e, ...t, A[f], A[S]];
    }, [A, N, S, f]);
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
                            className: lr.B,
                            children: (0, n.jsx)(ls, {
                                node: e,
                                reportType: t,
                                reportSubType: w,
                                history: M,
                                onModalClose: g.onClose,
                                onSelectChild: P,
                                onNavigateBack: V,
                                onNavigateToNode: H,
                                multiSelect: C,
                                textInput: I,
                                successNodeId: f,
                                failNodeId: S,
                                onSubmit: B,
                                reportId: R,
                                nodeMap: A,
                                initialErrorMessage: e.id === E ? G : void 0,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
