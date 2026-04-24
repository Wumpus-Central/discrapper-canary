"use strict";
n.d(t, { default: () => no }), n(321073);
var a = n(627968),
    r = n(64700),
    i = n(731738),
    l = n(935462),
    s = n(430690),
    o = n(964486),
    c = n(58149),
    d = n(915089),
    u = n(831062),
    _ = n(923531),
    p = n(17372),
    m = n(369053),
    h = n(2110),
    f = n(815021),
    g = n(534514),
    b = n(683071),
    v = n(235986),
    A = n(834981),
    x = n(840387),
    E = n(403362),
    T = n(478437),
    S = n(873298),
    C = n(253932),
    I = n(985018);
let y = {
    getTitle: () => I.intl.string(I.t.vJOqMB),
    getDisabledTitle: () => I.intl.string(I.t["B5ZvY+"]),
    getDescription: () => I.intl.string(I.t["43UEUh"]),
    eligibleReportSubtypes: [p.TS.SUB_SPAM],
    eligibleChannelTypes: [T.r.DM, T.r.GROUP_DM],
    onApply: () => C.he.updateSetting(S.he.NON_FRIENDS),
    predicate: () => C.he.getSetting() === S.he.DISABLED,
};
var N = n(444802);
let R = {
    getTitle: () => I.intl.string(I.t.RVX1zT),
    getDisabledTitle: () => I.intl.string(I.t.SYkEBi),
    getDescription: () => I.intl.string(I.t.aqlmp8),
    eligibleReportSubtypes: [p.TS.SUB_GORE, p.TS.SUB_GLORIFYING_VIOLENCE],
    onApply: () =>
        (0, N.qY)(
            (function () {
                let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, N.T4)(),
                    a = {};
                return (
                    e === S.TO.SHOW && (a.goreContentGuilds = S.TO.BLUR),
                    t === S.TO.SHOW && (a.goreContentFriendDm = S.TO.BLUR),
                    n === S.TO.SHOW && (a.goreContentNonFriendDm = S.TO.BLUR),
                    a
                );
            })(),
        ),
    predicate: () => {
        let { goreContentGuilds: e, goreContentFriendDm: t, goreContentNonFriendDm: n } = (0, N.T4)();
        return e === S.TO.SHOW || t === S.TO.SHOW || n === S.TO.SHOW;
    },
};
var j = n(632119);
let L = {
        getTitle: () => I.intl.string(I.t["Gtck/t"]),
        getDisabledTitle: () => I.intl.string(I.t.E6UmXa),
        getDescription: () => I.intl.string(I.t.jcRSp6),
        eligibleReportSubtypes: [
            p.TS.SUB_CSAM,
            p.TS.SUB_LOLI,
            p.TS.SUB_NCP,
            p.TS.SUB_SEXUALLY_DEGRADING_CONTENT,
            p.TS.SUB_UNSOLICITED_PORN,
        ],
        onApply: () =>
            (0, j.Jz)(
                (function () {
                    let {
                            explicitContentGuilds: e,
                            explicitContentFriendDm: t,
                            explicitContentNonFriendDm: n,
                        } = (0, j.C$)(),
                        a = {};
                    return (
                        e === S.TO.SHOW && (a.explicitContentGuilds = S.TO.BLUR),
                        t === S.TO.SHOW && (a.explicitContentFriendDm = S.TO.BLUR),
                        n === S.TO.SHOW && (a.explicitContentNonFriendDm = S.TO.BLUR),
                        a
                    );
                })(),
            ),
        predicate: () => {
            let { explicitContentGuilds: e, explicitContentFriendDm: t, explicitContentNonFriendDm: n } = (0, j.C$)();
            return e === S.TO.SHOW || t === S.TO.SHOW || n === S.TO.SHOW;
        },
    },
    w = {
        [p.Wb.SAFETY_DM_SPAM_FILTER]: y,
        [p.Wb.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: L,
        [p.Wb.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: R,
    };
var O = n(825484),
    D = n(821609),
    M = n(221314);
let P = (e) => {
    let t,
        {
            button: n,
            submitting: i,
            disableNext: s,
            onClick: o,
            canNavigateBack: c,
            onBackClicked: d,
            isModeratorReport: u,
            className: _,
        } = e,
        p = r.useRef(null),
        m = null != n && "cancel" !== n.type,
        h = c && n?.type !== "done",
        f = m || h;
    if (
        (r.useEffect(() => {
            (n?.type === "submit" || n?.type === "done") && p.current?.focus();
        }, [n?.type]),
        !f)
    )
        return null;
    let g = I.intl.string(I.t.i4jeWR);
    return (
        n?.type === "submit"
            ? ((t = "critical-primary"), (g = u ? I.intl.string(M.default.ZUyreS) : I.intl.string(I.t["G+vU89"])))
            : n?.type === "next"
              ? (g = I.intl.string(I.t.PDTjLN))
              : n?.type === "cancel" && ((g = I.intl.string(I.t["ETE/oC"])), (t = "secondary")),
        (0, a.jsx)(l.jl, {
            "data-migration-pending": !0,
            direction: v.A.Direction.HORIZONTAL,
            className: _,
            children: (0, a.jsxs)(O.e, {
                fullWidth: !0,
                children: [
                    h &&
                        (0, a.jsx)(D.$, {
                            onClick: d,
                            variant: "secondary",
                            disabled: i,
                            text: I.intl.string(I.t["13/7kX"]),
                        }),
                    m &&
                        (0, a.jsx)(D.$, {
                            onClick: () => {
                                null != n && o(n);
                            },
                            variant: t,
                            disabled: i || s,
                            buttonRef: p,
                            text: g,
                        }),
                ],
            }),
        })
    );
};
var k = n(17928),
    U = n(692617),
    G = n(834730),
    H = n(824552),
    F = n(573435),
    B = n(973172),
    V = n(186272),
    W = n(546183),
    z = n(935208),
    Z = n(80701),
    Y = n(532406);
let $ = (e) => {
    let { entry: t } = e,
        { name: n } = t,
        i = (0, k.bG)([W.default], () => W.default.getNewestTokenForApplication(t.id)),
        l = t.getIconURL(40) ?? Y,
        s = (0, B.A)({ application: t }),
        o = r.useRef(!1);
    r.useEffect(() => {
        o.current || (H.A.fetch(), (o.current = !0));
    }, []);
    let c = null != i ? z.default.extractTimestamp(i.id) : void 0;
    return (0, a.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, a.jsx)(g.D, {
                className: Z.wx,
                variant: "heading-sm/semibold",
                children: I.intl.string(I.t["aYfK/w"]),
            }),
            (0, a.jsx)("div", {
                className: Z.vU,
                children: (0, a.jsxs)("div", {
                    className: Z.qi,
                    children: [
                        (0, a.jsx)(F.Ay, {
                            mask: F.Ay.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: Z.VE,
                            children: (0, a.jsx)("img", { src: l, alt: "", className: Z.Z2 }),
                        }),
                        (0, a.jsxs)("div", {
                            className: Z.FS,
                            children: [
                                (0, a.jsx)(G.E, { color: "text-strong", variant: "text-md/medium", children: n }),
                                s.length > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(G.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, V.A)(s.length),
                                              }),
                                              (0, a.jsx)(U.A, { className: Z.uM, guilds: s, maxGuilds: 6 }),
                                          ],
                                      })
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(G.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: t.bot?.tag,
                                              }),
                                              null != c &&
                                                  (0, a.jsx)(G.E, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: I.intl.formatToPlainString(I.t.C9rUO8, {
                                                          authorizedAt: c,
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
    q = n(381689),
    J = n(632738),
    X = n(734057),
    Q = n(994500),
    ee = n(562153),
    et = n(652215);
let en = (e) => {
    let { user: t, channelId: n, reportId: i, reportType: l } = e,
        s = (0, k.bG)([Q.A], () => Q.A.isBlocked(t.id), [t.id]),
        o = (0, k.bG)([X.A], () => X.A.getChannel(n), [n]),
        d = r.useMemo(() => ee.Ay.getName(o?.guild_id, o?.id, t), [o, t]),
        u = r.useCallback(() => {
            c.Ay.trackWithMetadata(et.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                K.A.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    q.A.showBlockSuccessToast(t.id, n);
                });
        }, [t, i, n]);
    return (0, a.jsx)(J.PQ, {
        title: I.intl.formatToPlainString(I.t["Q1o/f3"], { username: d }),
        description: I.intl.string(I.t.G08MKu),
        buttonText: s ? I.intl.string(I.t.ot2tSp) : I.intl.string(I.t["l+7PZY"]),
        buttonDisabled: s,
        onButtonPress: u,
        buttonVariant: "application" === l.name && s ? "secondary" : "critical-primary",
    });
};
var ea = n(735438),
    er = n(660261);
let ei = (e) => {
    let t = (0, ea.flatMap)(e.history, (e) => {
        let {
                destination: [t],
                multiSelect: n,
            } = e,
            a = [null, null],
            r = Object.values(n?.state ?? {});
        return r.length > 0 && (a[0] = r.join(", ")), "" !== t && (a[1] = t), a;
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, a.jsxs)("div", {
              className: er.kL,
              children: [
                  (0, a.jsx)(g.D, {
                      className: er.MR,
                      color: "text-default",
                      variant: "heading-sm/semibold",
                      children: e.isModeratorReport ? I.intl.string(M.default["6mx/DP"]) : I.intl.string(I.t["+3V9Tp"]),
                  }),
                  t.map((e, t) =>
                      (0, a.jsxs)(
                          "div",
                          {
                              className: er.P,
                              children: [
                                  (0, a.jsx)("div", { className: er.RL }),
                                  (0, a.jsx)(G.E, { variant: "text-md/normal", className: er.b, children: e }),
                              ],
                          },
                          `${e}+${t}`,
                      ),
                  ),
              ],
          });
};
var el = n(503698),
    es = n.n(el),
    eo = n(939249),
    ec = n(865116),
    ed = n(147925),
    eu = n(777148),
    e_ = n(797982);
let ep = (e) => {
        let { child: t, onClick: n, nodeMap: r } = e,
            [i, l] = t,
            s = (0, k.bG)([ec.Ay], () => ec.Ay.get("iar_show_report_sub_type_labels")),
            o = r[l],
            c = o?.report_type;
        return (0, a.jsxs)(eo.D, {
            className: es()(e_.Zm, eu.lD),
            onClick: () => n(t),
            children: [
                (0, a.jsxs)("div", {
                    className: e_.OH,
                    children: [
                        (0, a.jsx)(G.E, { className: e_.ix, variant: "text-md/normal", children: i }),
                        s &&
                            null != c &&
                            (0, a.jsx)(G.E, {
                                className: e_.Z$,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: c,
                            }),
                    ],
                }),
                (0, a.jsx)(ed.A, { className: e_._2, direction: ed.A.Directions.RIGHT }),
            ],
        });
    },
    em = (e) => {
        let {
            node: { children: t },
            onSelectChild: n,
            nodeMap: r,
        } = e;
        if (null == t || 0 === t.length) return null;
        let i = t.map((e) => {
            let [t, i] = e;
            return (0, a.jsx)(ep, { child: e, onClick: n, nodeMap: r }, `${t}+${i}`);
        });
        return (0, a.jsx)("div", { className: eu.E8, children: i });
    };
n(323874), n(14289), n(35956);
var eh = n(331322),
    ef = n(292666),
    eg = n(46054),
    eb = n(791332),
    ev = n.n(eb),
    eA = n(349288);
let ex = {
    ...ev().defaultRules.link,
    react: function (e, t, n) {
        return (0, a.jsx)(eA.Anchor, { href: e.target, target: "_blank", children: t(e.content, n) });
    },
};
var eE = n(775923),
    eT = n(818050);
let eS = ["cdn.discordapp.com", "media.discordapp.net"],
    eC = /^(?:localhost|127\.0\.0\.1|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
    eI = (0, E.m6)()
        ? /^https?:\/\/(?:(?:ptb\.|canary\.)?discord(?:app)?\.com|localhost(?::\d+)?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?)\/channels\/(?:@me|\d+)\/\d+\/\d+$/
        : /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;
function ey(e) {
    try {
        return new URL(e), !0;
    } catch {
        return !1;
    }
}
function eN(e) {
    return (
        "" !== e &&
        !!ey(e) &&
        !(function (e) {
            try {
                let t = new URL(e);
                if (eS.some((e) => t.hostname === e) || ((0, E.m6)() && eC.test(t.hostname))) return !0;
                return !1;
            } catch {
                return !1;
            }
        })(e)
    );
}
let eR = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: i, message_link_title: l, message_link_placeholder: s },
                onChange: o,
                initialContentUrl: c,
                initialMessageUrl: d,
                isRequired: u,
            } = e,
            _ = r.useMemo(() => eg.A.reactParserFor({ ...eg.A.defaultRules, link: ex }), []),
            [p, m] = r.useState(""),
            [h, f] = r.useState(""),
            [g, b] = r.useState(null),
            [v, A] = r.useState(null),
            [x, E] = r.useState(!1);
        r.useEffect(() => {
            m(c?.value ?? ""), f(d?.value ?? ""), c?.value != null && "" !== c.value && E(eN(c.value));
        }, [c, d]);
        let T = r.useCallback(
                (e) => {
                    if ((m(e), "" === e)) {
                        b(null), E(!1), f(""), A(null), o({ value: e, isValid: !1 });
                        return;
                    }
                    if (!ey(e)) {
                        b(I.intl.string(I.t["24xrGb"])), E(!1), f(""), A(null), o({ value: e, isValid: !1 });
                        return;
                    }
                    let t = eN(e);
                    E(t),
                        b(null),
                        t
                            ? "" === h
                                ? o({ value: e, isValid: !1 })
                                : eI.test(h)
                                  ? o({ value: e, isValid: !0 }, { value: h, isValid: !0 })
                                  : o({ value: e, isValid: !1 }, { value: h, isValid: !1 })
                            : (f(""), A(null), o({ value: e, isValid: !0 }));
                },
                [o, h],
            ),
            S = r.useCallback(
                (e) => {
                    if ((f(e), "" === e || !eI.test(e))) {
                        A(I.intl.string(I.t["24xrGb"])), o({ value: p, isValid: !1 }, { value: e, isValid: !1 });
                        return;
                    }
                    A(null), o({ value: p, isValid: !0 }, { value: e, isValid: !0 });
                },
                [o, p],
            );
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsxs)(eh.B, {
                    gap: 16,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eT.QB,
                            children: [
                                null != t &&
                                    (0, a.jsx)("div", {
                                        className: eT.QB,
                                        children: (0, a.jsxs)(G.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [t, u && (0, a.jsx)("span", { className: eE.m, children: "*" })],
                                        }),
                                    }),
                                (0, a.jsx)(ef.k, { onChange: T, value: p, error: g, placeholder: i, autoFocus: !0 }),
                            ],
                        }),
                        x &&
                            null != l &&
                            (0, a.jsxs)("div", {
                                className: eT.QB,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: eT.QB,
                                        children: (0, a.jsxs)(G.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            children: [l, u && (0, a.jsx)("span", { className: eE.m, children: "*" })],
                                        }),
                                    }),
                                    (0, a.jsx)(ef.k, { onChange: S, value: h, error: v, placeholder: s }),
                                ],
                            }),
                    ],
                }),
                null != n && (0, a.jsx)(G.E, { variant: "text-xs/normal", children: _(n) }),
            ],
        });
    },
    ej = (e) => {
        let { element: t, onChange: n, state: i } = e,
            l = t.name,
            s = `${t.name}_message_link`,
            o = r.useCallback(
                (e, t) => {
                    null != t ? n(l, e.value, e.isValid && t.isValid, s, t.value) : n(l, e.value, e.isValid, s, void 0);
                },
                [n, l, s],
            );
        return (0, a.jsx)(eR, {
            data: t.data,
            onChange: o,
            initialContentUrl: i?.[l],
            initialMessageUrl: i?.[s],
            isRequired: t.should_submit_data,
        });
    };
