l.d(t, { default: () => V });
var n = l(477900),
    a = l(582128),
    i = l(17928),
    s = l(189213),
    r = l(739187),
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
    p = l(479909),
    b = l(451909),
    v = l(135621),
    N = l(808728),
    k = l(994500),
    y = l(287809),
    E = l(506774),
    j = l(248675),
    P = l(375708);
let I = `<#${"9".repeat(20)}>`,
    T = "VibegrationsPatchNotesLastChannelsByApp";
function A(e) {
    return `

${P.intl.formatToPlainString(j.default.bhoZhI, { channel: e })}`;
}
var L = l(870440),
    w = l(549469),
    G = l(381941),
    _ = l(741979);
let R = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function V(e) {
    let {
            guildId: t,
            applicationId: l,
            projectName: V,
            publish: M,
            initialDraft: O,
            transitionState: B,
            onClose: $,
        } = e,
        H = (0, i.bG)([N.Ay], () =>
            N.Ay.getChannels(t)
                [N.I6].filter((e) => {
                    let { channel: t } = e;
                    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel();
                })
                .map((e) => {
                    let { channel: t } = e;
                    return t;
                }),
        ),
        Q = (0, i.bG)([N.Ay], () => (0, L.SH)(t, l), [t, l]),
        q = (0, v.A)() - A(I).length,
        D = a.useRef(q);
    D.current = q;
    let [F, U] = a.useState("publishing"),
        [K, Y] = a.useState(null),
        [Z, z] = a.useState(() => {
            let e = E.w.get(T)?.[l];
            return null != e && H.some((t) => t.id === e) ? e : null;
        }),
        [{ textValue: W, richValue: X }, J] = a.useState(() => (0, S.N3)()),
        [ee, et] = a.useState(!1),
        [el, en] = a.useState(!0),
        [ea, ei] = a.useState(!1),
        [es, er] = a.useState(!1),
        eu = a.useRef(!1),
        ed = a.useRef(null != Z);
    (a.useEffect(() => {
        let e = !1;
        return (
            M.then(
                () => {
                    e || U("succeeded");
                },
                (t) => {
                    e || (U("failed"), Y(t instanceof Error ? t.message : null));
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [M]),
        a.useEffect(() => {
            null == Q || ed.current || z(Q);
        }, [Q]),
        a.useEffect(() => {
            let e = !1;
            return (
                O.then(
                    (t) => {
                        !e &&
                            (en(!1),
                            !0 !== t.ok
                                ? ei(!0)
                                : null == t.notes ||
                                  "" === t.notes ||
                                  eu.current ||
                                  J((0, S.ur)(t.notes.slice(0, D.current))));
                    },
                    () => {
                        e || (en(!1), ei(!0));
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [O]));
    let eo = a.useCallback((e, t, l) => {
            ((eu.current = !0), J({ textValue: t, richValue: l }));
        }, []),
        ec = a.useMemo(
            () => H.map((e) => ({ id: e.id, value: e.id, label: (0, g.m1)(e, y.default, k.A), leading: (0, x.gU)(e) })),
            [H],
        ),
        eh = (null != Z ? H.find((e) => e.id === Z) : null) ?? null,
        ef = eh ?? H[0] ?? null,
        em = W.trim(),
        eg = null == Q ? null : A(`<#${Q}>`),
        ex = a.useCallback(async () => {
            if (null != eh && "" !== em) {
                er(!0);
                try {
                    var e;
                    let t = b.Ay.parse(eh, null == eg ? em : `${em}${eg}`),
                        n = await m.A.sendMessage(eh.id, t, !1, { location: G.Hx.VIBEGRATIONS_PATCH_NOTES });
                    if (n?.ok === !1) throw Error("send failed");
                    ((e = eh.id), E.w.set(T, { ...E.w.get(T), [l]: e }), $());
                } catch {
                    ((0, r.P)((0, u.o)(P.intl.string(j.default.P6SoGm), d.Ck.FAILURE)), er(!1));
                }
            }
        }, [eh, em, eg, l, $]);
    return (0, n.jsx)(s.a, {
        transitionState: B,
        onClose: $,
        title: P.intl.formatToPlainString(j.default.gOv8LL, { projectName: V }),
        size: "lg",
        actions: [
            {
                text: "failed" === F ? P.intl.string(P.t.cpT0Cq) : P.intl.string(j.default.NmaE9T),
                variant: "secondary",
                onClick: $,
            },
            {
                text: P.intl.string(j.default.dx7eQG),
                variant: "primary",
                onClick: ex,
                disabled: "succeeded" !== F || "" === em || em.length > q || null == eh || es,
                loading: es,
            },
        ],
        children: (0, n.jsxs)("div", {
            className: _.rf,
            children: [
                (0, n.jsxs)("div", {
                    className: _.w0,
                    children: [
                        (0, n.jsx)(o.D, { variant: "heading-md/semibold", children: P.intl.string(j.default.tqtMyS) }),
                        "publishing" === F
                            ? (0, n.jsxs)("div", {
                                  className: _.G1,
                                  children: [
                                      (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: _.n3 }),
                                      (0, n.jsx)(h.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: P.intl.formatToPlainString(j.default.g5fncX, { projectName: V }),
                                      }),
                                  ],
                              })
                            : "succeeded" === F
                              ? (0, n.jsx)(h.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-positive",
                                    children: P.intl.formatToPlainString(j.default.CC69wK, { projectName: V }),
                                })
                              : (0, n.jsx)(h.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-critical",
                                    children: K ?? P.intl.string(j.default.fNP6Cd),
                                }),
                    ],
                }),
                null != ef
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
                                      (0, n.jsx)(p.Ay, {
                                          type: C.oU.VIBEGRATIONS_PATCH_NOTES,
                                          channel: ef,
                                          accessibilityLabel: P.intl.string(j.default.oouynk),
                                          placeholder: P.intl.string(el ? j.default.VQhlkB : j.default.xkxDN1),
                                          textValue: W,
                                          richValue: X,
                                          focused: ee,
                                          onChange: eo,
                                          onFocus: () => et(!0),
                                          onBlur: () => et(!1),
                                          onSubmit: R,
                                          parentModalKey: w.Y,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: q,
                                          editorClassName: _.Tw,
                                      }),
                                      el
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
                                                  options: ec,
                                                  value: Z ?? void 0,
                                                  placeholder: P.intl.string(j.default["8qO519"]),
                                                  onSelectionChange: (e) => {
                                                      ((ed.current = !0), z(e));
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
