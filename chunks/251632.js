l(321073);
var t = l(477900),
    i = l(582128),
    a = l(164636),
    s = l(189213),
    o = l(165862),
    c = l(477782),
    r = l(460905),
    d = l(95635),
    u = l(241326),
    m = l(140735),
    h = l(408278),
    g = l(22231),
    p = l(750943),
    x = l(123292),
    j = l(534514),
    v = l(95477),
    b = l(890497),
    A = l(834730),
    y = l(265872),
    C = l(771871),
    N = l(565645),
    I = l(475743),
    S = l(47167),
    f = l(713654),
    T = l(863576),
    E = l(374084),
    M = l(946274),
    k = l(734057),
    D = l(808728),
    w = l(71393),
    R = l(994500),
    P = l(287809),
    G = l(486020),
    _ = l(403362),
    L = l(488926),
    U = l(199940),
    H = l(132514),
    V = l(721228),
    O = l(652215),
    W = l(307731),
    B = l(792996),
    J = l(559357);
function Y(e, n) {
    switch (e) {
        case E.NewMemberActionTypes.VIEW:
            return L.MJ(O.xBc.VIEW_CHANNEL, n);
        case E.NewMemberActionTypes.CHAT:
            if (O.kvI.GUILD_THREADS_ONLY.has(n.type))
                return L.MJ(O.xBc.SEND_MESSAGES_IN_THREADS, n) || L.MJ(O.xBc.SEND_MESSAGES, n);
            return L.MJ(O.xBc.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function F() {
    return { channelId: [], title: [], description: [], actionType: [], emoji: [], icon: [] };
}
function z(e) {
    let n = F(),
        l = k.A.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < 7) &&
            n.title.push(B.intl.formatToPlainString(B.t.iu6AGk, { minLength: 7 })),
        null == e.actionType ||
            null == l ||
            Y(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case E.NewMemberActionTypes.VIEW:
                            return B.intl.string(B.t.lD7FOX);
                        case E.NewMemberActionTypes.CHAT:
                            return B.intl.string(B.t.fIF2Uy);
                        default:
                            (0, _.xb)(e);
                    }
                })(e.actionType),
            ),
        n
    );
}
l.d(
    n,
    {},
    {
        default: function (e) {
            let { transitionState: n, onClose: l, guildId: _, action: L, onSave: q, onDelete: Q } = e,
                X = i.useRef(null),
                Z = i.useRef(null),
                K = null == L || null == k.A.getChannel(L.channelId) ? null : L.channelId,
                [$, ee] = i.useState(K),
                en = (0, a.bG)([k.A], () => k.A.getChannel($)),
                el = en?.isMediaChannel() === !0,
                et = i.useMemo(
                    () => [
                        { value: E.NewMemberActionTypes.VIEW, name: B.intl.string(B.t.jfieRw) },
                        {
                            value: E.NewMemberActionTypes.CHAT,
                            name:
                                en?.type === O.rbe.GUILD_FORUM
                                    ? el
                                        ? B.intl.string(B.t["1EgDpA"])
                                        : B.intl.string(B.t.x5Di7M)
                                    : B.intl.string(B.t["R+dC4C"]),
                        },
                    ],
                    [en?.type, el],
                ),
                [ei, ea] = i.useState(F()),
                [es, eo] = i.useState(L?.title ?? ""),
                ec = (0, a.bG)([H.A], () => {
                    let e = H.A.getSettings();
                    if (null == e.newMemberActions) return new Set();
                    let n = new Set(e.newMemberActions.map((e) => e.channelId));
                    return (null != K && n.delete(K), n);
                }),
                [er, ed] = i.useState(null == L ? null : (et.find((e) => e.value === L.actionType)?.value ?? null)),
                [eu, em] = i.useState(!1),
                [eh, eg] = i.useState(L?.emoji ?? null),
                ep = (0, a.bG)([H.A], () => H.A.getNewMemberAction(L?.channelId)?.icon),
                ex = L?.channelId,
                ej = (0, a.bG)([H.A], () => H.A.getPendingDataForChannel(ex), [ex]),
                [ev, eb] = i.useState(
                    null != ej && null != ej.iconData
                        ? ej.iconData
                        : null != ep && null != $
                          ? G.Ay.getNewMemberActionIconURL({ channelId: $, icon: ep })
                          : null,
                ),
                eA = (0, I.Ay)(eh),
                ey = (0, I.Ay)(ev),
                eC = null == es || 0 === es.length || null == er || null == $,
                eN = Object.values(ei).flat().length > 0,
                eI = i.useCallback(() => {
                    if (null == $ || null == er || es.length <= 0) return;
                    let e = void 0 !== ex && $ !== ex,
                        n = void 0 !== ej,
                        t = null != eh || void 0 !== ev,
                        i = { icon: ev ?? null, emoji: eh };
                    (e || (n && t)) && (n && (0, U.Rp)(ex), (0, U.J4)($, i));
                    let a = eh !== eA,
                        s = ev !== ey;
                    (q(
                        {
                            channelId: $,
                            title: es,
                            description: "",
                            actionType: er,
                            emoji: null != eh ? eh : null,
                            icon: ep ?? null,
                        },
                        i,
                        (a || s) && !e,
                    ),
                        l());
                }, [q, l, es, er, $, eh, ep, ev, eA, ey, ex, ej]),
                eS = i.useCallback(() => {
                    (Q?.(), l());
                }, [Q, l]),
                ef = i.useCallback(
                    (e) => {
                        (eo(e),
                            ea(
                                z({
                                    channelId: $ ?? void 0,
                                    title: e,
                                    description: "",
                                    actionType: er ?? void 0,
                                    emoji: null != eh ? eh : void 0,
                                }),
                            ));
                    },
                    [eo, ea, $, er, eh],
                ),
                eT = i.useCallback(
                    (e) => {
                        (ee(e),
                            ea(
                                z({
                                    channelId: e,
                                    title: es,
                                    description: "",
                                    actionType: er ?? void 0,
                                    emoji: null != eh ? eh : void 0,
                                }),
                            ));
                    },
                    [ee, ea, es, er, eh],
                ),
                eE = i.useCallback(
                    (e) => {
                        (ed(e),
                            ea(
                                z({
                                    channelId: $ ?? void 0,
                                    title: es,
                                    description: "",
                                    actionType: e,
                                    emoji: null != eh ? eh : void 0,
                                }),
                            ));
                    },
                    [ed, ea, $, es, eh],
                ),
                eM = i.useMemo(
                    () =>
                        D.A.getSelectableChannels(_)
                            .filter((e) => !ec.has(e.channel.id) && (0, E.Rc)(e.channel))
                            .map((e) => {
                                let n = w.A.getGuild(_),
                                    l = (0, f.gU)(e.channel, n);
                                return {
                                    id: e.channel.id,
                                    value: e.channel.id,
                                    label: (0, S.m1)(e.channel, P.default, R.A),
                                    leading: l ?? void 0,
                                };
                            }),
                    [_, ec],
                ),
                ek = i.useCallback(function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    (eg(n), eb(e));
                }, []),
                eD = i.useCallback(() => (null != ev ? ev : null), [ev, eh])(),
                ew = i.useCallback(
                    (e) => {
                        null != e && ek(e, null);
                    },
                    [ek],
                ),
                eR = i.useId(),
                eP = i.useId(),
                eG = i.useMemo(
                    () => [
                        { text: B.intl.string(B.t["ETE/oC"]), onClick: l, variant: "secondary" },
                        { text: B.intl.string(B.t["R3BPH+"]), variant: "primary", onClick: eI, disabled: eC || eN },
                    ],
                    [eI, eN, eC, l],
                );
            return (0, t.jsxs)(s.a, {
                title: B.intl.string(B.t.ncTLSo),
                transitionState: n,
                onClose: l,
                actions: eG,
                actionBarInput:
                    null != L
                        ? (0, t.jsx)(x.Q, { text: B.intl.string(B.t.N86XcP), onClick: eS, variant: "critical" })
                        : void 0,
                children: [
                    (0, t.jsxs)("div", {
                        className: J.eH,
                        children: [
                            (0, t.jsxs)(j.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: [B.intl.string(B.t["j+fhOY"]), (0, t.jsx)(V.A, {})],
                            }),
                            (0, t.jsx)(v.k, {
                                value: es,
                                error: (es?.length ?? 0) > 0 ? ei.title.join(", ") : null,
                                onChange: ef,
                                placeholder: B.intl.string(B.t.oN1Sm2),
                                maxLength: 60,
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: J.me }),
                    (0, t.jsxs)("div", {
                        className: J.eH,
                        children: [
                            (0, t.jsxs)(j.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: [B.intl.string(B.t.jVDc5W), (0, t.jsx)(V.A, {})],
                            }),
                            (0, t.jsx)(b.Z, {
                                selectionMode: "single",
                                value: $ ?? void 0,
                                options: eM,
                                onSelectionChange: eT,
                            }),
                            (0, t.jsx)(A.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                children: B.intl.string(B.t.cypQPz),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: J.me }),
                    (0, t.jsxs)("div", {
                        className: J.kE,
                        children: [
                            (0, t.jsxs)("div", {
                                children: [
                                    (0, t.jsx)(j.D, {
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        id: eR,
                                        children: B.intl.string(B.t.gs5rQm),
                                    }),
                                    (0, t.jsx)(A.E, {
                                        variant: "body-xs/medium",
                                        color: "text-muted",
                                        children: B.intl.string(B.t.LjsoiT),
                                    }),
                                ],
                            }),
                            (0, t.jsxs)("div", {
                                className: J.um,
                                children: [
                                    (0, t.jsx)(y.Y, {
                                        position: "bottom",
                                        renderPopout: function (e) {
                                            let { closePopout: n } = e;
                                            return (0, t.jsxs)(o.W, {
                                                navId: "set-image-for-action",
                                                "aria-label": B.intl.string(B.t.DEoVWZ),
                                                onClose: n,
                                                onSelect: () => !1,
                                                children: [
                                                    (0, t.jsx)(c.Dr, {
                                                        id: "emoji",
                                                        label: B.intl.string(B.t["amsyN+"]),
                                                        leadingAccessory: { type: "icon", icon: r.ReactionIcon },
                                                        action: () => {
                                                            em(!0);
                                                        },
                                                    }),
                                                    (0, t.jsx)(c.Dr, {
                                                        id: "upload",
                                                        label: B.intl.string(B.t["2YKkdd"]),
                                                        leadingAccessory: { type: "icon", icon: d.UploadIcon },
                                                        action: () => {
                                                            X.current?.activateUploadDialogue();
                                                        },
                                                    }),
                                                    null != eD || null != eh
                                                        ? (0, t.jsx)(c.Dr, {
                                                              id: "clear",
                                                              color: "danger",
                                                              label: B.intl.string(B.t.ZCLmoR),
                                                              leadingAccessory: { type: "icon", icon: u.TrashIcon },
                                                              action: () => {
                                                                  (ek(null), Z.current?.focus());
                                                              },
                                                          })
                                                        : null,
                                                ],
                                            });
                                        },
                                        targetElementRef: Z,
                                        children: (e) => {
                                            let n;
                                            return (
                                                (n = null != eD || null != eh),
                                                (0, t.jsx)(t.Fragment, {
                                                    children: (0, t.jsxs)("div", {
                                                        className: n ? J.bu : void 0,
                                                        onClick: e.onClick,
                                                        children: [
                                                            null != eD &&
                                                                (0, t.jsxs)("div", {
                                                                    className: J.VU,
                                                                    children: [
                                                                        (0, t.jsx)(m.A, {
                                                                            id: eP,
                                                                            children: B.intl.formatToPlainString(
                                                                                B.t.uA3dAs,
                                                                                { name: eD },
                                                                            ),
                                                                        }),
                                                                        (0, t.jsx)("img", {
                                                                            src: eD,
                                                                            alt: "",
                                                                            "aria-hidden": !0,
                                                                            width: 56,
                                                                            height: 56,
                                                                        }),
                                                                    ],
                                                                }),
                                                            null != eh &&
                                                                (0, t.jsxs)("div", {
                                                                    className: J.VU,
                                                                    children: [
                                                                        (0, t.jsx)(m.A, {
                                                                            id: eP,
                                                                            children: B.intl.formatToPlainString(
                                                                                B.t["8bCGTO"],
                                                                                { name: eh.name },
                                                                            ),
                                                                        }),
                                                                        (0, t.jsx)(N.A, {
                                                                            "aria-hidden": !0,
                                                                            animated: eh.animated ?? !1,
                                                                            emojiId: eh.id,
                                                                            emojiName: eh.name,
                                                                            size: "jumbo",
                                                                        }),
                                                                    ],
                                                                }),
                                                            (0, t.jsx)("div", {
                                                                className: J.r9,
                                                                children: (0, t.jsx)(h.K, {
                                                                    ...e,
                                                                    buttonRef: Z,
                                                                    "aria-label": n
                                                                        ? B.intl.string(B.t.bt75uw)
                                                                        : B.intl.string(B.t.XqMe3N),
                                                                    "aria-describedby": `${eR} ${eP}`,
                                                                    "aria-haspopup": "menu",
                                                                    variant: n ? "overlay-secondary" : "secondary",
                                                                    icon: n ? g.PencilIcon : p.ImagePlusIcon,
                                                                    size: n ? "sm" : "md",
                                                                    onClick: (n) => {
                                                                        (n.stopPropagation(), e.onClick());
                                                                    },
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                })
                                            );
                                        },
                                    }),
                                    (0, t.jsx)("div", {
                                        className: J.uJ,
                                        children: (0, t.jsx)(M.Ay, {
                                            ref: X,
                                            "aria-hidden": !0,
                                            onChange: (e) => {
                                                ew(e);
                                            },
                                        }),
                                    }),
                                    (0, t.jsx)(y.Y, {
                                        targetElementRef: Z,
                                        position: "top",
                                        shouldShow: eu,
                                        onRequestClose: () => {
                                            (em(!1), Z.current?.focus());
                                        },
                                        renderPopout: (e) => {
                                            var n;
                                            let { closePopout: l } = e;
                                            return (0, t.jsx)(T.A, {
                                                closePopout: () => {
                                                    l();
                                                },
                                                onSelectEmoji:
                                                    ((n = () => {
                                                        l();
                                                    }),
                                                    (e) => {
                                                        let { emoji: l, willClose: t } = e;
                                                        if (null != l)
                                                            (ek(
                                                                null,
                                                                null == l.id
                                                                    ? {
                                                                          id: null,
                                                                          name: l.optionallyDiverseSequence ?? "",
                                                                          animated: !1,
                                                                      }
                                                                    : {
                                                                          id: l.id,
                                                                          name: l.originalName ?? l.name,
                                                                          animated: l.animated,
                                                                      },
                                                            ),
                                                                t && n());
                                                    }),
                                                pickerIntention: W.EmojiIntention.COMMUNITY_CONTENT,
                                                channel: en,
                                            });
                                        },
                                        children: (e) => {
                                            let {} = e;
                                            return null;
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: J.me }),
                    (0, t.jsxs)("div", {
                        className: J.eH,
                        children: [
                            (0, t.jsxs)(j.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: [B.intl.string(B.t.MIMVLa), (0, t.jsx)(V.A, {})],
                            }),
                            (0, t.jsx)(C.z, {
                                value: er,
                                onChange: eE,
                                options: null == en ? et : et.map((e) => ({ ...e, disabled: !Y(e.value, en) })),
                            }),
                            null != er && ei.actionType.length > 0
                                ? ei.actionType.map((e) =>
                                      (0, t.jsx)(
                                          A.E,
                                          { variant: "body-xs/normal", color: "text-feedback-critical", children: e },
                                          e,
                                      ),
                                  )
                                : null,
                        ],
                    }),
                ],
            });
        },
    },
);
