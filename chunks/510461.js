l.d(t, { default: () => R });
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
    f = l(890497),
    m = l(148494),
    g = l(47167),
    x = l(713654),
    C = l(355622),
    S = l(408018),
    b = l(959070),
    p = l(451909),
    N = l(135621),
    v = l(808728),
    k = l(994500),
    y = l(287809),
    j = l(506774),
    E = l(50617),
    P = l(375708);
let I = `<#${"9".repeat(20)}>`,
    T = "VibegrationsPatchNotesLastChannelsByApp";
function A(e) {
    return `

${P.intl.formatToPlainString(E.default.bhoZhI, { channel: e })}`;
}
var L = l(683180),
    w = l(512287),
    G = l(480007),
    V = l(381941),
    _ = l(286837);
let M = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function R(e) {
    let {
            guildId: t,
            applicationId: l,
            projectName: R,
            publish: O,
            initialDraft: B,
            transitionState: $,
            onClose: H,
        } = e,
        Q = (0, a.bG)([v.Ay], () =>
            v.Ay.getChannels(t)
                [v.I6].filter((e) => {
                    let { channel: t } = e;
                    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel();
                })
                .map((e) => {
                    let { channel: t } = e;
                    return t;
                }),
        ),
        q = (0, a.bG)([v.Ay], () => (0, L.SH)(t, l), [t, l]),
        D = (0, N.A)() - A(I).length,
        F = i.useRef(D);
    F.current = D;
    let [U, K] = i.useState("publishing"),
        [Y, Z] = i.useState(() => {
            let e = j.w.get(T)?.[l];
            return null != e && Q.some((t) => t.id === e) ? e : null;
        }),
        [{ textValue: z, richValue: W }, X] = i.useState(() => (0, S.N3)()),
        [J, ee] = i.useState(!1),
        [et, el] = i.useState(!0),
        [en, ei] = i.useState(!1),
        [ea, es] = i.useState(!1),
        er = i.useRef(!1),
        eu = i.useRef(null != Y);
    (i.useEffect(() => {
        let e = !1;
        return (
            O.then(
                () => {
                    e || K("succeeded");
                },
                () => {
                    e || K("failed");
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [O]),
        i.useEffect(() => {
            null == q || eu.current || Z(q);
        }, [q]),
        i.useEffect(() => {
            let e = !1;
            return (
                B.then(
                    (t) => {
                        !e &&
                            (el(!1),
                            !0 !== t.ok
                                ? ei(!0)
                                : null == t.notes ||
                                  "" === t.notes ||
                                  er.current ||
                                  X((0, S.ur)(t.notes.slice(0, F.current))));
                    },
                    () => {
                        e || (el(!1), ei(!0));
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [B]));
    let ed = i.useCallback((e, t, l) => {
            ((er.current = !0), X({ textValue: t, richValue: l }));
        }, []),
        eo = i.useMemo(
            () =>
                Q.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: (0, g.m1)(e, y.default, k.A),
                    leading: (0, w.A)(e, "VibegrationsPublishNotesModal") ?? (0, x.gU)(e),
                })),
            [Q],
        ),
        ec = (null != Y ? Q.find((e) => e.id === Y) : null) ?? null,
        eh = ec ?? Q[0] ?? null,
        ef = z.trim(),
        em = null == q ? null : A(`<#${q}>`),
        eg = i.useCallback(async () => {
            if (null != ec && "" !== ef) {
                es(!0);
                try {
                    var e;
                    let t = p.Ay.parse(ec, null == em ? ef : `${ef}${em}`),
                        n = await m.A.sendMessage(ec.id, t, !1, { location: V.Hx.VIBEGRATIONS_PATCH_NOTES });
                    if (n?.ok === !1) throw Error("send failed");
                    ((e = ec.id), j.w.set(T, { ...j.w.get(T), [l]: e }), H());
                } catch {
                    ((0, r.P0)((0, u.o)(P.intl.string(E.default.P6SoGm), d.Ck.FAILURE)), es(!1));
                }
            }
        }, [ec, ef, em, l, H]);
    return (0, n.jsx)(s.a, {
        transitionState: $,
        onClose: H,
        title: P.intl.formatToPlainString(E.default.gOv8LL, { projectName: R }),
        size: "lg",
        actions: [
            {
                text: "failed" === U ? P.intl.string(P.t.cpT0Cq) : P.intl.string(E.default.NmaE9T),
                variant: "secondary",
                onClick: H,
            },
            {
                text: P.intl.string(E.default.dx7eQG),
                variant: "primary",
                onClick: eg,
                disabled: "succeeded" !== U || "" === ef || ef.length > D || null == ec || ea,
                loading: ea,
            },
        ],
        children: (0, n.jsxs)("div", {
            className: _.rf,
            children: [
                (0, n.jsxs)("div", {
                    className: _.w0,
                    children: [
                        (0, n.jsx)(o.D, { variant: "heading-md/semibold", children: P.intl.string(E.default.tqtMyS) }),
                        "publishing" === U
                            ? (0, n.jsxs)("div", {
                                  className: _.G1,
                                  children: [
                                      (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: _.n3 }),
                                      (0, n.jsx)(h.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: P.intl.formatToPlainString(E.default.g5fncX, { projectName: R }),
                                      }),
                                  ],
                              })
                            : "succeeded" === U
                              ? (0, n.jsx)(h.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-positive",
                                    children: P.intl.formatToPlainString(E.default.CC69wK, { projectName: R }),
                                })
                              : (0, n.jsx)(h.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-critical",
                                    children: P.intl.string(E.default.fNP6Cd),
                                }),
                    ],
                }),
                null != eh
                    ? (0, n.jsxs)("div", {
                          className: _.dY,
                          children: [
                              (0, n.jsx)(o.D, {
                                  variant: "heading-md/semibold",
                                  children: P.intl.string(E.default.oouynk),
                              }),
                              (0, n.jsxs)("div", {
                                  className: _.Q2,
                                  children: [
                                      (0, n.jsx)(b.Ay, {
                                          type: C.oU.VIBEGRATIONS_PATCH_NOTES,
                                          channel: eh,
                                          accessibilityLabel: P.intl.string(E.default.oouynk),
                                          placeholder: P.intl.string(et ? E.default.VQhlkB : E.default.xkxDN1),
                                          textValue: z,
                                          richValue: W,
                                          focused: J,
                                          onChange: ed,
                                          onFocus: () => ee(!0),
                                          onBlur: () => ee(!1),
                                          onSubmit: M,
                                          parentModalKey: G.Y,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: D,
                                          editorClassName: _.Tw,
                                      }),
                                      et
                                          ? (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: _.n5 })
                                          : null,
                                      en
                                          ? (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: P.intl.string(E.default.PCST1n),
                                            })
                                          : null,
                                      (0, n.jsxs)("div", {
                                          className: _.Q6,
                                          children: [
                                              (0, n.jsx)(h.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: P.intl.string(E.default.IcSdnu),
                                              }),
                                              (0, n.jsx)(f.Z, {
                                                  selectionMode: "single",
                                                  label: P.intl.string(E.default.IcSdnu),
                                                  hideLabel: !0,
                                                  options: eo,
                                                  value: Y ?? void 0,
                                                  placeholder: P.intl.string(E.default["8qO519"]),
                                                  onSelectionChange: (e) => {
                                                      ((eu.current = !0), Z(e));
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
