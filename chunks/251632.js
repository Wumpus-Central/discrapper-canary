l.d(n, { default: () => R }), l(321073);
var t = l(627968),
    i = l(64700),
    a = l(158954),
    s = l(417597),
    o = l(397927),
    r = l(565645),
    c = l(475743),
    d = l(47167),
    u = l(713654),
    m = l(937773),
    h = l(374084),
    x = l(946274),
    g = l(734057),
    j = l(808728),
    p = l(71393),
    v = l(994500),
    A = l(287809),
    b = l(486020),
    C = l(403362),
    N = l(488926),
    T = l(199940),
    S = l(132514),
    f = l(721228),
    y = l(652215),
    M = l(307731),
    I = l(985018),
    E = l(755874);
function k(e, n) {
    switch (e) {
        case h.NewMemberActionTypes.VIEW:
            return N.MJ(y.xBc.VIEW_CHANNEL, n);
        case h.NewMemberActionTypes.CHAT:
            if (y.kvI.GUILD_THREADS_ONLY.has(n.type))
                return N.MJ(y.xBc.SEND_MESSAGES_IN_THREADS, n) || N.MJ(y.xBc.SEND_MESSAGES, n);
            return N.MJ(y.xBc.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function w() {
    return { channelId: [], title: [], description: [], actionType: [], emoji: [], icon: [] };
}
function D(e) {
    let n = w(),
        l = g.A.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < h.oc) &&
            n.title.push(I.intl.formatToPlainString(I.t.iu6AGk, { minLength: h.oc })),
        null == e.actionType ||
            null == l ||
            k(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case h.NewMemberActionTypes.VIEW:
                            return I.intl.string(I.t.lD7FOX);
                        case h.NewMemberActionTypes.CHAT:
                            return I.intl.string(I.t.fIF2Uy);
                        default:
                            (0, C.xb)(e);
                    }
                })(e.actionType),
            ),
        n
    );
}
function R(e) {
    let { transitionState: n, onClose: l, guildId: C, action: N, onSave: R, onDelete: _ } = e,
        H = i.useRef(null),
        G = i.useRef(null),
        L = null == N || null == g.A.getChannel(N.channelId) ? null : N.channelId,
        [O, P] = i.useState(L),
        F = (0, s.bG)([g.A], () => g.A.getChannel(O)),
        W = F?.isMediaChannel() === !0,
        J = i.useMemo(
            () => [
                { value: h.NewMemberActionTypes.VIEW, name: I.intl.string(I.t.jfieRw) },
                {
                    value: h.NewMemberActionTypes.CHAT,
                    name:
                        F?.type === y.rbe.GUILD_FORUM
                            ? W
                                ? I.intl.string(I.t["1EgDpA"])
                                : I.intl.string(I.t.x5Di7M)
                            : I.intl.string(I.t["R+dC4C"]),
                },
            ],
            [F?.type, W],
        ),
        [U, Y] = i.useState(w()),
        [B, V] = i.useState(N?.title ?? ""),
        z = (0, s.bG)([S.A], () => {
            let e = S.A.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != L && n.delete(L), n;
        }),
        [K, Q] = i.useState(null == N ? null : (J.find((e) => e.value === N.actionType)?.value ?? null)),
        [X, Z] = i.useState(N?.emoji ?? null),
        q = (0, s.bG)([S.A], () => S.A.getNewMemberAction(N?.channelId)?.icon),
        $ = N?.channelId,
        ee = (0, s.bG)([S.A], () => S.A.getPendingDataForChannel($), [$]),
        [en, el] = i.useState(
            null != ee && null != ee.iconData
                ? ee.iconData
                : null != q && null != O
                  ? b.Ay.getNewMemberActionIconURL({ channelId: O, icon: q })
                  : null,
        ),
        et = (0, c.A)(X),
        ei = (0, c.A)(en),
        ea = null == B || 0 === B.length || null == K || null == O,
        es = Object.values(U).flat().length > 0,
        eo = i.useCallback(() => {
            if (null == O || null == K || B.length <= 0) return;
            let e = void 0 !== $ && O !== $,
                n = void 0 !== ee,
                t = null != X || void 0 !== en,
                i = { icon: en ?? null, emoji: X };
            (e || (n && t)) && (n && (0, T.Rp)($), (0, T.J4)(O, i));
            let a = X !== et,
                s = en !== ei;
            R(
                {
                    channelId: O,
                    title: B,
                    description: "",
                    actionType: K,
                    emoji: null != X ? X : null,
                    icon: q ?? null,
                },
                i,
                (a || s) && !e,
            ),
                l();
        }, [R, l, B, K, O, X, q, en, et, ei, $, ee]),
        er = i.useCallback(() => {
            _?.(), l();
        }, [_, l]),
        ec = i.useCallback(
            (e) => {
                V(e),
                    Y(
                        D({
                            channelId: O ?? void 0,
                            title: e,
                            description: "",
                            actionType: K ?? void 0,
                            emoji: null != X ? X : void 0,
                        }),
                    );
            },
            [V, Y, O, K, X],
        ),
        ed = i.useCallback(
            (e) => {
                P(e),
                    Y(
                        D({
                            channelId: e,
                            title: B,
                            description: "",
                            actionType: K ?? void 0,
                            emoji: null != X ? X : void 0,
                        }),
                    );
            },
            [P, Y, B, K, X],
        ),
        eu = i.useCallback(
            (e) => {
                Q(e),
                    Y(
                        D({
                            channelId: O ?? void 0,
                            title: B,
                            description: "",
                            actionType: e,
                            emoji: null != X ? X : void 0,
                        }),
                    );
            },
            [Q, Y, O, B, X],
        ),
        em = i.useMemo(
            () =>
                j.Ay.getSelectableChannels(C)
                    .filter((e) => !z.has(e.channel.id) && (0, h.Rc)(e.channel))
                    .map((e) => {
                        let n = p.A.getGuild(C),
                            l = (0, u.gU)(e.channel, n);
                        return {
                            id: e.channel.id,
                            value: e.channel.id,
                            label: (0, d.m1)(e.channel, A.default, v.A),
                            leading: l ?? void 0,
                        };
                    }),
            [C, z],
        ),
        eh = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            Z(n), el(e);
        }, []),
        ex = i.useCallback(() => (null != en ? en : null), [en, X])(),
        eg = i.useCallback(
            (e) => {
                null != e && eh(e, null);
            },
            [eh],
        ),
        ej = null;
    ej =
        null != ex
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)("img", {
                          src: ex,
                          alt: "",
                          "aria-hidden": !0,
                          className: E.__invalid_image,
                          width: 24,
                          height: 24,
                      }),
                      (0, t.jsx)("div", {
                          className: E.gu,
                          children: (0, t.jsx)(o.R2l, { size: "md", color: "currentColor" }),
                      }),
                  ],
              })
            : null != X
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(r.A, { animated: X.animated ?? !1, emojiId: X.id, emojiName: X.name }),
                        (0, t.jsx)("div", {
                            className: E.gu,
                            children: (0, t.jsx)(o.R2l, { size: "md", color: "currentColor" }),
                        }),
                    ],
                })
              : (0, t.jsx)(o.XGR, { size: "md", color: "currentColor" });
    let ep = i.useMemo(
        () => [
            { text: I.intl.string(I.t["ETE/oC"]), onClick: l, variant: "secondary" },
            { text: I.intl.string(I.t["R3BPH+"]), variant: "primary", onClick: eo, disabled: ea || es },
        ],
        [eo, es, ea, l],
    );
    return (0, t.jsxs)(a.Modal, {
        title: I.intl.string(I.t.ncTLSo),
        transitionState: n,
        onClose: l,
        actions: ep,
        actionBarInput:
            null != N
                ? (0, t.jsx)(o.QWc, { text: I.intl.string(I.t.N86XcP), onClick: er, variant: "critical" })
                : void 0,
        children: [
            (0, t.jsxs)("div", {
                className: E.eH,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [I.intl.string(I.t["j+fhOY"]), (0, t.jsx)(f.A, {})],
                    }),
                    (0, t.jsx)(o.ksK, {
                        value: B,
                        error: (B?.length ?? 0) > 0 ? U.title.join(", ") : null,
                        onChange: ec,
                        placeholder: I.intl.string(I.t.oN1Sm2),
                        maxLength: h.kh,
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: E.me }),
            (0, t.jsxs)("div", {
                className: E.eH,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [I.intl.string(I.t.jVDc5W), (0, t.jsx)(f.A, {})],
                    }),
                    (0, t.jsx)(o.ZiE, {
                        selectionMode: "single",
                        value: O ?? void 0,
                        options: em,
                        onSelectionChange: ed,
                    }),
                    (0, t.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: I.intl.string(I.t.cypQPz),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: E.me }),
            (0, t.jsxs)("div", {
                className: E.kE,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: I.intl.string(I.t.gs5rQm),
                            }),
                            (0, t.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: I.intl.string(I.t.LjsoiT),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        className: E.um,
                        children: (0, t.jsx)(o.YNO, {
                            position: "bottom",
                            renderPopout: (e) => {
                                let n = e.closePopout,
                                    l = (0, t.jsxs)(t.Fragment, {
                                        children: [
                                            (0, t.jsx)(x.Ay, {
                                                onChange: (e) => {
                                                    eg(e), n();
                                                },
                                                tabIndex: 0,
                                            }),
                                            (0, t.jsx)(o.Text, {
                                                variant: "text-sm/medium",
                                                color: "none",
                                                children: I.intl.string(I.t["2YKkdd"]),
                                            }),
                                        ],
                                    }),
                                    i = (0, t.jsx)(o.YNO, {
                                        targetElementRef: H,
                                        position: "top",
                                        renderPopout: (e) => {
                                            let l,
                                                { closePopout: i } = e;
                                            return (0, t.jsx)(m.A, {
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
                                                            eh(
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
                                                pickerIntention: M.EmojiIntention.COMMUNITY_CONTENT,
                                                channel: F,
                                            });
                                        },
                                        children: (e) =>
                                            (0, t.jsx)(o.Text, {
                                                ...e,
                                                variant: "text-sm/medium",
                                                color: "none",
                                                ref: H,
                                                children: I.intl.string(I.t["amsyN+"]),
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
                                            className: E.K8,
                                            id: "upload",
                                            void_label: l,
                                            icon: o.JMY,
                                        }),
                                        null != ex || null != X
                                            ? (0, t.jsx)(o.Drp, {
                                                  id: "clear",
                                                  color: "danger",
                                                  label: I.intl.string(I.t.ZCLmoR),
                                                  icon: o.ucK,
                                                  action: () => {
                                                      eh(null);
                                                  },
                                              })
                                            : null,
                                    ],
                                });
                            },
                            targetElementRef: G,
                            children: (e) => (0, t.jsx)("div", { ...e, className: E.JW, ref: G, children: ej }),
                        }),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: E.me }),
            (0, t.jsxs)("div", {
                className: E.eH,
                children: [
                    (0, t.jsxs)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [I.intl.string(I.t.MIMVLa), (0, t.jsx)(f.A, {})],
                    }),
                    (0, t.jsx)(o.z6M, {
                        value: K,
                        onChange: eu,
                        options: null == F ? J : J.map((e) => ({ ...e, disabled: !k(e.value, F) })),
                    }),
                    null != K && U.actionType.length > 0
                        ? U.actionType.map((e) =>
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
