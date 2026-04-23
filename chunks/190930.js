a.d(t, { default: () => W });
var n = a(627968),
    i = a(64700),
    l = a(110259),
    r = a(837381),
    s = a(189213),
    o = a(17928),
    c = a(834730),
    d = a(691540),
    u = a(857250),
    _ = a(97483),
    p = a(289873),
    m = a(892547),
    h = a(331322),
    g = a(308528),
    A = a(720149),
    y = a(608299),
    C = a(565150),
    I = a(928039),
    b = a(139286),
    f = a(429913),
    S = a(115718),
    x = a(61916),
    E = a(301169),
    w = a(451909),
    v = a(151054),
    M = a(734057),
    k = a(31717),
    T = a(576705),
    R = a(522602),
    D = a(287809),
    L = a(954571),
    U = a(741394),
    P = a(998218),
    j = a(19575),
    N = a(933958),
    H = a(652215),
    O = a(381941),
    F = a(985018),
    G = a(584437);
let V = (e, t) =>
    e.type === S.rD.USER
        ? t || null != M.A.getDMChannelFromUserId(e.record.id)
        : e.type === S.rD.GROUP_DM ||
          (e.record.type !== H.rbe.GUILD_FORUM &&
              e.record.type !== H.rbe.GUILD_MEDIA &&
              T.A.can(H.xBc.VIEW_CHANNEL, e.record) &&
              T.A.can(H.xBc.SEND_MESSAGES, e.record) &&
              T.A.can(H.xBc.ATTACH_FILES, e.record));
