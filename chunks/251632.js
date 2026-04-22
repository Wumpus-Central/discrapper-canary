l.d(n, { default: () => Y }), l(321073);
var t = l(627968),
    i = l(64700),
    a = l(189213),
    s = l(417597),
    o = l(834730),
    r = l(265872),
    c = l(861672),
    d = l(477782),
    u = l(460905),
    m = l(95635),
    h = l(241326),
    x = l(22231),
    g = l(750943),
    j = l(123292),
    p = l(534514),
    v = l(292666),
    A = l(783878),
    b = l(954197),
    C = l(565645),
    N = l(475743),
    E = l(47167),
    S = l(713654),
    f = l(937773),
    y = l(374084),
    T = l(946274),
    I = l(734057),
    M = l(808728),
    k = l(71393),
    D = l(994500),
    w = l(287809),
    _ = l(486020),
    R = l(403362),
    L = l(488926),
    G = l(199940),
    H = l(132514),
    P = l(721228),
    F = l(652215),
    J = l(307731),
    O = l(985018),
    U = l(915858);
function W(e, n) {
    switch (e) {
        case y.NewMemberActionTypes.VIEW:
            return L.MJ(F.xBc.VIEW_CHANNEL, n);
        case y.NewMemberActionTypes.CHAT:
            if (F.kvI.GUILD_THREADS_ONLY.has(n.type))
                return L.MJ(F.xBc.SEND_MESSAGES_IN_THREADS, n) || L.MJ(F.xBc.SEND_MESSAGES, n);
            return L.MJ(F.xBc.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function B() {
    return { channelId: [], title: [], description: [], actionType: [], emoji: [], icon: [] };
}
function V(e) {
    let n = B(),
        l = I.A.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < y.oc) &&
            n.title.push(O.intl.formatToPlainString(O.t.iu6AGk, { minLength: y.oc })),
        null == e.actionType ||
            null == l ||
            W(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case y.NewMemberActionTypes.VIEW:
                            return O.intl.string(O.t.lD7FOX);
                        case y.NewMemberActionTypes.CHAT:
                            return O.intl.string(O.t.fIF2Uy);
                        default:
                            (0, R.xb)(e);
                    }
                })(e.actionType),
            ),
        n
    );
}
function Y(e) {
    let { transitionState: n, onClose: l, guildId: R, action: L, onSave: Y, onDelete: z } = e,
        Q = i.useRef(null),
        X = i.useRef(null),
        K = null == L || null == I.A.getChannel(L.channelId) ? null : L.channelId,
        [Z, q] = i.useState(K),
        $ = (0, s.bG)([I.A], () => I.A.getChannel(Z)),
        ee = $?.isMediaChannel() === !0,
        en = i.useMemo(
            () => [
                { value: y.NewMemberActionTypes.VIEW, name: O.intl.string(O.t.jfieRw) },
                {
                    value: y.NewMemberActionTypes.CHAT,
                    name:
                        $?.type === F.rbe.GUILD_FORUM
                            ? ee
                                ? O.intl.string(O.t["1EgDpA"])
                                : O.intl.string(O.t.x5Di7M)
                            : O.intl.string(O.t["R+dC4C"]),
                },
            ],
            [$?.type, ee],
        ),
        [el, et] = i.useState(B()),
        [ei, ea] = i.useState(L?.title ?? ""),
        es = (0, s.bG)([H.A], () => {
            let e = H.A.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != K && n.delete(K), n;
        }),
        [eo, er] = i.useState(null == L ? null : (en.find((e) => e.value === L.actionType)?.value ?? null)),
        [ec, ed] = i.useState(L?.emoji ?? null),
        eu = (0, s.bG)([H.A], () => H.A.getNewMemberAction(L?.channelId)?.icon),
        em = L?.channelId,
        eh = (0, s.bG)([H.A], () => H.A.getPendingDataForChannel(em), [em]),
        [ex, eg] = i.useState(
            null != eh && null != eh.iconData
                ? eh.iconData
                : null != eu && null != Z
                  ? _.Ay.getNewMemberActionIconURL({ channelId: Z, icon: eu })
                  : null,
        ),
        ej = (0, N.A)(ec),
        ep = (0, N.A)(ex),
        ev = null == ei || 0 === ei.length || null == eo || null == Z,
        eA = Object.values(el).flat().length > 0,
        eb = i.useCallback(() => {
            if (null == Z || null == eo || ei.length <= 0) return;
            let e = void 0 !== em && Z !== em,
                n = void 0 !== eh,
                t = null != ec || void 0 !== ex,
                i = { icon: ex ?? null, emoji: ec };
            (e || (n && t)) && (n && (0, G.Rp)(em), (0, G.J4)(Z, i));
            let a = ec !== ej,
                s = ex !== ep;
            Y(
                {
                    channelId: Z,
                    title: ei,
                    description: "",
                    actionType: eo,
                    emoji: null != ec ? ec : null,
                    icon: eu ?? null,
                },
                i,
                (a || s) && !e,
            ),
                l();
        }, [Y, l, ei, eo, Z, ec, eu, ex, ej, ep, em, eh]),
        eC = i.useCallback(() => {
            z?.(), l();
        }, [z, l]),
        eN = i.useCallback(
            (e) => {
                ea(e),
                    et(
                        V({
                            channelId: Z ?? void 0,
                            title: e,
                            description: "",
                            actionType: eo ?? void 0,
                            emoji: null != ec ? ec : void 0,
                        }),
                    );
            },
            [ea, et, Z, eo, ec],
        ),
        eE = i.useCallback(
            (e) => {
                q(e),
                    et(
                        V({
                            channelId: e,
                            title: ei,
                            description: "",
                            actionType: eo ?? void 0,
                            emoji: null != ec ? ec : void 0,
                        }),
                    );
            },
            [q, et, ei, eo, ec],
        ),
        eS = i.useCallback(
            (e) => {
                er(e),
                    et(
                        V({
                            channelId: Z ?? void 0,
                            title: ei,
                            description: "",
                            actionType: e,
                            emoji: null != ec ? ec : void 0,
                        }),
                    );
            },
            [er, et, Z, ei, ec],
        ),
        ef = i.useMemo(
            () =>
                M.Ay.getSelectableChannels(R)
                    .filter((e) => !es.has(e.channel.id) && (0, y.Rc)(e.channel))
                    .map((e) => {
                        let n = k.A.getGuild(R),
                            l = (0, S.gU)(e.channel, n);
                        return {
                            id: e.channel.id,
                            value: e.channel.id,
                            label: (0, E.m1)(e.channel, w.default, D.A),
                            leading: l ?? void 0,
                        };
                    }),
            [R, es],
        ),
        ey = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            ed(n), eg(e);
        }, []),
        eT = i.useCallback(() => (null != ex ? ex : null), [ex, ec])(),
        eI = i.useCallback(
            (e) => {
                null != e && ey(e, null);
            },
            [ey],
        ),
        eM = null;
    eM =
        null != eT
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)("img", {
                          src: eT,
                          alt: "",
                          "aria-hidden": !0,
                          className: U.__invalid_image,
                          width: 24,
                          height: 24,
                      }),
                      (0, t.jsx)("div", {
                          className: U.gu,
                          children: (0, t.jsx)(x.R, { size: "md", color: "currentColor" }),
                      }),
                  ],
              })
            : null != ec
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(C.A, { animated: ec.animated ?? !1, emojiId: ec.id, emojiName: ec.name }),
                        (0, t.jsx)("div", {
                            className: U.gu,
                            children: (0, t.jsx)(x.R, { size: "md", color: "currentColor" }),
                        }),
                    ],
                })
              : (0, t.jsx)(g.X, { size: "md", color: "currentColor" });
    let ek = i.useMemo(
        () => [
            { text: O.intl.string(O.t["ETE/oC"]), onClick: l, variant: "secondary" },
            { text: O.intl.string(O.t["R3BPH+"]), variant: "primary", onClick: eb, disabled: ev || eA },
        ],
        [eb, eA, ev, l],
    );
    return (0, t.jsxs)(a.Modal, {
        title: O.intl.string(O.t.ncTLSo),
        transitionState: n,
        onClose: l,
        actions: ek,
        actionBarInput:
            null != L ? (0, t.jsx)(j.Q, { text: O.intl.string(O.t.N86XcP), onClick: eC, variant: "critical" }) : void 0,
        children: [
            (0, t.jsxs)("div", {
                className: U.eH,
                children: [
                    (0, t.jsxs)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [O.intl.string(O.t["j+fhOY"]), (0, t.jsx)(P.A, {})],
                    }),
                    (0, t.jsx)(v.k, {
                        value: ei,
                        error: (ei?.length ?? 0) > 0 ? el.title.join(", ") : null,
                        onChange: eN,
                        placeholder: O.intl.string(O.t.oN1Sm2),
                        maxLength: y.kh,
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: U.me }),
            (0, t.jsxs)("div", {
                className: U.eH,
                children: [
                    (0, t.jsxs)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [O.intl.string(O.t.jVDc5W), (0, t.jsx)(P.A, {})],
                    }),
                    (0, t.jsx)(A.Z, {
                        selectionMode: "single",
                        value: Z ?? void 0,
                        options: ef,
                        onSelectionChange: eE,
                    }),
                    (0, t.jsx)(o.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: O.intl.string(O.t.cypQPz),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: U.me }),
            (0, t.jsxs)("div", {
                className: U.kE,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(p.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: O.intl.string(O.t.gs5rQm),
                            }),
                            (0, t.jsx)(o.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: O.intl.string(O.t.LjsoiT),
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        className: U.um,
                        children: (0, t.jsx)(r.Y, {
                            position: "bottom",
                            renderPopout: (e) => {
                                let n = e.closePopout,
                                    l = (0, t.jsxs)(t.Fragment, {
                                        children: [
                                            (0, t.jsx)(T.Ay, {
                                                onChange: (e) => {
                                                    eI(e), n();
                                                },
                                                tabIndex: 0,
                                            }),
                                            (0, t.jsx)(o.E, {
                                                variant: "text-sm/medium",
                                                color: "none",
                                                children: O.intl.string(O.t["2YKkdd"]),
                                            }),
                                        ],
                                    }),
                                    i = (0, t.jsx)(r.Y, {
                                        targetElementRef: Q,
                                        position: "top",
                                        renderPopout: (e) => {
                                            let l,
                                                { closePopout: i } = e;
                                            return (0, t.jsx)(f.A, {
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
                                                            ey(
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
                                                pickerIntention: J.EmojiIntention.COMMUNITY_CONTENT,
                                                channel: $,
                                            });
                                        },
                                        children: (e) =>
                                            (0, t.jsx)(o.E, {
                                                ...e,
                                                variant: "text-sm/medium",
                                                color: "none",
                                                ref: Q,
                                                children: O.intl.string(O.t["amsyN+"]),
                                            }),
                                    });
                                return (0, t.jsxs)(c.W, {
                                    "data-menu-needs-migration": !0,
                                    navId: "set-image-for-action",
                                    "aria-label": "upload",
                                    onClose: () => !1,
                                    onSelect: () => !1,
                                    children: [
                                        (0, t.jsx)(d.Dr, { id: "emoji", void_label: i, icon: u.n }),
                                        (0, t.jsx)(d.Dr, { className: U.K8, id: "upload", void_label: l, icon: m.J }),
                                        null != eT || null != ec
                                            ? (0, t.jsx)(d.Dr, {
                                                  id: "clear",
                                                  color: "danger",
                                                  label: O.intl.string(O.t.ZCLmoR),
                                                  icon: h.u,
                                                  action: () => {
                                                      ey(null);
                                                  },
                                              })
                                            : null,
                                    ],
                                });
                            },
                            targetElementRef: X,
                            children: (e) => (0, t.jsx)("div", { ...e, className: U.JW, ref: X, children: eM }),
                        }),
                    }),
                ],
            }),
            (0, t.jsx)("div", { className: U.me }),
            (0, t.jsxs)("div", {
                className: U.eH,
                children: [
                    (0, t.jsxs)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: [O.intl.string(O.t.MIMVLa), (0, t.jsx)(P.A, {})],
                    }),
                    (0, t.jsx)(b.z, {
                        value: eo,
                        onChange: eS,
                        options: null == $ ? en : en.map((e) => ({ ...e, disabled: !W(e.value, $) })),
                    }),
                    null != eo && el.actionType.length > 0
                        ? el.actionType.map((e) =>
                              (0, t.jsx)(
                                  o.E,
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
