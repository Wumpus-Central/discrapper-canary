l.d(t, { default: () => R });
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
    m = l(890497),
    f = l(148494),
    g = l(47167),
    x = l(713654),
    C = l(355622),
    p = l(408018),
    b = l(479909),
    v = l(451909),
    E = l(135621),
    N = l(808728),
    j = l(994500),
    S = l(287809),
    k = l(246338),
    y = l(506774),
    P = l(248675),
    A = l(375708);
let T = `<#${"9".repeat(20)}>`,
    G = "VibegrationsPatchNotesLastChannelsByApp";
function I(e) {
    return `

${A.intl.formatToPlainString(P.default["2ECgBx"], { channel: e })}`;
}
var _ = l(951465),
    w = l(381941),
    L = l(906559);
let M = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function R(e) {
    let {
            guildId: t,
            applicationId: l,
            projectName: R,
            publish: V,
            initialDraft: B,
            transitionState: F,
            onClose: O,
        } = e,
        U = (0, i.bG)([N.Ay], () =>
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
        $ = (0, i.bG)([N.Ay], () => (0, k.i8)(t, l), [t, l]),
        D = (0, E.A)() - I(T).length,
        H = a.useRef(D);
    H.current = D;
    let [Q, Y] = a.useState("publishing"),
        [q, z] = a.useState(null),
        [J, K] = a.useState(() => {
            let e = y.w.get(G)?.[l];
            return null != e && U.some((t) => t.id === e) ? e : null;
        }),
        [{ textValue: W, richValue: Z }, X] = a.useState(() => (0, p.N3)()),
        [ee, et] = a.useState(!1),
        [el, en] = a.useState(!0),
        [ea, ei] = a.useState(!1),
        [es, er] = a.useState(!1),
        eu = a.useRef(!1),
        ed = a.useRef(null != J);
    (a.useEffect(() => {
        let e = !1;
        return (
            V.then(
                () => {
                    e || Y("succeeded");
                },
                (t) => {
                    e || (Y("failed"), z(t instanceof Error ? t.message : null));
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [V]),
        a.useEffect(() => {
            null == $ || ed.current || K($);
        }, [$]),
        a.useEffect(() => {
            let e = !1;
            return (
                B.then(
                    (t) => {
                        !e &&
                            (en(!1),
                            !0 !== t.ok
                                ? ei(!0)
                                : null == t.notes ||
                                  "" === t.notes ||
                                  eu.current ||
                                  X((0, p.ur)(t.notes.slice(0, H.current))));
                    },
                    () => {
                        e || (en(!1), ei(!0));
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [B]));
    let eo = a.useCallback((e, t, l) => {
            ((eu.current = !0), X({ textValue: t, richValue: l }));
        }, []),
        ec = a.useMemo(
            () => U.map((e) => ({ id: e.id, value: e.id, label: (0, g.m1)(e, S.default, j.A), leading: (0, x.gU)(e) })),
            [U],
        ),
        eh = (null != J ? U.find((e) => e.id === J) : null) ?? null,
        em = eh ?? U[0] ?? null,
        ef = W.trim(),
        eg = null == $ ? null : I(`<#${$}>`),
        ex = a.useCallback(async () => {
            if (null != eh && "" !== ef) {
                er(!0);
                try {
                    var e;
                    let t = v.Ay.parse(eh, null == eg ? ef : `${ef}${eg}`),
                        n = await f.A.sendMessage(eh.id, t, !1, { location: w.Hx.CONJURE_PATCH_NOTES });
                    if (n?.ok === !1) throw Error("send failed");
                    ((e = eh.id), y.w.set(G, { ...y.w.get(G), [l]: e }), O());
                } catch {
                    ((0, r.P)((0, u.o)(A.intl.string(P.default["6oEjjD"]), d.Ck.FAILURE)), er(!1));
                }
            }
        }, [eh, ef, eg, l, O]);
    return (0, n.jsx)(s.a, {
        transitionState: F,
        onClose: O,
        title: A.intl.formatToPlainString(P.default.NEPcoi, { projectName: R }),
        size: "lg",
        actions: [
            {
                text: "failed" === Q ? A.intl.string(A.t.cpT0Cq) : A.intl.string(P.default.N5NqKB),
                variant: "secondary",
                onClick: O,
            },
            {
                text: A.intl.string(P.default["69aIG4"]),
                variant: "primary",
                onClick: ex,
                disabled: "succeeded" !== Q || "" === ef || ef.length > D || null == eh || es,
                loading: es,
            },
        ],
        children: (0, n.jsxs)("div", {
            className: L.rf,
            children: [
                (0, n.jsxs)("div", {
                    className: L.w0,
                    children: [
                        (0, n.jsx)(o.D, { variant: "heading-md/semibold", children: A.intl.string(P.default.xnpBTy) }),
                        "publishing" === Q
                            ? (0, n.jsxs)("div", {
                                  className: L.G1,
                                  children: [
                                      (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: L.n3 }),
                                      (0, n.jsx)(h.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: A.intl.formatToPlainString(P.default["3F4azs"], { projectName: R }),
                                      }),
                                  ],
                              })
                            : "succeeded" === Q
                              ? (0, n.jsx)(h.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-positive",
                                    children: A.intl.formatToPlainString(P.default.Enj2YA, { projectName: R }),
                                })
                              : (0, n.jsx)(h.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-critical",
                                    children: q ?? A.intl.string(P.default.gMWZeG),
                                }),
                    ],
                }),
                null != em
                    ? (0, n.jsxs)("div", {
                          className: L.dY,
                          children: [
                              (0, n.jsx)(o.D, {
                                  variant: "heading-md/semibold",
                                  children: A.intl.string(P.default.r4du8k),
                              }),
                              (0, n.jsxs)("div", {
                                  className: L.Q2,
                                  children: [
                                      (0, n.jsx)(b.Ay, {
                                          type: C.oU.CONJURE_PATCH_NOTES,
                                          channel: em,
                                          accessibilityLabel: A.intl.string(P.default.r4du8k),
                                          placeholder: A.intl.string(el ? P.default.aYQksU : P.default["3hV1Gc"]),
                                          textValue: W,
                                          richValue: Z,
                                          focused: ee,
                                          onChange: eo,
                                          onFocus: () => et(!0),
                                          onBlur: () => et(!1),
                                          onSubmit: M,
                                          parentModalKey: _.x,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: D,
                                          editorClassName: L.Tw,
                                      }),
                                      el
                                          ? (0, n.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: L.n5 })
                                          : null,
                                      ea
                                          ? (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: A.intl.string(P.default["Em8bo+"]),
                                            })
                                          : null,
                                      (0, n.jsxs)("div", {
                                          className: L.Q6,
                                          children: [
                                              (0, n.jsx)(h.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: A.intl.string(P.default.Gd63Fl),
                                              }),
                                              (0, n.jsx)(m.Z, {
                                                  selectionMode: "single",
                                                  label: A.intl.string(P.default.Gd63Fl),
                                                  hideLabel: !0,
                                                  options: ec,
                                                  value: J ?? void 0,
                                                  placeholder: A.intl.string(P.default["7CvxMC"]),
                                                  onSelectionChange: (e) => {
                                                      ((ed.current = !0), K(e));
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