var eL = n(783878),
    ew = n(518977);
let eO = (e) => {
    let { element: t, onChange: n, state: i } = e,
        l = t.name,
        { title: s, options: o } = t.data,
        c = i?.[l]?.value ?? void 0,
        [d, u] = r.useState(c);
    r.useEffect(() => {
        u(c);
    }, [c]);
    let _ = r.useMemo(
            () =>
                o
                    .map((e) => {
                        let t = e.label;
                        try {
                            t = (0, ew.Gw)(e.value);
                        } catch {}
                        return { id: e.id ?? e.value, value: e.value, label: t };
                    })
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [o],
        ),
        p = r.useCallback(
            (e) => {
                null != e && (u(e), n(l, e));
            },
            [n, l],
        );
    return (0, a.jsx)("div", {
        className: eT.QB,
        children: (0, a.jsx)(eL.Z, {
            label: s,
            value: d,
            required: t.should_submit_data,
            onSelectionChange: p,
            options: _,
            selectionMode: "single",
            maxOptionsVisible: 4,
            fullWidth: !0,
        }),
    });
};
var eD = n(933958),
    eM = n(869003);
let eP = (e) => {
    let { application: t, reportId: n } = e,
        [i, l] = r.useState(!1),
        s = (0, k.bG)([W.default], () => W.default.getNewestTokenForApplication(t.id));
    r.useEffect(() => {
        null != s && l(!0);
    }, [s]);
    let o = r.useRef(!1);
    r.useEffect(() => {
        o.current || (H.A.fetch(), (o.current = !0));
    }, []);
    let d = (0, k.bG)([eD.Ay], () => eD.Ay.getSelfEmbeddedActivities()),
        u = r.useCallback(() => {
            if (
                (l(!1),
                c.Ay.trackWithMetadata(et.HAw.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n,
                }),
                null == s)
            )
                return;
            H.A.delete(s.id);
            let e = d.get(t.id);
            null != e && eM.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
        }, [t.id, s, d, n]);
    return null == t
        ? null
        : (0, a.jsx)(J.PQ, {
              title: I.intl.string(I.t.ygG62M),
              description: I.intl.string(I.t.S51EKg),
              buttonText: i ? I.intl.string(I.t.xXpoGV) : I.intl.string(I.t.JsiUnL),
              buttonDisabled: !i,
              onButtonPress: u,
              buttonVariant: i ? "critical-primary" : "secondary",
          });
};
var ek = n(720149),
    eU = n(576705);
