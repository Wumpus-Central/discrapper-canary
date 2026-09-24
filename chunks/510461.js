l.d(t, { default: () => H });
var n = l(477900),
    i = l(582128),
    a = l(17928),
    s = l(189213),
    r = l(691540),
    u = l(857250),
    d = l(97483),
    o = l(297264),
    c = l(289873),
    h = l(834730),
    m = l(123292),
    f = l(890497),
    x = l(148494),
    g = l(47167),
    C = l(713654),
    p = l(355622),
    N = l(408018),
    b = l(959070),
    S = l(451909),
    v = l(135621),
    k = l(976860),
    j = l(808728),
    y = l(994500),
    E = l(287809),
    P = l(506774),
    A = l(50617),
    I = l(375708);
let T = `<#${"9".repeat(20)}>`,
    V = "VibegrationsPatchNotesLastChannelsByApp";
function L(e) {
    return `

${I.intl.formatToPlainString(A.default.bhoZhI, { channel: e })}`;
}
var w = l(683180),
    G = l(512287),
    M = l(480007),
    _ = l(652215),
    R = l(381941),
    B = l(286837);
let O = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function H(e) {
    let {
            guildId: t,
            applicationId: l,
            projectName: H,
            publish: Q,
            initialDraft: $,
            transitionState: q,
            onClose: D,
        } = e,
        F = (0, a.bG)([j.Ay], () =>
            j.Ay.getChannels(t)
                [j.I6].filter((e) => {
                    let { channel: t } = e;
                    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel();
                })
                .map((e) => {
                    let { channel: t } = e;
                    return t;
                }),
        ),
        U = (0, a.bG)([j.Ay], () => (0, w.SH)(t, l), [t, l]),
        Y = (0, v.A)() - L(T).length,
        K = i.useRef(Y);
    K.current = Y;
    let [X, Z] = i.useState("publishing"),
        [z, W] = i.useState(() => {
            let e = P.w.get(V)?.[l];
            return null != e && F.some((t) => t.id === e) ? e : null;
        }),
        [{ textValue: J, richValue: ee }, et] = i.useState(() => (0, N.N3)()),
        [el, en] = i.useState(!1),
        [ei, ea] = i.useState(!0),
        [es, er] = i.useState(!1),
        [eu, ed] = i.useState(!1),
        eo = i.useRef(!1),
        ec = i.useRef(null != z);
    (i.useEffect(() => {
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
                                  et((0, N.ur)(t.notes.slice(0, K.current))));
                    },
                    () => {
                        e || (ea(!1), er(!0));
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [$]));
    let eh = i.useCallback((e, t, l) => {
            ((eo.current = !0), et({ textValue: t, richValue: l }));
        }, []),
        em = i.useMemo(
            () =>
                F.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: (0, g.m1)(e, E.default, y.A),
                    leading: (0, G.A)(e, "VibegrationsPublishNotesModal") ?? (0, C.gU)(e),
                })),
            [F],
        ),
        ef = (null != z ? F.find((e) => e.id === z) : null) ?? null,
        ex = ef ?? F[0] ?? null,
        eg = J.trim(),
        eC = null == U ? null : L(`<#${U}>`),
        ep = i.useCallback(() => {
            ((0, k.pX)(null == U ? _.BVt.CHANNEL(t) : _.BVt.CHANNEL(t, U)), D());
        }, [U, t, D]),
        eN = i.useCallback(async () => {
            if (null != ef && "" !== eg) {
                ed(!0);
                try {
                    var e;
                    let t = S.Ay.parse(ef, null == eC ? eg : `${eg}${eC}`),
                        n = await x.A.sendMessage(ef.id, t, !1, { location: R.Hx.VIBEGRATIONS_PATCH_NOTES });
                    if (n?.ok === !1) throw Error("send failed");
                    ((e = ef.id), P.w.set(V, { ...P.w.get(V), [l]: e }), D());
                } catch {
                    ((0, r.P0)((0, u.o)(I.intl.string(A.default.P6SoGm), d.Ck.FAILURE)), ed(!1));
                }
            }
        }, [ef, eg, eC, l, D]);
    return (0, n.jsx)(s.Modal, {
        transitionState: q,
        onClose: D,
        title: I.intl.formatToPlainString(A.default.gOv8LL, { projectName: H }),
        size: "lg",
        actions: [
            {
                text: "failed" === X ? I.intl.string(I.t.cpT0Cq) : I.intl.string(A.default.NmaE9T),
                variant: "secondary",
                onClick: D,
            },
            {
                text: I.intl.string(A.default.dx7eQG),
                variant: "primary",
                onClick: eN,
                disabled: "succeeded" !== X || "" === eg || eg.length > Y || null == ef || eu,
                loading: eu,
            },
        ],
        children: (0, n.jsxs)("div", {
            className: B.rf,
            children: [
                (0, n.jsxs)("div", {
                    className: B.w0,
                    children: [
                        (0, n.jsx)(o.D, { variant: "heading-md/semibold", children: I.intl.string(A.default.tqtMyS) }),
                        "publishing" === X
                            ? (0, n.jsxs)("div", {
                                  className: B.G1,
                                  children: [
                                      (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: B.n3 }),
                                      (0, n.jsx)(h.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: I.intl.formatToPlainString(A.default.g5fncX, { projectName: H }),
                                      }),
                                  ],
                              })
                            : "succeeded" === X
                              ? (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(h.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "text-feedback-positive",
                                            children: I.intl.formatToPlainString(A.default.CC69wK, { projectName: H }),
                                        }),
                                        " ",
                                        (0, n.jsx)(m.Q, {
                                            variant: "primary",
                                            textVariant: "text-md/medium",
                                            onClick: ep,
                                            text: I.intl.string(I.t.jVcuVY),
                                        }),
                                    ],
                                })
                              : (0, n.jsx)(h.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-critical",
                                    children: I.intl.string(A.default.fNP6Cd),
                                }),
                    ],
                }),
                null != ex
                    ? (0, n.jsxs)("div", {
                          className: B.dY,
                          children: [
                              (0, n.jsx)(o.D, {
                                  variant: "heading-md/semibold",
                                  children: I.intl.string(A.default.oouynk),
                              }),
                              (0, n.jsxs)("div", {
                                  className: B.Q2,
                                  children: [
                                      (0, n.jsx)(b.Ay, {
                                          type: p.oU.VIBEGRATIONS_PATCH_NOTES,
                                          channel: ex,
                                          accessibilityLabel: I.intl.string(A.default.oouynk),
                                          placeholder: I.intl.string(ei ? A.default.VQhlkB : A.default.xkxDN1),
                                          textValue: J,
                                          richValue: ee,
                                          focused: el,
                                          onChange: eh,
                                          onFocus: () => en(!0),
                                          onBlur: () => en(!1),
                                          onSubmit: O,
                                          parentModalKey: M.Y,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: Y,
                                          editorClassName: B.Tw,
                                      }),
                                      ei
                                          ? (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: B.n5 })
                                          : null,
                                      es
                                          ? (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: I.intl.string(A.default.PCST1n),
                                            })
                                          : null,
                                      (0, n.jsxs)("div", {
                                          className: B.Q6,
                                          children: [
                                              (0, n.jsx)(h.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: I.intl.string(A.default.IcSdnu),
                                              }),
                                              (0, n.jsx)(f.Z, {
                                                  selectionMode: "single",
                                                  label: I.intl.string(A.default.IcSdnu),
                                                  hideLabel: !0,
                                                  options: em,
                                                  value: z ?? void 0,
                                                  placeholder: I.intl.string(A.default["8qO519"]),
                                                  onSelectionChange: (e) => {
                                                      ((ec.current = !0), W(e));
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
