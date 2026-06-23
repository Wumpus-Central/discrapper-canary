n.d(t, { default: () => q });
var a = n(627968),
    i = n(64700),
    l = n(562708),
    r = n(837381),
    s = n(189213),
    o = n(17928),
    c = n(834730),
    d = n(691540),
    u = n(857250),
    p = n(97483),
    m = n(289873),
    A = n(892547),
    h = n(331322),
    g = n(308528),
    y = n(493336),
    C = n(608299),
    f = n(565150),
    _ = n(928039),
    I = n(139286),
    S = n(429913),
    E = n(115718),
    x = n(61916),
    M = n(567231),
    w = n(451909),
    T = n(151054),
    v = n(734057),
    k = n(31717),
    U = n(576705),
    b = n(522602),
    D = n(287809),
    R = n(174459),
    j = n(741394),
    N = n(998218),
    L = n(19575),
    P = n(933958),
    F = n(652215),
    H = n(381941),
    O = n(375708),
    G = n(584437);
let V = (e, t) =>
    e.type === E.rD.USER
        ? t || null != v.A.getDMChannelFromUserId(e.record.id)
        : e.type === E.rD.GROUP_DM ||
          (e.record.type !== F.rbe.GUILD_FORUM &&
              e.record.type !== F.rbe.GUILD_MEDIA &&
              U.A.can(F.xBc.VIEW_CHANNEL, e.record) &&
              U.A.can(F.xBc.SEND_MESSAGES, e.record) &&
              U.A.can(F.xBc.ATTACH_FILES, e.record));
