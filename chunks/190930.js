i.d(t, { default: () => q });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(110259),
    d = i(158954),
    o = i(311907),
    c = i(421380),
    u = i(397927),
    m = i(308528),
    A = i(681579),
    g = i(843472),
    p = i(608299),
    I = i(565150),
    h = i(139286),
    f = i(429913),
    y = i(571694),
    S = i(47167),
    E = i(301169),
    T = i(451909),
    _ = i(734057),
    C = i(31717),
    N = i(71393),
    x = i(535820),
    w = i(576705),
    v = i(994500),
    O = i(522602),
    D = i(287809),
    U = i(954571),
    k = i(486020),
    j = i(735547),
    M = i(741394),
    b = i(240248),
    L = i(998218),
    R = i(427262),
    G = i(837921),
    F = i(933958),
    P = i(652215),
    V = i(172799),
    H = i(381941),
    K = i(985018),
    B = i(898725);
function q(e) {
    let { applicationId: t, mediaUrl: i, onClose: l, transitionState: s, ...c } = e,
        y = (0, o.bG)([F.Ay], () => F.Ay.getCurrentEmbeddedActivity());
    (0, h.A)({
        type: r.ImpressionTypes.MODAL,
        name: r.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: { application_id: t, activity_session_id: y?.compositeInstanceId },
    });
    let [S] = (0, f.A)([t]),
        N = (0, o.bG)([D.default], () => D.default.getCurrentUser()),
        [v, k] = a.useState(""),
        [b, R] = a.useState([]),
        [q, Y] = a.useState(null),
        [J, Q] = a.useState(null),
        [W, Z] = a.useState(!1);
    a.useEffect(() => {
        (async () => {
            let e = L.A.toURLSafe(i);
            if (null == e) return;
            let t = (0, M.uk)(e.pathname),
                n = await fetch(i),
                a = new File([await n.arrayBuffer()], t);
            Y(a);
            let l = new FileReader();
            (l.onload = () => Q(l?.result?.toString())), l.readAsDataURL(a);
        })();
    }, [i, Y]);
    let X = (0, o.yK)([x.A, w.A], () =>
        x.A.getInviteSuggestionRows().filter(
            (e) => e.type === j.OK.FRIEND || e.type === j.OK.DM || w.A.can(P.xBc.ATTACH_FILES, e.item),
        ),
    );
    a.useEffect(() => {
        (0, A.t)({ omitUserIds: new Set(), applicationId: t, inviteTargetType: V.yV.EMBEDDED_APPLICATION });
    }, [t]),
        a.useEffect(() => (0, A.B)(v), [v]),
        a.useEffect(() => {
            let e;
            return (
                W &&
                    (e = setTimeout(() => {
                        Z(!1);
                    }, 1e3)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [W]);
    let $ = a.useCallback(async () => {
            await l();
        }, [l]),
        ee = a.useCallback(async () => {
            U.default.track(P.HAw.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: N?.id,
                application_id: t,
                activity_session_id: y?.compositeInstanceId,
            }),
                await G.Ay.copyImage(i),
                Z(!0);
        }, [y?.compositeInstanceId, t, i, N?.id]),
        et = a.useCallback(async () => {
            let e = 0,
                i = 0,
                n = 0;
            async function a(a) {
                let l;
                switch (a.type) {
                    case j.OK.DM:
                    case j.OK.FRIEND:
                        (l = await m.A.ensurePrivateChannel(a.id)), e++;
                        break;
                    case j.OK.GROUP_DM:
                        (l = a.id), i++;
                        break;
                    case j.OK.CHANNEL:
                        (l = a.id), n++;
                        break;
                    default:
                        return;
                }
                let s = _.A.getChannel(l);
                if (null != q) {
                    let e = new File([q], q.name, { type: q.type });
                    p.A.addFile({
                        file: { file: e, platform: I.xz.WEB, origin: "unknown:activity_share" },
                        channelId: l,
                        draftType: C.C.ChannelMessage,
                    });
                }
                let r = O.A.getUploads(l, C.C.ChannelMessage);
                g.A.sendMessage(
                    l,
                    null != S
                        ? T.Ay.parse(s, K.intl.formatToPlainString(K.t.jQULqL, { applicationName: `**${S.name}**` }))
                        : { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                    !1,
                    {
                        eagerDispatch: !1,
                        location: H.Hx.ACTIVITY_SHARE,
                        applicationId: t,
                        attachmentsToUpload: r,
                        onAttachmentUploadError: (e, t, i) => {
                            (0, E.k)({
                                file: e,
                                guildId: s?.getGuildId() ?? null,
                                analyticsLocations: [],
                                code: t,
                                reason: i,
                            });
                        },
                    },
                ),
                    p.A.clearAll(l, C.C.ChannelMessage);
            }
            let l = b.map((e) => a(e));
            U.default.track(P.HAw.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: N?.id,
                application_id: t,
                activity_session_id: y?.compositeInstanceId,
                n_users: e,
                n_gdms: i,
                n_channels: n,
            });
            try {
                await Promise.all(l),
                    null != S &&
                        (0, u.showToast)(
                            (0, u.createToast)(
                                K.intl.formatToPlainString(K.t.jQULqL, { applicationName: S.name }),
                                u.ToastType.SUCCESS,
                            ),
                        );
            } catch (e) {
                throw ((0, u.showToast)((0, u.createToast)(K.intl.string(K.t.PanA4J), u.ToastType.FAILURE)), e);
            }
            $();
        }, [y, S, t, b, q, $, N]);
    return null == J
        ? (0, n.jsx)(u.y$y, {})
        : (0, n.jsx)(d.Modal, {
              transitionState: s,
              onClose: $,
              size: "md",
              title: K.intl.string(K.t.r9qKow),
              input: (0, n.jsx)(u.IWV, {
                  placeholder: K.intl.string(K.t["5h0QOP"]),
                  "aria-label": K.intl.string(K.t["5h0QOP"]),
                  query: v,
                  onChange: (e) => k(e),
                  onClear: () => k(""),
              }),
              preview: (0, n.jsxs)(u.BJc, {
                  direction: "vertical",
                  align: "center",
                  gap: 12,
                  children: [
                      (0, n.jsx)("img", { alt: i, src: J, className: B.oz }),
                      b.length >= 10
                          ? (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: K.intl.format(K.t.mdE9iE, { maxShares: 10 }),
                            })
                          : null,
                  ],
              }),
              actions: [
                  ...(G.Ay.canCopyImage(i)
                      ? [
                            {
                                text: W ? K.intl.string(K.t.t5VZ88) : K.intl.string(K.t.tvUqWn),
                                onClick: ee,
                                variant: "secondary",
                                disabled: W,
                            },
                        ]
                      : []),
                  { text: K.intl.string(K.t.TXNS7S), onClick: et, variant: "primary", disabled: b.length <= 0 },
              ],
              ...c,
              children: X.map((e, t) =>
                  (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              0 === t ? null : (0, n.jsx)("div", { className: B.ek }),
                              (0, n.jsx)(z, {
                                  row: e,
                                  onClick: () =>
                                      (() => {
                                          if (-1 !== b.findIndex((t) => t.id === e.item.id))
                                              R(b.filter((t) => t.id !== e.item.id));
                                          else {
                                              if (b.length >= 10) return;
                                              null != q && R([...b, { id: e.item.id, type: e.type }]);
                                          }
                                      })(),
                                  checked: b.some((t) => t.id === e.item.id),
                                  disabled: !b.some((t) => t.id === e.item.id) && b.length >= 10,
                              }),
                          ],
                      },
                      e.item.id,
                  ),
              ),
          });
}
function z(e) {
    let { row: t, onClick: i, checked: a, disabled: l } = e,
        r = null,
        d = null,
        o = null;
    switch (t.type) {
        case j.OK.DM:
        case j.OK.FRIEND:
            (r = (0, n.jsx)(u.euF, {
                size: u._3J.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                "aria-label": t.item.username,
            })),
                (d = R.Ay.getName(t.item)),
                (o = R.Ay.getUserTag(t.item));
            break;
        case j.OK.GROUP_DM: {
            let e = (0, y.Y)(t.item),
                i = (0, S.m1)(t.item, D.default, v.A);
            (r = (0, n.jsx)(u.euF, { src: e, "aria-label": i, size: u._3J.SIZE_40 })),
                (d = (0, S.m1)(t.item, D.default, v.A));
            break;
        }
        case j.OK.CHANNEL: {
            let e = t.item,
                i = N.A.getGuild(e.guild_id);
            if (null == i) return null;
            if (((d = `#${(0, S.m1)(e, D.default, v.A)}`), (o = i.name), null != i.icon)) {
                let t = k.Ay.getGuildIconURL({ id: e.guild_id, icon: i.icon, size: 40 });
                r = (0, n.jsx)(u.euF, { src: t, "aria-label": d, size: u._3J.SIZE_40 });
            } else {
                let e = (0, b.oN)(i.name);
                r = (0, n.jsx)("div", {
                    className: B.q9,
                    "aria-hidden": !0,
                    children: (0, n.jsx)(u.Text, { variant: "text-md/semibold", children: e }),
                });
            }
        }
    }
    return (0, n.jsxs)(u.DUT, {
        onClick: i,
        className: s()(B.qd, { [B.r9]: l }),
        children: [
            (0, n.jsxs)("div", {
                className: B.M4,
                children: [
                    (0, n.jsx)("div", { className: B.ud, children: r }),
                    (0, n.jsxs)("div", {
                        className: B.r2,
                        children: [
                            (0, n.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: s()(B._k, { [B.r9]: l }),
                                children: d,
                            }),
                            (0, n.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                className: s()(B.kF, { [B.r9]: l }),
                                children: o,
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.Kj, { disabled: l, value: a, type: c.Xo.INVERTED, displayOnly: !0, className: B.Rd }),
        ],
    });
}