let eG = (e) => {
    let { message: t, reportId: n } = e,
        [i, l] = r.useState(!1),
        s = r.useCallback(() => {
            l(!0),
                c.Ay.trackWithMetadata(et.HAw.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }),
                ek.A.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        o = r.useMemo(() => {
            let e = X.A.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== et.rbe.DM &&
                e.type !== et.rbe.GROUP_DM &&
                eU.A.canWithPartialContext(et.xBc.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && o
        ? (0, a.jsx)(J.PQ, {
              title: I.intl.string(I.t.c9BHL9),
              description: I.intl.string(I.t.dK8S0w),
              buttonText: i ? I.intl.string(I.t.f3pnLL) : I.intl.string(I.t.ch2xbt),
              buttonDisabled: i,
              buttonVariant: "critical-primary",
              onButtonPress: s,
          })
        : null;
};
var eH = n(691885);
let eF = (e) => {
        let { element: t, onChange: n, initialOption: i } = e,
            [l, s] = r.useState("");
        r.useEffect(() => {
            s(i ?? "");
        }, [i]);
        let o = t.name,
            { title: c, options: d } = t.data,
            u = r.useMemo(() => d.map((e) => ({ ...e, id: e.id ?? e.value })), [d]),
            _ = r.useCallback(
                (e) => {
                    null != e && (s(e), n(e));
                },
                [n],
            );
        return (0, a.jsx)(
            "div",
            {
                className: eT.QB,
                children: (0, a.jsx)(eH.l, {
                    label: c,
                    value: l,
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
    eB = (e) => {
        let { elements: t, onChange: n, state: r } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, a.jsx)(
                    eF,
                    { element: e, initialOption: r?.[t]?.value ?? void 0, onChange: (e) => n(t, e) },
                    t,
                );
            });
        return (0, a.jsx)("div", { children: i });
    };
var eV = n(509434),
    eW = n(975807),
    ez = n(135363);
let eZ = (e) => {
    let {
        data: { url: t, link_text: n, link_description: r, is_localized: i },
    } = e;
    return i
        ? (0, a.jsxs)(eo.D, {
              role: "link",
              className: es()(ez.$J, eu.lD),
              onClick: () => {
                  (0, eW.A)(t);
              },
              children: [
                  (0, a.jsxs)("div", {
                      className: ez.xU,
                      children: [
                          (0, a.jsx)(G.E, { className: ez.__invalid_linkText, variant: "text-md/normal", children: n }),
                          null != r &&
                              "" !== r &&
                              (0, a.jsx)(G.E, { variant: "text-md/normal", color: "text-muted", children: r }),
                      ],
                  }),
                  (0, a.jsx)(eV.I, { size: "sm", color: "currentColor", className: ez.wP }),
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
            return (0, a.jsx)(eZ, { data: n }, `external-link+${t}`);
        }),
        r = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, a.jsxs)("div", {
        className: es()(ez.nV, eu.E8),
        children: [
            !r &&
                (0, a.jsx)(g.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: ez.wx,
                    children: I.intl.string(I.t.hvVgAZ),
                }),
            n,
        ],
    });
}
var e$ = n(260598);
let eK = (e) => {
        let {
                data: {
                    title: t,
                    subtitle: n,
                    description: i,
                    placeholder: l,
                    rows: s,
                    character_limit: o,
                    pattern: c,
                },
                onChange: d,
                initialText: u,
                isRequired: _,
            } = e,
            p = r.useMemo(() => eg.A.reactParserFor({ ...eg.A.defaultRules, link: ex }), []),
            [m, h] = r.useState(""),
            [f, g] = r.useState(null);
        r.useEffect(() => {
            h(u?.value ?? "");
        }, [u]);
        let b = r.useCallback(
            (e) => {
                let t = null != c ? new RegExp(c) : null;
                null == t || t.test(e)
                    ? null != e && (g(null), h(e), d({ value: e, isValid: !0 }))
                    : (g(I.intl.string(I.t["24xrGb"])), d({ value: e, isValid: !1 }));
            },
            [d, c],
        );
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsxs)("div", {
                    className: eT.QB,
                    children: [
                        null != t &&
                            (0, a.jsxs)(G.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: [t, _ && (0, a.jsx)("span", { className: eE.m, children: "*" })],
                            }),
                        null != i &&
                            (0, a.jsx)("div", {
                                className: eT.a5,
                                children: (0, a.jsx)(G.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: i,
                                }),
                            }),
                    ],
                }),
                1 === s
                    ? (0, a.jsx)(ef.k, { maxLength: o, onChange: b, value: m, error: f, placeholder: l })
                    : (0, a.jsx)(e$.f, { maxLength: o, onChange: b, value: m, error: f, rows: s, placeholder: l }),
                null != n &&
                    (0, a.jsx)("div", {
                        className: eT.a5,
                        children: (0, a.jsx)(G.E, { variant: "text-xs/normal", color: "text-muted", children: p(n) }),
                    }),
            ],
        });
    },
    eq = (e) => {
        let { elements: t, onChange: n, state: r } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, a.jsx)(
                    eK,
                    {
                        data: e.data,
                        onChange: (e) => n(t, e.value, e.isValid),
                        initialText: r?.[t] ?? void 0,
                        isRequired: e.should_submit_data,
                    },
                    t,
                );
            });
        return (0, a.jsx)("div", { className: eE.k, children: i });
    };
