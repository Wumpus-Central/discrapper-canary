t.d(l, { default: () => M });
var n = t(477900),
    a = t(582128),
    i = t(189213),
    r = t(858899),
    s = t(297264),
    u = t(289873),
    c = t(834730),
    d = t(890497),
    o = t(47167),
    h = t(713654),
    f = t(355622),
    C = t(408018),
    m = t(845207),
    g = t(994500),
    x = t(287809),
    p = t(17928),
    b = t(148494),
    k = t(451909),
    y = t(135621),
    v = t(808728),
    E = t(246338),
    S = t(506774),
    j = t(248675),
    N = t(105292);
let A = `<#${"9".repeat(20)}>`,
    P = "ConjurePatchNotesLastChannelsByApp";
function w(e) {
    return `

${N.intl.formatToPlainString(j.default["2ECgBx"], { channel: e })}`;
}
var T = t(962998),
    I = t(381941),
    _ = t(951465),
    G = t(906559);
let R = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function M(e) {
    let {
            projectId: l,
            guildId: t,
            applicationId: M,
            projectName: L,
            publishedRevision: O,
            transitionState: V,
            onClose: $,
        } = e,
        [{ textValue: B, richValue: U }, F] = a.useState(() => (0, C.N3)()),
        [Q, D] = a.useState(!1),
        {
            channels: H,
            selectedChannel: Y,
            pickChannel: J,
            maxNotesLength: K,
            drafting: z,
            draftFailed: W,
            sending: Z,
            markEdited: q,
            send: X,
        } = (function (e) {
            let { projectId: l, guildId: t, applicationId: n, publishedRevision: i, applyDraft: r } = e,
                s = (0, p.yK)(
                    [v.Ay],
                    () =>
                        v.Ay.getChannels(t)
                            [v.I6].filter((e) => {
                                let { channel: l } = e;
                                return !l.isGuildVocal() && !l.isThread() && !l.isForumLikeChannel();
                            })
                            .map((e) => {
                                let { channel: l } = e;
                                return l;
                            }),
                    [t],
                ),
                u = (0, p.bG)([v.Ay], () => (0, E.i8)(t, n), [t, n]),
                c = (0, y.A)() - w(A).length,
                d = a.useRef(c);
            d.current = c;
            let o = a.useRef(r);
            o.current = r;
            let [h, f] = a.useState(() => {
                    let e = S.w.get(P)?.[n];
                    return null != e && s.some((l) => l.id === e) ? e : null;
                }),
                [C, m] = a.useState(!0),
                [g, x] = a.useState(!1),
                [j, N] = a.useState(void 0),
                [_, G] = a.useState(!1),
                R = a.useRef(!1),
                M = a.useRef(null != h);
            (a.useEffect(() => {
                null == u || M.current || f(u);
            }, [u]),
                a.useEffect(() => {
                    let e = { cancelled: !1 };
                    return (
                        (async function () {
                            let t;
                            try {
                                t = await (0, T.$C)(l);
                            } catch {
                                if (e.cancelled) return;
                                (m(!1), x(!0));
                                return;
                            }
                            !e.cancelled &&
                                (m(!1),
                                N(t.source_sha),
                                !0 !== t.ok
                                    ? x(!0)
                                    : null == t.notes ||
                                      "" === t.notes ||
                                      R.current ||
                                      o.current(t.notes.slice(0, d.current)));
                        })(),
                        () => {
                            e.cancelled = !0;
                        }
                    );
                }, [l]));
            let L = a.useCallback(() => {
                    R.current = !0;
                }, []),
                O = a.useCallback((e) => {
                    ((M.current = !0), f(e));
                }, []),
                V = (null != h ? s.find((e) => e.id === h) : null) ?? null,
                $ = null == u ? null : w(`<#${u}>`),
                B = a.useCallback(
                    async (e) => {
                        if (null == V || "" === e) return !1;
                        G(!0);
                        try {
                            var a;
                            let r = k.Ay.parse(V, null == $ ? e : `${e}${$}`),
                                s = await b.A.sendMessage(V.id, r, !1, { location: I.Hx.CONJURE_PATCH_NOTES });
                            if (s?.ok === !1) throw Error("send failed");
                            ((a = V.id), S.w.set(P, { ...S.w.get(P), [n]: a }));
                            let u = s?.body?.id;
                            return (
                                null != u &&
                                    (0, T.BG)(
                                        l,
                                        { publishedRevision: i, guildId: t, channelId: V.id, messageId: u },
                                        j,
                                    ),
                                !0
                            );
                        } catch {
                            return (G(!1), !1);
                        }
                    },
                    [V, $, n, l, i, t, j],
                );
            return {
                channels: s,
                selectedChannel: V,
                pickChannel: O,
                maxNotesLength: c,
                drafting: C,
                draftFailed: g,
                sending: _,
                markEdited: L,
                send: B,
            };
        })({
            projectId: l,
            guildId: t,
            applicationId: M,
            publishedRevision: O,
            applyDraft: a.useCallback((e) => F((0, C.ur)(e)), []),
        }),
        ee = a.useCallback(
            (e, l, t) => {
                (q(), F({ textValue: l, richValue: t }));
            },
            [q],
        ),
        el = a.useMemo(
            () => H.map((e) => ({ id: e.id, value: e.id, label: (0, o.m1)(e, x.default, g.A), leading: (0, h.gU)(e) })),
            [H],
        ),
        et = Y ?? H[0] ?? null,
        en = B.trim(),
        ea = a.useCallback(async () => {
            (await X(en)) ? $() : (0, r.P0)({ text: N.intl.string(j.default["6oEjjD"]), variant: "critical" });
        }, [en, $, X]);
    return (0, n.jsx)(i.a, {
        transitionState: V,
        onClose: $,
        title: N.intl.formatToPlainString(j.default.lsYQII, { projectName: L }),
        size: "lg",
        actions: [
            { text: N.intl.string(N.t["ETE/oC"]), variant: "secondary", onClick: $ },
            {
                text: N.intl.string(j.default["69aIG4"]),
                variant: "primary",
                onClick: ea,
                disabled: "" === en || en.length > K || null == Y || Z,
                loading: Z,
            },
        ],
        children: (0, n.jsx)("div", {
            className: G.rf,
            children:
                null != et
                    ? (0, n.jsxs)("div", {
                          className: G.dY,
                          children: [
                              (0, n.jsx)(s.D, {
                                  variant: "heading-md/semibold",
                                  children: N.intl.string(j.default.r4du8k),
                              }),
                              (0, n.jsxs)("div", {
                                  className: G.Q2,
                                  children: [
                                      (0, n.jsx)(m.Ay, {
                                          type: f.oU.CONJURE_PATCH_NOTES,
                                          channel: et,
                                          accessibilityLabel: N.intl.string(j.default.r4du8k),
                                          placeholder: N.intl.string(z ? j.default.aYQksU : j.default["3hV1Gc"]),
                                          textValue: B,
                                          richValue: U,
                                          focused: Q,
                                          onChange: ee,
                                          onFocus: () => D(!0),
                                          onBlur: () => D(!1),
                                          onSubmit: R,
                                          parentModalKey: _.x,
                                          autoCompletePosition: "bottom",
                                          emojiPickerCloseOnModalOuterClick: !0,
                                          disableThemedBackground: !0,
                                          maxCharacterCount: K,
                                          editorClassName: G.Tw,
                                      }),
                                      z ? (0, n.jsx)(u.y, { type: u.t.SPINNING_CIRCLE_SIMPLE, className: G.n5 }) : null,
                                      W
                                          ? (0, n.jsx)(c.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: N.intl.string(j.default["Em8bo+"]),
                                            })
                                          : null,
                                      (0, n.jsxs)("div", {
                                          className: G.Q6,
                                          children: [
                                              (0, n.jsx)(c.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: N.intl.string(j.default.Gd63Fl),
                                              }),
                                              (0, n.jsx)(d.Z, {
                                                  selectionMode: "single",
                                                  label: N.intl.string(j.default.Gd63Fl),
                                                  hideLabel: !0,
                                                  options: el,
                                                  value: Y?.id,
                                                  placeholder: N.intl.string(j.default["7CvxMC"]),
                                                  onSelectionChange: J,
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
