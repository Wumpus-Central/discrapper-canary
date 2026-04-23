n.d(t, { default: () => no }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(731738),
    r = n(935462),
    s = n(430690),
    o = n(964486),
    d = n(58149),
    c = n(915089),
    u = n(831062),
    _ = n(923531),
    m = n(17372),
    h = n(369053),
    p = n(2110),
    g = n(815021),
    x = n(534514),
    f = n(683071),
    v = n(235986),
    b = n(834981),
    A = n(840387),
    N = n(403362),
    E = n(478437),
    S = n(873298),
    T = n(253932),
    j = n(985018);
let C = {
    getTitle: () => j.intl.string(j.t.vJOqMB),
    getDisabledTitle: () => j.intl.string(j.t["B5ZvY+"]),
    getDescription: () => j.intl.string(j.t["43UEUh"]),
    eligibleReportSubtypes: [m.TS.SUB_SPAM],
    eligibleChannelTypes: [E.r.DM, E.r.GROUP_DM],
    onApply: () => T.he.updateSetting(S.he.NON_FRIENDS),
    predicate: () => T.he.getSetting() === S.he.DISABLED,
};
var I = n(444802);
let y = {
    getTitle: () => j.intl.string(j.t.RVX1zT),
    getDisabledTitle: () => j.intl.string(j.t.SYkEBi),
    getDescription: () => j.intl.string(j.t.aqlmp8),
    eligibleReportSubtypes: [m.TS.SUB_GORE, m.TS.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, I.qY)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, I.T4)(),
                    l = {};
                return (
                    e === S.TO.SHOW && (l.goreContentGuilds = S.TO.BLUR),
                    t === S.TO.SHOW && (l.goreContentFriendDm = S.TO.BLUR),
                    n === S.TO.SHOW && (l.goreContentNonFriendDm = S.TO.BLUR),
                    l
                );
            })(),
        ),
    predicate: () => {
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, I.T4)();
        return e === S.TO.SHOW || t === S.TO.SHOW || n === S.TO.SHOW;
    },
};
var k = n(632119);
let w = {
        getTitle: () => j.intl.string(j.t["Gtck/t"]),
        getDisabledTitle: () => j.intl.string(j.t.E6UmXa),
        getDescription: () => j.intl.string(j.t.jcRSp6),
        eligibleReportSubtypes: [
            m.TS.SUB_CSAM,
            m.TS.SUB_LOLI,
            m.TS.SUB_NCP,
            m.TS.SUB_SEXUALLY_DEGRADING_CONTENT,
            m.TS.SUB_UNSOLICITED_PORN,
        ],
        onApply: () =>
            (0, k.Jz)(
                (function () {
                    let {
                            explicitContentGuilds: e,
                            explicitContentFriendDm: t,
                            explicitContentNonFriendDm: n,
                        } = (0, k.C$)(),
                        l = {};
                    return (
                        e === S.TO.SHOW && (l.explicitContentGuilds = S.TO.BLUR),
                        t === S.TO.SHOW && (l.explicitContentFriendDm = S.TO.BLUR),
                        n === S.TO.SHOW && (l.explicitContentNonFriendDm = S.TO.BLUR),
                        l
                    );
                })(),
            ),
        predicate: () => {
            let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, k.C$)();
            return e === S.TO.SHOW || t === S.TO.SHOW || n === S.TO.SHOW;
        },
    },
    L = {
        [m.Wb.SAFETY_DM_SPAM_FILTER]: C,
        [m.Wb.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: w,
        [m.Wb.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: y,
    };
var D = n(825484),
    R = n(821609),
    M = n(221314);
let O = (e) => {
    let t,
        {
            button: n,
            submitting: i,
            disableNext: s,
            onClick: o,
            canNavigateBack: d,
            onBackClicked: c,
            isModeratorReport: u,
            className: _,
        } = e,
        m = a.useRef(null),
        h = null != n && "cancel" !== n.type,
        p = d && n?.type !== "done",
        g = h || p;
    if (
        (a.useEffect(() => {
            (n?.type === "submit" || n?.type === "done") && m.current?.focus();
        }, [n?.type]),
        !g)
    )
        return null;
    let x = j.intl.string(j.t.i4jeWR);
    return (
        n?.type === "submit"
            ? ((t = "critical-primary"), (x = u ? j.intl.string(M.default.ZUyreS) : j.intl.string(j.t["G+vU89"])))
            : n?.type === "next"
              ? (x = j.intl.string(j.t.PDTjLN))
              : n?.type === "cancel" && ((x = j.intl.string(j.t["ETE/oC"])), (t = "secondary")),
        (0, l.jsx)(r.jl, {
            "data-migration-pending": !0,
            direction: v.A.Direction.HORIZONTAL,
            className: _,
            children: (0, l.jsxs)(D.e, {
                fullWidth: !0,
                children: [
                    p &&
                        (0, l.jsx)(R.$, {
                            onClick: c,
                            variant: "secondary",
                            disabled: i,
                            text: j.intl.string(j.t["13/7kX"]),
                        }),
                    h &&
                        (0, l.jsx)(R.$, {
                            onClick: () => {
                                null != n && o(n);
                            },
                            variant: t,
                            disabled: i || s,
                            buttonRef: m,
                            text: x,
                        }),
                ],
            }),
        })
    );
};
var P = n(17928),
    G = n(692617),
    U = n(834730),
    B = n(824552),
    H = n(573435),
    V = n(973172),
    F = n(186272),
    W = n(546183),
    z = n(935208),
    Q = n(80701),
    Y = n(532406);
let q = (e) => {
    let { entry: t } = e,
        { name: n } = t,
        i = (0, P.bG)([W.default], () => W.default.getNewestTokenForApplication(t.id)),
        r = t.getIconURL(40) ?? Y,
        s = (0, V.A)({ application: t }),
        o = a.useRef(!1);
    a.useEffect(() => {
        o.current || (B.A.fetch(), (o.current = !0));
    }, []);
    let d = null != i ? z.default.extractTimestamp(i.id) : void 0;
    return (0, l.jsxs)("div", {
        className: Q.kL,
        children: [
            (0, l.jsx)(x.D, {
                className: Q.wx,
                variant: "heading-sm/semibold",
                children: j.intl.string(j.t["aYfK/w"]),
            }),
            (0, l.jsx)("div", {
                className: Q.vU,
                children: (0, l.jsxs)("div", {
                    className: Q.qi,
                    children: [
                        (0, l.jsx)(H.Ay, {
                            mask: H.Ay.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: Q.VE,
                            children: (0, l.jsx)("img", { src: r, alt: "", className: Q.Z2 }),
                        }),
                        (0, l.jsxs)("div", {
                            className: Q.FS,
                            children: [
                                (0, l.jsx)(U.E, { color: "text-strong", variant: "text-md/medium", children: n }),
                                s.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(U.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, F.A)(s.length),
                                              }),
                                              (0, l.jsx)(G.A, { className: Q.uM, guilds: s, maxGuilds: 6 }),
                                          ],
                                      })
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(U.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: t.bot?.tag,
                                              }),
                                              null != d &&
                                                  (0, l.jsx)(U.E, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: j.intl.formatToPlainString(j.t.C9rUO8, {
                                                          authorizedAt: d,
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
var K = n(49229),
    $ = n(381689),
    Z = n(632738),
    X = n(734057),
    J = n(994500),
    ee = n(562153),
    et = n(652215);
let en = (e) => {
    let { user: t, channelId: n, reportId: i, reportType: r } = e,
        s = (0, P.bG)([J.A], () => J.A.isBlocked(t.id), [t.id]),
        o = (0, P.bG)([X.A], () => X.A.getChannel(n), [n]),
        c = a.useMemo(() => ee.Ay.getName(o?.guild_id, o?.id, t), [o, t]),
        u = a.useCallback(() => {
            d.Ay.trackWithMetadata(et.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                K.A.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    $.A.showBlockSuccessToast(t.id, n);
                });
        }, [t, i, n]);
    return (0, l.jsx)(Z.PQ, {
        title: j.intl.formatToPlainString(j.t["Q1o/f3"], { username: c }),
        description: j.intl.string(j.t.G08MKu),
        buttonText: s ? j.intl.string(j.t.ot2tSp) : j.intl.string(j.t["l+7PZY"]),
        buttonDisabled: s,
        onButtonPress: u,
        buttonVariant: "application" === r.name && s ? "secondary" : "critical-primary",
    });
};
var el = n(735438),
    ea = n(660261);
let ei = (e) => {
    let t = (0, el.flatMap)(e.history, (e) => {
        let {
                destination: [t],
                multiSelect: n,
            } = e,
            l = [null, null],
            a = Object.values(n?.state ?? {});
        return a.length > 0 && (l[0] = a.join(", ")), "" !== t && (l[1] = t), l;
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: ea.kL,
              children: [
                  (0, l.jsx)(x.D, {
                      className: ea.MR,
                      color: "text-default",
                      variant: "heading-sm/semibold",
                      children: e.isModeratorReport ? j.intl.string(M.default["6mx/DP"]) : j.intl.string(j.t["+3V9Tp"]),
                  }),
                  t.map((e, t) =>
                      (0, l.jsxs)(
                          "div",
                          {
                              className: ea.P,
                              children: [
                                  (0, l.jsx)("div", { className: ea.RL }),
                                  (0, l.jsx)(U.E, { variant: "text-md/normal", className: ea.b, children: e }),
                              ],
                          },
                          `${e}+${t}`,
                      ),
                  ),
              ],
          });
};
var er = n(503698),
    es = n.n(er),
    eo = n(939249),
    ed = n(865116),
    ec = n(147925),
    eu = n(777148),
    e_ = n(797982);
let em = (e) => {
        let { child: t, onClick: n, nodeMap: a } = e,
            [i, r] = t,
            s = (0, P.bG)([ed.Ay], () => ed.Ay.get("iar_show_report_sub_type_labels")),
            o = a[r],
            d = o?.report_type;
        return (0, l.jsxs)(eo.D, {
            className: es()(e_.Zm, eu.lD),
            onClick: () => n(t),
            children: [
                (0, l.jsxs)("div", {
                    className: e_.OH,
                    children: [
                        (0, l.jsx)(U.E, { className: e_.ix, variant: "text-md/normal", children: i }),
                        s &&
                            null != d &&
                            (0, l.jsx)(U.E, {
                                className: e_.Z$,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: d,
                            }),
                    ],
                }),
                (0, l.jsx)(ec.A, { className: e_._2, direction: ec.A.Directions.RIGHT }),
            ],
        });
    },
    eh = (e) => {
        let {
            node: { children: t },
            onSelectChild: n,
            nodeMap: a,
        } = e;
        if (null == t || 0 === t.length) return null;
        let i = t.map((e) => {
            let [t, i] = e;
            return (0, l.jsx)(em, { child: e, onClick: n, nodeMap: a }, `${t}+${i}`);
        });
        return (0, l.jsx)("div", { className: eu.E8, children: i });
    };
n(323874), n(14289), n(35956);
var ep = n(331322),
    eg = n(292666),
    ex = n(46054),
    ef = n(791332),
    ev = n.n(ef),
    eb = n(349288);
let eA = {
    ...ev().defaultRules.link,
    react: function (e, t, n) {
        return (0, l.jsx)(eb.Anchor, { href: e.target, target: "_blank", children: t(e.content, n) });
    },
};
var eN = n(775923),
    eE = n(818050);
let eS = ["cdn.discordapp.com", "media.discordapp.net"],
    eT = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    ej = (0, N.m6)()
        ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/
        : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;
function eC(e) {
    try {
        return new URL(e), !0;
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
                if (eS.some((e) => t.hostname === e) || ((0, N.m6)() && eT.test(t.hostname))) return !0;
                return !1;
            } catch {
                return !1;
            }
        })(e)
    );
}
let ey = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: i, message_link_title: r, message_link_placeholder: s },
                onChange: o,
                initialContentUrl: d,
                initialMessageUrl: c,
                isRequired: u,
            } = e,
            _ = a.useMemo(() => ex.A.reactParserFor({ ...ex.A.defaultRules, link: eA }), []),
            [m, h] = a.useState(""),
            [p, g] = a.useState(""),
            [x, f] = a.useState(null),
            [v, b] = a.useState(null),
            [A, N] = a.useState(!1);
        a.useEffect(() => {
            h(d?.value ?? ""), g(c?.value ?? ""), d?.value != null && "" !== d.value && N(eI(d.value));
        }, [d, c]);
        let E = a.useCallback(
                (e) => {
                    if ((h(e), "" === e)) {
                        f(null), N(!1), g(""), b(null), o({ value: e, isValid: !1 });
                        return;
                    }
                    if (!eC(e)) {
                        f(j.intl.string(j.t["24xrGb"])), N(!1), g(""), b(null), o({ value: e, isValid: !1 });
                        return;
                    }
                    let t = eI(e);
                    N(t),
                        f(null),
                        t
                            ? "" === p
                                ? o({ value: e, isValid: !1 })
                                : ej.test(p)
                                  ? o({ value: e, isValid: !0 }, { value: p, isValid: !0 })
                                  : o({ value: e, isValid: !1 }, { value: p, isValid: !1 })
                            : (g(""), b(null), o({ value: e, isValid: !0 }));
                },
                [o, p],
            ),
            S = a.useCallback(
                (e) => {
                    if ((g(e), "" === e || !ej.test(e))) {
                        b(j.intl.string(j.t["24xrGb"])), o({ value: m, isValid: !1 }, { value: e, isValid: !1 });
                        return;
                    }
                    b(null), o({ value: m, isValid: !0 }, { value: e, isValid: !0 });
                },
                [o, m],
            );
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)(ep.B, {
                    gap: 16,
                    children: [
                        (0, l.jsxs)("div", {
                            className: eE.QB,
                            children: [
                                null != t &&
                                    (0, l.jsx)("div", {
                                        className: eE.QB,
                                        children: (0, l.jsxs)(U.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [t, u && (0, l.jsx)("span", { className: eN.m, children: "*" })],
                                        }),
                                    }),
                                (0, l.jsx)(eg.k, { onChange: E, value: m, error: x, placeholder: i, autoFocus: !0 }),
                            ],
                        }),
                        A &&
                            null != r &&
                            (0, l.jsxs)("div", {
                                className: eE.QB,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: eE.QB,
                                        children: (0, l.jsxs)(U.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [r, u && (0, l.jsx)("span", { className: eN.m, children: "*" })],
                                        }),
                                    }),
                                    (0, l.jsx)(eg.k, { onChange: S, value: p, error: v, placeholder: s }),
                                ],
                            }),
                    ],
                }),
                null != n && (0, l.jsx)(U.E, { variant: "text-xs/normal", children: _(n) }),
            ],
        });
    },
    ek = (e) => {
        let { element: t, onChange: n, state: i } = e,
            r = t.name,
            s = `${t.name}_message_link`,
            o = a.useCallback(
                (e, t) => {
                    null != t ? n(r, e.value, e.isValid && t.isValid, s, t.value) : n(r, e.value, e.isValid, s, void 0);
                },
                [n, r, s],
            );
        return (0, l.jsx)(ey, {
            data: t.data,
            onChange: o,
            initialContentUrl: i?.[r],
            initialMessageUrl: i?.[s],
            isRequired: t.should_submit_data,
        });
    };
