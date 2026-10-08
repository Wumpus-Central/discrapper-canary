l.d(t, { default: () => L });
var n = l(477900),
    a = l(582128),
    i = l(17928),
    s = l(189213),
    r = l(376357),
    u = l(297264),
    d = l(289873),
    o = l(834730),
    c = l(890497),
    h = l(148494),
    m = l(47167),
    f = l(713654),
    g = l(355622),
    x = l(408018),
    C = l(479909),
    p = l(451909),
    b = l(135621),
    v = l(808728),
    E = l(994500),
    N = l(287809),
    j = l(246338),
    S = l(506774),
    k = l(248675),
    y = l(660183);
let P = `<#${"9".repeat(20)}>`,
    A = "VibegrationsPatchNotesLastChannelsByApp";
function T(e) {
    return `

${y.intl.formatToPlainString(k.default["2ECgBx"], { channel: e })}`;
}
var G = l(951465),
    I = l(381941),
    _ = l(906559);
let w = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function L(e) {
    let {
            guildId: t,
            applicationId: l,
            projectName: L,
            publish: M,
            initialDraft: R,
            transitionState: V,
            onClose: B,
        } = e,
        F = (0, i.bG)([v.Ay], () =>
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
        O = (0, i.bG)([v.Ay], () => (0, j.i8)(t, l), [t, l]),
        U = (0, b.A)() - T(P).length,
        $ = a.useRef(U);
    $.current = U;
    let [D, H] = a.useState("publishing"),
        [Q, Y] = a.useState(null),
        [q, z] = a.useState(() => {
            let e = S.w.get(A)?.[l];
            return null != e && F.some((t) => t.id === e) ? e : null;
        }),
        [{ textValue: J, richValue: K }, W] = a.useState(() => (0, x.N3)()),
        [Z, X] = a.useState(!1),
        [ee, et] = a.useState(!0),
        [el, en] = a.useState(!1),
        [ea, ei] = a.useState(!1),
        es = a.useRef(!1),
        er = a.useRef(null != q);
    (a.useEffect(() => {
        let e = !1;
        return (
            M.then(
                () => {
                    e || H("succeeded");
                },
                (t) => {
                    e || (H("failed"), Y(t instanceof Error ? t.message : null));
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [M]),
        a.useEffect(() => {
            null == O || er.current || z(O);
        }, [O]),
        a.useEffect(() => {
            let e = !1;
            return (
                R.then(
                    (t) => {
                        !e &&
                            (et(!1),
                            !0 !== t.ok
                                ? en(!0)
                                : null == t.notes ||
                                  "" === t.notes ||
                                  es.current ||
                                  W((0, x.ur)(t.notes.slice(0, $.current))));
                    },
                    () => {
                        e || (et(!1), en(!0));
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [R]));
    let eu = a.useCallback((e, t, l) => {
            ((es.current = !0), W({ textValue: t, richValue: l }));
        }, []),
        ed = a.useMemo(
            () => F.map((e) => ({ id: e.id, value: e.id, label: (0, m.m1)(e, N.default, E.A), leading: (0, f.gU)(e) })),
            [F],
        ),
        eo = (null != q ? F.find((e) => e.id === q) : null) ?? null,
        ec = eo ?? F[0] ?? null,
        eh = J.trim(),
        em = null == O ? null : T(`<#${O}>`),
        ef = a.useCallback(async () => {
            if (null != eo && "" !== eh) {
                ei(!0);
                try {
                    var e;
                    let t = p.Ay.parse(eo, null == em ? eh : `${eh}${em}`),
                        n = await h.A.sendMessage(eo.id, t, !1, { location: I.Hx.CONJURE_PATCH_NOTES });
                    if (n?.ok === !1) throw Error("send failed");
                    ((e = eo.id), S.w.set(A, { ...S.w.get(A), [l]: e }), B());
                } catch {
                    ((0, r.P0)((0, r.ox)(y.intl.string(k.default["6oEjjD"]), r.Ck.FAILURE)), ei(!1));
                }
            }
        }, [eo, eh, em, l, B]);
    return (0, n.jsx)(s.a, {
        transitionState: V,
        onClose: B,
        title: y.intl.formatToPlainString(k.default.NEPcoi, { projectName: L }),
        size: "lg",
        actions: [
            {
                text: "failed" === D ? y.intl.string(y.t.cpT0Cq) : y.intl.string(k.default.N5NqKB),
                variant: "secondary",
                onClick: B,
            },
            {
                text: y.intl.string(k.default["69aIG4"]),
                variant: "primary",
                onClick: ef,
                disabled: "succeeded" !== D || "" === eh || eh.length > U || null == eo || ea,
                loading: ea,
            },
        ],
        children: (0, n.jsxs)("div", {
            className: _.rf,
            children: [
                (0, n.jsxs)("div", {
                    className: _.w0,
                    children: [
                        (0, n.jsx)(u.D, { variant: "heading-md/semibold", children: y.intl.string(k.default.xnpBTy) }),
                        "publishing" === D
                            ? (0, n.jsxs)("div", {
                                  className: _.G1,
                                  children: [
                                      (0, n.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE, className: _.n3 }),
                                      (0, n.jsx)(o.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: y.intl.formatToPlainString(k.default["3F4azs"], { projectName: L }),
                                      }),
                                  ],
                              })
                            : "succeeded" === D
                              ? (0, n.jsx)(o.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-positive",
                                    children: y.intl.formatToPlainString(k.default.Enj2YA, { projectName: L }),
                                })
                              : (0, n.jsx)(o.E, {
                                    variant: "text-md/medium",
                                    color: "text-feedback-critical",
                                    children: Q ?? y.intl.string(k.default.gMWZeG),
                                }),
                    ],
                }),
                null != ec
                    ? (0, n.jsxs)("div", {
                          className: _.dY,
                          children: [
                              (0, n.jsx)(u.D, {
                                  variant: "heading-md/semibold",
                                  children: y.intl.string(k.default.r4du8k),
                              }),
                              (0, n.jsxs)("div", {
                                  className: _.Q2,
                                  children: [
                                      (0, n.jsx)(C.Ay, {
                                          type: g.oU.CONJURE_PATCH_NOTES,
                                          channel: ec,
                                          accessibilityLabel: y.intl.string(k.default.r4du8k),
                                          placeholder: y.intl.string(ee ? k.default.aYQksU : k.default["3hV1Gc"]),
                                          textValue: J,
                                          richValue: K,
                                          focused: Z,
                                          onChange: eu,
                                          onFocus: () => X(!0),
                                          onBlur: () => X(!1),
                                          onSubmit: w,
                                          parentModalKey: G.x,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: U,
                                          editorClassName: _.Tw,
                                      }),
                                      ee
                                          ? (0, n.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE, className: _.n5 })
                                          : null,
                                      el
                                          ? (0, n.jsx)(o.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: y.intl.string(k.default["Em8bo+"]),
                                            })
                                          : null,
                                      (0, n.jsxs)("div", {
                                          className: _.Q6,
                                          children: [
                                              (0, n.jsx)(o.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: y.intl.string(k.default.Gd63Fl),
                                              }),
                                              (0, n.jsx)(c.Z, {
                                                  selectionMode: "single",
                                                  label: y.intl.string(k.default.Gd63Fl),
                                                  hideLabel: !0,
                                                  options: ed,
                                                  value: q ?? void 0,
                                                  placeholder: y.intl.string(k.default["7CvxMC"]),
                                                  onSelectionChange: (e) => {
                                                      ((er.current = !0), z(e));
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
