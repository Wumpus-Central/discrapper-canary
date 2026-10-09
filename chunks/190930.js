n.d(t, { default: () => V });
var a = n(477900),
    i = n(582128),
    l = n(562708),
    r = n(837381),
    s = n(17928),
    o = n(189213),
    c = n(834730),
    d = n(858899),
    u = n(289873),
    p = n(683438),
    m = n(331322),
    h = n(308528),
    A = n(148494),
    g = n(608299),
    y = n(928039),
    f = n(139286),
    _ = n(429913),
    C = n(115718),
    I = n(61916),
    E = n(274652),
    S = n(823099),
    x = n(451909),
    v = n(151054),
    w = n(734057),
    M = n(31717),
    T = n(576705),
    b = n(522602),
    D = n(287809),
    k = n(174459),
    R = n(741394),
    U = n(998218),
    j = n(19575),
    N = n(933958),
    P = n(652215),
    L = n(381941),
    H = n(660183),
    O = n(868494);
let F = (e, t) =>
    e.type === C.rD.USER
        ? t || null != w.A.getDMChannelFromUserId(e.record.id)
        : e.type === C.rD.GROUP_DM ||
          (e.record.type !== P.rbe.GUILD_FORUM &&
              e.record.type !== P.rbe.GUILD_MEDIA &&
              T.A.can(P.xBc.VIEW_CHANNEL, e.record) &&
              T.A.can(P.xBc.SEND_MESSAGES, e.record) &&
              T.A.can(P.xBc.ATTACH_FILES, e.record));
function G() {
    return (0, a.jsx)("div", {
        className: O.w,
        children: (0, a.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: H.intl.string(H.t.V6nAfF),
        }),
    });
}
function V(e) {
    let { applicationId: t, mediaUrl: n, onClose: C, transitionState: T, ...V } = e,
        B = (0, s.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity());
    (0, f.A)({
        type: l.ImpressionTypes.MODAL,
        name: l.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: { application_id: t, activity_session_id: B?.compositeInstanceId },
    });
    let [q] = (0, _.A)([t]),
        Y = (0, s.bG)([D.default], () => D.default.getCurrentUser()),
        [Q, W] = i.useState(null),
        [z, J] = i.useState(null),
        [K, X] = i.useState(!1),
        [Z, $] = i.useState(""),
        [ee, et] = i.useState([]),
        en = ee.length >= 10,
        { results: ea, updateSearchText: ei } = (0, v.R)({
            selectedDestinations: ee,
            channelFilter: F,
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
            let e = U.A.toURLSafe(n);
            if (null == e) return;
            let t = (0, R.uk)(e.pathname),
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
            await C();
        }, [C]),
        es = i.useCallback(async () => {
            (k.default.track(P.HAw.ACTIVITY_SHARE_MOMENT_COPY, {
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
                    let e = w.A.getChannel(t.id);
                    e?.type === P.rbe.GROUP_DM ? n++ : a++;
                }
            async function i(e) {
                let n;
                n = "user" === e.type ? await h.A.ensurePrivateChannel(e.id) : e.id;
                let a = w.A.getChannel(n);
                if (null != Q) {
                    let e = new File([Q], Q.name, { type: Q.type });
                    g.A.addFile({
                        file: { file: e, platform: E.x.WEB, origin: "unknown:activity_share" },
                        channelId: n,
                        draftType: M.C.ChannelMessage,
                    });
                }
                let i = b.A.getUploads(n, M.C.ChannelMessage);
                (A.A.sendMessage(
                    n,
                    null != q
                        ? x.Ay.parse(a, H.intl.formatToPlainString(H.t.jQULqL, { applicationName: `**${q.name}**` }))
                        : { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                    !1,
                    {
                        eagerDispatch: !1,
                        location: L.Hx.ACTIVITY_SHARE,
                        applicationId: t,
                        attachmentsToUpload: i,
                        onAttachmentUploadError: (e, t, n) => {
                            (0, S.k)({
                                file: e,
                                guildId: a?.getGuildId() ?? null,
                                analyticsLocations: [],
                                code: t,
                                reason: n,
                            });
                        },
                    },
                ),
                    g.A.clearAll(n, M.C.ChannelMessage));
            }
            k.default.track(P.HAw.ACTIVITY_SHARE_MOMENT_SEND, {
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
                        (0, d.P0)({
                            text: H.intl.formatToPlainString(H.t.jQULqL, { applicationName: q.name }),
                            variant: "success",
                        }));
            } catch (e) {
                throw ((0, d.P0)({ text: H.intl.string(H.t.PanA4J), variant: "critical" }), e);
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
                          transitionState: T,
                          onClose: er,
                          size: "md",
                          title: H.intl.string(H.t.r9qKow),
                          input: (0, a.jsx)(p.I, {
                              query: Z,
                              onChange: el,
                              onClear: () => el(""),
                              placeholder: H.intl.string(H.t["5h0QOP"]),
                              "aria-label": H.intl.string(H.t["5h0QOP"]),
                              autoFocus: !0,
                          }),
                          preview: (0, a.jsxs)(m.B, {
                              direction: "vertical",
                              align: "center",
                              gap: 12,
                              children: [
                                  (0, a.jsx)("img", { alt: n, src: z, className: O.o }),
                                  ee.length >= 10
                                      ? (0, a.jsx)(c.E, {
                                            variant: "text-xs/normal",
                                            children: H.intl.format(H.t.mdE9iE, { maxShares: 10 }),
                                        })
                                      : null,
                              ],
                          }),
                          actions: [
                              ...(j.Ay.canCopyImage(n)
                                  ? [
                                        {
                                            text: K ? H.intl.string(H.t.t5VZ88) : H.intl.string(H.t.tvUqWn),
                                            onClick: es,
                                            variant: "secondary",
                                            disabled: K,
                                        },
                                    ]
                                  : []),
                              {
                                  text: H.intl.string(H.t.TXNS7S),
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
