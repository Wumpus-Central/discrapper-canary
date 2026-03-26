l.d(n, { default: () => E }), l(321073);
var t = l(627968),
    i = l(64700),
    a = l(158954),
    s = l(417597),
    o = l(397927),
    r = l(565645),
    c = l(475743),
    d = l(713654),
    u = l(937773),
    m = l(374084),
    h = l(946274),
    x = l(734057),
    g = l(808728),
    j = l(71393),
    p = l(486020),
    v = l(403362),
    b = l(488926),
    A = l(199940),
    C = l(132514),
    N = l(721228),
    T = l(652215),
    S = l(307731),
    y = l(985018),
    M = l(755874);
function f(e, n) {
    switch (e) {
        case m.NewMemberActionTypes.VIEW:
            return b.MJ(T.xBc.VIEW_CHANNEL, n);
        case m.NewMemberActionTypes.CHAT:
            if (T.kvI.GUILD_THREADS_ONLY.has(n.type))
                return b.MJ(T.xBc.SEND_MESSAGES_IN_THREADS, n) || b.MJ(T.xBc.SEND_MESSAGES, n);
            return b.MJ(T.xBc.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function I() {
    return { channelId: [], title: [], description: [], actionType: [], emoji: [], icon: [] };
}
function k(e) {
    let n = I(),
        l = x.A.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < m.oc) &&
            n.title.push(y.intl.formatToPlainString(y.t.iu6AGk, { minLength: m.oc })),
        null == e.actionType ||
            null == l ||
            f(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case m.NewMemberActionTypes.VIEW:
                            return y.intl.string(y.t.lD7FOX);
                        case m.NewMemberActionTypes.CHAT:
                            return y.intl.string(y.t.fIF2Uy);
                        default:
                            (0, v.xb)(e);
                    }
                })(e.actionType),
            ),
        n
    );
}
function E(e) {
    let { transitionState: n, onClose: l, guildId: v, action: b, onSave: E, onDelete: w } = e,
        D = i.useRef(null),
        _ = i.useRef(null),
        R = null == b || null == x.A.getChannel(b.channelId) ? null : b.channelId,
        [H, G] = i.useState(R),
        L = (0, s.bG)([x.A], () => x.A.getChannel(H)),
        O = L?.isMediaChannel() === !0,
        P = i.useMemo(
            () => [
                { value: m.NewMemberActionTypes.VIEW, name: y.intl.string(y.t.jfieRw) },
                {
                    value: m.NewMemberActionTypes.CHAT,
                    name:
                        L?.type === T.rbe.GUILD_FORUM
                            ? O
                                ? y.intl.string(y.t["1EgDpA"])
                                : y.intl.string(y.t.x5Di7M)
                            : y.intl.string(y.t["R+dC4C"]),
                },
            ],
            [L?.type, O],
        ),
        [F, W] = i.useState(I()),
        [J, U] = i.useState(b?.title ?? ""),
        Y = (0, s.bG)([C.A], () => {
            let e = C.A.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != R && n.delete(R), n;
        }),
        [B, V] = i.useState(null == b ? null : (P.find((e) => e.value === b.actionType)?.value ?? null)),
        [z, K] = i.useState(b?.emoji ?? null),
        Q = (0, s.bG)([C.A], () => C.A.getNewMemberAction(b?.channelId)?.icon),
        X = b?.channelId,
        Z = (0, s.bG)([C.A], () => C.A.getPendingDataForChannel(X), [X]),
        [q, $] = i.useState(
            null != Z && null != Z.iconData
                ? Z.iconData
                : null != Q && null != H
                  ? p.Ay.getNewMemberActionIconURL({ channelId: H, icon: Q })
                  : null,
        ),
        ee = (0, c.A)(z),
        en = (0, c.A)(q),
        el = null == J || 0 === J.length || null == B || null == H,
        et = Object.values(F).flat().length > 0,
        ei = i.useCallback(() => {
            if (null == H || null == B || J.length <= 0) return;
            let e = void 0 !== X && H !== X,
                n = void 0 !== Z,
                t = null != z || void 0 !== q,
                i = { icon: q ?? null, emoji: z };
            (e || (n && t)) && (n && (0, A.Rp)(X), (0, A.J4)(H, i));
            let a = z !== ee,
                s = q !== en;
            E(
                {
                    channelId: H,
                    title: J,
                    description: "",
                    actionType: B,
                    emoji: null != z ? z : null,
                    icon: Q ?? null,
                },
                i,
                (a || s) && !e,
            ),
                l();
        }, [E, l, J, B, H, z, Q, q, ee, en, X, Z]),
        ea = i.useCallback(() => {
            w?.(), l();
        }, [w, l]),
        es = i.useCallback(
            (e) => {
                U(e),
                    W(
                        k({
                            channelId: H ?? void 0,
                            title: e,
                            description: "",
                            actionType: B ?? void 0,
                            emoji: null != z ? z : void 0,
                        }),
                    );
            },
            [U, W, H, B, z],
        ),
        eo = i.useCallback(
            (e) => {
                G(e),
                    W(
                        k({
                            channelId: e,
                            title: J,
                            description: "",
                            actionType: B ?? void 0,
                            emoji: null != z ? z : void 0,
                        }),
                    );
            },
            [G, W, J, B, z],
        ),
        er = i.useCallback(
            (e) => {
                V(e),
                    W(
                        k({
                            channelId: H ?? void 0,
                            title: J,
                            description: "",
                            actionType: e,
                            emoji: null != z ? z : void 0,
                        }),
                    );
            },
            [V, W, H, J, z],
        ),
        ec = i.useMemo(
            () =>
                g.Ay.getSelectableChannels(v)
                    .filter((e) => !Y.has(e.channel.id) && (0, m.Rc)(e.channel))
                    .map((e) => {
                        let n = j.A.getGuild(v),
                            l = (0, d.gU)(e.channel, n);
                        return { id: e.channel.id, value: e.channel.id, label: e.channel.name, leading: l ?? void 0 };
                    }),
            [v, Y],
        ),
        ed = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            K(n), $(e);
        }, []),
        eu = i.useCallback(() => (null != q ? q : null), [q, z])(),
        em = i.useCallback(
            (e) => {
                null != e && ed(e, null);
            },
            [ed],
        ),
        eh = null;
    eh =
        null != eu
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)("img", {
                          src: eu,
                          alt: "",
                          "aria-hidden": !0,
                          className: M.__invalid_image,
                          width: 24,
                          height: 24,
                      }),
                      (0, t.jsx)("div", {
                          className: M.gu,
                          children: (0, t.jsx)(o.R2l, { size: "md", color: "currentColor" }),
                      }),
                  ],
              })
            : null != z
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(r.A, { animated: z.animated ?? !1, emojiId: z.id, emojiName: z.name }),
                        (0, t.jsx)("div", {
                            className: M.gu,
                            children: (0, t.jsx)(o.R2l, { size: "md", color: "currentColor" }),
                        }),
                    ],
                })
              : (0, t.jsx)(o.XGR, { size: "md", color: "currentColor" });
    let ex = i.useMemo(
        () => [
            { text: y.intl.string(y.t["ETE/oC"]), onClick: l, variant: "secondary" },
            { text: y.intl.string(y.t["R3BPH+"]), variant: "primary", onClick: ei, disabled: el || et },
        ],
        [ei, et, el, l],
    );
    return (0, t.jsxs)(a.Modal, {
        title: y.intl.string(y.t.ncTLSo),
        transitionState: n,
        onClose: l,
        actions: ex,
        actionBarInput:
            null != b
                ? (0, t.jsx)(o.QWc, { text: y.intl.string(y.t.N86XcP), onClick: ea, variant: "critical" })
                : void 0,
        children: [
            (0, t.jsxs)("div", {
                className: M.eH,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [y.intl.string(y.t["j+fhOY"]), (0, t.jsx)(N.A, {})],
                    }),
                    (0, t.jsx)(o.ksK, {
                        value: J,
                        error: (J?.length ?? 0) > 0 ? F.title.join(", ") : null,
                        onChange: es,
                        placeholder: y.intl.string(y.t.oN1Sm2),
                        maxLength: m.kh,
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: M.me }),
            (0, t.jsxs)("div", {
                className: M.eH,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [y.intl.string(y.t.jVDc5W), (0, t.jsx)(N.A, {})],
                    }),
                    (0, t.jsx)(o.ZiE, {
                        selectionMode: "single",
                        value: H ?? void 0,
                        options: ec,
                        onSelectionChange: eo,
                    }),
                    (0, t.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: y.intl.string(y.t.cypQPz),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: M.me }),
            (0, t.jsxs)("div", {
                className: M.kE,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: y.intl.string(y.t.gs5rQm),
                            }),
                            (0, t.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: y.intl.string(y.t.LjsoiT),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        className: M.um,
                        children: (0, t.jsx)(o.YNO, {
                            position: "bottom",
                            renderPopout: (e) => {
                                let n = e.closePopout,
                                    l = (0, t.jsxs)(t.Fragment, {
                                        children: [
                                            (0, t.jsx)(h.Ay, {
                                                onChange: (e) => {
                                                    em(e), n();
                                                },
                                                tabIndex: 0,
                                            }),
                                            (0, t.jsx)(o.Text, {
                                                variant: "text-sm/medium",
                                                color: "none",
                                                children: y.intl.string(y.t["2YKkdd"]),
                                            }),
                                        ],
                                    }),
                                    i = (0, t.jsx)(o.YNO, {
                                        targetElementRef: D,
                                        position: "top",
                                        renderPopout: (e) => {
                                            let l,
                                                { closePopout: i } = e;
                                            return (0, t.jsx)(u.A, {
                                                closePopout: () => {
                                                    i(), n();
                                                },
                                                onSelectEmoji:
                                                    ((l = () => {
                                                        i(), n();
                                                    }),
                                                    (e) => {
                                                        let { emoji: n, willClose: t } = e;
                                                        if (null != n)
                                                            ed(
                                                                null,
                                                                null == n.id
                                                                    ? {
                                                                          id: null,
                                                                          name: n.optionallyDiverseSequence ?? "",
                                                                          animated: !1,
                                                                      }
                                                                    : {
                                                                          id: n.id,
                                                                          name: n.originalName ?? n.name,
                                                                          animated: n.animated,
                                                                      },
                                                            ),
                                                                t && l();
                                                    }),
                                                pickerIntention: S.b_.COMMUNITY_CONTENT,
                                                channel: L,
                                            });
                                        },
                                        children: (e) =>
                                            (0, t.jsx)(o.Text, {
                                                ...e,
                                                variant: "text-sm/medium",
                                                color: "none",
                                                ref: D,
                                                children: y.intl.string(y.t["amsyN+"]),
                                            }),
                                    });
                                return (0, t.jsxs)(o.W1t, {
                                    "data-menu-needs-migration": !0,
                                    navId: "set-image-for-action",
                                    "aria-label": "upload",
                                    onClose: () => !1,
                                    onSelect: () => !1,
                                    children: [
                                        (0, t.jsx)(o.Drp, { id: "emoji", void_label: i, icon: o.nm2 }),
                                        (0, t.jsx)(o.Drp, {
                                            className: M.K8,
                                            id: "upload",
                                            void_label: l,
                                            icon: o.JMY,
                                        }),
                                        null != eu || null != z
                                            ? (0, t.jsx)(o.Drp, {
                                                  id: "clear",
                                                  color: "danger",
                                                  label: y.intl.string(y.t.ZCLmoR),
                                                  icon: o.ucK,
                                                  action: () => {
                                                      ed(null);
                                                  },
                                              })
                                            : null,
                                    ],
                                });
                            },
                            targetElementRef: _,
                            children: (e) => (0, t.jsx)("div", { ...e, className: M.JW, ref: _, children: eh }),
                        }),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: M.me }),
            (0, t.jsxs)("div", {
                className: M.eH,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [y.intl.string(y.t.MIMVLa), (0, t.jsx)(N.A, {})],
                    }),
                    (0, t.jsx)(o.z6M, {
                        value: B,
                        onChange: er,
                        options: null == L ? P : P.map((e) => ({ ...e, disabled: !f(e.value, L) })),
                    }),
                    null != B && F.actionType.length > 0
                        ? F.actionType.map((e) =>
                              (0, t.jsx)(
                                  o.Text,
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