var ew = n(783878),
    eL = n(518977);
let eD = (e) => {
    let { element: t, onChange: n, state: i } = e,
        r = t.name,
        { title: s, options: o } = t.data,
        d = i?.[r]?.value ?? void 0,
        [c, u] = a.useState(d);
    a.useEffect(() => {
        u(d);
    }, [d]);
    let _ = a.useMemo(
            () =>
                o
                    .map((e) => {
                        let t = e.label;
                        try {
                            t = (0, eL.Gw)(e.value);
                        } catch {}
                        return { id: e.id ?? e.value, value: e.value, label: t };
                    })
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [o],
        ),
        m = a.useCallback(
            (e) => {
                null != e && (u(e), n(r, e));
            },
            [n, r],
        );
    return (0, l.jsx)("div", {
        className: eE.QB,
        children: (0, l.jsx)(ew.Z, {
            label: s,
            value: c,
            required: t.should_submit_data,
            onSelectionChange: m,
            options: _,
            selectionMode: "single",
            maxOptionsVisible: 4,
            fullWidth: !0,
        }),
    });
};
var eR = n(933958),
    eM = n(869003);
let eO = (e) => {
    let { application: t, reportId: n } = e,
        [i, r] = a.useState(!1),
        s = (0, P.bG)([W.default], () => W.default.getNewestTokenForApplication(t.id));
    a.useEffect(() => {
        null != s && r(!0);
    }, [s]);
    let o = a.useRef(!1);
    a.useEffect(() => {
        o.current || (B.A.fetch(), (o.current = !0));
    }, []);
    let c = (0, P.bG)([eR.Ay], () => eR.Ay.getSelfEmbeddedActivities()),
        u = a.useCallback(() => {
            if (
                (r(!1),
                d.Ay.trackWithMetadata(et.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == s)
            )
                return;
            B.A.delete(s.id);
            let e = c.get(t.id);
            null != e && eM.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
        }, [t.id, s, c, n]);
    return null == t
        ? null
        : (0, l.jsx)(Z.PQ, {
              title: j.intl.string(j.t.ygG62M),
              description: j.intl.string(j.t.S51EKg),
              buttonText: i ? j.intl.string(j.t.xXpoGV) : j.intl.string(j.t.JsiUnL),
              buttonDisabled: !i,
              onButtonPress: u,
              buttonVariant: i ? "critical-primary" : "secondary",
          });
};
var eP = n(720149),
    eG = n(576705);
let eU = (e) => {
    let { message: t, reportId: n } = e,
        [i, r] = a.useState(!1),
        s = a.useCallback(() => {
            r(!0),
                d.Ay.trackWithMetadata(et.HAw.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }),
                eP.A.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        o = a.useMemo(() => {
            let e = X.A.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== et.rbe.DM &&
                e.type !== et.rbe.GROUP_DM &&
                eG.A.canWithPartialContext(et.xBc.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && o
        ? (0, l.jsx)(Z.PQ, {
              title: j.intl.string(j.t.c9BHL9),
              description: j.intl.string(j.t.dK8S0w),
              buttonText: i ? j.intl.string(j.t.f3pnLL) : j.intl.string(j.t.ch2xbt),
              buttonDisabled: i,
              buttonVariant: "critical-primary",
              onButtonPress: s,
          })
        : null;
};
var eB = n(691885);
let eH = (e) => {
        let { element: t, onChange: n, initialOption: i } = e,
            [r, s] = a.useState("");
        a.useEffect(() => {
            s(i ?? "");
        }, [i]);
        let o = t.name,
            { title: d, options: c } = t.data,
            u = a.useMemo(() => c.map((e) => ({ ...e, id: e.id ?? e.value })), [c]),
            _ = a.useCallback(
                (e) => {
                    null != e && (s(e), n(e));
                },
                [n],
            );
        return (0, l.jsx)(
            "div",
            {
                className: eE.QB,
                children: (0, l.jsx)(eB.l, {
                    label: d,
                    value: r,
                    required: t.should_submit_data,
                    onSelectionChange: _,
                    options: u,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            },
            o,
        );
    },
    eV = (e) => {
        let { elements: t, onChange: n, state: a } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, l.jsx)(
                    eH,
                    { element: e, initialOption: a?.[t]?.value ?? void 0, onChange: (e) => n(t, e) },
                    t,
                );
            });
        return (0, l.jsx)("div", { children: i });
    };
var eF = n(509434),
    eW = n(975807),
    ez = n(135363);
let eQ = (e) => {
    let {
        data: { url: t, link_text: n, link_description: a, is_localized: i },
    } = e;
    return i
        ? (0, l.jsxs)(eo.D, {
              role: "link",
              className: es()(ez.$J, eu.lD),
              onClick: () => {
                  (0, eW.A)(t);
              },
              children: [
                  (0, l.jsxs)("div", {
                      className: ez.xU,
                      children: [
                          (0, l.jsx)(U.E, { className: ez.__invalid_linkText, variant: "text-md/normal", children: n }),
                          null != a &&
                              "" !== a &&
                              (0, l.jsx)(U.E, { variant: "text-md/normal", color: "text-muted", children: a }),
                      ],
                  }),
                  (0, l.jsx)(eF.I, { size: "sm", color: "currentColor", className: ez.wP }),
              ],
          })
        : null;
};
function eY(e) {
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
    let n = t.map((e, t) => {
            let { data: n } = e;
            return (0, l.jsx)(eQ, { data: n }, `external-link+${t}`);
        }),
        a = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, l.jsxs)("div", {
        className: es()(ez.nV, eu.E8),
        children: [
            !a &&
                (0, l.jsx)(x.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: ez.wx,
                    children: j.intl.string(j.t.hvVgAZ),
                }),
            n,
        ],
    });
}
var eq = n(260598);
let eK = (e) => {
        let {
                data: {
                    title: t,
                    subtitle: n,
                    description: i,
                    placeholder: r,
                    rows: s,
                    character_limit: o,
                    pattern: d,
                },
                onChange: c,
                initialText: u,
                isRequired: _,
            } = e,
            m = a.useMemo(() => ex.A.reactParserFor({ ...ex.A.defaultRules, link: eA }), []),
            [h, p] = a.useState(""),
            [g, x] = a.useState(null);
        a.useEffect(() => {
            p(u?.value ?? "");
        }, [u]);
        let f = a.useCallback(
            (e) => {
                let t = null != d ? new RegExp(d) : null;
                null == t || t.test(e)
                    ? null != e && (x(null), p(e), c({ value: e, isValid: !0 }))
                    : (x(j.intl.string(j.t["24xrGb"])), c({ value: e, isValid: !1 }));
            },
            [c, d],
        );
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)("div", {
                    className: eE.QB,
                    children: [
                        null != t &&
                            (0, l.jsxs)(U.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: [t, _ && (0, l.jsx)("span", { className: eN.m, children: "*" })],
                            }),
                        null != i &&
                            (0, l.jsx)("div", {
                                className: eE.a5,
                                children: (0, l.jsx)(U.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: i,
                                }),
                            }),
                    ],
                }),
                1 === s
                    ? (0, l.jsx)(eg.k, { maxLength: o, onChange: f, value: h, error: g, placeholder: r })
                    : (0, l.jsx)(eq.f, { maxLength: o, onChange: f, value: h, error: g, rows: s, placeholder: r }),
                null != n &&
                    (0, l.jsx)("div", {
                        className: eE.a5,
                        children: (0, l.jsx)(U.E, { variant: "text-xs/normal", color: "text-muted", children: m(n) }),
                    }),
            ],
        });
    },
    e$ = (e) => {
        let { elements: t, onChange: n, state: a } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, l.jsx)(
                    eK,
                    {
                        data: e.data,
                        onChange: (e) => n(t, e.value, e.isValid),
                        initialText: a?.[t] ?? void 0,
                        isRequired: e.should_submit_data,
                    },
                    t,
                );
            });
        return (0, l.jsx)("div", { className: eN.k, children: i });
    };
