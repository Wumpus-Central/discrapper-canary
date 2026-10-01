l.d(t, { default: () => R });
var n = l(477900),
    i = l(582128),
    a = l(17928),
    s = l(189213),
    r = l(376357),
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
    b = l(479909),
    p = l(451909),
    N = l(135621),
    v = l(808728),
    k = l(994500),
    y = l(287809),
    E = l(506774),
    j = l(50617),
    P = l(375708);
let I = `<#${"9".repeat(20)}>`,
    T = "VibegrationsPatchNotesLastChannelsByApp";
function A(e) {
    return `

${P.intl.formatToPlainString(j.default.bhoZhI, { channel: e })}`;
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
        [Y, Z] = i.useState(null),
        [z, W] = i.useState(() => {
            let e = E.w.get(T)?.[l];
            return null != e && Q.some((t) => t.id === e) ? e : null;
        }),
        [{ textValue: X, richValue: J }, ee] = i.useState(() => (0, S.N3)()),
        [et, el] = i.useState(!1),
        [en, ei] = i.useState(!0),
        [ea, es] = i.useState(!1),
        [er, eu] = i.useState(!1),
        ed = i.useRef(!1),
        eo = i.useRef(null != z);
    (i.useEffect(() => {
        let e = !1;
        return (
            O.then(
                () => {
                    e || K("succeeded");
                },
                (t) => {
                    e || (K("failed"), Z(t instanceof Error ? t.message : null));
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [O]),
        i.useEffect(() => {
            null == q || eo.current || W(q);
        }, [q]),
        i.useEffect(() => {
            let e = !1;
            return (
                B.then(
                    (t) => {
                        !e &&
                            (ei(!1),
                            !0 !== t.ok
                                ? es(!0)
                                : null == t.notes ||
                                  "" === t.notes ||
                                  ed.current ||
                                  ee((0, S.ur)(t.notes.slice(0, F.current))));
                    },
                    () => {
                        e || (ei(!1), es(!0));
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [B]));
    let ec = i.useCallback((e, t, l) => {
            ((ed.current = !0), ee({ textValue: t, richValue: l }));
        }, []),
        eh = i.useMemo(
            () =>
                Q.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: (0, g.m1)(e, y.default, k.A),
                    leading: (0, w.A)(e, "VibegrationsPublishNotesModal") ?? (0, x.gU)(e),
                })),
            [Q],
        ),
        ef = (null != z ? Q.find((e) => e.id === z) : null) ?? null,
        em = ef ?? Q[0] ?? null,
        eg = X.trim(),
        ex = null == q ? null : A(`<#${q}>`),
        eC = i.useCallback(async () => {
            if (null != ef && "" !== eg) {
                eu(!0);
                try {
                    var e;
                    let t = p.Ay.parse(ef, null == ex ? eg : `${eg}${ex}`),
                        n = await m.A.sendMessage(ef.id, t, !1, { location: V.Hx.VIBEGRATIONS_PATCH_NOTES });
                    if (n?.ok === !1) throw Error("send failed");
                    ((e = ef.id), E.w.set(T, { ...E.w.get(T), [l]: e }), H());
                } catch {
                    ((0, r.P)((0, u.o)(P.intl.string(j.default.P6SoGm), d.Ck.FAILURE)), eu(!1));
                }
            }
        }, [ef, eg, ex, l, H]);
    return (0, n.jsx)(s.a, {
        transitionState: $,
        onClose: H,
        title: P.intl.formatToPlainString(j.default.gOv8LL, { projectName: R }),
        size: "lg",
        actions: [
            {
                text: "failed" === U ? P.intl.string(P.t.cpT0Cq) : P.intl.string(j.default.NmaE9T),
                variant: "secondary",
                onClick: H,
            },
            {
                text: P.intl.string(j.default.dx7eQG),
                variant: "primary",
                onClick: eC,
                disabled: "succeeded" !== U || "" === eg || eg.length > D || null == ef || er,
                loading: er,
            },
        ],
        children: (0, n.jsxs)("div", {
            className: _.rf,
            children: [
                (0, n.jsxs)("div", {
                    className: _.w0,
                    children: [
                        (0, n.jsx)(o.D, { variant: "heading-md/semibold", children: P.intl.string(j.default.tqtMyS) }),
                        "publishing" === U
                            ? (0, n.jsxs)("div", {
                                  className: _.G1,
                                  children: [
                                      (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: _.n3 }),
                                      (0, n.jsx)(h.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: P.intl.formatToPlainString(j.default.g5fncX, { projectName: R }),
                                      }),
                                  ],
                              })
                            : "succeeded" === U
                              ? (0, n.jsx)(h.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-positive",
                                    children: P.intl.formatToPlainString(j.default.CC69wK, { projectName: R }),
                                })
                              : (0, n.jsx)(h.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-critical",
                                    children: Y ?? P.intl.string(j.default.fNP6Cd),
                                }),
                    ],
                }),
                null != em
                    ? (0, n.jsxs)("div", {
                          className: _.dY,
                          children: [
                              (0, n.jsx)(o.D, {
                                  variant: "heading-md/semibold",
                                  children: P.intl.string(j.default.oouynk),
                              }),
                              (0, n.jsxs)("div", {
                                  className: _.Q2,
                                  children: [
                                      (0, n.jsx)(b.Ay, {
                                          type: C.oU.VIBEGRATIONS_PATCH_NOTES,
                                          channel: em,
                                          accessibilityLabel: P.intl.string(j.default.oouynk),
                                          placeholder: P.intl.string(en ? j.default.VQhlkB : j.default.xkxDN1),
                                          textValue: X,
                                          richValue: J,
                                          focused: et,
                                          onChange: ec,
                                          onFocus: () => el(!0),
                                          onBlur: () => el(!1),
                                          onSubmit: M,
                                          parentModalKey: G.Y,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: D,
                                          editorClassName: _.Tw,
                                      }),
                                      en
                                          ? (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: _.n5 })
                                          : null,
                                      ea
                                          ? (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: P.intl.string(j.default.PCST1n),
                                            })
                                          : null,
                                      (0, n.jsxs)("div", {
                                          className: _.Q6,
                                          children: [
                                              (0, n.jsx)(h.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: P.intl.string(j.default.IcSdnu),
                                              }),
                                              (0, n.jsx)(f.Z, {
                                                  selectionMode: "single",
                                                  label: P.intl.string(j.default.IcSdnu),
                                                  hideLabel: !0,
                                                  options: eh,
                                                  value: z ?? void 0,
                                                  placeholder: P.intl.string(j.default["8qO519"]),
                                                  onSelectionChange: (e) => {
                                                      ((eo.current = !0), W(e));
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
