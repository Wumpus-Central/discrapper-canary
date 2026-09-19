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
    N = l(355622),
    b = l(408018),
    S = l(959070),
    p = l(451909),
    v = l(135621),
    k = l(976860),
    j = l(808728),
    E = l(994500),
    y = l(287809),
    P = l(506774),
    I = l(50617),
    A = l(375708);
let T = `<#${"9".repeat(20)}>`,
    V = "VibegrationsPatchNotesLastChannels";
function L(e) {
    return `

${A.intl.formatToPlainString(I.default.bhoZhI, { channel: e })}`;
}
var w = l(683180),
    G = l(512287),
    M = l(480007),
    _ = l(652215),
    R = l(381941),
    O = l(286837);
let B = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
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
            let e = P.w.get(V)?.[t];
            return null != e && F.some((t) => t.id === e) ? e : null;
        }),
        [{ textValue: J, richValue: ee }, et] = i.useState(() => (0, b.N3)()),
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
                                  et((0, b.ur)(t.notes.slice(0, K.current))));
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
                    label: (0, g.m1)(e, y.default, E.A),
                    leading: (0, G.A)(e, "VibegrationsPublishNotesModal") ?? (0, C.gU)(e),
                })),
            [F],
        ),
        ef = (null != z ? F.find((e) => e.id === z) : null) ?? null,
        ex = ef ?? F[0] ?? null,
        eg = J.trim(),
        eC = null == U ? null : L(`<#${U}>`),
        eN = i.useCallback(() => {
            ((0, k.pX)(null == U ? _.BVt.CHANNEL(t) : _.BVt.CHANNEL(t, U)), D());
        }, [U, t, D]),
        eb = i.useCallback(async () => {
            if (null != ef && "" !== eg) {
                ed(!0);
                try {
                    var e;
                    let l = p.Ay.parse(ef, null == eC ? eg : `${eg}${eC}`),
                        n = await x.A.sendMessage(ef.id, l, !1, { location: R.Hx.VIBEGRATIONS_PATCH_NOTES });
                    if (n?.ok === !1) throw Error("send failed");
                    ((e = ef.id), P.w.set(V, { ...P.w.get(V), [t]: e }), D());
                } catch {
                    ((0, r.P0)((0, u.o)(A.intl.string(I.default.P6SoGm), d.Ck.FAILURE)), ed(!1));
                }
            }
        }, [ef, eg, eC, t, D]);
    return (0, n.jsx)(s.Modal, {
        transitionState: q,
        onClose: D,
        title: A.intl.formatToPlainString(I.default.gOv8LL, { projectName: H }),
        size: "lg",
        actions: [
            {
                text: "failed" === X ? A.intl.string(A.t.cpT0Cq) : A.intl.string(I.default.NmaE9T),
                variant: "secondary",
                onClick: D,
            },
            {
                text: A.intl.string(I.default.dx7eQG),
                variant: "primary",
                onClick: eb,
                disabled: "succeeded" !== X || "" === eg || eg.length > Y || null == ef || eu,
                loading: eu,
            },
        ],
        children: (0, n.jsxs)("div", {
            className: O.rf,
            children: [
                (0, n.jsxs)("div", {
                    className: O.w0,
                    children: [
                        (0, n.jsx)(o.D, { variant: "heading-md/semibold", children: A.intl.string(I.default.tqtMyS) }),
                        "publishing" === X
                            ? (0, n.jsxs)("div", {
                                  className: O.G1,
                                  children: [
                                      (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: O.n3 }),
                                      (0, n.jsx)(h.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: A.intl.formatToPlainString(I.default.g5fncX, { projectName: H }),
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
                                            children: A.intl.formatToPlainString(I.default.CC69wK, { projectName: H }),
                                        }),
                                        " ",
                                        (0, n.jsx)(m.Q, {
                                            variant: "primary",
                                            textVariant: "text-md/medium",
                                            onClick: eN,
                                            text: A.intl.string(A.t.jVcuVY),
                                        }),
                                    ],
                                })
                              : (0, n.jsx)(h.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-critical",
                                    children: A.intl.string(I.default.fNP6Cd),
                                }),
                    ],
                }),
                null != ex
                    ? (0, n.jsxs)("div", {
                          className: O.dY,
                          children: [
                              (0, n.jsx)(o.D, {
                                  variant: "heading-md/semibold",
                                  children: A.intl.string(I.default.oouynk),
                              }),
                              (0, n.jsxs)("div", {
                                  className: O.Q2,
                                  children: [
                                      (0, n.jsx)(S.Ay, {
                                          type: N.oU.VIBEGRATIONS_PATCH_NOTES,
                                          channel: ex,
                                          accessibilityLabel: A.intl.string(I.default.oouynk),
                                          placeholder: A.intl.string(ei ? I.default.VQhlkB : I.default.xkxDN1),
                                          textValue: J,
                                          richValue: ee,
                                          focused: el,
                                          onChange: eh,
                                          onFocus: () => en(!0),
                                          onBlur: () => en(!1),
                                          onSubmit: B,
                                          parentModalKey: M.Y,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: Y,
                                          editorClassName: O.Tw,
                                      }),
                                      ei
                                          ? (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: O.n5 })
                                          : null,
                                      es
                                          ? (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: A.intl.string(I.default.PCST1n),
                                            })
                                          : null,
                                      (0, n.jsxs)("div", {
                                          className: O.Q6,
                                          children: [
                                              (0, n.jsx)(h.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: A.intl.string(I.default.IcSdnu),
                                              }),
                                              (0, n.jsx)(f.Z, {
                                                  selectionMode: "single",
                                                  label: A.intl.string(I.default.IcSdnu),
                                                  hideLabel: !0,
                                                  options: em,
                                                  value: z ?? void 0,
                                                  placeholder: A.intl.string(I.default["8qO519"]),
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