var eJ = n(548118),
    eX = n(71393),
    eQ = n(729985);
let e0 = (e) => {
    let { entry: t } = e,
        n = X.A.getChannel(t.channelId);
    if (null == n) return null;
    let r = eX.A.getGuild(n.guild_id);
    return null == r
        ? null
        : (0, a.jsxs)("div", {
              className: eQ.kL,
              children: [
                  (0, a.jsx)(g.D, {
                      className: eQ.wx,
                      variant: "heading-sm/semibold",
                      children: I.intl.string(I.t.nTe4HC),
                  }),
                  (0, a.jsxs)("div", {
                      className: eQ.bo,
                      children: [
                          (0, a.jsxs)("div", {
                              className: eQ.mo,
                              children: [
                                  (0, a.jsx)(eJ.Ay, { guild: r, size: eJ.Ay.Sizes.MINI, className: eQ.xG }),
                                  (0, a.jsx)(G.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: r.name,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(G.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
var e1 = n(486020),
    e2 = n(369640);
let e9 = (e) => {
    let { entry: t } = e,
        { id: n, icon: r, name: i } = t,
        l = e1.Ay.getGuildIconURL({ id: n, icon: r, size: 32 }) ?? void 0;
    return (0, a.jsxs)("div", {
        className: e2.kL,
        children: [
            (0, a.jsx)(g.D, { className: e2.wx, variant: "heading-sm/semibold", children: I.intl.string(I.t.nTe4HC) }),
            (0, a.jsx)("div", {
                className: e2.bo,
                children: (0, a.jsxs)("div", {
                    className: e2.OA,
                    children: [
                        (0, a.jsx)(F.Ay, {
                            mask: F.Ay.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: e2.$d,
                            children: (0, a.jsx)("img", { src: l, alt: "", className: e2.$f }),
                        }),
                        (0, a.jsx)(G.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                    ],
                }),
            }),
        ],
    });
};
var e5 = n(306032);
let e3 = (e) => {
    let { guild: t } = e;
    return (0, a.jsxs)("div", {
        className: e5.kL,
        children: [
            (0, a.jsx)(g.D, {
                className: e5.wx,
                variant: "heading-sm/semibold",
                children: I.intl.string(I.t["0ox7Hq"]),
            }),
            (0, a.jsx)("div", {
                className: e5.bo,
                children: (0, a.jsxs)("div", {
                    className: e5.OA,
                    children: [
                        (0, a.jsx)("div", {
                            className: e5.$f,
                            children: (0, a.jsx)(eJ.Ay, { guild: t, size: eJ.Ay.Sizes.LARGE }),
                        }),
                        (0, a.jsx)("div", {
                            children: (0, a.jsx)(G.E, {
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
var e6 = n(336007);
let e7 = (e) => {
    let { event: t } = e,
        n = (0, k.bG)([eX.A], () => eX.A.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: e6.kL,
              children: [
                  (0, a.jsx)(g.D, {
                      className: e6.wx,
                      variant: "heading-sm/semibold",
                      children: I.intl.string(I.t.SDTOL7),
                  }),
                  (0, a.jsxs)("div", {
                      className: e6.bo,
                      children: [
                          (0, a.jsxs)("div", {
                              className: e6.OA,
                              children: [
                                  (0, a.jsx)(eJ.Ay, { guild: n, size: eJ.Ay.Sizes.MINI, className: e6.$f }),
                                  (0, a.jsx)(G.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(G.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
var e8 = n(900772);
let e4 = (e) => {
        let {
                node: { header: t, subheader: n, button: i },
                isModeratorReport: l,
                isTidaReport: s = !1,
                hideTitle: o = !1,
            } = e,
            c = i?.type === "submit",
            d = r.useMemo(() => eg.A.reactParserFor({ ...eg.A.defaultRules, link: ex }), []);
        return (0, a.jsxs)("div", {
            className: e8.N,
            children: [
                o || null == t || "" === t
                    ? null
                    : (0, a.jsx)(g.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                null != n && "" !== t
                    ? (0, a.jsx)(G.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: e8.m,
                          children: d(n),
                      })
                    : null,
                c &&
                    !l &&
                    !s &&
                    (0, a.jsx)(G.E, { variant: "text-sm/normal", children: I.intl.format(I.t.Q0tSKT, {}) }),
            ],
        });
    },
    te = (e) => {
        let { user: t, channelId: n, reportId: i } = e,
            { isIgnored: l, isBlocked: s } = (0, k.cf)(
                [Q.A],
                () => ({ isIgnored: Q.A.isIgnored(t.id), isBlocked: Q.A.isBlocked(t.id) }),
                [t],
            ),
            o = (0, k.bG)([X.A], () => X.A.getChannel(n), [n]),
            d = r.useMemo(() => ee.Ay.getName(o?.guild_id, o?.id, t), [o, t]),
            u = r.useCallback(() => {
                c.Ay.trackWithMetadata(et.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                    K.A.ignoreUser(t.id, "web_iar_ignore_user_element", n);
            }, [t, i, n]),
            _ = r.useMemo(() => l || s, [l, s]);
        return (0, a.jsx)(J.PQ, {
            title: I.intl.formatToPlainString(I.t.U3yyFs, { username: d }),
            description: I.intl.string(I.t.naWE6W),
            buttonText: _ ? I.intl.string(I.t.nDdxOG) : I.intl.string(I.t.ICYEfY),
            buttonDisabled: _,
            onButtonPress: u,
        });
    };
var tt = n(512950),
    tn = n(21883);
let ta = (e) => {
        let {
                node: { info: t },
            } = e,
            n = r.useMemo(() => eg.A.reactParserFor({ ...eg.A.defaultRules, link: ex }), []);
        return null == t ? null : (0, a.jsx)(tt.p, { className: tn.e, messageType: tt.Y.INFO, children: n(t) });
    },
    tr = eg.A.reactParserFor({ ...eg.A.defaultRules, link: ex }),
    ti = (e) => {
        let { element: t } = e,
            { body: n, notice_type: r } = t.data;
        return (0, a.jsx)(b.w, { type: r, children: tr(n) });
    };
var tl = n(314116),
    ts = n(997509);
let to = (e) => {
    let { guildId: t, reportId: n } = e,
        [i, l] = r.useState(!1),
        s = eX.A.getGuild(t),
        o = null != s;
    r.useEffect(() => {
        l(!o);
    }, [o]);
    let d = r.useCallback(() => {
        l(!0),
            c.Ay.trackWithMetadata(et.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, { guild_id: t, report_id: n }),
            ts.A.leaveGuild(t);
    }, [t, n]);
    return null == s
        ? null
        : (0, a.jsx)(J.PQ, {
              title: I.intl.string(I.t.cU96ip),
              description: I.intl.formatToPlainString(I.t["26mR6/"], { guildName: s?.name }),
              buttonText: i ? I.intl.string(I.t["9Ak99h"]) : I.intl.string(I.t.F3qExp),
              buttonDisabled: i,
              buttonVariant: "critical-primary",
              onButtonPress: () => {
                  (0, tl.A)({
                      title: I.intl.formatToPlainString(I.t["1GX6P/"], { name: s.name }),
                      subtitle: I.intl.format(I.t.ZEXC0r, { name: s.name }),
                      confirmText: I.intl.string(I.t.J2TBi3),
                      onConfirm: d,
                  });
              },
          });
};
var tc = n(364522),
    td = n(387408),
    tu = n(763754),
    t_ = n(491182),
    tp = n(291812),
    tm = n(639288),
    th = n(805964),
    tf = n(375199),
    tg = n(838541),
    tb = n(121940);
let tv = (e) => {
    let { message: t } = e,
        n = (0, tu.Ay)(t),
        i = (0, k.bG)([X.A], () => X.A.getChannel(t.channel_id)),
        l = r.useMemo(() => (0, td.A)(t), [t]),
        { content: s } = (0, tf.A)(l, { hideSimpleEmbedContent: !1 }),
        o = C.hH.useSetting(),
        c = r.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, th.o)(t, s, !1, !1, "", {
                leadingIconClass: tb.$r,
                trailingIconClass: tb.$r,
                iconSize: tg.eJ,
            });
            return (0, a.jsxs)("div", {
                className: tb.hQ,
                children: [e, (0, a.jsx)(tp.Ay, { message: t, content: s, compact: o }), n],
            });
        }, [t, s, o]);
    return null == i
        ? null
        : (0, a.jsxs)("div", {
              className: tb.kL,
              children: [
                  (0, a.jsx)(g.D, {
                      className: tb.wx,
                      variant: "heading-sm/semibold",
                      children: I.intl.string(I.t.iouM3a),
                  }),
                  (0, a.jsx)(tc.Ip, {
                      className: tb.PI,
                      children: (0, a.jsx)(t_.A, {
                          childrenMessageContent: c(),
                          childrenHeader: (0, a.jsx)(tm.Ay, { message: t, channel: i, author: n, guildId: i.guild_id }),
                          disableInteraction: !0,
                          author: n,
                      }),
                  }),
              ],
          });
};
var tA = n(150934),
    tx = n(986188);
let tE = (e) => {
        let { onChange: t, label: n, subtitle: r, selected: i } = e;
        return (0, a.jsx)("div", {
            className: tx.yc,
            children: (0, a.jsx)(tA.S, { checked: i, onChange: t, label: n, description: r }),
        });
    },
    tT = (e) => {
        let { element: t, title: n, state: r, onChange: i } = e;
        if (t?.type !== "checkbox") return null;
        let { data: l } = t;
        return (0, a.jsxs)("div", {
            children: [
                null != n &&
                    (0, a.jsxs)(G.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: tx.DD,
                        children: [n, t.should_submit_data && (0, a.jsx)("span", { className: tx.mw, children: "*" })],
                    }),
                l.map((e, t) => {
                    let [n, l, s] = e;
                    return (0, a.jsx)(
                        tE,
                        { onChange: () => i(n, l), selected: n in r, label: l, subtitle: s },
                        `${t}+button`,
                    );
                }),
            ],
        });
    };
var tS = n(832712),
    tC = n(543465),
    tI = n(477427);
let ty = (e) => {
    let { user: t, channelId: n, reportId: i } = e,
        l = X.A.getDMFromUserId(t.id),
        s = (0, k.bG)([X.A], () => X.A.getChannel(n), [n]),
        o = r.useMemo(() => ee.Ay.getName(s?.guild_id, s?.id, t), [s, t]),
        d = (0, k.bG)([tC.Ay], () => (null == l ? null : tC.Ay.isChannelMuted(null, l))),
        [u, _] = r.useState(d ?? !1),
        p = r.useCallback(() => {
            null != l &&
                (_(!0),
                c.Ay.trackWithMetadata(et.HAw.IAR_MUTE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: i }),
                tS.A.updateChannelOverrideSettings(null, l, { muted: !0 }, tI.fd.Muted),
                q.A.showMuteSuccessToast(t.id, n));
        }, [l, n, t, i]);
    return (0, a.jsx)(J.PQ, {
        title: I.intl.formatToPlainString(I.t.TRp5wR, { username: o }),
        description: I.intl.string(I.t["yM/+AJ"]),
        buttonText: u ? I.intl.string(I.t.E8x4Nj) : I.intl.string(I.t.HITUcR),
        buttonDisabled: u,
        onButtonPress: p,
    });
};
var tN = n(144228),
    tR = n(405977);
let tj = (e) => {
    let { element: t, onChange: n, state: i } = e,
        l = t.name,
        { title: s, options: o } = t.data,
        c = i?.[l]?.value ?? void 0,
        [d, u] = r.useState(c);
    r.useEffect(() => {
        u(c);
    }, [c]);
    let _ = r.useMemo(() => o.map((e) => ({ name: e.label, value: e.value })), [o]),
        p = r.useCallback(
            (e) => {
                null != e && (u(e), n(l, e));
            },
            [n, l],
        );
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(G.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: tR.P,
                children: [s, t.should_submit_data && (0, a.jsx)("span", { className: tR.m, children: "*" })],
            }),
            (0, a.jsx)(tN.z, { value: d, onChange: p, options: _ }),
        ],
    });
};
var tL = n(146985);
function tw(e) {
    let { children: t, title: n } = e;
    return (0, a.jsxs)("div", {
        className: tL.kL,
        children: [
            (0, a.jsx)(g.D, {
                className: tL.wx,
                variant: "text-sm/semibold",
                children: n ?? I.intl.string(I.t["k+QA9N"]),
            }),
            (0, a.jsx)("div", { className: tL.uk, children: t }),
        ],
    });
}
var tO = n(157559),
    tD = n(794967),
    tM = n(309010);
let tP = (e) => {
    let { application: t, reportId: n } = e,
        [i, l] = r.useState(!1),
        [s, o] = r.useState(!1),
        d = (0, k.bG)([tM.A, X.A], () => X.A.getChannel(tM.A.getChannelId())?.guild_id),
        [u, _] = r.useState(null);
    r.useEffect(() => {
        null != u && (l(!0), o(!0));
    }, [u]),
        r.useEffect(() => {
            if (null == d) return;
            let e = !1;
            return (
                (async () => {
                    let n = null;
                    try {
                        n = await (0, tD.c)(d);
                    } catch {}
                    if (e || null == n) return;
                    let a = n.find((e) => e.application?.id === t.id);
                    null != a && _(a);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [d, t.id]);
    let p = r.useCallback(() => {
            o(!1),
                c.Ay.trackWithMetadata(et.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                    guild_id: d,
                    application_id: t.id,
                    report_id: n,
                }),
                null != d &&
                    null != u &&
                    ts.A.disableIntegration(d, u.id).catch(() => {
                        tO.A.show({ title: I.intl.string(I.t.wYqMmI), body: I.intl.string(I.t.A4Mnst) });
                    });
        }, [t.id, d, u, n]),
        m = (0, k.bG)([eU.A, eX.A], () => {
            let e = eX.A.getGuild(d);
            if (null == e) return !1;
            let n = eU.A.can(et.xBc.MANAGE_GUILD, e),
                a = null == t.bot || eU.A.canManageUser(et.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && a;
        });
    return null != t && null != d && i && m
        ? (0, a.jsx)(J.PQ, {
              title: I.intl.string(I.t["WV/CsH"]),
              description: I.intl.string(I.t["FlcC+3"]),
              buttonText: s ? I.intl.string(I.t.aCJlq4) : I.intl.string(I.t["6I1F3i"]),
              buttonDisabled: !s,
              onButtonPress: p,
              buttonVariant: s ? "critical-primary" : "secondary",
          })
        : null;
};
var tk = n(123292),
    tU = n(780964),
    tG = n(858897),
    tH = n(998436);
function tF(e) {
    let { title: t, description: n, onButtonClick: i, trackSettingsUpsellsAction: l } = e,
        [s, c] = r.useState(!1);
    return (
        (0, o.Ay)(() => {
            l(m.lJ.SETTINGS_UPSELLS_VIEWED);
        }),
        (0, a.jsx)(J.PQ, {
            title: t,
            description: n,
            buttonText: s ? I.intl.string(I.t["h+WsPb"]) : I.intl.string(I.t.A8t4Nf),
            buttonDisabled: s,
            onButtonPress: () => {
                i(), c(!0), l(m.lJ.SETTINGS_UPSELLS_APPLY_CLICKED);
            },
        })
    );
}
function tB(e) {
    var t;
    let { settingsUpsells: n, channelId: i, onModalClose: l, reportId: s, reportType: o, reportSubType: d } = e,
        u = (0, k.bG)([X.A], () => X.A.getChannel(i)),
        _ =
            ((t = u?.type),
            r.useMemo(
                () =>
                    n
                        .map((e) => {
                            var n, a;
                            let r;
                            return (
                                (n = e),
                                (a = t),
                                !(function (e, t) {
                                    let { predicate: n, eligibleChannelTypes: a } = e,
                                        r = null == n || n?.() === !0,
                                        i = null == t || null == a || a.includes(t);
                                    return r && i;
                                })((r = w[n]), a)
                                    ? null
                                    : r
                            );
                        })
                        .filter(E.Vq),
                [n, t],
            )),
        p = (0, m.Mw)(o, d, s);
    return 0 === _.length
        ? null
        : (0, a.jsxs)("div", {
              className: tH.kL,
              children: [
                  (0, a.jsx)(g.D, {
                      variant: "text-sm/semibold",
                      className: tH.wx,
                      children: I.intl.string(I.t["1yxTIJ"]),
                  }),
                  (0, a.jsx)("div", {
                      className: tH.uk,
                      children: _.map((e, t) => {
                          let { getTitle: r, getDescription: i, onApply: l } = e;
                          return (0, a.jsx)(
                              tF,
                              { title: r(), description: i(), onButtonClick: l, trackSettingsUpsellsAction: p(n[t]) },
                              t,
                          );
                      }),
                  }),
                  (0, a.jsx)(tk.Q, {
                      text: I.intl.string(I.t.olebGx),
                      onClick: () => {
                          (0, tG.openUserSettings)(tU.X.CONTENT_AND_SOCIAL_PANEL),
                              l(),
                              c.Ay.trackWithMetadata(et.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: s,
                                  report_type: o.name,
                                  report_subtype: d,
                                  action: m.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED,
                              });
                      },
                  }),
              ],
          });
}
var tV = n(857250),
    tW = n(691540),
    tz = n(97483),
    tZ = n(899847);
let tY = (e) => {
    let { parents: t } = e,
        [n, i] = r.useState(!1),
        l = r.useCallback(() => {
            (0, tZ.Xz)()
                .then(() => {
                    (0, tW.P0)(
                        (0, tV.o)(
                            I.intl.formatToPlainString(I.t.wr4IT5, {
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
    let s = I.intl.formatToPlainString(I.t.HqyWeO, {
        count: t.length,
        parent1: t[0].username,
        parent2: t[1]?.username,
        parent3: t[2]?.username,
    });
    return (0, a.jsx)(J.PQ, {
        title: s,
        description: I.intl.string(I.t["5l/hlt"]),
        buttonText: n ? I.intl.string(I.t.ntuuk7) : I.intl.string(I.t["sYdX/H"]),
        buttonDisabled: n,
        onButtonPress: l,
    });
};
var t$ = n(618282);
let tK = (e) => {
    let { stageInstance: t } = e,
        n = eX.A.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: t$.kL,
              children: [
                  (0, a.jsx)(g.D, {
                      className: t$.wx,
                      variant: "heading-sm/semibold",
                      children: I.intl.string(I.t.InbJ8x),
                  }),
                  (0, a.jsxs)("div", {
                      className: t$.bo,
                      children: [
                          (0, a.jsxs)("div", {
                              className: t$.OA,
                              children: [
                                  (0, a.jsx)(eJ.Ay, { guild: n, size: eJ.Ay.Sizes.MINI, className: t$.$f }),
                                  (0, a.jsx)(G.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(G.E, { variant: "text-md/semibold", color: "text-strong", children: t.topic }),
                      ],
                  }),
              ],
          });
};
var tq = n(810685),
    tJ = n(540606);
let tX = (e) => {
    let { element: t } = e;
    return t?.type !== "success"
        ? null
        : (0, a.jsx)("div", { className: tJ.t, children: (0, a.jsx)(tq.M, { alt: "" }) });
};
var tQ = n(704786);
function t0(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: i },
            },
        } = e,
        l = r.useMemo(() => eg.A.reactParserFor({ ...eg.A.defaultRules, link: ex }), []);
    return i && (null != t || null != n)
        ? (0, a.jsxs)("div", {
              children: [
                  null != t &&
                      (0, a.jsx)(g.D, {
                          variant: "heading-sm/semibold",
                          color: "text-default",
                          className: tQ.w,
                          children: t,
                      }),
                  null != n &&
                      (0, a.jsx)(G.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: tQ.r,
                          children: l(n),
                      }),
              ],
          })
        : null;
}
var t1 = n(957565),
    t2 = n(415924);
function t9(e) {
    let {
            element: {
                data: { title: t, body: n, sms: i, is_localized: l },
            },
        } = e,
        [s, o] = r.useState(!1),
        c = r.useRef(eg.A.reactParserFor(eg.A.defaultRules));
    return l
        ? (0, a.jsxs)("div", {
              className: t2.kL,
              children: [
                  (0, a.jsx)(g.D, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: t2.wx,
                      children: t,
                  }),
                  (0, a.jsx)(G.E, { variant: "text-sm/normal", className: t2.G3, children: c.current(n) }),
                  (0, a.jsx)("div", {
                      children: (0, a.jsxs)("div", {
                          className: es()(t2.GH, { [t2.pG]: s }),
                          children: [
                              (0, a.jsx)(G.E, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: t2.Kk,
                                  children: i,
                              }),
                              (0, a.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: t2.__invalid_trailingButton,
                                  children: (0, a.jsx)(D.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: s ? I.intl.string(I.t.t5VZ88) : I.intl.string(I.t.OpuAlK),
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
var t5 = n(778712),
    t3 = n(730134),
    t6 = n(896736);
let t7 = (e) => {
    let { user: t } = e;
    return (0, a.jsxs)("div", {
        className: t6.kL,
        children: [
            (0, a.jsx)(g.D, { className: t6.wx, variant: "heading-sm/semibold", children: I.intl.string(I.t.Rsth7z) }),
            (0, a.jsx)("div", {
                className: t6.f1,
                children: (0, a.jsxs)("div", {
                    className: t6.eF,
                    children: [
                        (0, a.jsx)(t3.A, { className: t6.Hk, user: t, size: t5._3.SIZE_40 }),
                        (0, a.jsxs)("div", {
                            children: [
                                null != t.globalName &&
                                    (0, a.jsx)(G.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: t.globalName,
                                    }),
                                (0, a.jsx)(G.E, {
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
var t8 = n(751162),
    t4 = n(287809),
    ne = n(858331);
let nt = (e) => {
        let { widget: t, userId: n } = e,
            r = (0, k.bG)([t4.default], () => t4.default.getUser(n));
        return null == r
            ? null
            : (0, a.jsxs)("div", {
                  className: ne.k,
                  children: [
                      (0, a.jsx)(g.D, {
                          className: ne.w,
                          variant: "heading-sm/semibold",
                          children: I.intl.string(I.t.SpsnDY),
                      }),
                      (0, a.jsx)(t8.u, { widget: t, user: r, disableInteraction: !0 }),
                  ],
              });
    },
    nn = ["ignore_users", "block_users", "leave_guild", "delete_message", "deauthorize_app", "share_with_parents"],
    na = ["user_urf", "message_urf", "guild_urf", "media_takedown"];
function nr(e, t) {
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
let nl = (e) => {
    let {
            node: t,
            reportType: n,
            reportSubType: i,
            history: s,
            onSelectChild: o,
            onModalClose: c,
            onSubmit: d,
            onNavigateToNode: u,
            multiSelect: _,
            reportId: E,
            textInput: T,
            initialErrorMessage: S,
        } = e,
        C = nr(t, "checkbox"),
        y = nr(t, "text_line_resource"),
        N = ni(t, "external_link"),
        R = ni(t, "free_text"),
        j = ni(t, "dropdown"),
        L = nr(t, "country_select"),
        O = nr(t, "inline_notice"),
        D = ni(t, "radio_group"),
        k = nr(t, "text"),
        U = nr(t, "content_url_input"),
        G = h.x.REPORT_TO_MOD.has(n.name),
        H = n.name === p.tY.MEDIA_TAKEDOWN,
        [F, B] = r.useState(!1),
        [V, W] = r.useState(!1),
        [z, Z] = r.useState(S ?? ""),
        [Y, K] = r.useState(() => ({})),
        [q, J] = r.useState(() => ({})),
        X = r.useRef(null),
        Q = r.useMemo(() => ("message" === n.name ? n.record.channel_id : void 0), [n]),
        ee = r.useCallback(
            (e) => ({
                nodeRef: t.id,
                destination: e,
                textInput: null != R || null != j || null != L || D.length > 0 || null != U ? q : void 0,
                multiSelect: null != C ? { name: C.name, state: Y } : void 0,
            }),
            [t, R, j, L, D, U, C, Y, q],
        ),
        ea = r.useMemo(
            () =>
                (0, m.ks)(
                    {
                        freeTextElements: R,
                        dropdownElements: j,
                        countrySelectElement: L,
                        radioGroupElements: D,
                        multiSelectElement: C,
                        contentUrlInputElement: U,
                    },
                    { textInput: q, multiSelect: Y },
                ),
            [R, j, L, D, C, U, q, Y],
        ),
        er = r.useCallback(
            (e, t) => {
                let n = { ...Y };
                e in Y ? delete n[e] : (n[e] = t), K(n);
            },
            [Y],
        ),
        el = r.useCallback(
            function (e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    i = { ...q };
                (i[e] = { value: t, isValid: n }),
                    null != a && (null != r && "" !== r ? (i[a] = { value: r, isValid: n }) : delete i[a]),
                    J(i);
            },
            [q],
        ),
        es = r.useCallback(
            (e) => {
                o(ee(e));
            },
            [o, ee],
        );
    r.useEffect(() => {
        null != _ && K(_), null != T && J(T);
    }, [_, T]),
        r.useEffect(() => {
            null != S && Z(S);
        }, [S]),
        r.useEffect(() => {
            if ("" !== z) {
                let e = setTimeout(() => {
                    let e = X.current?.parentElement;
                    null != e && e.scrollTo({ top: e.scrollHeight, behavior: "smooth" });
                }, 50);
                return () => clearTimeout(e);
            }
        }, [z]),
        r.useEffect(() => {
            if (null != C) {
                let e = C.data;
                if (null != e) for (let [t, n, a, r] of e) r && K((e) => ({ ...e, [t]: n }));
            }
        }, [C]);
    let eo = r.useCallback(
            (e) => {
                switch (e) {
                    case et.t02.UNKNOWN_TIDA_CONTENT: {
                        let e = I.intl.string(I.t["2EPoxE"]);
                        Z(e), u?.("MEDIA_TAKEDOWN_CONTENT_DETAILS", e);
                        break;
                    }
                    case et.t02.INVALID_SIGNATURE_MISMATCH:
                        Z(I.intl.string(I.t.kXrnQM));
                        break;
                    case et.t02.INVALID_FORM_BODY:
                        Z(I.intl.string(I.t.VjAAuP));
                        break;
                    default:
                        G ? Z(I.intl.string(M.default.psKFdJ)) : Z(I.intl.string(I.t.h6D8Vy));
                }
            },
            [G, u],
        ),
        ec = r.useCallback(() => {
            let t = ["", e.successNodeId];
            d(ee(t))
                .then(() => {
                    Z(""), es(t);
                })
                .catch((e) => {
                    eo(e.body?.code);
                })
                .finally(() => {
                    B(!1);
                });
        }, [e.successNodeId, ee, d, es, eo]),
        ed = r.useCallback(
            (e) => {
                switch (e.type) {
                    case "done":
                    case "cancel":
                        c();
                        break;
                    case "next":
                        es(["", e.target]);
                        break;
                    case "submit":
                        B(!0), ec();
                }
            },
            [c, es, ec],
        ),
        e_ = r.useCallback(
            (e) => {
                if ("Enter" === e.key && !ea && !F && null != t.button) {
                    let n = e.target;
                    "BUTTON" !== n.tagName &&
                        "A" !== n.tagName &&
                        "button" !== n.getAttribute("role") &&
                        (e.preventDefault(), ed(t.button));
                }
            },
            [ea, F, t.button, ed],
        );
    r.useEffect(() => {
        t.is_auto_submit && !V && (W(!0), d(ee(["", t.id])));
    }, [t.is_auto_submit, V, d, ee, t.id]);
    let ep = r.useMemo(() => {
            var e;
            let t;
            return null != i
                ? ((e = i),
                  (t = []),
                  Object.entries(w).forEach((n) => {
                      let [a, r] = n;
                      (null == r.eligibleReportSubtypes || r.eligibleReportSubtypes.includes(e)) && t.push(a);
                  }),
                  0 === t.length ? null : t)
                : null;
        }, [i]),
        eh = null != nr(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
        ef = (0, x.Z)(),
        eg = (0, A.GR)(),
        eb = ef && eg.length > 0 && null != nr(t, "share_with_parents");
    return (0, a.jsxs)("div", {
        className: eu.kL,
        onKeyDown: e_,
        children: [
            (0, a.jsx)("div", {
                className: eu.U1,
                children:
                    null != t.header && "" !== t.header
                        ? (0, a.jsx)(g.D, { variant: "heading-lg/semibold", color: "text-strong", children: t.header })
                        : null,
            }),
            (0, a.jsx)("div", { className: eu.b, children: (0, a.jsx)(f.J, { onClick: c }) }),
            (0, a.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                direction: v.A.Direction.VERTICAL,
                className: eu.wx,
                children: [
                    (0, a.jsx)(tX, { element: nr(t, "success") }),
                    (0, a.jsx)(e4, { node: t, isModeratorReport: G, isTidaReport: H, hideTitle: !0 }),
                    (0, a.jsx)(ta, { node: t }),
                ],
            }),
            (0, a.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: eu.rf,
                children: [
                    null != y && (0, a.jsx)(t9, { element: y }),
                    null != k && (0, a.jsx)(t0, { element: k }),
                    null != nr(t, "message_preview") &&
                        ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) &&
                        (0, a.jsx)(tv, { message: n.record }),
                    null != nr(t, "user_preview") && "user" === n.name ? (0, a.jsx)(t7, { user: n.record }) : null,
                    null != nr(t, "widget_preview") && "widget" === n.name
                        ? (0, a.jsx)(nt, { widget: n.widget, userId: n.user_id })
                        : null,
                    null != nr(t, "guild_preview") && "guild" === n.name ? (0, a.jsx)(e3, { guild: n.record }) : null,
                    null != nr(t, "breadcrumbs") && (0, a.jsx)(ei, { isModeratorReport: G, history: s }),
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return nn.includes(t);
                        });
                    })(t) &&
                        (0, a.jsxs)(tw, {
                            children: [
                                eh &&
                                    (0, a.jsx)(te, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: Q,
                                        reportId: E,
                                    }),
                                eb && (0, a.jsx)(tY, { parents: eg }),
                                null != nr(t, "block_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name ||
                                        ("application" === n.name && null != n.record.bot)) &&
                                    (0, a.jsx)(en, {
                                        user:
                                            "application" === n.name
                                                ? n.record.bot
                                                : "user" === n.name
                                                  ? n.record
                                                  : n.record.author,
                                        channelId: Q,
                                        reportId: E,
                                        reportType: n,
                                    }),
                                !eh &&
                                    null != nr(t, "mute_users") &&
                                    ("message" === n.name ||
                                        "first_dm" === n.name ||
                                        "user" === n.name ||
                                        "report_to_mod_message" === n.name) &&
                                    (0, a.jsx)(ty, {
                                        user: "user" === n.name ? n.record : n.record.author,
                                        channelId: Q,
                                        reportId: E,
                                    }),
                                null != nr(t, "delete_message") &&
                                    ("message" === n.name || "report_to_mod_message" === n.name) &&
                                    (0, a.jsx)(eG, { message: n.record, reportId: E }),
                                null != nr(t, "leave_guild") &&
                                    "guild" === n.name &&
                                    (0, a.jsx)(to, { guildId: n.record.id, reportId: E }),
                                null != nr(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, a.jsx)(eP, { application: n.record, reportId: E }),
                                null != nr(t, "deauthorize_app") &&
                                    "application" === n.name &&
                                    (0, a.jsx)(tP, { application: n.record, reportId: E }),
                            ],
                        }),
                    null != nr(t, "settings_upsells") &&
                        ("message" === n.name || "report_to_mod_message" === n.name) &&
                        null != ep &&
                        (0, a.jsx)(tB, {
                            settingsUpsells: ep,
                            channelId: n.record.channel_id,
                            onModalClose: c,
                            reportId: E,
                            reportType: n,
                            reportSubType: i,
                        }),
                    null != nr(t, "channel_preview") &&
                        "stage_channel" === n.name &&
                        (0, a.jsx)(tK, { stageInstance: n.record }),
                    null != nr(t, "guild_scheduled_event_preview") &&
                        "guild_scheduled_event" === n.name &&
                        (0, a.jsx)(e7, { event: n.record }),
                    null != nr(t, "guild_directory_entry_preview") &&
                        "guild_directory_entry" === n.name &&
                        (0, a.jsx)(e0, { entry: n.record }),
                    null != nr(t, "guild_discovery_preview") &&
                        "guild_discovery" === n.name &&
                        (0, a.jsx)(e9, { entry: n.record }),
                    null != nr(t, "app_preview") && "application" === n.name && (0, a.jsx)($, { entry: n.record }),
                    null != C && (0, a.jsx)(tT, { element: C, onChange: er, state: Y }),
                    na.includes(n.name) && null != U && (0, a.jsx)(ej, { element: U, onChange: el, state: q }),
                    na.includes(n.name) &&
                        null != j &&
                        j.length > 0 &&
                        (0, a.jsx)("div", { children: (0, a.jsx)(eB, { elements: j, onChange: el, state: q }) }),
                    D.map((e) => (0, a.jsx)(tj, { element: e, onChange: el, state: q }, e.name)),
                    null != O &&
                        (function (e, t, n) {
                            let { visible_when: a } = e.data;
                            if (null == a) return !0;
                            let r =
                                null != a.element_name
                                    ? t.elements.find((e) => {
                                          let { name: t } = e;
                                          return t === a.element_name;
                                      })
                                    : nr(t, a.element_type);
                            return null != r && n?.[r.name]?.value === a.value;
                        })(O, t, q) &&
                        (0, a.jsx)(ti, { element: O }),
                    null != L && (0, a.jsx)(eO, { element: L, onChange: el, state: q }),
                    na.includes(n.name) &&
                        null != R &&
                        R.length > 0 &&
                        (0, a.jsx)(eq, { elements: R, onChange: el, state: q }),
                    ((null != t.children && t.children.length > 0) || (null != N && N.length > 0)) &&
                        (0, a.jsxs)("div", {
                            className: eu.qI,
                            children: [
                                (0, a.jsx)(em, { node: t, onSelectChild: es, nodeMap: e.nodeMap }),
                                null != N && N.length > 0 ? (0, a.jsx)(eY, { elements: N }) : null,
                            ],
                        }),
                    "" !== z
                        ? (0, a.jsx)("div", { ref: X, children: (0, a.jsx)(b.w, { type: "critical", children: z }) })
                        : null,
                ],
            }),
            (0, a.jsx)(P, {
                button: t.button,
                submitting: F,
                disableNext: ea,
                isModeratorReport: G,
                onClick: ed,
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
            modalProps: h,
            onSubmit: f,
            onNavigate: g,
            emailToken: b,
            isAuthenticated: v = !0,
        } = e,
        A = (0, d.GV)(),
        { nodes: x, root_node_id: E, success_node_id: T, fail_node_id: S } = n,
        [C, I] = r.useState(E),
        [y, N] = r.useState(void 0),
        [R, j] = r.useState(void 0),
        [L, w] = r.useState([]),
        [O, D] = r.useState(void 0),
        [M, P] = r.useState(void 0),
        [k, U] = r.useState(void 0);
    (0, o.Ay)(() => {
        (0, _.VE)();
    });
    let G = (e) => {
            let { destination: n } = e,
                [, a] = n,
                r = x[a];
            if (void 0 === r) return void u.A.increment({ name: i.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (r.elements.some((e) => "skip" === e.type) && r.button?.type === "next")
                return G({ ...e, destination: ["", r.button.target] });
            if (
                (w([...L, e]),
                null != r.key && g?.(r.key),
                N(void 0),
                j(void 0),
                t.name === p.t0.MESSAGE || t.name === p.t0.FIRST_DM)
            ) {
                let e = t.record.id;
                c.Ay.trackWithMetadata(et.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: r.report_type,
                    current_node: x[C].id,
                    next_node: r.id,
                });
            }
            I(a);
        },
        H = async (e) => {
            let a = v ? await (0, m.zC)(n, t, [...L, e]) : await (0, m.bo)(n, t, [...L, e], b),
                r = a?.body?.report_id;
            null != r && D(r), P(x[e.nodeRef].report_type), f?.(r);
        },
        F = () => {
            if (L.length < 1) return;
            let e = [...L],
                n = e.pop(),
                a = n?.nodeRef ?? E;
            if (t.name === p.t0.MESSAGE || t.name === p.t0.FIRST_DM) {
                let e = t.record.id;
                c.Ay.trackWithMetadata(et.HAw.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: x[a].report_type,
                    current_node: x[C].id,
                    next_node: x[a].id,
                });
            }
            N(n?.multiSelect?.state), j(n?.textInput), I(a), w(e), g?.("..");
        },
        B = r.useCallback(
            (e, t) => {
                let n;
                for (let t in x) {
                    let a = x[t];
                    if (a.key === e) {
                        n = a;
                        break;
                    }
                }
                if (null == n) return;
                let a = L.findIndex((e) => e.nodeRef === n.id);
                if (a >= 0) {
                    let e = L.slice(0, a),
                        t = L[a];
                    j(t?.textInput), N(t?.multiSelect?.state), w(e);
                } else w([]), j(void 0), N(void 0);
                U(t), I(n.id);
            },
            [x, L],
        );
    r.useEffect(() => {
        null != k && U(void 0);
    }, [k]);
    let V = r.useMemo(() => {
        let e = [],
            t = [];
        for (let n in x) {
            let a = x[n];
            if (a.id !== T && a.id !== S && a.id !== E) {
                if (a.key.endsWith("_SUBMIT") || a.button?.type === "submit") {
                    t.push(a);
                    continue;
                }
                if ((e.push(a), a.button?.type === "next")) {
                    let t = a.button?.target,
                        n = e.indexOf(x[t]);
                    -1 !== n && (e.splice(n, 1), e.push(x[t]));
                }
            }
        }
        return [x[E], ...e, ...t, x[T], x[S]];
    }, [x, E, S, T]);
    return (0, a.jsx)(l.EO, {
        "data-migration-pending": !0,
        transitionState: h.transitionState,
        "aria-labelledby": A,
        parentComponent: "InAppReportModal",
        children: (0, a.jsx)(s.t, {
            width: 440,
            activeSlide: C,
            centered: !1,
            children: V.map((e) =>
                (0, a.jsx)(
                    s.q,
                    {
                        id: e.id,
                        children: (0, a.jsx)("div", {
                            className: ns.B,
                            children: (0, a.jsx)(nl, {
                                node: e,
                                reportType: t,
                                reportSubType: M,
                                history: L,
                                onModalClose: h.onClose,
                                onSelectChild: G,
                                onNavigateBack: F,
                                onNavigateToNode: B,
                                multiSelect: y,
                                textInput: R,
                                successNodeId: T,
                                failNodeId: S,
                                onSubmit: H,
                                reportId: O,
                                nodeMap: x,
                                initialErrorMessage: e.id === C ? k : void 0,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
