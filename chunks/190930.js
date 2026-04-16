a.d(t, { default: () => H });
var n = a(627968),
    i = a(64700),
    l = a(110259),
    s = a(837381),
    r = a(158954),
    o = a(311907),
    c = a(397927),
    d = a(308528),
    u = a(843472),
    p = a(608299),
    _ = a(565150),
    m = a(928039),
    h = a(139286),
    g = a(429913),
    A = a(629357),
    y = a(61916),
    I = a(301169),
    C = a(451909),
    b = a(151054),
    f = a(734057),
    S = a(31717),
    x = a(576705),
    T = a(522602),
    w = a(287809),
    E = a(954571),
    v = a(741394),
    M = a(998218),
    R = a(837921),
    k = a(933958),
    D = a(652215),
    L = a(381941),
    U = a(985018),
    j = a(584437);
let N = (e, t) =>
    e.type === A.rD.USER
        ? t || null != f.A.getDMChannelFromUserId(e.record.id)
        : e.type === A.rD.GROUP_DM ||
          (e.record.type !== D.rbe.GUILD_FORUM &&
              e.record.type !== D.rbe.GUILD_MEDIA &&
              x.A.can(D.xBc.VIEW_CHANNEL, e.record) &&
              x.A.can(D.xBc.SEND_MESSAGES, e.record) &&
              x.A.can(D.xBc.ATTACH_FILES, e.record));