function B() {
    return (0, a.jsx)("div", {
        className: G.w,
        children: (0, a.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: O.intl.string(O.t.V6nAfF),
        }),
    });
}
function q(e) {
    let { applicationId: t, mediaUrl: n, onClose: E, transitionState: U, ...q } = e,
        Y = (0, o.bG)([P.Ay], () => P.Ay.getCurrentEmbeddedActivity());
    (0, I.A)({
        type: l.ImpressionTypes.MODAL,
        name: l.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: { application_id: t, activity_session_id: Y?.compositeInstanceId },
    });
    let [Q] = (0, S.A)([t]),
        W = (0, o.bG)([D.default], () => D.default.getCurrentUser()),
        [z, J] = i.useState(null),
        [K, X] = i.useState(null),
        [Z, $] = i.useState(!1),
        [ee, et] = i.useState(""),
        [en, ea] = i.useState([]),
        ei = en.length >= 10,
        { results: el, updateSearchText: er } = (0, T.R)({
            selectedDestinations: en,
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
        !(async function () {
            let e = N.A.toURLSafe(n);
            if (null == e) return;
            let t = (0, j.uk)(e.pathname),
                a = await fetch(n),
                i = new File([await a.arrayBuffer()], t);
            J(i);
            let l = new FileReader();
            (l.onload = () => X(l?.result?.toString())), l.readAsDataURL(i);
        })();
    }, [n, J]),
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
            await E();
        }, [E]),
        ec = i.useCallback(async () => {
            R.default.track(F.HAw.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: W?.id,
                application_id: t,
                activity_session_id: Y?.compositeInstanceId,
            }),
                await L.Ay.copyImage(n),
                $(!0);
        }, [Y?.compositeInstanceId, t, n, W?.id]),
        ed = i.useCallback(
            (e) => {
                ea((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: a } = t;
                        return n === e.type && a === e.id;
                    });
                    if (-1 !== n) {
                        let e = [...t];
                        return e.splice(n, 1), e;
                    }
                    return t.length >= 10 || null == z ? t : (es(""), [...t, e]);
                });
            },
            [z, es],
        ),
        eu = i.useCallback(async () => {
            let e = 0,
                n = 0,
                a = 0;
            for (let t of en)
                if ("user" === t.type) e++;
                else {
                    let e = v.A.getChannel(t.id);
                    e?.type === F.rbe.GROUP_DM ? n++ : a++;
                }
            async function i(e) {
                let n;
                n = "user" === e.type ? await g.A.ensurePrivateChannel(e.id) : e.id;
                let a = v.A.getChannel(n);
                if (null != z) {
                    let e = new File([z], z.name, { type: z.type });
                    C.A.addFile({
                        file: { file: e, platform: f.xz.WEB, origin: "unknown:activity_share" },
                        channelId: n,
                        draftType: k.C.ChannelMessage,
                    });
                }
                let i = b.A.getUploads(n, k.C.ChannelMessage);
                y.A.sendMessage(
                    n,
                    null != Q
                        ? w.Ay.parse(a, O.intl.formatToPlainString(O.t.jQULqL, { applicationName: `**${Q.name}**` }))
                        : { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                    !1,
                    {
                        eagerDispatch: !1,
                        location: H.Hx.ACTIVITY_SHARE,
                        applicationId: t,
                        attachmentsToUpload: i,
                        onAttachmentUploadError: (e, t, n) => {
                            (0, M.k)({
                                file: e,
                                guildId: a?.getGuildId() ?? null,
                                analyticsLocations: [],
                                code: t,
                                reason: n,
                            });
                        },
                    },
                ),
                    C.A.clearAll(n, k.C.ChannelMessage);
            }
            R.default.track(F.HAw.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: W?.id,
                application_id: t,
                activity_session_id: Y?.compositeInstanceId,
                n_users: e,
                n_gdms: n,
                n_channels: a,
            });
            try {
                await Promise.all(en.map(i)),
                    null != Q &&
                        (0, d.P0)(
                            (0, u.o)(O.intl.formatToPlainString(O.t.jQULqL, { applicationName: Q.name }), p.Ck.SUCCESS),
                        );
            } catch (e) {
                throw ((0, d.P0)((0, u.o)(O.intl.string(O.t.PanA4J), p.Ck.FAILURE)), e);
            }
            eo();
        }, [Y, Q, t, en, z, eo, W]),
        ep = (0, x.s)({ rowData: el, selectedDestinations: en, handleToggleDestination: ed, disableSelection: ei }),
        em = i.useRef(null),
        eA = (0, _.A)("activity-share-moment-modal", em),
        eh = i.useMemo(
            () =>
                el.length > 0
                    ? ep
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, a.jsx)(B, {}), rowHeight: 72 },
            [el, ep],
        );
    return null == K
        ? (0, a.jsx)(m.y, {})
        : (0, a.jsx)(r.hD, {
              navigator: eA,
              children: (0, a.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, ...i } = e;
                      return (0, a.jsx)(s.Modal, {
                          transitionState: U,
                          onClose: eo,
                          size: "md",
                          title: O.intl.string(O.t.r9qKow),
                          input: (0, a.jsx)(A.I, {
                              query: ee,
                              onChange: es,
                              onClear: () => es(""),
                              placeholder: O.intl.string(O.t["5h0QOP"]),
                              "aria-label": O.intl.string(O.t["5h0QOP"]),
                              autoFocus: !0,
                          }),
                          preview: (0, a.jsxs)(h.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 12,
                              children: [
                                  (0, a.jsx)("img", { alt: n, src: K, className: G.o }),
                                  en.length >= 10
                                      ? (0, a.jsx)(c.E, {
                                            variant: "text-xs/normal",
                                            children: O.intl.format(O.t.mdE9iE, { maxShares: 10 }),
                                        })
                                      : null,
                              ],
                          }),
                          actions: [
                              ...(L.Ay.canCopyImage(n)
                                  ? [
                                        {
                                            text: Z ? O.intl.string(O.t.t5VZ88) : O.intl.string(O.t.tvUqWn),
                                            onClick: ec,
                                            variant: "secondary",
                                            disabled: Z,
                                        },
                                    ]
                                  : []),
                              {
                                  text: O.intl.string(O.t.TXNS7S),
                                  onClick: eu,
                                  variant: "primary",
                                  disabled: en.length <= 0,
                              },
                          ],
                          listProps: {
                              ...eh,
                              ...i,
                              innerRole: void 0,
                              ref: (e) => {
                                  (em.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                          },
                          ...q,
                      });
                  },
              }),
          });
}