function q() {
    return (0, n.jsx)("div", {
        className: G.w,
        children: (0, n.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: F.intl.string(F.t.V6nAfF),
        }),
    });
}
function W(e) {
    let { applicationId: t, mediaUrl: a, onClose: S, transitionState: T, ...W } = e,
        B = (0, o.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity());
    (0, b.A)({
        type: l.ImpressionTypes.MODAL,
        name: l.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: { application_id: t, activity_session_id: B?.compositeInstanceId },
    });
    let [Q] = (0, f.A)([t]),
        Y = (0, o.bG)([D.default], () => D.default.getCurrentUser()),
        [z, K] = i.useState(null),
        [J, X] = i.useState(null),
        [Z, $] = i.useState(!1),
        [ee, et] = i.useState(""),
        [ea, en] = i.useState([]),
        ei = ea.length >= 10,
        { results: el, updateSearchText: er } = (0, v.R)({
            selectedDestinations: ea,
            channelFilter: V,
            includeMissingDMs: !0,
        }),
        es = i.useCallback(
            (e) => {
                et(e), er(e);
            },
            [er],
        );
    i.useEffect(() => {
        (async () => {
            let e = P.A.toURLSafe(a);
            if (null == e) return;
            let t = (0, U.uk)(e.pathname),
                n = await fetch(a),
                i = new File([await n.arrayBuffer()], t);
            K(i);
            let l = new FileReader();
            (l.onload = () => X(l?.result?.toString())), l.readAsDataURL(i);
        })();
    }, [a, K]),
        i.useEffect(() => {
            let e;
            return (
                Z &&
                    (e = setTimeout(() => {
                        $(!1);
                    }, 1e3)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [Z]);
    let eo = i.useCallback(async () => {
            await S();
        }, [S]),
        ec = i.useCallback(async () => {
            L.default.track(H.HAw.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: Y?.id,
                application_id: t,
                activity_session_id: B?.compositeInstanceId,
            }),
                await j.Ay.copyImage(a),
                $(!0);
        }, [B?.compositeInstanceId, t, a, Y?.id]),
        ed = i.useCallback(
            (e) => {
                en((t) => {
                    let a = t.findIndex((t) => {
                        let { type: a, id: n } = t;
                        return a === e.type && n === e.id;
                    });
                    if (-1 !== a) {
                        let e = [...t];
                        return e.splice(a, 1), e;
                    }
                    return t.length >= 10 || null == z ? t : (es(""), [...t, e]);
                });
            },
            [z, es],
        ),
        eu = i.useCallback(async () => {
            let e = 0,
                a = 0,
                n = 0;
            for (let t of ea)
                if ("user" === t.type) e++;
                else {
                    let e = M.A.getChannel(t.id);
                    e?.type === H.rbe.GROUP_DM ? a++ : n++;
                }
            async function i(e) {
                let a;
                a = "user" === e.type ? await g.A.ensurePrivateChannel(e.id) : e.id;
                let n = M.A.getChannel(a);
                if (null != z) {
                    let e = new File([z], z.name, { type: z.type });
                    y.A.addFile({
                        file: { file: e, platform: C.xz.WEB, origin: "unknown:activity_share" },
                        channelId: a,
                        draftType: k.C.ChannelMessage,
                    });
                }
                let i = R.A.getUploads(a, k.C.ChannelMessage);
                A.A.sendMessage(
                    a,
                    null != Q
                        ? w.Ay.parse(n, F.intl.formatToPlainString(F.t.jQULqL, { applicationName: `**${Q.name}**` }))
                        : { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                    !1,
                    {
                        eagerDispatch: !1,
                        location: O.Hx.ACTIVITY_SHARE,
                        applicationId: t,
                        attachmentsToUpload: i,
                        onAttachmentUploadError: (e, t, a) => {
                            (0, E.k)({
                                file: e,
                                guildId: n?.getGuildId() ?? null,
                                analyticsLocations: [],
                                code: t,
                                reason: a,
                            });
                        },
                    },
                ),
                    y.A.clearAll(a, k.C.ChannelMessage);
            }
            L.default.track(H.HAw.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: Y?.id,
                application_id: t,
                activity_session_id: B?.compositeInstanceId,
                n_users: e,
                n_gdms: a,
                n_channels: n,
            });
            try {
                await Promise.all(ea.map(i)),
                    null != Q &&
                        (0, d.P0)(
                            (0, u.o)(F.intl.formatToPlainString(F.t.jQULqL, { applicationName: Q.name }), _.Ck.SUCCESS),
                        );
            } catch (e) {
                throw ((0, d.P0)((0, u.o)(F.intl.string(F.t.PanA4J), _.Ck.FAILURE)), e);
            }
            eo();
        }, [B, Q, t, ea, z, eo, Y]),
        e_ = (0, x.s)({ rowData: el, selectedDestinations: ea, handleToggleDestination: ed, disableSelection: ei }),
        ep = i.useRef(null),
        em = (0, I.A)("activity-share-moment-modal", ep),
        eh = i.useMemo(
            () =>
                el.length > 0
                    ? e_
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, n.jsx)(q, {}), rowHeight: 72 },
            [el, e_],
        );
    return null == J
        ? (0, n.jsx)(p.y, {})
        : (0, n.jsx)(r.hD, {
              navigator: em,
              children: (0, n.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, ...i } = e;
                      return (0, n.jsx)(s.Modal, {
                          transitionState: T,
                          onClose: eo,
                          size: "md",
                          title: F.intl.string(F.t.r9qKow),
                          input: (0, n.jsx)(m.I, {
                              query: ee,
                              onChange: es,
                              onClear: () => es(""),
                              placeholder: F.intl.string(F.t["5h0QOP"]),
                              "aria-label": F.intl.string(F.t["5h0QOP"]),
                              autoFocus: !0,
                          }),
                          preview: (0, n.jsxs)(h.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 12,
                              children: [
                                  (0, n.jsx)("img", { alt: a, src: J, className: G.o }),
                                  ea.length >= 10
                                      ? (0, n.jsx)(c.E, {
                                            variant: "text-xs/normal",
                                            children: F.intl.format(F.t.mdE9iE, { maxShares: 10 }),
                                        })
                                      : null,
                              ],
                          }),
                          actions: [
                              ...(j.Ay.canCopyImage(a)
                                  ? [
                                        {
                                            text: Z ? F.intl.string(F.t.t5VZ88) : F.intl.string(F.t.tvUqWn),
                                            onClick: ec,
                                            variant: "secondary",
                                            disabled: Z,
                                        },
                                    ]
                                  : []),
                              {
                                  text: F.intl.string(F.t.TXNS7S),
                                  onClick: eu,
                                  variant: "primary",
                                  disabled: ea.length <= 0,
                              },
                          ],
                          listProps: {
                              ...eh,
                              ...i,
                              innerRole: void 0,
                              ref: (e) => {
                                  (ep.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                          },
                          ...W,
                      });
                  },
              }),
          });
}
