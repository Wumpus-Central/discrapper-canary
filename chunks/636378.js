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
    v = l(135621),
    b = l(808728),
    k = l(994500),
    y = l(287809),
    E = l(246338),
    S = l(506774),
    j = l(261425),
    N = l(105292);
let A = `<#${"9".repeat(20)}>`,
    P = "ConjurePatchNotesLastChannelsByApp";
function T(e) {
    return `

${N.intl.formatToPlainString(j.default["2ECgBx"], { channel: e })}`;
}
var I = l(962998),
    _ = l(951465),
    w = l(381941),
    G = l(906559);
let M = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function R(e) {
    let {
            projectId: t,
            guildId: l,
            applicationId: R,
            projectName: L,
            publishedRevision: O,
            transitionState: V,
            onClose: $,
        } = e,
        B = (0, i.yK)(
            [b.Ay],
            () =>
                b.Ay.getChannels(l)
                    [b.I6].filter((e) => {
                        let { channel: t } = e;
                        return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel();
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    }),
            [l],
        ),
        U = (0, i.bG)([b.Ay], () => (0, E.i8)(l, R), [l, R]),
        F = (0, v.A)() - T(A).length,
        Q = a.useRef(F);
    Q.current = F;
    let [H, Y] = a.useState(() => {
            let e = S.w.get(P)?.[R];
            return null != e && B.some((t) => t.id === e) ? e : null;
        }),
        [{ textValue: D, richValue: J }, K] = a.useState(() => (0, g.N3)()),
        [z, W] = a.useState(!1),
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
                (0, I.$C)(t).then(
                    (t) => {
                        !e &&
                            (q(!1),
                            el(t.source_sha),
                            !0 !== t.ok
                                ? ee(!0)
                                : null == t.notes ||
                                  "" === t.notes ||
                                  ei.current ||
                                  K((0, g.ur)(t.notes.slice(0, Q.current))));
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
            ((ei.current = !0), K({ textValue: t, richValue: l }));
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
                        a = await h.A.sendMessage(ed.id, n, !1, { location: w.Hx.CONJURE_PATCH_NOTES });
                    if (a?.ok === !1) throw Error("send failed");
                    ((e = ed.id), S.w.set(P, { ...S.w.get(P), [R]: e }));
                    let i = a?.body?.id;
                    (null != i &&
                        (0, I.BG)(t, { publishedRevision: O, guildId: l, channelId: ed.id, messageId: i }, et),
                        $());
                } catch {
                    ((0, r.P0)({ text: N.intl.string(j.default["6oEjjD"]), variant: "critical" }), ea(!1));
                }
            }
        }, [ed, ec, eh, R, t, O, l, et, $]);
    return (0, n.jsx)(s.a, {
        transitionState: V,
        onClose: $,
        title: N.intl.formatToPlainString(j.default.lsYQII, { projectName: L }),
        size: "lg",
        actions: [
            { text: N.intl.string(N.t["ETE/oC"]), variant: "secondary", onClick: $ },
            {
                text: N.intl.string(j.default["69aIG4"]),
                variant: "primary",
                onClick: ef,
                disabled: "" === ec || ec.length > F || null == ed || en,
                loading: en,
            },
        ],
        children: (0, n.jsx)("div", {
            className: G.rf,
            children:
                null != eo
                    ? (0, n.jsxs)("div", {
                          className: G.dY,
                          children: [
                              (0, n.jsx)(u.D, {
                                  variant: "heading-md/semibold",
                                  children: N.intl.string(j.default.r4du8k),
                              }),
                              (0, n.jsxs)("div", {
                                  className: G.Q2,
                                  children: [
                                      (0, n.jsx)(x.Ay, {
                                          type: C.oU.CONJURE_PATCH_NOTES,
                                          channel: eo,
                                          accessibilityLabel: N.intl.string(j.default.r4du8k),
                                          placeholder: N.intl.string(Z ? j.default.aYQksU : j.default["3hV1Gc"]),
                                          textValue: D,
                                          richValue: J,
                                          focused: z,
                                          onChange: er,
                                          onFocus: () => W(!0),
                                          onBlur: () => W(!1),
                                          onSubmit: M,
                                          parentModalKey: _.x,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: F,
                                          editorClassName: G.Tw,
                                      }),
                                      Z ? (0, n.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE, className: G.n5 }) : null,
                                      X
                                          ? (0, n.jsx)(o.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: N.intl.string(j.default["Em8bo+"]),
                                            })
                                          : null,
                                      (0, n.jsxs)("div", {
                                          className: G.Q6,
                                          children: [
                                              (0, n.jsx)(o.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: N.intl.string(j.default.Gd63Fl),
                                              }),
                                              (0, n.jsx)(c.Z, {
                                                  selectionMode: "single",
                                                  label: N.intl.string(j.default.Gd63Fl),
                                                  hideLabel: !0,
                                                  options: eu,
                                                  value: H ?? void 0,
                                                  placeholder: N.intl.string(j.default["7CvxMC"]),
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
