n.d(t, { default: () => V });
var a = n(477900),
    i = n(582128),
    l = n(562708),
    r = n(837381),
    s = n(17928),
    o = n(189213),
    c = n(834730),
    d = n(376357),
    u = n(289873),
    p = n(683438),
    m = n(331322),
    A = n(308528),
    h = n(148494),
    g = n(608299),
    y = n(928039),
    C = n(139286),
    f = n(429913),
    _ = n(115718),
    I = n(61916),
    S = n(274652),
    E = n(823099),
    x = n(451909),
    w = n(151054),
    M = n(734057),
    T = n(31717),
    v = n(576705),
    k = n(522602),
    U = n(287809),
    b = n(174459),
    D = n(741394),
    R = n(998218),
    j = n(19575),
    N = n(933958),
    L = n(652215),
    P = n(381941),
    F = n(660183),
    H = n(868494);
let O = (e, t) =>
    e.type === _.rD.USER
        ? t || null != M.A.getDMChannelFromUserId(e.record.id)
        : e.type === _.rD.GROUP_DM ||
          (e.record.type !== L.rbe.GUILD_FORUM &&
              e.record.type !== L.rbe.GUILD_MEDIA &&
              v.A.can(L.xBc.VIEW_CHANNEL, e.record) &&
              v.A.can(L.xBc.SEND_MESSAGES, e.record) &&
              v.A.can(L.xBc.ATTACH_FILES, e.record));
