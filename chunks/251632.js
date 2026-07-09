l.d(n, { default: () => X }), l(321073);
var t = l(627968),
    i = l(64700),
    a = l(189213),
    s = l(702841),
    o = l(980707),
    c = l(477782),
    r = l(460905),
    d = l(95635),
    u = l(241326),
    m = l(140735),
    h = l(408278),
    g = l(22231),
    x = l(750943),
    p = l(123292),
    j = l(534514),
    v = l(292666),
    A = l(783878),
    b = l(834730),
    C = l(922016),
    y = l(144228),
    N = l(565645),
    S = l(475743),
    f = l(47167),
    T = l(713654),
    I = l(334295),
    M = l(374084),
    E = l(946274),
    k = l(734057),
    D = l(808728),
    w = l(71393),
    R = l(994500),
    G = l(287809),
    _ = l(486020),
    L = l(403362),
    P = l(488926),
    H = l(199940),
    U = l(132514),
    V = l(721228),
    O = l(652215),
    J = l(307731),
    W = l(375708),
    B = l(693586);
function Y(e, n) {
    switch (e) {
        case M.NewMemberActionTypes.VIEW:
            return P.MJ(O.xBc.VIEW_CHANNEL, n);
        case M.NewMemberActionTypes.CHAT:
            if (O.kvI.GUILD_THREADS_ONLY.has(n.type))
                return P.MJ(O.xBc.SEND_MESSAGES_IN_THREADS, n) || P.MJ(O.xBc.SEND_MESSAGES, n);
            return P.MJ(O.xBc.SEND_MESSAGES, n);
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
        (null == e.title || e.title.length < M.oc) &&
            n.title.push(W.intl.formatToPlainString(W.t.iu6AGk, { minLength: M.oc })),
        null == e.actionType ||
            null == l ||
            Y(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case M.NewMemberActionTypes.VIEW:
                            return W.intl.string(W.t.lD7FOX);
                        case M.NewMemberActionTypes.CHAT:
                            return W.intl.string(W.t.fIF2Uy);
                        default:
                            (0, L.xb)(e);
                    }
                })(e.actionType),
            ),
        n
    );
}
function X(e) {
    let { transitionState: n, onClose: l, guildId: L, action: P, onSave: X, onDelete: q } = e,
        Q = i.useRef(null),
        Z = i.useRef(null),
        K = null == P || null == k.A.getChannel(P.channelId) ? null : P.channelId,
        [$, ee] = i.useState(K),
        en = (0, s.bG)([k.A], () => k.A.getChannel($)),
        el = en?.isMediaChannel() === !0,
        et = i.useMemo(
            () => [
                { value: M.NewMemberActionTypes.VIEW, name: W.intl.string(W.t.jfieRw) },
                {
                    value: M.NewMemberActionTypes.CHAT,
                    name:
                        en?.type === O.rbe.GUILD_FORUM
                            ? el
                                ? W.intl.string(W.t["1EgDpA"])
                                : W.intl.string(W.t.x5Di7M)
                            : W.intl.string(W.t["R+dC4C"]),
                },
            ],
            [en?.type, el],
        ),
        [ei, ea] = i.useState(F()),
        [es, eo] = i.useState(P?.title ?? ""),
        ec = (0, s.bG)([U.A], () => {
            let e = U.A.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != K && n.delete(K), n;
        }),
        [er, ed] = i.useState(null == P ? null : (et.find((e) => e.value === P.actionType)?.value ?? null)),
        [eu, em] = i.useState(!1),
        [eh, eg] = i.useState(P?.emoji ?? null),
        ex = (0, s.bG)([U.A], () => U.A.getNewMemberAction(P?.channelId)?.icon),
        ep = P?.channelId,
        ej = (0, s.bG)([U.A], () => U.A.getPendingDataForChannel(ep), [ep]),
        [ev, eA] = i.useState(
            null != ej && null != ej.iconData
                ? ej.iconData
                : null != ex && null != $
                  ? _.Ay.getNewMemberActionIconURL({ channelId: $, icon: ex })
                  : null,
        ),
        eb = (0, S.A)(eh),
        eC = (0, S.A)(ev),
        ey = null == es || 0 === es.length || null == er || null == $,
        eN = Object.values(ei).flat().length > 0,
        eS = i.useCallback(() => {
            if (null == $ || null == er || es.length <= 0) return;
            let e = void 0 !== ep && $ !== ep,
                n = void 0 !== ej,
                t = null != eh || void 0 !== ev,
                i = { icon: ev ?? null, emoji: eh };
            (e || (n && t)) && (n && (0, H.Rp)(ep), (0, H.J4)($, i));
            let a = eh !== eb,
                s = ev !== eC;
            X(
                {
                    channelId: $,
                    title: es,
                    description: "",
                    actionType: er,
                    emoji: null != eh ? eh : null,
                    icon: ex ?? null,
                },
                i,
                (a || s) && !e,
            ),
                l();
        }, [X, l, es, er, $, eh, ex, ev, eb, eC, ep, ej]),
        ef = i.useCallback(() => {
            q?.(), l();
        }, [q, l]),
        eT = i.useCallback(
            (e) => {
                eo(e),
                    ea(
                        z({
                            channelId: $ ?? void 0,
                            title: e,
                            description: "",
                            actionType: er ?? void 0,
                            emoji: null != eh ? eh : void 0,
                        }),
                    );
            },
            [eo, ea, $, er, eh],
        ),
        eI = i.useCallback(
            (e) => {
                ee(e),
                    ea(
                        z({
                            channelId: e,
                            title: es,
                            description: "",
                            actionType: er ?? void 0,
                            emoji: null != eh ? eh : void 0,
                        }),
                    );
            },
            [ee, ea, es, er, eh],
        ),
        eM = i.useCallback(
            (e) => {
                ed(e),
                    ea(
                        z({
                            channelId: $ ?? void 0,
                            title: es,
                            description: "",
                            actionType: e,
                            emoji: null != eh ? eh : void 0,
                        }),
                    );
            },
            [ed, ea, $, es, eh],
        ),
        eE = i.useMemo(
            () =>
                D.Ay.getSelectableChannels(L)
                    .filter((e) => !ec.has(e.channel.id) && (0, M.Rc)(e.channel))
                    .map((e) => {
                        let n = w.A.getGuild(L),
                            l = (0, T.gU)(e.channel, n);
                        return {
                            id: e.channel.id,
                            value: e.channel.id,
                            label: (0, f.m1)(e.channel, G.default, R.A),
                            leading: l ?? void 0,
                        };
                    }),
            [L, ec],
        ),
        ek = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            eg(n), eA(e);
        }, []),
        eD = i.useCallback(() => (null != ev ? ev : null), [ev, eh])(),
        ew = i.useCallback(
            (e) => {
                null != e && ek(e, null);
            },
            [ek],
        ),
        eR = i.useId(),
        eG = i.useId(),
        e_ = i.useMemo(
            () => [
                { text: W.intl.string(W.t["ETE/oC"]), onClick: l, variant: "secondary" },
                { text: W.intl.string(W.t["R3BPH+"]), variant: "primary", onClick: eS, disabled: ey || eN },
            ],
            [eS, eN, ey, l],
        );
    return (0, t.jsxs)(a.Modal, {
        title: W.intl.string(W.t.ncTLSo),
        transitionState: n,
        onClose: l,
        actions: e_,
        actionBarInput:
            null != P ? (0, t.jsx)(p.Q, { text: W.intl.string(W.t.N86XcP), onClick: ef, variant: "critical" }) : void 0,
        children: [
            (0, t.jsxs)("div", {
                className: B.eH,
                children: [
                    (0, t.jsxs)(j.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [W.intl.string(W.t["j+fhOY"]), (0, t.jsx)(V.A, {})],
                    }),
                    (0, t.jsx)(v.k, {
                        value: es,
                        error: (es?.length ?? 0) > 0 ? ei.title.join(", ") : null,
                        onChange: eT,
                        placeholder: W.intl.string(W.t.oN1Sm2),
                        maxLength: M.kh,
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: B.me }),
            (0, t.jsxs)("div", {
                className: B.eH,
                children: [
                    (0, t.jsxs)(j.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [W.intl.string(W.t.jVDc5W), (0, t.jsx)(V.A, {})],
                    }),
                    (0, t.jsx)(A.Z, {
                        selectionMode: "single",
                        value: $ ?? void 0,
                        options: eE,
                        onSelectionChange: eI,
                    }),
                    (0, t.jsx)(b.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: W.intl.string(W.t.cypQPz),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: B.me }),
            (0, t.jsxs)("div", {
                className: B.kE,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(j.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                id: eR,
                                children: W.intl.string(W.t.gs5rQm),
                            }),
                            (0, t.jsx)(b.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: W.intl.string(W.t.LjsoiT),
                            }),
                        ],
                    }),
                    (0, t.jsxs)("div", {
                        className: B.um,
                        children: [
                            (0, t.jsx)(C.Y, {
                                position: "bottom",
                                renderPopout: function (e) {
                                    let { closePopout: n } = e;
                                    return (0, t.jsxs)(o.W, {
                                        navId: "set-image-for-action",
                                        "aria-label": W.intl.string(W.t.DEoVWZ),
                                        onClose: n,
                                        onSelect: () => !1,
                                        children: [
                                            (0, t.jsx)(c.Dr, {
                                                id: "emoji",
                                                label: W.intl.string(W.t["amsyN+"]),
                                                leadingAccessory: { type: "icon", icon: r.n },
                                                action: () => {
                                                    em(!0);
                                                },
                                            }),
                                            (0, t.jsx)(c.Dr, {
                                                id: "upload",
                                                label: W.intl.string(W.t["2YKkdd"]),
                                                leadingAccessory: { type: "icon", icon: d.J },
                                                action: () => {
                                                    Q.current?.activateUploadDialogue();
                                                },
                                            }),
                                            null != eD || null != eh
                                                ? (0, t.jsx)(c.Dr, {
                                                      id: "clear",
                                                      color: "danger",
                                                      label: W.intl.string(W.t.ZCLmoR),
                                                      leadingAccessory: { type: "icon", icon: u.u },
                                                      action: () => {
                                                          ek(null), Z.current?.focus();
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
                                                className: n ? B.bu : void 0,
                                                onClick: e.onClick,
                                                children: [
                                                    null != eD &&
                                                        (0, t.jsxs)("div", {
                                                            className: B.VU,
                                                            children: [
                                                                (0, t.jsx)(m.A, {
                                                                    id: eG,
                                                                    children: W.intl.formatToPlainString(W.t.uA3dAs, {
                                                                        name: eD,
                                                                    }),
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
                                                            className: B.VU,
                                                            children: [
                                                                (0, t.jsx)(m.A, {
                                                                    id: eG,
                                                                    children: W.intl.formatToPlainString(
                                                                        W.t["8bCGTO"],
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
                                                        className: B.r9,
                                                        children: (0, t.jsx)(h.K, {
                                                            ...e,
                                                            buttonRef: Z,
                                                            "aria-label": n
                                                                ? W.intl.string(W.t.bt75uw)
                                                                : W.intl.string(W.t.XqMe3N),
                                                            "aria-describedby": `${eR} ${eG}`,
                                                            "aria-haspopup": "menu",
                                                            variant: n ? "overlay-secondary" : "secondary",
                                                            icon: n ? g.R : x.X,
                                                            size: n ? "sm" : "md",
                                                            onClick: (n) => {
                                                                n.stopPropagation(), e.onClick();
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
                                className: B.uJ,
                                children: (0, t.jsx)(E.Ay, {
                                    ref: Q,
                                    "aria-hidden": !0,
                                    onChange: (e) => {
                                        ew(e);
                                    },
                                }),
                            }),
                            (0, t.jsx)(C.Y, {
                                targetElementRef: Z,
                                position: "top",
                                shouldShow: eu,
                                onRequestClose: () => {
                                    em(!1), Z.current?.focus();
                                },
                                renderPopout: (e) => {
                                    var n;
                                    let { closePopout: l } = e;
                                    return (0, t.jsx)(I.A, {
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
                                                    ek(
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
                                                        t && n();
                                            }),
                                        pickerIntention: J.EmojiIntention.COMMUNITY_CONTENT,
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
            (0, t.jsx)("div", { className: B.me }),
            (0, t.jsxs)("div", {
                className: B.eH,
                children: [
                    (0, t.jsxs)(j.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [W.intl.string(W.t.MIMVLa), (0, t.jsx)(V.A, {})],
                    }),
                    (0, t.jsx)(y.z, {
                        value: er,
                        onChange: eM,
                        options: null == en ? et : et.map((e) => ({ ...e, disabled: !Y(e.value, en) })),
                    }),
                    null != er && ei.actionType.length > 0
                        ? ei.actionType.map((e) =>
                              (0, t.jsx)(
                                  b.E,
                                  { variant: "text-xs/normal", color: "text-feedback-critical", children: e },
                                  e,
                              ),
                          )
                        : null,
                ],
            }),
        ],
    });
}
