l.d(t, { default: () => B });
var n = l(477900),
    i = l(582128),
    a = l(17928),
    s = l(506774),
    r = l(189213),
    u = l(691540),
    d = l(857250),
    o = l(97483),
    c = l(297264),
    h = l(289873),
    m = l(834730),
    f = l(123292),
    x = l(890497),
    g = l(148494),
    C = l(47167),
    N = l(713654),
    b = l(355622),
    S = l(408018),
    p = l(273754),
    v = l(451909),
    k = l(135621),
    j = l(976860),
    E = l(808728),
    y = l(994500),
    P = l(287809),
    I = l(683180),
    A = l(681466),
    T = l(480007),
    V = l(652215),
    L = l(381941),
    w = l(50617),
    G = l(375708),
    M = l(286837);
let _ = `<#${"9".repeat(20)}>`,
    R = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 }),
    O = "VibegrationsPatchNotesLastChannels";
function B(e) {
    let {
            guildId: t,
            applicationId: l,
            projectName: B,
            publish: Q,
            initialDraft: $,
            transitionState: q,
            onClose: D,
        } = e,
        F = (0, a.bG)([E.Ay], () =>
            E.Ay.getChannels(t)
                [E.I6].filter((e) => {
                    let { channel: t } = e;
                    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel();
                })
                .map((e) => {
                    let { channel: t } = e;
                    return t;
                }),
        ),
        U = (0, a.bG)([E.Ay], () => (0, I.SH)(t, l), [t, l]),
        Y = (0, k.A)() - H(_).length,
        K = i.useRef(Y);
    K.current = Y;
    let [X, Z] = i.useState("publishing"),
        [z, W] = i.useState(() => {
            let e = s.w.get(O)?.[t];
            return null != e && F.some((t) => t.id === e) ? e : null;
        }),
        [{ textValue: J, richValue: ee }, et] = i.useState(() => (0, S.N3)()),
        [el, en] = i.useState(!1),
        [ei, ea] = i.useState(!0),
        [es, er] = i.useState(!1),
        [eu, ed] = i.useState(!1),
        eo = i.useRef(!1),
        ec = i.useRef(null != z);
    i.useEffect(() => {
        let e = !1;
        return (
            Q.then(
                () => {
                    e || Z("succeeded");
                },
                () => {
                    e || Z("failed");
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [Q]),
        i.useEffect(() => {
            null == U || ec.current || W(U);
        }, [U]),
        i.useEffect(() => {
            let e = !1;
            return (
                $.then(
                    (t) => {
                        !e &&
                            (ea(!1),
                            !0 !== t.ok
                                ? er(!0)
                                : null == t.notes ||
                                  "" === t.notes ||
                                  eo.current ||
                                  et((0, S.ur)(t.notes.slice(0, K.current))));
                    },
                    () => {
                        e || (ea(!1), er(!0));
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [$]);
    let eh = i.useCallback((e, t, l) => {
            (eo.current = !0), et({ textValue: t, richValue: l });
        }, []),
        em = i.useMemo(
            () =>
                F.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: (0, C.m1)(e, P.default, y.A),
                    leading: (0, A.A)(e, "VibegrationsPublishNotesModal") ?? (0, N.gU)(e),
                })),
            [F],
        ),
        ef = (null != z ? F.find((e) => e.id === z) : null) ?? null,
        ex = ef ?? F[0] ?? null,
        eg = J.trim(),
        eC = null == U ? null : H(`<#${U}>`),
        eN = i.useCallback(() => {
            (0, j.pX)(null == U ? V.BVt.CHANNEL(t) : V.BVt.CHANNEL(t, U)), D();
        }, [U, t, D]),
        eb = i.useCallback(async () => {
            if (null != ef && "" !== eg) {
                ed(!0);
                try {
                    let e = v.Ay.parse(ef, null == eC ? eg : `${eg}${eC}`),
                        l = await g.A.sendMessage(ef.id, e, !1, { location: L.Hx.VIBEGRATIONS_PATCH_NOTES });
                    if (l?.ok === !1) throw Error("send failed");
                    s.w.set(O, { ...s.w.get(O), [t]: ef.id }), D();
                } catch {
                    (0, u.P0)((0, d.o)(G.intl.string(w.default.P6SoGm), o.Ck.FAILURE)), ed(!1);
                }
            }
        }, [ef, eg, eC, t, D]);
    return (0, n.jsx)(r.Modal, {
        transitionState: q,
        onClose: D,
        title: G.intl.formatToPlainString(w.default.gOv8LL, { projectName: B }),
        size: "lg",
        actions: [
            {
                text: "failed" === X ? G.intl.string(G.t.cpT0Cq) : G.intl.string(w.default.NmaE9T),
                variant: "secondary",
                onClick: D,
            },
            {
                text: G.intl.string(w.default.dx7eQG),
                variant: "primary",
                onClick: eb,
                disabled: "succeeded" !== X || "" === eg || eg.length > Y || null == ef || eu,
                loading: eu,
            },
        ],
        children: (0, n.jsxs)("div", {
            className: M.rf,
            children: [
                (0, n.jsxs)("div", {
                    className: M.w0,
                    children: [
                        (0, n.jsx)(c.D, { variant: "heading-md/semibold", children: G.intl.string(w.default.tqtMyS) }),
                        "publishing" === X
                            ? (0, n.jsxs)("div", {
                                  className: M.G1,
                                  children: [
                                      (0, n.jsx)(h.y, { type: h.t.SPINNING_CIRCLE_SIMPLE, className: M.n3 }),
                                      (0, n.jsx)(m.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: G.intl.formatToPlainString(w.default.g5fncX, { projectName: B }),
                                      }),
                                  ],
                              })
                            : "succeeded" === X
                              ? (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(m.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "text-feedback-positive",
                                            children: G.intl.formatToPlainString(w.default.CC69wK, { projectName: B }),
                                        }),
                                        " ",
                                        (0, n.jsx)(f.Q, {
                                            variant: "primary",
                                            textVariant: "text-md/medium",
                                            onClick: eN,
                                            text: G.intl.string(G.t.jVcuVY),
                                        }),
                                    ],
                                })
                              : (0, n.jsx)(m.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-critical",
                                    children: G.intl.string(w.default.fNP6Cd),
                                }),
                    ],
                }),
                null != ex
                    ? (0, n.jsxs)("div", {
                          className: M.dY,
                          children: [
                              (0, n.jsx)(c.D, {
                                  variant: "heading-md/semibold",
                                  children: G.intl.string(w.default.oouynk),
                              }),
                              (0, n.jsxs)("div", {
                                  className: M.Q2,
                                  children: [
                                      (0, n.jsx)(p.Ay, {
                                          type: b.oU.VIBEGRATIONS_PATCH_NOTES,
                                          channel: ex,
                                          accessibilityLabel: G.intl.string(w.default.oouynk),
                                          placeholder: G.intl.string(ei ? w.default.VQhlkB : w.default.xkxDN1),
                                          textValue: J,
                                          richValue: ee,
                                          focused: el,
                                          onChange: eh,
                                          onFocus: () => en(!0),
                                          onBlur: () => en(!1),
                                          onSubmit: R,
                                          parentModalKey: T.Y,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: Y,
                                          editorClassName: M.Tw,
                                      }),
                                      ei
                                          ? (0, n.jsx)(h.y, { type: h.t.SPINNING_CIRCLE_SIMPLE, className: M.n5 })
                                          : null,
                                      es
                                          ? (0, n.jsx)(m.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: G.intl.string(w.default.PCST1n),
                                            })
                                          : null,
                                      (0, n.jsxs)("div", {
                                          className: M.Q6,
                                          children: [
                                              (0, n.jsx)(m.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: G.intl.string(w.default.IcSdnu),
                                              }),
                                              (0, n.jsx)(x.Z, {
                                                  selectionMode: "single",
                                                  label: G.intl.string(w.default.IcSdnu),
                                                  hideLabel: !0,
                                                  options: em,
                                                  value: z ?? void 0,
                                                  placeholder: G.intl.string(w.default["8qO519"]),
                                                  onSelectionChange: (e) => {
                                                      (ec.current = !0), W(e);
                                                  },
                                                  fullWidth: !0,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function H(e) {
    return `

${G.intl.formatToPlainString(w.default.bhoZhI, { channel: e })}`;
}
