l.d(t, { default: () => R });
var n = l(477900),
    a = l(582128),
    i = l(17928),
    s = l(189213),
    r = l(858899),
    u = l(297264),
    d = l(289873),
    o = l(834730),
    c = l(890497),
    h = l(148494),
    f = l(47167),
    m = l(713654),
    C = l(355622),
    g = l(408018),
    x = l(479909),
    p = l(451909),
    b = l(135621),
    v = l(808728),
    k = l(994500),
    y = l(287809),
    E = l(246338),
    S = l(506774),
    N = l(248675),
    j = l(660183);
let A = `<#${"9".repeat(20)}>`,
    P = "VibegrationsPatchNotesLastChannelsByApp";
function T(e) {
    return `

${j.intl.formatToPlainString(N.default["2ECgBx"], { channel: e })}`;
}
var G = l(962998),
    I = l(951465),
    _ = l(381941),
    w = l(906559);
let M = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function R(e) {
    let {
            projectId: t,
            guildId: l,
            applicationId: R,
            projectName: V,
            publishedRevision: L,
            transitionState: O,
            onClose: $,
        } = e,
        B = (0, i.bG)([v.Ay], () =>
            v.Ay.getChannels(l)
                [v.I6].filter((e) => {
                    let { channel: t } = e;
                    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel();
                })
                .map((e) => {
                    let { channel: t } = e;
                    return t;
                }),
        ),
        U = (0, i.bG)([v.Ay], () => (0, E.i8)(l, R), [l, R]),
        F = (0, b.A)() - T(A).length,
        Q = a.useRef(F);
    Q.current = F;
    let [H, Y] = a.useState(() => {
            let e = S.w.get(P)?.[R];
            return null != e && B.some((t) => t.id === e) ? e : null;
        }),
        [{ textValue: D, richValue: J }, z] = a.useState(() => (0, g.N3)()),
        [K, W] = a.useState(!1),
        [Z, q] = a.useState(!0),
        [X, ee] = a.useState(!1),
        [et, el] = a.useState(void 0),
        [en, ea] = a.useState(!1),
        ei = a.useRef(!1),
        es = a.useRef(null != H);
    (a.useEffect(() => {
        null == U || es.current || Y(U);
    }, [U]),
        a.useEffect(() => {
            let e = !1;
            return (
                (0, G.$C)(t).then(
                    (t) => {
                        !e &&
                            (q(!1),
                            el(t.source_sha),
                            !0 !== t.ok
                                ? ee(!0)
                                : null == t.notes ||
                                  "" === t.notes ||
                                  ei.current ||
                                  z((0, g.ur)(t.notes.slice(0, Q.current))));
                    },
                    () => {
                        e || (q(!1), ee(!0));
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t]));
    let er = a.useCallback((e, t, l) => {
            ((ei.current = !0), z({ textValue: t, richValue: l }));
        }, []),
        eu = a.useMemo(
            () => B.map((e) => ({ id: e.id, value: e.id, label: (0, f.m1)(e, y.default, k.A), leading: (0, m.gU)(e) })),
            [B],
        ),
        ed = (null != H ? B.find((e) => e.id === H) : null) ?? null,
        eo = ed ?? B[0] ?? null,
        ec = D.trim(),
        eh = null == U ? null : T(`<#${U}>`),
        ef = a.useCallback(async () => {
            if (null != ed && "" !== ec) {
                ea(!0);
                try {
                    var e;
                    let n = p.Ay.parse(ed, null == eh ? ec : `${ec}${eh}`),
                        a = await h.A.sendMessage(ed.id, n, !1, { location: _.Hx.CONJURE_PATCH_NOTES });
                    if (a?.ok === !1) throw Error("send failed");
                    ((e = ed.id), S.w.set(P, { ...S.w.get(P), [R]: e }));
                    let i = a?.body?.id;
                    (null != i &&
                        (0, G.BG)(t, { publishedRevision: L, guildId: l, channelId: ed.id, messageId: i }, et),
                        $());
                } catch {
                    ((0, r.P0)({ text: j.intl.string(N.default["6oEjjD"]), variant: "critical" }), ea(!1));
                }
            }
        }, [ed, ec, eh, R, t, L, l, et, $]);
    return (0, n.jsx)(s.a, {
        transitionState: O,
        onClose: $,
        title: j.intl.formatToPlainString(N.default.lsYQII, { projectName: V }),
        size: "lg",
        actions: [
            { text: j.intl.string(j.t["ETE/oC"]), variant: "secondary", onClick: $ },
            {
                text: j.intl.string(N.default["69aIG4"]),
                variant: "primary",
                onClick: ef,
                disabled: "" === ec || ec.length > F || null == ed || en,
                loading: en,
            },
        ],
        children: (0, n.jsx)("div", {
            className: w.rf,
            children:
                null != eo
                    ? (0, n.jsxs)("div", {
                          className: w.dY,
                          children: [
                              (0, n.jsx)(u.D, {
                                  variant: "heading-md/semibold",
                                  children: j.intl.string(N.default.r4du8k),
                              }),
                              (0, n.jsxs)("div", {
                                  className: w.Q2,
                                  children: [
                                      (0, n.jsx)(x.Ay, {
                                          type: C.oU.CONJURE_PATCH_NOTES,
                                          channel: eo,
                                          accessibilityLabel: j.intl.string(N.default.r4du8k),
                                          placeholder: j.intl.string(Z ? N.default.aYQksU : N.default["3hV1Gc"]),
                                          textValue: D,
                                          richValue: J,
                                          focused: K,
                                          onChange: er,
                                          onFocus: () => W(!0),
                                          onBlur: () => W(!1),
                                          onSubmit: M,
                                          parentModalKey: I.x,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: F,
                                          editorClassName: w.Tw,
                                      }),
                                      Z ? (0, n.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE, className: w.n5 }) : null,
                                      X
                                          ? (0, n.jsx)(o.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: j.intl.string(N.default["Em8bo+"]),
                                            })
                                          : null,
                                      (0, n.jsxs)("div", {
                                          className: w.Q6,
                                          children: [
                                              (0, n.jsx)(o.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: j.intl.string(N.default.Gd63Fl),
                                              }),
                                              (0, n.jsx)(c.Z, {
                                                  selectionMode: "single",
                                                  label: j.intl.string(N.default.Gd63Fl),
                                                  hideLabel: !0,
                                                  options: eu,
                                                  value: H ?? void 0,
                                                  placeholder: j.intl.string(N.default["7CvxMC"]),
                                                  onSelectionChange: (e) => {
                                                      ((es.current = !0), Y(e));
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
        }),
    });
}