function P() {
    return (0, n.jsx)("div", {
        className: j.w,
        children: (0, n.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: U.intl.string(U.t.V6nAfF),
        }),
    });
}
function H(e) {
    let { applicationId: t, mediaUrl: a, onClose: A, transitionState: x, ...H } = e,
        O = (0, o.bG)([k.Ay], () => k.Ay.getCurrentEmbeddedActivity());
    (0, h.A)({
        type: l.ImpressionTypes.MODAL,
        name: l.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: { application_id: t, activity_session_id: O?.compositeInstanceId },
    });
    let [F] = (0, g.A)([t]),
        G = (0, o.bG)([w.default], () => w.default.getCurrentUser()),
        [V, W] = i.useState(null),
        [q, B] = i.useState(null),
        [Q, Y] = i.useState(!1),
        [z, J] = i.useState(""),
        [K, $] = i.useState([]),
        X = K.length >= 10,
        { results: Z, updateSearchText: ee } = (0, b.R)({
            selectedDestinations: K,
            channelFilter: N,
            includeMissingDMs: !0,
        }),
        et = i.useCallback(
            (e) => {
                J(e), ee(e);
            },
            [ee],
        );
    i.useEffect(() => {
        (async () => {
            let e = M.A.toURLSafe(a);
            if (null == e) return;
            let t = (0, v.uk)(e.pathname),
                n = await fetch(a),
                i = new File([await n.arrayBuffer()], t);
            W(i);
            let l = new FileReader();
            (l.onload = () => B(l?.result?.toString())), l.readAsDataURL(i);
        })();
    }, [a, W]),
        i.useEffect(() => {
            let e;
            return (
                Q &&
                    (e = setTimeout(() => {
                        Y(!1);
                    }, 1e3)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [Q]);
    let ea = i.useCallback(async () => {
            await A();
        }, [A]),
        en = i.useCallback(async () => {
            E.default.track(D.HAw.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: G?.id,
                application_id: t,
                activity_session_id: O?.compositeInstanceId,
            }),
                await R.Ay.copyImage(a),
                Y(!0);
        }, [O?.compositeInstanceId, t, a, G?.id]),
        ei = i.useCallback(
            (e) => {
                $((t) => {
                    let a = t.findIndex((t) => {
                        let { type: a, id: n } = t;
                        return a === e.type && n === e.id;
                    });
                    if (-1 !== a) {
                        let e = [...t];
                        return e.splice(a, 1), e;
                    }
                    return t.length >= 10 || null == V ? t : (et(""), [...t, e]);
                });
            },
            [V, et],
        ),
        el = i.useCallback(async () => {
            let e = 0,
                a = 0,
                n = 0;
            for (let t of K)
                if ("user" === t.type) e++;
                else {
                    let e = f.A.getChannel(t.id);
                    e?.type === D.rbe.GROUP_DM ? a++ : n++;
                }
            async function i(e) {
                let a;
                a = "user" === e.type ? await d.A.ensurePrivateChannel(e.id) : e.id;
                let n = f.A.getChannel(a);
                if (null != V) {
                    let e = new File([V], V.name, { type: V.type });
                    p.A.addFile({
                        file: { file: e, platform: _.xz.WEB, origin: "unknown:activity_share" },
                        channelId: a,
                        draftType: S.C.ChannelMessage,
                    });
                }
                let i = T.A.getUploads(a, S.C.ChannelMessage);
                u.A.sendMessage(
                    a,
                    null != F
                        ? C.Ay.parse(n, U.intl.formatToPlainString(U.t.jQULqL, { applicationName: `**${F.name}**` }))
                        : { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                    !1,
                    {
                        eagerDispatch: !1,
                        location: L.Hx.ACTIVITY_SHARE,
                        applicationId: t,
                        attachmentsToUpload: i,
                        onAttachmentUploadError: (e, t, a) => {
                            (0, I.k)({
                                file: e,
                                guildId: n?.getGuildId() ?? null,
                                analyticsLocations: [],
                                code: t,
                                reason: a,
                            });
                        },
                    },
                ),
                    p.A.clearAll(a, S.C.ChannelMessage);
            }
            E.default.track(D.HAw.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: G?.id,
                application_id: t,
                activity_session_id: O?.compositeInstanceId,
                n_users: e,
                n_gdms: a,
                n_channels: n,
            });
            try {
                await Promise.all(K.map(i)),
                    null != F &&
                        (0, c.showToast)(
                            (0, c.createToast)(
                                U.intl.formatToPlainString(U.t.jQULqL, { applicationName: F.name }),
                                c.ToastType.SUCCESS,
                            ),
                        );
            } catch (e) {
                throw ((0, c.showToast)((0, c.createToast)(U.intl.string(U.t.PanA4J), c.ToastType.FAILURE)), e);
            }
            ea();
        }, [O, F, t, K, V, ea, G]),
        es = (0, y.s)({ rowData: Z, selectedDestinations: K, handleToggleDestination: ei, disableSelection: X }),
        er = i.useRef(null),
        eo = (0, m.A)("activity-share-moment-modal", er),
        ec = i.useMemo(
            () =>
                Z.length > 0
                    ? es
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, n.jsx)(P, {}), rowHeight: 72 },
            [Z, es],
        );
    return null == q
        ? (0, n.jsx)(c.y$y, {})
        : (0, n.jsx)(s.hD, {
              navigator: eo,
              children: (0, n.jsx)(s.PR, {
                  children: (e) => {
                      let { ref: t, ...i } = e;
                      return (0, n.jsx)(r.Modal, {
                          transitionState: x,
                          onClose: ea,
                          size: "md",
                          title: U.intl.string(U.t.r9qKow),
                          input: (0, n.jsx)(c.IWV, {
                              query: z,
                              onChange: et,
                              onClear: () => et(""),
                              placeholder: U.intl.string(U.t["5h0QOP"]),
                              "aria-label": U.intl.string(U.t["5h0QOP"]),
                              autoFocus: !0,
                          }),
                          preview: (0, n.jsxs)(c.BJc, {
                              direction: "vertical",
                              align: "center",
                              gap: 12,
                              children: [
                                  (0, n.jsx)("img", { alt: a, src: q, className: j.o }),
                                  K.length >= 10
                                      ? (0, n.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            children: U.intl.format(U.t.mdE9iE, { maxShares: 10 }),
                                        })
                                      : null,
                              ],
                          }),
                          actions: [
                              ...(R.Ay.canCopyImage(a)
                                  ? [
                                        {
                                            text: Q ? U.intl.string(U.t.t5VZ88) : U.intl.string(U.t.tvUqWn),
                                            onClick: en,
                                            variant: "secondary",
                                            disabled: Q,
                                        },
                                    ]
                                  : []),
                              {
                                  text: U.intl.string(U.t.TXNS7S),
                                  onClick: el,
                                  variant: "primary",
                                  disabled: K.length <= 0,
                              },
                          ],
                          listProps: {
                              ...ec,
                              ...i,
                              innerRole: void 0,
                              ref: (e) => {
                                  (er.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                          },
                          ...H,
                      });
                  },
              }),
          });
}