var eZ = n(548118),
    eX = n(71393),
    eJ = n(729985);
let e0 = (e) => {
    let { entry: t } = e,
        n = X.A.getChannel(t.channelId);
    if (null == n) return null;
    let a = eX.A.getGuild(n.guild_id);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: eJ.kL,
              children: [
                  (0, l.jsx)(x.D, {
                      className: eJ.wx,
                      variant: "heading-sm/semibold",
                      children: j.intl.string(j.t.nTe4HC),
                  }),
                  (0, l.jsxs)("div", {
                      className: eJ.bo,
                      children: [
                          (0, l.jsxs)("div", {
                              className: eJ.mo,
                              children: [
                                  (0, l.jsx)(eZ.Ay, { guild: a, size: eZ.Ay.Sizes.MINI, className: eJ.xG }),
                                  (0, l.jsx)(U.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: a.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(U.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
var e1 = n(486020),
    e2 = n(369640);
let e3 = (e) => {
    let { entry: t } = e,
        { id: n, icon: a, name: i } = t,
        r = e1.Ay.getGuildIconURL({ id: n, icon: a, size: 32 }) ?? void 0;
    return (0, l.jsxs)("div", {
        className: e2.kL,
        children: [
            (0, l.jsx)(x.D, { className: e2.wx, variant: "heading-sm/semibold", children: j.intl.string(j.t.nTe4HC) }),
            (0, l.jsx)("div", {
                className: e2.bo,
                children: (0, l.jsxs)("div", {
                    className: e2.OA,
                    children: [
                        (0, l.jsx)(H.Ay, {
                            mask: H.Ay.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: e2.$d,
                            children: (0, l.jsx)("img", { src: r, alt: "", className: e2.$f }),
                        }),
                        (0, l.jsx)(U.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                    ],
                }),
            }),
        ],
    });
};
var e9 = n(306032);
let e6 = (e) => {
    let { guild: t } = e;
    return (0, l.jsxs)("div", {
        className: e9.kL,
        children: [
            (0, l.jsx)(x.D, {
                className: e9.wx,
                variant: "heading-sm/semibold",
                children: j.intl.string(j.t["0ox7Hq"]),
            }),
            (0, l.jsx)("div", {
                className: e9.bo,
                children: (0, l.jsxs)("div", {
                    className: e9.OA,
                    children: [
                        (0, l.jsx)("div", {
                            className: e9.$f,
                            children: (0, l.jsx)(eZ.Ay, { guild: t, size: eZ.Ay.Sizes.LARGE }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(U.E, {
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
var e8 = n(336007);
let e7 = (e) => {
    let { event: t } = e,
        n = (0, P.bG)([eX.A], () => eX.A.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: e8.kL,
              children: [
                  (0, l.jsx)(x.D, {
                      className: e8.wx,
                      variant: "heading-sm/semibold",
                      children: j.intl.string(j.t.SDTOL7),
                  }),
                  (0, l.jsxs)("div", {
                      className: e8.bo,
                      children: [
                          (0, l.jsxs)("div", {
                              className: e8.OA,
                              children: [
                                  (0, l.jsx)(eZ.Ay, { guild: n, size: eZ.Ay.Sizes.MINI, className: e8.$f }),
                                  (0, l.jsx)(U.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(U.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
var e5 = n(900772);
let e4 = (e) => {
        let {
                node: { header: t, subheader: n, button: i },
                isModeratorReport: r,
                isTidaReport: s = !1,
                hideTitle: o = !1,
            } = e,
            d = i?.type === "submit",
            c = a.useMemo(() => ex.A.reactParserFor({ ...ex.A.defaultRules, link: eA }), []);
        return (0, l.jsxs)("div", {
            className: e5.N,
            children: [
                o || null == t || "" === t
                    ? null
                    : (0, l.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                null != n && "" !== t
                    ? (0, l.jsx)(U.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: e5.m,
                          children: c(n),
                      })
                    : null,
                d &&
                    !r &&
                    !s &&
                    (0, l.jsx)(U.E, { variant: "text-sm/normal", children: j.intl.format(j.t.Q0tSKT, {}) }),
            ],
        });
    },
    te = (e) => {
        let { user: t, channelId: n, reportId: i } = e,
            { isIgnored: r, isBlocked: s } = (0, P.cf)(
                [J.A],
                () => ({ isIgnored: J.A.isIgnored(t.id), isBlocked: J.A.isBlocked(t.id) }),
                [t],
            ),
            o = (0, P.bG)([X.A], () => X.A.getChannel(n), [n]),
            c = a.useMemo(() => ee.Ay.getName(o?.guild_id, o?.id, t), [o, t]),
            u = a.useCallback(() => {
                d.Ay.trackWithMetadata(et.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                    K.A.ignoreUser(t.id, "web_iar_ignore_user_element", n);
            }, [t, i, n]),
            _ = a.useMemo(() => r || s, [r, s]);
        return (0, l.jsx)(Z.PQ, {
            title: j.intl.formatToPlainString(j.t.U3yyFs, { username: c }),
            description: j.intl.string(j.t.naWE6W),
            buttonText: _ ? j.intl.string(j.t.nDdxOG) : j.intl.string(j.t.ICYEfY),
            buttonDisabled: _,
            onButtonPress: u,
        });
    };
var tt = n(512950),
    tn = n(21883);
let tl = (e) => {
        let {
                node: { info: t },
            } = e,
            n = a.useMemo(() => ex.A.reactParserFor({ ...ex.A.defaultRules, link: eA }), []);
        return null == t ? null : (0, l.jsx)(tt.p, { className: tn.e, messageType: tt.Y.INFO, children: n(t) });
    },
    ta = ex.A.reactParserFor({ ...ex.A.defaultRules, link: eA }),
    ti = (e) => {
        let { element: t } = e,
            { body: n, notice_type: a } = t.data;
        return (0, l.jsx)(f.w, { type: a, children: ta(n) });
    };
var tr = n(314116),
    ts = n(997509);
let to = (e) => {
    let { guildId: t, reportId: n } = e,
        [i, r] = a.useState(!1),
        s = eX.A.getGuild(t),
        o = null != s;
    a.useEffect(() => {
        r(!o);
    }, [o]);
    let c = a.useCallback(() => {
        r(!0),
            d.Ay.trackWithMetadata(et.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, { guild_id: t, report_id: n }),
            ts.A.leaveGuild(t);
    }, [t, n]);
    return null == s
        ? null
        : (0, l.jsx)(Z.PQ, {
              title: j.intl.string(j.t.cU96ip),
              description: j.intl.formatToPlainString(j.t["26mR6/"], { guildName: s?.name }),
              buttonText: i ? j.intl.string(j.t["9Ak99h"]) : j.intl.string(j.t.F3qExp),
              buttonDisabled: i,
              buttonVariant: "critical-primary",
              onButtonPress: () => {
                  (0, tr.A)({
                      title: j.intl.formatToPlainString(j.t["1GX6P/"], { name: s.name }),
                      subtitle: j.intl.format(j.t.ZEXC0r, { name: s.name }),
                      confirmText: j.intl.string(j.t.J2TBi3),
                      onConfirm: c,
                  });
              },
          });
};
var td = n(364522),
    tc = n(387408),
    tu = n(763754),
    t_ = n(491182),
    tm = n(291812),
    th = n(639288),
    tp = n(805964),
    tg = n(375199),
    tx = n(838541),
    tf = n(121940);
let tv = (e) => {
    let { message: t } = e,
        n = (0, tu.Ay)(t),
        i = (0, P.bG)([X.A], () => X.A.getChannel(t.channel_id)),
        r = a.useMemo(() => (0, tc.A)(t), [t]),
        { content: s } = (0, tg.A)(r, { hideSimpleEmbedContent: !1 }),
        o = T.hH.useSetting(),
        d = a.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, tp.o)(t, s, !1, !1, "", {
                leadingIconClass: tf.$r,
                trailingIconClass: tf.$r,
                iconSize: tx.eJ,
            });
            return (0, l.jsxs)("div", {
                className: tf.hQ,
                children: [e, (0, l.jsx)(tm.Ay, { message: t, content: s, compact: o }), n],
            });
        }, [t, s, o]);
    return null == i
        ? null
        : (0, l.jsxs)("div", {
              className: tf.kL,
              children: [
                  (0, l.jsx)(x.D, {
                      className: tf.wx,
                      variant: "heading-sm/semibold",
                      children: j.intl.string(j.t.iouM3a),
                  }),
                  (0, l.jsx)(td.Ip, {
                      className: tf.PI,
                      children: (0, l.jsx)(t_.A, {
                          childrenMessageContent: d(),
                          childrenHeader: (0, l.jsx)(th.Ay, { message: t, channel: i, author: n, guildId: i.guild_id }),
                          disableInteraction: !0,
                          author: n,
                      }),
                  }),
              ],
          });
};
var tb = n(150934),
    tA = n(986188);
let tN = (e) => {
        let { onChange: t, label: n, subtitle: a, selected: i } = e;
        return (0, l.jsx)("div", {
            className: tA.yc,
            children: (0, l.jsx)(tb.S, { checked: i, onChange: t, label: n, description: a }),
        });
    },
    tE = (e) => {
        let { element: t, title: n, state: a, onChange: i } = e;
        if (t?.type !== "checkbox") return null;
        let { data: r } = t;
        return (0, l.jsxs)("div", {
            children: [
                null != n &&
                    (0, l.jsxs)(U.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: tA.DD,
                        children: [n, t.should_submit_data && (0, l.jsx)("span", { className: tA.mw, children: "*" })],
                    }),
                r.map((e, t) => {
                    let [n, r, s] = e;
                    return (0, l.jsx)(
                        tN,
                        { onChange: () => i(n, r), selected: n in a, label: r, subtitle: s },
                        `${t}+button`,
                    );
                }),
            ],
        });
    };
var tS = n(832712),
    tT = n(543465),
    tj = n(477427);
let tC = (e) => {
    let { user: t, channelId: n, reportId: i } = e,
        r = X.A.getDMFromUserId(t.id),
        s = (0, P.bG)([X.A], () => X.A.getChannel(n), [n]),
        o = a.useMemo(() => ee.Ay.getName(s?.guild_id, s?.id, t), [s, t]),
        c = (0, P.bG)([tT.Ay], () => (null == r ? null : tT.Ay.isChannelMuted(null, r))),
        [u, _] = a.useState(c ?? !1),
        m = a.useCallback(() => {
            null != r &&
                (_(!0),
                d.Ay.trackWithMetadata(et.HAw.IAR_MUTE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                tS.A.updateChannelOverrideSettings(null, r, { muted: !0 }, tj.fd.Muted),
                $.A.showMuteSuccessToast(t.id, n));
        }, [r, n, t, i]);
    return (0, l.jsx)(Z.PQ, {
        title: j.intl.formatToPlainString(j.t.TRp5wR, { username: o }),
        description: j.intl.string(j.t["yM/+AJ"]),
        buttonText: u ? j.intl.string(j.t.E8x4Nj) : j.intl.string(j.t.HITUcR),
        buttonDisabled: u,
        onButtonPress: m,
    });
};
var tI = n(144228),
    ty = n(405977);
let tk = (e) => {
    let { element: t, onChange: n, state: i } = e,
        r = t.name,
        { title: s, options: o } = t.data,
        d = i?.[r]?.value ?? void 0,
        [c, u] = a.useState(d);
    a.useEffect(() => {
        u(d);
    }, [d]);
    let _ = a.useMemo(() => o.map((e) => ({ name: e.label, value: e.value })), [o]),
        m = a.useCallback(
            (e) => {
                null != e && (u(e), n(r, e));
            },
            [n, r],
        );
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(U.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: ty.P,
                children: [s, t.should_submit_data && (0, l.jsx)("span", { className: ty.m, children: "*" })],
            }),
            (0, l.jsx)(tI.z, { value: c, onChange: m, options: _ }),
        ],
    });
};
var tw = n(146985);
function tL(e) {
    let { children: t, title: n } = e;
    return (0, l.jsxs)("div", {
        className: tw.kL,
        children: [
            (0, l.jsx)(x.D, {
                className: tw.wx,
                variant: "text-sm/semibold",
                children: n ?? j.intl.string(j.t["k+QA9N"]),
            }),
            (0, l.jsx)("div", { className: tw.uk, children: t }),
        ],
    });
}
var tD = n(157559),
    tR = n(794967),
    tM = n(309010);
let tO = (e) => {
    let { application: t, reportId: n } = e,
        [i, r] = a.useState(!1),
        [s, o] = a.useState(!1),
        c = (0, P.bG)([tM.A, X.A], () => X.A.getChannel(tM.A.getChannelId())?.guild_id),
        [u, _] = a.useState(null);
    a.useEffect(() => {
        null != u && (r(!0), o(!0));
    }, [u]),
        a.useEffect(() => {
            if (null == c) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, tR.c)(c);
                    } catch {}
                    if (e || null == n) return;
                    let l = n.find((e) => e.application?.id === t.id);
                    null != l && _(l);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [c, t.id]);
    let m = a.useCallback(() => {
            o(!1),
                d.Ay.trackWithMetadata(et.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: c,
                    application_id: t.id,
                    report_id: n,
                }),
                null != c &&
                    null != u &&
                    ts.A.disableIntegration(c, u.id).catch(() => {
                        tD.A.show({ title: j.intl.string(j.t.wYqMmI), body: j.intl.string(j.t.A4Mnst) });
                    });
        }, [t.id, c, u, n]),
        h = (0, P.bG)([eG.A, eX.A], () => {
            let e = eX.A.getGuild(c);
            if (null == e) return !1;
            let n = eG.A.can(et.xBc.MANAGE_GUILD, e),
                l = null == t.bot || eG.A.canManageUser(et.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && l;
        });
    return null != t && null != c && i && h
        ? (0, l.jsx)(Z.PQ, {
              title: j.intl.string(j.t["WV/CsH"]),
              description: j.intl.string(j.t["FlcC+3"]),
              buttonText: s ? j.intl.string(j.t.aCJlq4) : j.intl.string(j.t["6I1F3i"]),
              buttonDisabled: !s,
              onButtonPress: m,
              buttonVariant: s ? "critical-primary" : "secondary",
          })
        : null;
};
var tP = n(123292),
    tG = n(780964),
    tU = n(858897),
    tB = n(998436);
function tH(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: r } = e,
        [s, d] = a.useState(!1);
    return (
        (0, o.Ay)(() => {
            r(h.lJ.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, l.jsx)(Z.PQ, {
            title: t,
            description: n,
            buttonText: s ? j.intl.string(j.t["h+WsPb"]) : j.intl.string(j.t.A8t4Nf),
            buttonDisabled: s,
            onButtonPress: () => {
                i(), d(!0), r(h.lJ.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function tV(e) {
    var t;
    let { settingsUpsells: n, channelId: i, onModalClose: r, reportId: s, reportType: o, reportSubType: c } = e,
        u = (0, P.bG)([X.A], () => X.A.getChannel(i)),
        _ =
            ((t = u?.type),
            a.useMemo(
                () =>
                    n
                        .map((e) => {
                            var n, l;
                            let a;
                            return (
                                (n = e),
                                (l = t),
                                !(function (e, t) {
                                    let { predicate: n, eligibleChannelTypes: l } = e,
                                        a = null == n || n?.() === !0,
                                        i = null == t || null == l || l.includes(t);
                                    return a && i;
                                })((a = L[n]), l)
                                    ? null
                                    : a
                            );
                        })
                        .filter(N.Vq),
                [n, t],
            )),
        m = (0, h.Mw)(o, c, s);
    return 0 === _.length
        ? null
        : (0, l.jsxs)("div", {
              className: tB.kL,
              children: [
                  (0, l.jsx)(x.D, {
                      variant: "text-sm/semibold",
                      className: tB.wx,
                      children: j.intl.string(j.t["1yxTIJ"]),
                  }),
                  (0, l.jsx)("div", {
                      className: tB.uk,
                      children: _.map((e, t) => {
                          let { getTitle: a, getDescription: i, onApply: r } = e;
                          return (0, l.jsx)(
                              tH,
                              { title: a(), description: i(), onButtonClick: r, trackSettingsUpsellsAction: m(n[t]) },
                              t,
                          );
                      }),
                  }),
                  (0, l.jsx)(tP.Q, {
                      text: j.intl.string(j.t.olebGx),
                      onClick: () => {
                          (0, tU.openUserSettings)(tG.X.CONTENT_AND_SOCIAL_PANEL),
                              r(),
                              d.Ay.trackWithMetadata(et.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: o.name,
                                  report_subtype: c,
                                  action: h.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
var tF = n(857250),
    tW = n(691540),
    tz = n(97483),
    tQ = n(899847);
let tY = (e) => {
    let { parents: t } = e,
        [n, i] = a.useState(!1),
        r = a.useCallback(() => {
            (0, tQ.Xz)()
                .then(() => {
                    (0, tW.P0)(
                        (0, tF.o)(
                            j.intl.formatToPlainString(j.t.wr4IT5, {
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
                    $.A.showFailedToast();
                });
        }, [t]);
    if (0 === t.length) return null;
    let s = j.intl.formatToPlainString(j.t.HqyWeO, {
        count: t.length,
        parent1: t[0].username,
        parent2: t[1]?.username,
        parent3: t[2]?.username,
    });
    return (0, l.jsx)(Z.PQ, {
        title: s,
        description: j.intl.string(j.t["5l/hlt"]),
        buttonText: n ? j.intl.string(j.t.ntuuk7) : j.intl.string(j.t["sYdX/H"]),
        buttonDisabled: n,
        onButtonPress: r,
    });
};
var tq = n(618282);
let tK = (e) => {
    let { stageInstance: t } = e,
        n = eX.A.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: tq.kL,
              children: [
                  (0, l.jsx)(x.D, {
                      className: tq.wx,
                      variant: "heading-sm/semibold",
                      children: j.intl.string(j.t.InbJ8x),
                  }),
                  (0, l.jsxs)("div", {
                      className: tq.bo,
                      children: [
                          (0, l.jsxs)("div", {
                              className: tq.OA,
                              children: [
                                  (0, l.jsx)(eZ.Ay, { guild: n, size: eZ.Ay.Sizes.MINI, className: tq.$f }),
                                  (0, l.jsx)(U.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(U.E, { variant: "text-md/semibold", color: "text-strong", children: t.topic }),
                      ],
                  }),
              ],
          });
};
var t$ = n(810685),
    tZ = n(540606);
let tX = (e) => {
    let { element: t } = e;
    return t?.type !== "success"
        ? null
        : (0, l.jsx)("div", { className: tZ.t, children: (0, l.jsx)(t$.M, { alt: "" }) });
};
var tJ = n(704786);
function t0(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: i },
            },
        } = e,
        r = a.useMemo(() => ex.A.reactParserFor({ ...ex.A.defaultRules, link: eA }), []);
    return i && (null != t || null != n)
        ? (0, l.jsxs)("div", {
              children: [
                  null != t &&
                      (0, l.jsx)(x.D, {
                          variant: "heading-sm/semibold",
                          color: "text-default",
                          className: tJ.w,
                          children: t,
                      }),
                  null != n &&
                      (0, l.jsx)(U.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: tJ.r,
                          children: r(n),
                      }),
              ],
          })
        : null;
}
var t1 = n(957565),
    t2 = n(415924);
function t3(e) {
    let {
            element: {
                data: { title: t, body: n, sms: i, is_localized: r },
            },
        } = e,
        [s, o] = a.useState(!1),
        d = a.useRef(ex.A.reactParserFor(ex.A.defaultRules));
    return r
        ? (0, l.jsxs)("div", {
              className: t2.kL,
              children: [
                  (0, l.jsx)(x.D, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: t2.wx,
                      children: t,
                  }),
                  (0, l.jsx)(U.E, { variant: "text-sm/normal", className: t2.G3, children: d.current(n) }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: es()(t2.GH, { [t2.pG]: s }),
                          children: [
                              (0, l.jsx)(U.E, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: t2.Kk,
                                  children: i,
                              }),
                              (0, l.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: t2.__invalid_trailingButton,
                                  children: (0, l.jsx)(R.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: s ? j.intl.string(j.t.t5VZ88) : j.intl.string(j.t.OpuAlK),
                                      onClick: () => {
                                          (0, t1.C)(i, () => o(!0));
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
var t9 = n(778712),
    t6 = n(730134),
    t8 = n(896736);
let t7 = (e) => {
    let { user: t } = e;
    return (0, l.jsxs)("div", {
        className: t8.kL,
        children: [
            (0, l.jsx)(x.D, { className: t8.wx, variant: "heading-sm/semibold", children: j.intl.string(j.t.Rsth7z) }),
            (0, l.jsx)("div", {
                className: t8.f1,
                children: (0, l.jsxs)("div", {
                    className: t8.eF,
                    children: [
                        (0, l.jsx)(t6.A, { className: t8.Hk, user: t, size: t9._3.SIZE_40 }),
                        (0, l.jsxs)("div", {
                            children: [
                                null != t.globalName &&
                                    (0, l.jsx)(U.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: t.globalName,
                                    }),
                                (0, l.jsx)(U.E, {
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
var t5 = n(751162),
    t4 = n(287809),
    ne = n(858331);
let nt = (e) => {
        let { widget: t, userId: n } = e,
            a = (0, P.bG)([t4.default], () => t4.default.getUser(n));
        return null == a
            ? null
            : (0, l.jsxs)("div", {
                  className: ne.k,
                  children: [
                      (0, l.jsx)(x.D, {
                          className: ne.w,
                          variant: "heading-sm/semibold",
                          children: j.intl.string(j.t.SpsnDY),
                      }),
                      (0, l.jsx)(t5.u, { widget: t, user: a, disableInteraction: !0 }),
                  ],
              });
    },
    nn = ["ignore_users", "block_users", "leave_guild", "delete_message", "deauthorize_app", "share_with_parents"],
    nl = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function na(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function ni(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let nr = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: i,
            history: s,
            onSelectChild: o,
            onModalClose: d,
            onSubmit: c,
            onNavigateToNode: u,
            multiSelect: _,
            reportId: N,
            textInput: E,
            initialErrorMessage: S,
        } = e,
        T = na(t, "checkbox"),
        C = na(t, "text_line_resource"),
        I = ni(t, "external_link"),
        y = ni(t, "free_text"),
        k = ni(t, "dropdown"),
        w = na(t, "country_select"),
        D = na(t, "inline_notice"),
        R = ni(t, "radio_group"),
        P = na(t, "text"),
        G = na(t, "content_url_input"),
        U = p.x.REPORT_TO_MOD.has(n.name),
        B = n.name === m.tY.MEDIA_TAKEDOWN,
        [H, V] = a.useState(!1),
        [F, W] = a.useState(!1),
        [z, Q] = a.useState(S ?? ""),
        [Y, K] = a.useState(() => ({})),
        [$, Z] = a.useState(() => ({})),
        X = a.useRef(null),
        J = a.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        ee = a.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != y || null != k || null != w || R.length > 0 || null != G ? $ : void 0,
                multiSelect: null != T ? { name: T.name, state: Y } : void 0,
            }),
            [t, y, k, w, R, G, T, Y, $],
        ),
        el = a.useMemo(
            () =>
                (0, h.ks)(
                    {
                        freeTextElements: y,
                        dropdownElements: k,
                        countrySelectElement: w,
                        radioGroupElements: R,
                        multiSelectElement: T,
                        contentUrlInputElement: G,
                    },
                    { textInput: $, multiSelect: Y },
                ),
            [y, k, w, R, T, G, $, Y],
        ),
        ea = a.useCallback(
            (e, t) => {
                let n = { ...Y };
                e in Y ? delete n[e] : (n[e] = t), K(n);
            },
            [Y],
        ),
        er = a.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    i = { ...$ };
                (i[e] = { value: t, isValid: n }),
                    null != l && (null != a && "" !== a ? (i[l] = { value: a, isValid: n }) : delete i[l]),
                    Z(i);
            },
            [$],
        ),
        es = a.useCallback(
            (e) => {
                o(ee(e));
            },
            [o, ee],
        );
    a.useEffect(() => {
        null != _ && K(_), null != E && Z(E);
    }, [_, E]),
        a.useEffect(() => {
            null != S && Q(S);
        }, [S]),
        a.useEffect(() => {
            if ("" !== z) {
                let e = setTimeout(() => {
                    let e = X.current?.parentElement;
                    null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
                }, 50);
                return () => clearTimeout(e);
            }
        }, [z]),
        a.useEffect(() => {
            if (null != T) {
                let e = T.data;
                if (null != e) for (let [t, n, l, a] of e) a && K((e) => ({ ...e, [t]: n }));
            }
        }, [T]);
    let eo = a.useCallback(
            (e) => {
                switch (e) {
                    case et.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = j.intl.string(j.t["2EPoxE"]);
                        Q(e), u?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                        break;
                    }
                    case et.t02.INVALID_SIGNATURE_MISMATCH:
                        Q(j.intl.string(j.t.kXrnQM));
                        break;
                    case et.t02.INVALID_FORM_BODY:
                        Q(j.intl.string(j.t.VjAAuP));
                        break;
                    default:
                        U ? Q(j.intl.string(M.default.psKFdJ)) : Q(j.intl.string(j.t.h6D8Vy));
                }
            },
            [U, u],
        ),
        ed = a.useCallback(() => {
            let t = ["", e.successNodeId];
            c(ee(t))
                .then(() => {
                    Q(""), es(t);
                })
                .catch((e) => {
                    eo(e.body?.code);
                })
                .finally(() => {
                    V(!1);
                });
        }, [e.successNodeId, ee, c, es, eo]),
        ec = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        d();
                        break;
                    case "next":
                        es(["", e.target]);
                        break;
                    case "submit":
                        V(!0), ed();
                }
            },
            [d, es, ed],
        ),
        e_ = a.useCallback(
            (e) => {
                if ("Enter" === e.key && !el && !H && null != t.button) {
                    let n = e.target;
                    "BUTTON" !== n.tagName &&
                        "A" !== n.tagName &&
                        "button" !== n.getAttribute("role") &&
                        (e.preventDefault(), ec(t.button));
                }
            },
            [el, H, t.button, ec],
        );
    a.useEffect(() => {
        t.is_auto_submit && !F && (W(!0), c(ee(["", t.id])));
    }, [t.is_auto_submit, F, c, ee, t.id]);
    let em = a.useMemo(() => {
            var e;
            let t;
            return null != i
                ? ((e = i),
                  (t = []),
                  Object.entries(L).forEach((n) => {
                      let [l, a] = n;
                      (null == a.eligibleReportSubtypes || a.eligibleReportSubtypes.includes(e)) && t.push(l);
                  }),
                  0 === t.length ? null : t)
                : null;
        }, [i]),
        ep = null != na(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        eg = (0, A.Z)(),
        ex = (0, b.GR)(),
        ef = eg && ex.length > 0 && null != na(t, "share_with_parents");
    return (0, l.jsxs)("div", {
        className: eu.kL,
        onKeyDown: e_,
        children: [
            (0, l.jsx)("div", {
                className: eu.U1,
                children:
                    null != t.header && "" !== t.header
                        ? (0, l.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: t.header })
                        : null,
            }),
            (0, l.jsx)("div", { className: eu.b, children: (0, l.jsx)(g.J, { onClick: d }) }),
            (0, l.jsxs)(r.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                direction: v.A.Direction.VERTICAL,
                className: eu.wx,
                children: [
                    (0, l.jsx)(tX, { element: na(t, "success") }),
                    (0, l.jsx)(e4, { node: t, isModeratorReport: U, isTidaReport: B, hideTitle: !0 }),
                    (0, l.jsx)(tl, { node: t }),
                ],
            }),
            (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                className: eu.rf,
                children: [
                    null != C && (0, l.jsx)(t3, { element: C }),
                    null != P && (0, l.jsx)(t0, { element: P }),
                    null != na(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, l.jsx)(tv, { message: n.record }),
                    null != na(t, "user_preview") && "user" === n.name ? (0, l.jsx)(t7, { user: n.record }) : null,
                    null != na(t, "widget_preview") && "widget" === n.name
                        ? (0, l.jsx)(nt, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != na(t, "guild_preview") && "guild" === n.name ? (0, l.jsx)(e6, { guild: n.record }) : null,
                    null != na(t, "breadcrumbs") && (0, l.jsx)(ei, { isModeratorReport: U, history: s }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return nn.includes(t);
                        });
                    })(t) &&
                        (0, l.jsxs)(tL, {
                            children: [
                                ep &&
                                    (0, l.jsx)(te, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: J,
                                        reportId: N,
                                    }),
                                ef && (0, l.jsx)(tY, { parents: ex }),
                                null != na(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, l.jsx)(en, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: J,
                                        reportId: N,
                                        reportType: n,
                                    }),
                                !ep &&
                                    null != na(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(tC, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: J,
                                        reportId: N,
                                    }),
                                null != na(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, l.jsx)(eU, { message: n.record, reportId: N }),
                                null != na(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, l.jsx)(to, { guildId: n.record.id, reportId: N }),
                                null != na(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(eO, { application: n.record, reportId: N }),
                                null != na(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, l.jsx)(tO, { application: n.record, reportId: N }),
                            ],
                        }),
                    null != na(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != em &&
                        (0, l.jsx)(tV, {
                            settingsUpsells: em,
                            channelId: n.record.channel_id,
                            onModalClose: d,
                            reportId: N,
                            reportType: n,
                            reportSubType: i,
                        }),
                    null != na(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, l.jsx)(tK, { stageInstance: n.record }),
                    null != na(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, l.jsx)(e7, { event: n.record }),
                    null != na(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, l.jsx)(e0, { entry: n.record }),
                    null != na(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, l.jsx)(e3, { entry: n.record }),
                    null != na(t, "app_preview") && "application" === n.name && (0, l.jsx)(q, { entry: n.record }),
                    null != T && (0, l.jsx)(tE, { element: T, onChange: ea, state: Y }),
                    nl.includes(n.name) && null != G && (0, l.jsx)(ek, { element: G, onChange: er, state: $ }),
                    nl.includes(n.name) &&
                        null != k &&
                        k.length > 0 &&
                        (0, l.jsx)("div", { children: (0, l.jsx)(eV, { elements: k, onChange: er, state: $ }) }),
                    R.map((e) => (0, l.jsx)(tk, { element: e, onChange: er, state: $ }, e.name)),
                    null != D &&
                        (function (e, t, n) {
                            let { visible_when: l } = e.data;
                            if (null == l) return !0;
                            let a =
                                null != l.element_name
                                    ? t.elements.find((e) => {
                                          let { name: t } = e;
                                          return t === l.element_name;
                                      })
                                    : na(t, l.element_type);
                            return null != a && n?.[a.name]?.value === l.value;
                        })(D, t, $) &&
                        (0, l.jsx)(ti, { element: D }),
                    null != w && (0, l.jsx)(eD, { element: w, onChange: er, state: $ }),
                    nl.includes(n.name) &&
                        null != y &&
                        y.length > 0 &&
                        (0, l.jsx)(e$, { elements: y, onChange: er, state: $ }),
                    ((null != t.children && t.children.length > 0) || (null != I && I.length > 0)) &&
                        (0, l.jsxs)("div", {
                            className: eu.qI,
                            children: [
                                (0, l.jsx)(eh, { node: t, onSelectChild: es, nodeMap: e.nodeMap }),
                                null != I && I.length > 0 ? (0, l.jsx)(eY, { elements: I }) : null,
                            ],
                        }),
                    "" !== z
                        ? (0, l.jsx)("div", { ref: X, children: (0, l.jsx)(f.w, { type: "critical", children: z }) })
                        : null,
                ],
            }),
            (0, l.jsx)(O, {
                button: t.button,
                submitting: H,
                disableNext: el,
                isModeratorReport: U,
                onClick: ec,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: s.length > 0,
                className: eu.qr,
            }),
        ],
    });
};
var ns = n(85864);
let no = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: p,
            onSubmit: g,
            onNavigate: x,
            emailToken: f,
            isAuthenticated: v = !0,
        } = e,
        b = (0, c.GV)(),
        { nodes: A, root_node_id: N, success_node_id: E, fail_node_id: S } = n,
        [T, j] = a.useState(N),
        [C, I] = a.useState(void 0),
        [y, k] = a.useState(void 0),
        [w, L] = a.useState([]),
        [D, R] = a.useState(void 0),
        [M, O] = a.useState(void 0),
        [P, G] = a.useState(void 0);
    (0, o.Ay)(() => {
        (0, _.VE)();
    });
    let U = (e) => {
            let { destination: n } = e,
                [, l] = n,
                a = A[l];
            if (void 0 === a) return void u.A.increment({ name: i.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (a.elements.some((e) => "skip" === e.type) && a.button?.type === "next")
                return U({ ...e, destination: ["", a.button.target] });
            if (
                (L([...w, e]),
                null != a.key && x?.(a.key),
                I(void 0),
                k(void 0),
                t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM)
            ) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(et.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: A[T].id,
                    next_node: a.id,
                });
            }
            j(l);
        },
        B = async (e) => {
            let l = v ? await (0, h.zC)(n, t, [...w, e]) : await (0, h.bo)(n, t, [...w, e], f),
                a = l?.body?.report_id;
            null != a && R(a), O(A[e.nodeRef].report_type), g?.(a);
        },
        H = () => {
            if (w.length < 1) return;
            let e = [...w],
                n = e.pop(),
                l = n?.nodeRef ?? N;
            if (t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
                let e = t.record.id;
                d.Ay.trackWithMetadata(et.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: A[l].report_type,
                    current_node: A[T].id,
                    next_node: A[l].id,
                });
            }
            I(n?.multiSelect?.state), k(n?.textInput), j(l), L(e), x?.("..");
        },
        V = a.useCallback(
            (e, t) => {
                let n;
                for (let t in A) {
                    let l = A[t];
                    if (l.key === e) {
                        n = l;
                        break;
                    }
                }
                if (null == n) return;
                let l = w.findIndex((e) => e.nodeRef === n.id);
                if (l >= 0) {
                    let e = w.slice(0, l),
                        t = w[l];
                    k(t?.textInput), I(t?.multiSelect?.state), L(e);
                } else L([]), k(void 0), I(void 0);
                G(t), j(n.id);
            },
            [A, w],
        );
    a.useEffect(() => {
        null != P && G(void 0);
    }, [P]);
    let F = a.useMemo(() => {
        let e = [],
            t = [];
        for (let n in A) {
            let l = A[n];
            if (l.id !== E && l.id !== S && l.id !== N) {
                if (l.key.endsWith("_SUBMIT") || l.button?.type === "submit") {
                    t.push(l);
                    continue;
                }
                if ((e.push(l), l.button?.type === "next")) {
                    let t = l.button?.target,
                        n = e.indexOf(A[t]);
                    -1 !== n && (e.splice(n, 1), e.push(A[t]));
                }
            }
        }
        return [A[N], ...e, ...t, A[E], A[S]];
    }, [A, N, S, E]);
    return (0, l.jsx)(r.EO, {
        "data-migration-pending": !0,
        transitionState: p.transitionState,
        "aria-labelledby": b,
        parentComponent: "InAppReportModal",
        children: (0, l.jsx)(s.t, {
            width: 440,
            activeSlide: T,
            centered: !1,
            children: F.map((e) =>
                (0, l.jsx)(
                    s.q,
                    {
                        id: e.id,
                        children: (0, l.jsx)("div", {
                            className: ns.B,
                            children: (0, l.jsx)(nr, {
                                node: e,
                                reportType: t,
                                reportSubType: M,
                                history: w,
                                onModalClose: p.onClose,
                                onSelectChild: U,
                                onNavigateBack: H,
                                onNavigateToNode: V,
                                multiSelect: C,
                                textInput: y,
                                successNodeId: E,
                                failNodeId: S,
                                onSubmit: B,
                                reportId: D,
                                nodeMap: A,
                                initialErrorMessage: e.id === T ? P : void 0,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