function G() {
    return (0, a.jsx)("div", {
        className: H.w,
        children: (0, a.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: F.intl.string(F.t.V6nAfF),
        }),
    });
}
function V(e) {
    let { applicationId: t, mediaUrl: n, onClose: _, transitionState: v, ...V } = e,
        B = (0, s.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity());
    (0, C.A)({
        type: l.ImpressionTypes.MODAL,
        name: l.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: { application_id: t, activity_session_id: B?.compositeInstanceId },
    });
    let [q] = (0, f.A)([t]),
        Y = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        [Q, W] = i.useState(null),
        [z, J] = i.useState(null),
        [K, X] = i.useState(!1),
        [Z, $] = i.useState(""),
        [ee, et] = i.useState([]),
        en = ee.length >= 10,
        { results: ea, updateSearchText: ei } = (0, w.R)({
            selectedDestinations: ee,
            channelFilter: O,
            includeMissingDMs: !0,
        }),
        el = i.useCallback(
            (e) => {
                ($(e), ei(e));
            },
            [ei],
        );
    (i.useEffect(() => {
        !(async function () {
            let e = R.A.toURLSafe(n);
            if (null == e) return;
            let t = (0, D.uk)(e.pathname),
                a = await fetch(n),
                i = new File([await a.arrayBuffer()], t);
            W(i);
            let l = new FileReader();
            ((l.onload = () => J(l?.result?.toString())), l.readAsDataURL(i));
        })();
    }, [n, W]),
        i.useEffect(() => {
            let e;
            return (
                K &&
                    (e = setTimeout(() => {
                        X(!1);
                    }, 1e3)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [K]));
    let er = i.useCallback(async () => {
            await _();
        }, [_]),
        es = i.useCallback(async () => {
            (b.default.track(L.HAw.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: Y?.id,
                application_id: t,
                activity_session_id: B?.compositeInstanceId,
            }),
                await j.Ay.copyImage(n),
                X(!0));
        }, [B?.compositeInstanceId, t, n, Y?.id]),
        eo = i.useCallback(
            (e) => {
                et((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: a } = t;
                        return n === e.type && a === e.id;
                    });
                    if (-1 !== n) {
                        let e = [...t];
                        return (e.splice(n, 1), e);
                    }
                    return t.length >= 10 || null == Q ? t : (el(""), [...t, e]);
                });
            },
            [Q, el],
        ),
        ec = i.useCallback(async () => {
            let e = 0,
                n = 0,
                a = 0;
            for (let t of ee)
                if ("user" === t.type) e++;
                else {
                    let e = M.A.getChannel(t.id);
                    e?.type === L.rbe.GROUP_DM ? n++ : a++;
                }
            async function i(e) {
                let n;
                n = "user" === e.type ? await A.A.ensurePrivateChannel(e.id) : e.id;
                let a = M.A.getChannel(n);
                if (null != Q) {
                    let e = new File([Q], Q.name, { type: Q.type });
                    g.A.addFile({
                        file: { file: e, platform: S.x.WEB, origin: "unknown:activity_share" },
                        channelId: n,
                        draftType: T.C.ChannelMessage,
                    });
                }
                let i = k.A.getUploads(n, T.C.ChannelMessage);
                (h.A.sendMessage(
                    n,
                    null != q
                        ? x.Ay.parse(a, F.intl.formatToPlainString(F.t.jQULqL, { applicationName: `**${q.name}**` }))
                        : { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                    !1,
                    {
                        eagerDispatch: !1,
                        location: P.Hx.ACTIVITY_SHARE,
                        applicationId: t,
                        attachmentsToUpload: i,
                        onAttachmentUploadError: (e, t, n) => {
                            (0, E.k)({
                                file: e,
                                guildId: a?.getGuildId() ?? null,
                                analyticsLocations: [],
                                code: t,
                                reason: n,
                            });
                        },
                    },
                ),
                    g.A.clearAll(n, T.C.ChannelMessage));
            }
            b.default.track(L.HAw.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: Y?.id,
                application_id: t,
                activity_session_id: B?.compositeInstanceId,
                n_users: e,
                n_gdms: n,
                n_channels: a,
            });
            try {
                (await Promise.all(ee.map(i)),
                    null != q &&
                        (0, d.P0)(
                            (0, d.ox)(
                                F.intl.formatToPlainString(F.t.jQULqL, { applicationName: q.name }),
                                d.Ck.SUCCESS,
                            ),
                        ));
            } catch (e) {
                throw ((0, d.P0)((0, d.ox)(F.intl.string(F.t.PanA4J), d.Ck.FAILURE)), e);
            }
            er();
        }, [B, q, t, ee, Q, er, Y]),
        ed = (0, I.s)({ rowData: ea, selectedDestinations: ee, handleToggleDestination: eo, disableSelection: en }),
        eu = i.useRef(null),
        ep = (0, y.A)("activity-share-moment-modal", eu),
        em = i.useMemo(
            () =>
                ea.length > 0
                    ? ed
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, a.jsx)(G, {}), rowHeight: 72 },
            [ea, ed],
        );
    return null == z
        ? (0, a.jsx)(u.y, {})
        : (0, a.jsx)(r.hD, {
              navigator: ep,
              children: (0, a.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, ...i } = e;
                      return (0, a.jsx)(o.a, {
                          transitionState: v,
                          onClose: er,
                          size: "md",
                          title: F.intl.string(F.t.r9qKow),
                          input: (0, a.jsx)(p.I, {
                              query: Z,
                              onChange: el,
                              onClear: () => el(""),
                              placeholder: F.intl.string(F.t["5h0QOP"]),
                              "aria-label": F.intl.string(F.t["5h0QOP"]),
                              autoFocus: !0,
                          }),
                          preview: (0, a.jsxs)(m.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 12,
                              children: [
                                  (0, a.jsx)("img", { alt: n, src: z, className: H.o }),
                                  ee.length >= 10
                                      ? (0, a.jsx)(c.E, {
                                            variant: "text-xs/normal",
                                            children: F.intl.format(F.t.mdE9iE, { maxShares: 10 }),
                                        })
                                      : null,
                              ],
                          }),
                          actions: [
                              ...(j.Ay.canCopyImage(n)
                                  ? [
                                        {
                                            text: K ? F.intl.string(F.t.t5VZ88) : F.intl.string(F.t.tvUqWn),
                                            onClick: es,
                                            variant: "secondary",
                                            disabled: K,
                                        },
                                    ]
                                  : []),
                              {
                                  text: F.intl.string(F.t.TXNS7S),
                                  onClick: ec,
                                  variant: "primary",
                                  disabled: ee.length <= 0,
                              },
                          ],
                          listProps: {
                              ...em,
                              ...i,
                              innerRole: void 0,
                              ref: (e) => {
                                  ((eu.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                          },
                          ...V,
                      });
                  },
              }),
          });
}
